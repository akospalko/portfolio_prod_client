import React from 'react'
import Anchor from './Anchor'
import './Home.css'
import './Shared.css'
import { homeText } from '../helper/dataControl'
import ProfileImage from '../assets/profile.jpg'

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
      </div>
      {/* image */}
      <div className='home-image'>
        <img src={ ProfileImage } alt='my profile image' />
      </div>
      <div className='home-my-name'>
        <h2> 
          My name is
          <span> Test Name </span> 
        </h2>
      </div>
      {/* text */}
      <div className='home-text'>
        <p>
          { homeText }
        </p>
        {/* <p>"Tech enthusiast" </p> <span>/</span> <p> "Web developer hobbyist"</p> <span>/</span> <p> "GIS specialist" </p> <span>/</span> */}
      </div>
    </div>
 </article>
)
}