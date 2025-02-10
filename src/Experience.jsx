import React from 'react';
import './App.css';

function Experience() {
  return (
    <div className="experience-page">
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
            <ul>
              <li>Spearheaded the role of the first Pre-Sales and Techno-Business consulting hire, contributing to the company's growth and success.</li>
              <li>Successfully coordinated and provided consulting services for six cross-functional teams, collaborating with global, multi-cultural teams across India, MEA, and the USA.</li>
              <li>Innovatively implemented pioneering solutions, use cases, and integrations within the industry, resulting in an impressive 75% conversion probability to Proof of Concept (PoC) and driving $5 million Pre-Sales funnel</li>
              <li>Achieved a remarkable promotion by completing a 2-year Key Performance Indicator (KPI) in just a 6-month period, representing QNu Labs in the MEA region, and facilitating expansion into the USA market.</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-company">
              <h3 className="timeline-title">Middle Earth HR</h3>
            </div>
            <p className="timeline-role">Marketing Intern, Hyderabad</p>
            <p className="timeline-date">Mar 2018 - Apr 2018</p>
            <ul>
              <li>Achieved the lowest Customer Acquisition Cost within the organization by successfully implementing a new marketing strategy.</li>
              <li>Pioneered a YouTube strategy for competitive advantage, resulting in an impressive 10X decrease in Customer Acquisition Cost for new programs</li>
            </ul>
          </div>
        </div>

        <div className="timeline-item">
          <div className="timeline-content">
            <div className="timeline-company">
              <h3 className="timeline-title">Tata Consultancy Services</h3>
            </div>
            <p className="timeline-role">Embedded Systems Analyst, Hyderabad</p>
            <p className="timeline-date">Aug 2015 - May 2017</p>
            <ul>
              <li>Specialized in Automotive Safety Lifecycle Management with a focus on braking systems.</li>
              <li>Achieved a 50% reduction in analysis time and a 70% decrease in testing time for critical tasks including Design Failure Mode and Effects Analysis (DFMEA), Reliability Hazard and Failure Mode (RHFM) analysis, and Reliability analysis.</li>
              <li>Played a crucial role in training new team members, ensuring their seamless integration into the team's workflow.</li>
              <li>Represented the team in clie</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Experience;
