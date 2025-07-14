import React from "react";
import "./Features.css";

// Import local images
import feature1 from "../assets/features/feature111.jpg";
import feature2 from "../assets/features/feature2.webp";
import feature3 from "../assets/features/feature3.webp";
import feature4 from "../assets/features/feature4.jpg";
import feature5 from "../assets/features/feature5.avif";
import feature6 from "../assets/features/feature6.jpg";
import feature7 from "../assets/features/feature7.jpeg";
import feature8 from "../assets/features/feature8.jpeg";
import feature9 from "../assets/features/feature9.jpg";
import feature10 from "../assets/features/feature10.jpeg";
import feature11 from "../assets/features/feature11.webp";
import feature12 from "../assets/features/feature12.jpeg";
import feature13 from "../assets/features/feature13.jpg";
import feature14 from "../assets/features/feature14.jpeg";
import feature15 from "../assets/features/feature15.jpeg";
import feature16 from "../assets/features/feature16.jpeg";

const featuresData = [
  {
    title: "Protect Your Family Home",
    description:
      "Ensure your family's safety with our advanced residential CCTV systems. Monitor your property remotely and deter intruders.",
    image: feature1,
  },
  {
    title: "Crystal Clear Surveillance",
    description:
      "Our high-resolution cameras provide crystal clear footage, ensuring you never miss a detail.",
    image: feature2,
  },
  {
    title: "Remote Access and Control",
    description:
      "Monitor your home from anywhere with our remote access feature. Stay connected and in control.",
    image: feature3,
  },
  {
    title: "Customized Security Solutions",
    description:
      "We offer customized CCTV solutions tailored to your specific needs.Choose from a variety of camera types and features to secure your home.",
    image: feature4,
  },
  {
    title: "Office Building Surveillance",
    description:
      "Secure your office with our advanced CCTV systems.Monitor entrances,exits,and parking areas for enhanced security and peace of mind.",
    image: feature5,
  },
  {
    title: "Retail Store Security",
    description:
      "Protect your retail store with our CCTV solutions.Monitor customer activity,prevent theft,and ensure a safe shopping environment.",
    image: feature6,
  },
  {
    title: "Warehouse Monitoring",
    description:
      "Secure your warehouse with our comprehensive CCTV systems.Monitor loading docks,storage areas,and prevent unauthorized access to protect your inventory.",
    image: feature7,
  },
  {
    title: "Parking Garage Surveillance",
    description:
      "Enhance parking garage security with our CCTV solutions.Monitor vehicle and pedestrian traffic,prevent vandalism,and ensure a safe environment for all users.",
    image: feature8,
  },
  {
    title: "Residential CCTV Installation",
    description:
      "Secure your home with our professional CCTV installation services.Tailored solutions for complete peace of mind and enhanced security.",
    image: feature9,
  },
  {
    title: "Commercial CCTV Solutions",
    description:
      "Protect your business with our advances CCTV solutions.Real-time monitoring and scalable systems for comprehensive security and peace of mind.",
    image: feature10,
  },
  {
    title: "Expert Installation Services",
    description:
      "Our expert technician ensure seamless CCTV installations.We provide reliable and efficient services for both residential and commercial properties.",
    image: feature11,
  },
  {
    title: "Remote Monitoring Solutions",
    description:
      "Monitor your property from anywhere with our remote CCTV solutions.Stay connected and secure with real-time access to your surveillance feeds.",
    image: feature12,
  },
  {
    title: "Diagnostic Checkups",
    description:
      "Regular diagnostic checkups ensure your CCTV system is functioning optimally,preventing potential issues and maintaining reliable surveillance.",
    image: feature13,
  },
  {
    title: "Cleaning and Adjustments",
    description:
      "Our maintenance service includes thorough cleaning and precise adjustments to ensure clear video quality and optimal camera positioning.",
    image: feature14,
  },
  {
    title: "Repair Services",
    description:
      "We offer comprehensive repair services,addressing issues like faulty wiring,damaged components, and system malfunctions to restore functionality.",
    image: feature15,
  },
  {
    title: "Software Updates",
    description:
      "Keep your CCTV system secure and efficient with our software update services ensuring compatibility and protection against vulnerabilities.",
    image: feature16,
  },
];

function Features() {
  return (
    <section className="features">
      <div className="features-grid">
        {featuresData.map((feature, index) => (
          <div
            className={`feature-card card-${index + 1}`}
            key={index}
            style={{ backgroundImage: `url(${feature.image})` }}
          >
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
