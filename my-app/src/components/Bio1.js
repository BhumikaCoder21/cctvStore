import React from "react";
import "./Services1.css";
import ptzImage from "../assets/contactHead.webp";

function Service1() {
  return (
    <div
      className="security-banner"
      style={{
              backgroundImage: `url(${ptzImage})`,
            }}
    >
      <div className="security-banner-content">
        <h1>Biometric Attendance Machine</h1>
        <h5>
          We offer an amazing line of Biometric Devices ranging from Fingerprint
          Attendance System to Access Control.
        </h5>
      </div>
    </div>
  );
}

export default Service1;
