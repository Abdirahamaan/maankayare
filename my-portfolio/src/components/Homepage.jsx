// Homepage.jsx
import React from 'react';
// import './style.css'; // Import the CSS file
import './css/styles.css';
const Homepage = () => {
  return (
    <div>
      <header>
        <h1><img 
           height={30}
           src="./public/Fb.jfif" alt="" />
            Design with Abdirahmaan</h1>
        <nav>
          <a href="Homepage.jsx">home</a>
          <a href="Bio.jsx">Bio</a>
          <a href="#">Project</a>
          <a href="#"> Skills</a>
          <a href="#"> Contact</a>
        </nav>
      </header>
      <main className="container">
        
        <section className="hero-section">
          <h2>
            
            <img 
            height={300}
            src="./public/Fb.png" alt="" />
              
            <br />
           
            Hi, I'm Cusub,
            <br />
            A Digital Designer
          </h2>
          <p>
            Transforming Your Digital Vision into Reality: Innovative Web Designs
            by a Professional Web Designer!
          </p>
          <button>Start Project</button>
        </section>
        
        {}
      </main>
    
      <footer>
        <p>welcome in my website</p>
      </footer>
    </div>
  );
};


export default Homepage;
