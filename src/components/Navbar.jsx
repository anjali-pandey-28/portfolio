import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <a href="#home">Anjali<span>.</span></a>
        </div>

        <input type="checkbox" id="nav-toggle" className="nav-toggle" />
        
       
        <label htmlFor="nav-toggle" className="nav-toggle-label">
          <span></span>
        </label>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Work</a></li>
          <li><a href="#socials">Socials</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;