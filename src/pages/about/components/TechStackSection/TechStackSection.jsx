import React from "react";

// importing stylesheets:
import "./TechStackSection.css";

// importing local data:
import { Languages, Frameworks, Tools } from "../../data/TechStacks";

// importing local components:
import TechStackList from "./components/TechStackList";

const TechStackSection = () => {
  return (
    <section className="tech-stack-section-container">
      <h3 className="heading">Here are the technologies I've worked with</h3>

      <div className="main-container">
        <TechStackList title="Languages" itemList={Languages} />

        <TechStackList title="Frameworks / Libraries" itemList={Frameworks} />

        <TechStackList title="Tools" itemList={Tools} />
      </div>
    </section>
  );
};

export default TechStackSection;
