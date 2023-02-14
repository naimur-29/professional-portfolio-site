import React, { useEffect } from "react";

import "./projects.css";

const Projects = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["My", " Projects"]);
  }, [setPageTitle]);

  return <div>projects</div>;
};

export default Projects;
