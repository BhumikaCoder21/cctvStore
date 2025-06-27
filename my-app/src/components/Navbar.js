import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h1>DarpanCCTV</h1>
      <ul>
        <li>
          <a href="#home">DarpanCCTV</a>
        </li>
        <li>
          <a href="#residential">Residential Solutions</a>
        </li>
        <li>
          <a href="#commercial">Commercial Solutions</a>
        </li>
        <li>
          <a href="#contact">Contact Us</a>
        </li>
      </ul>
      <button className="get-started">Get Started</button>
    </nav>
  );
}

export default Navbar;
