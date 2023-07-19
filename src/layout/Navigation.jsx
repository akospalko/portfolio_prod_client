// Navigaton wrapper with elements inside: small & large screen layouts
import React from 'react'
import { navigationElementsTemplate } from '../helper/dataControl'
import './Navigation.css'
import { NavLink } from "react-router-dom";
import { useMediaQuery } from 'react-responsive';
import { useModalContext } from '../context/ModalContext';

export default function Navigation() {
  // CONTEXT 
  const { toggleMenuHandler } = useModalContext();
  // HOOK
  const isBelow768Px = useMediaQuery({ query: '(max-width: 767px)' });

  // ELEMENTS
  // Navigation elements
  // nav elements for menu modal / small screen layout
  const menuModalNavigationElements = (
    navigationElementsTemplate.map( (elem) => {
      if(elem.id === 0) return; // don't render home route
        return ( 
          <NavLink 
            key={ elem.id } 
            to={ elem.path }
            onClick={ () => toggleMenuHandler(true) }
            className={ ({ isActive }) => (
              isActive ? 
                'navigation-item navigation-item--active' 
                : 
                'navigation-item' 
            ) }
          >
            <span> { elem.name } </span> 
          </NavLink>
        )
    }) 
  )
  // nav elements for header/ large screen layout
  const headerNavigationElements = (
    navigationElementsTemplate.map( (elem) => {
      if(elem.id === 0) return; 
        return ( 
          <NavLink 
            key={ elem.id } 
            to={ elem.path }
            className={ ({ isActive }) => (
              isActive ? 
                'navigation-item navigation-item--active' 
                : 
                'navigation-item' 
            ) }
          >
            <span> { elem.name } </span> 
          </NavLink>
        )
    })
  )

  return (
    <div className='navigation-container'>
      { isBelow768Px ? menuModalNavigationElements : headerNavigationElements }
    </div>
  )
}