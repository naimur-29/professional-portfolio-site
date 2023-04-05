import React, { useState } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// importing stylesheets:
import "./css/App.css";
import "./css/variables.css";
import "./css/animations.css";

// Importing pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

// Importing Global Components
import Layout from "./components/Layout/Layout";
import Firefly from "./components/Firefly/Firefly";

// Define App component
const App = () => {
  // Set the initial state for the page title, using useState hook
  const [pageTitle, setPageTitle] = useState(["Home", " Page"]);

  // get route location information:
  const location = useLocation();

  return (
    // Render main app container
    <section className="app-container">
      {/* Background Animation using css */}
      <Firefly />
      {/* Use BrowserRouter component to set up the router */}
      <AnimatePresence>
        {/* Use Routes component to define the routes */}
        <Routes location={location} key={location.key}>
          {/* Wrap all the routes with the Layout component */}
          <Route path="/" element={<Layout pageTitle={pageTitle} />}>
            {/* Define the Home page route */}
            <Route path="/" element={<Home setPageTitle={setPageTitle} />} />
            {/* Define the About page route */}
            <Route
              path="/about"
              element={<About setPageTitle={setPageTitle} />}
            />
            {/* Define the Projects page route */}
            <Route
              path="/projects"
              element={<Projects setPageTitle={setPageTitle} />}
            />
            {/* Define the Blog page route */}
            <Route
              path="/blog"
              element={<Blog setPageTitle={setPageTitle} />}
            />
            {/* Define the Contact page route */}
            <Route
              path="/contact"
              element={<Contact setPageTitle={setPageTitle} />}
            />

            {/* handling invalid paths */}
            <Route path="*" element={<h1>error 404: page not found!!</h1>} />
          </Route>
        </Routes>
      </AnimatePresence>
    </section>
  );
};

export default App;
