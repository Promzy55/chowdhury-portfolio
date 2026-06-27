import React from 'react';
import './Projects.css';

const projects = [
  {
    name: 'Student Performance Prediction',
    period: 'Dec 2023 – Feb 2024',
    
    link: 'https://github.com/Chowdhury22',
    description: 'ML model to predict student outcomes using academic and demographic features.',
    tech: ['Python', 'Scikit-Learn', 'Pandas', 'Matplotlib'],
  },
];

function Projects() {
  return (
    <section className="section">
      <div className="section-label">Projects</div>
      {projects.map((project, i) => (
        <a
          className="project-card"
          key={i}
          href={project.link}
          target="_blank"
          rel="noreferrer"
        >
          <div className="card-header">
            <div className="card-title">{project.name}</div>
            <span className="date-badge">{project.period}</span>
          </div>
          <p style={{ fontSize: '13px', color: '#9d9b95', marginTop: '6px', lineHeight: 1.6 }}>
            {project.description}
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginTop: '0.6rem' }}>
            {project.tech.map((t, j) => (
              <span className="tag" key={j}>{t}</span>
            ))}
          </div>
          <div className="project-link-hint">
            <i className="ti ti-external-link" style={{ fontSize: '13px', color: '#534ab7' }} aria-hidden="true" />
            View on GitHub ↗
          </div>
        </a>
      ))}
    </section>
  );
}

export default Projects;
