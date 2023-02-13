import React from "react";

import "./home.css";

const Home = () => {
  return (
    <section className="homePage-container">
      <main className="main-container">
        <p className="paragraph">
          <span className="highlighted">Hi, my name is</span>
        </p>

        <div className="headings">
          <h1 className="heading">Naimur Rahman.</h1>

          <h2 className="heading faded">I build things for the web.</h2>
        </div>

        <article className="paragraph">
          I am a Full Stack Developer specializing in building beautiful UX/UI
          designs that deliver exceptional digital experiences. Currently, I'm
          focused on building beautiful designs at{" "}
          <span className="highlighted">SnapAP</span>.
        </article>

        <div className="paragraph">
          <button className="btn">
            <span className="highlighted">Get In Touch</span>
          </button>
        </div>
      </main>
    </section>
  );
};

export default Home;
