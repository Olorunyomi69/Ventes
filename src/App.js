import React, { useState, useEffect } from "react";

import Dashboard from "./pages/dashboard/Dashboard";
import "./App.css";
import { Sidebar } from "./components";

const App = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 500);
  }, []);

  if (loading) {
    return (
      <div className="loading">
        <div className="dots-container">
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    );
  } else
    return (
      <div className="App">
        <Sidebar />
        <Dashboard />
      </div>
    );
};

export default App;
