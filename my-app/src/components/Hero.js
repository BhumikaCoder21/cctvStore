import React from "react";
import "./Hero.css";

const backgroundImageUrl =
  "https://www.securitastechnology.com/sites/securitastechnology.com/files/media/2022-01/Modern%20CCTV%20camera%20on%20a%20wall.jpg";

const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
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
          more about our services and how we can help protect what matters most to you.
         </p>
      </div>
    </div>
  );
};

export default Hero;
