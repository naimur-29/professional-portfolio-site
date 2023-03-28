import React, { useEffect } from "react";

import "./Projects.css";

// import global components
import PageHeading from "../../components/PageHeading/PageHeading";

const Projects = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["My", " Projects"]);
    window.scrollTo(0, 0);
  }, [setPageTitle]);

  return (
    <section className="projects-section-container">
      <PageHeading heading={["My ", "Projects"]} pageName={"Works"} />

      <div className="projects-container">
        <div className="project"></div>
      </div>
    </section>
  );
};

export default Projects;
