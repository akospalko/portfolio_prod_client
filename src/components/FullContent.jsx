// Render multiple pages as one  
import React, { useRef } from 'react'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Home from './Home'
import Footer from '../layout/Footer'

export default function FullContent() {
  // REF
  const targetRef = useRef(null);

  // HANDLER
  const handleScrollDown = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <> 
      <Home handleScrollDown={ handleScrollDown }/>
      <About isAutoHeight targetRef={ targetRef }/>
      <Projects isAutoHeight />
      <Contact isAutoHeight />
      <Footer/> 
    </>
  )
}