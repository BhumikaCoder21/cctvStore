import React from "react";
import "./Hero.css";
import backgroundImage from "../assets/hero1.jpg"; // adjust path if your file structure differs

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <h1 className="hero-heading">
        Secure Your Property with <span>DarpanCCTV</span>
      </h1>
      <div className="hero-box">
        <p>
          DarpanCCTV provides top-tier CCTV solutions for residential and
          commercial properties. <strong>Our expert team</strong> ensures
          seamless <strong>installation and maintenance</strong>, giving you
          unparalleled security and peace of mind. Contact us today to learn
          more about our services and how we can help protect what matters the
          most to you.
        </p>
      </div>
    </div>
  );
};

export default Hero;
