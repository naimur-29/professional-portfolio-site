import React from "react";
import { NavLink } from "react-router-dom";

const NavItem = ({
  setIsMenuActive,
  icon,
  context,
  link,
  isNavLink = false,
  isMobile = false,
}) => {
  return isNavLink ? (
    <NavLink
      to={link}
      className={({ isActive }) =>
        isActive
          ? `${
              isMobile
                ? "mobile-nav-items-container active"
                : "nav-items-container active"
            }`
          : `${isMobile ? "mobile-nav-items-container" : "nav-items-container"}`
      }
      onClick={() => setIsMenuActive(false)}
    >
      <div className="icon-container">{icon}</div>
      <div className="link">{context}</div>
    </NavLink>
  ) : (
    <a
      href={link}
      target={"_blank"}
      rel="noreferrer"
      className="nav-items-container"
    >
      <div className="icon-container">{icon}</div>
      <div className="link">{context}</div>
    </a>
  );
};

export default NavItem;
