import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <h1>DarpanCCTV</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/" onClick={closeDropdown}>
            Home
          </Link>
        </li>
        <li>
          <a href="#About" onClick={closeDropdown}>
            About Us
          </a>
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
          <a href="#Contact" onClick={closeDropdown}>
            Contact Us
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
