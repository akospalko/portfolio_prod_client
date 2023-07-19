// Header for all layouts
import React, { useEffect } from 'react';
import './Header.css';
import { MenuOpenIcon, MenuCloseIcon, LogoIcon } from '../components/SVGComponents';
import { NavLink } from "react-router-dom";
import Navigation from './Navigation';
import { useMediaQuery } from 'react-responsive';
import { myContactsTemplate } from '../helper/dataControl';
import { useModalContext } from '../context/ModalContext';

export default function Header() {
  // CONSTANT
  const iconSizeMenuToggler = 25;
  
  // HOOK
  const isBelow768Px = useMediaQuery({ query: '(max-width: 767px)' });
  
  // CONTEXT 
  const { isMenuToggled, toggleMenuHandler } = useModalContext();
  
  // EFFECT
  // close modal when screen size is changed to large screen
  useEffect( () => {
    if(isMenuToggled && !isBelow768Px ) {
      toggleMenuHandler(true);
    }
  }, [ isMenuToggled, isBelow768Px ])

  // ELEMENTS
  // Logo
  const logo = (
    <div 
      className='header-logo-container'
      onClick={ () => toggleMenuHandler(true) }
    >  
      <NavLink 
        to={ '/' }
        className={ ({ isActive }) => (
          isActive ? 
            'header-logo header-logo--active' 
            : 
            'header-logo' 
        ) }
      > 
        <LogoIcon width={ 40 } height={ 40 } />
      </NavLink>
    </div>
  )

  // Highlighted contact links
  const hilightedContacts = (
    <div className='header-contacts'>
      { myContactsTemplate
        ?.filter(contact => contact.title === 'Github' || contact.title === 'LinkedIn')
        ?.map(contact => {
          return (
            <a 
              key={ contact.id } 
              className='header-contacts-item'
              title={ contact.title }
              href={ contact.link }
              target='_blank' 
              rel='noopener noreferrer'
            >
              { contact.icon('var(--color_4)') } 
            </a>
          )
      }) }
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
          stroke={ 'var(--color_5)' }
        />
        :
        <MenuOpenIcon 
          height={ iconSizeMenuToggler } 
          width={ iconSizeMenuToggler } 
          stroke={ 'var(--color_5)' }
        />
      }
    </div>
  )
  // menu modal (for small screen layout)
  const menuModal = (
    <div className='header-menu-modal'>
      <Navigation/>
      { hilightedContacts }
    </div>
  )

  // LAYOUTS
  // customized layout for large screens
  const smallScreenLayout = (
    <>
      { menuToggler }
      { logo }
      { isMenuToggled || !isBelow768Px ? menuModal : null }
    </>
  );
  // customized layout for large screens
  const largeScreenLayout = (
    <>
      { logo }
      <Navigation />
      { hilightedContacts }
    </>
  );

  return (
    <div id='header' className='header-container'> {/* NOTE: id is required to navigate back to home pg */}
      { isBelow768Px ? smallScreenLayout : largeScreenLayout }
    </div>
  )
}