// Scroll page to top functionality implemented as a button 
import React from 'react';
import './ScrollToTopButton.css';
import { ArrowIcon } from '../../data/SVGComponents';
import useMediaQuery from '../../hooks/useMediaQuery';
import { scrollToTop } from '../../helper/utility';

const ScrollToTopButton = () => {
  // HOOK
  const isBelow768Px = useMediaQuery('(max-width: 767px)')

  // STYLE
  const iconSize = isBelow768Px ? "40px" : "30px";
  const iconColor = 'var(--color_4)';

  return (
    <button
      className='scroll-to-top-button'
      onClick= { scrollToTop }
    > 
    <ArrowIcon height={ iconSize } width={ iconSize } fill={ iconColor } />
    </button>
  );
};

export default ScrollToTopButton;