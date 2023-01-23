//whenever the user requests an unknown resource -> redirect to this page
//after a short delay (e.g. 10 seconds) navigate user back to home page
import React, { useEffect, useState } from 'react'
import './PageNotFound.css'
import { useNavigate } from 'react-router-dom'
import ErrorPage from '../assets/error-page.jpg'

export default function PageNotFound() {
  const navigate = useNavigate();

  const [countdown, setCountDown] = useState(100); 
  useEffect(() => {
    if(!countdown) {
      navigate('/');
    }
    if(countdown) {
      setTimeout(() => {
        setCountDown(prev => prev - 1);
      }, [1000]);
    }
  }, [countdown])
  
  return (
    <div className='error-page-container'>
      <img src={ErrorPage} alt="page not found" />
    </div>
    // <div>PageNotFound, returning to home page in { countdown }s </div>
  )
}

