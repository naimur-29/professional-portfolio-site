import React from "react";

import "./home.css";

// local components:
import NavItem from "./components/NavItem";

// local data:
import { socials, pages } from "./data";

const home = () => {
  return (
    <section className="homepage-container">
      <section className="social-nav-container">
        {socials.map((item) => (
          <NavItem icon={item.icon} context={item.context} />
        ))}
      </section>

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

        <button className="btn paragraph">
          <span className="highlighted">Get In Touch</span>
        </button>
      </main>

      <section className="page-nav-container">
        {pages.map((item) => (
          <NavItem icon={item.icon} context={item.context} />
        ))}
      </section>
    </section>
  );
};

export default home;
