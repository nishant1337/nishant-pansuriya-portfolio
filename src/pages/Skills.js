import React from "react";
import "../styles/Skills.css";

function Skills() {
  return (
    <div className="skills">
      <h1>Skills</h1>
      <ol className="list">
        <li className="item">
          <h2>Programming Languages</h2>
          <span>
            Python, Java, <span className="blue">JavaScript</span>, C++,{" "}
            <span className="black">SQL</span>, Bash Scripting
          </span>
        </li>
        <li className="item">
          <h2>Front-End</h2>
          <span>
            ReactJS, NodeJS, Redux, Express, HTML, CSS, RestAPI
          </span>
        </li>
        <li className="item">
          <h2>Back-End</h2>
          <span>
            Python, Java, JavaScript, C++, SQL, Bash Scripting
          </span>
        </li>
        <li className="item">
          <h2>Cloud</h2>
          <span>
            AWS (EC2, S3, Lambda, Route53, IAM, ELB, VPC), Azure, GCP
          </span>
        </li>
        <li className="item">
          <h2>DevOps</h2>
          <span>
            Docker, Terraform, Ansible, Jenkins, Kubernetes Basics, Git, GitHub
          </span>
        </li>
        <li className="item">
          <h2>Databases</h2>
          <span>
            MySQL, MariaDB, AWS RDS, MongoDB, DynamoDB
          </span>
        </li>
        <li className="item">
          <h2>Operating Systems</h2>
          <span>
            Linux, macOS, Windows
          </span>
        </li>
      </ol>
    </div>
  );
}

export default Skills;
