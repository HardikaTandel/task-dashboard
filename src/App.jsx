import React from "react";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import "./index.css";

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Dashboard />
    </div>
  );
}

export default App;
