import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import "./home.css";

const Home = ({ setPageTitle }) => {
  // Using the useNavigate hook to navigate to other pages
  const navigate = useNavigate();

  useEffect(() => {
    // Setting the page title
    setPageTitle(["Home", " Page"]);
  }, [setPageTitle]);

  return (
    // Section for the home page
    <section className="homePage-container">
      <main className="main-container">
        <p className="paragraph">
          <span className="highlighted">Hi, my name is</span>
        </p>

        {/* Container for the headings */}
        <div className="headings">
          <h1 className="heading">Naimur Rahman.</h1>

          <h2 className="heading faded">I build things for the web.</h2>
        </div>

        <article className="paragraph">
          I am a Full Stack Developer specializing in building beautiful UX/UI
          designs that deliver exceptional digital experiences. Currently, I'm
          focused on building beautiful designs at{" "}
          {/* Highlighting the company name */}
          <span className="highlighted">SnapAP</span>.
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
      </main>
    </section>
  );
};

export default Home;
