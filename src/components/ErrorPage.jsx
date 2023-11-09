// Error page to handle unknown routes, status messages
import React from 'react';
import { useLocation } from 'react-router-dom';
import { useAnimationPause } from '../hooks/useAnimationPause';
import { OceanAnimation } from './SVGComponents';
import { useTranslation } from 'react-i18next'
import './ErrorPage.css';

export default function ErrorPage() {
  // ROUTING
  const location = useLocation();
  const { errorStatus, errorMessage } = location.state || {}; // TODO: implement custom error handling for each route components
  
  // HOOK
  const { isAnimationPaused, pauseBackgroundAnimationButton } = useAnimationPause( 'home' );
  const { t } = useTranslation();

  // ELEMENTS
  // error text
    const errorMessageContainer=( 
      <div className='error-message'> 
        <h1> { errorMessage || t( 'status-page-not-found' ) } </h1>
        { errorStatus && <h1> { t( 'status-page-error' ) } { errorStatus } </h1> }
      </div>
    )

    // toolbar: for bck animaion button
    const errorBottomToolbar = (
      <div className='error-bottom-toolbar' > 
        <div className='error-pause-background-animation' > 
          { pauseBackgroundAnimationButton } 
        </div>
      </div>
    )
    
    return (
      <article className={ 'shared-page-container' }>
      <div className='error-content'>
        { errorMessageContainer }
        { errorBottomToolbar }
        <div className='error-background'> 
          { isAnimationPaused ? <OceanAnimation isStatic /> : <OceanAnimation /> }
        </div>
      </div>
    </article>
  );
};