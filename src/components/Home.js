import React from 'react';
import './Home.css';
import profilePic from '../assets/profile-pic.png';

function Home() {
  return (
    <section id="home" className="home-container">
      <div className="shape-circle-orange"></div>
      <div className="shape-curve-faint"></div>

      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Hello,</h1>
          <p className="home-name">I'm Chalama Reddy</p>
          <p className="home-headline">TRAINEE SOFTWARE ENGINEER @ FINMARKET</p>
          <div className="home-socials">
            <a href="https://github.com/CHALAMA1215" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/chalama-reddy-27a1b02a4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>

        <div className="home-image-wrapper">
          <img src={profilePic} alt="chalama reddy" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}

export default Home;