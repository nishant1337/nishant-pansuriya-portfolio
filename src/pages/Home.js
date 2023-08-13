import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import dp from '../assets/dp.jpg'

function Home() {
  const name = "Nishant Pansuriya";
  const profession = "I am a graduate student passionate about Cloud, DevOps, and Full-Stack Development. Seeking full-time opportunities in Ontario, Canada. Let's connect and innovate together."
    const linkedinURL = "https://www.linkedin.com/in/nishantp1337";
  const email = "nishantp1337@gmail.com";
  const githubURL = "https://github.com/nishant1337";

  return (
    <div className="home">
      <div className="about">
      <img src={dp} alt="Profile" className="profile-pic" />
        <h2>Hi, My Name is {name}</h2>
        <div className="prompt">
          <p>{profession}</p>
          <div className="icons">
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
        </div>
      </div>
    </div>
  );
}

export default Home;
