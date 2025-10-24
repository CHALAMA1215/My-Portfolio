import React from 'react';
import './Home.css';
// 1. Import your profile picture
import profilePic from '../assets/profile-pic.png'; // <-- Correct path 
function Home() {
  return (
    // 2. Add 'home-container' for positioning
    <section id="home" className="home-container">
      
      {/* 3. These are the decorative background shapes */}
      <div className="shape-circle-orange"></div>
      <div className="shape-curve-faint"></div>

      {/* 4. A wrapper to hold your content */}
      <div className="home-content">
        <div className="home-text">
          <h1 className="home-title">Hello,</h1> {/* Changed from PORTFOLIO */}
          <p className="home-name">I'm Chalama Reddy</p>
          <p className="home-headline">STUDENT & WEB DEVELOPEMENT ENTHUSIAST</p>
          <div className="home-socials">
            <a href="https://github.com/CHALAMA1215" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="https://www.linkedin.com/in/chalama-reddy-27a1b02a4" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
        
        {/* 5. The container for your profile picture */}
        <div className="home-image-wrapper">
          <img src={profilePic} alt="chalama reddy" className="profile-pic" />
        </div>
      </div>
    </section>
  );
}

export default Home;