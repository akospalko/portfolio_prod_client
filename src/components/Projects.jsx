// Project page
import React from 'react'
import './Projects.css' 
import './Shared.css' 
import Anchor from './Anchor'
import ProjectCard from './ProjectCard';
import { projectCards } from '../helper/dataControl'
import { useModalContext } from '../context/ModalContext';

export default function Projects({ pageLayout }) {
  // CONTEXT 
  const { toggleModalHandler } = useModalContext();

  // STYLE
  // conditional layout
  let componentContainer = pageLayout === 'fullContentPage';

  return (
    <>
      <article className={ `shared-page-container ${ componentContainer ? 'shared-page-container--minheight' : '' }` }>
        {/* anchor tag for full content page */}
        { componentContainer && <Anchor componentName='projects' /> }
        <div className='projects-content'>
          {/* Page title */}
          <div className='shared-title'>
            <h1> Projects </h1>
          </div>
          <div className='projects-display'>
            { projectCards.map(card => (
              <div 
                key={ card.id }
                onClick={ e => toggleModalHandler(e, card.id) }  
                className='projects-card-wrapper'
              > 
                <ProjectCard data={{ ...card }} /> 
              </div>
            )) }
          </div> 
        </div>
      </article>
    </>
  )
}