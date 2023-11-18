import React from "react";
import "../Header/header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="blow">
      <div className="myName">
        <Link to="/">Home</Link>
      </div>

      <ul className="myList">
        <li className="navItem">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="navItem">
          <Link to="/tester">Tester</Link>
        </li>
        <li className="navItem">
          <Link to="/education">Education</Link>
        </li>
        <li className="navItem">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
