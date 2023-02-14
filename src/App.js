import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./css/App.css";
import "./css/variables.css";
import "./css/animations.css";

// pages:
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Projects from "./pages/projects/Projects";
import Blog from "./pages/blog/Blog";
import Contact from "./pages/contact/Contact";

// Global Components:
import Layout from "./components/layout/Layout";

const App = () => {
  const [pageTitle, setPageTitle] = useState(["Home", " Page"]);

  return (
    <section className="app-container">
      <Router>
        <Routes>
          <Route path="/" element={<Layout pageTitle={pageTitle} />}>
            <Route path="/" element={<Home setPageTitle={setPageTitle} />} />
            <Route
              path="/about"
              element={<About setPageTitle={setPageTitle} />}
            />
            <Route
              path="/projects"
              element={<Projects setPageTitle={setPageTitle} />}
            />
            <Route
              path="/blog"
              element={<Blog setPageTitle={setPageTitle} />}
            />
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
