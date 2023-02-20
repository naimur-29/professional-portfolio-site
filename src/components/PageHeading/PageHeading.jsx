import React from "react";

import "./PageHeading.css";

const PageHeading = ({ heading, pageName }) => {
  return (
    <section className="main-heading-container">
      <h1 className="page-heading">{pageName}</h1>
      <h2 className="title">
        {heading[0]}
        <span>{heading[1]}</span>
      </h2>
    </section>
  );
};

export default PageHeading;
