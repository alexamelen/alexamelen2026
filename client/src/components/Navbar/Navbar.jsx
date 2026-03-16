import React from 'react'
import './Navbar.css'

const Navbar = () => {

  return (
    <div className="nav-wrapper">
  <div className="logo">
    <p className="logo-name">Alex Melendez</p>
  </div>

  <div className="hamburger">
    ☰
  </div>

  <div className="menu">
    <a href="#home" className="menu-item">home</a>
    <a href="#about" className="menu-item">about</a>
    <a href="#projects" className="menu-item">projects</a>
  </div>
</div>
  )
}

export default Navbar;