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