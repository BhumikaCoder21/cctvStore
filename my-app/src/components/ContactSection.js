import React from "react";
import "./ContactSection.css";
import { FaPhone, FaWhatsapp, FaFacebookF, FaUser } from "react-icons/fa";

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
            <span>Ramesh Kumar</span>
          </div>
          <div className="contact-item">
            <FaPhone className="icon phone" />
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <FaWhatsapp className="icon whatsapp" />
            <span>+91 98765 43210</span>
          </div>
          <div className="contact-item">
            <FaFacebookF className="icon facebook" />
            <a
              href="https://facebook.com/yourpage"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook Page
            </a>
          </div>
        </div>
      </div>

      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3591.765002874073!2d85.48726267535736!3d26.596976076813746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ec5a3623b37db7%3A0xa7b1904f0e9453cd!2sSitamarhi%2C%20Bihar%20843301%2C%20India!5e0!3m2!1sen!2sin!4v1720088670151!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactSection;
