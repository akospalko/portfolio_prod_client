// Component to return an array of related navigation elements data
import { useTranslation } from 'react-i18next';

const NavigationElementsData = () => {
  // HOOK
  const { t } = useTranslation();

  // DATA
  const navigationElementsData = [
    {
      id: 1,
      name: t( 'about' ),
      path: '/about'
    }, {
      id: 2,
      name: t( 'projects' ),
      path: '/projects'
    }, {
      id: 3,
      name: t( 'contact' ),
      path: '/contact'
    }
  ]

  return navigationElementsData;
}

export default NavigationElementsData;