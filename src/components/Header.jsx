import React from 'react'
import './Header.css'

const LINKS = {
  github: 'https://github.com/Promzy55',
  email: 'oluwaosasranking@gmail.com',
  phone: '+2349126453785',
}

function ContactLink({ href, icon, label }) {
  return (
    <a className='contact-link' href={href} target='_blank' rel='noreferrer'>
      <i className={`ti ${icon}`} aria-hidden='true' />
      {label}
    </a>
  )
}

function Header() {
  return (
    <header className='header'>
      <h1 className='name'>
        Omozuwa Osagie <span className='accent'>_</span>
      </h1>
      <p className='tagline'>Software Developer · React & Flutter Specialist</p>
      <div className='contact-row'>
        <ContactLink
          href={LINKS.github}
          icon='ti-brand-github'
          label='Promzy55'
        />
        <ContactLink
          href={`mailto:${LINKS.email}`}
          icon='ti-mail'
          label={LINKS.email}
        />
        <ContactLink
          href={`tel:${LINKS.phone}`}
          icon='ti-phone'
          label='+234 912 645 3785'
        />
      </div>
    </header>
  )
}

export default Header
