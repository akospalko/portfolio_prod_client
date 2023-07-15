// Scroll page to top functionality implemented as a button 
import React from 'react';
import './ScrollToTopButton.css';
import { ArrowIcon } from './SVGComponents';
import { useMediaQuery } from 'react-responsive';

const ScrollToTopButton = () => {
  // HOOK
  const isBelow768Px = useMediaQuery({ query: '(max-width: 767px)' })

  // CONDITIONAL RENDERING
  let iconSize = isBelow768Px ? "40px" : "30px";

  // FUNCTIONALITY
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      className='scroll-to-top-button'
      onClick= { scrollToTop }
    > 
    <ArrowIcon height={ iconSize } width={ iconSize } fill='var(--color_4)' />
    </button>
  );
};

export default ScrollToTopButton;