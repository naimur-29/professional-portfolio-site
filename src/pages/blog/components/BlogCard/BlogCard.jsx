import React from "react";
import { motion } from "framer-motion";

// importing stylesheets:
import "./BlogCard.css";

// importing local assets:
import DefaultImage from "../../../../assets/logo.png";

// const removeDecimal = (n) => n - Math.ceil(n);

// motion variants:
const blogCardVariants = (count) => ({
  hidden: {
    x: 300,
    y: -100,
    scale: 0.7,
    opacity: 0,
  },
  visible: {
    x: 0,
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
    imgLink: "",
    visitLink: "",
  },
  count = 1,
}) => {
  return (
    <motion.a
      variants={blogCardVariants(count)}
      initial="hidden"
      animate="visible"
      className="blog-card-container"
      href={projectInfo.visitLink || "/"}
      target="_blank"
      rel="noreferrer"
      title="click to visit"
    >
      <div className="img-container">
        <img src={projectInfo?.imgLink || DefaultImage} alt="blog preview" />
      </div>
      <div className="content">
        <h3 className="title">{projectInfo.title || "no title!"}</h3>
        <article className="description">
          {projectInfo.description || "no descriptions!"}
        </article>
      </div>
    </motion.a>
  );
};

export default ProjectCard;
