import React from 'react';
import './Projects.css';
import uiImg from './ui.png';
import aImg from './a.png';
import tImg from './t.png';
import cImg from './c.png';
import sImg from './SS.png';
import bImg from './bloglySS.jpg'


const projectsData = [
   {
    id: "project-5",
    title: "Scam-Sense",
    description: "Identify and report online scams with Scam Sense. Learn cyber safety, fraud prevention, and protect yourself from digital fraud",
    skills: ["NEXTJS", "TAILWIND", "TYPESCRIPT"],
    img: sImg,
    gitLink: "https://github.com/anjali-pandey-28/Scam-Sense"
  },
    {
    id: "project-6",
    title: "BlogLy",
    description: "Blogly is a full-stack blog platform built for seamless content creation and management.",
    skills: ["TYPESCRIPT", "NODEJS", "REACT"],
    img: bImg,
    gitLink: "https://github.com/anjali-pandey-28/blogLy-frontend"
  },
  {
    id: "project-2",
    title: "Ui Forge",
    description: "A modern looking, responsive web page built for high performance.",
    skills: ["React", "CSS", "JAVASCRIPT"],
    img: uiImg, 
    gitLink: "https://github.com/anjali-pandey-28/UIForge"
  },
   {
    id: "project-3",
    title: "Cophino",
    description: "A beutiful, responsive landing webpage of a coffee website",
    skills: ["JAVASCRIPT", "CSS", "HTML"],
    img: cImg,
    gitLink: "https://github.com/anjali-pandey-28/"
  },
  {
    id: "project-4",
    title: "Tic Tac Toe",
    description: "A game build using HTML , CSS , and Javascript",
    skills: ["JAVASCRIPT", "CSS", "HTML"],
    img: tImg,
    gitLink: "https://github.com/anjali-pandey-28/Tic-Tac-Toe"
  },
    {
    id: "project-1",
    title: "Amazon Clone",
    description: "Amazon Clone - A simple Amazon Clone built using HTML and CSS. This project replicates the front-end design of the Amazon website,",
    skills: ["HTML", "CSS"],
    img: aImg,
    gitLink: "https://github.com/anjali-pandey-28/amazon-clone"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Lookbook</h2>
      <div className="projects-grid">
        {projectsData.map((project) => (
          <React.Fragment key={project.id}>
            
    
            <a href={`#${project.id}`} className="project-card">
              <div className="card-header">
                <div className="tags">
                  {project.skills.map(skill => <span key={skill} className="skill-tag">{skill}</span>)}
                </div>
                <span className="arrow-link">↗</span>
              </div>
              <h3 className="project-title">{project.title}</h3>
              <p className="project-desc">{project.description}</p>
            </a>

            
            <div id={project.id} className="modal-overlay">
              <div className="modal-content">
                
                <a href="#projects" className="close-btn">&times;</a>
                
                <div className="modal-scroll-area">
                  <img src={project.img} alt={project.title} className="modal-img" />
                </div>

                <a href={project.gitLink} target="_blank" rel="noopener noreferrer" className="git-btn">
                  View GitHub
                </a>
              </div>
            </div>

          </React.Fragment>
        ))}
      </div>
    </section>
  );
}