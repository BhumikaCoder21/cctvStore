import React from "react";
import "./PTZ2.css";
import imageb from "../assets/bio2.jpg";

function Bio2() {
  return (
    <div>
      <div className="ptz-section" id="ptz">
        <h2 className="ptz-heading" style={{ color: "#2e7d32" }}>
          {" "}
          Biometric Attendance Machine Installation
        </h2>
        <p className="ptz-subheading">
          We offer our customers latest premium quality Biometric Attendance
          Machine at Best Price.
        </p>

        <div className="ptz-content">
          <div className="ptz-image">
            <img
              src={imageb}
              alt="PTZ CCTV Cameras"
            />
          </div>
          <div className="ptz-text">
            <p>
              Darpan CCTV is one of the leading suppliers of Biometric
              Attendance Systems and Access Control Devices. We are dedicated to
              bringing the latest technology to our customers at affordable
              prices, with a strong focus on quality, service, and reliability.
              Our team is made up of skilled professionals who work hard to
              provide smart, easy-to-use solutions for offices, schools, shops,
              and other establishments. Whether you're looking for a Fingerprint
              Attendance Machine or a complete Access Control setup, we offer a
              wide range of options to suit your needs.With years of experience
              in the field, we understand what customers really need — and make
              sure every product and service meets those expectations. From
              consultation to installation and support, we’re here to help every
              step of the way.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bio2;
