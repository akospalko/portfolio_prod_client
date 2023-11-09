// Project card
import React from 'react';
import { Tags } from './Tags';
import ImageWithPlaceholder from './ImageWithPlaceholder';
import './ProjectCard.css';
import './Shared.css';

export default function ProjectCard(props) {
  // PROPS
  // data
  const { imageURL, tags, title } = props.data;
  const { borderRadiusStyle } = props;

  return (
    <div className={ `project-card ${ borderRadiusStyle.item }` } >
      {/* header */}
      <div className={ `project-card-header ` } > 
        {/* title */}
        <h2> { title } </h2>
        <div className='shared-tags'>
          <Tags tags={ tags.slice( 0, 3 ) } />
        </div>
      </div>
      {/* image preview */}
      <div className={ `project-card-image-preview ${ borderRadiusStyle.itemImg }` } >
        <ImageWithPlaceholder 
          src={ imageURL } 
          alt={ title }
          width='100%' 
          height='100%' 
          // objectFit={ isBetween768PxAnd1023Px ? 'contain' : 'cover' } 
        /> 
      </div>
    </div>
  )
}
