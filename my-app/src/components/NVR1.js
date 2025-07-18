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
        <h1>Network Video Recorder (NVR)</h1>
        <h5>
          Full HD 1080P Digital Video Recording System and Access Your System
          From Any Internet Connected Device 24/7
        </h5>
      </div>
    </div>
  );
}

export default Service1;
