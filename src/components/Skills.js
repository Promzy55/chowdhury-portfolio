import React from 'react';
import './Skills.css';

const skillGroups = [
  {
    title: 'Languages',
    skills: ['Python', 'SQL', 'Java'],
  },
  {
    title: 'Frameworks',
    skills: ['Pandas', 'NumPy', 'Scikit-Learn', 'Matplotlib'],
  },
  {
    title: 'Tools',
    skills: ['Power BI', 'Tableau', 'MySQL', 'SQLite', 'Excel', 'PowerPoint'],
  },
  {
    title: 'Platforms',
    skills: ['Jupyter Notebook', 'VS Code', 'PyCharm', 'IntelliJ IDEA'],
  },
  {
    title: 'Soft Skills',
    skills: ['Rapport Building', 'Stakeholder Management', 'People Management', 'Communication'],
    wide: true,
  },
];

function Skills() {
  return (
    <section className="section">
      <div className="section-label">Skills</div>
      <div className="skills-grid">
        {skillGroups.map((group, i) => (
          <div className={`skill-group${group.wide ? ' skill-group--wide' : ''}`} key={i}>
            <div className="skill-group-title">{group.title}</div>
            <div className="skill-tags">
              {group.skills.map((skill, j) => (
                <span className="tag" key={j}>{skill}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
