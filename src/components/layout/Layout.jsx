import React from "react";
import { Outlet } from "react-router-dom";

// global components:
import Navigation from "../navigation/Navigation";

const Layout = () => {
  return (
    <section className="layout">
      <Navigation />
      <Outlet />
    </section>
  );
};

export default Layout;
