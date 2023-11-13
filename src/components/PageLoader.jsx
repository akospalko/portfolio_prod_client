// Full page loader 
import React from 'react';
import './Shared.css';
import { BubbleLoader } from './SVGComponents';

const PageLoader = ({ style }) => {
  // STYLE
  const iconSize = '150px';
  const iconColor1 = 'var(--color_3_light)';
  const iconColor2 = 'var(--color_1)';

  return (
    <article className={ `shared-page-container ${ style }` } >
      <BubbleLoader width={ iconSize } height={ iconSize } color1={ iconColor1 } color2={ iconColor2 } />
    </article>
  )
}

export default PageLoader