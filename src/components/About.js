import React from 'react';
import '../assets/css/meyawo.css';

const About = () => {
  return (
    <section className="section pt-0" id="about">
      <div className="container text-center">
        <div className="about">
          <div className="about-img-holder">
            <img src="cat3.gif" className="about-img" alt="Profile" />
          </div>
          <div className="about-caption">
            <p className="section-subtitle">Who Am I ?</p>
            <h2 className="section-title mb-3">About Me</h2>
            <p>
              Hey there! I'm a student at King Mongkut's University of Technology Thonburi, 
              passionate about UX/UI design and frontend development. 
              I love creating user-friendly experiences that blend creativity and functionality.
              <br />Beyond design and coding, I'm also into data analysis, AI, and machine learning. 
              Join me on this exciting journey as I explore the dynamic world where design meets technology!
            </p>
            <a href="assets/imgs/resume_pattera.png" download="pattera_resume">
              <button className="btn-rounded btn btn-outline-primary mt-4">Download resume</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
