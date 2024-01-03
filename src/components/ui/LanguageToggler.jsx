// Toggle btw languages UI component
import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageToggler.css';

// CONSTANT
const CONSTANTS = {
  LANGUAGE_EN: 'en',  
  LANGUAGE_HU: 'hu'
}

// COMPONENT
const LanguageToggler = () => {
  // HOOK
  const { i18n } = useTranslation();

  // STATE
  const [ activeLanguage, setActiveLanguage ] = useState( i18n.language );
  
  // HANDLER
  const onLanguageChange = ( language ) => {
    i18n.changeLanguage( language );
    setActiveLanguage( language );
  };

  // STYLE
  const activeLanguageCheck = ( language ) => activeLanguage === language;
  
  return (
    <div className='language-toggler'>
      <button 
        className={ `button--language-toggler ${ activeLanguageCheck( CONSTANTS.LANGUAGE_EN ) && 'button--language-toggler--active' }` }
        onClick={ () => onLanguageChange( CONSTANTS.LANGUAGE_EN ) }
        disabled={ activeLanguageCheck( CONSTANTS.LANGUAGE_EN ) }
      > <span className='button--language-toggler-content'> { CONSTANTS.LANGUAGE_EN } </span>
      </button>
      <button 
        className={ `button--language-toggler ${ activeLanguageCheck( CONSTANTS.LANGUAGE_HU ) && 'button--language-toggler--active' }` }
        onClick={ () => onLanguageChange( CONSTANTS.LANGUAGE_HU ) }
        disabled={ activeLanguageCheck( CONSTANTS.LANGUAGE_HU ) }
      > <span className='button--language-toggler-content'> { CONSTANTS.LANGUAGE_HU } </span>
      </button>
    </div>
  );
}

export default LanguageToggler;