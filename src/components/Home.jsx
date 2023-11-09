// Home: starting / landing pg with basic intro
import React from 'react';
import { ArrowIcon, OceanAnimation } from './SVGComponents';
import { useAnimationPause } from '../hooks/useAnimationPause';
import Anchor from './Anchor';
import { useTranslation } from 'react-i18next';
import './Home.css';
import './Shared.css';

export default function Home({ handleScrollDown }) {
  // HOOK
  // toggle background animation
  const { isAnimationPaused, pauseBackgroundAnimationButton } = useAnimationPause( 'home' );
  const { t } = useTranslation();
  
  // ELEMENTS
  // Text
  // header title
  const homeTitle=( 
    <div className='home-title'>
      <h1> { t( 'home-title' ) } </h1>
    </div>
  )

  // header subtitle
  const homeSubitle=( 
    <div className='home-subtitle'>
      <h2> { t( 'home-subtitle' ) } </h2>
    </div>
  )
  // short introductory text
  const homeIntroduction=( 
    <div className='home-introduction'> 
      <div className='home-introduction-text'> 
        <span>  
          { t( 'web-developer-1' ) }
          <u> { t( 'web-developer-2' ) } </u>
          { t( 'web-developer-experience' ) }
          <u> { t( 'gis-specialist' ) } </u>
          { t( 'gis-specialist-experience' ) }
        </span>
      </div>
    </div>
  )

  // Misc
  // toolbar located at bottom of home page. containing scroll down button and toggle bck animation
  const homeBottomToolbar = (
    <div className='home-bottom-toolbar' > 
      <div className='home-scroll-down-button' onClick={ handleScrollDown }> 
        <ArrowIcon height='30px' width='30px' fill='var(--color_4)' rotate='180' />
      </div>
      { pauseBackgroundAnimationButton } 
    </div>
  )
  // background
  const homeBackground = (
    <div className='home-background'> 
      { isAnimationPaused ? <OceanAnimation isStatic /> : <OceanAnimation /> }
    </div>
  )

  return (
    <article className='shared-page-container'>
      {/* anchor tag */}
      <Anchor componentName='home' /> 
      <div className='home-content' > 
        { homeTitle }
        { homeSubitle }
        { homeIntroduction }
        { homeBottomToolbar }
        { homeBackground }  
      </div>
    </article>
  )
}