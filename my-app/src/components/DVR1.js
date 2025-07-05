import React from "react";
import "./DVR1.css";

function DVR1() {
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
          <h1>DVR (Digital Video Recorder)</h1>
          <p>
            Full HD 1080P Digital Video Recording System and Access Your System
            From Any Internet Connected Device 24/7
          </p>
        </div>
      </div>
    </div>
  );
}

export default DVR1;
