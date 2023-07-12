// Container to hold page layout: header route/body content, modal
import './App.css'
import Header from './layout/Header'
import { Route, Routes } from "react-router-dom"
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import FullContent from './components/FullContent'
import PageNotFound from './components/PageNotFound'
import { useModalContext } from './context/ModalContext'
import ProjectCardModal from './components/ProjectCardModal'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function PageLayout() {
  // CONTEXT
  const { isModalToggled } = useModalContext();

  // PROPS
  const toastProps = {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    newestOnTop: false,
    closeOnClick: true,
    rtl: false,
    pauseOnFocusLoss: true,
    draggable: true,
    pauseOnHover: true,
    theme: "dark",
  }; 

  return (
    <>
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
      {/* Modal */}
      { isModalToggled && <ProjectCardModal /> }
      {/* Toast */}
      <ToastContainer {...toastProps} />
    </>
  )
}