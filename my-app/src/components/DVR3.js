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

      {/* Additional section with paragraph on left and image on right */}
      <div className="dvr3-container reverse">
        <div className="dvr3-image">
          <img
            src="https://www.cctvcameradelhi.in/images/Digital-Video-Recorder.jpg" // You can change this too
            alt="DVR System"
          />
        </div>
        <div className="dvr3-text">
          <h3 className="dvr3-subheading">DVR System Benefits</h3>
          <ul className="dvr3-list">
            <li>Easy installation and scalability</li>
            <li>Lower cost compared to NVR systems</li>
            <li>Reliable offline recording</li>
            <li>Supports analog and hybrid systems</li>
            <li>Remote playback via mobile apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default DVR3;
