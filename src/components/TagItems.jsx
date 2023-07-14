// Reusable component to render out an array of tags [{}]
import React from 'react';
import { toast } from 'react-toastify';

export function TagItems (props) {
  // PROPS
  const {
    tags, // array of objects [{}], contains tag items
    tagStyle, // string, component specific styling  
    allowDisplayInfo // bool, is the tag clickable? -> display info 
  } = props;

  // 
  // toaster with tag info
  const callToaster = (tagInfo = '') => {
    toast(tagInfo, {
      position: "top-right",
      className: 'toast-message',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  // HANDLER
  // calls toaster to display info about the clicked tag for specified instances
  const displayTagInfoHandler = (tagInfo) => {
    if(!allowDisplayInfo) return; 
      callToaster(tagInfo);
  };

  // tag item colors: border, background, font colors
  const tagColorStyle = (tagItem) => (
    {
      border: `2px solid ${ tagItem.borderColor }`,
      backgroundColor: tagItem.backgroundColor,
      color: tagItem.color
    }
  )
    // rendered tag
    const renderedTags = tags.map( (tag, i) => (
      <div
        key={ i }
        style={ tagColorStyle(tag) }
        className={ `shared-tag-item ${ tagStyle }` }
        onClick={ () => displayTagInfoHandler(tag?.info || tag?.name) }
      > <span> { tag.name } </span>
      </div>
    ) );
  
    return <> { renderedTags } </>
};