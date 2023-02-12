import React, { useState } from "react";

import "./navigation.css";

// local components:
import NavItem from "./components/NavItem";

// local data:
import { socials, pages } from "./data";
const pagesMobile = [pages[2], ...pages.slice(0, 2), ...pages.slice(3)];

const Navigation = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

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

      <section className="mobile-navbar-container">
        <a href="/" className="logo-container">
          <img
            className="logo"
            src="https://brittanyjonah.com/img/b-logo-small.png"
            alt="logo"
          />
        </a>

        <div
          className="menu-btn"
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <div
          className={
            isMenuActive
              ? "mobile-menu-container active"
              : "mobile-menu-container"
          }
        >
          {pagesMobile.map((item, index) => (
            <NavItem
              setIsMenuActive={setIsMenuActive}
              icon={item.icon}
              context={item.context}
              link={item.link}
              isNavLink={true}
              isMobile={true}
            />
          ))}
        </div>
      </section>
    </section>
  );
};

export default Navigation;
