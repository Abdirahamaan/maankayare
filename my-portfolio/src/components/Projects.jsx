// src/components/Projects.jsx

import React from 'react';
import './css/projects.css'; // Import your CSS file for styling

const Projects = () => {
  return (
    <div>
    <div className="projects">
      {/* <h2 className="projects-heading">Projects</h2> */}
      <div className="project">
        <h3>Project 1</h3>
        <p className='par'>Project: Personal Portfolio Website
<pr>Objective: Create a personal portfolio website using React. This website will consist of several
components to showcase the student's bio, skills, projects, and contact information. It's a
practical assignment that can result in a product they might actually use, and it reinforces the
fundamentals of React components and CSS styling.</pr><br/>
<pr>Deliverables:<br/>
Source code uploaded to a GitHub repository.
A README file that includes an overview of the project, how to run it locally, and any challenges
they faced plus how they overcame them.</pr><br/></p>
        {/* Add an image */}
      </div>
      {/* Add more projects */}
    </div>
    <footer className='foot' ><h1>Contacts</h1></footer>

    </div>
  );
};

export default Projects;
