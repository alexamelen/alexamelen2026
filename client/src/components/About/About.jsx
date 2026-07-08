import React from 'react';
import "./About.css";
import { Me2 } from '../..';

const About = () => {
  return (
    <section id='about' className='about-section'>
        <div className='abt-wrapper'>
          <div className='about-title'>
            <h1 className='abt-me-title'>About Me</h1>
          </div>
          <div className='about-hero'>
            <div className='about-hero-text'>
              <h3 className='location'>📍HOUSTON, TEXAS</h3>
              <p className='abt-text'>I am a first-generation Latina and Computer Science student at the University of Houston with a passion for technology, education, and creativity. I am interested in frontend web development and instructional design, and I enjoy creating engaging, user centered learning experiences. Through teaching coding and STEM, I discovered a passion for inspiring the next generation and helping young learners explore the many opportunities in technology. In my free time, I love attending concerts and watching reality TV!</p>
            </div>
            <img src={Me2} alt="Photo of Alex Melendez #2" />
          </div>
        </div>
    </section>
  )
}

export default About