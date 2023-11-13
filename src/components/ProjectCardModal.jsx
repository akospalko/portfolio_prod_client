// Project card modal with backdrop
import React, { useEffect } from 'react';
import { useModalContext } from '../context/ModalContext';
import { MenuCloseIcon, LinkIcon, LearnedIcon, InformationIcon } from './SVGComponents';
import { Tags } from './Tags';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import { useTranslation } from 'react-i18next';
import './ProjectCardModal.css';
import './Shared.css';

export default function ProjectCardModal() {
  // CONTEXT
  const { activeModalContent, toggleModalHandler } = useModalContext();
  const { id, title, tags, imageURL, description, links, learnedAbout } = activeModalContent;

  // HOOKS
  const { t } = useTranslation();

  // EFFECTS
  // close modal when pressing keyboard 'escape'
  useEffect( () => {
    const handleKeyDown = ( e ) => {
      if ( e.key === 'Escape' ) {
        toggleModalHandler( id, false );
      }
    };
    document.addEventListener( 'keydown', handleKeyDown );
    return () => {
      document.removeEventListener( 'keydown', handleKeyDown );
    };
  }, [ toggleModalHandler, id ] );

  // enable / disable scroll on modal toggle 
  useEffect( () => {
    document.body.classList.add( 'modal-open' );
    return () =>  { document.body.classList.remove( 'modal-open' ) }
  }, [] );

  // STYLING 
  const headerIconSize = '40px';
  const closeIconSize = '25px';
  const iconColor = 'var(--color_5)';

  // HANDLER
  // handle backdrop click close modal
  const handleBackdropClick = ( e ) => {
    if ( e.target.classList.contains( 'project-card-modal-backdrop' ) ) {
      toggleModalHandler( id, false );
    }
  }

  // ELEMENTS
  // mapped learned items
  const whatILearned = (
    <>
      { learnedAbout?.map( item => 
        <div 
          key={ item.id }
          className='project-card-modal-content-learned'
        >
          <span> { item?.text } </span>
        </div>
      ) }
    </>
  )

  // mapped content links
  const linkItems = (
    links.map( link => 
      <a 
        className='project-card-modal-content-link-item'
        key={ link.id } 
        href={ link.link }
        target='_blank' 
        rel='noopener noreferrer'
      >
        <div className='project-card-modal-content-link-item-icon'> { link.icon } </div>
        <span> { link.title } </span>
      </a>
    )
  )

  return (
    <div onClick={ handleBackdropClick } className='project-card-modal-backdrop'>
      <div className='project-card-modal-wrapper'>
        <div className='project-card-modal'>
        {/* header */}
        <div className='project-card-modal-header'> 
          {/* title */}
          <div className='project-card-modal-title'>
            <h2> { title } </h2> 
            {/* modal close */}
            <div 
              className='project-card-modal-close'
              onClick={ () => toggleModalHandler( id, false ) } 
            > 
              <MenuCloseIcon 
                height={ closeIconSize } 
                width={ closeIconSize } 
                stroke={ iconColor }
              />
            </div>
          </div>
          <div className='shared-tags'> 
            <Tags 
              tags={ tags } 
              tagStyle='shared-tag-item--modal'
              allowDisplayInfo 
            />
          </div>
        </div>
        {/* preview img */}
        <div className='project-card-modal-preview-image'>
          <ImageWithPlaceholder 
            src={ imageURL } 
            alt={ title } 
            objectFit='cover'
          /> 
        </div> 
        {/* content */}
        <div className='project-card-modal-content'>
          {/* description */}
          <div className='project-card-modal-content-header'>
            <div className='project-card-modal-content-header-icon'>
              <InformationIcon height={ headerIconSize } width={ headerIconSize } fill={ iconColor } />
            </div>
            <h3> { t( 'project-cards-description' ) } </h3>
          </div>
          <div className='project-card-modal-content-description'> 
            <span> 
              { description } 
            </span>
          </div>
          {/* what i learned ? */}
          <div className='project-card-modal-content-header'>
            <div className='project-card-modal-content-header-icon'>
              <LearnedIcon height={ headerIconSize } width={ headerIconSize } fill={ iconColor } />
            </div>
            <h3> { t( 'project-cards-learned' ) } </h3>
          </div>
          { <span> { whatILearned } </span> }
          {/* links */}
          <div className='project-card-modal-content-header'> 
            <div className='project-card-modal-content-header-icon'>
              <LinkIcon height={ headerIconSize } width={ headerIconSize } fill={ iconColor } />
            </div>
            <h3> { t( 'project-cards-links' ) } </h3>
          </div>
          { linkItems }
        </div> 


        </div>
      </div>
    </div>
  )
}