import React from 'react';
import './Shared.css';
import { BubbleLoader } from './SVGComponents';

const PageLoader = ({ style }) => {

  return (
    <article className={ `shared-page-container ${ style }` }>
      <BubbleLoader color1='var(--color_3_light)' color2='var(--color_1)'/>
    </article>
  )
}

export default PageLoader