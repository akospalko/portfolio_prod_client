// Home: starting / landing pg with basic intro
import React from 'react';
import './Home.css';
import './Shared.css';
import { welcomeText, subtitleText, introductionText } from '../helper/dataControl';
import { ArrowIcon, OceanAnimation } from './SVGComponents';
import { useAnimationPause } from '../hooks/useAnimationPause';
import Anchor from './Anchor';

export default function Home({ handleScrollDown }) {
  // HOOK
  // toggle background animation
  const { isAnimationPaused, pauseBackgroundAnimationButton } = useAnimationPause('home');
  
  // ELEMENTS
  // Text
  // header title
  const homeTitle=( 
    <div className='home-title'>
      <h1> { welcomeText } </h1>
    </div>
  )
  // header subtitle
  const homeSubitle=( 
    <div className='home-subtitle'>
      <h2> { subtitleText } </h2>
    </div>
  )
  // short introductory text
  const homeIntroduction=( 
    <div className='home-introduction'> 
      <div className='home-introduction-text'> 
        <span> { introductionText } </span>
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
      <Anchor componentName='home'/> 
      <div className='home-content'> 
        { homeTitle }
        { homeSubitle }
        { homeIntroduction }
        { homeBottomToolbar }
        { homeBackground }  
      </div>
    </article>
  )
}