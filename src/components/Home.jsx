import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/pp.jpg';



const Home = () => (
  <section id="home" style={{
    position: 'relative',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'left',
    minHeight: '70vh',
    padding: 0,
    overflow: 'visible',
    gap: 28,
  }}>
    {/* Accent bar and background shape */}
    {/* <div style={{position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 0}}>
      <div style={{width: 180, height: 180, background: 'linear-gradient(135deg, var(--accent) 60%, var(--secondary) 100%)', borderRadius: '50%', filter: 'blur(18px)', opacity: 0.18}} />
    </div> */}
    {/* Profile Picture Left */}
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minWidth: 160, position: 'relative' }}
    >
      {/* Blurred accent background behind profile pic */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 180,
        height: 180,
        background: 'linear-gradient(135deg, var(--accent) 60%, var(--secondary) 100%)',
        borderRadius: '50%',
        filter: 'blur(18px)',
        opacity: 0.18,
        zIndex: 0,
      }} />
      {/* Unique squircle mask for profile image */}
      <div style={{
        width: 140,
        height: 140,
        background: 'var(--card-bg)',
        boxShadow: '8px 12px 32px 0 rgba(37,99,235,0.18)',
        borderRadius: '36% / 28%',
        overflow: 'hidden',
        position: 'relative',
        zIndex: 1,
        border: '4px solid var(--primary)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
        <img
          src={profilePic}
          alt="Sai Krishna Gaddam profile"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            display: 'block',
          }}
        />
      </div>
    </motion.div>
    {/* Content Right */}
    <motion.div
      initial={{ opacity: 0, x: 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', justifyContent: 'center', maxWidth: 540 }}
      className="home-content"
    >
      <h1 style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '2.7rem', marginBottom: 8, lineHeight: 1.1 }}>
        Sai Krishna Gaddam
      </h1>
      <h2 style={{ color: 'var(--accent)', fontWeight: 600, fontSize: '1.25rem', margin: 0, marginBottom: 14, letterSpacing: 0.2, lineHeight: 1.2 }}>
        <span className="cursor typewriter-animation">Web developer | Frontend developer</span>
      </h2>
      <p className="bio" style={{ maxWidth: 600, fontSize: '1.08rem', color: 'var(--text)', opacity: 0.92, marginBottom: 24, lineHeight: 1.7 }}>
      I'm passionate about crafting modern, impactful web experiences. I thrive on solving complex problems, collaborating with teams, and continuously exploring new technologies to build elegant, user-focused interfaces.
      </p>
      <motion.div
        id="contact"
        initial={false}
        animate={false}
        style={{ display: 'flex', gap: 16, justifyContent: 'flex-start', zIndex: 1 }}
      >
        <a href="/resume.pdf" download>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg height="1.2em" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}} aria-label="Resume"><path d="M5 20h14v-2H5v2zm7-18C6.48 2 2 6.48 2 12c0 5.52 4.48 10 10 10s10-4.48 10-10C22 6.48 17.52 2 12 2zm1 15h-2v-6H8l4-4 4 4h-3v6z"/></svg>
            Resume
          </button>
        </a>
        <a href="https://github.com/GaddamSaiKrishna" target="_blank" rel="noopener noreferrer">
          <button style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg height="1.2em" viewBox="0 0 16 16" fill="currentColor" style={{verticalAlign: 'middle'}} aria-label="GitHub"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
            GitHub
          </button>
        </a>
        <a href="https://www.linkedin.com/in/gaddam-saikrishna" target="_blank" rel="noopener noreferrer">
          <button style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <svg height="1.2em" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}} aria-label="LinkedIn"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm15.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2 3.6 4.59v4.72z"/></svg>
            LinkedIn
          </button>
        </a>
      </motion.div>
    </motion.div>
  </section>
);

export default Home; 