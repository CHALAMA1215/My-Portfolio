import React from 'react';
import './Projects.css';

// Project 1 Images
import project1Main from '../assets/admin.jpg';
import project1Detail1 from '../assets/passenger.jpg';
import project1Detail2 from '../assets/driver.jpg';

// Project 3 Images (We skip 2 to match your Music Genre Classification images)
import project3Main from '../assets/project3-main.png';
import project3Detail1 from '../assets/project3-detail1.png';
import project3Detail2 from '../assets/project3-detail2.png';

const projectsData = [
  {
    title: "Campus Cruiser: Live Campus Transit System",
    mainImage: project1Main,
    detailImage1: project1Detail1,
    detailImage2: project1Detail2,
    description: "Architected a high-fidelity, cross-platform transit tracking ecosystem to eliminate hardware tracking costs. Engineered a serverless backend using Google Firebase Firestore, establishing persistent WebSocket connections for sub-second, real-time GPS telemetry synchronization. Developed a dynamic ETA prediction engine and implemented robust security with RBAC.",
    techStack: "Flutter, React.js, Firebase Firestore, WebSockets",
    repoLink: "#",
  },
  {
    title: "Music Genre Classification",
    mainImage: project3Main,
    detailImage1: project3Detail1,
    detailImage2: project3Detail2,
    description: "Developed a machine learning sound classification pipeline entirely in Python utilizing the GTZAN dataset with Standardization and PCA. Designed song-based grouping leveraging Python data structures to prevent data leakage. Compared Naive Bayes, Decision Tree, and SVM algorithms, achieving 82.38% accuracy with SVM.",
    techStack: "Python, Scikit-learn, GTZAN Dataset",
    repoLink: "https://github.com/CHALAMA1215/Music-Genre-Classification",
  }
];

function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="projects-section-title">Projects</h2>
      <div className="projects-grid-container">
        {projectsData.map((project, index) => (
          <div className="project-layout-item" key={index}>
            {index % 2 === 0 ? (
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