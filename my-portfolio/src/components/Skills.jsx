// src/components/Skills.jsx

import React from 'react';
import './css/skills.css'; // Import your CSS file for styling

const Skills = () => {
  return (
    

    <div>
    <div className="skills">
      
         
    <img 
      height={300}
      src="./public/javascript-icon.png"
      alt=""
      style={{ marginRight: '100px' }} 
    /> 
    <img 
      height={300}
      src="./public/react.gif"
      alt=""
      style={{ marginRight: '100px' }} 
    />   
     <img 
    height={300}
    src="./public/css.png"
    alt=""
    style={{ marginRight: '100px' }} 
  />  
    <img 
      height={300}
      src="./public/pyhton.png"
      alt=""
    />

  </div>
  <footer className='foot' ><h1>projects</h1></footer>
  </div>
  );
};

export default Skills;
