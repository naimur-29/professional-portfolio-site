import React, { useState } from "react";

// importing stylesheets:
import "./Navigation.css";

// import local components
import NavItem from "./components/NavItem";

// import local data
import { socials, pages } from "./data";

// Create a list of pages for mobile view
const pagesMobile = [pages[2], ...pages.slice(0, 2), ...pages.slice(3)];

const Navigation = ({ pageTitle }) => {
  // Create a state variable to manage mobile menu activation
  const [isMenuActive, setIsMenuActive] = useState(false);

  return (
    <section className="page-container">
      {/* Social media links */}
      <section className="social-nav-container">
        {socials.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            context={item.context}
            link={item.link}
          />
        ))}
      </section>
      {/* Navigation menu for larger screens */}
      <section className="page-nav-container">
        {pages.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            context={item.context}
            link={item.link}
            isNavLink={true}
          />
        ))}
      </section>
      {/* Mobile Navigation bar */}
      <section className="mobile-navbar-container">
        <a href="/" className="logo-container">
          <img
            className="logo"
            src="https://brittanyjonah.com/img/b-logo-small.png"
            alt="logo"
          />
        </a>

        {/* Page title */}
        <div className="title">
          <h3 className="title-content">
            {pageTitle[0]}
            <span>{pageTitle[1]}</span>
          </h3>
        </div>

        {/* Mobile menu toggle button */}
        <div
          className={isMenuActive ? "menu-btn active" : "menu-btn"}
          onClick={() => setIsMenuActive(!isMenuActive)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        {/* Mobile menu */}
        <div
          className={
            isMenuActive
              ? "mobile-menu-container active"
              : "mobile-menu-container"
          }
        >
          {pagesMobile.map((item, index) => (
            <NavItem
              key={index}
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

// Export the Navigation component as default
export default Navigation;
