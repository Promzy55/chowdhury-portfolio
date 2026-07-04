import React from 'react';
import './Skills.css';

const skillGroups = [
  { title: 'Languages', skills: ['JavaScript (ES6+)', 'Python', 'PHP', 'Dart', 'SQL', 'HTML5', 'CSS3'] },
  { title: 'Frontend', skills: ['React', 'Redux', 'Tailwind CSS', 'Blade'] },
  { title: 'Mobile', skills: ['Flutter'] },
  { title: 'Backend', skills: ['PHP Fundamentals', 'RESTful APIs', 'Laravel (intermediate)'] },
  { title: 'Tools & Version Control', skills: ['Git', 'GitHub', 'Postman', 'Composer', 'NPM'], wide: true },
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