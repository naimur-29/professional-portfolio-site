import React from "react";

// importing stylesheets:
import "./TechStackSection.css";

// importing local data:
import { Languages, Frameworks, Tools } from "../../data/TechStacks";

const TechStackSection = () => {
  return (
    <section className="tech-stack-section-container">
      <h3 className="heading">Here are the technologies I've worked with</h3>

      <div className="main-container">
        <div className="content-container">
          <h3 className="title">Languages</h3>
          <div className="item-container">
            {Languages?.map(({ img, label, bgColor }, key) => (
              <div
                className="item"
                key={key}
                style={{ backgroundColor: bgColor }}
              >
                <img src={img} alt={`${label} icon`} className="icon" />
                <span className="label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-container">
          <h3 className="title">Frameworks / Libraries</h3>
          <div className="item-container">
            {Frameworks?.map(({ img, label, bgColor }, key) => (
              <div
                className="item"
                key={key}
                style={{ backgroundColor: bgColor }}
              >
                <img src={img} alt={`${label} icon`} className="icon" />
                <span className="label">{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="content-container">
          <h3 className="title">Tools</h3>
          <div className="item-container">
            {Tools?.map(({ img, label, bgColor }, key) => (
              <div
                className="item"
                key={key}
                style={{ backgroundColor: bgColor }}
              >
                <img src={img} alt={`${label} icon`} className="icon" />
                <span className="label">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
