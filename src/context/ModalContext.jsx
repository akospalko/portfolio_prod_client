import { createContext, useContext, useState } from "react";
import { projectCards } from "../helper/dataControl";

// Create context 
const ModalContext = createContext();

// Export used context
export const useModalContext = () => useContext(ModalContext);

// Set up provider
export default function ModalProvider({ children }) { 
  // STATE
  const [isModalToggled, setIsModalToggled] = useState(false); 
  const [activeModalContent, setActiveModalContent] = useState({}); 
  
  // HANDLER
  // Toggle modal 
  const toggleModalHandler = (e, cardID, forcedValue) => {
    e.preventDefault();
    if(!cardID) return;
    const activeCard = projectCards.find(card => card.id === cardID);
    setActiveModalContent(activeCard);
    setIsModalToggled(currentValue => { 
      return forcedValue ? forcedValue : !currentValue 
    });
  }  

  return (
    <ModalContext.Provider 
      value={{ 
        isModalToggled, setIsModalToggled, // track modal open / close state
        activeModalContent, setActiveModalContent, // modal content to be rendered
        toggleModalHandler // modal toggler 
      }}
    > { children }
    </ModalContext.Provider> 
  )
}