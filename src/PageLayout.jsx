// Container to hold page layout: header route/body content, modal
import React, { lazy, Suspense } from 'react';
import Header from './layout/Header';
import { Route, Routes, useLocation } from "react-router-dom";
import { useModalContext } from './context/ModalContext';
import { ToastContainer } from 'react-toastify';
import PageLoader from './components/PageLoader';
import './App.css';
import 'react-toastify/dist/ReactToastify.css';

// Lazy-loaded components
const Home = lazy( () => import('./components/Home') );
const About = lazy( () => import('./components/About') );
const Projects = lazy( () => import('./components/Projects') );
const Contact = lazy( () => import('./components/Contact') );
const ErrorPage = lazy( () => import('./components/ErrorPage') );
const ProjectCardModal = lazy( () => import('./components/ProjectCardModal') );
const Footer = lazy( () => import('./layout/Footer') );

export default function PageLayout() {
  // PROPS
  const toastProps = {
    position: 'top-right',
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: 'dark',
  }; 

  // HOOK
  const location = useLocation(); 
  
  // CONTEXT
  const { isModalToggled } = useModalContext();

  return (
    <Suspense fallback={ <PageLoader /> }>
      {/* Modal */}
      { isModalToggled && <ProjectCardModal/> }
      {/* Toast */}
      <ToastContainer { ...toastProps } />
      {/* Header/Navigation layout */}
      { <Header /> }
      {/* Routes */}
        <Routes>
          <Route path={ '/' } element={ <Home/> } />
          <Route path={ '/about' } element={ <About/> } /> 
          <Route path={ '/projects' } element={ <Projects/> } />  
          <Route path={ '/contact' } element={ <Contact/> } /> 
          <Route path={ '*' } element={ <ErrorPage/> } />
        </Routes>
      { [ '/about', '/projects', '/contact' ].includes( location.pathname ) && <Footer/> }
    </Suspense>
  )
}