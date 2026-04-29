import React from 'react';
import './Education.css';
// Import your education images
import educationPic1 from '../assets/education-pic-1.png'; // <-- Update with your image names
import educationPic2 from '../assets/education-pic-2.png'; // <-- Update with your image names

const educationData = [
  {
    degree: "Bachelor of Technology, Information Technology",
    university: "Seshadri Rao Gudlavalleru Engineering College",
    dates: "Aug 2022 - May 2026",
    cgpa: "8.80 / 10.0", 
    description: "Pursuing a Bachelor's degree in Information Technology with a focus on software development and data science.",
    courses: [
      "Data Structures & Algorithms",
      "Web Development",
      "Database Management Systems",
      "Machine Learning"
    ]
  },
  {
    degree: "Intermediate",
    university: "Jawahar Navodaya Vidyalaya",
    dates: "2020 - 2022",
    cgpa: "9.10 / 10.0",
    description: "Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry.",
    courses: [
        "MPC"
    ] 
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
                    <strong>CGPA:</strong> {item.cgpa}
                  </p>
                )}
                <p className="education-description">{item.description}</p> {/* Added description */}
                {item.courses.length > 0 && (
                  <div className="education-courses">
                    <h4>Relevant Coursework:</h4>
                    <ul>
                      {item.courses.map((course, idx) => (
                        <li key={idx}>{course}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="education-right">
          <div className="shape-dots-top-right"></div> {/* Top right dots */}
          <div className="shape-orange-circle-large"></div> {/* Large orange circle */}
          <img src={educationPic1} alt="Education 1" className="education-image-1" />
          <img src={educationPic2} alt="Education 2" className="education-image-2" />
        </div>
      </div>
    </section>
  );
}

export default Education;