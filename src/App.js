import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./Components/LoginPage";
import Dashboard from "./Components/Dashboard";
import { Data } from "./Components/Data";
import { Manual } from "./Components/Manual";
import { Process } from "./Components/Process";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/data" element={<Data />} />
        <Route path="/manual" element={<Manual />} />
        <Route path="/process" element={<Process />} />
      </Routes>
    </Router>
  );
}

export default App;
