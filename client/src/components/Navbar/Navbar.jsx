import React from 'react'
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div className='Logo'>
      <p className = "logo-name" >Alex Melendez</p>
      </div>
      <div className='menu'>
        <p className='menu-home'>home</p>
        <p className='menu-about'>about</p>
        <p className='menu-projects'>projects</p>
      </div>
      </div>
  )
}

export default Navbar