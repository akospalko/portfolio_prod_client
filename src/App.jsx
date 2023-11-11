// Component holding context providers and page layout
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ModalProvider from './context/ModalContext';
import PageLayout from './PageLayout';
import { I18nextProvider } from 'react-i18next';
import i18n from './helper/i18nInitialization';
import './App.css';
import PageLoader from './components/PageLoader';
import { useState, useEffect } from 'react';
import './index.css';

function App() {
  // STATE
  const [ isPageLoaded, setPageLoaded ] = useState(false);

  // EFFECT
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setPageLoaded(true);
      }, 200 )
    };

    window.addEventListener('load', handleLoad);
    return () => { window.removeEventListener('load', handleLoad) };
  }, []);

  return (
    <>
      <I18nextProvider i18n={ i18n }>
      <ModalProvider>
      <GoogleReCaptchaProvider reCaptchaKey={ import.meta.env.VITE_CAPTCHA_V3_SITE_KEY }>
       
        {/* <PageLayout/> */}
  
        {!isPageLoaded ? 
          <PageLoader style='shared-page-container--initial-loader'/> 
          : 
          ( <div className='layout-container'>
                  <PageLayout/>
            </div> 
          )
        }
      </GoogleReCaptchaProvider>
      </ModalProvider>
      </I18nextProvider>
    </>
  )
}

export default App;