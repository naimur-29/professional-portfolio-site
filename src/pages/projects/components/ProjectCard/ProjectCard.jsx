import React from "react";

// importing stylesheets:
import "./ProjectCard.css";

// importing local assets:
import DefaultImage from "../../../../assets/logo.png";

const ProjectCard = ({
  projectInfo = {
    title: "",
    description: "",
    imgLink: "",
    visitLink: "",
    codeLink: "",
  },
}) => {
  return (
    <div className="project-card-container">
      <div className="img-slider">
        <div className="img-container">
          <img
            src={projectInfo?.imgLink[0] || DefaultImage}
            alt="project preview"
          />
        </div>
        <div className="img-container">
          <img
            src={projectInfo?.imgLink[1] || DefaultImage}
            alt="project preview"
          />
        </div>
        <div className="img-container">
          <img
            src={projectInfo?.imgLink[2] || DefaultImage}
            alt="project preview"
          />
        </div>
        <div className="img-container">
          <img
            src={projectInfo?.imgLink[3] || DefaultImage}
            alt="project preview"
          />
        </div>
      </div>

      <div className="content">
        <h3 className="title">{projectInfo.title || "no title!"}</h3>
        <article className="description">
          {projectInfo.description || "no descriptions!"}
        </article>

        {/* hovered Buttons for navigation */}
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
    </div>
  );
};

export default ProjectCard;
