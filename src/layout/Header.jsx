// Header for all layouts
import React from 'react';
import './Header.css';
import Logo from '../assets/logo.svg';
import { MenuOpenIcon, MenuCloseIcon } from '../components/SVGComponent';
import { Link } from "react-router-dom";
import { useState } from 'react';
import Navigation from './Navigation';

export default function Header() {
  const [toggled, setToggled] = useState(false); // menu bar toggle for responsive view

  //toggle menu bar handler for responsive view, disable scroll for body
  const toggleMenuHandler = () => {
    setToggled(prev => {
      if(prev === true) {
        document.body.style.position = 'static';
        document.body.style.removeProperty('width');
      } else {
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
      }
        return !prev;
    });
  }
  //close menu and remove active menubar styles when clicking on home logo   
  const closeMenuHandler = () => {
    setToggled(prev => {
      if(prev === true) {
        document.body.style.position = 'static';
        document.body.style.removeProperty('width');
        return !prev;
      } else {
        return prev;
      }
    });
  }

  //Conditional rendering header
  //responsive view
  const headerResponsive = 
    <div className={'layout-header-responsive'}>
      <div 
        className='header_responsive-menubar'
        onClick={ toggleMenuHandler }
      > 
        {toggled ? 
          <MenuCloseIcon 
            height={35} 
            width={35} 
            stroke={'var(--color_5)'}
          />
        :
          <MenuOpenIcon 
            height={35} 
            width={35} 
            stroke={'var(--color_5)'}
          />
        }
      </div>
      <div 
        className='header_responsive-logo'
        onClick={ closeMenuHandler}
      >  
        <Link to={'/'}> 
          <img src={Logo} alt='logo'
          />
        </Link>
      </div>
      <div className='header'> </div>
      {/* menu bar */}
      {toggled ? 
        (<div className={'header_responsive-navmenu'}>
          <Navigation toggleHandler={ toggleMenuHandler } />
        </div>) : null
      }
    </div>

  //pc view
  const header =     
    <div className={'layout-header-pc'}>
      <div className='header-logo'>  
        <Link to={'/'}> 
          <img src={Logo} alt='logo'/>
        </Link>
      </div>
      <Navigation />     
      <div className={ ['header', 'dummy'].join(' ') }> </div>
    </div>

  return (
    <>
      { headerResponsive }
      { header }
    </>
  )
}