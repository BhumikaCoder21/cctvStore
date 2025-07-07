import React from "react";
import "./ContactSection.css";
import { FaPhone, FaWhatsapp, FaUser, FaEnvelope } from "react-icons/fa";

function ContactSection() {
  return (
    <section className="contact-section" id="Contact">
      <div className="assistance-box">
        <div className="assistance-header">
          <h1>Need Assistance?</h1>
          <p>
            Contact our team for expert CCTV solutions tailored to your
            residential or commercial needs.
          </p>
        </div>

        <div className="contact-info">
          <div className="contact-item">
            <FaUser className="icon user" />
            <span>Dipendra Kumar</span>
          </div>
          <div className="contact-item">
            <FaPhone className="icon phone" />
            <span>+91 99734 31660</span>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="icon whatsapp" />
            <span>+91 99734 31660</span>
          </div>
          <div className="contact-item">
            <FaEnvelope className="icon email" />
            <span>info@darpancctv.com</span>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Google Map - Sonbarsa"
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14380.794612487436!2d85.522900!3d26.799900!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDQ3JzU5LjYiTiA4NcKwMzEnMjIuNCJF!5e0!3m2!1sen!2sin!4v1720099000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </section>
  );
}

export default ContactSection;
