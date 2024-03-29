// src/components/Contact.jsx

import React from 'react';

import './css/contact.css';
const Contact = () => {
  return (
    <div>
    <div className="skills">
      
    <a href="https://myaccount.google.com/?utm_source=OGB&utm_medium=appd2005@gmail.com">   <img 
      height={300}
      src="./public/email.png"
      alt=""
      style={{ marginRight: '100px' }} 
    />   </a>
    
 
    <a href="https://www.facebook.com/cusubxuseen.cali/">     <img 
    height={300}
    src="./public/facebook.png"
    alt=""
    style={{ marginRight: '100px' }} 
  />  </a>
 <a href="https://web.whatsapp.com"><img 
      height={300}
      src="./public/WhatsApp_icon.png"
      alt=""
    />
</a>
<a href="https://www.instagram.com/cusubxuseen.cali/"><img 
      height={300}
      src="./public/instagram.png"
      alt=""
    />
</a>
<a href="https://github.com/cusubxuseen.cali/"><img 
      height={300}
      src="./public/github.png"
      alt=""
    />
</a>
    
  </div>
  <footer>
        <p>welcome in my website</p>
      </footer>  </div>
    // <div className="contact">
    //   <h2 className="contact-heading">Contact Me</h2>
    //   <p className="contact-info">
    //     <span>Email:</span> <a href="abdinasiralimohamed2005@gmail.com">youremail@example.com</a>
    //   </p>
    //   <p className="contact-info">
    //     <span>facebook:</span> <a href="[Your LinkedIn Profile Link]">Connect with me</a>
    //   </p>
    //   <p className="contact-info">
    //     <span>phone number:</span> <a href="mailto:youremail@example.com">youremail@example.com</a>
    //   </p>
    //   <p className="contact-info">
    //     <span>whats app:</span> <a href="https://web.whatsapp.com">youremail@example.com</a>
    //   </p>
    // </div>
  );
};

export default Contact;
