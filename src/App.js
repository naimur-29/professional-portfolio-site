import React from "react";

import "./App.css";
import "./variables.css";
import "./animations.css";

// pages:
import Home from "./pages/home/home";

const App = () => {
  return (
    <div className="app-container">
      <Home />
    </div>
  );
};

export default App;
