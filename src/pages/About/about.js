import React from 'react';
import "./about.css";
import text from '../About/images/text.png'

const About = () => {
  return (
    <div className='about'>
      <div className='about-overlay'>
        <img src={text} className="text" alt="text" style={{'width':'350px', 'marginBottom':'10px', 'marginTop':'100px'}}/>
        <h1>Share your Own Recipe</h1>
        <p>

        </p>
      </div>
    </div>
  );
};

export default About;