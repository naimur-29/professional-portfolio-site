import React from "react";

// importing stylesheets:
import "./TechStackList.css";

const TechStackList = ({ title = "Tech Stack", itemList = [] }) => {
  return (
    <div className="content-container">
      <h3 className="title">{title}</h3>
      <div className="item-container">
        {itemList?.map(({ img, label, bgColor }, key) => (
          <div className="item" key={key} style={{ backgroundColor: bgColor }}>
            <img src={img} alt="" className="icon" />
            <span className="label">{label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStackList;
