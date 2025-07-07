import React from "react";
import "./Wireless3.css";

function IPCamera3() {
  return (
    <div className="ipcamera-section" id="ip-camera">
      <h2 className="ipcamera-heading" style={{ color: "#2e7d32" }}>
        WIFI IP CAMERA
      </h2>
      <p className="ipcamera-description">
        We offer both Wired and WiFi IP Cameras to suit various installation
        environments and user preferences. WiFi IP Cameras connect seamlessly to
        your wireless network, eliminating the need for extensive cabling—making
        them ideal for quick, flexible, and clutter-free installations. Whether
        you need a robust wired setup or the convenience of wireless
        connectivity, we have the right solution for you.
      </p>

      <div className="ipcamera-image-wrapper">
        <img
          src="https://www.cctvcameradelhi.in/images/IP-CAMERA-installation-delhi.jpg"
          alt="WiFi IP Cameras"
          className="ipcamera-image"
        />
      </div>
    </div>
  );
}

export default IPCamera3;
