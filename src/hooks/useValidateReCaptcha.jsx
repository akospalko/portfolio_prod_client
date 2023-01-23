import axios from 'axios';

const useValidateReCaptcha = () => {
  const validateReCaptcha = async (token) => {
    //store validation result
    let isCaptchaValid = false;
    let statusMessage = '';
    //token validation 
    if(token) { 
      console.log('validating token:', token)
      //post data to server
      await axios.post("/captcha", {token: token})
      //successful response from server
      .then(res => {
        console.log(res);
        isCaptchaValid = res.data.success;
        statusMessage = res.data.responseMsg
      })
        //error response from server
      .catch((err)=> {
        // console.log('Couldn\'t send token to server:', err);
        isCaptchaValid = false;
        statusMessage = err;
      })
    } 
    else {
      isCaptchaValid = false;
      statusMessage = 'no token';
    } 
    console.log('validating token:', token, isCaptchaValid, statusMessage);
    return { isCaptchaValid, statusMessage }; // return validation result (true || false)
  }
  return { validateReCaptcha };
}
export default useValidateReCaptcha;