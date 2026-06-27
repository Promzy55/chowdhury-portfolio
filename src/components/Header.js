import React from 'react';
import './Header.css';


const LINKS = {
  linkedin: 'https://www.linkedin.com/in/Chowdhury',
  github: 'https://github.com/Chowdhury22',
  email: 'roychowdhury22@gmail.com',
  phone: '+919674900000',
};

function ContactLink({ href, icon, label }) {
  return (
    <a className="contact-link" href={href} target="_blank" rel="noreferrer">
      <i className={`ti ${icon}`} aria-hidden="true" />
      {label}
    </a>
  );
}

function Header() {
  return (
    <header className="header">
      <h1 className="name">
        Chowdhury <span className="accent">_</span>
      </h1>
      <p className="tagline">Data Analyst · MCA Graduate · Problem Solver</p>
      <div className="contact-row">
        <ContactLink
          href={LINKS.linkedin}
          icon="ti-brand-linkedin"
          label="LinkedIn"
        />
        <ContactLink
          href={LINKS.github}
          icon="ti-brand-github"
          label="Chowdhury22"
        />
        <ContactLink
          href={`mailto:${LINKS.email}`}
          icon="ti-mail"
          label={LINKS.email}
        />
        <ContactLink
          href={`tel:${LINKS.phone}`}
          icon="ti-phone"
          label="+91 96749 00000"
        />
      </div>
    </header>
  );
}

export default Header;
