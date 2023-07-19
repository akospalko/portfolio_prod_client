// Pause / play background animation on button click
import { useState } from 'react';
import { PauseIcon, PlayIcon } from '../components/SVGComponents';
import './useAnimationPause.css';

export const useAnimationPause = (pageName) => {
  // PARAM
  // pageName - string, pause button related page (decide style)
  
  // STATE
  const [isAnimationPaused, setIsAnimationPaused] = useState(false);

  // HANDLER
  const toggleAnimation = () => {
    setIsAnimationPaused((prevIsPaused) => !prevIsPaused);
  };

  // STYLE
  let buttonStyle = '';
  switch(pageName) {
    case 'home':
    buttonStyle = 'home-pause-background-animation';
    break;
    case 'contact':
    buttonStyle = 'contact-pause-background-animation';
    break;
    default: ''
  }

  // ELEMENT
  // pause background animation button
  const pauseBackgroundAnimationButton = (
    <div 
      className={ `default-pause-background-animation ${ buttonStyle }` } 
      onClick={ toggleAnimation }
    >
      { isAnimationPaused ? 
        <PlayIcon fill='var(--color_3_light)' /> 
        : 
        <PauseIcon fill='var(--color_3_light)' /> 
      } 
    </div>
  )

  return { isAnimationPaused, pauseBackgroundAnimationButton };
};