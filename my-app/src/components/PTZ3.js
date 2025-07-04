import React from "react";
import "./PTZ3.css";

function PTZ3() {
  const categories = [
    {
      title: "Ultra Series",
      description:
        "The Ultra Series Cameras are the professional’s choice for many complicated scenarios. They are equipped with superb imaging ability and backed by 50x zoom ratio and the patented DarkFighterX technology, as well as intelligent functions.",
      image:
        "https://www.cctvcameradelhi.in/images/Ultra-Series-ptz-camera.jpg",
    },
    {
      title: "Pro Series",
      description:
        "Almost all of the Pro Series PTZ Cameras are equipped with “powered-by-DarkFighter” technology, making low-light monitoring an easy task. The Pro series has abundant options for various camera sizes and amazing zoom capability.",
      image: "https://www.cctvcameradelhi.in/images/Pro-Series-ptz-camera.jpg",
    },
    {
      title: "Value Series",
      description:
        "This series features compact designs and high quality imaging to realize cost-efficiency and good user experience.",
      image:
        "https://www.cctvcameradelhi.in/images/Value-Series-ptz-camera.jpg",
    },
    {
      title: "Special Series",
      description:
        "These robust cameras safeguard perimeters from above, providing a comprehensive overview with great details.",
      image:
        "https://www.cctvcameradelhi.in/images/Special-Series-ptz-cctv-camera.jpg",
    },
  ];

  return (
    <div className="ptz3-section" id="product-categories">
      <h2 className="ptz3-heading">
        <span className="green">PRODUCT</span> CATEGORIES
      </h2>
      <div className="ptz3-grid">
        {categories.map((cat, index) => (
          <div className="ptz3-card" key={index}>
            <img src={cat.image} alt={cat.title} className="ptz3-img" />
            <h3>{cat.title}</h3>
            <p>{cat.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PTZ3;
