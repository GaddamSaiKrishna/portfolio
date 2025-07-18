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
    setOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar__logo" onClick={() => scrollToSection('home')}>
        <div style={{
          width: 44,
          height: 44,
          borderRadius: '50%',
          background: 'var(--card-bg)',
          border: '2.5px solid var(--accent)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontWeight: 700,
          fontSize: '1.25rem',
          color: 'var(--primary)',
          boxShadow: '0 2px 8px #a084ee33',
          letterSpacing: '0.05em',
          marginRight: 8,
        }}>
          SK
        </div>
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