import React from "react";
import "./IPCamera3.css";

function IPCamera3() {
  return (
    <div className="ipcamera-section" id="ip-camera">
      <h2 className="ipcamera-heading">
        <span className="green">WIFI IP</span> CAMERA
      </h2>
      <p className="ipcamera-description">
        There are Wired and WiFi IP Cameras available. WiFi IP Cameras can be
        connected to the WiFi System making them Wireless IP Camera. Call us for
        more information or installation of IP Camera.
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
