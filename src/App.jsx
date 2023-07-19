// component holding context providers and page layout
import './App.css';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ModalProvider from './context/ModalContext';
import PageLayout from './PageLayout';

function App() {
  return (
    <div className='layout-container' >
      <ModalProvider>
      <GoogleReCaptchaProvider reCaptchaKey={ import.meta.env.VITE_CAPTCHA_V3_SITE_KEY }>
            {/* Page layout */}
            <PageLayout/>
      </GoogleReCaptchaProvider>
      </ModalProvider>
    </div>
  )
}

export default App