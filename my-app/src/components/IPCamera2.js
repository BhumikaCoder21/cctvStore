import React from "react";
import "./IPCamera2.css";

function IPCamera2() {
  return (
    <div className="ptz-section" id="ptz">
      <h2 className="ptz-heading">
        <span className="green">PTZ CCTV</span> CAMERA INSTALLATIONS DELHI
      </h2>
      <p className="ptz-subheading">
        We offer our customers latest premium quality PTZ CCTV Cameras at Best
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
            PTZ cameras use pan, tilt and zoom to provide both wide-area
            coverage and great detail with a single camera. Great image quality
            and the ability to zoom in make it possible to verify detected
            security events. The result is maximum protection and minimum costs.
            The cameras are equipped with a variety of intelligent features and
            can move between pre-set positions and zoom in automatically in
            response to detected events. They can also be easily integrated into
            a system with other cameras. Our PTZ network camera offering include
            extremely robust models suitable for the harshest environments and
            climates.
          </p>
        </div>
      </div>
    </div>
  );
}

export default IPCamera2;
