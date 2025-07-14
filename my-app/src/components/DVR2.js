import React from "react";
import "./DVR2.css";
import dvr56 from "../assets/dvr2.jpg";

const dvrData = [
  {
    title: "Standalone 4 Ch DVR",
    features: [
      "Up to 4 Cameras with 1080 Realtime Preview",
      "H.264 Dual-Stream Compression",
      "All Channel Full HD1080P Realtime Recording",
      "HDMI / VGA Simultaneous Video Output",
      "Support 1 SATA HDD, up to 4TB",
      "No need for STATIC IP",
      "Mobile Software",
      "CMS Software",
    ],
  },
  {
    title: "Standalone 8 Ch DVR",
    features: [
      "Up to 8 Cameras with 1080 Realtime Preview",
      "H.264 Dual-Stream Compression",
      "All Channel Full HD1080P Realtime Recording",
      "HDMI / VGA Simultaneous Video Output",
      "Support 1 SATA HDD, up to 4TB",
      "No need for STATIC IP",
      "Mobile Software",
      "CMS Software",
    ],
  },
  {
    title: "Standalone 16 Ch DVR",
    features: [
      "Up to 16 Cameras with 1080 Realtime Preview",
      "H.264 Dual-Stream Compression",
      "All Channel Full HD1080P Realtime Recording",
      "HDMI / VGA Simultaneous Video Output",
      "Support 2 SATA HDD, 4TB each, total 8TB",
      "No need for STATIC IP",
      "Mobile Software",
      "CMS Software",
    ],
  },
  {
    title: "Standalone 24 Ch DVR",
    features: [
      "Up to 32 Cameras with 1080 Realtime Preview",
      "H.264 Dual-Stream Compression",
      "All Channel Full HD1080P Realtime Recording",
      "HDMI / VGA Simultaneous Video Output",
      "Supports 2 SATA HDD, 4TB each, total 8TB",
      "No need for STATIC IP",
      "Mobile Software",
      "CMS Software",
    ],
  },
];

function DVR2() {
  return (
    <div className="dvr-section">
      <h2 className="dvr-heading" style={{ color: "#2e7d32" }}>
        Latest Full HD DVR for Best Image and Video Quality
      </h2>
      <h3 className="dvr-subheading">
        We came to realize that the largest threat came internally from our
        employees rather than the customers.<br/>
      </h3>
      <p className="dvr-description">
        We have progressed with CCTV Services from our original system using a
        VCR tape to our current DVR’s. They deserve five stars for their
        creativity in satisfying our unique requests.
      </p>
      <div className="dvr-cards-container">
        {dvrData.map((dvr, index) => (
          <div key={index} className="dvr-card">
            <img
              src={dvr56}
              alt={dvr.title}
              className="dvr-image"
            />
            <h4>{dvr.title}</h4>
            <ul>
              {dvr.features.map((feature, idx) => (
                <li key={idx}>{feature}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default DVR2;
