import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h2>Explore</h2>
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
          <h2>Services</h2>
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
          <h2>Contact</h2>
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
          <h2>Stay Updated</h2>
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
        <div className="social-icons">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-twitter"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
