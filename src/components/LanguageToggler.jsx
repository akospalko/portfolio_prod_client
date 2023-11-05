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
  const [activeLanguage, setActiveLanguage] = useState(i18n.languages[0]);
  
  // HANDLER
  const onLanguageChange = (langauge) => {
    i18n.changeLanguage(langauge);
    setActiveLanguage(langauge)
  };

  // STYLE
  const activeLanguageCheck = (language) => activeLanguage === language;
  
  return (
    <div className='language-toggler'>
      <button 
        className={ `language-toggle-button ${ activeLanguageCheck(CONSTANTS.LANGUAGE_EN) && 'language-toggle-button--active' }` }
        onClick={ () => onLanguageChange(CONSTANTS.LANGUAGE_EN) }
        disabled={ activeLanguageCheck(CONSTANTS.LANGUAGE_EN) }
      > 
      <span> {CONSTANTS.LANGUAGE_EN} </span>
      </button>
      <button 
        className={ `language-toggle-button ${ activeLanguageCheck(CONSTANTS.LANGUAGE_HU) && 'language-toggle-button--active' }` }
        onClick={ () => onLanguageChange(CONSTANTS.LANGUAGE_HU) }
        disabled={activeLanguageCheck(CONSTANTS.LANGUAGE_HU)}
      > 
      <span> {CONSTANTS.LANGUAGE_HU} </span>
      </button>
    </div>
  );
}

export default LanguageToggler