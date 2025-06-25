import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Component/NavBar/NavBar";
import Hero from "./Component/Hero/Hero";
import About from "./Component/AboutSection/About";

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<About />} /> {/* 👈 Add this line */}
      </Routes>
    </>
  );
};

export default App;
