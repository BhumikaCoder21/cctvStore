import React from "react";
import "./Team.css";

function Team() {
  return (
    <section className="team">
      <h2>Meet Our Experts</h2>
      <p>
        Our dedicated team ensures top-notch CCTV service and installation for
        your security needs.
      </p>
      <div className="team-container">
        <div className="team-member">
          <div className="member-photo photo-aarav"></div>
          <div className="member-info">
            <h3>Aarav Sharma</h3>
            <p className="role">Lead Technician</p>
            <p>
              Aarav specializes in CCTV system design and installation, ensuring
              seamless integration and optimal performance.
            </p>
            <div className="social-icons">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="team-member">
          <div className="member-photo photo-priya"></div>
          <div className="member-info">
            <h3>Priya Patel</h3>
            <p className="role">Security Consultant</p>
            <p>
              Priya provides expert advice on CCTV solutions, tailoring systems
              to meet specific security requirements.
            </p>
            <div className="social-icons">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>

        <div className="team-member">
          <div className="member-photo photo-rohan"></div>
          <div className="member-info">
            <h3>Rohan Verma</h3>
            <p className="role">Maintenance Specialist</p>
            <p>
              Rohan is responsible for CCTV system maintenance and repairs,
              ensuring reliable and continuous operation.
            </p>
            <div className="social-icons">
              <i className="fab fa-linkedin"></i>
              <i className="fab fa-twitter"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="assistance-box">
        <h3>Need Assistance?</h3>
        <p>
          Contact our team for expert CCTV solutions tailored to your
          residential or commercial needs.
        </p>
        <button className="contact-button">Contact Us</button>
      </div>
    </section>
  );
}

export default Team;
