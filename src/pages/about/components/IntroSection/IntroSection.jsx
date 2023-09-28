import React from "react";
import { motion } from "framer-motion";

// import style sheet
import "./IntroSection.css";

// importing local data:
import { IntroSectionData } from "../../data/IntroSectionData";
import resume from "../../data/resume.pdf";

// import icons
import { ImDownload2 } from "react-icons/im";

// motion variants:
const boxVariants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      type: "just",
      duration: 0.2,
    },
  },
};

const topTextVariants = {
  hidden: {
    y: "5%",
    opacity: 0,
  },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.3,
    },
  },
};

const IntroSection = () => {
  return (
    <section className="intro-section-container">
      <motion.div
        variants={topTextVariants}
        initial="hidden"
        animate="visible"
        className="left"
      >
        <h3 className="heading">{IntroSectionData.left.heading}</h3>

        <article className="description">
          {IntroSectionData.left.description}
        </article>

        <div className="btn-container">
          <button className="btn">
            <a
              style={{ textDecoration: "none", color: "inherit" }}
              href={resume}
              download="Resume of Naimur Rahman"
            >
              Download CV
            </a>
            <div className="icon-container">
              <ImDownload2 className="icon" />
            </div>
          </button>
        </div>
      </motion.div>

      <div className="right">
        <div className="top">
          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            className="container"
          >
            <h3 className="amount">
              <span>{IntroSectionData.right.top.totalExpYears}</span>+
            </h3>
            <div className="context">
              <div className="line"></div>
              <div className="text">Years Of Experience</div>
            </div>
          </motion.div>

          <motion.div
            variants={boxVariants}
            initial="hidden"
            animate="visible"
            className="container"
          >
            <h3 className="amount">
              <span>{IntroSectionData.right.top.totalToolsUsed}</span>+
            </h3>
            <div className="context">
              <div className="line"></div>
              <div className="text">Technologies Used</div>
            </div>
          </motion.div>
        </div>

        <motion.div
          variants={topTextVariants}
          initial="hidden"
          animate="visible"
          className="bottom"
        >
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
        </motion.div>
      </div>
    </section>
  );
};

export default IntroSection;
