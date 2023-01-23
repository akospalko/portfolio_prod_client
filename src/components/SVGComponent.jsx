import React from 'react'
import './Shared.css'
//Anchor icon (align view to the top position of the page)
export function AnchorIcon({ 
  width, 
  height, 
  fill="none", 
  stroke="currentColor" 
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width={ width } 
      height={ height }
      viewBox="-8 -8 37 37"
    >
      <g
        fill={ fill }
        fillRule="evenodd"
        stroke={ stroke }
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9.5 11.5c.97 1.367 3.011 1.127 4.011 0l1.989-2c1.124-1.228 1.164-2.814 0-4-1.136-1.157-2.864-1.157-4 0l-2 2"></path>
        <path d="M11.5 10.57c-.97-1.367-3-1.197-4-.07l-2 1.975c-1.124 1.228-1.164 2.839 0 4.025 1.136 1.157 2.864 1.157 4 0l2-2"></path>
      </g>
    </svg>
  );
}
// Menubar: open 
export function MenuOpenIcon({ 
  width, 
  height, 
  stroke="currentColor",
  strokeWidth="2"
}) {
  return (
    <svg 
      className='test-icon-style'
      xmlns="http://www.w3.org/2000/svg" 
      width={ width } 
      height={ height } 
      viewBox="0 0 24 24"
    >
      <path
        fill={ "none" }
        stroke={ stroke }
        strokeWidth={ strokeWidth }
        d="M2 19h20M2 5h20M2 12h20"
      ></path>
    </svg>
  );
}
// Menubar: close 
export function MenuCloseIcon({ 
  width, 
  height, 
  stroke="currentColor",
  strokeWidth="2"
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={ width } 
      height={ height }
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={ stroke }
        strokeWidth={ strokeWidth }
        d="M3 3l18 18M3 21L21 3"
      ></path>
    </svg>
  );
}
// github icon
export function GithubIcon({ 
  width, 
  height, 
  stroke="currentColor",
  strokeWidth="2",
  fill="none"
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ width } 
      height={ height }
      fill={ fill }
      stroke={ stroke }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={ strokeWidth }
      className="feather feather-github"
      viewBox="0 0 24 24"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
    </svg>
  );
}
// information icon
export function InformationIcon({ 
  width, 
  height, 
  stroke="currentColor",
  fill="none"
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={ width } 
      height={ height }
      fill={ fill }
      stroke={ stroke }
      viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        d="M12 3.538a8.462 8.462 0 100 16.924 8.462 8.462 0 000-16.923zM2 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10S2 17.523 2 12z"
        clipRule="evenodd"
      ></path>
      <path
        fillRule="evenodd"
        d="M12 16.359a.77.77 0 00.77-.77v-4.102a.77.77 0 10-1.54 0v4.103c0 .425.345.769.77.769z"
        clipRule="evenodd"
      ></path>
      <path d="M13.026 8.41a1.026 1.026 0 10-2.051 0 1.026 1.026 0 002.051 0z"></path>
    </svg>
  );
}
// linkedin icon
export function LinkedInIcon({ 
  width, 
  height, 
  fill="#0A66C2"
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={ width }
      height={ height }
      viewBox="0 0 256 256"
    >
      <path
        fill={ fill }
        d="M218.12 218.13h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.778 15.434-22.778 31.369v60.43H99.752V95.966h36.414v16.694h.51a39.907 39.907 0 0135.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013zM56.95 79.27c-12.157.002-22.014-9.851-22.016-22.008-.002-12.157 9.851-22.014 22.008-22.016 12.157-.002 22.014 9.851 22.016 22.008A22.012 22.012 0 0156.95 79.27m18.966 138.86H37.945V95.97h37.97v122.16zM237.026.02H18.886C8.576-.096.12 8.162-.005 18.472v219.05c.121 10.315 8.575 18.582 18.89 18.474h218.14c10.336.128 18.824-8.138 18.967-18.474V18.452c-.148-10.33-8.636-18.589-18.966-18.454"
      ></path>
    </svg>
  );
}
// loader
export function LoaderIcon({ 
  fill='none',
  stroke='#fff',
  width, 
  height, 
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      stroke={ stroke }
      viewBox="0 0 57 57"
      width={ width } 
      height={ height }
    >
      <g
        fill={ fill }
        fillRule="evenodd"
        strokeWidth="2"
        transform="translate(1 1)"
      >
        <circle cx="5" cy="50" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="50;5;50;50"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="5;27;49;5"
          ></animate>
        </circle>
        <circle cx="27" cy="5" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="5"
            repeatCount="indefinite"
            to="5"
            values="5;50;50;5"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="27"
            repeatCount="indefinite"
            to="27"
            values="27;49;5;27"
          ></animate>
        </circle>
        <circle cx="49" cy="50" r="5">
          <animate
            attributeName="cy"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            repeatCount="indefinite"
            values="50;50;5;50"
          ></animate>
          <animate
            attributeName="cx"
            begin="0s"
            calcMode="linear"
            dur="2.2s"
            from="49"
            repeatCount="indefinite"
            to="49"
            values="49;5;27;49"
          ></animate>
        </circle>
      </g>
    </svg>
  );
}