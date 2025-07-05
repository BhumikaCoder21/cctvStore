import React from "react";
import "./Bio1.css";

function Bio1() {
  return (
    <div>
      {/* Banner Section */}
      <div className="cctv-banner">
        <img
          src="https://www.cctvcameradelhi.in/images/service=-page-header.jpg"
          alt="CCTV Banner"
          className="banner-background"
        />
        <div className="banner-content">
          <h1>Biometric Attendance Machine</h1>
          <p>
            We offer an amazing line of Biometric Devices ranging from
            Fingerprint Attendance System to Access Control.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Bio1;
