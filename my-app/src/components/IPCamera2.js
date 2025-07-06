import React from "react";
import "./IPCamera2.css";

function IPCamera2() {
  return (
    <div className="ptz-section" id="ptz">
      <h2 className="ptz-heading">IP CCTV Camera</h2>
      <p className="ptz-subheading">
        We offer our customers latest premium quality IP CCTV Cameras at Best
        Price.
      </p>

      <div className="ptz-content">
        <div className="ptz-image">
          <img
            src="https://www.cctvcameradelhi.in/images/ip-camera-delhi.jpg"
            alt="PTZ CCTV Cameras"
          />
        </div>
        <div className="ptz-text">
          <p>
            We offer the latest range of high-quality Branded Megapixel IP
            Cameras, including WiFi Wireless IP Cameras in various resolutions—1
            MP, 1.3 MP, 2 MP, 3 MP, and 5 MP—tailored to suit diverse
            surveillance needs.An IP Camera (also known as a Network Camera)
            integrates both a camera and a computer in one compact unit. It
            captures and transmits live video directly over an IP network,
            allowing authorized users to view, store, and manage footage locally
            (via LAN) or remotely (via the Internet) using standard IP-based
            infrastructure. Each IP camera comes with its own unique IP address
            and is equipped with a built-in web server, FTP server/client, email
            client, alarm management features, and programmable functionalities,
            making it a powerful and flexible surveillance tool for modern
            security systems.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IPCamera2;
