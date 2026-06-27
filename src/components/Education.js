import React from 'react';

const education = [
  {
    institution: 'Vellore Institute of Technology',
    location: 'Bhopal, India',
    degree: 'Master of Computer Application',
    gpa: '8.06',
    period: 'Jun 2022 – Aug 2024',
  },
  {
    institution: 'Barasaat Govt. College',
    location: 'Kolkata, India',
    degree: 'B.Sc. (Hons) Mathematics',
    gpa: '8.70',
    period: 'Jun 2018 – Aug 2021',
  },
];

function Education() {
  return (
    <section className="section">
      <div className="section-label">Education</div>
      {education.map((edu, i) => (
        <div className="card" key={i}>
          <div className="card-header">
            <div>
              <div className="card-title">
                {edu.institution}{' '}
                <span style={{ color: '#888780', fontWeight: 400 }}>— {edu.location}</span>
              </div>
              <div className="card-sub">
                {edu.degree}
                <span className="gpa-badge">GPA {edu.gpa}</span>
              </div>
            </div>
            <span className="date-badge">{edu.period}</span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Education;
