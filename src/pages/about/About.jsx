import React, { useEffect } from "react";

import "./about.css";

const About = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["About", " Me"]);
  }, [setPageTitle]);

  return <section className="aboutPage-container">About</section>;
};

export default About;
