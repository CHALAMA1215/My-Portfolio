import React from 'react';
import './About.css';
// You can add a photo to your src/components folder
// import profilePic from './profile-pic.jpg'; 

function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <div className="about-text">
          <h3>Hello!</h3>
          <p>
            "I'm Chalama Reddy , Studying B.Tech in Information Technology at Seshadri Rao Gudlavalleru Engineering College.<br></br>
            </p>
          <p> 
            A IT student with strong driving desire for challenging developer role. Passionate about using real world experience as a Full Stack Intern and demonstrated knowledge in React, Python and database management.<br></br>Looking Forward to be part of innovative projects and develop impact-ful software.
          </p>
        </div>
        {/* Optional: Add a profile picture */}
        {/* <img src={profilePic} alt="Your Name" className="about-image" /> */}

        {/* If you don't have an image, you can delete the <img> tag and 
            uncomment the .about-text { width: 100%; } rule in About.css */}
            
      </div>
    </section>
  );
}

export default About;