// Navigaton wrapper with elements inside: small & large screen layouts
import React from 'react';
import { useModalContext } from '../context/ModalContext';
import { CustomNavLink } from './CustomNavLink';
import { scrollToTop } from '../helper/utility';
import { useTranslation } from 'react-i18next';
import './NavigationElements.css';

export default function NavigationElements({ type }) {
  // CONTEXT 
  const { toggleMenuHandler } = useModalContext();

  // HOOK
  const { t } = useTranslation();

  // DATA
  const navigationElementsData = [
    {
      id: 1,
      name: t( 'about' ),
      path: '/about'
    }, {
      id: 2,
      name: t( 'projects' ),
      path: '/projects'
    }, {
      id: 3,
      name: t( 'contact' ),
      path: '/contact'
    }
  ]

 let style = { container: '', normal: '', active: '' }
 let clickHandler;
  switch( type ) {
    case 'header-small': 
      style.container = 'navigation-header-container';
      style.normal = 'navigation-header-item navigation-header-item-small'; 
      style.active = 'navigation-header-item--active';
      clickHandler = () => toggleMenuHandler( true );
      break;
    case 'header-large': 
      style.container = 'navigation-header-container';
      style.normal = 'navigation-header-item navigation-header-item-large'; 
      style.active = 'navigation-header-item--active';
      break;
    case 'footer-small': 
      style.container = 'navigation-footer-container navigation-footer-small-container';
      style.normal = 'navigation-footer-item navigation-footer-item-small'; 
      style.active = '';
      clickHandler = () => scrollToTop();
    break;
    case 'footer-large': 
      style.container = 'navigation-footer-container navigation-footer-large-container';
      style.normal = 'navigation-footer-item navigation-footer-item-large'; 
      style.active = '';
      clickHandler = () => scrollToTop();
      break;
    default: 
      style.container = 'navigation-container';
      style.normal = 'navigation-header-item navigation-header-item-small'; 
      style.active = 'navigation-header-item--active';
  }

  return (
    <div className={ style.container }>
      { navigationElementsData.map( elem => (
          <CustomNavLink 
            key={ elem.id } 
            to={ elem.path } 
            onClick={ clickHandler }
            content={ <span> { elem.name } </span> } 
            style={ style } 
          /> 
        ) ) 
      }
    </div>
  )
}