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
          <Link to="#About">About Us</Link>
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
                <a href="#NightVision">Long Range Night Vision CCTV Camera</a>
              </li>
              <li>
                <a href="#DVR">Digital Video Recorder (DVR)</a>
              </li>
              <li>
                <a href="#NVR">Network Video Recorder (NVR)</a>
              </li>
              <li>
                <a href="#Fingerprint">Biometric Fingerprint Reader</a>
              </li>
            </ul>
          )}
        </li>
        <li>
          <Link to="#Contact">Contact Us</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
