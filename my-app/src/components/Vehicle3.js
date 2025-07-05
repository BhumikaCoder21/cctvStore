import React from "react";
import "./Vehicle3.css";

function Vehicle3() {
  return (
    <div className="ipcamera-section" id="ip-camera">
      <h2 className="ipcamera-heading">
        <span className="green">How LPR CCTV Camera Works</span>
      </h2>
      <p className="ipcamera-description">
        License plate recognition works when your camera captures video of a
        vehicle's license plate and then either stores it for later review or
        runs the image through video analytics software to compare it to a
        database of stored license plate numbers. If your database finds a
        match, your system can be set up to send you alerts. These alerts can be
        sent to your email or mobile phone, allowing you to know instantly, from
        anywhere, if your system finds something.
      </p>
      <div className="ipcamera-image-wrapper">
        <img
          src="https://www.cctvcameradelhi.in/images/vehicle-number-plate-reader-camera-delhi.jpg"
          alt="WiFi IP Cameras"
          className="ipcamera-image"
        />
      </div>
    </div>
  );
}

export default Vehicle3;