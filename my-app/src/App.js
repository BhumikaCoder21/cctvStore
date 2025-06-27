import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features"
import Team from "./components/Team";
import ContactSection from "./components/ContactSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Team />
      <ContactSection />
    </div>
  );
}

export default App;
