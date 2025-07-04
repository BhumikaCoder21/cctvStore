import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Team from "./components/Team";
import ContactSection from "./components/ContactSection";
import BrandsSection from "./components/BrandsSection";
import Footer from "./components/Footer";
import IndoorOutdoor1 from "./components/IndoorOutdoor1";
import IndoorOutdoor2 from "./components/IndoorOutdoor2";
import IndoorOutdoor3 from "./components/IndoorOutdoor3";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <About />
                <Features />
                <Team />
                <ContactSection />
                <BrandsSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/indoor-outdoor"
            element={
              <>
                <IndoorOutdoor1 />
                <IndoorOutdoor2 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
