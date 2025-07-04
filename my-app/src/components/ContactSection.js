import React from "react";
import "./ContactSection.css";

function ContactSection() {
  return (
    <section className="contact-section" id="Contact">
      <div className="contact-form">
        <h2>Get in Touch</h2>
        <p>
          Fill out the form below to contact us for inquiries or scheduling.
        </p>
        <form>
          <div className="form-row">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="form-row">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Enter your email" />
          </div>

          <div className="form-row">
            <label htmlFor="message">Message</label>
            <textarea id="message" placeholder="Type your message"></textarea>
          </div>

          <div className="terms">
            <input type="checkbox" id="terms" />
            <label htmlFor="terms">I accept the Terms</label>
          </div>

          <button type="submit">Submit</button>
        </form>
      </div>
      <div className="contact-map">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609895133!2d72.74110083090506!3d19.082197839548834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce4ee80fdc0f%3A0x7b7d99ec559196ee!2sMarine%20Drive!5e0!3m2!1sen!2sin!4v1597312428576!5m2!1sen!2sin"
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
}

export default ContactSection;
