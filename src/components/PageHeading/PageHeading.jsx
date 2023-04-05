import React from "react";
import { motion } from "framer-motion";

import "./PageHeading.css";

const PageHeading = ({ heading, pageName }) => {
  return (
    <motion.section
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      transition={{
        duration: 1,
      }}
      className="main-heading-container"
    >
      <h1 className="page-heading">{pageName}</h1>
      <h2 className="title">
        {heading[0]}
        <span>{heading[1]}</span>
      </h2>
    </motion.section>
  );
};

export default PageHeading;
