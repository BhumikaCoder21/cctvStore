import React from "react";
import "./Features.css";

const featuresData = [
  {
    title: "Protect Your Family Home",
    description:
      "Ensure your family's safety with our advanced residential CCTV systems. Monitor your property remotely and deter intruders.",
  },
  {
    title: "Crystal Clear Surveillance",
    description:
      "Our high-resolution cameras provide crystal clear footage, ensuring you never miss a detail.",
  },
  {
    title: "Remote Access and Control",
    description:
      "Monitor your home from anywhere with our remote access feature. Stay connected and in control.",
  },
  {
    title: "Customized Security Solutions",
    description:
      "We offer customized CCTV solutions tailored to your specific needs.Choose from a variety of camera types and features to secure your home.",
  },
  {
    title: "Office Building Surveillance",
    description:
      "Secure your office with our advanced CCTV systems.Monitor entrances,exits,and parking areas for enhanced security and peace of mind.",
  },
  {
    title: "Retail Store Security",
    description:
      "Protect your retail store with our CCTV solutions.Monitor customer activity,prevent theft,and ensure a safe shopping environment. ",
  },
  {
    title: "Warehouse Monitoring",
    description:
      "Secure your warehouse with our comprehensive CCTV systems.Monitor loading docks,storage areas,and prevent unauthorized access to protect your inventory.",
  },
  {
    title: "Parking Garage Surveillance",
    description:
      "Enhance parking garage security with our CCTV solutions.Monitor vehicle and pedestrian traffic,prevent vandalism,and ensure a safe environment for all users.",
  },
  // Row 3 and 4
  {
    title: "Residential CCTV Installation",
    description: "Secure your home with our professional CCTV installation services.Tailored solutions for complete peace of mind and enhanced security.",
  },
  {
    title: "Commercial CCTV Solutions",
    description: "Protect your business with our advances CCTV solutions.Real-time monitoring and scalable systems for comprehensive security and peace of mind.",
  },
  {
    title: "Expert Installation Services",
    description: "Our expert technician ensure seamless CCTV installations.We provide reliable and efficient services for both residential and commercial properties.",
  },
  {
    title: "Remote Monitoring Solutions",
    description: "Monitor your property from anywhere with our remote CCTV solutions.Stay connected and secure with real-time access to your surveillance feeds.",
  },
  {
    title: "Diagnostic Checkups",
    description:
      "Regular diagnostic checkups ensure your CCTV system is functioning optimally,preventing potential issues and maintaining reliable surveillance.",
  },
  {
    title: "Cleaning and Adjustments",
    description:
      "Our maintenance service includes thorough cleaning and precise adjustments to ensure clear video quality and optimal camera positioning.",
  },
  {
    title: "Repair Services",
    description:
      "We offer comprehensive repair services,addressing issues like faulty wiring,damaged components, and system malfunctions to restore functionality.",
  },
  {
    title: "Software Updates",
    description:
      "Keep your CCTV system secure and efficient with our software update services ensuring compatibility and protection against vulnerabilities.",
  },
];

function Features() {
  return (
    <section className="features" >
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div className={`feature-card card-${index + 1}`} key={index}>
            <div className="feature-content">
              <h3>{feature.title}</h3>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
