import React from 'react'
import "./Landing.css";
import { LinkedIn, Github , Me1, Resume} from '../..';
import Navbar from '../Navbar/Navbar';

const Landing = () => {
  return (
    <section id='home'>
    <header>
      <div className='wrapper'>
      <Navbar />
      <div className = "hero">
        <div className='miffy-and-me'>
          <img src={Me1} alt="Photo of Alex Melendez" />
        </div>

        <div className = "hero-text">
        <p className = "greeting" >Hello, I'm</p>
        <h1 className = "name">Alex Melendez</h1>
        <h2 className = "title">Software Engineer</h2>

        <div className = "hero-btns">
          <a href={Resume} target="_blank" rel="noopener noreferrer" className='resume-btn'> Resume</a>
          <a href="mailto:alexamelen.03@gmail.com" className="contact-btn"> Contact Me!</a>
        </div>

        <div className = 'social-btns'> 
          <a
            href="https://www.linkedin.com/in/alexamelen"
            className="linkedin-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <img src={LinkedIn} alt="" />
          </a>
          <a
            href="https://github.com/alexamelen"
            className="github-btn"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Github profile"
          >
            <img src={Github} alt="" />
          </a>
        </div>
        </div>
      </div>
      </div>
    </header>
    </section>
  )
}

export default Landing