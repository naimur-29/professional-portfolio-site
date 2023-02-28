import React from "react";

// import style sheets
import "./Item.css";

const Item = ({ icon, date, title, description }) => {
  return (
    <section className="exp-item-container">
      <div className="left">
        <div className="icon-container">{icon}</div>
      </div>
      <div className="right">
        <h3 className="date">{date}</h3>
        <h2 className="title">{title}</h2>
        <article className="description">{description}</article>
      </div>
    </section>
  );
};

export default Item;
