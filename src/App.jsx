import './App.css'
import Header from './layout/Header'
import { Route, Routes } from "react-router-dom"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FullContent from './components/FullContent'
import PageNotFound from './components/PageNotFound'
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';

function App() {
  return (
    <div className='layout-container' >
      <GoogleReCaptchaProvider reCaptchaKey={ import.meta.env.VITE_CAPTCHA_V3_SITE_KEY }>
        {/* Header/Navigation layout */}
        <Header/>
        {/* Routes */}
        <Routes>
          <Route path={'/'} element={ <FullContent/> } />
          <Route path={'/about'} element={ <About/> } /> 
          <Route path={'/projects'} element={ <Projects/> } /> 
          <Route path={'/contact'} element={ <Contact/> } /> 
          <Route path={'*'} element={ <PageNotFound/> } /> 
        </Routes>
      </GoogleReCaptchaProvider>
    </div>
  )
}

export default App