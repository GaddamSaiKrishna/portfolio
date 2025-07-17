import React from 'react';
import { motion } from 'framer-motion';
import profilePic from '../assets/pp.jpg';



const Home = () => (
  <section id="home" style={{position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', overflow: 'visible'}}>
    {/* Accent bar and background shape */}
    <div style={{position: 'absolute', top: 30, left: '50%', transform: 'translateX(-50%)', zIndex: 0}}>
      <div style={{width: 180, height: 180, background: 'linear-gradient(135deg, var(--accent) 60%, var(--secondary) 100%)', borderRadius: '50%', filter: 'blur(18px)', opacity: 0.18}} />
    </div>
    <motion.img
      src={profilePic}
      alt="Sai Krishna Gaddam profile"
      style={{ width: 140, height: 140, borderRadius: '50%', marginBottom: 24, boxShadow: '0 4px 24px rgba(43,45,66,0.10)', position: 'relative', zIndex: 1 }}
      initial={{ opacity: 0, y: -40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    />
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2, duration: 0.7 }}
      style={{ color: 'var(--primary)', fontWeight: 700, fontSize: '2.5rem', zIndex: 1 }}
    >
      Hi, I'm Sai Krishna Gaddam
    </motion.h1>
    <motion.p
      className="bio"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.4, duration: 0.7 }}
      style={{ maxWidth: 600, fontSize: '1.15rem' }}
    >
      Web developer | Frontend developer<br/>
      B.Tech in Mechanical Engineering, NIT Durgapur (2022-26)<br/>
      Passionate about building impactful web experiences and modern UIs. I love solving problems, collaborating in teams, and learning new technologies.
    </motion.p>
    <motion.div
      id="contact"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.6, duration: 0.7 }}
      style={{ marginTop: 24, display: 'flex', gap: 16, justifyContent: 'center', zIndex: 1 }}
    >
      <a href="mailto:gaddamsaikrishna460@gmail.com">
        <button style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
          <svg height="1.2em" viewBox="0 0 24 24" fill="currentColor" style={{verticalAlign: 'middle'}} aria-label="Email"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 7 8-7V20H4z"/></svg>
          Email Me
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
  </section>
);

export default Home; 