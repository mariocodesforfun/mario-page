import React from 'react';
import '../styles/Resume.css';
import images from './images';

function Resume() {
  return (
    <div className="resume">
      <h1 className="page-title">Resume</h1>

      <div className="resume-section experience-section">
        <h2 className="section-title">Experience</h2>
        <div className="resume-entry">
          <div className="logo-container">
            <img className="school-logo" src={images.betterment_logo} alt="Betterment Logo" />
          </div>
          <div className="school-info">
            <h3>Betterment</h3>
            <p>Software Engineer | June 2026 - Present</p>
          </div>
        </div>

        <div className="resume-entry">
          <div className="logo-container">
            <img className="school-logo" src={images.betterment_logo} alt="Betterment Logo" />
          </div>
          <div className="school-info">
            <h3>Betterment</h3>
            <p>Software Engineer Intern | June 2025 - May 2026</p>
          </div>
        </div>

        <div className="resume-entry">
          <div className="logo-container">
            <img className="school-logo" src={images.rexera_logo} alt="Rexera Logo" />
          </div>
          <div className="school-info">
            <h3>Rexera</h3>
            <p>Software Engineer II | January 2023 - February 2025</p>
          </div>
        </div>
      </div>

      <div className="resume-section education-section">
        <h2 className="section-title">Education</h2>
        <div className="resume-entry">
          <div className="logo-container">
            <img className="school-logo" src={images.baruch_logo} alt="Baruch College Logo" />
          </div>
          <div className="school-info">
            <h3>Baruch College </h3>
            <p>Computer Science | Sep 2024 - May 2026 </p>
            <p>Dean's List </p>
            <p>GPA: 3.7</p>
          </div>
        </div>

        <div className="resume-entry">
          <div className="logo-container">
            <img className="school-logo" src={images.lagcc_logo} alt="LaGuardia Community College Logo" />
          </div>
          <div className="school-info">
            <h3>LaGuardia Community College</h3>
            <p>Computer Science | March 2023 - June 2024</p>
            <p>Dean's List </p>
            <p>GPA: 3.8</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
