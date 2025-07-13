import React from "react";
import "./Services2.css";
import cctvImg from "../assets/s4.jpg";
import amcImg from "../assets/s2.jpg";
import biometricImg from "../assets/s3.jpg";
import videoDoorPhoneImg from "../assets/s1.jpg";
import epabxImg from "../assets/s5.jpg";

function Services2() {
  return (
    <div className="services-section" id="services">
      <h2 className="services-heading">OUR SERVICES</h2>
      <p className="services-subheading">
        Our Services: CCTV camera Installation & AMC, biometric systems, Video
        Door Phone, EPABX System, at affordable cost.
      </p>

      {/* 1. CCTV Installation */}
      <div className="service-block left-image">
        <div className="service-image">
          <img src={cctvImg} alt="CCTV Installation" />
        </div>
        <div className="service-content">
          <h3>Professional CCTV Camera Installation</h3>
          <p>
            We specialize in delivering reliable and cost-effective CCTV Camera
            Installation services. With years of experience in the surveillance
            industry, our expert team ensures a seamless setup of high-quality
            security systems tailored to your needs. Our trained and certified
            technicians handle the complete installation process — from mounting
            cameras, routing cables, and connecting to DVR/NVR systems, to
            configuring and optimizing the setup for the best coverage. Every
            installation is preceded by a detailed site survey to determine the
            ideal layout and provide accurate pricing. With our solutions, you
            can monitor your premises live anytime, anywhere — through
            smartphones, laptops, and desktop computers — ensuring peace of mind
            and enhanced security.
          </p>
        </div>
      </div>

      {/* 2. CCTV AMC */}
      <div className="service-block right-image">
        <div className="service-image">
          <img src={amcImg} alt="CCTV AMC" />
        </div>
        <div className="service-content">
          <h3>CCTV AMC (Annual Maintenance Contract) Services</h3>
          <p>
            Ensure the long-term performance of your security systems with our
            reliable CCTV AMC services. We offer both Comprehensive (including
            parts and service) and Non-Comprehensive (service-only) contracts
            tailored to suit your existing CCTV setup and cabling
            infrastructure. Our dedicated service center in Delhi is fully
            equipped to handle repairs, upgrades, and preventive maintenance.
            Backed by skilled technicians and robust infrastructure, we ensure
            your surveillance systems remain fully operational with minimal
            downtime. Looking to modernize your setup? We also provide seamless
            upgrades from older analog systems to advanced HD or IP camera
            solutions for enhanced clarity and performance.
          </p>
        </div>
      </div>

      {/* 3. Biometric Reader */}
      <div className="service-block left-image">
        <div className="service-image">
          <img src={biometricImg} alt="Biometric Reader" />
        </div>
        <div className="service-content">
          <h3>Biometric Fingerprint Reader</h3>
          <p>
            Enhance your security and identity verification systems with our
            cutting-edge biometric fingerprint readers. Designed for accuracy
            and reliability, our devices provide a fast, secure, and
            user-friendly method for identifying individuals based on their
            unique fingerprints. Widely used in government, corporate, and
            institutional projects, our fingerprint scanners are ideal for
            enrollment, attendance, access control, and identity verification.
            We offer a wide range of biometric solutions that ensure high-speed
            recognition with consistent performance and top-tier data security.
            Whether you're implementing a new system or upgrading an existing
            one, our biometric solutions deliver the trust and efficiency you
            need.
          </p>
        </div>
      </div>

      {/* 4. Video Door Phone */}
      <div className="service-block right-image">
        <div className="service-image">
          <img src={videoDoorPhoneImg} alt="Video Door Phone" />
        </div>
        <div className="service-content">
          <h3>IP Intelligent Video Door Phone</h3>
          <p>
            Experience enhanced home security and convenience with our IP-based
            Intelligent Video Door Phones. These systems let you see, hear, and
            talk to visitors at your door — all from the safety and comfort of
            your smartphone or screen, before letting them in. Ideal for
            residential buildings, villas, and gated communities, our video door
            phones improve resident comfort, streamline property management, and
            create a more intelligent living experience. Designed for easy
            installation and low maintenance, they also help reduce overall
            setup costs. Secure your entry points with modern technology that
            combines safety, simplicity, and smart control.
          </p>
        </div>
      </div>

      {/* 5. EPABX System */}
      <div className="service-block left-image">
        <div className="service-image">
          <img src={epabxImg} alt="EPABX System" />
        </div>
        <div className="service-content">
          <h3>EPABX System</h3>
          <p>
            Streamline communication within your organization or residential
            complex with our cost-effective EPABX (Electronic Private Automatic
            Branch Exchange) systems. These intercom solutions allow you to
            connect multiple extensions to a single telephone line, improving
            internal communication while significantly reducing telephony costs.
            Our EPABX systems are easy to install, simple to maintain, and come
            with a wide range of features, including:
            <ul className="service-points">
              <li>📞 Call forwarding</li>
              <li>🧾 Call accounting</li>
              <li>🚫 Selective outgoing call restrictions</li>
              <li>👥 Conference calling</li>
              <li>✉️ Voice mail support</li>
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services2;
