import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
          <h1>Secure Your Property with DarpanCCTV</h1>
    <p>
        DarpanCCTV provides top-tier CCTV solutions for residential and
        commercial properties. Our expert team ensures seamless installation and
        maintenance, giving you unparalleled security and peace of mind.Contact us
        today to learn more about our services and how we can help protect what matters 
        most to you.      
      </p>
      <div className="cta">
        <input type="email" placeholder="Enter your email" />
        <button>Sign Up</button>
      </div>
    </section>
  );
}

export default Hero;
