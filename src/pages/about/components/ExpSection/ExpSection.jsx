import React from "react";

// import style sheets
import "./ExpSection.css";

// import local components
import Item from "./components/Item/Item";

// import local data
import { Experiences } from "../../data/Experiences";
import { Education } from "../../data/Education";

const ExpSection = () => {
  return (
    <section className="exp-section-container">
      <h2 className="section-heading">Experience & Education</h2>

      <div className="exp-content-container">
        <div className="left">
          {Experiences.map((ele, i) => (
            <Item
              key={i}
              icon={ele.icon}
              date={ele.date}
              title={ele.title}
              description={ele.description}
            />
          ))}
        </div>

        <div className="right">
          {Education.map((ele, i) => (
            <Item
              key={i}
              icon={ele.icon}
              date={ele.date}
              title={ele.title}
              description={ele.description}
            />
          ))}
        </div>
      </div>

      <a
        href="https://www.linkedin.com/in/naimur-rahman-799769202/"
        className="learn-more"
        target="_blank"
        rel="noreferrer"
      >
        Learn More
      </a>
    </section>
  );
};

export default ExpSection;
