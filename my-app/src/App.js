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
import Services1 from "./components/Services1";
import Services2 from "./components/Services2";
import PTZ1 from "./components/PTZ1";
import PTZ2 from "./components/PTZ2";
import PTZ3 from "./components/PTZ3";
import IPCamera1 from "./components/IPCamera1";
import IPCamera2 from "./components/IPCamera2";
import IPCamera3 from "./components/IPCamera3";
import  Wireless1 from "./components/Wireless1";

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
          <Route
            path="/services"
            element={
              <>
                <Services1 />
                <Services2 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/ptz"
            element={
              <>
                <PTZ1 />
                <PTZ2 />
                <PTZ3 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/ipCamera"
            element={
              <>
                <IPCamera1 />
                <IPCamera2 />
                <IPCamera3 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />
          <Route
            path="/wireless"
            element={
              <>
                <Wireless1 />
              
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
