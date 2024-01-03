// Component to return an array project card data
import React from 'react';
import projectURL from './projectURL.json';
import { GithubIcon, HomePageIcon } from '../data/SVGComponents';
import { useTranslation } from 'react-i18next';
import TagsData from './TagsData';

const ProjectCardsData = () => {
  // HOOK
  const { t } = useTranslation();  

  // STYLING
  const iconSize = '25px';
  const iconColor = 'var(--color_4)';
  const strokeWidth= 1;

  // DATA
  const tags = TagsData();
  
  const projectCards = [
    {
      id: 1,
      title: t( 'project-cards-webshop' ),
      tags: [ tags.typescript, tags.react, tags.css, tags.responsive, tags.csstransition ],
      description: t( 'project-cards-webshop-description' ),
      learnedAbout: [
        { id: 1, text: t( 'project-cards-webshop-learned-1' ) },
        { id: 2, text: t( 'project-cards-webshop-learned-2' ) },
        { id: 3, text: t( 'project-cards-webshop-learned-3' ) },
        { id: 4, text: t( 'project-cards-webshop-learned-4' ) },
        { id: 5, text: t( 'project-cards-webshop-learned-5' ) },
        { id: 6, text: t( 'project-cards-webshop-learned-6' ) },
        { id: 7, text: t( 'project-cards-webshop-learned-7' ) },
        { id: 8, text: t( 'project-cards-webshop-learned-8' ) },
      ],
      links: [ 
        { 
          id: 1, 
          icon: <HomePageIcon width={ iconSize } height={ iconSize } fill={ iconColor } />,
          title: `${ t( 'project-cards-website' ) } - ${ t( 'project-cards-coming-soon' ) }`, 
        },
        { 
          id: 2, 
          icon: <GithubIcon width={ iconSize } height={ iconSize } strokeWidth={ strokeWidth } stroke={ iconColor } />,  
          title: t( 'project-cards-frontend' ), 
          link: projectURL[ 'project-cards-webshop' ].links.frontend
        }
      ],
    }, 
    {
      id: 2,
      title: t( 'project-cards-password-strength-meter' ),
      tags: [ tags.react, tags.css, tags.responsive ],
      imageURL: projectURL[ 'project-cards-password-strength-meter' ].imageURL,
      description: t( 'project-cards-password-strength-meter-description' ),
      learnedAbout: [
        { id: 1, text: t( 'project-cards-password-strength-meter-learned-1' ) },
        { id: 2, text: t( 'project-cards-password-strength-meter-learned-2' ) },
        { id: 3, text: t( 'project-cards-password-strength-meter-learned-3' ) },
      ],
      links: [ 
        { 
          id: 1, 
          icon: <HomePageIcon width={ iconSize } height={ iconSize } fill={ iconColor } />,
          title: t( 'project-cards-website' ), 
          link: projectURL[ 'project-cards-password-strength-meter' ].links.website 
        },
        { 
          id: 2, 
          icon: <GithubIcon width={ iconSize } height={ iconSize } strokeWidth={ strokeWidth } stroke={ iconColor } />,  
          title: t( 'project-cards-frontend' ), 
          link: projectURL[ 'project-cards-password-strength-meter' ].links.frontend
        }
      ],
    }, 
    {
      id: 3,
      title: t( 'project-cards-geolens-gallery' ),
      tags: [ tags.react, tags.css, tags.node, tags.express, tags.leaflet, tags.aws3, tags.mongo, tags.mongoose, tags.responsive, tags.postman, tags.restapi, tags.authentication, tags.rbac, tags.bcrypt, tags.jwt ],
      imageURL: projectURL[ 'project-cards-geolens-gallery' ].imageURL,
      description: t( 'project-cards-geolens-gallery-description' ),
      learnedAbout: [
        { id: 1, text: t( 'project-cards-geolens-gallery-learned-1' ) },
        { id: 2, text: t( 'project-cards-geolens-gallery-learned-2' ) },
        { id: 3, text: t( 'project-cards-geolens-gallery-learned-3' ) },
        { id: 4, text: t( 'project-cards-geolens-gallery-learned-4' ) },
        { id: 5, text: t( 'project-cards-geolens-gallery-learned-5' ) },
        { id: 6, text: t( 'project-cards-geolens-gallery-learned-6' ) },
        { id: 7, text: t( 'project-cards-geolens-gallery-learned-7' ) },
      ],
      links: [ 
        { 
          id: 1, 
          icon: <HomePageIcon width={ iconSize } height={ iconSize } fill={ iconColor } />,
          title: t( 'project-cards-website' ), 
          link: projectURL[ 'project-cards-geolens-gallery' ].links.website 
        },
        { 
          id: 2, 
          icon: <GithubIcon width={ iconSize } height={ iconSize } strokeWidth={ strokeWidth } stroke={ iconColor } />,  
          title: t( 'project-cards-frontend' ), 
          link: projectURL[ 'project-cards-geolens-gallery' ].links.frontend  
        },
        { id: 3,
          icon: <GithubIcon width={ iconSize } height={ iconSize } strokeWidth={ strokeWidth } stroke={ iconColor } />, 
          title: t( 'project-cards-backend' ),
          link: projectURL[ 'project-cards-geolens-gallery' ].links.backend
        },
      ],
    },
    {
      id: 4,
      title: t( 'project-portfolio-website' ),
      tags: [ tags.react, tags.css, tags.node, tags.express, tags.nodemailer, tags.inkscape ],
      imageURL: projectURL[ 'project-portfolio-website' ].imageURL,
      description: t( 'project-portfolio-website-description' ),
      learnedAbout: [
        { id: 1, text: t( 'project-portfolio-website-learned-1' ) },
        { id: 2, text: t( 'project-portfolio-website-learned-2' ) },
        { id: 3, text: t( 'project-portfolio-website-learned-3' ) },
      ],
      links: [ 
        { 
          id: 1, 
          icon: <HomePageIcon width={ iconSize } height={ iconSize } fill={ iconColor } />,
          title: t( 'project-cards-website' ), 
          link: projectURL[ 'project-portfolio-website' ].links.website 
        },
        { 
          id: 2, 
          icon: <GithubIcon width={ iconSize } height={ iconSize } strokeWidth={ strokeWidth } stroke={ iconColor } />,  
          title: t( 'project-cards-frontend' ), 
          link: projectURL[ 'project-portfolio-website' ].links.frontend  
        },
        { id: 3,
          icon: <GithubIcon width={ iconSize } height={ iconSize } strokeWidth={ strokeWidth } stroke={ iconColor } />, 
          title: t( 'project-cards-backend' ),
          link: projectURL[ 'project-portfolio-website' ].links.backend  
        },
      ],
    }, 
    { id: 5,
      title: t( 'project-task-manager' ),
      tags: [ tags.react, tags.node, tags.express, tags.mongo, tags.mongoose, tags.postman, tags.css ],
      imageURL: projectURL[ 'project-task-manager' ].imageURL,
      description: t( 'project-task-manager-description' ),
      learnedAbout: [
        { id: 1, text: t( 'project-task-manager-learned-1' )}
      ],
      links: [ 
        { 
          id: 1, 
          icon: <HomePageIcon width={ iconSize } height={ iconSize } fill={ iconColor } />, 
          title: t( 'project-cards-website' ), 
          link: projectURL[ 'project-task-manager' ].links.website,
        },
        { 
          id: 2, 
          icon: <GithubIcon width={ iconSize } height={ iconSize } strokeWidth={ strokeWidth } stroke={  iconColor  } />, 
          title: t( 'project-cards-frontend' ), 
          link: projectURL[ 'project-task-manager' ].links.frontend 
        },
        { id: 3,
          icon: <GithubIcon width={ iconSize } height={ iconSize } strokeWidth={ strokeWidth } stroke={ iconColor } />,
          title: t( 'project-cards-backend' ),
          link: projectURL[ 'project-task-manager' ].links.backend 
        },
      ],
    }
  ] 

  return projectCards
}

export default ProjectCardsData