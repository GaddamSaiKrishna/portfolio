import React, { useState } from 'react';

const navLinks = [
  { label: 'Home', to: 'home' },
  { label: 'Education', to: 'education' },
  { label: 'Projects', to: 'projects' },
  { label: 'Positions', to: 'positions' },
  { label: 'Skills', to: 'skills' },
  { label: 'Certifications', to: 'certifications' },
  { label: 'Contact', to: 'contact' },
];

const scrollToSection = (id) => {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
};

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [dark, setDark] = useState(false);

  const toggleDarkMode = () => {
    setDark((d) => {
      const newMode = !d;
      if (newMode) {
        document.body.classList.add('dark-mode');
      } else {
        document.body.classList.remove('dark-mode');
      }
      return newMode;
    });
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={() => scrollToSection('home')}>
        <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Sai Krishna</span>
      </div>
      <div className={`navbar__links${open ? ' open' : ''}`}>
        {navLinks.map((link) => (
          <button
            key={link.to}
            className="navbar__link"
            onClick={() => { scrollToSection(link.to); setOpen(false); }}
          >
            {link.label}
          </button>
        ))}
        <button
          className="navbar__link"
          style={{ fontSize: '1.2em', padding: '0 0.5em' }}
          onClick={toggleDarkMode}
          aria-label="Toggle dark mode"
        >
          {dark ? '🌞' : '🌙'}
        </button>
      </div>
      <div className="navbar__hamburger" onClick={() => setOpen((o) => !o)}>
        <div className="bar" />
        <div className="bar" />
        <div className="bar" />
      </div>
    </nav>
  );
};

export default Navbar; 