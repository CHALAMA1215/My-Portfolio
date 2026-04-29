import React from 'react';
import './Education.css';
import educationPic1 from '../assets/education-pic-1.png';
import educationPic2 from '../assets/education-pic-2.png';

const educationData = [
  {
    degree: "Bachelor of Technology, Information Technology",
    university: "Seshadri Rao Gudlavalleru Engineering College",
    dates: "Oct 2022 - Present",
    cgpa: "8.78 CGPA",
    description: "Pursuing a Bachelor's degree in Information Technology with a focus on software development and data science.",
    courses: []
  },
  {
    degree: "Senior Secondary (MPC)",
    university: "Jawahar Navodaya Vidyalaya, Krishna",
    dates: "May 2021 - July 2022",
    cgpa: "86%",
    description: "Completed Senior Secondary education with a focus on Mathematics, Physics, and Chemistry.",
    courses: []
  }
];

function Education() {
  return (
    <section id="education" className="education-section">
      <div className="education-content-wrapper">
        <div className="education-left">
          <h2>Education</h2>
          <div className="education-timeline">
            {educationData.map((item, index) => (
              <div className="education-item" key={index}>
                <h3>{item.degree}</h3>
                <p className="education-university">{item.university}</p>
                <p className="education-dates">{item.dates}</p>
                {item.cgpa && (
                  <p className="education-cgpa">
                    <strong>Score:</strong> {item.cgpa}
                  </p>
                )}
                <p className="education-description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="education-right">
          <div className="shape-dots-top-right"></div>
          <div className="shape-orange-circle-large"></div>
          <img src={educationPic1} alt="Education 1" className="education-image-1" />
          <img src={educationPic2} alt="Education 2" className="education-image-2" />
        </div>
      </div>
    </section>
  );
}

export default Education;