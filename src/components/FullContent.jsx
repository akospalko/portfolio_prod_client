// outsource Home to its own component
import React from 'react'
import './FullContent.css'
import About from './About'
import Contact from './Contact'
import Projects from './Projects'
import Home from './Home'
import Footer from '../layout/Footer'

export default function FullContent() {
  return (
    <> 

      <Home pageLayout={'fullContentPage'}/>
      <About pageLayout={'fullContentPage'}/>
      <Projects pageLayout={'fullContentPage'}/>
      <Contact pageLayout={'fullContentPage'}/>
      <Footer/>
    </>
  )
}