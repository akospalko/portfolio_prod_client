// Data storage: nav element, template, text, status, image in one place.
// SVG ICONS 
import { 
  GithubIcon, 
  LinkedInIcon, 
  CodeIcon,
  GlobeIcon,
  LanguageIcon,
  OthersIcon,
  HomePageIcon,
  EmailIcon,
  MobilPhoneIcon,
  ProfileIcon,
  CodeWarsIcon,
  LeetCodeIcon
} from '../components/SVGComponents'


// TEMPLATES / INITIALIZERS
// Navigation elements
export const navigationElementsTemplate = [
  // {
  //   id: 0,
  //   name: 'header',
  //   path: '/'
  // }, 
  {
    id: 1,
    name: 'about',
    path: '/about'
  }, {
    id: 2,
    name: 'projects',
    path: '/projects'
  }, {
    id: 3,
    name: 'contact',
    path: '/contact'
  }
]

// Tags: used with skills and projects   
const tags = {
  javascript: {
    name: 'JavaScript', // displayed name
    info: 'JavaScript is a high-level programming language primarily used for front-end web development to add interactivity and dynamic features to websites and web applications.', // additional info about the tag
    backgroundColor: '#f0db4f', // background color
    color: '#323330', // font color
    borderColor: '#f0db4f' // border color
  },
  typescript: {
    name: 'TypeScript (basic)', 
    info: 'TypeScript is a superset of JavaScript, providing static typing, enhanced tooling, and advanced features, enhancing the development experience and enabling better code maintainability and scalability.',
    backgroundColor: '#007acc',
    color: '#fff', 
    borderColor: '#007acc'
  },
  html: {
    name: 'HTML', 
    info: 'HTML stands for Hypertext Markup Language, a standard markup language used to create and structure the content of web pages and applications on the internet.',
    backgroundColor: '#e34c26', 
    color: '#ebebeb', 
    borderColor: '#e34c26' 
  },
  firebase: {
    name: 'Firebase', 
    info: 'Firebase: Google\'s mobile and web development platform with real-time database, authentication, and hosting services.',
    backgroundColor: '#FFCB2B', 
    color: '#000', 
    borderColor: '#FFCB2B' 
  },
  oracleSQL: {
    name: 'OracleSQL',
    info: 'Oracle SQL is a language for querying and managing data in Oracle databases, widely used in enterprise applications.',
    backgroundColor: '#F80102', 
    color: '#fff', 
    borderColor: '#F80102' 
  },
  git: {
    name: 'Git', 
    info: 'Git is a distributed version control system widely used in software development to track changes, collaborate with others, and manage code repositories efficiently.',
    backgroundColor: '#171515', 
    color: '#fff', 
    borderColor: '#171515' 
  }, 
  python: {
    name: 'Python',
    info: 'Python: Versatile programming language used for web development, data analysis, artificial intelligence, scripting, and automation.', 
    backgroundColor: '#044F88', 
    color: '#fff', 
    borderColor: '#044F88' 
  },
  cpp: {
    name: 'C++ (basic)', 
    info: 'C++: Powerful, efficient programming language used in systems programming, game development, and high-performance applications.',
    backgroundColor: ' #044F88', 
    color: '#fff', 
    borderColor: ' #044F88' 
  },
  react: { 
    name: 'React',
    info: 'React is an open-source JavaScript library for building user interfaces and front-end applications with a component-based approach.',
    backgroundColor: '#61dbfb', 
    color: '#000', 
    borderColor: '#61dbfb' 
  },
  node: {
    name: 'Node.js',
    info: 'Node.js: Open-source JavaScript runtime for server-side and scalable network applications.',
    backgroundColor: '#44883e',
    color: '#fff',
    borderColor: '#44883e'
  },
  express: {
    name: 'Express.js',
    info: 'Express.js: A lightweight Node.js framework for building web applications and APIs with efficient handling of HTTP requests and routes.',
    backgroundColor: '#eeeeee',
    color: '#444',
    borderColor: '#eeeeee' 
  },
  nodemailer: {
    name: 'Nodemailer',
    info: 'Nodemailer: A widely-used Node.js library for simplifying email sending from servers or web applications.',
    backgroundColor: '#0f9dce',
    color: '#fff',
    borderColor: '#0f9dce' 
  },
  mongo: {
    name: 'MongoDB',
    info: 'MongoDB is a popular NoSQL database that stores data in JSON-like documents and is known for its flexibility, scalability, and ease of use in modern web applications.',
    backgroundColor: '#00ED64',
    color: '#000',
    borderColor: '#00ED64',
  },
  mongoose: {
    name: 'Mongoose',
    info: 'Mongoose is a popular Node.js library used as an Object Data Modeling (ODM) tool for MongoDB, simplifying the interaction with the MongoDB database and providing a structured schema-based approach to data management.',
    backgroundColor: '#880000',
    color: '#fff',
    borderColor: '#880000',
  },
  postman: {
    name: 'Postman',
    info: 'Postman: A user-friendly API development and testing tool.',
    backgroundColor: '#EF5B25',
    color: '#fff',
    borderColor: '#EF5B25',
  },
  css: {
    name: 'CSS',
    info: 'CSS stands for Cascading Style Sheets, is a stylesheet language for controlling the presentation and layout of HTML documents on web pages.',
    backgroundColor: '#264de4',
    color: '#ebebeb',
    borderColor: '#264de4',
  },
  awss3: {
    name: 'AWS S3',
    info: 'AWS S3 is Amazon\'s cloud storage service for secure and scalable data storage and retrieval.',
    backgroundColor: '#ff9900',
    color: '#000',
    borderColor: '#ff9900',
  },
  restapi: {
    name: 'REST API',
    info: 'REST API is a standardized web service architecture enabling flexible communication and data exchange between software systems over the internet using HTTP methods.',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  responsive: {
    name: 'Responsive design',
    info: 'Responsive design ensures optimal display and user-friendliness on diverse devices and screen sizes for websites and web applications.',
    backgroundColor: '#690895',
    color: '#fff',
    borderColor: '#690895',
  },
  // GIS
  qgis: {
    name: 'QGIS',
    info: 'QGIS is an open-source GIS software for geospatial data analysis, visualization, and cartography.',
    backgroundColor: '#87ac21',
    color: '#fff',
    borderColor: '#87ac21',
  },
  arcgis: {
    name: 'ArcGIS',
    info: 'Esri\'s ArcGIS: A powerful GIS software for geospatial data management, analysis, and visualization.',
    backgroundColor: '#004575',
    color: '#fff',
    borderColor: '#004575',
  },
  sagagis: {
    name: 'SAGA GIS',
    info: 'SAGA GIS is an open-source geospatial data analysis software.',
    backgroundColor: '#c6d9f1',
    color: '#000',
    borderColor: '#c6d9f1',
  },
  envi: {
    name: 'ENVI',
    info: 'L3Harris Geospatial ENVI: Powerful remote sensing software for processing and analyzing geospatial data to extract valuable information.',
    backgroundColor: '#ff000b',
    color: '#ffffff',
    borderColor: '#ff000b',
  },
  pcs: {
    name: 'Point Cloud Scene',
    info: 'PCS is enabling the visualization and processing of point clouds, georeferenced photos, and 2D raster images.',
    backgroundColor: '#f9b000',
    color: '#000',
    borderColor: '#f9b000',
  },
  microstation: {
    name: 'MicroStation',
    info: 'MicroStation is a 3D modeling and CAD software for designing, drafting, and visualizing infrastructure projects.',
    backgroundColor: '#1368a5',
    color: '#fff',
    borderColor: '#1368a5',
  },
  topodot: {
    name: 'TopoDot',
    info: 'TopoDOT is a software for extracting topography, 3D models, GIS Assets, and more from point cloud data.',
    backgroundColor: '#367c2b',
    color: '#fff',
    borderColor: '#367c2b',
  },
  autocad: {
    name: 'AutoCad (basic)',
    info: ' AutoCAD is a widely-used CAD software for creating, editing, and visualizing 2D and 3D drawings in diverse industries.',
    backgroundColor: '#bf2223',
    color: '#fff',
    borderColor: '#bf2223',
  },
  metashape: {
    name: 'Agisoft Metashape',
    info: 'Agisoft Metashape is a powerful photogrammetry software used for creating high-quality 3D models and maps from aerial and ground-based imagery.',
    backgroundColor: '#61c26a',
    color: '#000',
    borderColor: '#61c26a',
  },
  pix4d: {
    name: 'Pix4D',
    info: 'Pix4D is a software that specializes in photogrammetry and drone mapping solutions.',
    backgroundColor: '#1be45e',
    color: '#084564',
    borderColor: '#1be45e',
  },
  lastools: {
    name: 'LASTools',
    info: 'LASTools is a collection of command-line tools designed for efficiently processing and analyzing LiDAR data, including data compression, filtering, classification, conversion, and visualization.',
    backgroundColor: '#fff',
    color: '#d91433',
    borderColor: '#fff',
  },
  blender: {
    name: 'Blender',
    info: 'Is a free and open-source 3D computer graphics software used for creating animated films, visual effects, art, 3D models.',
    backgroundColor: '#eb7700',
    color: '#ffffff',
    borderColor: '#eb7700',
  },
  rasteranalysis: {
    name: 'Raster analysis',
    info: 'The processing and manipulation of pixel based (georeferenced) remote sensed data (e.g. satellite image).',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  digitalmap: {
    name: 'Digital map creation',
    info: 'Creating computer-based maps using specialized GIS softwares',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  // language
  hungarian: {
    name: 'Hungarian (native)',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  english: {
    name: 'English (C1-C2)',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  ukrainian: {
    name: 'Ukrainian (B1)',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  german: {
    name: 'German (A2–B1)',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  photoshop: {
    name: 'Photoshop',
    info: 'Adobe Photoshop is a widely-used image editing software that allows users to manipulate and enhance digital images with a range of tools and features.',
    backgroundColor: '#001833',
    color: '#2daaff',
    borderColor: '#001833',
  },
  lightroom: {
    name: 'Lightroom',
    info: 'Adobe Photoshop Lightroom: Photo editing and management software for photographers to efficiently organize, enhance, and process their images.',
    backgroundColor: '#0c2430',
    color: '#afd5eb',
    borderColor: '#0c2430',
  },
  inkscape: {
    name: 'Inkscape',
    info: 'Inkscape is a free and open-source vector graphics editor used for creating and editing scalable graphics, illustrations, and logos.',
    backgroundColor: '#c1c1c1',
    color: '#000',
    borderColor: '#c1c1c1',
  },
  linux: {
    name: 'Linux (basic)',
    info: 'Linux: Open-source OS kernel, renowned for stability, security, and flexibility, used in servers, desktops, and embedded systems.',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  drone: {
    name: 'Drone pilot',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  driverslicense: {
    name: 'Driver\s license-B',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  pointcloudanalysis: {
    name: 'Point cloud analysis',
    info: 'The process of extracting valuable information from a 3D point cloud representing objects and surfaces in a given area.',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  cloudcompare: {
    name: 'CloudCompare',
    info: 'CloudCompare is open-source 3D point cloud software for visualizing and processing LiDAR and laser scanning data.',
    backgroundColor: '#015d95',
    color: 'var(--color_4)',
    borderColor: '#015d95'
  },
  leaflet: {
    name: 'Leaflet',
    info: 'Leaflet is an open-source JavaScript library used for creating interactive and mobile-friendly web maps',
    backgroundColor: '#83c143',
    color: 'var(--color_1)',
    borderColor: '#83c143'
  },
  kml: {
    name: 'KML',
    info: 'KML (Keyhole Markup Language) is an XML-based file format used for representing geographic data and features with associated attributes, commonly used in applications like Google Earth and Google Maps.',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  authentication: {
    name: 'authentication',
    info: 'Authentication is the process of verifying the identity of a user or system to grant access to specific resources or functionalities.',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  rbac: {
    name: 'RBAC',
    info: 'RBAC (Role-Based Access Control) simplifies access management by assigning permissions to roles, not individual users, enhancing security and reducing administrative complexity. ',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  bcrypt: {
    name: 'Brcypt',
    info: 'Bcrypt is a password-hashing function used to securely store passwords by applying a key stretching algorithm, making it computationally intensive for attackers to crack the passwords.',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
  jwt: {
    name: 'JSON Webtoken',
    info: 'JWT (JSON Web Token) is a compact and self-contained way of securely transmitting information between parties as a JSON object, often used for authentication and authorization purposes in web applications.',
    backgroundColor: 'var(--color_3_light2)',
    color: 'var(--color_1)',
    borderColor: 'var(--color_3_light2)',
  },
}

// About 
// profile img
export const profileImageURLs = { 
  small: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_500w/profile_image_original_500w.png', // 500w
  medium: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1200w/profile_image_original_1200w.png', // 1200w
  large: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1500w/profile_image_original_1500w.png' // 1500w
}
// my background text
export const backgroundText = [
  {
    id: 1, 
    text: `During my time at university, while studying Geographic Information Systems (GIS) I had the opportunity to learn Python and utilize it for task automation, GIS scripting, web scraping, and data visualization. Additionally, I took a self-study course on C++ to get a good grasp of programming fundamentals. Later, I encountered JavaScript in the context of GIS, which led me to explore web-based map creation and sparked my interest in web development.`
  },
  {
    id: 2, 
    text: `Approximately three years ago, my journey began with JavaScript on the frontend. Progressing further, I expanded my knowledge by delving into React, which enabled me to develop dynamic and interactive user interfaces.`
  },
  {
    id: 3, 
    text: `Expanding my skills further, I explored other essential components of web development. This exploration involved learning about building REST APIs using Node and Express.js and gaining insights into database management. The gained experience helped me better understand how full-stack web applications are constructed from different building blocks.`
  }
]

// skill cards
export const aboutSkills = [
  {
    id: '1',
    icon: <CodeIcon  width='60' height='60' fill='var(--color_4)' />,
    title: 'Web development && programming',
    skills: [
      {
        id: 1, 
        title: 'Languages && frameworks', 
        tags: [ tags.javascript,tags.typescript, tags.react, tags.node, tags.express, tags.html, tags.css, tags.python, tags.cpp ]
      },
      {
        id: 2, 
        title: 'Database && storage', 
        tags: [ tags.mongo, tags.mongoose, tags.firebase, tags.oracleSQL, tags.awss3 ]
      },
      {
        id: 3, 
        title: 'Misc.', 
        tags: [tags.git, tags.postman, tags.restapi, tags.responsive ]
      },
    ]
  },
  {
    id: '2',
    icon: <GlobeIcon width='60' height='60' />,
    title: 'GIS, CAD systems, 3D graphics',
    skills: [
      {
        id: 1, 
        title: 'GIS', 
        tags: [ tags.qgis, tags.arcgis, tags.sagagis, tags.envi, ]
      },
      {
        id: 2, 
        title: 'CAD && 3D', 
        tags: [ tags.microstation, tags.topodot, tags.pcs, tags.autocad, tags.metashape, tags.pix4d, tags.lastools, tags.cloudcompare, tags.blender ]
      },
      {
        id: 3, 
        title: 'Misc.', 
        tags: [ tags.pointcloudanalysis, tags.rasteranalysis, tags.digitalmap, tags.leaflet, tags.kml ]
      },
    ]
  },
  {
    id: '3',
    icon: <LanguageIcon width='60' height='60' fill="var(--color_4)" />,
    title: 'Languages',
    skills: [
      {
        id: 1, 
        title: '', 
        tags: [ tags.hungarian, tags.english, tags.ukrainian, tags.german ]
      }
    ]
  },
  {
    id: '4',
    icon: <OthersIcon width='60' height='60' fill='var(--color_4)' />,
    iconAlt: 'Others',
    title: 'Others',
    skills: [
      {
        id: 1, 
        title: '', 
        tags: [ tags.photoshop, tags.lightroom, tags.inkscape, tags.linux, tags.drone, tags.driverslicense ]
      },
    ]
  },
]

// Projects 
// project cards
export const projectCards = [
  { id: 1,
    title: 'Task manager',
    tags: [ tags.react, tags.node, tags.express, tags.mongo, tags.mongoose, tags.postman, tags.css ],
    url: {
      small: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_500w/project_1_task_manager_500w.png' ,
      medium: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1200w/project_1_task_manager_1200w.png' ,
      large: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1500w/project_1_task_manager_1500w.png' ,
    },
    description: 'Manage and store your daily tasks in a database.',
    learnedAbout: [
      { id: 1, text: '- Set up database and create data model/schema with mongoDB and mongoose.'}
    ],
    links: [ 
      { 
        id: 1, 
        icon: <HomePageIcon width={ '75%' } height={ '75%' } fill={'var(--color_4)'} />, 
        title: 'Site', 
        link: 'https://task-manager-client.onrender.com/' 
      },
      { 
        id: 2, 
        icon: <GithubIcon width={ '75%' } height={ '75%' } strokeWidth={ 1 } stroke={ 'var(--color_4)' } />, 
        title: 'Frontend', 
        link: 'https://github.com/akospalko/task-manager-client' },
      { id: 3,
        icon: <GithubIcon width={ '75%' } height={ '75%' } strokeWidth={ 1 } stroke={ 'var(--color_4)' } />,
        title: 'Backend',
        link: 'https://github.com/akospalko/task-manager-api' 
      },
    ],
  }, {
    id: 2,
    title: 'Portfolio site',
    tags: [ tags.react, tags.css, tags.node, tags.express, tags.nodemailer, tags.inkscape ],
    url: {
      small: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_500w/portfolio-page_500w.png' ,
      medium: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1200w/portfolio-page_1200w.png' ,
      large: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1500w/portfolio-page_1500w.png' ,
    },
    description: 'A website to showcase my projects and experience.',
    learnedAbout: [
      { id: 1, text: '- Create react SPA with routing.' },
      { id: 2, text: '- Set up basic node.js server for email sending (nodemailer) and recaptcha verification.' },
      { id: 3, text: '- Design aspect: layout, color scheme, UI, responsive design.' },
      { id: 4, text: '- How to design and create basic vector illustration, logo.' },
    ],
    links: [ 
      { 
        id: 1, 
        icon: <HomePageIcon width={ '75%' } height={ '75%' } fill={'var(--color_4)'} />,
        title: 'Site', 
        link: 'https://palkoakos.onrender.com/' 
      },
      { 
        id: 2, 
        icon: <GithubIcon width={ '75%' } height={ '75%' } strokeWidth={ 1 } stroke={ 'var(--color_4)' } />,  
        title: 'Frontend', 
        link: 'https://github.com/akospalko/portfolio_prod_client' },
      { id: 3,
        icon: <GithubIcon width={ '75%' } height={ '75%' } strokeWidth={ 1 } stroke={ 'var(--color_4)' } />, 
        title: 'Backend',
        link: 'https://github.com/akospalko/portfolio_prod_server' 
      },
    ],
  }, {
    id: 3,
    title: 'GeoLen Gallery',
    tags: [ tags.react, tags.css, tags.node, tags.express, tags.leaflet, tags.awss3, tags.mongo, tags.mongoose, tags.responsive, tags.postman, tags.restapi, tags.authentication, tags.rbac, tags.bcrypt, tags.jwt ],
    url: {
      small: '' ,
      medium: '' ,
      large: '' ,
    },
    description: 'A gallery for storing photos with geolocation',
    learnedAbout: [
      { id: 1, text: '- authentication, authorization, design different roles for access control' },
      { id: 2, text: '- set up and connect cloud storage (aws s3) and db (mongoDB) with backend, create presigned url\'s' },
      { id: 3, text: '- set up backend, design RESTful API' },
      { id: 4, text: '- responsive design' },
      { id: 5, text: '- web-based map creation using Leaflet, and displaying of geographic locations as markers on map' },
    ],
    links: [ 
      { 
        id: 1, 
        icon: <HomePageIcon width={ '75%' } height={ '75%' } fill={'var(--color_4)'} />,
        title: 'Site', 
        link: 'https://geolens-gallery.onrender.com' 
      },
      { 
        id: 2, 
        icon: <GithubIcon width={ '75%' } height={ '75%' } strokeWidth={ 1 } stroke={ 'var(--color_4)' } />,  
        title: 'Frontend', 
        link: 'https://github.com/akospalko/image-gallery_client' },
      { id: 3,
        icon: <GithubIcon width={ '75%' } height={ '75%' } strokeWidth={ 1 } stroke={ 'var(--color_4)' } />, 
        title: 'Backend',
        link: 'https://github.com/akospalko/image-gallery_api' 
      },
    ],
  }
] 

// Contact
export const littleHeroImgURLs = {
  hero: {
    small: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_500w/little_hero_500w.png',
    medium: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1200w/little_hero_1200w.png',
    large: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1500w/little_hero_1500w.png',
  },
  eye: {
    small: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_500w/space_cat_eye_500w.png',
    medium: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1200w/space_cat_eye_1200w.png',
    large: 'https://palkoakos-portfolio.s3.eu-central-1.amazonaws.com/images_1500w/space_cat_eye_1500w.png',
  }
}

// my contacts 
const iconSize = '75%';
export const myContactsTemplate = [
  { 
    id: 0, 
    icon: (color, size) => (
      <ProfileIcon
        width={ size || iconSize }
        height={ size || iconSize }
        stroke={ color || 'var(--color_4)' }
      /> ), 
    title: 'Name', 
    value: 'Ákos Palkó' 
  },
  { 
    id: 1, 
    icon: (color, size) => (
      <EmailIcon 
        width={ size || iconSize } 
        height={ size || iconSize } 
        fill={ color || 'var(--color_4)' }
      /> ), 
    title: 'Email', 
    value: 'akospalko.contact@gmail.com' 
  },
  { 
    id: 2, 
    icon: (color, size) => ( 
      <MobilPhoneIcon 
        width={ size || iconSize } 
        height={ size || iconSize } 
        fill={ color || 'var(--color_4)' }
      /> ), 
    title: 'Phone number', 
    value: '+36204791336' 
  },
  { 
    id: 3, 
    icon: (color, size) => ( 
      <GithubIcon 
        width={ size || iconSize } 
        height={ size || iconSize } 
        strokeWidth={ 1 } 
        stroke={ color || 'var(--color_4)' }
      />),
    title: 'Github', 
    value: 'Github', 
    link: 'https://github.com/akospalko' 
  },
  { 
    id: 4, 
    icon: (color, size) => ( 
      <LinkedInIcon 
        width={ size || iconSize } 
        height={ size || iconSize } 
        fill={ color || 'var(--color_4)' }
      />), 
    title: 'LinkedIn', 
    value: 'LinkedIn', 
    link: 'https://www.linkedin.com/in/%C3%A1kos-palk%C3%B3-87a5191a2/'
  },
  { 
    id: 5, 
    icon: (color, size) => ( 
      <CodeWarsIcon 
        width={ size || iconSize } 
        height={ size || iconSize } 
        fill={ color || 'var(--color_4)' }
      />), 
    title: 'Codewars', 
    value: 'Codewars', 
    link: 'https://www.codewars.com/users/akospalko/'
  },
  { 
    id: 6, 
    icon: (color, size) => ( 
      <LeetCodeIcon 
        width={ size || iconSize } 
        height={ size || iconSize } 
        fill={ color || 'var(--color_4)' } 
      />), 
    title: 'Leetcode', 
    value: 'Leetcode', 
    link: 'https://leetcode.com/Agathius/'
  },
]
// contact form data
export const contactFormData = {
  name: {
    fieldType: 'input',
    type: 'text',
    name: 'name',
    value: '',
    placeholder: 'your name',
    validation: {
      required: true,
      minLength: 2,
      maxLength: 100
    },
    touched: false,
    valid: false,
  },
  email: {
    fieldType: 'input',
    type: 'email',
    name: 'email',
    value: '',
    placeholder: 'your@email.com',
    required: true,
    validation: {
      required: true,
      // minLength: 10,
      maxLength: 100,
      isEmail: true
    },
    touched: false,
    valid: false,
  },
  subject: {
    fieldType: 'input',
    type: 'text',
    name: 'subject',
    value: '',
    placeholder: 'mail subject',
    validation: {
      required: true,
      // minLength: 5,
      maxLength: 100
    },
    touched: false,
    valid: false,
  },
   message: {
    fieldType: 'textarea',
    type: 'text',
    name: 'message',
    value: '',
    placeholder: 'your message (minimum length: 10 characters)',
    validation: {
      required: true,
      minLength: 10,
      maxLength: 1500
    },
    wordCount: 0,
    touched: false,
    valid: false,
  }
}

// Home
// PLAN:
export const welcomeText = `Welcome aboard!`
export const subtitleText = `My name is Ákos Palkó and this is my personal website, have fun!`
export const introductionText = (
  <> A <u>GIS Specialist</u>, with 2 years of experience in the field of geospatial / point cloud analysis as well as a <u>Web Developer</u> enthusiast with 3 years of self-study experience and a deep passion for this field. </>
)
// TITLES
// contact 
export const contactCTA = "Open to new opportunities and collaboration. Feel free to reach out!";
export const myContacts = "Contact/general info";
export const titleFormButtonDisabled = "Fill in form";
export const titleFormButtonEnabled = "Send";
export const noImageText = 'no img';
export const loadingImgText = 'loading img...';
export const pageNotFoundText = 'Oh no, the requested page was not found.'

// Status messages:
export const API_REQUEST_UNABLE_TO_REACH_SERVER = 'Unable to reach server';
export const SENDING_EMAIL = <> <span> Sending email... <br/> (it may take a while) </span> </>
export const RECAPTCHA_NOT_AVAILABLE = 'Recaptcha is not yet available';
export const RECAPTCHA_NO_TOKEN = 'Could not find recaptcha token';
export const RECAPTCHA_VALIDATION_FAIL = 'Validating captcha has failed';