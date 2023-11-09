// Reusable component to render out an array of tags [{}]
import React from 'react';
import { toast } from 'react-toastify';

export function Tags (props) {
  // PROPS
  const {
    tags, // array of objects [{}], contains tag items
    tagStyle, // string, component specific styling  
  } = props;

  // 
  // toaster with tag info
  const callToaster = (tagInfo = '') => {
    toast(tagInfo, {
      position: "top-right",
      className: 'toast-message',
      autoClose: 7000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // HANDLER
  // tag item colors: border, background, font colors
  const tagColorStyle = (tagItem) => (
    {
      border: `2px solid ${ tagItem.borderColor }`,
      backgroundColor: tagItem.backgroundColor,
      color: tagItem.color
    }
  );
    // rendered tag
    const renderedTags = tags.map( (tag, i) => (
      <div
        key={ i }
        style={ tagColorStyle(tag) }
        className={ `shared-tag-item ${ tagStyle }` }
      > <span> { tag.name } </span>
      </div>
    ) );
  
    return <> { renderedTags } </>
};