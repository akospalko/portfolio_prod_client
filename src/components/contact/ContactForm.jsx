// Content send message form 
import React, { useState, useEffect, useCallback } from 'react'
import { buildForm, getFormValues, toasterProps } from '../../helper/utility';
import useValidateReCaptcha from '../../hooks/useValidateReCaptcha';
import { LoaderIcon } from '../../data/SVGComponents';
import axios from 'axios';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { validateForm } from '../../helper/utility';
import { toast } from 'react-toastify';
import ContactFormData from '../../data/ContactFormData';
import { useTranslation } from 'react-i18next';
import useCalculateRemainingCharacters from '../../hooks/useCalculateRemainingCharacters';
import './ContactForm.css';

export default function ContactForm() {
  // HOOKS 
  const { executeRecaptcha } = useGoogleReCaptcha();
  const { validateReCaptcha } = useValidateReCaptcha();
  const { t, i18n } = useTranslation();

  // DATA
  const initializeContactFormData = ContactFormData();

  // STATES
  const [ contactData, setContactData ] = useState( initializeContactFormData() );
  const [ isFormValid, setIsFormValid ] = useState( false );
  const [ statusMessage, setStatusMessage ] = useState( '' );
  const [ isSubmittingForm, setIsSubmittingForm ] = useState( false );

  // EFFECT
  // call toaster on status change
  useEffect( () => {
    if ( isSubmittingForm && statusMessage ) {
      callToaster( statusMessage );
    }
  }, [ isSubmittingForm, statusMessage ] );

  // reinitialize contact form on each language change  
  useEffect(() => {
    setContactData(initializeContactFormData());
  }, [ i18n.language ]);

  // HANDLERS
  // toaster with mail send status message 
  const callToaster = ( status = '' ) => {
    toast( status, toasterProps );
  };

  // input change handler
  const changeHandler = ( e ) => {
    e.preventDefault();
    const { name: eventName, value: eventValue } = e.target;
    let updateObject = { ...contactData };
    let updateElement = { ...updateObject[ eventName ] };
    updateElement.touched = true;
    updateElement.value = eventValue;
    updateElement.valid = validateForm( updateElement.value, updateElement.validation );
    updateElement.wordCount = updateElement.value.length; // update word count
    updateObject[ eventName ] = updateElement;
    setContactData( updateObject );
    // check form validity
    const validatedForm = Object.values( updateObject ).every( ( elem ) => elem.valid );
    setIsFormValid(validatedForm);
  }

  // submit form
  const submitFormHandler = useCallback( async (e) => {
    e.preventDefault();
    setIsSubmittingForm( true ); 
    setStatusMessage( t('status-sending-mail') );
    // disable button right after submit
    setIsFormValid( false ); 
    // execute recaptcha if available
    if ( !executeRecaptcha ) {
      setStatusMessage( t('status-recaptcha-not-available') );
      setIsSubmittingForm( false ); 
      return;
    } 
    //execute captcha: generate token
    const token = await executeRecaptcha( 'contact' );
    //validate recaptcha 
    const { isCaptchaValid, statusMessage, statusCode } = await validateReCaptcha( token ); // validate token
    if( isCaptchaValid ) { // if captcha is valid
      try {
        // transform form data to mail
        const mailData = getFormValues( contactData );
        const sendMailResponse = await axios.post( `${ import.meta.env.VITE_AXIOS_BASE_URL }/sendmail`, mailData );
        setStatusMessage( sendMailResponse.data.statusMessage );
        setContactData( contactData ) // reset form to its initial state  
      } catch ( error ) {
        setStatusMessage(`${ error.response.data.statusMessage } ( ${ error.response.status } )` );
        setIsFormValid( true ); // revert back form validity (re-enable send button)
      }
    } else {
      setStatusMessage( `${ statusMessage } ( ${ statusCode } )` );
      setIsFormValid( true );
    } 
    // allow users to read status messages if request happens too quickly 
    setTimeout( () => {
      setIsSubmittingForm( false ); 
    }, [ 1000 ] )
  }, [ executeRecaptcha, setStatusMessage, validateReCaptcha ])

  return (
    <form onSubmit={ submitFormHandler } className='contact-form'>
      {/* enable loader modal when msg is being sent */}
      { isSubmittingForm ? <div className='contact-form-loader-modal '> 
        <div className='contact-form-loader'> 
          <LoaderIcon 
            width='75px'
            height='75px'
            stroke={ 'var(--color_3_light)' } 
          />
        </div> 
        <div className='contact-form-status-message'> 
          <span> { statusMessage } </span>
        </div>
      </div> : null }
      { buildForm( contactData ).map( ( elem ) => {
        if( elem.config.fieldType === 'input' ) {
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
        } else if ( elem.config.fieldType === 'textarea' ) {
          const remainingCharacters = useCalculateRemainingCharacters(
            elem.config.wordCount, elem.config.validation.maxLength
          );

          return <div 
          className='contact-form-message'
          key={ elem.id }>
            <textarea 
              className={ elem.config.valid === true ? 'contact-form-textarea valid' : 'contact-form-textarea invalid' } 
              onChange={ changeHandler } 
              type={ elem.config.type } 
              name={ elem.config.name }
              value={ elem.config.value }  
              maxLength={ elem.config.validation.maxLength }
              placeholder={ elem.config.placeholder }
            />
            <div className='contact-form-character-count'> 
              <span
                title='remaining characters'
                className={ elem.config.wordCount < elem.config.validation.maxLength && elem.config.wordCount >= elem.config.validation.minLength ? 'valid-color' : 'invalid-color' }
              >
                { remainingCharacters } 
              </span>
            </div>
          </div>
        }
      } ) }
      <div className='contact-form-button'> 
        <button disabled={ !isFormValid || isSubmittingForm }> 
          <span> 
            { !isFormValid ? t('status-button-fill-in-form') : t('status-button-submit-form') } 
          </span> 
        </button>
      </div>
    </form>
  )
}