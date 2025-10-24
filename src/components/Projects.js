import React from 'react';
import './Projects.css';

// --- Import ALL project images ---
// Project 1 Images
import project1Main from '../assets/project1-main.png';
import project1Detail1 from '../assets/project1-detail1.png';
import project1Detail2 from '../assets/project1-detail2.png';

// Project 2 Images (create these files!)
import project2Main from '../assets/project2-main.png';
import project2Detail1 from '../assets/project2-detail1.png';
import project2Detail2 from '../assets/project2-detail2.png';

// Project 3 Images (create these files!)
import project3Main from '../assets/project3-main.png';
import project3Detail1 from '../assets/project3-detail1.png';
import project3Detail2 from '../assets/project3-detail2.png';


// --- YOUR PROJECT DATA (UPDATED) ---
const projectsData = [
  {
  title: "Automated Gmail Sorter",
    mainImage: project1Main,
    detailImage1: project1Detail1,
    detailImage2: project1Detail2, // <-- Use a relevant image you import
  description: "A Python automation script that uses the Gmail API to securely classify unread emails by content, automatically labeling and archiving them to keep your inbox clean.",
  techStack: "Python, Google API Client, OAuth 2.0, Pandas",
  liveLink: null, // (This project is a backend script, so it has no live demo)
  repoLink: "https://github.com/CHALAMA1215/Simple-Gmail-Sorter",
},
  {
    title: "Connecting-Gudlavalleru",
    mainImage: project2Main,
    detailImage1: project2Detail1,
    detailImage2: project2Detail2,
    description: "A simple and responsive web application that allows residents to book and rate the community services available in Gudlavalleru.",
    techStack: "HTML, CSS,APACHE, PHP, SQl",
    liveLink: null,
  repoLink: "https://github.com/CHALAMA1215/Connecting-Gudlavalleru",
  },
  {
    title: "Music Genre Classification",
    mainImage: project3Main,
    detailImage1: project3Detail1,
    detailImage2: project3Detail2,
    description: "Developed and compared a suite of machine learning models (Naive Bayes, Decision Tree, SVM) to classify music into 10 genres using the GTZAN dataset.",
    techStack: "Python, Scikit-learn, Librosa, Pandas",
    liveLink: "#",
    repoLink: "https://github.com/CHALAMA1215/Music-Genre-Classification",
  }
];

// --- The Component ---
function Projects() {
  return (
    
    <section id="projects" className="projects-section">
      <h2 className="projects-section-title">Projects</h2>
      <div className="projects-grid-container">
        {projectsData.map((project, index) => (
          <div className="project-layout-item" key={index}>
            {/* Background shapes (optional, can be in CSS too) */}
            {index % 2 === 0 ? ( // Alternate shapes for visual interest
                <>
                    <div className="project-shape-circle-orange"></div>
                    <div className="project-shape-dots-faint"></div>
                </>
            ) : (
                <>
                    <div className="project-shape-curve-faint"></div>
                    <div className="project-shape-small-circle-faint"></div>
                </>
            )}

            <div className="project-content-wrapper">
                <div className="project-images-column">
                    <img src={project.mainImage} alt={`${project.title} Main`} className="project-main-image" />
                    <div className="project-detail-images">
                        <img src={project.detailImage1} alt={`${project.title} Detail 1`} className="project-detail-image detail-1" />
                        <img src={project.detailImage2} alt={`${project.title} Detail 2`} className="project-detail-image detail-2" />
                    </div>
                </div>

                <div className="project-details-column">
                    <h2 className="project-card-title">{project.title}</h2>
                    <p className="project-card-description">{project.description}</p>
                    <p className="project-card-tech"><strong>Technologies:</strong> {project.techStack}</p>
                    <div className="project-card-links">
                        <a href={project.repoLink} target="_blank" rel="noopener noreferrer">Source Code</a>
                    </div>
                </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;