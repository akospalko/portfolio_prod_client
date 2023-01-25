//icons
import { 
  GithubIcon, 
  LinkedInIcon, 
  CodeIcon,
  GISIcon, 
  LanguageIcon,
  OthersIcon
} from '../components/SVGComponents'

//nav elements
export const navElements = [
  {
    id: 0,
    name: 'home',
    path: '/'
  }, {
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

export const socialLinks = [
  {
    id: 1,
    icon: <GithubIcon width={ 45 } height={ 45 } strokeWidth={ 1 } stroke={ 'var(--color_5)' } />,
    link: 'https://github.com/akospalko'
  }, {
    id: 2,
    icon: <LinkedInIcon width={ 45 } height={ 45 } fill={ 'var(--color_5)' } />,
    link: 'https://www.linkedin.com/in/%C3%A1kos-palk%C3%B3-87a5191a2/'
  }
]

// Home
// text
export const homeText = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.";

//About 
export const aboutSkills = [
  {
    id: 'group-1',
    icon: <CodeIcon />,
    iconAlt: 'Web develpoment & Programming',
    title: 'Web development && programming',
    content: [
      {
        id: 1,
        title: 'Web',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
      {
        id: 2,
        title: 'Database',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
      {
        id: 3,
        title: 'Others',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
    ]
  }, {
    id: 'group-2',
    icon: <GISIcon />,
    iconAlt: 'GIS and CAD systems, 3D visualization',
    title: 'GIS and CAD systems, 3D visualization',
    content: [
      {
        id: 1,
        title: 'GIS',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
      {
        id: 2,
        title: 'CAD',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
      {
        id: 3,
        title: 'Others',
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas.'
      },
    ]
  }, {
    id: 'group-3',
    icon: <LanguageIcon />,
    iconAlt: 'Language',
    title: 'Language',
    content: [
      {
        id: 1,
        text: 'Arabic (professional), English(professional), German (intermediate), Korean (elementary)'
      }
    ]
  }, {
    id: 'group-4',
    icon: <OthersIcon />,
    iconAlt: 'Others',
    title: 'Others',
    content: [
      {
        id: 1,
        text: 'Arabic (professional), English(professional), German (intermediate), Korean (elementary)'
      }
    ]
  }
]

//Projects
export const projectCards = [
  { id: 1,
    githubRepositoryLink: [ //fronten link, backend link
      { id: 1, title: 'Frontend', link: 'https://github.com/akospalko/task-manager-client' },
      { id: 2, title: 'Backend', link: 'https://github.com/akospalko/task-manager-api'},
    ],
    websiteLink: 'https://task-manager-client.onrender.com/',
    thumbnail: '',
    title: 'Task manager',
    info: [
      { id: 1, title: 'Description', text: 'Manage and store your daily tasks in a database' },
      { id: 2, title: 'Used technologies', text: 'React, NodeJS, CSS, Postman, MongoDB, Mongoose'}
    ]
  },  {
    id: 2,
    githubRepositoryLink: ['https://github.com/akospalko/nodejs-tutorial/tree/master/03-task-manager/starter'], //fronten link
    websiteLink: 'dummy link',
    thumbnail: '',
    info: [
      { id: 1, title: 'Description', text: 'test' },
      { id: 2, title: 'Used technologies', text: 'test test'},
    ]
  }
] 

//Contact
//contact form data initializer
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
    placeholder: 'your message',
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

//text bubble messages
export const textBubbleContentContactForm =  "I'm bored, send me a message!";
export const textBubbleContentPageNotFound = 'Returning home in';

//Status messages:
//API call
export const API_REQUEST_UNABLE_TO_REACH_SERVER = 'Unable to reach server';
//sendming mail
export const SENDING_EMAIL = 'Sending email...';
//captcha
export const RECAPTCHA_NOT_AVAILABLE = 'Recaptcha is not yet available';
export const RECAPTCHA_NO_TOKEN = 'Could not find recaptcha token';
export const RECAPTCHA_VALIDATION_FAIL = 'Validating captcha has failed';