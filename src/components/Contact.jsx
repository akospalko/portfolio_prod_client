import React from 'react'
import './Contact.css'
import './Shared.css'
import Anchor from './Anchor'
import ContactForm from './ContactForm'
import { socialLinks, textBubbleContentContactForm } from '../helper/dataControl'
import SpaceCat from './SpaceCat'
import Astronaut from './Astronaut'

export default function Contact({ pageLayout }) {
  //conditional render height of the page based on if it is displayed as a single component vs together with other components
  let componentContainer = [ 'shared-page-container contact-page-container--background' ];
  pageLayout === 'fullContentPage' ?  
  componentContainer = [...componentContainer, 'shared-page-container--minheight'].join(' ')
  : null;  

  return (
  <div className={ componentContainer }>
    {/* anchor tag for full content page */}
    { pageLayout === 'fullContentPage' ? <Anchor componentName='contact' /> : null }
    <div className='contact-content'>
      <div className='contact-group-1'>
        {/* contact header */}
        <div className='contact-header-container'> 
          <div className='shared-title'> 
            <h1> Contact </h1>
          </div>
          {/* contact short text */}
          <div className='contact-header-text'> 
            <p>  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut consequat eros vel sodales aliquam. Vestibulum id massa euismod, maximus lacus non, rhoncus mi. Phasellus consequat elementum blandit. </p>
          </div>
        </div>
        {/* backround */}
        <div className='contact-background'>
          {/* Astrounaut bckg */}
          <div className='contact-astronaut'>
            <Astronaut/>
          </div>
          {/* additional information */}
          <div className='contact-additional-info'>
            <p> My Name </p>
            <p> myemail.@testmail.com </p>
            <p> tel ... </p>
            <div className='shared-sociallinks contact-sociallinks--fullwidth'>
              { socialLinks.map( link => (
                <a 
                  key={ link.id } 
                  href={ link.link }
                >  
                  { link.icon }                  
                </a>
              )) }
            </div>
          </div>
        </div>
      </div>
      <div className='contact-group-2'>
        <SpaceCat 
          textBubbleContent={ textBubbleContentContactForm }
          hoverEffect={ true } 
        />
        <ContactForm/>
      </div>
    </div>
  </div>
)}

