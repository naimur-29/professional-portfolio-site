import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/App.css";
import "./css/variables.css";
import "./css/animations.css";

// Import pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

// Import components
import Layout from "./components/layout/Layout";

// Define App component
const App = () => {
  // Set the initial state for the page title, using useState hook
  const [pageTitle, setPageTitle] = useState(["Home", " Page"]);

  return (
    // Render main app container
    <section className="app-container">
      {/* Use BrowserRouter component to set up the router */}
      <Router>
        {/* Use Routes component to define the routes */}
        <Routes>
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
          </Route>
        </Routes>
      </Router>
    </section>
  );
};

export default App;
