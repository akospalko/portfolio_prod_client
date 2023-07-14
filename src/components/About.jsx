// About page
import React from 'react'
import './About.css'
import './Shared.css'
import Anchor from './Anchor';
import { aboutSkills, backgroundText } from '../helper/dataControl'
import { TagItems } from './TagItems';

export default function About({ pageLayout }) {
  // ELEMENTS
  // my background text
  const myBackgroundText = (
    backgroundText.map(elem => (
      <span key={ elem.id }>
        { elem.text }
      </span>
    ))
  )

  // skill card content group
  const cardContentGroup = (skillsArray) => (
    skillsArray?.map(item => (
      <div key={ item.id } className='about-skill-card-content-group'>
        <div className='about-skill-card-content-group-title'>
          <h3> { item.title } </h3> 
        </div>
        <div className='shared-tags shared-tags--skill'>
          <TagItems 
            tags={ item.tags } 
            tagStyle='shared-tag-item--skill'
            allowDisplayInfo 
          />
        </div>
      </div>
    ))
  )

  // skill cards 
  const skillCards = (
    aboutSkills.map( card => 
      <div key={ card.id } id={ `card-${ card.id }` } className='about-skill-card'>
        <div className='about-skill-card-header'>
          <div className='about-skill-card-title'>
            <h2> { card.title } </h2>
          </div>
          <div className='about-skill-card-icon'>
            { card.icon }
          </div>
        </div>
        <div className='about-skill-card-groups'>
          { cardContentGroup(card.skills) }
        </div>
      </div>
    )
  )
      
  // STYLE
  // project card img preivew background style
  const backgroundStyle = { 
    backgroundImage: `url(${ "https://images.unsplash.com/flagged/photo-1595514191830-3e96a518989b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80" })`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  }
  // conditional layout
  const componentContainer = pageLayout === 'fullContentPage';

  return (
    <article className='shared-page-container'>
      {/* anchor tag for full content page */}
      { componentContainer ? <Anchor componentName='about' /> : null }
      <div className='about-content'>
        {/* Page title */}
        <div className='shared-title'>
          <h1> About </h1>
        </div>
        <div className='about-introduction-wrapper'>
          <section className='about-background'> 
            <div style={ backgroundStyle } className='about-background-photo'> </div>
            <div className='about-background-text'> 
              <h2> My background </h2>
              { myBackgroundText }
            </div>
          </section>
          <section className='about-skills'> 
            { skillCards }
          </section>
        </div>
      </div>
    </article>
  )
}