import React from 'react';
import '../styles/Resume.css';
import images from './images';

function Resume() {
  return (
    <div className="resume">
      <h1 className="page-title">Resume</h1>
      <div className="resume-section education-section">
        <h2 className="section-title">Education</h2>
        <div className="resume-entry">
        <img className="school-logo" src={images.baruch_logo} alt="Baruch College Logo" />
        <div className="school-info">
            <h3>Baruch College</h3>
            <p>Computer Science | Expected Graduation: Summer 2026</p>
            <p>Dean's List | 2024-Present</p>
            <p>GPA: 3.78</p>
          </div>
        </div>

        <div className="resume-entry">
        <img className="school-logo" src={images.lagcc_logo} alt="LaGuardia Community College Logo" />   
          <div className="school-info">
            <h3>LaGuardia Community College</h3>
            <p>Computer Science | March 2023 - June 2024</p>
            <p>Dean's List | 2023-2024</p>
            <p>GPA: 3.83</p>
          </div>
        </div>
        {/* Add more education entries as needed */}
      </div>

      <div className="resume-section experience-section">
      <h2 className="section-title">Experience</h2>
      <div className="resume-entry">
            <img className="school-logo" src={images.rexera_logo} alt="Rexera Logo" />
            <div className="school-info">
            <h3>Rexera</h3>
            <p>Software Engineer II | January 2023 - Present</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Resume;
