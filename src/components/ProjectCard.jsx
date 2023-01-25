import React from 'react'
import './ProjectCard.css'
import { GithubIcon, MenuCloseIcon, InformationIcon } from './SVGComponents'

export default function ProjectCard({ data, toggle, setToggle }) {
  const {id, githubRepositoryLink, websiteLink, thumbnail, title, info } = data;
  
  //toggle card info and toggle card github repo link handler 
  const toggleCardHandler = (id, mode) => {
    if(!id) return;
    setToggle(prev => {
      const copied = {...prev};
      let updated = {};
      //find if toggle obj contains the passed id
      const findCurrentCardID = Object.keys(copied)
      .find(elem => elem === id.toString());
      let currentCard = {};
      //set toggleInfo
      if(mode === 'info') {
        currentCard = { ...prev[id] };
        if(findCurrentCardID) {  // if id found: - toggle value
          //OK - update with new data
          currentCard.toggledInfo = !currentCard.toggledInfo;
          updated = { ...copied, [id]: { toggledInfo: !prev[id].toggledInfo, toggledRepoLinks: false } };
        } else if(!findCurrentCardID) {  // if no id: - add toggledInfo: true
          updated = { ...copied, [id]: { toggledInfo: true, toggledRepoLinks: false } }
        }
      } 
      //set toggleRepoLinks
      else if(mode === 'github') {
        currentCard = { ...prev[id] };
        if(findCurrentCardID) { 
          currentCard.toggledRepoLinks = !currentCard.toggledRepoLinks;
          updated = { ...copied, [id]: { toggledInfo: false, toggledRepoLinks: !prev[id].toggledRepoLinks } };
        } else if(!findCurrentCardID) {  // if no id: - add toggledInfo: true
          updated = { ...copied, [id]: { toggledInfo: true } }
        }
      }
      return updated;
    })
  } 
  
  return (
    <div className='project_card-container'>
      <div className='project_card-header'> 
        { githubRepositoryLink.length > 1 ?
          <div 
            className='project_card-header-icon' 
            onClick={() => {toggleCardHandler(id, 'github')}}
          > 
            <GithubIcon 
              width={ 30 } 
              height={ 30 } 
              stroke={ 'var(--color_1)' }
              strokeWidth={ '1.5' }
            />
          </div>
            :
        <a 
          className='project_card-header-icon' 
          href={ githubRepositoryLink } 
          target="_blank"
          rel="noopener noreferrer"
        >
          <GithubIcon 
            width={ 30 } 
            height={ 30 } 
            stroke={ 'var(--color_1)' }
            strokeWidth={ '1.5' }
          />
        </a> }
        {/* header title */}
        <h3 id='project_card-title'> { title } </h3>
        {/* header icon: info */}
        <div 
          className='project_card-header-icon' 
          onClick={() => toggleCardHandler(id, 'info')}
        > 
        {/* if github repo link.length > 1 display icon + toggle, else display anchor tag, navigate to page */}
          { toggle[id]?.toggledInfo ? 
            <MenuCloseIcon 
              height={ 25 } 
              width={ 25 } 
              stroke={ 'var(--color_1)' }
            />
            :
            <InformationIcon 
              height={ 35 } 
              width={ 35 } 
              stroke={ 'var(--color_1)' }
            />
          }
        </div>
      </div>
      <div className='project_card-content'>
        {/* toggle github repo links */}
        {/* double links (separate repos for both client and serverside) */}
        { toggle[id]?.toggledRepoLinks ?  
          <div className='project_card-github-repo-links'>
            { githubRepositoryLink.map(link => (
              <a 
                key={ link.id }
                href={ link.link } 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => {toggleCardHandler(id, 'github')}}
            > {link.title} 
            </a>
            )) }
          </div> 
          : null }
        {/* toggle info / thumbnail */}
        { toggle[id]?.toggledInfo ?   
        //info
        <div className='project_card-info'>
          { info.map(info => (
            <div className='project_card-info project_card-info-title' key={ info.id }>
              <span> { info.title } </span>
              <p> { info.text } </p>
            </div>
          )) }
        </div> 
        :
        //tubmnail image
        <div className='project_card-thumbnail'>
         { !thumbnail ? 
           <p> No Preview</p>
           :
           <img src={ thumbnail } alt={ 'project thumbnail' }/>
         }
        </div> 
        } 
      </div> 
      <div className='project_card-button'>
      { websiteLink ? 
        <a
          href={ websiteLink }
          target="_blank"
          rel="noopener noreferrer"
          disabled={ true }
        > 
          <p> Visit Webpage </p>
        </a> 
        : 
        <div className='project_card-buton--disabled'>
          Not Hosted
        </div> }
      </div>
    </div>
  )
}