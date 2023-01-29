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

      <main className="main-container"></main>

      <section className="page-nav-container">
        {pages.map((item) => (
          <NavItem icon={item.icon} context={item.context} />
        ))}
      </section>
    </section>
  );
};

export default home;
