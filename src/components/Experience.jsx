import React from 'react'

function Experience() {
  return (
    <section className='section'>
      <div className='section-label'>Experience</div>
      <div className='card'>
        <div className='card-header'>
          <div className='card-title'>Open to Work</div>
          <span className='date-badge'>Available Now</span>
        </div>
        <p
          style={{
            fontSize: '13px',
            color: '#9d9b95',
            marginTop: '0.6rem',
            lineHeight: 1.6,
          }}
        >
          Currently open to full-stack developer roles, internships, and
          freelance projects — especially in React and Flutter development.
        </p>
      </div>
    </section>
  )
}

export default Experience
