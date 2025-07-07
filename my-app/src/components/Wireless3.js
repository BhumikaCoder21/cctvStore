import React from "react";
import "./Wireless3.css";

function Wireless3() {
  return (
    <div className="ipcamera-section" id="ip-camera">
      <h2 className="ipcamera-heading">
        <span className="green">Wireless CCTV Camera Installation</span>
      </h2>
      <p className="ipcamera-description">
        Wireless cameras from Darpan CCTV Shop give you the freedom to install
        them anywhere with power — no video cables required — while maintaining
        the quality of wired systems. You get multiple recording options like
        continuous, scheduled, or motion-activated recording to a computer, NVR,
        or microSD card. Indoor wireless cameras also include a built-in
        microphone, two-way audio, and Pan-Tilt-Zoom functionality. If you're
        not always available to monitor your system, our wireless IP cameras can
        send instant push notifications or email alerts to your smartphone or
        tablet.
      </p>
      <div className="ipcamera-image-wrapper">
        <img
          src="https://www.cctvcameradelhi.in/images/wireless-cctv-camera-delhi.jpg"
          alt="WiFi IP Cameras"
          className="ipcamera-image"
        />
      </div>
    </div>
  );
}

export default Wireless3;