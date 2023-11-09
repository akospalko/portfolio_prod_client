// Header for all layouts
import React, { useEffect } from 'react';
import { MenuOpenIcon, MenuCloseIcon, LogoIcon } from '../components/SVGComponents';
import { NavLink } from "react-router-dom";
import Navigation from './Navigation';
import { useMediaQuery } from 'react-responsive';
import { useModalContext } from '../context/ModalContext';
import LanguageToggler from '../components/LanguageToggler';
import AvailabilityAndProfileLinks from '../data/AvailabilityAndProfileLinks';
import './Header.css';

export default function Header() {
  // CONSTANT
  const iconSizeMenuToggler = '25px';
  const iconSizeLogo = '40px';
  const iconColorMenuToggler = 'var(--color_5)';
  const iconColorHighlightedContacts = 'var(--color_4)';

  // HOOK
  const isBelow768Px = useMediaQuery( { query: '(max-width: 767px)' } );
  const { availabilityAndProfileLinks } = AvailabilityAndProfileLinks();
  
  // CONTEXT 
  const { isMenuToggled, toggleMenuHandler } = useModalContext();
  
  // EFFECT
  // Close modal when screen size is changed to large screen
  useEffect( () => {
    if( isMenuToggled && !isBelow768Px ) {
      toggleMenuHandler( true );
    }
  }, [ isMenuToggled, isBelow768Px ])

  // ELEMENTS
  // Logo
  const logo = (
    <div 
      className='header-logo-container'
      onClick={ () => toggleMenuHandler( true ) }
    >  
      <NavLink 
        to={ '/' }
        className={ ( { isActive } ) => (
          isActive ? 
            'header-logo header-logo--active' 
            : 
            'header-logo' 
        ) }
      > 
        <LogoIcon width={ iconSizeLogo } height={ iconSizeLogo } />
      </NavLink>
    </div>
  )

  // Highlighted contact links
  const highlightedContacts = (
    <div className={ `header-contacts ${ isBelow768Px ? 'header-contacts--small-layout' : 'header-contacts--large-layout' }` }>
      { availabilityAndProfileLinks
        ?.filter(contact => contact.title === 'Github' || contact.title === 'LinkedIn')
        ?.map(contact => {
          return (
            <a 
              key={ contact.id } 
              className={ `header-contacts-item ${ isBelow768Px ? 'header-contacts-item--small-layout' : 'header-contacts-item--large-layout' }` }
              title={ contact.title }
              href={ contact.link }
              target='_blank' 
              rel='noopener noreferrer'
            > { contact.icon(iconColorHighlightedContacts) } 
            </a>
          )
        }) 
      }
    </div>
  )

  // Header's toolbar (language toggler, social icons)
  const toolbarLargeScreen = (
    <div className='header-toolbar'>
      <LanguageToggler/>
      { highlightedContacts }
    </div>
  )
  
  const toolbarSmallScreen = (
    <div className='header-toolbar'>
      <LanguageToggler/>
    </div>
  )

  // Menu
  // menu toggler button (for small screen layout)
  const menuToggler = (
    <div 
      className='header-menu-toggler'
      onClick={ () => toggleMenuHandler() }
    > 
      { isMenuToggled ? 
        <MenuCloseIcon 
          height={ iconSizeMenuToggler } 
          width={ iconSizeMenuToggler } 
          stroke={ iconColorMenuToggler }
        />
        :
        <MenuOpenIcon 
          height={ iconSizeMenuToggler } 
          width={ iconSizeMenuToggler } 
          stroke={ iconColorMenuToggler }
        />
      }
    </div>
  )

  // menu modal (for small screen layout)
  const menuModal = (
    <div className='header-menu-modal'>
      <Navigation/>
      { highlightedContacts }
    </div>
  )

  // LAYOUTS
  // customized layout for large screens
  const smallScreenLayout = (
    <>
      { menuToggler }
      { logo }
      { toolbarSmallScreen }
      { isMenuToggled || !isBelow768Px ? menuModal : null }
    </>
  );

  // customized layout for large screens
  const largeScreenLayout = (
    <>
      { logo }
      <Navigation />
      { toolbarLargeScreen }
    </>
  );

  return (
    <div id='header' className='header-container'> {/* NOTE: id is required to navigate back to home pg */}
      { isBelow768Px ? smallScreenLayout : largeScreenLayout }
    </div>
  )
}