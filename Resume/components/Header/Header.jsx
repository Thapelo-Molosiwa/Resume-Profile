import React, { useState } from "react";
import "../Header/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <header className="blow">
      <div className="myName">
        <Link to="/" onClick={closeMenu}>
          Home
        </Link>
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
            <Link to="/about" onClick={closeMenu}>
              About
            </Link>
          </li>
          <li className="navItem">
            <Link to="/skills" onClick={closeMenu}>
              Skills
            </Link>
          </li>
          <li className="navItem">
            <Link to="/education" onClick={closeMenu}>
              Education
            </Link>
          </li>
          <li className="navItem">
            <Link to="/contact" onClick={closeMenu}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
