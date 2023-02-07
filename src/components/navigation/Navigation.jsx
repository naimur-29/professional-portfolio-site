import React from "react";

import "./navigation.css";

// local components:
import NavItem from "./components/NavItem";

// local data:
import { socials, pages } from "./data";

const Navigation = () => {
  return (
    <section className="page-container">
      <section className="social-nav-container">
        {socials.map((item) => (
          <NavItem icon={item.icon} context={item.context} link={item.link} />
        ))}
      </section>

      <section className="page-nav-container">
        {pages.map((item) => (
          <NavItem
            icon={item.icon}
            context={item.context}
            link={item.link}
            isNavLink={true}
          />
        ))}
      </section>
    </section>
  );
};

export default Navigation;
