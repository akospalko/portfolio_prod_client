// Project page
import React from 'react';
import { useModalContext } from '../context/ModalContext';
import { addConditionalBorderStyle } from '../components/ui/addConditionalBorderStyle';
import useMediaQuery from '../hooks/useMediaQuery';
import ProjectCard from '../components/projects/ProjectCard';
import ProjectCardsData from '../data/ProjectCardData';
import { useTranslation } from 'react-i18next';
import './Page.css';

export default function Projects() {
  // CONSTANT
  const projectCards = ProjectCardsData();
  // HOOK
  const isBelow1024Px = useMediaQuery('(max-width: 1023px)');
  const isBelow768Px = useMediaQuery('(max-width:767px)');
  const { t } = useTranslation();

  // CONTEXT 
  const { toggleModalHandler } = useModalContext();

  return (
    <article className='page-container'>
      <div className='projects-content'>
        {/* page title */}
        <div className='page-title'>
          <h1> { t( 'projects' ) } </h1>
        </div>
        <div className='projects-display'>
          { projectCards.map( ( card, i ) => {
            console.log('card with id: ', card.id)
            let columnCount = isBelow1024Px ? isBelow768Px ? 1 : 2 : 3; // number of displaye columns: 1-3
            let borderRadiusStyle = addConditionalBorderStyle(projectCards, i, columnCount);
            return (
              <div 
                key={ card.id }
                onClick={ () => toggleModalHandler(card.id) }  
                className='projects-card-wrapper'
              > <ProjectCard data={{ ...card }} borderRadiusStyle={ borderRadiusStyle } /> 
              </div>
            )
          }) }
        </div> 
      </div>
    </article>
  )
}