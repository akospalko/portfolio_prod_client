import React from 'react'
import './About.css'
import './Shared.css'
import Anchor from './Anchor';
import { aboutSkills } from '../helper/dataControl'

export default function About({ pageLayout }) {
    //conditional render height of the page based on if it is displayed as a single component vs together with other components
    let componentContainer = 'shared-page-container';
    pageLayout === 'fullContentPage' ?  
    componentContainer = ['shared-page-container','shared-page-container--minheight'].join(' ')
    : null;  
  
  return (
    <article className={ componentContainer }>
      {/* anchor tag for full content page */}
      { pageLayout === 'fullContentPage' ? <Anchor componentName='about' /> : null }
      <div className='about-content'>
        {/* Page title */}
        <div className='shared-title'>
          <h1> About </h1>
        </div>
        {/* page section 1 */}
        <section className='about-section background'>
          <h2> Background </h2>
          <p> 
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas. Nunc sit amet efficitur diam. Sed ut ullamcorper purus. Vivamus dapibus iaculis lectus. Vivamus non nunc in nulla lacinia placerat. Nam at ultrices sapien. Vestibulum rhoncus vitae purus quis mattis. Nulla elementum efficitur massa in rutrum. In ac est vel lorem placerat accumsan eget eu turpis. Nulla laoreet nisi vel dapibus eleifend.
            Fusce congue, enim vitae tincidunt iaculis, arcu mauris gravida purus, id cursus est nibh id urna. Sed vehicula urna odio, sit amet condimentum justo congue non. Curabitur tincidunt est id tristique condimentum. Praesent vel ante at tellus commodo tempus ut id risus. In sagittis, neque eu laoreet dignissim, elit massa suscipit elit, vel consequat tellus nunc non nulla. Proin ut arcu leo. Nam tempus metus vitae neque aliquet, a tempor leo cursus.
          </p>
        </section>
        {/* page section 2 */}
        <section className='about-section skillset'>
          <h2> Skillset </h2>
          <div className='about-section-content'>
            { aboutSkills.map((elem) => (
              //groups 
              <div key={ elem.id } id={ elem.id } className='about-section-group'>
                <div className='about-section-group-flex-wrapper'> 
                  <div className='about-section-group-header'>
                    <img src={ elem.icon } alt={ elem.iconAlt }/>
                    <h3> { elem.title } </h3>
                  </div>
                  { elem.content.map((content) => {  
                    return <div key={ content.id } className='about-section-group-content'>
                      <span> { content.title } </span> 
                      <p> { content.text } </p> 
                    </div>
                  })}
                </div>
              </div> 
            ))}
          </div>
        </section>
        {/* page section 3 */}
        <section className='about-section hobbies'> 
          <h2> Hobbies and interests </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse nec sapien maximus ante scelerisque egestas. Nunc sit amet efficitur diam. Sed ut ullamcorper purus. Vivamus dapibus iaculis lectus. Vivamus non nunc in nulla lacinia placerat. Nam at ultrices sapien. Vestibulum rhoncus vitae purus quis mattis. Nulla elementum efficitur massa in rutrum. In ac est vel lorem placerat accumsan eget eu turpis. Nulla laoreet nisi vel dapibus eleifend.
          </p>
        </section>
      </div>
    </article>
  )
}