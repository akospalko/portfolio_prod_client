// Contact Page 
import React from 'react'
import './Contact.css'
import './Shared.css'
import Anchor from './Anchor'
import ContactForm from './ContactForm'
import { contactCTA, myContacts, myContactsTemplate } from '../helper/dataControl'
import LittleHero from './LittleHero'
import { WaveAnimation } from './SVGComponents'
import { toast } from 'react-toastify';
import { useMediaQuery } from 'react-responsive'
import { useAnimationPause } from '../hooks/useAnimationPause';

export default function Contact({ isAutoHeight }) {
  // HOOK
  // media query
  const isBelow300px = useMediaQuery({ query: '(max-width: 300px)'});
  // toggle background animation
  const { isAnimationPaused, pauseBackgroundAnimationButton } = useAnimationPause('contact');

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
        { myContactsTemplate?.map(contact => {
          // item content
          const itemContent = (
            <>
              <div className='contact-info-item-icon'> 
                { contact.icon(isBelow300px ? 'var(--color_3)' : undefined) } 
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
            { ctaText }
            { contactInfo }
            { pauseBackgroundAnimationButton }
            <div className='contact-animation-background'> 
              { isAnimationPaused ? <WaveAnimation isStatic /> : <WaveAnimation /> }
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
    </article>
  ) }