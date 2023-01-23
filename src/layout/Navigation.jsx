//responsive navbar: full screen
import React from 'react'
import { navElements } from '../helper/dataControl'
import './Navigation.css'
import { NavLink } from "react-router-dom";

export default function NavigationResponsive({ toggleHandler }) {
//conditional rendering: navigation elements
  const responsiveNav = 
  <div className='navigation_responsive-container'>
    <ul> {
      navElements.map((elem) => {
        if(elem.id === 0) return; // don't render home route
        return <NavLink 
          key={elem.id} 
          to={elem.path}
          onClick={toggleHandler}
        > 
          <li className='navigation_responsive-item'> <p> {elem.name} </p> </li>
        </NavLink>
      })
    } </ul> 
  </div>

  const nav = 
  <div className='navigation-container'>
    <ul> {
      navElements.map((elem) => {
        if(elem.id === 0) return; // don't render home route
        return <NavLink 
          key={elem.id} 
          to={elem.path}
          className={({ isActive }) => 
          (isActive ? 'navigation-item--active' : null )}
        > 
          <li className='navigation-item'> <p> {elem.name} </p> </li>
        </NavLink>
      })
    } </ul> 
  </div> 

  return (
    <>
      {responsiveNav}
      {nav}
    </>
  )
}