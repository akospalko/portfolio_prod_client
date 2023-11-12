// Container to hold page layout: header route/body content, modal
import React, { lazy, Suspense } from 'react';
import PageLoader from './components/PageLoader';
import Header from './layout/Header';
import { Route, Routes, useLocation } from "react-router-dom";
import { useModalContext } from './context/ModalContext';

// Lazy-loaded components
const Home = lazy( () => import('./components/Home') );
const About = lazy( () => import('./components/About') );
const Projects = lazy( () => import('./components/Projects') );
const Contact = lazy( () => import('./components/Contact') );
const ErrorPage = lazy( () => import('./components/ErrorPage') );
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
      <Header />
      <Suspense fallback={ <PageLoader/> }>
        <ToasterInitializer/>
        { isModalToggled && <ProjectCardModal/> }
          <Routes>
            <Route path={ '/' } element={ <Home/> } />
            <Route path={ '/about' } element={ <About/> } /> 
            <Route path={ '/projects' } element={ <Projects/> } />  
            <Route path={ '/contact' } element={ <Contact/> } /> 
            <Route path={ '*' } element={ <ErrorPage/> } />
          </Routes>
        { [ '/about', '/projects', '/contact' ].includes( location.pathname ) && <Footer/> }
      </Suspense>
    </>
  )
}