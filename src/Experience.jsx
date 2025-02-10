import React from 'react';
import './App.css';
import { FaCode, FaLaptopCode, FaServer, FaDatabase, FaChartLine, FaUsers, FaShieldAlt, FaNetworkWired, FaCloud, FaRocket } from 'react-icons/fa'; // Import icons

function Experience() {
  const keySkills = [
    { icon: <FaCode />, skill: 'Web Development' },
    { icon: <FaLaptopCode />, skill: 'Frontend Development' },
    { icon: <FaServer />, skill: 'Backend Development' },
    { icon: <FaDatabase />, skill: 'Database Management' },
    { icon: <FaChartLine />, skill: 'Data Analysis' },
    { icon: <FaUsers />, skill: 'Teamwork' },
    { icon: <FaShieldAlt />, skill: 'Cybersecurity' },
    { icon: <FaNetworkWired />, skill: 'Networking' },
    { icon: <FaCloud />, skill: 'Cloud Computing' },
    { icon: <FaRocket />, skill: 'Project Management' },
  ];

  return (
    <div className="experience-page">
      <h2>Key Skills</h2>
      <div className="skills-container">
        {keySkills.map((skill, index) => (
          <div className="skill-tile" key={index}>
            <span className="skill-icon">{skill.icon}</span>
            <span className="skill-text">{skill.skill}</span>
          </div>
        ))}
      </div>
      <h2>Professional Experience</h2>
      <div className="timeline">
        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-company">
              <h3 className="timeline-title">Atos</h3>
            </div>
            <p className="timeline-role">Manager, Bangalore</p>
            <p className="timeline-date">Aug 2022 - Present</p>
            <ul className="timeline-list">
              <li>Successfully managed complex cybersecurity projects involving multiple teams and clients across Asia- Pacific, MEA, Europe, and the US, ensuring on-time delivery and client satisfaction.</li>
              <li>Created and maintained data-driven dashboards, resulting in a 40% reduction in top management’s efforts and enhanced decision-making using Sharepoint, Power Apps and Power BI</li>
              <li>Led Service Improvement Plans, which led to a remarkable 30% improvement in client satisfaction and strengthened client relationships.</li>
              <li>Established robust processes for tracking project plans, issues, risks, and improvements, ensuring timely closure and efficient project management.</li>
            </ul>
            <div className="timeline-skills">
              <span className="skill-tag">Cybersecurity</span>
              <span className="skill-tag">Project Management</span>
              <span className="skill-tag">Stakeholder Management</span>
              <span className="skill-tag">Data Analysis</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-company">
              <h3 className="timeline-title">PwC</h3>
            </div>
            <p className="timeline-role">Manager, Change Management, Bangalore</p>
            <p className="timeline-date">Nov 2021 - July 2022</p>
            <ul className="timeline-list">
              <li>Lead the Change Management team for firm-wide initiatives, driving successful change implementation across the organization.</li>
              <li>Collaborate with cross-functional teams to plan and execute effective change management strategies, ensuring smooth transitions during projects.</li>
              <li>Utilize digital tools to assess the impact of various projects and proces</li>
            </ul>
            <div className="timeline-skills">
              <span className="skill-tag">Change Management</span>
              <span className="skill-tag">Stakeholder Communication</span>
              <span className="skill-tag">Project Management</span>
            </div>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-company">
              <h3 className="timeline-title">QNu Labs</h3>
            </div>
            <p className="timeline-role">Consultant – Pre-Sales & Customer Success, Dubai & Bangalore</p>
            <p className="timeline-date">May 2019 - Nov 2021</p>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-company">
              <h3 className="timeline-title">Tata Consultancy Services</h3>
            </div>
            <p className="timeline-role">Embedded Systems Analyst, Hyderabad</p>
            <p className="timeline-date">Aug 2015 - May 2017</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
