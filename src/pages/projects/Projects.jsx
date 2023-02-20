import React, { useEffect } from "react";

import "./Projects.css";

// import global components
import PageHeading from "../../components/PageHeading/PageHeading";

const Projects = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["My", " Projects"]);
  }, [setPageTitle]);

  return (
    <div>
      <PageHeading heading={["My ", "Projects"]} pageName={"Works"} />
    </div>
  );
};

export default Projects;
