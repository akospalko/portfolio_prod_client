//reusable anchor link to align scroll to the top of the linked article/page
import React from 'react'
import './Shared.css'
import { findAnchorLink } from '../helper/utility'
import { navElements } from '../helper/dataControl'
import { AnchorIcon } from './SVGComponents'

export default function Anchor({ componentName }) {
  const anchorName = findAnchorLink(navElements, componentName).name;
  return (
    <div className='shared-anchor'>
      <a id={ anchorName } href={ `#${ anchorName }` }>
        <AnchorIcon 
          id={ anchorName }
          width={50} 
          height={50}
          stroke={'var(--color_5)'}
        /> 
      </a>
    </div>
  )
}