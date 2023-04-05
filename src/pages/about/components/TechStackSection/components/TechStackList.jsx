import React from "react";
import { motion } from "framer-motion";

// importing stylesheets:
import "./TechStackList.css";

// motion variants:
const mainSectionVariants = {
  hidden: { y: "5%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.1,
      delay: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
};

const zoomIn = {
  hidden: { y: "-5%", scale: 0.7, opacity: 0 },
  visible: {
    y: "0%",
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      damping: 8,
    },
  },
};

const TechStackList = ({ title = "Tech Stack", itemList = [] }) => {
  return (
    <motion.div
      variants={mainSectionVariants}
      initial="hidden"
      animate="visible"
      className="content-container"
    >
      <h3 className="title">{title}</h3>
      <div className="item-container">
        {itemList?.map(({ img, label, bgColor }, key) => (
          <motion.div
            variants={zoomIn}
            className="item"
            key={key}
            style={{ backgroundColor: bgColor }}
          >
            <img src={img} alt="" className="icon" />
            <span className="label">{label}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default TechStackList;
