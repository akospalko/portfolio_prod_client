// Project card modal with backdrop
import React, { useEffect } from 'react';
import './ProjectCardModal.css';
import './Shared.css';
import { useModalContext } from '../context/ModalContext';
import { MenuCloseIcon, LinkIcon, LearnedIcon, InformationIcon } from './SVGComponents';
import { TagItems } from './TagItems';

export default function ProjectCardModal() {
  // CONTEXT
  const { activeModalContent, toggleModalHandler } = useModalContext();
  const { id, title, tags, background, description, links, learnedAbout } = activeModalContent;

  // EFFECTS
  // close modal when pressing keyboard 'escape'
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        toggleModalHandler(e, id, false);
      }
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [toggleModalHandler, id]);

  // enable / disable scroll on modal toggle 
  useEffect(() => {
    document.body.classList.add('modal-open');
    return () =>  { document.body.classList.remove('modal-open') }
  }, []);

  // HANDLER
  // handle backdrop click close modal
  const handleBackdropClick = (e) => {
    if (e.target.classList.contains('project-card-modal-backdrop')) {
      toggleModalHandler(e, id, false);
    }
  }

  // STYLE
  // project card img preivew background style
  const backgroundStyle = { 
    backgroundImage: `url(${ background })`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center'
  }

  // ELEMENTS
  // mapped what i learned items
  const whatILearned = (
    <>
      { learnedAbout?.map(item => 
        <div 
          key={ item.id }
          className='project-card-modal-content-learned'
        >
          <span> { item?.text } </span>
        </div>
      )}
    </>
  )

  // mapped content links
  const linkItems = (
    links.map(link => 
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
      <div className='project-card-modal'>
        {/* header */}
        <div className='project-card-modal-header'> 
          {/* title */}
          <div className='project-card-modal-title'>
            <h2> { title } </h2> 
            {/* modal close */}
            <div 
              onClick={ e => toggleModalHandler(e, id, false) }  className='project-card-modal-close' 
            > 
              <MenuCloseIcon 
                height={ 20 } 
                width={ 20 } 
                stroke={ 'var(--color_5)' }
              />
            </div>
          </div>
          <div className='shared-tags'> 
            <TagItems 
              tags={ tags } 
              tagStyle='shared-tag-item--modal'
              allowDisplayInfo 
            />
          </div>
        </div>
        {/* preview img */}
        <div style={ backgroundStyle } className='project-card-modal-preview-image'></div>
        
        {/* content */}
        <div className='project-card-modal-content'>
          {/* description */}
          <div className='project-card-modal-content-header'>
            <div className='project-card-modal-content-header-icon'>
              <InformationIcon height={ 30 } width={ 30 } fill={ 'var(--color_5)' } />
            </div>
            <h3> Description </h3>
          </div>
          <div className='project-card-modal-content-description'> 
            <span> 
              { description } 
            </span>
          </div>
          {/* what i learned ? */}
          <div className='project-card-modal-content-header'>
            <div className='project-card-modal-content-header-icon'>
              <LearnedIcon height={ 30 } width={ 30 } fill={ 'var(--color_5)' } />
            </div>
            <h3> What did I learn? </h3>
          </div>
          { <span> { whatILearned } </span> }
          {/* links */}
          <div className='project-card-modal-content-header'> 
            <div className='project-card-modal-content-header-icon'>
              <LinkIcon height={ 30 } width={ 30 } fill={ 'var(--color_5)' } />
            </div>
            <h3> Links </h3>
          </div>
          { linkItems }
        </div> 
      </div>
    </div>
  )
}
