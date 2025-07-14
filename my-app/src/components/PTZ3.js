import React from "react";
import "./PTZ3.css";
import ultraImg from "../assets/ultra.jpg";
import proImg from "../assets/pro.jpg";
import valueImg from "../assets/value.jpg";
import specialImg from "../assets/special.jpg";

function PTZ3() {
  const categories = [
    {
      title: "Ultra Series",
      description:
        "The Ultra Series Cameras are the professional’s choice for many complicated scenarios. They are equipped with superb imaging ability and backed by 50x zoom ratio and the patented DarkFighterX technology, as well as intelligent functions.",
      image: ultraImg,
    },
    {
      title: "Pro Series",
      description:
        "Almost all of the Pro Series PTZ Cameras are equipped with “powered-by-DarkFighter” technology, making low-light monitoring an easy task. The Pro series has abundant options for various camera sizes and amazing zoom capability.",
      image: proImg,
    },
    {
      title: "Value Series",
      description:
        "The Value Series is designed to offer a perfect balance between performance, affordability, and ease of use. These cameras feature compact and sleek designs, making them ideal for both residential and small business applications where space and aesthetics matter.",
      image: valueImg,
    },
    {
      title: "Special Series",
      description:
        "The Special Series is engineered for advanced surveillance needs. These robust and durable cameras are strategically designed to safeguard perimeters from elevated vantage points, delivering a comprehensive overview while capturing fine details with precision.",
      image: specialImg,
    },
  ];

  return (
    <div className="ptz3-section" id="product-categories">
      <h2 className="ptz3-heading" style={{ color: "#2e7d32" }}>
        PRODUCT CATEGORIES
      </h2>
      <div className="ptz3-grid">
        {categories.map((cat, index) => (
          <div className="ptz3-card" key={index}>
            <div className="ptz3-card-header">
              <h3>{cat.title}</h3>
            </div>
            <div className="ptz3-card-body">
              <div className="ptz3-img-col">
                <img src={cat.image} alt={cat.title} className="ptz3-img" />
              </div>
              <div className="ptz3-card-content">
                <p>{cat.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PTZ3;
