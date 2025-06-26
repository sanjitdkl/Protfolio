import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavBar/NavBar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/AboutSection/About";
import Project from "./Component/Projectes/Project";

const App = () => {
  return (
    <>
      <Navbar />
      <Project />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
};

export default App;
