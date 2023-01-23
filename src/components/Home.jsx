import React from 'react'
import Anchor from './Anchor'
import './Home.css'
import './Shared.css'
import IntroductionImage from '../assets/introduction_image.png'

export default function Home() {
  return (
  <article className='shared-page-container home-background--color home--height'>
    {/* anchor tag */}
    <Anchor componentName='home'/> 
    <div className='home-content'> 
      {/* title */}
      <div className='home-title'>
        <h1>
          Welcome <span> fellow visitor </span> 
        </h1>
        <h2> 
          <span> My name is </span> 
          <span> Test Name </span> 
        </h2>
      </div>
      {/* image */}
      <div className='home-image'>
        <img src={ IntroductionImage } />
      </div>
      {/* text */}
      <div className='home-text'>
        <p >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </p>
      </div>
    </div>
 </article>
)
}