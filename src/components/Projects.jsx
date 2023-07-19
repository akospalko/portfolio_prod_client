// Project page
import React from 'react'
import './Projects.css' 
import './Shared.css' 
import Anchor from './Anchor'
import ProjectCard from './ProjectCard';
import { projectCards } from '../helper/dataControl'
import { useModalContext } from '../context/ModalContext';
import { useMediaQuery } from 'react-responsive';
import { addConditionalBorderStyle } from './addConditionalBorderStyle';

export default function Projects({ isAutoHeight }) {
  // HOOK
  const isBelow1024Px = useMediaQuery({ query: '(max-width: 1023px)' });
  const isBelow768Px = useMediaQuery({ query: '(max-width:767px)' });

  // CONTEXT 
  const { toggleModalHandler } = useModalContext();

  return (
    <article className={ `shared-page-container ${ isAutoHeight && 'shared-page-container--autoheight' }` }>
      {/* anchor tag for full content page */}
      { isAutoHeight && <Anchor componentName='projects' /> }
      <div className='projects-content'>
        {/* page title */}
        <div className='shared-title'>
          <h1> Projects </h1>
        </div>
        <div className='projects-display'>
          { projectCards.map( (card, i) => {
            let columnCount = isBelow1024Px ? isBelow768Px ? 1 : 2 : 3; // number of displaye columns: 1-3
            let borderRadiusStyle = addConditionalBorderStyle(projectCards, i, columnCount);
            return <div 
              key={ card.id }
              onClick={ () => toggleModalHandler(card.id) }  
              className='projects-card-wrapper'
            > 
              <ProjectCard data={{ ...card }} borderRadiusStyle={ borderRadiusStyle } /> 
            </div>
          }) }
        </div> 
      </div>
    </article>
  )
}