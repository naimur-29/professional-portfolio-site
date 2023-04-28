import React from "react";
import { motion } from "framer-motion";

// importing stylesheets:
import "./ProjectCard.css";

// importing local assets:
import DefaultImage from "../../../../assets/logo.png";

// functions:
// const removeDecimal = (n) => n - Math.ceil(n);
// const staggerValue = (n, x) => n / x - removeDecimal(n / x);

// motion variants:
const projectCardVariants = (count) => ({
  hidden: { y: "-100%", scale: 0.7, opacity: 0 },
  visible: {
    y: "0%",
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 8,
      delay: count * 0.1,
    },
  },
});

const ProjectCard = ({
  projectInfo = {
    title: "",
    description: "",
    imgLink: [],
    visitLink: "",
    codeLink: "",
  },
  count = 1,
}) => {
  return (
    <motion.div
      variants={projectCardVariants(count)}
      initial="hidden"
      animate="visible"
      className="project-card-container"
    >
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
    </motion.div>
  );
};

export default ProjectCard;
