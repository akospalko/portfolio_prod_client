// Container to hold page layout: header route/body content, modal
import React, { lazy, Suspense } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import { useModalContext } from '../context/ModalContext';
import PageLoader from '../pages/PageLoader';
import Header from './Header';
import Home from '../pages/Home';
import ErrorPage from '../pages/ErrorPage';

// Lazy-loaded components
const About = lazy( () => import('../pages/About') );
const Projects = lazy( () => import('../pages/Projects') );
const Contact = lazy( () => import('../pages/Contact') );
const ProjectCardModal = lazy( () => import('../components/projects/ProjectCardModal') );
const Footer = lazy( () => import('./Footer') );
const ToasterInitializer = lazy( () => import('../helper/ToasterInitializer') );

export default function PageLayout() {
  // HOOK
  const location = useLocation(); 
  
  // CONTEXT
  const { isModalToggled } = useModalContext();
  return (
    <>
      <Header/>
      <ErrorBoundary fallback={ <ErrorPage type='error-no-internet-connection'/> }>
        <Suspense fallback={ <PageLoader/> }>
          <ToasterInitializer/>
          { isModalToggled && <ProjectCardModal/> }
            <Routes>
              <Route path='/' element={ <Home/> } />
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