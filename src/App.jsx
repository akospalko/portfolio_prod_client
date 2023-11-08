// Component holding context providers and page layout
import './App.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ModalProvider from './context/ModalContext';
import PageLayout from './PageLayout';
import { I18nextProvider } from 'react-i18next';
import i18n from 'i18next';
import enTranslation from './locales/en.json';
import huTranslation from './locales/hu.json';

// Init locales
i18n.init({
  interpolation: { escapeValue: false }, 
  lng: 'en', // default language
  resources: {
    en: { translation: enTranslation },
    hu: { translation: huTranslation }
  },
});

function App() {
  return (
    <div className='layout-container'>
      <I18nextProvider i18n={i18n}>
        <ModalProvider>
        <GoogleReCaptchaProvider reCaptchaKey={ import.meta.env.VITE_CAPTCHA_V3_SITE_KEY }>
          <PageLayout/>
        </GoogleReCaptchaProvider>
        </ModalProvider>
      </I18nextProvider>
    </div>
  )
}

export default App