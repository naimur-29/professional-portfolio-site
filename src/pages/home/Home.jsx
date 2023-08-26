import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

import "./Home.css";

// motion variants:
const mainSectionVariants = {
  hidden: { y: "5%", opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.75,
      type: "tween",
    },
  },
};

const Home = ({ setPageTitle }) => {
  // Using the useNavigate hook to navigate to other pages
  const navigate = useNavigate();

  useEffect(() => {
    // Setting the page title
    setPageTitle(["Home", " Page"]);
    window.scrollTo(0, 0);
  }, [setPageTitle]);

  return (
    // Section for the home page
    <section className="homePage-container">
      <motion.main
        variants={mainSectionVariants}
        initial="hidden"
        animate="visible"
        className="main-container"
      >
        <p className="paragraph">
          <span className="highlighted">Hi, my name is</span>
        </p>

        {/* Container for the headings */}
        <div className="headings">
          <h1 className="heading">Naimur Rahman.</h1>

          <h2 className="heading faded">I build things for the web.</h2>
        </div>

        <article className="paragraph">
          <span className="highlighted">
            Experienced Web Developer and JavaScript Engineer.
          </span>{" "}
          Proficient in React.js, HTML, CSS, SASS, Tailwind CSS, FastAPI.
          Passionate about machine learning and data analysis. Let's create
          exceptional websites together.
          {/* Highlighting the company name */}
          {/* <span className="highlighted">SnapAP</span>. */}
        </article>

        <div
          className="paragraph"
          // Clicking the button will navigate to the contact page
          onClick={() => {
            navigate("contact");
            // Updating the page title
            setPageTitle(["Get In", " Touch"]);
          }}
        >
          {/* Button to navigate to the contact page */}
          <button className="btn">
            <span className="highlighted">Get In Touch</span>
          </button>
        </div>
      </motion.main>
    </section>
  );
};

export default Home;
