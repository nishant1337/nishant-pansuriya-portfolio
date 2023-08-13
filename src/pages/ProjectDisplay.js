import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import "../styles/ProjectDisplay.css";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} alt={project.name} />
      <p>
        <b>Skills:</b> {project.skills}
      </p>
      {project.link && (
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          <button className="visit-button">Visit Project</button>
        </a>
      )}
    </div>
  );
}

export default ProjectDisplay;
