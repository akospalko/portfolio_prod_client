import React, { useState } from 'react'
import './Projects.css' 
import './Shared.css' 
import Anchor from './Anchor'
import ProjectCard from './ProjectCard';
import { projectCards } from '../helper/dataControl'

export default function Projects({ pageLayout }) {
  const [toggleCard, setToggleCard] = useState({});
  let componentContainer = 'shared-page-container';
  pageLayout === 'fullContentPage' ?  
  componentContainer = ['shared-page-container','shared-page-container--minheight'].join(' ')
  : null;  
  
  return (
    <article className={ componentContainer }>
      {/* anchor tag for full content page */}
      { pageLayout === 'fullContentPage' ? <Anchor componentName='projects' /> : null }
      <div className='projects-content'>
        {/* Page title */}
        <div className='projects-title'>
          <h1> Projects </h1>
        </div>
        <div className='projects-text'>
          <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas. Nunc sit amet efficitur diam. Sed ut ullamcorper purus. Vivamus dapibus iaculis lectus. Vivamus non nunc in nulla lacinia placerat. Nam at ultrices sapien. Vestibulum rhoncus vitae purus quis mattis. Nulla elementum efficitur massa in rutrum. In ac est vel lorem placerat accumsan eget eu turpis. Nulla laoreet nisi vel dapibus eleifend. </p>
        </div>
        <div className='projects-display'>
          <div className='projects-display-content'>
            { projectCards.map(card => (
              <div 
                className='projects-display-group'
                key={card.id}
              > 
                <ProjectCard  
                  toggle={ toggleCard }
                  setToggle={ setToggleCard }
                  data={{ ...card }}
                /> 
              </div> 
            )) }
          </div>
        </div>
      </div>
    </article>
  )
}