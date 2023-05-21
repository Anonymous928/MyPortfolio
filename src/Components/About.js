import React from 'react';
import './About.css';
// import MyPhoto from './MyPhoto.jpg'
const MyPhoto = require('./MyPhoto.jpg');

const About = () => {
  return (
    <div id='about'>
    <div className="about-container" >
      <h1 className="about-heading">About Me</h1>
      <div className="about-photo-box">
        <img
          src={MyPhoto}
          alt="PORTFOLIO" className='about-photo'
        />
      </div>
      <div className="about-description-box">
        <p className="about-description">
          Hi, I'm Pranjul Shikhar Verma, and I'm currently in my second semester of studying Electrical Engineering at IIT Kanpur. my primary interest lies in programming, and I'm currently learning React and Next to develop my skills. As a programming enthusiast, I find the process of coding fascinating and enjoy exploring new possibilities. Learning React is my current focus, and I'm excited to see how I can use this knowledge to create innovative solutions. Apart from programming, I like to challenge myself by playing chess and table tennis.
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
