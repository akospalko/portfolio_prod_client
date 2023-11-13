// Container to hold page layout: header route/body content, modal
import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useModalContext } from './context/ModalContext';
import PageLoader from './components/PageLoader';
import Header from './layout/Header';
import Home from './components/Home';
import ErrorPage from './components/ErrorPage';

// Lazy-loaded components
const About = lazy( () => import('./components/About') );
const Projects = lazy( () => import('./components/Projects') );
const Contact = lazy( () => import('./components/Contact') );
const ProjectCardModal = lazy( () => import('./components/ProjectCardModal') );
const Footer = lazy( () => import('./layout/Footer') );
const ToasterInitializer = lazy( () => import('./components/ToasterInitializer') );

export default function PageLayout() {
  // HOOK
  const location = useLocation(); 
  
  // CONTEXT
  const { isModalToggled } = useModalContext();

  return (
    <>
      <Header/>
      <ErrorBoundary fallback={ <ErrorPage type='error-no-internet-connection'/> }>
        <Routes>
          <Route path={ '/' } element={ <Home/> } />
        </Routes>
        <Suspense fallback={ <PageLoader/> }>
          <ToasterInitializer/>
          { isModalToggled && <ProjectCardModal/> }
            <Routes>
              <Route path='/about' element={ <About/> } /> 
              <Route path='/projects' element={ <Projects/> } />  
              <Route path='/contact' element={ <Contact/> } /> 
              <Route path='*' element={ <ErrorPage type='error-page-does-not-exist'/> } />
            </Routes>
          { [ '/about', '/projects', '/contact' ].includes( location.pathname ) && <Footer/> }
        </Suspense>
      </ErrorBoundary>
    </>
  )
}