import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({
  setIsMenuActive, // function to update menu state in mobile view
  icon, // icon component for the navigation item
  context, // text for the navigation item
  link, // URL for the navigation item
  isNavLink = false, // flag to indicate whether the item is a navigation link or a regular link
  isMobile = false, // flag to indicate whether the item is in mobile view
}) => {
  return isNavLink ? ( // if it's a navigation link
    <NavLink
      to={link}
      className={(
        { isActive } // dynamically set class name based on whether the link is active
      ) =>
        isActive
          ? `${
              isMobile
                ? "mobile-nav-items-container active"
                : "nav-items-container active"
            }`
          : `${isMobile ? "mobile-nav-items-container" : "nav-items-container"}`
      }
      onClick={() => {
        // function to close menu in mobile view when the link is clicked
        setIsMenuActive(false);
      }}
    >
      {/* icon for the navigation link */}
      <div className="icon-container">{icon}</div>
      {/* text for the navigation link */}
      <div className="link">{context}</div>
    </NavLink>
  ) : (
    // if it's a regular link
    <a
      href={link}
      target={"_blank"} // open link in a new tab
      rel="noreferrer" // disable referrer information to improve security
      className="nav-items-container"
    >
      {/* icon for the link */}
      <div className="icon-container">{icon}</div>
      {/* text for the link */}
      <div className="link">{context}</div>
    </a>
  );
};

export default NavItem;
