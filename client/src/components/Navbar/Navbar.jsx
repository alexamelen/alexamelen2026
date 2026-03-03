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
        <Link to="/" className="menu-item">home</Link>
        <Link to="/about" className="menu-item">about</Link>
        <Link to="/projects" className="menu-item">projects</Link>
      </div>
      </div>
  )
}

export default Navbar