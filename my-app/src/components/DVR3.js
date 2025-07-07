import React from "react";
import "./DVR3.css";

function DVR3() {
  return (
    <div className="dvr3-section">
      <div className="dvr3-container">
        {/* Left side: Text */}
        <div className="dvr3-text">
          <h2 className="dvr3-heading">
            DVR <span>(Digital Video Recorder)</span> Features & Benefits
          </h2>
          <h3 className="dvr3-subheading">DVR System Features</h3>
          <ul className="dvr3-list">
            <li>Crystal Clear 1080P Video Footage</li>
            <li>Wireless Remote Monitoring</li>
            <li>Wireless System Access</li>
            <li>Advanced Mobile App</li>
            <li>Lifetime Technical Support</li>
            <li>System Status Alerts</li>
            <li>System Health Monitoring</li>
            <li>Automatic Video Data Back-ups</li>
            <li>System Requests Service When Needed</li>
            <li>DVR Theft Alerts</li>
            <li>Unlimited Lifetime Video Data Storage</li>
            <li>Motion Alerts & Detection</li>
          </ul>
        </div>

        {/* Right side: Image */}
        <div className="dvr3-image">
          <img
            src="https://www.cctvcameradelhi.in/images/dvr-for-cctv.jpg" // Replace with your actual image URL if needed
            alt="DVR Features"
          />
        </div>
      </div>
      {/* End of first dvr3-container */}
    </div>
  );
}

export default DVR3;
