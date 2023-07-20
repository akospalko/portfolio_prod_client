// Project svg components: icon, animation, background
/* RESOURCES:
https://icon-sets.iconify.design/ - icons
https://www.svgrepo.com/ - icons
https://loading.io/ - animated background 
*/
import React from 'react'
import './Shared.css'

// Anchor icon (align view to the top position of the page)
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
// Link icon
export function LinkIcon({ width, height, fill }) {
  return (
     <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 56 56"
      width={ width || "100%" } 
      height={ height || "100%" }
      fill={ fill || "#000" }
    >
      <path d="M28 51.906c13.055 0 23.906-10.851 23.906-23.906 0-13.078-10.875-23.906-23.93-23.906C14.899 4.094 4.095 14.922 4.095 28c0 13.055 10.828 23.906 23.906 23.906zm10.406-34.804c2.906 2.882 2.649 6.445-.703 9.773l-4.031 4.055c.328-1.125.305-2.438-.07-3.328l2.367-2.368c2.297-2.25 2.554-4.617.726-6.422-1.804-1.78-4.172-1.5-6.422.75l-3.351 3.305c-2.32 2.344-2.625 4.735-.797 6.516.539.562 1.336.914 2.367 1.101-.352.75-1.078 1.618-1.758 2.086-.703-.117-1.594-.68-2.344-1.453-2.906-2.883-2.601-6.492.797-9.914l3.422-3.398c3.352-3.352 6.914-3.586 9.797-.703zM16.75 38.758c-2.906-2.883-2.649-6.446.727-9.774l4.03-4.054c-.35 1.125-.327 2.437.048 3.328l-2.368 2.367c-2.297 2.227-2.554 4.617-.726 6.422 1.805 1.781 4.195 1.5 6.422-.75l3.351-3.305c2.32-2.344 2.625-4.734.797-6.515-.539-.563-1.336-.915-2.367-1.102.351-.75 1.078-1.617 1.758-2.086.703.117 1.593.68 2.367 1.453 2.883 2.883 2.578 6.469-.82 9.89l-3.422 3.423c-3.352 3.351-6.914 3.586-9.797.703z"></path>
    </svg>
  );
}
// Menubar: open 
export function MenuOpenIcon({ width, height, stroke, strokeWidth }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={ width || "100%" } 
      height={ height || "100%" }
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={ stroke || "2" }
        strokeWidth={ strokeWidth || "2" }
        d="M2 19h20M2 5h20M2 12h20"
      ></path>
    </svg>
  );
}
// Menubar: close 
export function MenuCloseIcon({ width, height, stroke, strokeWidth }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={ width || "100%" } 
      height={ height || "100%" }
      viewBox="0 0 24 24"
    >
      <path
        fill="none"
        stroke={ stroke || "#000" }
        strokeWidth={ strokeWidth || "2" }
        d="M3 3l18 18M3 21L21 3"
      ></path>
    </svg>
  );
}
// Github icon
export function GithubIcon({ width, height, stroke, strokeWidth, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ width || "100%" } 
      height={ height || "100%" }
      fill={ fill || "none" }
      stroke={ stroke || "currentColor" }
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={ strokeWidth || "2" }
      className="feather feather-github"
      viewBox="0 0 24 24"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 00-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0020 4.77 5.07 5.07 0 0019.91 1S18.73.65 16 2.48a13.38 13.38 0 00-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 005 4.77a5.44 5.44 0 00-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 009 18.13V22"></path>
    </svg>
  );
}
// Email icon
export function EmailIcon({ width, height, fill }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" viewBox="0 0 24 24"
      height={ height || "100%" }
      width={ width || "100%" }
    >
      <path
        fill={ fill || "#000" }
        fillRule="evenodd"
        d="M3.75 5.25L3 6v12l.75.75h16.5L21 18V6l-.75-.75H3.75zm.75 2.446v9.554h15V7.695L12 14.514 4.5 7.696zm13.81-.946H5.69L12 12.486l6.31-5.736z"
        clipRule="evenodd"
      ></path>
    </svg>
  );
}
// Mobile phone icon
export function MobilPhoneIcon({ width, height, fill }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      height={ height || "100%" }
      width={ width || "100%" }
    >
      <path 
        fill={ fill || "#000" }
        d="M16 1H8C6.34 1 5 2.34 5 4v16c0 1.66 1.34 3 3 3h8c1.66 0 3-1.34 3-3V4c0-1.66-1.34-3-3-3zm-2 20h-4v-1h4v1zm3.25-3H6.75V4h10.5v14z"></path>
    </svg>
  );
}
// Profile icon
export function ProfileIcon({ width, height, stroke, fill }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 24 24"
      height={ height || "100%" }
      width={ width || "100%" }
    >
      <g 
        stroke={ stroke || "#000" } 
        strokeWidth="1.5"
        fill={ fill || "transparent" }
      >
        <circle cx="12" cy="6" r="4"></circle>
        <path d="M20 17.5c0 2.485 0 4.5-8 4.5s-8-2.015-8-4.5S7.582 13 12 13s8 2.015 8 4.5z"></path>
      </g>
    </svg>
  );
}
// Information icon
export function InformationIcon({ width, height, fill }) {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    width={ width || "100%"  } 
    height={ height || "100%" }
    viewBox="0 0 24 24"
  >
    <path
      fill={fill || "#000"}
      d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"
    ></path>
  </svg>
  );
}
// Linkedin icon
export function LinkedInIcon({ width, height, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="xMidYMid"
      width={ width || "100%"}
      height={ height || "100%" }
      viewBox="0 0 256 256"
    >
      <path
        fill={ fill || "#000" }
        d="M218.12 218.13h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.778 15.434-22.778 31.369v60.43H99.752V95.966h36.414v16.694h.51a39.907 39.907 0 0135.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013zM56.95 79.27c-12.157.002-22.014-9.851-22.016-22.008-.002-12.157 9.851-22.014 22.008-22.016 12.157-.002 22.014 9.851 22.016 22.008A22.012 22.012 0 0156.95 79.27m18.966 138.86H37.945V95.97h37.97v122.16zM237.026.02H18.886C8.576-.096.12 8.162-.005 18.472v219.05c.121 10.315 8.575 18.582 18.89 18.474h218.14c10.336.128 18.824-8.138 18.967-18.474V18.452c-.148-10.33-8.636-18.589-18.966-18.454"
      ></path>
    </svg>
  );
}
// Loader
export function LoaderIcon({ fill, stroke, width, height }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" 
      stroke={ stroke || '#fff' }
      viewBox="0 0 57 57"
      width={ width } 
      height={ height }
    >
      <g
        fill={ fill || "none" }
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
// Logo
export function LogoIcon({ fill='#fff', stroke='#000', width='50', height='50' }) {
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
// Globe 
export function GlobeIcon({ width, height }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      transform="scale(-1 1)"
      viewBox="-6.43 0 63.853 63.853"
      height={ height || "100%" }
      width={ width || "100%" }
    >
      <g>
        <defs>
          <clipPath id="clip-path">
            <path
              fill="#99ecff"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M513 621.871a20.849 20.849 0 11-14.957-20.021A20.871 20.871 0 01513 621.871z"
              data-name="Path 168"
            ></path>
          </clipPath>
        </defs>
        <g data-name="Group 111" transform="translate(-464.667 -599.147)">
          <path
            fill="#fff"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M46 0L0 0"
            data-name="Line 154"
            transform="translate(469 662)"
          ></path>
          <path
            fill="#fff"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M41.189 41.189L0 0"
            data-name="Line 155"
            transform="translate(473.061 600.561)"
          ></path>
          <path
            fill="none"
            stroke="#000"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M511.377 640.03a26.462 26.462 0 11-37.96-36.87"
            data-name="Path 163"
          ></path>
          <path
            fill="#fff"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M0 0L0 14"
            data-name="Line 156"
            transform="translate(492 648)"
          ></path>
          <path
            fill="#fff1b6"
            stroke="#000"
            strokeMiterlimit="10"
            strokeWidth="2"
            d="M506 662h-28l4-6h20z"
            data-name="Path 164"
          ></path>
          <g data-name="Group 110">
            <path
              fill="#99ecff"
              d="M513 621.871a20.849 20.849 0 11-14.957-20.021A20.871 20.871 0 01513 621.871z"
              data-name="Path 165"
            ></path>
            <g
              fill="#cbff94"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="2"
              clipPath="url(#clip-path)"
              data-name="Group 109"
            >
              <path
                d="M473 614l2.428-.607a3.269 3.269 0 012.837.619l1.959 1.567a3.272 3.272 0 003.726.251l1.616-.969a3.267 3.267 0 012.971-.2l3.222 1.381a3.273 3.273 0 003.8-.913l1.645-1.975a3.273 3.273 0 014.2-.711h0a3.271 3.271 0 011.243 4.268l-2.324 4.648a3.256 3.256 0 01-.882 1.092l-3.211 2.569a3.271 3.271 0 00-1.23 2.552v2.161a3.271 3.271 0 01-2.123 3.063l-4.109 1.541a3.271 3.271 0 00-2.078 2.525L486 641s-11.75 11.125-21.75-7c-8.691-15.752 8.75-20 8.75-20z"
                data-name="Path 166"
              ></path>
              <path
                d="M493 601v1.93a4.142 4.142 0 001.656 3.312h0a4.14 4.14 0 004.782.133L503 604s.843-3.55-5.723-4.717C492.875 598.5 493 601 493 601z"
                data-name="Path 167"
              ></path>
            </g>
            <path
              fill="none"
              stroke="#000"
              strokeMiterlimit="10"
              strokeWidth="2"
              d="M513 621.871a20.849 20.849 0 11-14.957-20.021A20.871 20.871 0 01513 621.871z"
              data-name="Path 169"
            ></path>
          </g>
        </g>
      </g>
    </svg>
  );
}
// Code icon 
export function CodeIcon({ width, height, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="#000"
      version="1.1"
      viewBox="0 0 64 64"
      height={ height || "100%" }
      width={ width || "100%" }
      xmlSpace="preserve"
    >
      <g>
        <g transform="translate(-192 -672)">
          <path
            fill="#3e4f59"
            fillOpacity="1"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            strokeWidth="2"
            d="M202 681h49v6h-49z"
          ></path>
          <path
            fill="#acbec2"
            fillOpacity="1"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            strokeWidth="2"
            d="M202 687h49v40h-49z"
          ></path>
          <path
            fill= { fill || "#e8edee" }
            fillOpacity="1"
            fillRule="evenodd"
            stroke="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            strokeWidth="2"
            d="M202 687v40h29.77a28.484 41.393 35.6 0018.625-40z"
          ></path>
          <path
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            d="M204 680c-1.645 0-3 1.355-3 3v40a1 1 0 102 0v-40c0-.564.436-1 1-1h45c.564 0 1 .436 1 1v3h-42a1 1 0 000 2h42v37c0 .564-.436 1-1 1h-49a1 1 0 000 2h49c1.645 0 3-1.355 3-3v-42c0-1.645-1.355-3-3-3z"
            color="#000"
          ></path>
          <path
            d="M247 683a1 1 0 100 2 1 1 0 000-2z"
            style={{ InkscapeStroke: "none" }}
            fill="#ed7161"
            fillOpacity="1"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            color="#000"
          ></path>
          <path
            d="M243 683a1 1 0 100 2 1 1 0 000-2z"
            style={{ InkscapeStroke: "none" }}
            fill="#ecba16"
            fillOpacity="1"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            color="#000"
          ></path>
          <path
            d="M239 683a1 1 0 100 2 1 1 0 000-2z"
            style={{ InkscapeStroke: "none" }}
            fill="#42b05c"
            fillOpacity="1"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            color="#000"
          ></path>
          <path
            d="M197 726a1 1 0 00-1 1 1 1 0 001 1 1 1 0 001-1 1 1 0 00-1-1z"
            style={{ InkscapeStroke: "none" }}
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            color="#000"
          ></path>
          <path
            d="M205 686a1 1 0 100 2 1 1 0 000-2z"
            style={{ InkscapeStroke: "none" }}
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            color="#000"
          ></path>
          <path
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            d="M212 694a1 1 0 00-.707.293l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414 0 1 1 0 000-1.414L210.414 698l2.293-2.293a1 1 0 000-1.414A1 1 0 00212 694z"
            color="#000"
          ></path>
          <path
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            d="M220.043 694.229a1 1 0 00-.709.292 1 1 0 000 1.415l2.293 2.293-2.293 2.292a1 1 0 000 1.415 1 1 0 001.416 0l3-3a1 1 0 000-1.415l-3-3a1 1 0 00-.707-.292z"
            color="#000"
          ></path>
          <path
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            d="M217.379 694.6a1 1 0 00-1.299.558l-2 5a1 1 0 00.557 1.299 1 1 0 001.299-.557l2-5a1 1 0 00-.557-1.3z"
            color="#000"
          ></path>
          <g>
            <path
              fill="#000"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4.1"
              d="M227 697a1 1 0 00-1 1 1 1 0 001 1h18a1 1 0 001-1 1 1 0 00-1-1z"
              color="#000"
            ></path>
          </g>
          <g>
            <path
              fill="#000"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4.1"
              d="M214 705a1 1 0 00-1 1 1 1 0 001 1h31a1 1 0 001-1 1 1 0 00-1-1z"
              color="#000"
            ></path>
          </g>
          <g>
            <path
              fill="#000"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4.1"
              d="M214 709a1 1 0 00-1 1 1 1 0 001 1h13.102a1 1 0 001-1 1 1 0 00-1-1zm17 0a1 1 0 00-1 1 1 1 0 001 1h4a1 1 0 001-1 1 1 0 00-1-1z"
              color="#000"
            ></path>
          </g>
          <g>
            <path
              fill="#000"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4.1"
              d="M214 713a1 1 0 00-1 1 1 1 0 001 1h31a1 1 0 001-1 1 1 0 00-1-1z"
              color="#000"
            ></path>
          </g>
          <g>
            <path
              fill="#000"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4.1"
              d="M214 717a1 1 0 00-1 1 1 1 0 001 1h7.932a1 1 0 001-1 1 1 0 00-1-1zm12 0a1 1 0 00-1 1 1 1 0 001 1h12a1 1 0 001-1 1 1 0 00-1-1z"
              color="#000"
            ></path>
          </g>
          <g>
            <path
              fill="#000"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4.1"
              d="M214 721a1 1 0 00-1 1 1 1 0 001 1h31a1 1 0 001-1 1 1 0 00-1-1z"
              color="#000"
            ></path>
          </g>
          <g>
            <path
              fill="#000"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4.1"
              d="M227 701a1 1 0 00-1 1 1 1 0 001 1h9a1 1 0 001-1 1 1 0 00-1-1z"
              color="#000"
            ></path>
          </g>
          <g>
            <path
              fill="#000"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeMiterlimit="4.1"
              d="M227 693a1 1 0 00-1 1 1 1 0 001 1h18a1 1 0 001-1 1 1 0 00-1-1z"
              color="#000"
            ></path>
          </g>
          <path
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            d="M209 705a1 1 0 100 2 1 1 0 000-2z"
            color="#000"
          ></path>
          <path
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            d="M209 709a1 1 0 100 2 1 1 0 000-2z"
            color="#000"
          ></path>
          <path
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            d="M209 713a1 1 0 100 2 1 1 0 000-2z"
            color="#000"
          ></path>
          <path
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            d="M209 717a1 1 0 100 2 1 1 0 000-2z"
            color="#000"
          ></path>
          <path
            fill="#000"
            fillRule="evenodd"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeMiterlimit="4.1"
            d="M209 721a1 1 0 100 2 1 1 0 000-2z"
            color="#000"
          ></path>
        </g>
      </g>
    </svg>
  );
}
// Language
export function LanguageIcon({ width, height, fill }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 64 64"
      width={ width || "100%"}
      height={ height || "100%"}
    >
      <g>
        <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
          <g transform="translate(-175 -95)">
            <g transform="translate(180 104)">
              <path
                fill={ fill || "#E9EFFA" }
                d="M24.16 40H51a3 3 0 003-3V3a3 3 0 00-3-3H3a3 3 0 00-3 3v34a3 3 0 003 3h7a2 2 0 012 2v8l10.141-9.22a3.003 3.003 0 012.02-.78"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M24.16 40H51a3 3 0 003-3V3a3 3 0 00-3-3H3a3 3 0 00-3 3v34a3 3 0 003 3h7a2 2 0 012 2v8l10.141-9.22a3.003 3.003 0 012.02-.78z"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M8 26l4-12"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 26l4-12"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 22h11"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M7 18h11"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M42 14v6"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M38 26L42 20 46 26"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M36 18L42 20 48 18"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M30 20a2 2 0 11-4.001-.001A2 2 0 0130 20z"
              ></path>
              <path
                stroke="#000"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M28 22a4 4 0 000-8 6 6 0 00-6 6c0 3.313 2.375 6 6 6 1.388 0 2.739-.586 3.878-1.31"
              ></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
}
// Other
export function OthersIcon({ width, height, fill, stroke }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      viewBox="0 0 48 48"
      height={ height || "100%"}
      width={ width || "100%"}
    >
    <g>
     
      <path
        fill={ fill || "#2F88FF" }
        stroke={ stroke || "#000" }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M24 27l-10-6-10 6v12l10 6 10-6V27zM44 27l-10-6-10 6v12l10 6 10-6V27z"
      ></path>
      <path
        fill={ fill || "#2F88FF" }
        stroke={ stroke || "#000" }
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="4"
        d="M34 9L24 3 14 9v12l10 6 10-6V9z"
      ></path>
    </g>
  </svg>
  );
}
// Image
export function ImageIcon({
  fill='#000',
  stroke='#000',
  strokeWidth='0.75',
  width='50',
  height='50'}) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width={ width }
      height={ height }
      fill={ fill }
      stroke={ stroke }
      viewBox="0 0 24 24"
      strokeWidth={ strokeWidth }
    >
      <path
        d="M21.691 4.886c-.103-1.34-1.134-2.474-2.577-2.577C17.052 2.103 14.165 2 12 2s-5.051.104-7.113.31c-1.443.103-2.474 1.134-2.577 2.577C2.103 6.948 2 9.835 2 12s.207 5.051.31 7.113c.103 1.34 1.134 2.475 2.577 2.578C6.949 21.897 9.835 22 12 22s5.052-.206 7.114-.31c1.34-.102 2.474-1.133 2.577-2.577.206-2.061.31-4.948.31-7.113s-.104-5.052-.31-7.113zM7.877 6.846c.515 0 1.03.515 1.03 1.03 0 .516-.515 1.031-1.03 1.031s-1.03-.515-1.03-1.03c0-.516.515-1.032 1.03-1.032zM20.145 19.01c0 .619-.515 1.134-1.134 1.134-2.062.207-4.948.31-7.01.31-2.062 0-4.949-.206-7.01-.31-.413 0-.722-.309-.928-.618l7.628-6.083c1.237-1.03 3.093-1.03 4.227.103l4.33 3.712c0 .618 0 1.237-.103 1.752z"
      ></path>
    </svg>
  );
}
// Home page 
export function HomePageIcon({ height, width, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ height ||'100%' }
      height={ width || '100%' }
      fill={ fill || "#000" }
      version="1.1"
      viewBox="0 0 360 360"
      xmlSpace="preserve"
    >
      <path d="M352.163 163.115L198.919 9.871c-10.449-10.449-27.389-10.449-37.838 0L7.837 163.115a26.756 26.756 0 0018.919 45.674h20.762v114.574c0 19.112 15.493 34.603 34.603 34.603h195.758c19.11 0 34.603-15.492 34.603-34.603V208.789h20.762a26.757 26.757 0 0018.919-45.674zm-131.732 144.67h-80.862v-45.583c0-22.33 18.102-40.431 40.431-40.431s40.431 18.1 40.431 40.431v45.583z"></path>
    </svg>
  );
}
// Study
export function LearnedIcon ({ height, width, fill }) {
  return(
    <svg
    xmlns="http://www.w3.org/2000/svg"
    className="cf-icon-svg"
    width={ height ||'100%'}
    height={ width || '100%' }
    fill={ fill || "#000" }
    viewBox="-1 0 19 19"
    >
      <path d="M16.417 9.583A7.917 7.917 0 118.5 1.666a7.917 7.917 0 017.917 7.917zM3.024 8.034s-.15.06-.15.155.15.155.15.155l5.117 2.171a1.074 1.074 0 00.73 0l3.1-1.315 2.015-.855a.464.464 0 00.05-.025l.006-.004.016-.01a.148.148 0 00.078-.116c0-.057-.05-.112-.15-.155L8.87 5.863a.922.922 0 00-.312-.063h-.053a.969.969 0 00-.364.063L3.024 8.034zm8.948 1.853l-2.854 1.211a1.699 1.699 0 01-1.225 0L5.04 9.887v1.565c0 1.009 1.552 1.826 3.466 1.826s3.467-.817 3.467-1.826zm1.882 1.992a.595.595 0 00-1.19 0v.79h1.19zm-.595-1.959a.396.396 0 10-.396-.395.396.396 0 00.396.395zm-.396.672a.396.396 0 10.396-.396.396.396 0 00-.396.396z"></path>
    </svg>
  )
} 
// Play 
export function PlayIcon({ height, width, fill }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      width={ height ||'100%'}
      height={ width || '100%' }
      viewBox="0 0 24 24"
    >
      <g fill={ fill || "#000" } >
        <path
          fillRule="evenodd"
          d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"
          clipRule="evenodd"
          opacity="0.5"
        ></path>
        <path d="M15.414 13.059l-4.72 2.787C9.934 16.294 9 15.71 9 14.786V9.214c0-.924.934-1.507 1.694-1.059l4.72 2.787c.781.462.781 1.656 0 2.118z"></path>
      </g>
    </svg>
  );
}
// Pause 
export function PauseIcon({ height, width, fill }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      fill="none" 
      width={ height ||'100%'}
      height={ width || '100%' }
      viewBox="0 0 24 24"
    >
      <g fill={ fill || "#000" } >
        <path
          d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2s10 4.477 10 10z"
          opacity="0.5"
        ></path>
        <path d="M8.076 8.617C8 8.801 8 9.034 8 9.5v5c0 .466 0 .699.076.883a1 1 0 00.541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 00.54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 00-.541-.54C10.199 8 9.966 8 9.5 8s-.699 0-.883.076a1 1 0 00-.54.541zM13.076 8.617C13 8.801 13 9.034 13 9.5v5c0 .466 0 .699.076.883a1 1 0 00.541.54c.184.077.417.077.883.077s.699 0 .883-.076a1 1 0 00.54-.541c.077-.184.077-.417.077-.883v-5c0-.466 0-.699-.076-.883a1 1 0 00-.541-.54C15.199 8 14.966 8 14.5 8s-.699 0-.883.076a1 1 0 00-.54.541z"></path>
      </g>
    </svg>
  );
}
// Code wars
export function CodeWarsIcon({ height, width, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ height ||'100%'}
      height={ width || '100%' }
      viewBox="0 0 24 24"
    >
      <path
        fill={ fill || "currentColor" }
        d="M1.072.142A1.072 1.072 0 000 1.214v21.572a1.072 1.072 0 001.072 1.072h21.856A1.072 1.072 0 0024 22.786V1.214A1.072 1.072 0 0022.928.142zm9.736 1.818a.904.904 0 01.828.539.784.784 0 011.274.493.639.639 0 01.29-.06c.33.008.59.262.625.575a1.322 1.322 0 01.624-.515 1.325 1.325 0 011.718.71 1.098 1.098 0 01.306-.236 1.102 1.102 0 011.483.479 1.094 1.094 0 01.12.47.994.994 0 011.322 1.214.904.904 0 01.874 1.438.784.784 0 01.176 1.356.639.639 0 01.19.224.642.642 0 01-.011.613 1.326 1.326 0 01.482.235 1.334 1.334 0 01.258 1.842 1.098 1.098 0 01.35.15 1.102 1.102 0 01.337 1.516 1.094 1.094 0 01-.344.344.994.994 0 01.228 1.318 1.006 1.006 0 01-.605.434.904.904 0 01-.803 1.482.814.814 0 00-.008-.04.784.784 0 01-1.075.873.639.639 0 01-.098.28.625.625 0 01-.43.288 1.33 1.33 0 01.023.456 1.334 1.334 0 01-1.44 1.173 1.098 1.098 0 01.054.377 1.102 1.102 0 01-1.128 1.072 1.098 1.098 0 01-.47-.12.994.994 0 01-1.696.583.904.904 0 01-1.685.075.784.784 0 01-1.274-.493.639.639 0 01-.29.064.64.64 0 01-.621-.58l.004-.007a1.326 1.326 0 01-.632.523 1.334 1.334 0 01-1.718-.706 1.098 1.098 0 01-.306.232 1.102 1.102 0 01-1.48-.478 1.094 1.094 0 01-.123-.471.994.994 0 01-1.318-1.21.904.904 0 01-.874-1.442.784.784 0 01-.176-1.356.639.639 0 01-.194-.224.642.642 0 01.011-.61l.019.004a1.326 1.326 0 01-.497-.239 1.334 1.334 0 01-.262-1.845 1.098 1.098 0 01-.35-.146 1.102 1.102 0 01-.337-1.52 1.094 1.094 0 01.347-.34A.994.994 0 012.88 9a.904.904 0 01.803-1.48.784.784 0 011.083-.836.639.639 0 01.098-.28.649.649 0 01.433-.288 1.33 1.33 0 01-.026-.452A1.334 1.334 0 016.716 4.49a1.098 1.098 0 01-.06-.377 1.101 1.101 0 011.13-1.073 1.094 1.094 0 01.47.115.994.994 0 011.696-.579.904.904 0 01.857-.617zM3.683 7.519a.784.784 0 00.008.041l-.004-.04a.904.904 0 00-.004-.001zM17.502 19.61a1.098 1.098 0 00-.002-.004h-.037a1.334 1.334 0 00.039.004zM13.825 3.507a1.322 1.322 0 00-.008.012l.008-.011zm-2.369-.014l-.003.003a.9.9 0 01-.665.27.896.896 0 01-.583-.232.994.994 0 01-.986.732.99.99 0 01-.362-.075 1.098 1.098 0 01-1.061 1.046 1.326 1.326 0 01.123.736 1.334 1.334 0 01-.725 1.035 1.1 1.1 0 01.307.795 1.106 1.106 0 01-.232.65c.321.18.53.523.523.915a1.016 1.016 0 01-.07.337.915.915 0 01.82.937.923.923 0 01-.01.138.74.74 0 01.157-.01c.343.007.627.25.702.57a.661.661 0 01.38-.111c.31.007.561.224.632.511a.418.418 0 01.381-.015 1.352 1.352 0 01.303-.63.418.418 0 01-.12-.143.422.422 0 01.004-.392.665.665 0 01-.325-1.117.736.736 0 01-.359-.336.74.74 0 01.385-1.023.747.747 0 00-.06.026.915.915 0 01-.201-.262.915.915 0 01.623-1.315V6.53a1.02 1.02 0 01.437-1.371 1.012 1.012 0 01.553-.112 1.11 1.11 0 01.598-1.054 1.12 1.12 0 01.06-.026.642.642 0 01-.109-.21.784.784 0 01-.455.132.784.784 0 01-.662-.396zm4.573 1.512a1.326 1.326 0 01-.587.46 1.334 1.334 0 01-1.255-.142v-.011a1.11 1.11 0 01-.553.66 1.106 1.106 0 01-.683.113 1.02 1.02 0 01-.553.889 1.016 1.016 0 01-.329.105.918.918 0 01-.43 1.169.923.923 0 01-.127.056.74.74 0 01.086.13.738.738 0 01-.168.89.661.661 0 01.28.283.655.655 0 01-.149.796.418.418 0 01.153.164c.019.034.03.068.038.101a1.356 1.356 0 01.672-.015.422.422 0 01.056-.142.422.422 0 01.34-.194.665.665 0 01.796-.848.736.736 0 01.112-.478.733.733 0 011.016-.224.915.915 0 01.127-.306.915.915 0 011.27-.28.915.915 0 01.179.153 1.02 1.02 0 011.408-.314 1.012 1.012 0 01.374.422c.355-.24.833-.261 1.214-.015a1.11 1.11 0 01.209.172.642.642 0 01.082-.108.784.784 0 01-.332-.337.784.784 0 01.03-.77.9.9 0 01-.553-.455.896.896 0 01-.075-.624.994.994 0 01-1.117-.511.994.994 0 01-.104-.359 1.098 1.098 0 01-1.427-.43zM5.249 7.37a.784.784 0 01-.124.46.784.784 0 01-.68.362c.06.235.026.49-.112.71a.896.896 0 01-.5.377c.31.325.373.829.12 1.225a.99.99 0 01-.255.269 1.098 1.098 0 01.351 1.45 1.326 1.326 0 01.691.276 1.334 1.334 0 01.512 1.154c.28-.064.579-.019.84.15a1.106 1.106 0 01.438.53 1.02 1.02 0 011.05.03 1.016 1.016 0 01.257.231.914.914 0 011.225-.224.919.919 0 01.112.086.74.74 0 01.071-.142.74.74 0 01.852-.306.661.661 0 01.1-.381.664.664 0 01.763-.273.418.418 0 01.246-.373 1.36 1.36 0 01-.358-.523v-.008a.418.418 0 01-.25.075.422.422 0 01-.344-.19.665.665 0 01-1.132-.243.736.736 0 01-.47.149.733.733 0 01-.718-.755.915.915 0 01-.329.049.915.915 0 01-.855-1.177h-.004a1.016 1.016 0 01-.993-1.042 1.012 1.012 0 01.168-.534 1.11 1.11 0 01-.64-1.035 1.11 1.11 0 01.068-.358.65.65 0 01-.1-.019zm11.127 2.133a.913.913 0 01-1.225.224.926.926 0 01-.112-.082.74.74 0 01-.067.142.74.74 0 01-.852.302.661.661 0 01-.105.385.662.662 0 01-.762.277.418.418 0 01-.063.212.426.426 0 01-.075.086 1.356 1.356 0 01.314.564.418.418 0 01.187-.04.422.422 0 01.343.194.665.665 0 011.136.242.736.736 0 01.467-.153c.41.008.728.348.72.755a.74.74 0 010 .008v-.005a.915.915 0 01.326-.052.915.915 0 01.896.941.919.919 0 01-.037.236c.564.015 1.008.482.993 1.046a1.012 1.012 0 01-.168.534 1.11 1.11 0 01.647 1.035 1.11 1.11 0 01-.075.362l.004-.007.1.018a.784.784 0 01.124-.46.784.784 0 01.68-.362.9.9 0 01.112-.71.896.896 0 01.504-.373.994.994 0 01-.123-1.225.99.99 0 01.257-.269 1.098 1.098 0 01-.35-1.453 1.326 1.326 0 01-.696-.273h-.003a1.334 1.334 0 01-.512-1.158 1.082 1.082 0 01-.837-.145 1.106 1.106 0 01-.44-.535 1.02 1.02 0 01-1.05-.026 1.016 1.016 0 01-.258-.235zm-.094 3.116l-.007.066a.74.74 0 00.007-.066zm-2.864-.259a1.36 1.36 0 01-.363.598.418.418 0 01.194.187.422.422 0 01-.007.396.665.665 0 01.329 1.113.736.736 0 01.358.336.739.739 0 01-.32.994.915.915 0 01.197.261.91.91 0 01-.396 1.233.919.919 0 01-.224.082v.004a1.02 1.02 0 01-.44 1.374 1.012 1.012 0 01-.55.109 1.11 1.11 0 01-.661 1.083.642.642 0 01.112.21.026.026 0 01-.004 0v.003a.784.784 0 01.456-.134.784.784 0 01.661.392.9.9 0 01.665-.27.896.896 0 01.587.236.994.994 0 01.982-.736.99.99 0 01.362.079v.022a1.1 1.1 0 011.061-1.072 1.326 1.326 0 01-.123-.736c.056-.46.34-.837.725-1.035l.003.004a1.102 1.102 0 01-.31-.795 1.106 1.106 0 01.232-.654 1.02 1.02 0 01-.452-1.251.915.915 0 01-.822-.934.923.923 0 01.011-.142.74.74 0 01-.157.015.74.74 0 01-.698-.572.661.661 0 01-.385.112.667.667 0 01-.627-.512.418.418 0 01-.217.053.418.418 0 01-.18-.045zm-.964.93a1.36 1.36 0 01-.336.042c-.112 0-.22-.012-.322-.038a.418.418 0 01-.06.295.422.422 0 01-.343.195.665.665 0 01-.792.844.736.736 0 01-.112.478.74.74 0 01-1.02.224.915.915 0 01-.127.306.915.915 0 01-1.266.28.919.919 0 01-.183-.153v.004a1.02 1.02 0 01-1.408.31 1.012 1.012 0 01-.374-.418c-.355.239-.83.261-1.214.015a1.113 1.113 0 01-.21-.172.65.65 0 01-.081.105.784.784 0 01.336.336.784.784 0 01-.034.77.89.89 0 01.553.455.896.896 0 01.075.624.994.994 0 011.12.515.99.99 0 01.101.355 1.098 1.098 0 011.431.43 1.326 1.326 0 01.587-.46c.43-.172.896-.104 1.255.142a1.106 1.106 0 01.549-.65 1.106 1.106 0 01.683-.108 1.02 1.02 0 01.553-.893 1.02 1.02 0 01.333-.104.916.916 0 01.425-1.17.919.919 0 01.131-.052.736.736 0 01-.09-.134.738.738 0 01.169-.886.661.661 0 01-.28-.284.67.67 0 01.149-.799.418.418 0 01-.15-.164.418.418 0 01-.048-.24z"
      ></path>
    </svg>
  );
}
// Leetcode
export function LeetCodeIcon({ height, width, fill }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={ height ||'100%' }
      height={ width || '100%' }
      viewBox="0 0 24 24"
    >
      <path
        fill={ fill || "currentColor" }
        d="M13.483 0a1.374 1.374 0 00-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 00-1.209 2.104 5.35 5.35 0 00-.125.513 5.527 5.527 0 00.062 2.362 5.83 5.83 0 00.349 1.017 5.938 5.938 0 001.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 00-1.951-.003l-2.396 2.392a3.021 3.021 0 01-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 01.066-.523 2.545 2.545 0 01.619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 00-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0013.483 0zm-2.866 12.815a1.38 1.38 0 00-1.38 1.382 1.38 1.38 0 001.38 1.382H20.79a1.38 1.38 0 001.38-1.382 1.38 1.38 0 00-1.38-1.382z"
      ></path>
    </svg>
  );
}
// Arrow (orientation: top)
export function ArrowIcon({ height, width, fill, rotate=0 }) {
  return (
    <div style={ { height: height, width: width, transform: `rotate(${ rotate }deg)` } }>
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="100%"
        height="100%"
        viewBox="0 0 32 32"
        >
        <g>
          <g fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
            <g fill={fill || "#000"} transform="translate(-518 -985)">
              <path d="M540.535 1000.535a.999.999 0 01-1.414 0L535 996.414V1007a1.001 1.001 0 01-2 0v-10.586l-4.121 4.121a.999.999 0 11-1.414-1.414l5.656-5.656a.981.981 0 01.879-.26.981.981 0 01.879.26l5.656 5.656a.999.999 0 010 1.414zM546 985h-24a4 4 0 00-4 4v24a4 4 0 004 4h24a4 4 0 004-4v-24a4 4 0 00-4-4z"></path>
            </g>
          </g>
        </g>
      </svg>
    </div>
  );
}
// Image placeholder
export function ImagePlaceholderIcon({ height, width, fill, fill2 }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      height={ height || "100%" }
      width={ width || "100%" }
      fill="none" 
      viewBox="0 0 24 24"
    >
      <g>
        <path
          fill={ fill || "#2A4157" }
          fillOpacity="1"
          fillRule="evenodd"
          d="M4.172 4.172C3 5.343 3 7.229 3 11v2.484l1.734-1.486.029-.025c.829-.71 1.49-1.276 2.056-1.645.58-.377 1.144-.601 1.766-.513a2.5 2.5 0 01.427.1c.598.195 1.004.645 1.358 1.24.346.58.69 1.38 1.12 2.384l.014.035c.214.5.356.828.49 1.054.13.218.208.262.254.279.027.01.054.017.082.022.048.008.138.01.36-.117.232-.13.521-.346.959-.674l.02-.015c.46-.345.836-.627 1.165-.826.343-.207.673-.349 1.049-.388.074-.007.149-.012.223-.013.378-.005.72.097 1.084.263.348.16.75.394 1.245.682l.022.013 2.528 1.475C21 14.644 21 13.873 21 13v-2c0-3.771 0-5.657-1.172-6.828C18.657 3 16.771 3 13 3h-2C7.229 3 5.343 3 4.172 4.172zm16.77 12.29l-2.99-1.744c-.52-.304-.88-.513-1.177-.649-.288-.131-.479-.175-.656-.173-.045 0-.09.003-.134.008l-.051-.497.051.497c-.176.018-.36.084-.633.249-.282.17-.617.421-1.103.785l-.027.02c-.403.303-.745.56-1.04.726-.31.174-.648.297-1.027.23a1.5 1.5 0 01-.246-.066c-.362-.13-.593-.404-.774-.71-.172-.29-.34-.68-.537-1.14l-.013-.03c-.449-1.047-.766-1.785-1.074-2.301-.303-.509-.548-.716-.81-.802a1.504 1.504 0 00-.256-.06c-.273-.038-.585.04-1.081.362-.504.328-1.115.85-1.98 1.59l-2.378 2.04c.03 2.606.197 4.063 1.166 5.031C5.343 21 7.229 21 11 21h2c3.771 0 5.657 0 6.828-1.172.74-.74 1.013-1.763 1.113-3.367z"
          clipRule="evenodd"
        ></path>
        <circle cx="16" cy="8" r="2" fill={ fill2 || "#222" } ></circle>
      </g>
    </svg>
  );
}

// Fluid background animation 
export const WaveAnimation = ({ minHeight, minWidth, positionX, positionY, isStatic }) => {
  // pause/play  animation
  const animationKeyState = isStatic ? "static" : "animated"; // toggle btw static and animated svg states
  const animationDuration = isStatic ? "0s" : "10s"; // animation duration for static and animated states
  // translate object on x-y axes
  const translateX = positionX || 2350;
  const translateY = positionY || 400;

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "var(--color_1)",
        display: "block",
        zIndex: 1,
        position: "absolute",
        top: 0,
        right: 0,
        minHeight: minHeight || "100%",
        minWidth: minWidth || "100%",
      }}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 1500 1125"
    >
      <g
        transform={`translate(${translateX}, ${translateY}) scale(1,-1) translate(-750,-750)`}
      >
        <g transform="scale(100)" opacity={0.9}>
          <path
            d="M5.0925 0 C5.0925 1.6799999999999997 5.011619311659656 2.6357405268728558 3.823679919266256 3.8236799192662554 S1.68 5.0925 3.1182569123289485e-16 5.0925 S-2.6357405268728558 5.011619311659656 -3.8236799192662554 3.823679919266256 S-5.0925 1.6800000000000004 -5.0925 6.236513824657897e-16 S-5.011619311659656 -2.6357405268728558 -3.8236799192662563 -3.8236799192662554 S-1.6800000000000006 -5.0925 -9.354770736986845e-16 -5.0925 S2.635740526872855 -5.011619311659656 3.8236799192662545 -3.8236799192662563 S5.0925 -1.680000000000001 5.0925 -1.2473027649315794e-15"
            fill="#40b08b"
            strokeWidth={0}
          >
            <animateTransform
             attributeName="transform"
             type="rotate"
             dur={ animationDuration || "5s" }
             repeatCount="indefinite"
             values="0;90"
             key={ animationKeyState }
            />
          </path>
        </g>
      </g>
    </svg>
  );
};

// Ocean background animation 
export const OceanAnimation = ({ minHeight, minWidth, isStatic }) => {
  const animationEnd = isStatic ? "0s" : ""; // set the animation end to the same as animation begin (0s) - render it static
  return ( 
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      style={{
        margin: "auto",
        background: "var(--color_1)",
        display: "block",
        zIndex: 1,
        position: "absolute",
        left: 0,
        bottom: 0,
        minHeight: minHeight || "100%",
        minWidth: minWidth || "100%",
      }}
      preserveAspectRatio="xMidYMid"
      viewBox="0 0 1920 1080"
      >
      <g transform="translate(960,540) scale(1,1) translate(-960,-540)">
        <path
          d="M-100 915.42C254.27 926.33 256.63 877.74 606.67 877.74S964.33 868.99 1313.33 868.99S1668.36 923.08 2020 923.08S2379.25 897.22 2726.67 897.22L2020 1080 L-100 1080 Z"
          fill="#399d7c"
          strokeWidth={0}
        >
          <animate
            attributeName="d"
            dur="16s"
            begin="0s"
            end={ animationEnd }
            repeatCount="indefinite"
            values="M-100 915.42C254.27 926.33 256.63 877.74 606.67 877.74S964.33 868.99 1313.33 868.99S1668.36 923.08 2020 923.08S2379.25 897.22 2726.67 897.22L2020 1080 L-100 1080 Z;M-100 930.45C260.69 929.07 256.51 905 606.67 905S962.15 893.59 1313.33 893.59S1667.68 877.74 2020 877.74S2380.39 890.42 2726.67 890.42L2020 1080 L-100 1080 Z;M-100 915.42C254.27 926.33 256.63 877.74 606.67 877.74S964.33 868.99 1313.33 868.99S1668.36 923.08 2020 923.08S2379.25 897.22 2726.67 897.22L2020 1080 L-100 1080 Z"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="16s"
            begin="0s"
            repeatCount="indefinite"
            values="0;10;0"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          />
        </path>
        <path
          d="M-100 953.63C288.15 901.49 292.86 933.28 670.91 933.28S1059.28 954.93 1441.82 954.93S1834.13 972.26 2212.73 972.26L2020 1080 L-100 1080 Z"
          fill="#69b299"
          strokeWidth={0}
        >
          <animate
            attributeName="d"
            dur="12s"
            end={ animationEnd }
            repeatCount="indefinite"
            values="M-100 953.63C288.15 901.49 292.86 933.28 670.91 933.28S1059.28 954.93 1441.82 954.93S1834.13 972.26 2212.73 972.26L2020 1080 L-100 1080 Z;M-100 886.72C286.02 893.22 285.5 937.54 670.91 937.54S1063.83 946.83 1441.82 946.83S1829.81 934.07 2212.73 934.07L2020 1080 L-100 1080 Z;M-100 953.63C288.15 901.49 292.86 933.28 670.91 933.28S1059.28 954.93 1441.82 954.93S1834.13 972.26 2212.73 972.26L2020 1080 L-100 1080 Z"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="12s"
            begin="-3s"
            repeatCount="indefinite"
            values="0;10;0"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          />
        </path>
        <path
          d="M-100 939.23C330.61 950.14 331.14 931.26 748 931.26S1172.01 976.04 1596 976.04S2025.55 1006.11 2444 1006.11L2020 1080 L-100 1080 Z"
          fill="#94c6b6"
          strokeWidth={0}
        >
          <animate
            attributeName="d"
            dur="8s"
            end={ animationEnd }
            repeatCount="indefinite"
            values="M-100 939.23C330.61 950.14 331.14 931.26 748 931.26S1172.01 976.04 1596 976.04S2025.55 1006.11 2444 1006.11L2020 1080 L-100 1080 Z;M-100 966.84C327.56 986.93 329.94 987.88 748 987.88S1177.8 940.36 1596 940.36S2027.09 987.55 2444 987.55L2020 1080 L-100 1080 Z;M-100 939.23C330.61 950.14 331.14 931.26 748 931.26S1172.01 976.04 1596 976.04S2025.55 1006.11 2444 1006.11L2020 1080 L-100 1080 Z"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="8s"
            begin="-4s"
            repeatCount="indefinite"
            values="0;10;0"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          />
        </path>
        <path
          d="M-100 989.36C374.74 915.09 372.97 1015.6 842.22 1015.6S1315.02 957.16 1784.44 957.16S2257.2 999.37 2726.67 999.37L2020 1080 L-100 1080 Z"
          fill="#bedbd2"
          strokeWidth={0}
        >
          <animate
            attributeName="d"
            dur="4s"
            end={ animationEnd }
            repeatCount="indefinite"
            values="M-100 989.36C374.74 915.09 372.97 1015.6 842.22 1015.6S1315.02 957.16 1784.44 957.16S2257.2 999.37 2726.67 999.37L2020 1080 L-100 1080 Z;M-100 1016.05C371.12 994.31 371.77 1031.95 842.22 1031.95S1320.15 990.31 1784.44 990.31S2262.13 919.8 2726.67 919.8L2020 1080 L-100 1080 Z;M-100 989.36C374.74 915.09 372.97 1015.6 842.22 1015.6S1315.02 957.16 1784.44 957.16S2257.2 999.37 2726.67 999.37L2020 1080 L-100 1080 Z"
          />
          <animateTransform
            attributeName="transform"
            type="translate"
            dur="4s"
            begin="-3s"
            repeatCount="indefinite"
            values="0;10;0"
            calcMode="spline"
            keySplines="0.3 0 0.7 1;0.3 0 0.7 1"
          />
        </path>
      </g>
    </svg>
  )
};