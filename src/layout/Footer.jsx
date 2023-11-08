// Responsive footer
import React from 'react';
import { LogoIcon } from '../components/SVGComponents';
import ScrollToTopButton from '../components/ScrollToTopButton';
import { useMediaQuery } from 'react-responsive';
import { useTranslation } from 'react-i18next';
import NavigationData from '../data/NavigationElementsData';
import useCurrentYear from '../hooks/useCurrentYear';
import './Footer.css';
import '../components/Shared.css';

export default function Footer() {
  // HOOK
  const isBelow768Px = useMediaQuery( { query: '(max-width: 767px)' } );
  const { t } = useTranslation();
  const currentYear = useCurrentYear();

  // DATA
  const navigationElementsData = NavigationData();

  // STYLE 
  const iconSizeSmall = '40px';
  const iconSizeLarge = '50px';

  // ELEMENTS
  // Scroll to top
  // customized layout for small screens
  const smallScreenBrandingScrollToTop = (
    <>
      <ScrollToTopButton />
      <span> { t( 'navigate-top' ) } </span>
    </>
  )
  // customized layout for large screens
  const largeScreenBrandingScrollToTop = (
    <>
      <span> { t( 'navigate-top' ) } </span>
      <ScrollToTopButton />
    </>
  )
  // rendered elem
  const scrollToTop = (
    <div className='footer-scroll-to-top'>
      { isBelow768Px ? smallScreenBrandingScrollToTop : largeScreenBrandingScrollToTop }
    </div>
  )

  // Navigation elements 
  const navigationElements = (
    <div className='footer-navigation-elements'> 
      { navigationElementsData.map( elem => (
        <a 
          key={ elem.id }
          href={ `#${ elem.name }` }
          className='footer-navigation-element'
        > 
          <span> { elem.name } </span> 
        </a>
      ) ) }
    </div>
  )

  // Branding
  // customized layout for small screens
  const smallScreenBranding = (
    <div className='footer-branding'>
      {/* logo */}
        <LogoIcon width={ iconSizeLarge } height={ iconSizeLarge }/>
      {/* label */}
      <span> 
        { t( 'footer-created-by' ) } <br/>
        { currentYear }
      </span>
    </div>
  )
  // customized layout for large screens
  const largeScreenBranding = (
    <div className='footer-branding'>
      {/* label */}
      <span> 
        { t( 'footer-created-by' ) } 
        { currentYear }
      </span>
      {/* logo */}
      <LogoIcon width={ iconSizeSmall } height={ iconSizeSmall } />
    </div>
  )

  // LAYOUTS
  // customized layout for small screens
  const smallScreenLayout = (
    <>
      { scrollToTop }
      { navigationElements }
      { smallScreenBranding }
    </>
  )
    
  // customized layout for large screens
  const largeScreenLayout = (
    <>
      <div className='footer-group-1'> 
        { largeScreenBranding }
        { navigationElements }  
      </div>
      { scrollToTop }
    </>
  )

  return (
    <div className='footer-container'>
      { isBelow768Px ? smallScreenLayout : largeScreenLayout }
    </div>
  )
}