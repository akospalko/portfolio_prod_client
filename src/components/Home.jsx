import React from 'react'
import Anchor from './Anchor'
import './Home.css'
import './Shared.css'

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
        <p >
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. 
        </p>
      </div>
    </div>
 </article>
)
}