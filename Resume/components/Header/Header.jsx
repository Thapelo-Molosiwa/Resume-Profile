import React, { useState } from "react";
import "../Header/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="blow">
      <div className="myName">
        <Link to="/">Home</Link>
      </div>

      <div
        className={`burger-menu ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
        <ul className="myList">
          <li className="navItem">
            <Link to="/about">About</Link>
          </li>
          <li className="navItem">
            <Link to="/skills">Skills</Link>
          </li>
          <li className="navItem">
            <Link to="/education">Education</Link>
          </li>
          <li className="navItem">
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
