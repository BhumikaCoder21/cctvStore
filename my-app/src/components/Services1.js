import React from "react";
import "./Services1.css";

function Service1() {
  return (
    <div
      className="security-banner"
      style={{
        backgroundImage: `url("https://www.cctvcameradelhi.in/images/call-us-bg.jpg")`,
      }}
    >
      <div className="security-banner-content">
        <h2>OUR SERVICES</h2>
        <p>
          We look security solutions from a different angle, which makes us
          stand beyond and above our competitors.
        </p>
      </div>
    </div>
  );
}

export default Service1;
