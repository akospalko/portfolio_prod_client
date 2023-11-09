import axios from 'axios';
import { useTranslation } from 'react-i18next'

const useValidateReCaptcha = () => {

  // HOOK
  const { t } = useTranslation();

  const validateReCaptcha = async (token) => {
    //store validation result
    let isCaptchaValid = false;
    let statusMessage = '';
    let statusCode = 500; // default value: unsuccessful api request

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
        statusMessage = t('status-server-error')
        statusCode = error.response.status;
      }
    } 
    else {
      isCaptchaValid = false;
      statusMessage = t('status-recaptcha-no-token');
    } 
    return { isCaptchaValid, statusMessage, statusCode }; // return validation result (true || false)
  }
  return { validateReCaptcha };
}
export default useValidateReCaptcha;