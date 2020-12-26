import React from 'react';
import './Hero.css';

const Hero = (props) => {
  //   const width = window.innerWidth;
  //   const height = window.innerHeight;

  return (
    <div className="hero">
      <h1 className="hero-text hero-title">
        Hola, I'm <span className="underlined underlined--offset">Borja</span>!
      </h1>
      <h2 className="hero-text hero-undertitle">
        Though it may seem daunting it’s super easy! It’s pronounced /bohr-hah/
      </h2>
      <h3 className="hero-text hero-description">
        I am a <span className="underlined underlined--offset">Product Owner</span> and Agile Enthusiast based in Stuttgart. 7+ years
        in a Software Development Environment and also experienced as a
        Developer. Sometimes I also enjoy writing, singing and taking long walks
        through the forest.
      </h3>

      {/* <h2>Let's play with the thickness of this underline</h2> */}
      {/* <p>
        <span className="underlined underlined--offset">
          I'm an other very long highlighted link.
        </span>
      </p> */}
    </div>
  );
};

export default Hero;
