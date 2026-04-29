import React from 'react';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="nav-logo">Chalama Reddy Annapa Reddy</a>
      <ul className="nav-list">
        <li className="nav-item"><a href="#about">About</a></li>
        <li className="nav-item"><a href="#education">Education</a></li>
        <li className="nav-item"><a href="#skills">Skills</a></li>
        <li className="nav-item"><a href="#projects">Projects</a></li>
        <li className="nav-item"><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;