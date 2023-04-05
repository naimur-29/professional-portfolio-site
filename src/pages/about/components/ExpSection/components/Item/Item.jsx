import React from "react";
import { motion } from "framer-motion";

// import style sheets
import "./Item.css";

// motion variants:
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

const Item = ({ icon, date, title, description }) => {
  return (
    <motion.section variants={zoomIn} className="exp-item-container">
      <div className="left">
        <div className="icon-container">{icon}</div>
      </div>
      <div className="right">
        <h3 className="date">{date}</h3>
        <h2 className="title">{title}</h2>
        <article className="description">{description}</article>
      </div>
    </motion.section>
  );
};

export default Item;
