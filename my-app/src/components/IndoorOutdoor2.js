// components/IndoorOutdoor2.js
import React from "react";
import "./IndoorOutdoor2.css";
import indoor1 from "../assets/indoor12.jpg";
import indoor3 from "../assets/indoor34.jpg";
import outdoor1 from "../assets/outdoor12.jpg";
import outdoor3 from "../assets/outdoor34.jpg";


const indoorCameras = [
  {
    id: 1,
    image: indoor1,
    title: "Indoor Dome Color HD CCTV Camera with Nightvision",
    specs: [
      "1/3'' 1.3 Megapixel for Clear Sharp Images",
      "4 mm Lens",
      "IR Range up to 20 Mtrs",
      "720p Video Output",
      "AGC, BLC, AWB",
      "Long distance over coax cable",
    ],
  },
  {
    id: 2,
    image: indoor1,
    title: "Indoor Dome Color HD CCTV Camera with Nightvision",
    specs: [
      "1/3'' 1.3 Megapixel for Clear Sharp Images",
      "4 mm Lens",
      "IR Range up to 30 Mtrs",
      "720p Video Output",
      "AGC, BLC, AWB",
      "Long distance over coax cable",
    ],
  },
  {
    id: 3,
    image: indoor3,
    title: "Indoor Dome Color Full HD (1080p) CCTV Camera with Nightvision",
    specs: [
      "1/3'' 2.0 Megapixel for Clear Sharp Images",
      "4 mm Lens",
      "IR Range up to 20 Mtrs",
      "1080p Video Output",
      "AGC, BLC, AWB",
      "Long distance over coax cable",
    ],
  },
  {
    id: 4,
    image: indoor3,
    title: "Indoor Dome Color Full HD (1080p) CCTV Camera with Nightvision",
    specs: [
      "1/3'' 2.0 Megapixel for Clear Sharp Images",
      "4 mm Lens",
      "IR Range up to 30 Mtrs",
      "1080p Video Output",
      "AGC, BLC, AWB",
      "Long distance over coax cable",
    ],
  },
];

const outdoorCameras = [
  {
    id: 1,
    image:outdoor1,
    title: "Outdoor Bullet Color HD CCTV Camera with Nightvision",
    specs: [
      "1/3'' 1.3 Megapixel for Clear Sharp Images",
      "4 mm Lens",
      "IR Range up to 20 Mtrs",
      "720p Video Output",
      "AGC, BLC, AWB",
      "Long distance over coax cable, IP66",
    ],
  },
  {
    id: 2,
    image:outdoor1,
    title: "Outdoor Bullet Color HD CCTV Camera with Nightvision",
    specs: [
      "1/3'' 1.3 Megapixel for Clear Sharp Images",
      "6 mm Lens (Optional 8/12/16 mm Lens)",
      "IR Range up to 30, 40, 50, 80 Mtrs",
      "720p Video Output",
      "AGC, BLC, AWB",
      "Long distance over coax cable, IP66",
    ],
  },
  {
    id: 3,
    image: outdoor3,
    title:
      "Outdoor Weatherproof Bullet Color Full HD CCTV Camera with Nightvision",
    specs: [
      "1/3'' 2.0 Megapixel for Clear Sharp Images",
      "4 mm Lens",
      "IR Range up to 20 Mtrs",
      "1080p Video Output",
      "AGC, BLC, AWB",
      "Long distance over coax cable, IP66",
    ],
  },
  {
    id: 4,
    image:outdoor3,
    title:
      "Outdoor Weatherproof Bullet Color Full HD CCTV Camera with Nightvision",
    specs: [
      "1/3'' 2.0 Megapixel for Clear Sharp Images",
      "6 mm Lens (Optional 8/12/16 mm Lens)",
      "IR Range up to 30, 40, 50, 80 Mtrs",
      "1080p Video Output",
      "AGC, BLC, AWB",
      "Long distance over coax cable, IP66",
    ],
  },
];

function IndoorOutdoor2() {
  return (
    <div className="indoor-outdoor-container">
      {/* Indoor Section */}
      <section>
        <h2>
          <span className="highlight" style={{ color: "#2e7d32" }}>
            INDOOR DOME COLOR HD CCTV CAMERA
          </span>{" "}
         
        </h2>
        <div className="camera-grid">
          {indoorCameras.map((camera) => (
            <div className="camera-card" key={camera.id}>
              <img src={camera.image} alt={camera.title} />
              <h3>{camera.title}</h3>
              <ul>
                {camera.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Outdoor Section */}
      <section>
        <h2>
          <span className="highlight" style={{ color: "#2e7d32" }}>
            OUTDOOR BULLET NIGHT VISION HD CCTV CAMERA
          </span>{" "}
         
        </h2>
        <div className="camera-grid">
          {outdoorCameras.map((camera) => (
            <div className="camera-card" key={camera.id}>
              <img src={camera.image} alt={camera.title} />
              <h3>{camera.title}</h3>
              <ul>
                {camera.specs.map((spec, index) => (
                  <li key={index}>{spec}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default IndoorOutdoor2;
