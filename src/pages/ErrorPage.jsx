// Error page to handle unknown routes, status messages
import React from 'react';
import { useAnimationPause } from '../hooks/useAnimationPause';
import { OceanAnimation } from '../data/SVGComponents';
import { useTranslation } from 'react-i18next'
import './ErrorPage.css';
import './Page.css';


export default function ErrorPage({ type }) {
  // HOOK
  const { isAnimationPaused, pauseBackgroundAnimationButton } = useAnimationPause( 'home' );
  const { t } = useTranslation();

  // Get active type && displayed message
  let displayedMessage;
  switch(type) {
    case 'error-page-does-not-exist':
      displayedMessage = t('error-page-does-not-exist')
      break;
    case 'error-could-not-display-page':
      displayedMessage = t('error-could-not-display-page')
      break;
      
      default:
    displayedMessage = t('error-something-went-wrong')
  }

  // ELEMENTS
    // error text
    const errorMessageContainer=( 
      <div className='error-message'> 
        <h1> { displayedMessage } </h1>
      </div>
    )

    // toolbar: for bck animaion button
    const bottomToolbar = (
      <div className='error-bottom-toolbar' > 
        <div className='error-pause-background-animation' > 
          { pauseBackgroundAnimationButton } 
        </div>
      </div>
    )

    return (
      <article className='page-container'>
        <div className='error-content'>
          { errorMessageContainer }
          { bottomToolbar }
          <div className='error-background'> 
            { isAnimationPaused ? <OceanAnimation isStatic /> : <OceanAnimation /> }
          </div>
        </div>
      </article>
    );
};