// About page
import React from 'react';
import { Tags } from './Tags';
import { useMediaQuery } from 'react-responsive';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import { useTranslation } from 'react-i18next';
import AboutData from '../data/AboutData';
import './About.css';
import './Shared.css';

export default function About() {
  // HOOK
  const isBetween768PxAnd1023Px = useMediaQuery({ query: '(min-width: 768px) and (max-width: 1023px)'});
  const { t } = useTranslation();

  // DATA
  const { profileImageURL, myBackgroundTextData, skillCardsData } = AboutData();

  // ELEMENTS
  // My background
  // profile image
  const profileImage = (
    <div className='about-background-photo'> 
      <ImageWithPlaceholder 
        src={ profileImageURL } 
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
      <h2>{ t( 'about-background-title' ) }</h2>
      { myBackgroundTextData.map( elem => (
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
  const cardContentGroup = ( skillsArray ) => (
    skillsArray?.map(item => (
      <div key={ item.id } className='about-skill-card-content-group'>
        <div className='about-skill-card-content-group-title'>
          <h3> { item.title } </h3> 
        </div>
        <div className='shared-tags shared-tags--skill'>
          <Tags 
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
      { skillCardsData.map( card => 
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
            { cardContentGroup( card.skills ) }
          </div>
        </div>
      ) }
    </section>
  )
      
  return (
    <article className='shared-page-container'>
      {/* anchor tag for full content page */}
      <div className='about-content'>
        {/* Page title */}
        <div className='shared-title'>
          <h1> { t( 'about' ) } </h1>
        </div>
        <div className='about-introduction-wrapper'>
          { myBackground }
          { skillCards }
        </div>
      </div>
    </article>
  )
}