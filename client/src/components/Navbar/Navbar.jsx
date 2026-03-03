import React from 'react'
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className='nav-wrapper'>
      <div className='logo'>
      <p className = "logo-name" >Alex Melendez</p>
      </div>
      <div className='menu'>
        <a href="#home" className="menu-item">home</a>
        <a href="#about" className="menu-item">about</a>
        <a href="#projects" className="menu-item">projects</a>
      </div>
      </div>
  )
}

export default Navbar