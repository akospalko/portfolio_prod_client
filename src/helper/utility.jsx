// Utility functions
// build input fields from contact form data
export const buildForm = (formElements) => {
  const newFormArr = [];
  for(let element in formElements) {
    newFormArr.push({id: element, config: formElements[element]});
  }
  return newFormArr;
} 

// transform form data to a simple object only containing the input field name and its value
 export const getFormValues = (formData) => {
  let newFormObj = {};
  for(let element in formData) {
    newFormObj = {...newFormObj, [element]: formData[element].value};
  }
  return newFormObj;
}

// scroll smoothly to top of page
export const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
};

// toaster props
export const toasterProps = {
  position: 'top-right',
  className: 'toast-message',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
  theme: 'dark',
} 


// validate form values passed from form data handler. Returns a boolean value
/*
data - data to validate
rules - obj containing data regarding validation(required, min-max length, specific types: isEmail, etc)
*/
export const validateForm = (data, rules) => {
  let valid = true;
  if( !rules ) { return true }; //if no rules are provided
  if( rules.required ) { // if required
    valid = data.trim() !== '' && valid; 
  }
  if( rules.minLength ) { 
    valid = data.length >= rules.minLength && valid;
  }
  if( rules.maxLength ) { 
    valid = data.length <= rules.maxLength && valid;
  }
  if ( rules.isEmail ) {
    const pattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
    valid = pattern.test(data) && valid
  }
  return valid;
} 