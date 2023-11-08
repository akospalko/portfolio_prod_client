// Context to handle modal related state, and handlers
import { createContext, useContext, useState } from "react";
import ProjectCardsData from "../data/ProjectCardData";

// Create context 
const ModalContext = createContext();

// Export used context
export const useModalContext = () => useContext(ModalContext);

// Set up provider
export default function ModalProvider({ children }) { 
  // STATE
  const [ isModalToggled, setIsModalToggled ] = useState(false); 
  const [ activeModalContent, setActiveModalContent ] = useState({}); 
  const [ isMenuToggled, setIsMenuToggled ] = useState(false); // header menu bar toggle for responsive view

  // CONSTANTS
  const {projectCards} = ProjectCardsData();

  // HANDLER
  // Toggle modal 
  const toggleModalHandler = (cardID, forcedValue) => {
    if(!cardID) return;
    const activeCard = projectCards.find(card => card.id === cardID);
    setActiveModalContent(activeCard);
    setIsModalToggled(currentValue => { 
      return forcedValue ? forcedValue : !currentValue 
    });
  }  

  // toggle header menu || force close it with passing shouldClose param
  const toggleMenuHandler = (shouldClose) => {
    setIsMenuToggled((prev) => {
      if (shouldClose) {
        // Close modal and reset body position
        document.body.style.position = 'static';
        document.body.style.removeProperty('width');
        setIsModalToggled(false); // <-- Add this line to close the modal as well
      } else {
        // Toggle modal
        if (prev === true) { // if modal is opened and we want to close it
          document.body.style.position = 'static';
          document.body.style.removeProperty('width');
        } else { // if modal is closed and we want to open it
          document.body.style.position = 'fixed';
          document.body.style.width = '100%';
        }
      }
      return shouldClose ? false : !prev;
    });
  };

  return (
    <ModalContext.Provider 
      value={{ 
        isModalToggled, setIsModalToggled, // track project card toggle state
        activeModalContent, setActiveModalContent, // modal content to be rendered
        toggleModalHandler, // toggler for project card modals  
        isMenuToggled, // menu bar toggle for responsive view
        toggleMenuHandler,
      }}
    > { children }
    </ModalContext.Provider> 
  )
}