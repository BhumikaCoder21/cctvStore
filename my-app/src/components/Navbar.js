import React, { useState } from "react";
import { Link } from "react-router-dom";

import "./Navbar.css";
function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="navbar">
      <h1>DarpanCCTV</h1>
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <a href="#About">About Us</a>
        </li>
        <li>
          <Link to="/services">Our Services</Link>
        </li>
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            Our Products{" "}
            <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <Link to="/indoor-outdoor">Indoor & Outdoor CCTV</Link>
              </li>
              <li>
                <Link to="/ptz">PTZ Camera</Link>
              </li>
              <li>
                <Link to="/ipCamera">IP Camera</Link>
              </li>
              <li>
                <Link to="/wireless">Wireless CCTV Camera</Link>
              </li>
              <li>
                <Link to="/vehicle">Vehicle License Plate Reader Camera</Link>
              </li>
              <li>
                <Link to="/night">Long Range Night Vision CCTV Camera</Link>
              </li>
              <li>
                <Link to="/dvr">Digital Video Recorder (DVR)</Link>
              </li>
              <li>
                <Link to="/nvr">Network Video Recorder (NVR)</Link>
              </li>
              <li>
                <Link to="/biometric">Biometric Fingerprint Reader</Link>
              </li>
            </ul>
          )}
        </li>
        <li>
          <a href="#Contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
