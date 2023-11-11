// Custom reusable react router nav link 
import React from 'react'
import { NavLink } from 'react-router-dom';

export const CustomNavLink = ({ to, onClick, style, content }) => {
  // HANDLER
  const clickHandler = () => {
    if ( onClick ) {
      onClick();
    }
  };

  return (
    <NavLink 
      to={ to || '/' }
      onClick={ clickHandler }
      className={ ( { isActive } ) => (
        isActive ? 
          `${ style.normal } ${ style.active }` 
          : 
          `${ style.normal }` 
      ) }
    > { content }
    </NavLink>
  )
}