// Reusable anchor link to snap to top of the page, only in multiple page layout
import React from 'react';
import { findAnchorLink } from '../helper/utility';
import { AnchorIcon } from './SVGComponents';
import NavigationElementsData from '../data/NavigationElementsData';
import './Shared.css';

export default function Anchor({ componentName }) {
  // DATA 
  const navigationElementsData = NavigationElementsData();
  const anchorName = findAnchorLink( navigationElementsData, componentName ).name;
  
  // STYLE
  const iconSize = '50px';
  const iconColor = 'var(--color_4)';

  return (
    <a 
      id={ anchorName } 
      href={ `#${ anchorName }` }
      className='shared-anchor'
    >
      <AnchorIcon 
        id={ anchorName }
        width={ iconSize } 
        height={ iconSize }
        stroke={ iconColor }
      /> 
    </a>
  )
}