import React from "react";
import "./Night2.css";

function Night2() {
  return (
    <div className="ipcamera-section" id="ip-camera">
      <h2 className="ipcamera-heading">
        <span className="green">Long Range Security CCTV Camera</span>
      </h2>
      <p className="ipcamera-description">
        <b>
          We offer our customers latest premium quality Long Range CCTV Camera
          at Best Price.
        </b>
        We provide Accurate and Cost-effective solutions for Vehicle License
        Plate Reader Camera in Delhi. These are best suited for slow moving
        vehicles at entry and exit gates of housing societies and parking lot.
        These can read Vehicle License Plate in pitch dark conditions also as
        they are fitted with latest IR LED. These cameras have high resolution
        of 700 TVL with BLC, OSD, AWC, HLC, and AGC features. If you are looking
        for a reliable outdoor security camera with tons of night vision, then
        you've landed in the right place. This security camera is equipped with
        a 2MP Sony Image Sensor that provides exceptional quality video. When
        compared to analog cameras, the image produced by this camera is clearer
        thanks to it 2MP image sensor. Once purchased, our customers always come
        back to purchase more of these. A Long range security camera refers to
        any security camera that can focus at least 75 feet away from their
        mounting point and still recognize a person.
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
