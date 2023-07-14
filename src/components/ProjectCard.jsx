// Project card
import React from 'react';
import './ProjectCard.css';
import './Shared.css';
import { TagItems } from './TagItems';

export default function ProjectCard(props) {
  // PROPS
  // data
  const { background, tags, title } = props.data;
  const { borderRadiusStyle } = props;
  // console.log(borderRadiusStyle);

  return (
    <div className={ `project-card ${ borderRadiusStyle.item } ` } >
      {/* header */}
      <div className={ `project-card-header ` } > 
        {/* title */}
        <h2> { title } </h2>
        <div className='shared-tags'>
          <TagItems tags={ tags.slice(0, 3) } />
        </div>
      </div>
      {/* image preview */}
      <div className={ `project-card-image-preview ${ borderRadiusStyle.itemImg } `} >
        <img src={ background } />
      </div>
    </div>
  )
}