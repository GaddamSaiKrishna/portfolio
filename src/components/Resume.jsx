import React from 'react';
import { motion } from 'framer-motion';
import isteLogo from '../../public/iste.png';
import mesaLogo from '../../public/mesa.png';
import nssLogo from '../../public/nss.png';

const sectionVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.2, duration: 0.7 } })
};

const Resume = () => (
  <div style={{ width: '100%', margin: '0 auto', maxWidth: 1100 }}>
    {/* Education */}
    <motion.section id="education" custom={0} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
      <h2>Education</h2>
      <p><b>Bachelor of Technology in Mechanical Engineering</b>, NIT Durgapur (2022-26)<br/>Durgapur, West Bengal</p>
    </motion.section>

    {/* Personal Projects */}
    <motion.section id="projects" custom={1} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
      <h2>Personal Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>CIT 8.0 Official Quiz Website</h3>
          <p>Developed and deployed the official CIT 8.0 website for ISTE NIT Durgapur, facilitating seamless registration and test-taking for over 250 participants. Built with Django (backend), HTML/CSS (frontend), and SQLite. Implemented user authentication, managed test workflows, and ensured data integrity.</p>
          <p>
            <a href="https://cit.istenitdgp.com/" target="_blank" rel="noopener noreferrer" className="project-link"> <span role="img" aria-label="arrow">↗️</span> Live Site</a> |
            <a href="https://cit-iota.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link"> <span role="img" aria-label="arrow">↗️</span> Alt Link</a> |
            <a href="https://github.com/GaddamSaiKrishna/cit.git" target="_blank" rel="noopener noreferrer" className="project-link">
              <svg height="1em" viewBox="0 0 16 16" fill="currentColor" style={{verticalAlign: 'middle', marginRight: 4}} aria-label="GitHub"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
              Code
            </a>
          </p>
        </div>
        <div className="project-card">
          <h3>MESA Official Website</h3>
          <p>Created the official website for the Mechanical Engineering Students’ Association (MESA), NIT Durgapur using React. Features a modern, responsive design with info on MESA’s mission, events, and resources. Improved skills in React, component structuring, and responsive layouts.</p>
          <p>
            <a href="https://mesa-official-page.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link"> <span role="img" aria-label="arrow">↗️</span> Live Site</a> |
            <a href="https://mesa-nitdgp.vercel.app/" target="_blank" rel="noopener noreferrer" className="project-link"> <span role="img" aria-label="arrow">↗️</span> Alt Link</a> |
            <a href="https://github.com/GaddamSaiKrishna/mesa_nitdgp.git" target="_blank" rel="noopener noreferrer" className="project-link">
              <svg height="1em" viewBox="0 0 16 16" fill="currentColor" style={{verticalAlign: 'middle', marginRight: 4}} aria-label="GitHub"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z"/></svg>
              Code
            </a>
          </p>
        </div>
      </div>
    </motion.section>

    {/* Positions of Responsibility */}
    <motion.section id="positions" custom={2} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
      <h2>Positions of Responsibility</h2>
      <div className="positions-flex">
        <div className="position-item">
          <div className="position-icon"><img src={isteLogo} alt="ISTE Logo" /></div>
          <div>
            <b>Treasurer & Web Developer | ISTE Students’ Chapter NIT Durgapur</b> (Mar 2024 - present)<br/>Developed the official ISTE website and organized hackathons/workshops for 150 students. Preparing a website for an upcoming event (CIT). Honed technical and collaborative skills.
          </div>
        </div>
        <div className="position-item">
          <div className="position-icon"><img src={mesaLogo} alt="MESA Logo" /></div>
          <div>
            <b>Convener & Graphic Designer | Mechanical Engineering Students’ Association, NIT Durgapur</b> (Oct 2023 - present)<br/>Created the MESA website and designed posters featured on MESA social media. Organized events with 70+ students, showcasing teamwork.
          </div>
        </div>
        <div className="position-item">
          <div className="position-icon"><img src={nssLogo} alt="NSS Logo" /></div>
          <div>
            <b>Unit Leader & Volunteer | National Service Scheme, NIT Durgapur</b> (Mar 2023 - present)<br/>Organized/participated in events (YuvaSamvad, HindiPakhwada, Har Ghar Tiranga, parade). Delivered a speech to 200 people at Yuva Samvad (prize winner). Coordinated Swachata Hi Seva with 100 participants. Enhanced public speaking skills.
          </div>
        </div>
      </div>
    </motion.section>

    {/* Technical Skills and Interests */}
    <motion.section id="skills" custom={3} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
      <h2>Technical Skills & Interests</h2>
      <div className="skills-grid">
        <div className="skill-card"><span className="skill-label">Languages</span><span className="skill-value">C, C++, Javascript</span></div>
        <div className="skill-card"><span className="skill-label">Technologies</span><span className="skill-value">HTML, CSS</span></div>
        <div className="skill-card"><span className="skill-label">Frameworks</span><span className="skill-value">Bootstrap, Django</span></div>
        <div className="skill-card"><span className="skill-label">Libraries</span><span className="skill-value">React.js</span></div>
        <div className="skill-card"><span className="skill-label">Dev Tools</span><span className="skill-value">VSCode, Git, Github, Vercel</span></div>
        <div className="skill-card"><span className="skill-label">Areas of Interest</span><span className="skill-value">Web Design and Development, Software Development, DSA</span></div>
        <div className="skill-card"><span className="skill-label">Soft Skills</span><span className="skill-value">Problem Solving, Leadership, Teamwork, Time management, Public speaking, Self-learning, Excel, PowerPoint</span></div>
      </div>
    </motion.section>

    {/* Certifications */}
    <motion.section id="certifications" custom={4} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={sectionVariant}>
      <h2>Certifications</h2>
      <ul>
        <li>Completed the Responsive Web Design certification from freeCodeCamp (300+ hours, multiple mini projects). Enhanced foundational knowledge of HTML, CSS, and responsive design techniques. <span style={{color: 'var(--accent)'}}> <a href="https://www.freecodecamp.org/certification/saikrishna-gaddam/responsive-web-design" target="_blank" rel="noopener noreferrer">certificate link</a></span></li>
      </ul>
    </motion.section>

    {/* Footer */}
    <footer className="footer">
      <div className="footer-content">
        <span>© {new Date().getFullYear()} Sai Krishna Gaddam</span>
        <span className="footer-links">
          <a href="mailto:gaddamsaikrishna460@gmail.com">Email</a> |
          <a href="https://www.linkedin.com/in/gaddam-saikrishna" target="_blank" rel="noopener noreferrer">LinkedIn</a> |
          <a href="tel:+919398588173">Phone</a>
        </span>
      </div>
    </footer>
  </div>
);

export default Resume; 