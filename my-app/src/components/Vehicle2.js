import React from "react";
import "./Vehicle2.css";
import vehicle from "../assets/vehicle2.jpg";

function Vehicle2() {
  return (
    <div className="ptz-section" id="ptz">
      <h2 className="ptz-heading" style={{ color: "#2e7d32" }}>
        <span className="green">Vehicle License Plate Reader CCTV Camera</span>
      </h2>
      <p className="ptz-subheading">
        We offer our customers latest premium quality Vehicle License Plate
        Reader CCTV Camera at Best Price.
      </p>

      <div className="ptz-content">
        <div className="ptz-image">
          <img
            src={vehicle}
            alt="Wireless Cameras"
          />
        </div>
        <div className="ptz-text">
          <p>
            At Darpan CCTV Shop, we provide accurate and cost-effective
            solutions for Vehicle License Plate Reader (LPR) Cameras. These
            cameras are ideal for monitoring slow-moving vehicles at the entry
            and exit points of housing societies, commercial buildings, and
            parking lots. <br />
            Our LPR cameras are equipped with advanced IR LEDs to capture
            license plates even in pitch-dark conditions, and feature
            high-resolution sensors (700 TVL) along with BLC, OSD, AWC, HLC, and
            AGC technologies. Designing a surveillance system for license plate
            recognition requires more technical precision than a typical
            security setup. We're here to assist you in planning the right
            system and offer lifetime technical support post-installation.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vehicle2;
