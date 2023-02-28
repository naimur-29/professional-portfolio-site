import React from "react";

// import style sheet
import "./IntroSection.css";

// import icons
import { ImDownload2 } from "react-icons/im";

const IntroSection = () => {
  return (
    <section className="intro-section-container">
      <div className="left">
        <h3 className="heading">Who Am I?</h3>

        <article className="description">
          A dynamic and bilingual professional with the educational background
          and proven work ethic to guide and support full-stack development,
          UX/UI design, web development, and more. Dedicated leader who is known
          for producing high-quality code, and designs, with the skill set to
          analyze complex information, manage key projects, efficiently resolve
          issues, and deliver outstanding digital experiences. Out-of-the-box
          thinker who is comfortable working in teams or independently to ensure
          solutions consistently meet or exceed business goals. Strong training
          and academic qualifications, including Googles UX/UI Design
          Certificate, Coder Foundry's Code Bootcamp and coursework in Web &
          Mobile Application Development at NBCC.
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
              <span>5</span>+
            </h3>
            <div className="context">
              <div className="line"></div>
              <div className="text">Years Of Experience</div>
            </div>
          </div>

          <div className="container">
            <h3 className="amount">
              <span>50</span>+
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
              <p className="context">Naimur Rahman</p>
            </div>

            <div className="inner-container">
              <h3 className="label">Languages:</h3>
              <p className="context">ENG/BNG/JPN</p>
            </div>

            <div className="inner-container">
              <h3 className="label">Freelancing:</h3>
              <p className="context">Available</p>
            </div>
          </div>

          <div className="container">
            <div className="inner-container">
              <h3 className="label">Location:</h3>
              <p className="context">Gazipur, Bangladesh</p>
            </div>

            <div className="inner-container">
              <h3 className="label">Phone:</h3>
              <p className="context">+8801843034859</p>
            </div>

            <div className="inner-container">
              <h3 className="label">Email:</h3>
              <p className="context">prof.naimur29@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IntroSection;
