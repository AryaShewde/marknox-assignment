import React from "react";

import envelopeIcon from "../../images/socials/envelope.svg";
import gitHubIcon from "../../images/socials/github.svg";
import instagramIcon from "../../images/socials/instagram.svg";
import linkedInIcon from "../../images/socials/linkedin.svg";
import twitterIcon from "../../images/socials/twitter.svg";
import youTubeIcon from "../../images/socials/youtube.svg";
import "./Footer.css"

const Footer = (props) => {
  const { email, gitHub, instagram, linkedIn, name, twitter, youTube, } = props;

  return (
    <div id="footer" className="footer" >
      <div className="icons">
        {email && (
          <a href={`mailto:${email}`}>
            <img src={envelopeIcon} alt="email" className="socialIcon" />
          </a>
        )}
        {gitHub && (
          <a href={`https://github.com/${gitHub}`} target="_blank">
            <img src={gitHubIcon} alt="GitHub" className="socialIcon" />
          </a>
        )}
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`} target="_blank" >
            <img src={instagramIcon} alt="Instagram" className="socialIcon" />
          </a>
        )}
        {linkedIn && (
          <a href={`https://www.linkedin.com/in/${linkedIn}`} target="_blank" >
            <img src={linkedInIcon} alt="LinkedIn" className="socialIcon" />
          </a>
        )}
        {twitter && (
          <a href={`https://twitter.com/${twitter}`} target="_blank">
            <img src={twitterIcon} alt="Twitter" className="socialIcon" />
          </a>
        )}
        {youTube && (
          <a href={`https://www.youtube.com/c/${youTube}`} target="_blank" >
            <img src={youTubeIcon} alt="YouTube" className="socialIcon" />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0, color: "white" }}>
        Created by {name}
      </p>
    </div>
  );
};


export default Footer;