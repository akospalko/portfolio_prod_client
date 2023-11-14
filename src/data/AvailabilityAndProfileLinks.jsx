// Contact page availability and profile links data 
import React from 'react'
import contactProfileURL from './contactProfileURL.json'
import { useTranslation } from 'react-i18next'
import { 
  EmailIcon,
  MobilPhoneIcon,
  ProfileIcon,
  GithubIcon,
  LinkedInIcon,
  CodeWarsIcon,
  LeetCodeIcon
} from '../data/SVGComponents'

const AvailabilityAndProfileLinks = () => {
  // HOOK
  const { t } = useTranslation();

  // STYLING
  const iconSize = '25px'
  const iconColor = 'var(--color_4)'
  const strokeWidth = 1

  // DATA
  const availabilityAndProfileLinks = [
    { 
      id: 0, 
      icon: (color, size) => (
        <ProfileIcon
          width={ size || iconSize }
          height={ size || iconSize }
          stroke={ color || iconColor }
        /> ), 
      title: t('contact-name-title'), 
      value: t('my-name')
    },
    { 
      id: 1, 
      icon: (color, size) => (
        <EmailIcon 
          width={ size || iconSize } 
          height={ size || iconSize } 
          fill={ color || iconColor }
        /> ), 
      title: t('contact-email-title'), 
      value: t('contact-email-value') 
    },
    { 
      id: 2, 
      icon: (color, size) => ( 
        <MobilPhoneIcon 
          width={ size || iconSize } 
          height={ size || iconSize } 
          fill={ color || iconColor }
        /> ), 
      title: t('contact-phone-number-title'), 
      value: t('contact-phone-number-value') 
    },
    { 
      id: 3, 
      icon: (color, size) => ( 
        <GithubIcon 
          width={ size || iconSize } 
          height={ size || iconSize } 
          strokeWidth={ strokeWidth } 
          stroke={ color || iconColor }
        /> ),
      title: t('contact-github'), 
      value: t('contact-github'), 
      link: contactProfileURL.github
    },
    { 
      id: 4, 
      icon: (color, size) => ( 
        <LinkedInIcon 
          width={ size || iconSize } 
          height={ size || iconSize } 
          fill={ color || iconColor }
        /> ), 
      title: t('contact-linkedin'), 
      value: t('contact-linkedin'), 
      link: contactProfileURL.linkedin
    },
    { 
      id: 5, 
      icon: (color, size) => ( 
        <CodeWarsIcon 
          width={ size || iconSize } 
          height={ size || iconSize } 
          fill={ color || iconColor }
        /> ), 
      title: t('contact-codewars'), 
      value: t('contact-codewars'), 
      link: contactProfileURL.codewars
    },
    { 
      id: 6, 
      icon: (color, size) => ( 
        <LeetCodeIcon 
          width={ size || iconSize } 
          height={ size || iconSize } 
          fill={ color || iconColor } 
        /> ), 
      title: t('contact-leetcode'), 
      value: t('contact-leetcode'), 
      link: contactProfileURL.leetcode
    },
  ]

  return { availabilityAndProfileLinks }
}

export default AvailabilityAndProfileLinks