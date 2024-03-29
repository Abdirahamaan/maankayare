// src/components/Bio.jsx

import React from 'react';
import './css/bio.css'; // Import your CSS file for styling
<style>

</style>
const Bio = () => {
  return (
    <div className="bio">
      <div className="bio-content">
        <div className="bio-text">
          <h2 className="bio-heading">My Background</h2>
          <p className="bio-bio">
          IoT Project Ideas for Students
           
          </p>
        </div>
        <div className="bio-image">
          <img
            src="./public/Fb.jfif"
            alt="Profile"
          />
        </div>
      </div>
      <footer className='foot' ><h1>Skills</h1></footer>
    </div>
  );
};

export default Bio;
