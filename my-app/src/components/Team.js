import React from "react";
import "./Team.css";
import { FaPhone, FaWhatsapp, FaEnvelope } from "react-icons/fa";

function Team() {
  return (
    <section className="team">
      <h2>Meet Our Experts</h2>
      <p>
        Our dedicated team ensures top-notch CCTV service and installation for
        your security needs.
      </p>

      <div className="team-container">
        {/* Team Member 1 */}
        <div className="team-member">
          <div className="member-info">
            <h3>Dipendra Kumar</h3>
            <p className="role">Lead Technician</p>
            <p>
              Dipendra specializes in CCTV system design and installation,
              ensuring seamless integration and optimal performance.
            </p>
            <div className="social-details">
              <a
                href="tel:+919973431660"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhone className="icon phone" />
                <span>Phone</span>
              </a>
              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon whatsapp" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:dipendra@darpancctv.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="icon email" style={{ color: "#e67e22" }} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="team-member">
          <div className="member-info">
            <h3>Ajay Kumar</h3>
            <p className="role">Security Consultant</p>
            <p>
              Ajay provides expert advice on CCTV solutions, tailoring systems
              to meet specific security requirements.
            </p>
            <div className="social-details">
              <a
                href="tel:+917268932935"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaPhone className="icon phone" />
                <span>Phone</span>
              </a>
              <a
                href="https://wa.me/919812345678"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaWhatsapp className="icon whatsapp" />
                <span>WhatsApp</span>
              </a>
              <a
                href="mailto:ajay@darpancctv.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="icon email" style={{ color: "#e67e22" }} />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Team;
