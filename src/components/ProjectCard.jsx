import React from 'react';
import './ProjectCard.css';
import './Shared.css';

export default function ProjectCard({ data }) {
  // PROP
  const { background, tags, title } = data;

  // ELEMENTS
  // project card tag items
  const tagItem = (
    <>
      { tags?.map((tag, i) => {
        if(i < 3) { // render the first 3 tags for card view
           return(
            <div
              key={ i }
              style={{ backgroundColor: tag.backgroundColor, color: tag.color }}
              className='shared-tag-item'
            >
              <span> { tag.name } </span>
            </div>
           )
          }
        }
      )}
    </>
  )

  return (
    <div className='project-card'>
      {/* header */}
      <div className='project-card-header'> 
        {/* title */}
        <h2> { title } </h2>
        <div className='shared-tags'>
          { tagItem }
        </div>
      </div>
      {/* image preview */}
      <div className='project-card-image-preview'>
        <img src={ background } />
      </div>
    </div>
  )
}