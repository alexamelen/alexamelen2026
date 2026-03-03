import React from 'react';
import "./About.css";
import { Me2 } from '../..';

const About = () => {
  return (
    <section id='about'>
      <header>
        <div className='abt-wrapper'>
          <div className='about-title'>
            <h1 className='abt-me-title'>About Me</h1>
          </div>
          <div className='about-hero'>
            <div className='about-hero-text'>
              <h3 className='location'>📍HOUSTON, TEXAS</h3>
              <p className='abt-text'>I am currently a first generation latina student at the University of Houston majoring in CS. I am an aspiring SWE with an interest in frontend web development. I am passionate about educating the youth in my community about the different ways they can get involved in STEM. In my free time I love attending concerts and watching reality TV!</p>
            </div>
            <img src={Me2} alt="Photo of Alex Melendez #2" />
          </div>
        </div>
      </header>
    </section>
  )
}

export default About