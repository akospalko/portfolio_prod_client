// About page
import React from 'react'
import './About.css'
import './Shared.css'
import Anchor from './Anchor';
import { aboutSkills, backgroundText, profileImageURLs } from '../helper/dataControl'
import { TagItems } from './TagItems';
import { useMediaQuery } from 'react-responsive';
import ImageWithPlaceholder from './ImageWithPlaceholder';

export default function About({ isAutoHeight, targetRef }) {
  // PROPS
  // isAutoHeight - bool, layout condition for single / multiple pages 
  // targetRef - ref, ref to first page (about) - scroll here on scroll-down button click
  
  // HOOK
  // query to change bck img size when device screen is btw the specified dimensions to fit the layout better
  const isBetween768PxAnd1023Px = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)'});

  // ELEMENTS
  // My background
  // profile image
  const profileImage = (
    <div  className='about-background-photo' > 
      <ImageWithPlaceholder 
        src={ profileImageURLs } 
        alt='profile image' 
        width='100%' 
        height='100%' 
        objectFit={ !isBetween768PxAnd1023Px && 'cover' } 
      /> 
    </div>
  ) 
  // intro text
  const introductionText = (
    <div className='about-background-text'> 
      <h2> My background </h2>
      { backgroundText.map(elem => (
        <span key={ elem.id }>
          { elem.text }
        </span>
      )) }
    </div>
  )
  // my background text
  const myBackground = (
    <section className='about-background'> 
      { profileImage }
      { introductionText }
    </section>
  )

  // Skills
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
    <section className='about-skills'> 
      { aboutSkills.map( card => 
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
      ) }
    </section>
  )
      
  return (
    <article ref={ targetRef } className={ `shared-page-container ${ isAutoHeight && 'shared-page-container--autoheight' }` }>
      {/* anchor tag for full content page */}
      { isAutoHeight && <Anchor componentName='about' /> }
      <div className='about-content'>
        {/* Page title */}
        <div className='shared-title'>
          <h1> About </h1>
        </div>
        <div className='about-introduction-wrapper'>
          { myBackground }
          { skillCards }
        </div>
      </div>
    </article>
  )
}