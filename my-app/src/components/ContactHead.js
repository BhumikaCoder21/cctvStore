import React from "react";
import "./ContactHead.css";
import { FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import contactBg from "../assets/contactHead.webp";

function Service1() {
  return (
    <div
      className="security-banner"
      style={{
        backgroundImage: `url(${contactBg})`,
      }}
    >
      <div className="security-banner-content">
        <h1>Contact Us</h1>
        <p>
          Need help choosing a security system or want to book an installation?{" "}
          <br />
          We're just a message, call, or email away!
        </p>

        <div className="contact-row">
          <a href="tel:9973431660" className="contact-item phone">
            <FaPhoneAlt className="icon" />
            <span style={{ color: "#fff" }}>9973431660</span>
          </a>

          <a
            href="https://wa.me/919973431660"
            className="contact-item whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp className="icon" />
            <span style={{ color: "#fff" }}>9973431660</span>
          </a>

          <a
            href="mailto:dip9973431660@gmail.com"
            className="contact-item email"
          >
            <MdEmail className="icon" />
            <span style={{ color: "#fff" }}>dip9973431660@gmail.com</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Service1;
