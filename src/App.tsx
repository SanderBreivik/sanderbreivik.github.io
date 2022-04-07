import React from "react";
import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
function App() {
  return (
    <div className="main-container">
      <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
