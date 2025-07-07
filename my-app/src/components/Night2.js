import React from "react";
import "./Night2.css";

function Night2() {
  return (
    <div className="ipcamera-section" id="ip-camera">
      <h2 className="ipcamera-heading" style={{ color: "#2e7d32" }}>
        <span className="green">Long Range Security CCTV Camera</span>
      </h2>
      <p className="ipcamera-description">
        <b>
          We offer our customers latest premium quality Long Range CCTV Camera
          at Best Price.
        </b>
        At Darpan CCTV, we provide accurate and cost-effective solutions for
        Vehicle License Plate Reader (LPR) Cameras — ideal for monitoring
        slow-moving vehicles at entry and exit gates of housing societies,
        parking lots, and commercial premises. These cameras are equipped with
        the latest IR LED technology, enabling them to read number plates even
        in pitch-dark conditions. With a high resolution of 700 TVL and features
        like BLC, OSD, AWC, HLC, and AGC, they ensure superior performance in
        varying lighting environments. If you're looking for a reliable outdoor
        security camera with exceptional night vision, this is the perfect
        choice. Powered by a 2MP Sony Image Sensor, it delivers crisp, clear
        footage — significantly better than standard analog cameras.
      </p>
      <div className="ipcamera-image-wrapper">
        <img
          src="https://www.cctvcameradelhi.in/images/Night-Vision-Range-100-Meters.jpg"
          alt="LPR Camera 1"
          className="ipcamera-image"
        />
        <img
          src="https://www.cctvcameradelhi.in/images/Night-Vision-Range-150-Meters.jpg"
          alt="LPR Camera 2"
          className="ipcamera-image"
        />
      </div>
    </div>
  );
}

export default Night2;
