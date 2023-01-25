import React from 'react'
import './Footer.css'
import '../components/Shared.css'
import { LogoIcon } from '../components/SVGComponents'
import { navElements, socialLinks } from '../helper/dataControl'

export default function Footer() {
  const footer = 
  <div className='footer-container'>
    {/* navigation links  */}
    <ul className='footer-navlinks'> 
      { navElements.map(elem => (
        <a 
          key={elem.id}
          href={ `#${ elem.name }` }
        > 
          <li id={elem.name}> 
            <span> {elem.name} </span> 
          </li>    
        </a>
      )) }
    </ul>
    {/* social links */}
    <div className='shared-sociallinks footer-sociallinks--added_margin'>
      { socialLinks.map( link => (
        <a 
          key={ link.id } 
          href={ link.link }
        >  
          { link.icon }                  
        </a>
      )) }
    </div>
    {/* info */}
    <div className='footer-info'>
      {/* logo */}
      <div className='footer-logo'> 
      <LogoIcon width={ 60 } height={ 60 }/>
      </div>
      {/* made-by */}
      <div className='footer-aboutcreator'> 
        <p> My Name, 2023 </p>
      </div>
    </div>
  </div>

  return (
    <>
      { footer }
    </>
  )
}