// Contact Page 
import React from 'react'
import './Contact.css'
import './Shared.css'
import Anchor from './Anchor'
import ContactForm from './ContactForm'
import { contactCTA, myContacts, myContactsTemplate } from '../helper/dataControl'
import LittleHero from './LittleHero'
import { WaveAnimation } from './SVGComponents'
import { toast } from 'react-toastify'
import { useMediaQuery } from 'react-responsive'
import { useAnimationPause } from '../hooks/useAnimationPause'

export default function Contact({ isAutoHeight }) {
  // HOOK
  // media queries
  const isBelow768px = useMediaQuery({ query: '(max-width: 768px)'});
  // toggle background animation
  const { isAnimationPaused, pauseBackgroundAnimationButton } = useAnimationPause('contact', 'var(--color_1)');

  // HANDLERS
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
  // Call to action text
  const ctaText = (
    <div className='contact-cta'> 
      <h2> { contactCTA } </h2>
    </div>
  )

  // Contact information
  const contactIconSize = isBelow768px ? 25 : 30;
  //
  const contactItems = (
    <div className='contact-items'> 
      <div className='contact-items-header'> 
        <h3> { myContacts } </h3> 
      </div>
      <div className='contact-item'>
        { myContactsTemplate?.map(contact => {
          // item content
          const itemContent = (
            <>
              <div className='contact-item-icon'> 
                { contact.icon('', contactIconSize) } 
              </div>
              <div className='contact-item-text' >
                <span> { contact.value } </span>
              </div>
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
            return (
              <div 
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
            ) 
          }
        }) }
      </div>
    </div>
  )

  // Background
  // background element position coordinates
  const elementPositionXSmall = 2350;
  const elementPositionYSmall = 400;
  const elementPositionXLarge = 2100;
  const elementPositionYLarge = 250;
  // small screen background - paused/live state
  const smallScreenBackground = isAnimationPaused ? 
    <WaveAnimation 
      isStatic 
      positionX={ elementPositionXSmall } 
      positionY={ elementPositionYSmall } 
    /> 
    : 
    <WaveAnimation 
      positionX={ elementPositionXSmall } 
      positionY={ elementPositionYSmall } 
    /> 
  // large screen background - paused/live state
  const largeScreenBackground = isAnimationPaused ? 
    <WaveAnimation 
      isStatic 
      positionX={ elementPositionXLarge } 
      positionY={ elementPositionYLarge } 
    /> 
    : 
    <WaveAnimation 
      positionX={ elementPositionXLarge } 
      positionY={ elementPositionYLarge } 
    /> 

  return (
    <article className={ `shared-page-container ${ isAutoHeight && 'shared-page-container--autoheight' }` }>
      { isAutoHeight && <Anchor componentName='contact' /> }
      <div className='contact-content'>
        <div className='contact-groups-wrapper'>

          <div className='contact-group-1'>
            <div className='contact-header'> 
              <div className='shared-title'> 
                <h1> Contact </h1>
              </div> 
            </div>
            <div className='contact-information'>
              { ctaText }
              { contactItems }
              { pauseBackgroundAnimationButton }
              <div className='contact-animation-background'> 
                { isBelow768px ? smallScreenBackground : largeScreenBackground }
              </div>
            </div>
          </div>
          <div className='contact-group-2'>
            <div className='contact-hero-icon'>  
              <LittleHero />
            </div>
            <ContactForm/>
          </div> 
        </div>
      </div>
    </article>
  ) }