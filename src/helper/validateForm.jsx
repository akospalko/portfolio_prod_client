//Used to validate form values passed from form data handler. Returns a boolean value
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