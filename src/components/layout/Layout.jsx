import React from "react";
import { Outlet } from "react-router-dom";

// local components:
import Navigation from "../Navigation/Navigation";

// Layout component - this component is used as a wrapper around the application pages
const Layout = ({ pageTitle }) => {
  // The component receives a `pageTitle` prop which is used to set the title of the page
  // The `Navigation` component is used to render the application navigation bar and it receives the `pageTitle` prop as well
  return (
    <section className="layout">
      <Navigation pageTitle={pageTitle} />
      <Outlet />
      {/* The `Outlet` component is a placeholder for the child routes to be rendered */}
    </section>
  );
};

export default Layout;
