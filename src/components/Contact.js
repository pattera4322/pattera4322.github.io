import React from 'react';
import '../assets/css/meyawo.css';
import '../assets/vendors/themify-icons/css/themify-icons.css';

const Contact = () => {
  return (
    <section className="section" id="contact">
      <div className="container text-center">
        <p className="section-subtitle">How can you communicate?</p>
        <h6 className="section-title mb-5">Contact Me</h6>
        <div className="contacts social-links">
          <p>Email : pattera.jw@hotmail.com</p>
          <p>Phone : 0894457114</p>
          <a href="https://www.facebook.com/profile.php?id=100009986984355" target="_blank" rel="noopener noreferrer" className="link">
            <i className="ti-facebook"></i>
          </a>
          <a href="https://www.linkedin.com/in/pattera4322/" target="_blank" rel="noopener noreferrer" className="link">
            <i className="ti-twitter-alt"></i>
          </a>
          <a href="https://www.linkedin.com/in/pattera4322/" target="_blank" rel="noopener noreferrer" className="link">
            <i className="ti-instagram"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
