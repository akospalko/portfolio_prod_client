// Content send message form 
import React from 'react'
import { useState, useCallback } from 'react'
import './ContactForm.css'
import { contactFormData, SENDING_EMAIL, RECAPTCHA_NOT_AVAILABLE } from '../helper/dataControl'
import { buildForm, getFormValues, calcRemainingCharacters } from '../helper/utility'
import useValidateReCaptcha from '../hooks/useValidateReCaptcha'
import { LoaderIcon } from './SVGComponents'
import axios from 'axios'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3'
import { validateForm } from '../helper/validateForm'

export default function ContactForm() {
  // HOOKS 
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { validateReCaptcha } = useValidateReCaptcha();
  
  // STATES
  const [contactData, setContactData] = useState(contactFormData);
  const [isFormValid, setIsFormValid] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');
  const [isSubmittingForm, setIsSubmittingForm] = useState(false);
  
  // HANDLERS
  //input change handler
  const changeHandler = (e) => {
    e.preventDefault();
    const { name: eventName, value: eventValue } = e.target;
    let updateObject = { ...contactData };
    let updateElement = { ...updateObject[eventName] };
    updateElement.touched = true;
    updateElement.value = eventValue;
    updateElement.valid = validateForm(updateElement.value, updateElement.validation);
    updateElement.wordCount = updateElement.value.length; // update word count
    updateObject[eventName] = updateElement;
    setContactData(updateObject);
    //check form validity
    let validatedForm = true;
    for(let elem in updateObject) {
      validatedForm = updateObject[elem].valid && validatedForm
    }
    setIsFormValid(validatedForm);
  }

  const submitFormHandler = useCallback(async (e) => {
    e.preventDefault();
    setIsSubmittingForm(true); 
    setStatusMessage(SENDING_EMAIL);
    // disable button right after submit
    setIsFormValid(false); 
    // execute recaptcha if available
    if (!executeRecaptcha) {
      setStatusMessage(RECAPTCHA_NOT_AVAILABLE);
      setIsSubmittingForm(false); 
      return;
    } 
    //execute captcha: generate token
    const token = await executeRecaptcha('contact');
    //validate recaptcha 
    const { isCaptchaValid, statusMessage, statusCode } = await validateReCaptcha(token); // validate token
    if(isCaptchaValid) { //if captcha is valid
      try {
        //transform form data to mail
        const mailData = getFormValues(contactData);
        const sendMailResponse = await axios.post(`${ import.meta.env.VITE_AXIOS_BASE_URL }/sendmail`, mailData);
        setStatusMessage(sendMailResponse.data.statusMessage);
        setContactData(contactFormData) // reset form to its initial state  
      } catch (error) {
        setStatusMessage(`${ error.response.data.statusMessage } (${ error.response.status })`);
        setIsFormValid(true); // revert back form validity (re-enable send button)
      }
    } else {
      setStatusMessage(`${ statusMessage } (${ statusCode })`);
      setIsFormValid(true);
    } 
    // allow users to read status messages if request happens too quickly 
    setTimeout( () => {
      setIsSubmittingForm(false); 
    }, [1000] )
  }, [executeRecaptcha, setStatusMessage, validateReCaptcha])

  return (
    <form onSubmit={ submitFormHandler } className='contact-form'>
      {/* enable loader modal when msg is being sent */}
      { isSubmittingForm ? <div className='contact-form-loader-modal '> 
        <div className='contact-form-loader'> 
          <LoaderIcon 
            width='75'
            height='75'
            stroke={ 'var(--color_1)' } 
          />
        </div> 
        <div className='contact-form-status-message'> 
          <span> { statusMessage } </span>
        </div>
      </div> : null }
      { buildForm(contactData).map((elem) => {
        if(elem.config.fieldType === 'input') {
          return <input 
            key={ elem.id }
            className={ elem.config.valid === true ? 'contact-form-input-field valid' : 'contact-form-input-field invalid' } 
            onChange={ changeHandler } 
            type={ elem.config.type } 
            name={ elem.config.name }
            value={ elem.config.value } 
            minLength={ elem.config.validation.minLength }
            maxLength={ elem.config.validation.maxLength }
            placeholder={ elem.config.placeholder }
          />
        } else if (elem.config.fieldType === 'textarea') {
          return <div 
          className='contact-form-message'
          key={ elem.id }>
            <textarea 
              className={ elem.config.valid === true ? 'contact-form-input-field valid' : 'contact-form-input-field invalid' } 
              onChange={ changeHandler } 
              type={ elem.config.type } 
              name={ elem.config.name }
              value={ elem.config.value }  
              maxLength={ elem.config.validation.maxLength }
              placeholder={ elem.config.placeholder }
            />
            <div className='contact-form-character-count'> 
              <span>
                { calcRemainingCharacters(elem.config.wordCount, elem.config.validation.maxLength) } 
              </span>
            </div>
          </div>
        }
      }) }
      <div className='contact-form-button'> 
        <button disabled={ !isFormValid }> 
          <span> 
            { !isFormValid ? 'Fill in form': ' Send '} 
          </span> 
        </button>
      </div>
    </form>
  )
}