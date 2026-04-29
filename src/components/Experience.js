import React from 'react';
         import './Experience.css';

         function Experience() {
           return (
             <section id="experience" className="experience-section">
               <h2>Work Experience</h2>
               <div className="experience-container">
                 <div className="experience-item">
                   <h3>Trainee Software Engineer (Backend Developer)</h3>
                   <p className="experience-company">FinMarket (Crowdnetic Technologies)</p>
                   <p className="experience-dates">Feb 2026 - Present</p>
                   <ul className="experience-description">
                     <li>Developed and integrated scalable RESTful APIs utilizing Spring, Spring Boot, Groovy, and Grails.</li>
                     <li>Leveraged cloud infrastructure by deploying and managing application services on Azure.</li>
                     <li>Implemented high-performance data storage and caching solutions using MongoDB, Redis, and Elastic Search to optimize backend responsiveness and search capabilities.</li>
                   </ul>
                 </div>
               </div>
             </section>
           );
         }

         export default Experience;