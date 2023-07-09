// component holding context providers and page layout
import './App.css'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import ModalProvider from './context/ModalContext'
import PageLayout from './PageLayout'

function App() {
  return (
    <div className='layout-container' >
      <GoogleReCaptchaProvider reCaptchaKey={ import.meta.env.VITE_CAPTCHA_V3_SITE_KEY }>
      <ModalProvider>
        {/* Page layout */}
        <PageLayout/>
      </ModalProvider>
      </GoogleReCaptchaProvider>
    </div>
  )
}

export default App