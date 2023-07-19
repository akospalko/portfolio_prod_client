// Error page to handle unknown routes, status messages
import React from 'react';
import './ErrorPage.css';
import { useLocation } from 'react-router-dom';
import { useAnimationPause } from '../hooks/useAnimationPause';
import { OceanAnimation } from './SVGComponents';
import { pageNotFoundText } from '../helper/dataControl';


export default function ErrorPage() {
  // ROUTING
  const location = useLocation();
  const { errorStatus, errorMessage } = location.state || {}; // TODO: implement custom error handling for each route components
  
  // HOOK
  const { isAnimationPaused, pauseBackgroundAnimationButton } = useAnimationPause('home');
    
  // ELEMENTS
  // error text
    const errorMessageContainer=( 
      <div className='error-message'> 
        <h1> { errorMessage || pageNotFoundText } </h1>
        { errorStatus && <h1>Error { errorStatus } </h1> }
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