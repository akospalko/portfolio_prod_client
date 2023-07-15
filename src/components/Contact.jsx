// Contact Page 
import React, { useState } from 'react'
import './Contact.css'
import './Shared.css'
import Anchor from './Anchor'
import ContactForm from './ContactForm'
import { contactCTA, myContacts, myContactsTemplate } from '../helper/dataControl'
import LittleHero from './LittleHero'
import { WaveAnimation, WaveStatic, PlayIcon, PauseIcon } from './SVGComponents'
import { toast } from 'react-toastify';

export default function Contact({ pageLayout }) {
  // STATE
  const [ isAnimationPaused, setIsAnimationPaused ] = useState(false);
  
  // STYLE
  // conditional layout
  const componentContainer = pageLayout === 'fullContentPage';

  // HANDLERS
  // pause/start animation on start 
  const toggleAnimation = () => {
    setIsAnimationPaused(prevValue => !prevValue);
  }

  // send toast when contact item is copied to clipboard
  const copyClipboardToastHandler = (copiedItem) => {
    toast(`${ copiedItem } is copied to cliplboard`, {
      position: "top-right",
      className: 'toast-message',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  }

  // ELEMENTS
  // call to action text
  const ctaText = (
    <div className='contact-cta-text'> 
      <h2> { contactCTA } </h2>
    </div>
  )

  // contact information
  const contactInfo = (
    <div className='contact-info'> 
      <div className='contact-info-header'> 
        <h3> { myContacts } </h3> 
      </div>
      <div className='contact-info-content'>
        { myContactsTemplate.map(contact => {
          // item content
          const itemContent = (
            <>
              <div className='contact-info-item-icon'> 
                { contact.icon } 
              </div>
              <span> { contact.value } </span>
            </>
          )
          // container for link items
          if(contact?.link ) {
            return <a 
              key={ contact.id } 
              className='contact-info-item'
              title={ contact.title }
              href={ contact.link }
              target='_blank' 
              rel='noopener noreferrer'
            >
              { itemContent }
            </a>
          // container for text items
          } else {
            return <div 
              key={ contact.id } 
              className='contact-info-item'
              title={ contact.title }
              onClick={ () => {
                navigator.clipboard.writeText(contact.value);
                copyClipboardToastHandler(contact.title);
              } }
            > 
              { itemContent }
            </div>
          }
        }) }
      </div>
    </div>
  )

  return (
  <div className={ `shared-page-container ${ componentContainer ? 'contact-page-container--background' : '' }` }>
    { componentContainer ? <Anchor componentName='contact' /> : null }
    <div className='contact-content'>
      <div className='contact-groups-wrapper'>
        <div className='contact-group-1'>
          <div className='contact-header'> 
            <div className='shared-title'> 
              <h1> Contact </h1>
            </div> 
          </div>
          { ctaText }
          { contactInfo }
          <div className='contact-animation-background'> 
            { isAnimationPaused ? <WaveStatic /> : <WaveAnimation /> }
            <div 
              className='contact-pause-background-animation' 
              onClick={ toggleAnimation }
            >
              { isAnimationPaused ? 
                <PlayIcon fill='var(--color_1)' /> 
                : 
                <PauseIcon fill='var(--color_1)' /> 
              } 
            </div>
          </div>
          <div className='contact-background-color'> </div>
        </div>
        <div className='contact-group-2'>
          <div className='contact-hero-icon'>  
            <LittleHero />
          </div>
          <ContactForm/>
        </div> 
      </div>
    </div>
  </div>
) }