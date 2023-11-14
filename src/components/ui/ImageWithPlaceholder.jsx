// Return image / placeholder based on its loading state
import React, { useState } from 'react';
import { ImagePlaceholderIcon } from '../../data/SVGComponents';
import { useTranslation } from 'react-i18next'
import './ImageWithPlaceholder.css';

const ImageWithPlaceholder = ({ src, alt, width, height, objectFit }) => {
  // STATE
  const [ isImageLoaded, setIsImageLoaded ] = useState(false); // store img loaded state
  const [ isImageError, setIsImageError ] = useState(false); // store img error status

  // HOOK
  const { t } = useTranslation();

  // HANDLERS
  // set img loaded state to when img is loaded
  const imageLoadedHandler = () => {
    setTimeout(() => {
      setIsImageLoaded(true);
    }, 250 )
  };
  // display placeholder on error loading img
  const imageErrorHandler = () => {
    setTimeout(() => {
      setIsImageError(true);
    }, 250 )
  };

  // STYLES
  const placeholderStyle = {
    display: isImageLoaded ? 'none' : 'flex',
  };

  const imageStyle = {
    display: isImageLoaded ? 'flex' : 'none',
    width: width || '100%',
    height: height || '100%',
    objectFit: objectFit || 'contain'
  };

  return (
    <>
      <img
        className='image'
        srcSet={ `${ src.small } 500w, ${ src.medium } 1200w, ${ src.large } 1500w` } 
        sizes='(max-width: 499px) 100vw, (max-width: 768px) 600px, 1000px'
        src={ src.medium }
        alt={ alt }
        style={ imageStyle }
        onLoad={ imageLoadedHandler }
        onError={ imageErrorHandler }
      /> 
        <div 
          className={ `image-placeholder ${ isImageError ? 'image-placeholder--hidden' : ''}` }
          style={ placeholderStyle }
          title={ t( 'status-img-unavailable' ) } 
        > 
          <ImagePlaceholderIcon 
            fill='var(--color_3_light)' 
            fill2='var(--color_1)' 
            height='100%'
            width='100%'
          />
          <span> 
            { isImageError ? t( 'status-img-unavailable') : t( 'status-img-loading' ) }
          </span>
        </div>
    </>
  );
};

export default ImageWithPlaceholder;