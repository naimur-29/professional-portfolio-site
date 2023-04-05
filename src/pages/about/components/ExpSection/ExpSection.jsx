import React from "react";
import { motion } from "framer-motion";

// import style sheets
import "./ExpSection.css";

// import local components
import Item from "./components/Item/Item";

// import local data
import { Experiences } from "../../data/Experiences";
import { Education } from "../../data/Education";

// motion variants:
const mainSectionVariants = {
  hidden: { y: "5%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.1,
      delay: 0.3,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const ExpSection = () => {
  return (
    <motion.section
      variants={mainSectionVariants}
      initial="hidden"
      animate="visible"
      className="exp-section-container"
    >
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
              count={i + 1}
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
              count={i + 1}
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
    </motion.section>
  );
};

export default ExpSection;
