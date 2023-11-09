// Custom hook to return formatted remaining characters left (used in form input field 
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next'

const useCalculateRemainingCharacters = ( currentCharacters, maximumAllowedCharacters ) => {

  // HOOK
  const { t } = useTranslation();

  // CALCULATE VALUES
  const calculateRemainingCharacters = ( currentChars, maxChars ) => {
    const remainingChars = maxChars - currentChars;
    let remainingCharsFormatted;

    if ( remainingChars > 0 ) {
      if ( remainingChars === 1 ) {
        remainingCharsFormatted = `${ remainingChars } ${ t( 'character-count-plural' ) }`;
      } else {
        remainingCharsFormatted = `${ remainingChars } ${ t( 'character-count-plural' ) }`;
      }
    } else {
      remainingCharsFormatted = t( 'character-count-max-reached' );
    }

    return remainingCharsFormatted;
  };

  // STATE
  const [ remainingCharacters, setRemainingCharacters ] = useState(
    calculateRemainingCharacters( currentCharacters, maximumAllowedCharacters )
  );

  // EFFECT
  useEffect(() => {
    setRemainingCharacters( calculateRemainingCharacters( currentCharacters, maximumAllowedCharacters ));
  }, [ currentCharacters, maximumAllowedCharacters ]);

  return remainingCharacters;
};

export default useCalculateRemainingCharacters;