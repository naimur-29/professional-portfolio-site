import React, { useEffect } from "react";

// import style sheet:
import "./About.css";

// import global components
import PageHeading from "../../components/PageHeading/PageHeading";

// import local components
import IntroSection from "./components/IntroSection/IntroSection";
import ExpSection from "./components/ExpSection/ExpSection";

const About = ({ setPageTitle }) => {
  useEffect(() => {
    setPageTitle(["About", " Me"]);
  }, [setPageTitle]);

  return (
    <section className="aboutPage-container">
      <main className="main-content-container">
        <PageHeading heading={["About ", "Me"]} pageName={"Resume"} />

        <IntroSection />

        <ExpSection />
      </main>
    </section>
  );
};

export default About;
