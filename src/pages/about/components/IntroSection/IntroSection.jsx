import React from "react";

// import style sheet
import "./IntroSection.css";

import { IntroSectionData } from "../../data/IntroSectionData";

// import icons
import { ImDownload2 } from "react-icons/im";

const IntroSection = () => {
  return (
    <section className="intro-section-container">
      <div className="left">
        <h3 className="heading">{IntroSectionData.left.heading}</h3>

        <article className="description">
          {IntroSectionData.left.description}
        </article>

        <div className="btn-container">
          <button className="btn">
            <span>Download CV</span>
            <div className="icon-container">
              <ImDownload2 className="icon" />
            </div>
          </button>
        </div>
      </div>

      <div className="right">
        <div className="top">
          <div className="container">
            <h3 className="amount">
              <span>{IntroSectionData.right.top.totalExpYears}</span>+
            </h3>
            <div className="context">
              <div className="line"></div>
              <div className="text">Years Of Experience</div>
            </div>
          </div>

          <div className="container">
            <h3 className="amount">
              <span>{IntroSectionData.right.top.totalToolsUsed}</span>+
            </h3>
            <div className="context">
              <div className="line"></div>
              <div className="text">Technologies Used</div>
            </div>
          </div>
        </div>

        <div className="bottom">
          <div className="container">
            <div className="inner-container">
              <h3 className="label">Name:</h3>
              <p className="context">{IntroSectionData.right.bottom.name}</p>
            </div>

            <div className="inner-container">
              <h3 className="label">Languages:</h3>
              <p className="context">
                {IntroSectionData.right.bottom.languages}
              </p>
            </div>

            <div className="inner-container">
              <h3 className="label">Freelancing:</h3>
              <p className="context">
                {IntroSectionData.right.bottom.freelancing}
              </p>
            </div>
          </div>

          <div className="container">
            <div className="inner-container">
              <h3 className="label">Location:</h3>
              <p className="context">
                {IntroSectionData.right.bottom.location}
              </p>
            </div>

            <div className="inner-container">
              <h3 className="label">Phone:</h3>
              <p className="context">{IntroSectionData.right.bottom.phone}</p>
            </div>

            <div className="inner-container">
              <h3 className="label">Email:</h3>
              <p className="context">{IntroSectionData.right.bottom.email}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
