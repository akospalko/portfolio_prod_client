// Reusable component to render out an array of tags [{}]
import React from 'react';
import './Tags.css';

export function Tags (props) {
  // PROPS
  const {
    tags, // array of objects [{}], contains tag items
    tagStyle, // string, component specific styling  
  } = props;

  // HANDLER
  // tag item colors: border, background, font colors
  const tagColorStyle = ( tagItem ) => (
    {
      border: `2px solid ${ tagItem.borderColor }`,
      backgroundColor: tagItem.backgroundColor,
      color: tagItem.color
    }
  );
    // rendered tag
    const renderedTags = tags.map( ( tag, i ) => (
      <div
        key={ i }
        style={ tagColorStyle(tag) }
        className={ `tag-item ${ tagStyle }` }
      > <span> { tag.name } </span>
      </div>
    ) );
  
    return <> { renderedTags } </>
};