import React from "react";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
 
  const linkedinURL = "https://www.linkedin.com/in/nishantp1337";
  const email = "nishantp1337@gmail.com";
  const githubURL = "https://github.com/nishant1337";

  return (
    <div className="footer">
      <div className="socialMedia">
            <a href={linkedinURL} target="_blank" rel="noopener noreferrer">
              <LinkedInIcon />
            </a>
            <a href={`mailto:${email}`} target="_blank" rel="noopener noreferrer">
              <EmailIcon />
            </a>
            <a href={githubURL} target="_blank" rel="noopener noreferrer">
              <GithubIcon />
            </a>

      </div>
      <p> &copy; nishantpansuriya.me</p>
    </div>
  );
}

export default Footer;
