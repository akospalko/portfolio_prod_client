// About page related data
import React from 'react'
import profileImageURL from '../data/profileImageURL.json'
import { tags } from '../helper/dataControl'
import { useTranslation } from 'react-i18next'
import { 
  CodeIcon,
  GlobeIcon,
  LanguageIcon,
  OthersIcon,
} from '../components/SVGComponents'

const AboutData = () => {
  // HOOK
  const { t } = useTranslation();

  // DATA
  // my background text 
  const myBackgroundTextData = [
    { id: 1, text: t('about-background-text-1') },
    { id: 2, text: t('about-background-text-2') },
    { id: 3, text: t('about-background-text-3') }
  ]

  // skill cards
  const iconSize = '60px'
  const fillColor = 'var(--color_4)'
  const skillCardsData = [
    {
      id: 1,
      icon: <CodeIcon width={ iconSize } height={ iconSize } fill={ fillColor } />,
      title: t( 'about-skills-development' ),
      skills: [
        {
          id: 1, 
          title: t( 'about-skills-development-languages' ), 
          tags: [ tags.javascript, tags.typescript, tags.react, tags.node, tags.express, tags.html, tags.css, tags.python, tags.cpp ]
        },
        {
          id: 2, 
          title: t( 'about-skills-development-database' ), 
          tags: [ tags.mongo, tags.mongoose, tags.firebase, tags.oracleSQL, tags.aws3 ]
        },
        {
          id: 3, 
          title: t( 'about-skills-misc' ), 
          tags: [ tags.git, tags.postman, tags.restapi, tags.responsive ]
        },
      ]
    },
    {
      id: 2,
      icon: <GlobeIcon width={ iconSize } height={ iconSize } />,
      title: t( 'about-skills-gis-cad-3d' ),
      skills: [
        {
          id: 1, 
          title: t( 'about-skills-gis' ), 
          tags: [ tags.qgis, tags.arcgis, tags.sagagis, tags.envi ]
        },
        {
          id: 2, 
          title: t( 'about-skills-cad-3d' ), 
          tags: [ tags.microstation, tags.topodot, tags.pcs, tags.autocad, tags.metashape, tags.pix4d, tags.lastools, tags.cloudcompare, tags.blender ]
        },
        {
          id: 3, 
          title: t( 'about-skills-misc' ), 
          tags: [ tags.pointcloudanalysis, tags.rasteranalysis, tags.digitalmap, tags.leaflet, tags.kml ]
        },
      ]
    },
    {
      id: 3,
      icon: <LanguageIcon width={ iconSize } height={ iconSize } fill="var(--color_4)" />,
      title: t( 'about-skills-languages' ),
      skills: [
        {
          id: 1, 
          title: '', 
          tags: [ tags.hungarian, tags.english, tags.ukrainian, tags.german ]
        }
      ]
    },
    {
      id: 4,
      icon: <OthersIcon width={ iconSize } height={ iconSize } fill={ 'var(--color_4)' } />,
      iconAlt: t( 'about-skills-others' ),
      title: t( 'about-skills-others' ),
      skills: [
        {
          id: 1, 
          title: '', 
          tags: [ tags.photoshop, tags.lightroom, tags.inkscape, tags.figma, tags.linux, tags.drone, tags.driverslicense ]
        },
      ]
    },
  ]

  return { profileImageURL, myBackgroundTextData, skillCardsData }
}

export default AboutData