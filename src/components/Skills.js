import React from 'react';
import './Skills.css';

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="skill-category">
          <h3>LANGUAGES</h3>
          <ul>
            <li>Python, Java, Groovy</li>
            <li>Dart, JavaScript, C</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>CLOUD & BACKEND</h3>
          <ul>
            <li>Azure, Spring Boot, Grails</li>
            <li>Node.js, Express.js</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>DATABASES</h3>
          <ul>
            <li>MongoDB, MySQL</li>
            <li>Elastic Search, Redis</li>
            <li>Firebase (Firestore)</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>FRONTEND & MOBILE</h3>
          <ul>
            <li>ReactJS, HTML, CSS</li>
            <li>Flutter</li>
          </ul>
        </div> 
      </div>
    </section>
  );
}

export default Skills;