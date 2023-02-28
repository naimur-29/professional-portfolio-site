import React from "react";

// import style sheets
import "./ExpSection.css";

// import local components
import Item from "./components/Item/Item";

// import local data
import { Education } from "../../data/Education";
import { Experience } from "../../data/Experience";

const ExpSection = () => {
  return (
    <section className="exp-section-container">
      <h2 className="section-heading">Experience & Education</h2>

      <div className="exp-content-container">
        <div className="left">
          {Education.map((ele) => (
            <Item
              icon={ele.icon}
              date={ele.date}
              title={ele.title}
              description={ele.description}
            />
          ))}
        </div>

        <div className="right">
          {Experience.map((ele) => (
            <Item
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
