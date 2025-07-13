import React from "react";
import "./About.css";
import aboutImg from "../assets/about.webp"; // Adjust the path as per your project structure

function About() {
  return (
    <section className="about" id="About">
      <div className="about-container">
        <div
          className="about-image"
          style={{ backgroundImage: `url(${aboutImg})` }}
        ></div>

        <div className="about-content">
          <h2>About DarpanCCTV</h2>
          <p>
            DarpanCCTV has been a trusted provider of CCTV installation and
            maintenance services. Our mission is to enhance security for homes
            and businesses through reliable surveillance solutions. We value
            integrity, professionalism, and customer satisfaction, with a
            dedicated team of experts committed to delivering seamless security
            systems tailored to each client's needs.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h3>1500+</h3>
              <p>Total Systems Installed</p>
            </div>
            <div className="stat">
              <h3>50%</h3>
              <p>Customer Satisfaction Rate</p>
            </div>
            <div className="stat">
              <h3>10 years</h3>
              <p>Years of Industry Experience</p>
            </div>
            <div className="stat">
              <h3>20 years</h3>
              <p>Team Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
