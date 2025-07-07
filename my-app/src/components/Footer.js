import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";
import { FaEnvelope, FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        {/* Our Products */}
        <div className="footer-column">
          <h3>Our Products</h3>
          <ul>
            <li>
              <Link to="/indoor-outdoor">
                <span>&#8250;</span> Indoor & Outdoor CCTV Camera
              </Link>
            </li>
            <li>
              <Link to="/ptz">
                <span>&#8250;</span> PTZ Camera
              </Link>
            </li>
            <li>
              <Link to="/ipCamera">
                <span>&#8250;</span> IP Camera
              </Link>
            </li>
            <li>
              <Link to="/wireless">
                <span>&#8250;</span> Wireless CCTV Camera
              </Link>
            </li>
            <li>
              <Link to="/vehicle">
                <span>&#8250;</span> Vehicle License Plate Reader Camera
              </Link>
            </li>
            <li>
              <Link to="/night">
                <span>&#8250;</span> Long Range Night Vision CCTV Camera
              </Link>
            </li>
            <li>
              <Link to="/dvr">
                <span>&#8250;</span> Digital Video Recorder (DVR)
              </Link>
            </li>
            <li>
              <Link to="/nvr">
                <span>&#8250;</span> Network Video Recorder (NVR)
              </Link>
            </li>
            <li>
              <Link to="/bio">
                <span>&#8250;</span> Biometric Fingerprint Reader
              </Link>
            </li>
          </ul>
        </div>

        {/* Industry Solutions */}
        <div className="footer-column" id="second">
          <h3>Our Services</h3>
          <ul>
            <li>CCTV Camera Installation</li>
            <li>CCTV Camera AMC</li>
            <li>Biometric Fingerprint Reader</li>
            <li>IP Intelligent Video Door Phone</li>
            <li>EPABX System</li>
          </ul>
        </div>

        {/* Quick Links */}
        <div className="footer-column">
          <h3>Quick Link</h3>
          <ul>
            <li>
              <Link to="/">
                <span>&#8250;</span> Home
              </Link>
            </li>

            <li>
              <Link to="/services">
                <span>&#8250;</span> Our Services
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-column">
          <h3>Our Company</h3>
          <ul>
            <li>
              <a href="/about">
                <span>&#8250;</span> About Us
              </a>
            </li>
            <li>
              <Link to="/contact">
                <span>&#8250;</span> Contact Us
              </Link>
            </li>
          </ul>
          <div className="contact-info">
            <p>
              <FaEnvelope /> rtpscounter12@gmail.com
            </p>
            <p>
              <FaPhoneAlt /> +91 9973431660
            </p>
            <p>
              <FaWhatsapp /> +91 9973431660
            </p>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© 2025@darpancctv.com All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
