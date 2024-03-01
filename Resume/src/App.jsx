import React from "react";
import Header from "../components/Header/Header";
import "../src/index.css";
import { Routes, Route } from "react-router-dom";
import Contact from "../components/pages/contact/Contact";
import Home from "../components/pages/home/Home";
import Skills from "../components/pages/skills/Skills";
import Education from "../components/pages/education/Education";


function App() {
  return (
    <div>
      <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
         <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/education" element={<Education />} />
        </Routes>
      </>
    </div>
  );
}

export default App;
