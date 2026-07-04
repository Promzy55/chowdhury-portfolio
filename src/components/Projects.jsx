import React from 'react'
import './Projects.css'

const projects = [
  {
    name: 'Cryptoplace — Cryptocurrency Tracking & Analytics',
    link: 'https://crypto-place-ski.vercel.app/',
    linkLabel: 'View Live',
    description:
      'React-based cryptocurrency dashboard displaying real-time market data through third-party APIs, with search, filtering, sorting, and a fully responsive UI.',
    tech: ['React', 'JavaScript', 'REST APIs', 'Tailwind CSS', 'Axios'],
  },
  {
    name: 'BabyShop Mobile Application',
    link: 'https://github.com/Promzy55',
    linkLabel: 'View on GitHub',
    description:
      'Cross-platform mobile e-commerce application for baby products, with product browsing, cart functionality, checkout workflows, and API integration.',
    tech: ['Flutter', 'Dart', 'REST APIs', 'Firebase'],
  },
  {
    name: 'Number Guessing Game Web Application',
    link: 'https://github.com/Promzy55',
    linkLabel: 'View on GitHub',
    description:
      'Interactive number guessing game with multiple difficulty levels, authentication, game progress tracking, and admin functionality — Flask backend with a React frontend integrated via REST APIs.',
    tech: ['Python', 'Flask', 'React', 'REST APIs'],
  },
]

function Projects() {
  return (
    <section className='section'>
      <div className='section-label'>Projects</div>
      {projects.map((project, i) => (
        <a
          className='project-card'
          key={i}
          href={project.link}
          target='_blank'
          rel='noreferrer'
        >
          <div className='card-header'>
            <div className='card-title'>{project.name}</div>
          </div>
          <p
            style={{
              fontSize: '13px',
              color: '#9d9b95',
              marginTop: '6px',
              lineHeight: 1.6,
            }}
          >
            {project.description}
          </p>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '5px',
              marginTop: '0.6rem',
            }}
          >
            {project.tech.map((t, j) => (
              <span className='tag' key={j}>
                {t}
              </span>
            ))}
          </div>
          <div className='project-link-hint'>
            <i
              className='ti ti-external-link'
              style={{ fontSize: '13px', color: '#534ab7' }}
              aria-hidden='true'
            />
            {project.linkLabel} ↗
          </div>
        </a>
      ))}
    </section>
  )
}

export default Projects
