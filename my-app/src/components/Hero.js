import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./Hero.css";

SwiperCore.use([Navigation, Autoplay]);

const slides = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/012/999/077/non_2x/cctv-camera-install-by-have-water-proof-cover-to-protect-camera-with-home-security-system-concept-free-photo.jpg",
    heading: "ONE STOP SOLUTION SURVEILLANCE SYSTEM",
    subheading: "FOR YOUR HOME & BUSINESS SECURITY",
    description: "Stay Safe With Our Smart Surveillance Solutions.",
  },
  {
    image:
      "https://www.shutterstock.com/image-photo/advanced-cctv-surveillance-systems-office-600nw-2483738621.jpg",
    heading: "RETAIL STORE SECURITY",
    subheading: "SURVEILLANCE IN THE RETAIL VERTICAL",
    description: "Protection while you sleep and when you are away.",
  },
  {
    image:
      "https://media.istockphoto.com/id/639291822/photo/cctv-security-camera.jpg?s=612x612&w=0&k=20&c=TI0AyqjMXzVY-RXIOKAwEiyAPBvGectzbNVwgY3nFKk=",
    heading: "HOME SECURITY SYSTEM",
    subheading: "WATCH CCTV CAMERA LIVE ONLINE",
    description: "On Smartphones,Tablets,Laptops,Computers.",
  },
  {
    image:
      "https://architecturesstyle.b-cdn.net/wp-content/uploads/2024/09/cctv-camera-in-commercial-building.jpg",
    heading: "PROTECT YOUR COMMERCIAL PROPERTY",
    subheading: "WITH CCTV CAMERA SURVEILLANCE",
    description:
      "We are offering our customers customized CCTV Surveillance Solutions.",
  },
];

function Hero() {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 1000, disableOnInteraction: false }}
      speed={1000}
      loop
      className="hero-slider"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div
            className="slide"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            <div className="slide-overlay">
              <div className="slide-content">
                <h1>{slide.heading}</h1>
                <h3>{slide.subheading}</h3>
                <p>{slide.description}</p>
                <a href="tel:+919973431660" className="call-btn">
                  📞 +91 9973431660
                </a>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default Hero;
