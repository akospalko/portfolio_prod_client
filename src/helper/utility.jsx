// Utility functions
// find anchor link obj to populate navigation anchor tag
export const findAnchorLink = (navigationData, itemToFind) => {
  let anchorObj = {}
  navigationData.find((elem) => {
    if(elem.path.split('/').pop()  === itemToFind) {
      anchorObj = elem;    
    }
  })
  return anchorObj; 
}

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