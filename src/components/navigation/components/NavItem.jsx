import React from "react";
import { Link } from "react-router-dom";

const NavItem = ({ icon, context, link, isNavLink }) => {
  return isNavLink ? (
    <Link to={link} className="nav-items-container">
      <div className="icon-container">{icon}</div>
      <div className="link">{context}</div>
    </Link>
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
