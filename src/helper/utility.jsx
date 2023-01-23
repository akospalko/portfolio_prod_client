//storage for utility functions

//find anchor link obj to populate navigation anchor tag
export const findAnchorLink = (navigationData, itemToFind) => {
  let anchorObj = {}
  navigationData.find((elem) => {
    if(elem.name === itemToFind) {
      anchorObj = elem;    
    }
  })
  return anchorObj; 
}

//build input fields from contact form data
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

//character counter for forms: calculate remaining characters left (e.g. characters entered: 50 -> char left: 450, char entered: 500, char left: 0 -> you reached full length)
export const calcRemainingCharacters = (currentCharacters, maximumCharacters) => {
  let remainingCharacters = maximumCharacters - currentCharacters;
  remainingCharacters > 0 ? null : remainingCharacters = 'max character count reached';  
  return remainingCharacters;
}