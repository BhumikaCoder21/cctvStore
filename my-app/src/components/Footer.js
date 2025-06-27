import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h3>Explore</h3>
          <ul>
            <li>
              <a href="#">Residential Solutions</a>
            </li>
            <li>
              <a href="#">Commercial Solutions</a>
            </li>
            <li>
              <a href="#">Contact Us</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="#">CCTV Installation</a>
            </li>
            <li>
              <a href="#">CCTV Maintenance</a>
            </li>
            <li>
              <a href="#">System Upgrades</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Contact</h3>
          <ul>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Sales</a>
            </li>
          </ul>
        </div>
        <div className="footer-column newsletter">
          <h3>Stay Updated</h3>
          <p>Subscribe to our newsletter for the latest news and updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" />
            <button type="submit">Subscribe</button>
          </form>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 DarpanCCTV. All rights reserved.</p>
        <div className="footer-links">
          <a href="#">Terms and Conditions</a>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
