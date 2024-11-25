import React from "react";
import arrowSvg from "../../images/down-arrow.svg";
import Typewriter from 'react-typewriter-effect';
import "./Home.css"


const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height">
      <img className="background" src={"https://plus.unsplash.com/premium_photo-1683309565422-77818a287060?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cG9ydGZvbGlvJTIwYmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D"} alt="" />
      <div className="home-det">
        <h1 className="name">{name}</h1>
        <h2>I am a</h2>
        <Typewriter
          textStyle={{
            fontFamily: 'monospace',
            fontSize: '2.5rem',
            color: '#001257',
            textShadow: '0px 0px 2px'
          }}
          className="titles"
          startDelay={100}
          cursorColor="black"
          multiText={title}
          multiTextDelay={1000}
          typeSpeed={100}
          deleteSpeed={50}
          loop={true}
        />
      </div>
      <a href="#about" className="arrow">
        <img className="arrow-img" src={arrowSvg} />
      </a>
    </section>
  );
};


export default Home;