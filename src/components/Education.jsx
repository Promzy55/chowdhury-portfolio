import React from 'react'

const education = [
  {
    institution: 'Aptech Computer Education',
    degree: 'Advanced Diploma in Software Engineering',
    period: 'Expected 2026',
  },
]

function Education() {
  return (
    <section className='section'>
      <div className='section-label'>Education</div>
      {education.map((edu, i) => (
        <div className='card' key={i}>
          <div className='card-header'>
            <div>
              <div className='card-title'>{edu.institution}</div>
              <div className='card-sub'>{edu.degree}</div>
            </div>
            <span className='date-badge'>{edu.period}</span>
          </div>
        </div>
      ))}
    </section>
  )
}

export default Education
