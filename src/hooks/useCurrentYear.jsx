// Get and return current year
import { useEffect, useState } from "react"

const useCurrentYear = () => {
  // STATE
  const [ currentYear, setCurrentYear ] = useState( new Date().getFullYear() );
  
  // HOOK
  useEffect( () => {
    // update year handler
    const updateYear = () => setCurrentYear( new Date().getFullYear() )
    // check every minute, update year when changes
    const intervalID = setInterval( updateYear, 60 * 1000 ) 
    // clear interval 
    return () => clearInterval( intervalID )
  }, [] )

  return currentYear
}

export default useCurrentYear