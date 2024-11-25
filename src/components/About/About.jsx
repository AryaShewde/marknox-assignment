import React from "react";
import "./About.css"
const description = "I'm a FrontEnd Developer and currently studying at NES Ratnam College. Innovative front end web developer with 3 years of practical experience creating responsive, scalable websites.";
const skills_List = [
  "Responsive Web design",
  "User experience",
  "Api integration",
  "Focus group testing",
  "Problem-solving",
  "Enhancing user experience",
];
const detailOrQuote =
  "Proficient in HTML, CSS, JavaScript, Git, ReactJs, ContextAPI, Redux ,Bootstrap and TailwindCSS. Creative, eager to learn, and skilled in transforming complex ideas into user-friendly interfaces.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={"https://png.pngtree.com/thumb_back/fh260/background/20210324/pngtree-memphis-abstract-portfolio-pink-playful-image_593419.jpg"} />
      <div className="about">
        <h2 className="about-tit">About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul className="list" >
          {skills_List.map((skill, i) => (
            <li key={i}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 0rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;