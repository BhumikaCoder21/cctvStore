// components/IndoorOutdoor2.js
import React from "react";
import "./IndoorOutdoor2.css";

const indoorCameras = [
  {
    id: 1,
    image: "https://www.cctvcameradelhi.in/images/carmera-cctv.jpg",
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
    image: "https://www.cctvcameradelhi.in/images/carmera-cctv.jpg",
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
    image: "https://www.cctvcameradelhi.in/images/HD1080P-camera.jpg",
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
    image: "https://www.cctvcameradelhi.in/images/HD1080P-camera.jpg",
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
    image:
      "https://www.cctvcameradelhi.in/images/OutdoorWeatherproof-camera.jpg",
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
    image:
      "https://www.cctvcameradelhi.in/images/OutdoorWeatherproof-camera.jpg",
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
    image:
      "https://www.cctvcameradelhi.in/images/OutdoorWeatherproofBullet-camera.jpg",
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
    image:
      "https://www.cctvcameradelhi.in/images/OutdoorWeatherproofBullet-camera.jpg",
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
          <span className="highlight">INDOOR DOME COLOR</span> HD CCTV CAMERA
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
          <span className="highlight">OUTDOOR BULLET NIGHT</span> VISION HD CCTV
          CAMERA
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
