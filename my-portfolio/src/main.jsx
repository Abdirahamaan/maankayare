import React from 'react'
import ReactDOM from 'react-dom/client'
// import App from './components/Homepage'

import Homepage from './components/Homepage'
import Bio from './components/Bio'
import Contact from './components/Contact'
import Project from './components/Projects'
import Skills from './components/Skills'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <Homepage /> 
     <Bio />
     <Skills/>
     <Project/>
    
    <Contact/>
   
   
   
  



  </React.StrictMode>,
)
