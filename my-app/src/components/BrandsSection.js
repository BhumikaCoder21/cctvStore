import React from "react";
import "./BrandsSection.css";
import brandsImg from "../assets/brands.jpg";

const BrandsSection = () => {
  return (
    <section className="brands-section">
      <div className="brands-heading">
        <h2>
          <span className="highlight">BRANDS</span> WE DEAL IN
        </h2>
        <div className="underline"></div>
      </div>
      <div className="brands-image-wrapper">
        <img src={brandsImg} alt="Brands We Deal In" className="brands-image" />
      </div>
    </section>
  );
};

export default BrandsSection;
