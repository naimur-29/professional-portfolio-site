import React from "react";
import { Outlet } from "react-router-dom";

// global components:
import Navigation from "../navigation/Navigation";

const Layout = ({ pageTitle }) => {
  return (
    <section className="layout">
      <Navigation pageTitle={pageTitle} />
      <Outlet />
    </section>
  );
};

export default Layout;
