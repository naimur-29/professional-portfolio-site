import React from "react";

// importing stylesheets:
import "./TechStackSection.css";

// importing local data:
import { Languages } from "../../data/TechStacks";

const TechStackSection = () => {
  return (
    <section className="tech-stack-section-container">
      <h3 className="title">
        Here are the technologies I've been working with recently
      </h3>

      <div className="main-container">
        <div className="content-container">
          <h3 className="title">Languages</h3>
          {Languages?.map(({ img, label }, key) => (
            <div className="item-container" key={key}>
              <img src={img} alt={`${label} icon`} className="icon" />
              <span className="label">{label}</span>
            </div>
          ))}
        </div>

        <div className="content-container">
          <h3 className="title">Languages</h3>
          {Languages?.map(({ img, label }, key) => (
            <div className="item-container" key={key}>
              <img src={img} alt={`${label} icon`} className="icon" />
              <span className="label">{label}</span>
            </div>
          ))}
        </div>

        <div className="content-container">
          <h3 className="title">Languages</h3>
          {Languages?.map(({ img, label }, key) => (
            <div className="item-container" key={key}>
              <img src={img} alt={`${label} icon`} className="icon" />
              <span className="label">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
