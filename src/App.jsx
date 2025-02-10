import React, { useState } from 'react';
import './App.css';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('home'); // State for active link

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = (link) => {
    setActiveLink(link);
    if (isMenuOpen) {
      setIsMenuOpen(false); // Close menu on link click (for mobile)
    }
  };

  return (
    <div className="app">
      <header className="header">
        <nav className="navbar">
          <div className="navbar-left">
            <button className="hamburger-menu" onClick={toggleMenu}>
              ☰
            </button>
            <button className="contact-button-mobile">Contact Me</button>
            <div className={`navbar-links ${isMenuOpen ? 'open' : ''}`}>
              <a href="#" onClick={() => handleLinkClick('home')} className={activeLink === 'home' ? 'active' : ''}>Home</a>
              <a href="#" onClick={() => handleLinkClick('experience')} className={activeLink === 'experience' ? 'active' : ''}>Experience</a>
              <a href="#" onClick={() => handleLinkClick('education')} className={activeLink === 'education' ? 'active' : ''}>Education</a>
              <a href="#" onClick={() => handleLinkClick('projects')} className={activeLink === 'projects' ? 'active' : ''}>Projects</a>
            </div>
          </div>
          <button className="contact-button">Contact Me</button>
        </nav>
      </header>
      <section className="hero">
        <div className="hero-content">
          <h1>Driving Impact Through Strategic Leadership, Client Satisfaction, and Data-Driven Innovation</h1>
          <p>Program Manager | Cybersecurity Expert | Change Management Leader | Digital Transformation Enabler</p>
          <button className="download-button">Download Resume <span className="arrow">→</span></button>
        </div>
      </section>

      <section className="bio">
        <h2>My Bio</h2>
        <div className="bio-container">
          <div className="bio-card">
            <p>With a strong foundation in program management, cybersecurity, and digital transformation, I specialize in leading complex projects across global teams to deliver measurable results. Certified in Cybersecurity (ISC2 CC) and skilled in leveraging tools like SharePoint, Power BI, and Power Apps, I am passionate about driving efficiency, enhancing client satisfaction, and enabling data-driven decision-making.</p>
            <button className="contact-me-button">Contact Me <span className="arrow">→</span></button>
          </div>
          <div className="bio-card quote-card">
            <div className="quote-content">
              <p className="quote-text">"Let's connect and explore how we can drive success together!"</p>
              <img src="./assets/profile-picture.jpg" alt="Profile" className="profile-picture" />
            </div>
          </div>
          <div className="bio-card education-card">
            <h3>PGDM, Marketing & Strategy</h3>
            <p>NMIMS, Bangalore<br />(2017-2019)</p>
            <ul>
              <li>Consistent top 5 in strategy courses</li>
              <li>Design Head for the Public Relations Committee</li>
            </ul>
            <hr />
            <h3>B.Tech, Electronics and Communication Engineering</h3>
            <p>GITAM University, Visakhapatnam<br />(2011-2015)</p>
            <ul>
              <li>Graduated in the top 10% with distinction</li>
              <li>Recognized as a Microsoft Student Partner for excellence in technology and leadership</li>
            </ul>
            <button className="explore-education-button">Explore Education <span className="arrow">→</span></button>
          </div>
        </div>
      </section>

      <section className="experience">
        <h2>Professional Experience</h2>
        <table className="experience-table">
          <tbody>
            <tr>
              <td className="company">Atos</td>
              <td className="details">
                <p>Manager, Bangalore (Aug 2022 - Present)</p>
              </td>
              <td className="tags">
                <div className="experience-tags">
                  <span className="tag">Service Delivery</span>
                  <span className="tag">CSM</span>
                  <span className="tag">Automation</span>
                  <span className="tag">Project Management</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="company">PwC</td>
              <td className="details">
                <p>Manager, Change Management, Bangalore (Nov 2021 - July 2022)</p>
              </td>
              <td className="tags">
                <div className="experience-tags">
                  <span className="tag">Change Management</span>
                  <span className="tag">Stakeholder Communication</span>
                  <span className="tag">Project Management</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="company">QNu Labs</td>
              <td className="details">
                <p>Consultant – Pre-Sales & Customer Success, Dubai & Bangalore (May 2019 - Nov 2021)</p>
              </td>
              <td className="tags">
                <div className="experience-tags">
                  <span className="tag">Pre Sales</span>
                  <span className="tag">CSM</span>
                  <span className="tag">Technology Consulting</span>
                  <span className="tag">Branding & Marketing</span>
                </div>
              </td>
            </tr>
            <tr>
              <td className="company">TATA Consultancy Services</td>
              <td className="details">
                <p>Embedded Systems Analyst, Hyderabad (Aug 2015 - May 2017)</p>
              </td>
              <td className="tags">
                <div className="experience-tags">
                  <span className="tag">Automotive Safety</span>
                  <span className="tag">FMEA</span>
                  <span className="tag">Presentations</span>
                  <span className="tag">ISO 26262</span>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="explore-profession-button">Explore Profession <span className="arrow">→</span></button>
      </section>

      <section className="projects">
        <h2>Featured Projects</h2>
        <div className="projects-container">
          <div className="project-card">
            <h3 className="project-title">Automation</h3>
            <p>Streamlining Operations and Enabling Data-Driven Decision-Making</p>
            <button className="continue-reading-button">Continue Reading <span className="arrow">→</span></button>
            <img src="./assets/project-image.jpg" alt="Project" className="project-image" />
          </div>
          <div className="project-card">
            <h3 className="project-title">Technology</h3>
            <p>Transforming Data Security with Quantum Technology</p>
            <button className="continue-reading-button">Continue Reading <span className="arrow">→</span></button>
            <img src="./assets/project-image.jpg" alt="Project" className="project-image" />
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2024 My Website. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
