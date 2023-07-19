// Reusable anchor link to snap to top of the page, only in multiple page layout
import React from 'react'
import './Shared.css'
import { findAnchorLink } from '../helper/utility'
import { navigationElementsTemplate } from '../helper/dataControl'
import { AnchorIcon } from './SVGComponents'

export default function Anchor({ componentName }) {
  const anchorName = findAnchorLink(navigationElementsTemplate, componentName).name;
  return (
    <a 
      id={ anchorName } 
      href={ `#${ anchorName }` }
      className='shared-anchor'
    >
      <AnchorIcon 
        id={ anchorName }
        width={ 50 } 
        height={ 50 }
        stroke={ 'var(--color_4)' }
      /> 
    </a>
  )
}