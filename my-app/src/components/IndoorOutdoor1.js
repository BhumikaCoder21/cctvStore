// components/IndoorOutdoor1.js
import React from "react";
import "./IndoorOutdoor1.css";

function IndoorOutdoor1() {
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
          <h1>CCTV CAMERA DELHI</h1>
          <p>
            Best Prices For Installations CCTV Camera & Security System
            Installations
          </p>

        </div>
      </div>

      {/* Info Section */}
      <div className="cctv-info-section">
        <h2>
          <span className="highlight-green">CCTV</span> CAMERA INSTALLATIONS
          DELHI
        </h2>
        <p className="subtitle">
          We offer our customers latest premium quality Indoor & Outdoor CCTV
          Cameras at Best Price.
        </p>
        <p className="description">
          We offer our customers latest premium quality CCTV Cameras
          Installations at Best Price in Delhi with installation, after-sales
          service, & support. Contact for latest price list. Our product list
          includes all types of HD CCTV Cameras, HD DVRs, Mobile DVRs for
          Vehicles like Buses & Trucks, Vehicle License Plate Reader CCTV
          Camera, Long Range Night Vision CCTV Camera, 1.0, 1.3, 2.0, 3.0
          Megapixel IP Cameras, NVR, & Wireless CCTV Camera. We offer best deal
          on latest CCTV Cameras.
        </p>
      </div>
    </div>
  );
}

export default IndoorOutdoor1;
