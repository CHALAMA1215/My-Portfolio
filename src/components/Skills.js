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
            <li>Python</li>
            <li>Java</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>DEVELOPMENT</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>React</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>TOOLS</h3>
          <ul>
            <li>GitHub</li>
            <li>VS Code</li>
          </ul>
        </div>
        <div className="skill-category">
          <h3>SOFT SKILLS</h3>
          <ul>
            <li>Communication</li>
            <li>Teamwork</li>
          </ul>
        </div> 
      </div>
    </section>
  );
}

export default Skills;