// Responsive footer
import React from 'react'
import './Footer.css'
import '../components/Shared.css'
import { LogoIcon } from '../components/SVGComponents'
import { navigationElementsTemplate } from '../helper/dataControl'
import ScrollToTopButton from '../components/ScrollToTopButton'
import { useMediaQuery } from 'react-responsive'

export default function Footer() {
  // HOOK
  const isBelow768Px = useMediaQuery({ query: '(max-width: 767px)' });

  // ELEMENTS
  // Scroll to top
  // customized layout for small screens
  const smallScreenBrandingScrollToTop = (
    <>
      <ScrollToTopButton />
      <span> TOP </span>
    </>
  )
  // customized layout for large screens
  const largeScreenBrandingScrollToTop = (
    <>
      <span> TOP </span>
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
      { navigationElementsTemplate.map(elem => (
        <a 
          key={ elem.id }
          href={ `#${ elem.name }` }
          className='footer-navigation-element'
        > 
          <span> { elem.name } </span> 
        </a>
      )) }
    </div>
  )

  // Branding
  // customized layout for small screens
  const smallScreenBranding = (
    <div className='footer-branding'>
      {/* logo */}
        <LogoIcon width={ 50 } height={ 50 }/>
      {/* label */}
      <span> 
        Created by <br/> 
        Ákos Palkó, 2023
      </span>
    </div>
  )
  // customized layout for large screens
  const largeScreenBranding = (
    <div className='footer-branding' >
      {/* label */}
      <span> 
        Created by Ákos Palkó, 2023
      </span>
      {/* logo */}
      <LogoIcon width={ 40 } height={ 40 } />
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