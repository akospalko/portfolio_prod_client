import axios from 'axios';
import { API_REQUEST_UNABLE_TO_REACH_SERVER, RECAPTCHA_NO_TOKEN } from '../helper/dataControl'

const useValidateReCaptcha = () => {
  const validateReCaptcha = async (token) => {
    //store validation result
    let isCaptchaValid = false;
    let statusMessage = '';
    let statusCode = 500; //default value: unsuccessful api request

    //token validation 
    if(token) { 
      try {
        //post data to server
        const verifiedCaptcha = await axios.post(`${ import.meta.env.VITE_AXIOS_BASE_URL }/captcha`, { token: token });  
        isCaptchaValid = verifiedCaptcha.data.verified;
        statusMessage = verifiedCaptcha.data.statusMessage;
        statusCode = verifiedCaptcha.status;
      } catch(error) { 
        isCaptchaValid = false;
        statusMessage = API_REQUEST_UNABLE_TO_REACH_SERVER;
        statusCode = error.response.status;
      }
    } 
    else {
      isCaptchaValid = false;
      statusMessage = RECAPTCHA_NO_TOKEN;
    } 
    return { isCaptchaValid, statusMessage, statusCode }; // return validation result (true || false)
  }
  return { validateReCaptcha };
}
export default useValidateReCaptcha;