import React from "react";

// importing stylesheets:
import "./ProjectCard.css";

// importing local assets:
import DefaultImage from "../../../../assets/logo.png";

const ProjectCard = ({ projectInfo }) => {
  return (
    <div className="project-card-container">
      <div className="img-container">
        <img src={projectInfo?.imgLink || DefaultImage} alt="project preview" />
        <div className="button-container">
          <a
            href={projectInfo.visitLink || "/"}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Visit
          </a>
          <a
            href={projectInfo.codeLink || "/"}
            className="btn"
            target="_blank"
            rel="noreferrer"
          >
            Code
          </a>
        </div>
      </div>

      <div className="content">
        <h3 className="title">{projectInfo.title || "no title!"}</h3>
        <article className="description">
          {projectInfo.description || "no descriptions!"}
        </article>
      </div>
    </div>
  );
};

export default ProjectCard;
