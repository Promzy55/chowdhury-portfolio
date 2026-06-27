import React from 'react';

const experience = [
  {
    role: 'Business Analyst Intern',
    company: 'WS',

    link: 'https://www.linkedin.com/company/ws',
    period: 'Jan 2024 – Mar 2024',
    stats: [
      '↓20% processing time',
      '↑15% productivity',
      '3+ cross-functional teams',
    ],
    bullets: [
      'Streamlined data collection and reporting procedures, reducing processing time by 20% and enhancing efficiency.',
      'Implemented process improvements and automation solutions, resulting in 15% increase in productivity.',
      'Collaborated with 3+ cross-functional teams to gather requirements, define project scopes, and ensure alignment with business objectives.',
    ],
  },
]

function StatBadge({ text }) {
  return (
    <span
      style={{
        fontSize: '12px',
        color: '#1d9e75',
        background: 'rgba(4,52,44,0.2)',
        border: '0.5px solid #0f6e56',
        borderRadius: '6px',
        padding: '2px 9px',
      }}
    >
      {text}
    </span>
  );
}

function Experience() {
  return (
    <section className="section">
      <div className="section-label">Experience</div>
      {experience.map((job, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <div>
              <div className="card-title">{job.role}</div>
              <div className="card-sub">{job.company}</div>
            </div>
            <span className="date-badge">{job.period}</span>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: '0.6rem' }}>
            {job.stats.map((s, j) => (
              <StatBadge key={j} text={s} />
            ))}
          </div>

          <ul className="bullet-list">
            {job.bullets.map((b, j) => (
              <li key={j}>{b}</li>
            ))}
          </ul>

          <a className="link-pill" href={job.link} target="_blank" rel="noreferrer">
            <i className="ti ti-external-link" style={{ fontSize: '12px' }} aria-hidden="true" />
            View role
          </a>
        </div>
      ))}
    </section>
  );
}

export default Experience;
