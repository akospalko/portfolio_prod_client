// Animated hero that can track the mouse movement with its eyes all day long
import React, { useEffect, useState, useRef } from 'react';
import { throttle } from 'lodash';
import littleHeroURL from '../data/littleHeroURL.json'
import LittleHeroImg from '../assets/little_hero.png';
import LittleHeroEyeImg from '../assets/little_hero_eye.png';
import './LittleHero.css';

export default function LittleHero() {
  // STATE
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  // REFS
  const anchorRef = useRef(null);
  const eyesRef = useRef([]);

  // CALCULATION
  // calculate angle between mouse(mouseX, Y) cursor and center of the box(anchorX, Y)
  const calcAngle = (mX, mY, aX, aY) => {
    // normalize vaues (atan2 expects the ray to start from bounding box 0,0) 
    const dX = mX - aX;
    const dY = mY - aY;
    const rad = Math.atan2(dY, dX);
    const deg = rad * (180 / Math.PI);
    return deg;
  };

  // HANDLER
  const handleMouseMove = throttle((event) => {
    setMousePosition({ x: event.clientX, y: event.clientY });
  }, 16); // throttling interval = 1000ms / 60fps => 16.6ms 

  // EFFECTS
  // initialize and store moving eyes as ref
  useEffect(() => {
    eyesRef.current = Array.from(document.querySelectorAll('.little-hero-eye'));
  }, []);

  // calc angle btw mouse and anchor, rotate eyes 
  useEffect(() => {
    const anchor = anchorRef.current;
    const eyes = eyesRef.current;
    const anchorBoundingBox = anchor.getBoundingClientRect();
    const anchorX = anchorBoundingBox.left + anchorBoundingBox.width / 2;
    const anchorY = anchorBoundingBox.top + anchorBoundingBox.height / 2;

    // store calculated angle value
    const angleValue = calcAngle(mousePosition.x, mousePosition.y, anchorX, anchorY);
    // rotate eyes
    eyes.forEach((eye) => {
      eye.style.transform = `rotate(${ angleValue - 90 }deg)`;
    });

    // add / remove listener on mount
    document.addEventListener('mousemove', handleMouseMove);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [ mousePosition ]);

  return (
    <div className="little-hero-container">
      <div className="little-hero-proximity-hover"></div>
      <div className="little-hero">
        <img id="anchor" ref={ anchorRef } src={ littleHeroURL.hero.large } />
        <div className="little-hero-eyes">
          <img id="eye-1" className="little-hero-eye" src={ littleHeroURL.eye.large || LittleHeroImg } />
          <img id="eye-2" className="little-hero-eye" src={ littleHeroURL.eye.large || LittleHeroEyeImg } />
        </div>
      </div>
    </div>
  );
}