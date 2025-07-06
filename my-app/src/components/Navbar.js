import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
    setIsNavOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>DarpanCCTV</h1>
      <div className="hamburger" onClick={toggleNav}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={`navbar-links${isNavOpen ? " open" : ""}`}>
        <li>
          <Link to="/" onClick={closeDropdown}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" onClick={closeDropdown}>
            About Us
          </Link>
        </li>
        <li>
          <Link to="/services" onClick={closeDropdown}>
            Our Services
          </Link>
        </li>
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            Our Products{" "}
            <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/indoor-outdoor" onClick={closeDropdown}>
                  Indoor & Outdoor CCTV
                </Link>
              </li>
              <li>
                <Link to="/ptz" onClick={closeDropdown}>
                  PTZ Camera
                </Link>
              </li>
              <li>
                <Link to="/ipCamera" onClick={closeDropdown}>
                  IP Camera
                </Link>
              </li>
              <li>
                <Link to="/wireless" onClick={closeDropdown}>
                  Wireless CCTV Camera
                </Link>
              </li>
              <li>
                <Link to="/vehicle" onClick={closeDropdown}>
                  Vehicle License Plate Reader Camera
                </Link>
              </li>
              <li>
                <Link to="/night" onClick={closeDropdown}>
                  Long Range Night Vision CCTV Camera
                </Link>
              </li>
              <li>
                <Link to="/dvr" onClick={closeDropdown}>
                  Digital Video Recorder (DVR)
                </Link>
              </li>
              <li>
                <Link to="/nvr" onClick={closeDropdown}>
                  Network Video Recorder (NVR)
                </Link>
              </li>
              <li>
                <Link to="/bio" onClick={closeDropdown}>
                  Biometric Fingerprint Reader
                </Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="/contact" onClick={closeDropdown}>
            Contact Us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
