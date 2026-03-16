import React from 'react'
import "./Projects.css";
import {Book, User, CornerArrow} from '../..'

const Projects = () => {
  return (
    <section id='projects' className='projects-section'>
      <div className='projects-wrapper'>
          <div className='projects-title'>
            <h1 className='prj-title'>Projects</h1>
          </div>
          <div className='proj-hero'>
            <div className='proj-content'>
              <div className='db-proj'>
                <h2 className='db-title'>LBRY Database</h2>
                <img src={Book} alt="open book" className='proj-icon'/>
                <p className='project-description'>
                A full-stack library web application that allows users to browse/checkout items.
                </p>
                <a href="https://library-project-iota.vercel.app/" 
                className='view-proj-link' target="_blank"
                rel="noopener noreferrer"
                aria-label="LBRY Database project">View Project</a>
              </div>
              <div className='volunteer-proj'>
                <h2 className='volunteer-title'>Volunteer Website</h2>
                <img src={User} alt="user icon" className='proj-icon' />
                <p className='project-description'>
                A full-stack volunteer web application that allows users to browse/signup for events.
                </p>
                <a href="https://github.com/alexamelen/Volunteering_WebApp" 
                className='view-proj-link'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Volunteer Website Project">View Project</a>
              </div>
              <div className='bez-proj'>
                <h2 className='bez-title'>Vector Field Synthesis</h2>
                <img src={CornerArrow} alt="arrow"  className='proj-icon'/>
                <p className='bez-proj-description'>
                An interface for users to specify and modify  geometric and physical constraints for vector field synthesis
                </p>
                <a href="https://github.com/alexamelen/CAHSI" 
                className='view-proj-link'
                target="_blank"
                rel="noopener noreferrer"
                aria-label="CAHSI Project">View Project</a>
              </div>
            </div>
            <div className='stay-tuned'>
              <p className='more-to-come'>More to come!</p>
            </div>
          </div>

        </ div>
    </section>
  )
}

export default Projects