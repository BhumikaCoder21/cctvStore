import React from "react";
import "./IndoorOutdoor3.css";

function IndoorOutdoor3() {
  return (
    <div
      className="security-banner"
      style={{
        backgroundImage: `url("https://www.cctvcameradelhi.in/images/call-us-bg.jpg")`,
      }}
    >
      <div className="security-banner-content">
        <h2>PREMIUM QUALITY CCTV CAMERA SOLUTION FOR ALL AROUND SECURITY</h2>
        <p>
          We are a trusted name in delivering complete security solutions.
          Because when it comes to protection, some things are not optional—
          <b>security</b> is one of them.
        </p>
        <a href="tel:+91 9973431660" className="call-button">
          📞 +91 9973431660
        </a>
      </div>
    </div>
  );
}

export default IndoorOutdoor3;
