import React, { useState } from "react";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

// importing stylesheets:
import "./Navigation.css";

// importing local image source:
import Logo from "../../assets/logo.webp";

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
      <motion.section
        animate={{ x: 0 }}
        initial={{ x: "-100%", y: "-50%" }}
        transition={{ delay: 0.5 }}
        className="social-nav-container"
      >
        {socials.map((item, index) => (
          <NavItem
            key={index}
            icon={item.icon}
            context={item.context}
            link={item.link}
          />
        ))}
      </motion.section>

      {/* Navigation menu for larger screens */}
      <motion.section
        animate={{ x: 0 }}
        initial={{ x: "100%", y: "-50%" }}
        transition={{ delay: 0.5 }}
        className="page-nav-container"
      >
        {pages.map((item, index) => (
          // <NavItem
          //   key={index}
          //   icon={item.icon}
          //   context={item.context}
          //   link={item.link}
          //   isNavLink={true}
          // />

          <NavLink
            key={index}
            to={item.link}
            className={(
              { isActive } // dynamically set class name based on whether the link is active
            ) =>
              isActive
                ? `${"nav-items-container active"}`
                : `${"nav-items-container"}`
            }
            onClick={() => {
              // function to close menu in mobile view when the link is clicked
              setIsMenuActive(false);
            }}
          >
            {/* icon for the navigation link */}
            <div className="icon-container">{item.icon}</div>
            {/* text for the navigation link */}
            <div className="link">{item.context}</div>
          </NavLink>
        ))}
      </motion.section>

      {/* Mobile Navigation bar */}
      <section className="mobile-navbar-container">
        <a href="/" className="logo-container">
          <img className="logo" src={Logo} alt="logo" />
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
