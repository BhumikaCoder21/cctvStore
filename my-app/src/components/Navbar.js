import React, { useState } from "react";
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
          <a href="#About">About Us</a>
        </li>
        <li>
          <a href="#Services">Our Services</a>
        </li>
        <li className="dropdown">
          <button onClick={toggleDropdown} className="dropdown-toggle">
            Our Products{" "}
            <span className="arrow">{isDropdownOpen ? "▲" : "▼"}</span>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              <li>
                <a href="#IndoorOutdoor">Indoor & Outdoor CCTV Camera</a>
              </li>
              <li>
                <a href="#PTZ">PTZ Camera</a>
              </li>
              <li>
                <a href="#IPCamera">IP Camera</a>
              </li>
              <li>
                <a href="#WirelessCCTV">Wireless CCTV Camera</a>
              </li>
              <li>
                <a href="#VehiclePlate">Vehicle License Plate Reader Camera</a>
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
          <a href="#Contact">Contact Us</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
