//a component for a very attentive space-cat that can track the mouse movement with its eyes all day long
import React, { useEffect, useState } from 'react'
import './SpaceCat.css'
import spaceCat from '../assets/space_cat.png'
import spaceCatEye from '../assets/space_cat_eye.png'

export default function SpaceCat({ textBubbleContent, countdownValue, hoverEffect }) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  //calculate angle between mouse(mouseX,Y) cursor and center of the box(anchorX,Y)
  const calcAngle = (mX, mY, aX, aY) => {
    //normalize vaues (atan2 expects the ray to start from bounding box 0,0) 
    const dX = mX - aX; // mouseX - anchorX 
    const dY = mY - aY;
    const rad = Math.atan2(dY, dX); //calculate angle between the dx and dy points (in radiant)
    const deg = rad * 180 / Math.PI; //convert radiant to degrees (for css)
    return deg;
  }
  
  const handleMouseMove = (event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }

  useEffect(() => {
    const anchor = document.getElementById('anchor'); //get anchor item which is our space cat image
    const anchorBoundingBox = anchor.getBoundingClientRect();  // create an invisible box around the anchor image
    const anchorX = anchorBoundingBox.left + anchorBoundingBox.width / 2;   // get the x,y coordinates of the center of the box 
    const anchorY = anchorBoundingBox.top + anchorBoundingBox.height / 2; 

    //store calculated angle value
    const angleValue = calcAngle(mousePosition.x, mousePosition.y, anchorX, anchorY);
    //rotate  eyes
    const eyes = document.querySelectorAll('.space-cat-eye');
    eyes.forEach(eye => {
      eye.style.transform = `rotate(${ -90 + angleValue }deg)`
    })

    //add listener on mount
    document.addEventListener('mousemove', handleMouseMove);  
    //remove listener on unmount
    return () => { document.removeEventListener('mousemove', handleMouseMove) }  
  }, [mousePosition])
  return (
    <div className='space-cat-container'> 
      <div className='space-cat-text-bubble'> 
        <div className='space-cat-text-bubble-text'> 
          <p> { textBubbleContent } { countdownValue && <span> { countdownValue } </span> } </p>
        </div> 
        <div className='space-cat-text-bubble-1'> </div> 
        <div className='space-cat-text-bubble-2'> </div> 
      </div> 
      <div className={ hoverEffect ? 'space-cat-proximity-hover' : null }> </div> 
      <div className='space-cat'>
        <img id='anchor' src={ spaceCat } /> 
        <div className='space-cat-eyes'>
          <img id='eye-1' className='space-cat-eye' src={ spaceCatEye } />
          <img id='eye-2' className='space-cat-eye' src={ spaceCatEye } />
        </div>
      </div>
    </div>
  )
}
 