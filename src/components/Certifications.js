import React from 'react';
import './Certifications.css';

const certifications = [
  {
    name: 'Programming in Python',
    issuer: 'Meta',
    date: 'Mar 2023',

    link: 'https://www.coursera.org/learn/python-basics',
  },
  {
    name: 'Introduction to Data Analysis',
    issuer: 'IBM',
    date: 'Mar 2023',

    link: 'https://www.coursera.org/learn/data-analysis-with-python',
  },
]

function Certifications() {
  return (
    <section className="section">
      <div className="section-label">Certifications</div>
      <div className="cert-row">
        {certifications.map((cert, i) => (
          <a
            className="cert-card"
            key={i}
            href={cert.link}
            target="_blank"
            rel="noreferrer"
          >
            <div className="cert-name">{cert.name}</div>
            <div className="cert-issuer">{cert.issuer}</div>
            <div className="cert-date">
              {cert.date} · <span className="cert-link-text">View certificate ↗</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default Certifications;
