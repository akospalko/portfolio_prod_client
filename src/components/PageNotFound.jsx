//redirect to this page when unknown path is entered
//navigate user back to home page after a short delay
import React, { useEffect, useState } from 'react'
import './PageNotFound.css'
import './Shared.css'
import { useNavigate } from 'react-router-dom'
import SpaceCat from './SpaceCat'
import { textBubbleContentPageNotFound } from '../helper/dataControl'

export default function PageNotFound() {
  const navigate = useNavigate();

  const [countdown, setCountDown] = useState(1000); 

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
    <div className='shared-page-container error-page-container--layout'>
       <div className='shared-title'> 
        <h1> Planet is not found! </h1>
      </div>
      <div className='error-page-image'> 
        <SpaceCat 
          textBubbleContent={ textBubbleContentPageNotFound } 
          countdownValue={ countdown }
        />
      </div>
    </div>
  )
}

