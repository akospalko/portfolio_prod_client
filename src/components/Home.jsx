import React from 'react'
import Anchor from './Anchor'
import './Home.css'
import './Shared.css'
import { homeText } from '../helper/dataControl'

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
        <img src='https://images.unsplash.com/photo-1540331547168-8b63109225b7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2038&q=80' alt='person portrait' />
      </div>
      {/* text */}
      <div className='home-text'>
        <p>
          { homeText }
        </p>
      </div>
    </div>
 </article>
)
}