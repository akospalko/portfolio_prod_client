//this component gathers all the svg components
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
  width='50', 
  height='50', 
  stroke="#000",
}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 512 512"
      width={ width }
      height={ height }
    >
      <path
        fill="none"
        stroke={ stroke }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="45"
        d="M196 220L260 220 260 392"
      ></path>
      <path
        fill="none"
        stroke={ stroke }
        strokeLinecap="round"
        strokeMiterlimit="10"
        strokeWidth="45"
        d="M187 396L325 396"
      ></path>
      <path d="M256 160a32 32 0 1132-32 32 32 0 01-32 32z"></path>
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
// logo
export function LogoIcon({ 
  fill='#fff',
  stroke='#000',
  width='50',
  height='50',
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="105.39 30.64 101.44 141.79"
      width={ height }
      height={ width }
    >
      <g stroke={ stroke }>
        <path
          fill={ fill }
          strokeWidth="0.896"
          d="M-216.47 73.905v94.332h20.635v61.905h26.531v-26.531h38.322v26.531h26.531v-114.97h-20.635l.174-42.005-91.559.735"
          transform="translate(300.13 -34.583) scale(.89754)"
        ></path>
        <path
          fillRule="evenodd"
          strokeWidth="0.857"
          d="M-210.58 79.801v82.541h14.739v-26.531h64.853v-56.01zm14.739 14.739h49.865l.249 26.531h-50.114z"
          style={{ mixBlendMode: "normal" }}
          transform="translate(300.13 -34.583) scale(.89754)"
        ></path>
        <path
          strokeWidth="0.896"
          d="M-189.94 141.71v82.541h14.739V197.72h50.114v26.531h14.739V141.71h-65.749zm14.739 14.739h50.114v26.531h-50.114z"
          transform="translate(300.13 -34.583) scale(.89754)"
        ></path>
        <path
          strokeWidth="1.153"
          d="M-125.09 121.07v14.739h14.739V121.07z"
          transform="translate(300.13 -34.583) scale(.89754)"
        ></path>
      </g>
    </svg>
  );
}
// code
export function CodeIcon({ 
  fill='none',
  stroke='#000',
  strokeWidth='2',
  width='50',
  height='50',
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path
        fill={ fill }
        stroke={ stroke }
        strokeWidth={ strokeWidth }
        width={ width }
        height={ height }
        d="M9 22l6-20m2 15l5-5-5-5M7 17l-5-5 5-5"
      ></path>
  </svg>
  );
}
// gis 
export function GISIcon({ 
  fill='#000',
  stroke='#000',
  width='50',
  height='50',
  strokeWidth='1'
}) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ width }
      height={ height }
      fill={ fill }
      stroke={ stroke }
      strokeWidth={ strokeWidth }
      viewBox="0 0 53.387 63.977"
  >
    <path
      d="M80.148 104.34c-.553-.553-.547-1.514.013-1.969.646-.524 5.727-2.065 8.379-2.54 4.281-.768 3.88-.48 3.88-2.798 0-2.23-.255-2.488-2.483-2.5-2.877-.015-8.724-2.248-12.566-4.798-6.662-4.423-11.1-11.168-12.62-19.177-1.829-9.642 1.476-19.865 8.592-26.578 3.346-3.157 4.022-3.579 4.942-3.086 1.212.649.916 1.904-.717 3.035-1.937 1.343-5.16 4.917-6.616 7.338-8.278 13.758-2.804 31.742 11.657 38.299 8.096 3.67 18.014 3.106 25.172-1.433 1.767-1.121 2.86-1.2 3.456-.249.508.811-.085 1.445-2.914 3.117-2.54 1.5-6.737 2.99-9.426 3.346-3.889.514-3.655.343-3.655 2.672 0 1.88.077 2.097.794 2.233 7.185 1.37 11.098 2.54 11.705 3.504.264.42.26.772-.016 1.21-.358.567-1.47.624-13.77.709-10.113.07-13.485-.012-13.808-.335zm9.475-15.463c-5.367-1.136-9.452-3.423-13.187-7.383-2.683-2.844-4.449-5.856-5.594-9.543-1.167-3.76-1.167-9.647 0-13.406 1.291-4.159 2.992-6.889 6.373-10.233 5.063-5.009 9.646-6.877 16.792-6.846 3.651.016 4.643.154 7.21 1 7.266 2.396 13.279 8.592 15.603 16.079.659 2.123.821 3.447.821 6.702 0 6.933-2.037 11.802-7.022 16.788-4.687 4.687-9.399 6.77-15.906 7.031-1.94.078-4.232-.007-5.091-.19zm8.924-3.004c.54-.222.37-.38-.94-.877-.878-.334-2.286-1.07-3.127-1.637s-1.697-1.133-1.902-1.259c-.37-.227-4.724 2.586-4.852 3.136-.217.93 8.818 1.463 10.82.637zm-11.443-3.915l2.823-1.987-2.853-3.04c-1.569-1.672-3.004-2.996-3.19-2.943-.185.053-1.745 1.085-3.467 2.293l-3.13 2.196 1.482 1.535c1.411 1.463 4.712 3.933 5.255 3.933.141 0 1.527-.894 3.08-1.987zm17.247 1.11c.167-.167-4.172-6.355-4.456-6.354-.52.002-4.983 3.192-4.89 3.495.175.566 3.528 2.277 5.531 2.823 1.643.448 3.387.464 3.815.036zm3.856-5.635c.095-1.18-.016-3.053-.246-4.162l-.419-2.015-2.632 1.776c-1.683 1.135-2.542 1.928-2.384 2.2.455.78 3.42 5.001 3.962 5.643.508.6.562.583 1.041-.331.278-.53.583-1.93.678-3.11zM95.23 76.305c1.56-1.098 2.835-2.128 2.835-2.29 0-.217-3.57-5.507-4.47-6.624-.205-.254-6.797 4.36-6.808 4.765-.01.346 5.158 6.144 5.475 6.144.073 0 1.409-.898 2.968-1.995zm18.334-3.506c.733-1.944 1.586-6.106 1.307-6.385-.184-.184-4.289 2.506-4.605 3.018-.104.169.042 1.4.325 2.736.283 1.335.522 3.063.532 3.84l.017 1.41.873-1.41c.48-.777 1.178-2.22 1.55-3.209zm-34.373.967c1.552-1.064 2.943-2.037 3.09-2.161s-.618-1.923-1.701-3.998l-1.97-3.772-2.662 1.853c-1.464 1.02-2.745 2.068-2.848 2.33-.49 1.255 2.095 8.378 2.873 7.917.218-.128 1.666-1.105 3.218-2.169zm24.383-3.278c1.445-.999 2.716-1.961 2.826-2.138.251-.408-3.046-7.006-3.61-7.222-.31-.119-4.924 2.83-6.815 4.357-.219.176 4.33 6.795 4.677 6.808.163.006 1.477-.807 2.922-1.805zm-15.127-3.182c1.7-1.196 3.158-2.229 3.24-2.295.219-.176-4.33-6.796-4.678-6.808-.331-.012-5.457 3.474-5.71 3.884-.35.565 3.104 7.394 3.739 7.394.175 0 1.709-.979 3.409-2.175zm26.113-4.822c.288-.74-.542-3.941-1.599-6.162L112 54.3l-3.351 2.317c-1.843 1.275-3.351 2.429-3.351 2.564s.841 1.876 1.87 3.868l1.87 3.621 2.67-1.857c1.468-1.022 2.752-2.07 2.853-2.33zm-39.428.296c1.141-.775 2.169-1.56 2.283-1.746.115-.185.038-1.019-.17-1.853-.208-.835-.49-2.544-.627-3.798l-.249-2.28-1.115 2.104c-1.465 2.763-3.143 8.983-2.424 8.983.125 0 1.16-.635 2.302-1.41zm22.481-1.853c1.789-1.213 3.257-2.382 3.263-2.597.006-.215-1.22-1.695-2.723-3.289l-2.734-2.897-2.91 2.003c-1.601 1.102-2.911 2.139-2.911 2.303 0 .354 4.33 6.65 4.586 6.67.097.007 1.64-.98 3.429-2.193zm-12.48-5.663c-.66-1.112-4.087-5.902-4.33-6.052-.994-.615-1.75 4.884-1.101 8.012l.418 2.016 2.632-1.776c1.693-1.143 2.543-1.927 2.381-2.2zm22.77-1.472l2.59-1.755-2.253-2.126c-1.24-1.169-2.813-2.422-3.497-2.784l-1.243-.66-5.757 4.053 5.784 6.222.893-.598c.49-.328 2.058-1.387 3.483-2.352zm-17.519-1.597c1.305-.873 2.327-1.746 2.272-1.94-.178-.617-5.288-2.946-6.938-3.163-2.752-.361-2.786.046-.307 3.647 1.222 1.776 2.307 3.187 2.41 3.136.105-.05 1.258-.807 2.563-1.68zm7.768-5.425c1.108-.752 1.941-1.488 1.85-1.635-.347-.563-4.93-1.143-7.59-.96-3.533.242-4.44.682-2.57 1.246.739.223 2.293 1.032 3.454 1.798 1.161.765 2.275 1.285 2.475 1.155s1.272-.851 2.38-1.604z"
      transform="translate(-64.255 -40.717)"
    ></path>
    <path
      d="M83.555 213.8l-.829-.844v-.981c0-1.152.546-2.01 1.647-2.588l.79-.416 7.349-18.22-.414-3.216.87-.885c1.02-1.04 2.033-1.118 3.43-.263l1.014.62 17.693-1.07.772-.789-6.594-23.621-1.125-1.078-1.125-1.078v-2.173l1.658-1.688h2.134l1.058 1.173 1.058 1.172 20.386 6.504 2.47-.77 9.196-13.616-.199-2.35 1.707-1.739h2.087l1.657 1.688v2.125l-.828.844c-.456.464-1.13.844-1.498.844h-.67l-9.308 13.764.1 1.187.101 1.188-.853.87-.854.869H134.3l-1.058-1.172-1.059-1.172-10.128-3.267c-5.57-1.797-10.163-3.232-10.206-3.19-.043.043 1.388 5.328 3.18 11.745l3.258 11.667 1.125 1.078 1.124 1.077v2.174l-.829.843c-.983 1.002-2.008 1.069-3.39.22l-1.014-.62-17.909 1.072-.498.43c-.274.237-.82.7-1.215 1.032l-.717.601-7.179 17.92.213 1.584.214 1.586-1.742 1.773h-2.087z"
      transform="translate(-64.255 -40.717) translate(-29.132 -4.009)"
    ></path>
    <text
      fontFamily="sans-serif"
      fontSize="10.583"
      transform="translate(-64.255 -40.717) translate(-29.132 -4.009) translate(-111.47 -221.97) scale(1.9909)"
      style={{
        lineHeight: "1.25",
        shapeInside: "url(#rect62)",
        whiteSpace: "pre",
      }}
    >
      <tspan x="109.99" y="217.353">
        <tspan>GIS</tspan>
      </tspan>
    </text>
    <g>
      <path
        d="M83.555 213.8l-.829-.844v-.981c0-1.152.546-2.01 1.647-2.588l.79-.416 7.349-18.22-.414-3.216.87-.885c1.02-1.04 2.033-1.118 3.43-.263l1.014.62 17.693-1.07.772-.789-6.594-23.621-1.125-1.078-1.125-1.078v-2.173l1.658-1.688h2.134l1.058 1.173 1.058 1.172 20.386 6.504 2.47-.77 9.196-13.616-.199-2.35 1.707-1.739h2.087l1.657 1.688v2.125l-.828.844c-.456.464-1.13.844-1.498.844h-.67l-9.308 13.764.1 1.187.101 1.188-.853.87-.854.869H134.3l-1.058-1.172-1.059-1.172-10.128-3.267c-5.57-1.797-10.163-3.232-10.206-3.19-.043.043 1.388 5.328 3.18 11.745l3.258 11.667 1.125 1.078 1.124 1.077v2.174l-.829.843c-.983 1.002-2.008 1.069-3.39.22l-1.014-.62-17.909 1.072-.498.43c-.274.237-.82.7-1.215 1.032l-.717.601-7.179 17.92.213 1.584.214 1.586-1.742 1.773h-2.087z"
        transform="translate(-64.255 -40.717) translate(-29.132 -4.009)"
      ></path>
      <text
        fontFamily="sans-serif"
        fontSize="10.583"
        transform="translate(-64.255 -40.717) translate(-29.132 -4.009) translate(-111.47 -221.97) scale(1.9909)"
        style={{
          lineHeight: "1.25",
          shapeInside: "url(#rect910)",
          whiteSpace: "pre",
        }}
      >
        <tspan x="109.99" y="217.353">
          <tspan>GIS</tspan>
        </tspan>
      </text>
    </g>
  </svg>
  );
}
// language
export function LanguageIcon({ 
  stroke= '#000',
  strokeWidth= '32',
  width='50',
  height='50'
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      width={ width }
      height={ height }
      viewBox="0 0 512 512"
    >
    <path
      fill="none"
      stroke={ stroke }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={ strokeWidth }
      d="M48 112L336 112"
    ></path>
    <path
      fill="none"
      stroke={ stroke }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={ strokeWidth }
      d="M192 64L192 112"
    ></path>
    <path
      fill="none"
      stroke={ stroke }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={ strokeWidth }
      d="M272 448L368 224 464 448"
    ></path>
    <path
      fill="none"
      stroke={ stroke }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={ strokeWidth }
      d="M301.5 384L434.5 384"
    ></path>
    <path
      fill="none"
      stroke={ stroke }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={ strokeWidth }
      d="M281.3 112S257 206 199 277 80 384 80 384"
    ></path>
    <path
      fill="none"
      stroke={ stroke }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={ strokeWidth }
      d="M256 336s-35-27-72-75-56-85-56-85"
    ></path>
  </svg>
  );
}
// other
export function OthersIcon({ 
  fill='#000',
  stroke='#000',
  width='50',
  height='50',
}) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      fill={ fill }
      stroke={ stroke }
      width={ width }
      height={ height }
    >
      <path d="M6 10.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM10.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 12a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z"></path>
    </svg>
  );
}