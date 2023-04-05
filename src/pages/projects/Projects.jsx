import React, { useEffect } from "react";

import "./Projects.css";

// importing global components:
import PageHeading from "../../components/PageHeading/PageHeading";

// importing local components:
import ProjectCard from "./components/ProjectCard/ProjectCard";

// importing local data:
import { ProjectsData } from "./data/projectsData";

const Projects = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["My", " Projects"]);
    window.scrollTo(0, 0);
  }, [setPageTitle]);

  return (
    <section className="projects-section-container">
      <PageHeading heading={["My ", "Projects"]} pageName={"Works"} />

      <div className="projects-container">
        {ProjectsData?.map((project, index) => (
          <ProjectCard key={index} projectInfo={project} count={index + 1} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
