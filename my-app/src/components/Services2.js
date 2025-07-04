import React from "react";
import "./Services2.css";

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
          <img
            src="https://www.cctvcameradelhi.in/images/cctv-camera-installation.jpg"
            alt="CCTV Installation"
          />
        </div>
        <div className="service-content">
          <h3>CCTV Camera Installation</h3>
          <p>
            We are leading CCTV Camera Installation Service Provider with many
            years of experience in the industry. We provide affordable
            professional CCTV Camera Installation Service in Delhi/NCR. We have
            a team of well-trained, experienced, qualified CCTV installers. With
            our CCTV installation service, we deploy a team of trained and
            professional technicians to install your cctv surveillance system.
            This includes the labour to mount the cameras, run all cables from
            the cameras to the DVR, make all electrical and video connections
            and make sure that the cameras are focused and adjusted properly.
            Due to the variables of this type of installation, the installation
            labour price will be estimated after detailed site-survey. Watch
            cctv camera live online on smartphones, laptops, computers.
          </p>
        </div>
      </div>

      {/* 2. CCTV AMC */}
      <div className="service-block right-image">
        <div className="service-image">
          <img
            src="https://www.cctvcameradelhi.in/images/cctv-camera-amc.jpg"
            alt="CCTV AMC"
          />
        </div>
        <div className="service-content">
          <h3>CCTV Camera AMC</h3>
          <p>
            We provide CCTV AMC (Annual Maintenance Contract), both
            Comprehensive (Material with Service) and Non-Comprehensive (Service
            Only) type for your existing CCTV Camera System and its cabling. We
            have our own service center in Delhi to undertake repairs and
            servicing. We have sufficient manpower, infrastructure, and
            expertise to maintain the systems in working condition. Also, we can
            help you upgrade your old existing Analog CCTV System to Analog
            Megapixel HD or IP Camera System.
          </p>
        </div>
      </div>

      {/* 3. Biometric Reader */}
      <div className="service-block left-image">
        <div className="service-image">
          <img
            src="https://www.cctvcameradelhi.in/images/biometric-machine.jpg"
            alt="Biometric Reader"
          />
        </div>
        <div className="service-content">
          <h3>Biometric Fingerprint Reader</h3>
          <p>
            The next-generation biometric-based technology offers a dependable,
            helpful, and authentic way of verifying/identifying an individual's
            identity utilizing latest Biometric fingerprint scanner. Fingerprint
            scanners are being used broadly for enrollment, identification &
            verification in varied projects where the identity of people is
            required. Our wide ranges of fingerprint scanner devices deliver
            quick personality verification with a high level of security in a
            consistent way for various Citizen or Person identity ventures.
          </p>
        </div>
      </div>

      {/* 4. Video Door Phone */}
      <div className="service-block right-image">
        <div className="service-image">
          <img
            src="https://www.cctvcameradelhi.in/images/Video-Door-Phone.jpg"
            alt="Video Door Phone"
          />
        </div>
        <div className="service-content">
          <h3>IP Intelligent Video Door Phone</h3>
          <p>
            Have peace of mind from being able to see, hear & speak to your
            visitors before opening the door. Improve security for residential
            Enhance comfort for residents Enhance intelligent experience for the
            community and villa More convenient property management Simplify
            installation, save costs
          </p>
        </div>
      </div>

      {/* 5. EPABX System */}
      <div className="service-block left-image">
        <div className="service-image">
          <img
            src="https://www.cctvcameradelhi.in/images/EPABX-Intercom-System.jpg"
            alt="EPABX System"
          />
        </div>
        <div className="service-content">
          <h3>EPABX System</h3>
          <p>
            EPABX system is generally great for saving money, and is also easy
            to maintain and you should be able to connect multiples of
            extensions to a single line from the telephone exchange. Call
            forwarding Call accounting Selective outgoing calling feature
            Conference calling Voice mail
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services2;
