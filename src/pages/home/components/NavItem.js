import React from "react";

const NavItem = ({ icon, context }) => {
  return (
    <div className="nav-items-container">
      <div className="icon-container">{icon}</div>
      <a href="/" className="link">
        {context}
      </a>
    </div>
  );
};

export default NavItem;
