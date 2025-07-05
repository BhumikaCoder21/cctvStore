import React from "react";
import "./NVR1.css";

function NVR1() {
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
          <h1>Network Video Recorder (NVR)</h1>
          <p>
            Full HD 1080P Network Video Recording System and Access Your System
            From Any Internet Connected Device 24/7
          </p>
        </div>
      </div>
    </div>
  );
}

export default NVR1;
