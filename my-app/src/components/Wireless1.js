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
        <h1>Wireless CCTV Camera</h1>
        <h5>
          Reliable CCTV Camera & Security System Installations at the Best
          Prices
        </h5>
      </div>
    </div>
  );
}

export default Service1;
