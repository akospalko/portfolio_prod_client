// Data storage for tags display about skills and project used technologies sections  
import { useTranslation } from 'react-i18next';

const TagsData = () => {
  // HOOK
  const { t } = useTranslation();

  // DATA
  const tags = {
    javascript: {
      name: 'JavaScript', // displayed name
      backgroundColor: '#f0db4f', // background color
      color: '#323330', // font color
      borderColor: '#f0db4f' // border color
    },
    typescript: {
      name: 'TypeScript', 
      backgroundColor: '#007acc',
      color: '#fff', 
      borderColor: '#007acc'
    },
    html: {
      name: 'HTML', 
      backgroundColor: '#e34c26', 
      color: '#ebebeb', 
      borderColor: '#e34c26' 
    },
    firebase: {
      name: 'Firebase', 
      backgroundColor: '#FFCB2B', 
      color: '#000', 
      borderColor: '#FFCB2B' 
    },
    oracleSQL: {
      name: 'OracleSQL',
      backgroundColor: '#F80102', 
      color: '#fff', 
      borderColor: '#F80102' 
    },
    git: {
      name: 'Git', 
      backgroundColor: '#171515', 
      color: '#fff', 
      borderColor: '#171515' 
    }, 
    python: {
      name: 'Python',
      backgroundColor: '#044F88', 
      color: '#fff', 
      borderColor: '#044F88' 
    },
    cpp: {
      name: `C++ ${ t( 'tag-basic' ) }`, 
      backgroundColor: ' #044F88', 
      color: '#fff', 
      borderColor: ' #044F88' 
    },
    react: { 
      name: 'React',
      backgroundColor: '#61dbfb', 
      color: '#000', 
      borderColor: '#61dbfb' 
    },
    node: {
      name: 'Node.js',
      backgroundColor: '#44883e',
      color: '#fff',
      borderColor: '#44883e'
    },
    express: {
      name: 'Express.js',
      backgroundColor: '#eeeeee',
      color: '#444',
      borderColor: '#eeeeee' 
    },
    nodemailer: {
      name: 'Nodemailer',
      backgroundColor: '#0f9dce',
      color: '#fff',
      borderColor: '#0f9dce' 
    },
    mongo: {
      name: 'MongoDB',
      backgroundColor: '#00ED64',
      color: '#000',
      borderColor: '#00ED64',
    },
    mongoose: {
      name: 'Mongoose',
      backgroundColor: '#880000',
      color: '#fff',
      borderColor: '#880000',
    },
    postman: {
      name: 'Postman',
      backgroundColor: '#EF5B25',
      color: '#fff',
      borderColor: '#EF5B25',
    },
    css: {
      name: 'CSS',
      backgroundColor: '#264de4',
      color: '#ebebeb',
      borderColor: '#264de4',
    },
    aws3: {
      name: 'AWS S3',
      backgroundColor: '#ff9900',
      color: '#000',
      borderColor: '#ff9900',
    },
    restapi: {
      name: 'REST API',
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    responsive: {
      name: t( 'tag-responsive-design' ),
      backgroundColor: '#690895',
      color: '#fff',
      borderColor: '#690895',
    },
    // GIS
    qgis: {
      name: 'QGIS',
      backgroundColor: '#87ac21',
      color: '#fff',
      borderColor: '#87ac21',
    },
    arcgis: {
      name: 'ArcGIS',
      backgroundColor: '#004575',
      color: '#fff',
      borderColor: '#004575',
    },
    sagagis: {
      name: 'SAGA GIS',
      backgroundColor: '#c6d9f1',
      color: '#000',
      borderColor: '#c6d9f1',
    },
    envi: {
      name: 'ENVI',
      backgroundColor: '#ff000b',
      color: '#ffffff',
      borderColor: '#ff000b',
    },
    pcs: {
      name: 'Point Cloud Scene',
      backgroundColor: '#f9b000',
      color: '#000',
      borderColor: '#f9b000',
    },
    microstation: {
      name: 'MicroStation',
      backgroundColor: '#1368a5',
      color: '#fff',
      borderColor: '#1368a5',
    },
    topodot: {
      name: 'TopoDot',
      backgroundColor: '#367c2b',
      color: '#fff',
      borderColor: '#367c2b',
    },
    autocad: {
      name: `AutoCad ${ t( 'tag-basic' ) }`,
      backgroundColor: '#bf2223',
      color: '#fff',
      borderColor: '#bf2223',
    },
    metashape: {
      name: 'Agisoft Metashape',
      backgroundColor: '#61c26a',
      color: '#000',
      borderColor: '#61c26a',
    },
    pix4d: {
      name: 'Pix4D',
      backgroundColor: '#1be45e',
      color: '#084564',
      borderColor: '#1be45e',
    },
    lastools: {
      name: 'LASTools',
      backgroundColor: '#fff',
      color: '#d91433',
      borderColor: '#fff',
    },
    blender: {
      name: 'Blender',
      backgroundColor: '#eb7700',
      color: '#ffffff',
      borderColor: '#eb7700',
    },
    rasteranalysis: {
      name: t( 'tag-raster-analysis' ),
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    digitalmap: {
      name: t( 'tag-digital-map' ),
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    // language
    hungarian: {
      name: t( 'tag-hungarian' ),
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    english: {
      name: t( 'tag-english' ),
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    ukrainian: {
      name: t( 'tag-ukrainian' ),
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    german: {
      name: t( 'tag-german' ),
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    photoshop: {
      name: 'Photoshop',
      backgroundColor: '#001833',
      color: '#2daaff',
      borderColor: '#001833',
    },
    lightroom: {
      name: 'Lightroom',
      backgroundColor: '#0c2430',
      color: '#afd5eb',
      borderColor: '#0c2430',
    },
    inkscape: {
      name: 'Inkscape',
      backgroundColor: '#c1c1c1',
      color: '#000',
      borderColor: '#c1c1c1',
    },
    linux: {
      name: `Linux ${ t( 'tag-basic' ) }`,
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    drone: {
      name: 'Drone pilot',
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    driverslicense: {
      name: t( 'tag-drivers-license' ),
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    pointcloudanalysis: {
      name: t( 'tag-point-cloud-analysis' ),
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    cloudcompare: {
      name: 'CloudCompare',
      backgroundColor: '#015d95',
      color: 'var(--color_4)',
      borderColor: '#015d95'
    },
    leaflet: {
      name: 'Leaflet',
      backgroundColor: '#83c143',
      color: 'var(--color_1)',
      borderColor: '#83c143'
    },
    kml: {
      name: 'KML',
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    authentication: {
      name: t( 'tag-authentication' ),
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    rbac: {
      name: 'RBAC',
      color: t('tag-rbac'),
      borderColor: 'var(--color_3_light2)',
    },
    bcrypt: {
      name: 'Brcypt',
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    jwt: {
      name: 'JSON Webtoken',
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    },
    figma: {
      name: 'Figma',
      backgroundColor: ' #1abcfe',
      color: '#0c4a63',
      borderColor: ' #1abcfe',
    },
    svg: {
      name: 'SVG',
      backgroundColor: 'var(--color_3_light2)',
      color: 'var(--color_1)',
      borderColor: 'var(--color_3_light2)',
    },
    csstransition: {
      name: 'CSSTransition',
      color: 'var(--color_3_light2)',
      borderColor: 'var(--color_3_light2)',
    }
  }
  return tags;
}

export default TagsData;