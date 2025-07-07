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
import Wireless1 from "./components/Wireless1";
import Wireless2 from "./components/Wireless2";
import Wireless3 from "./components/Wireless3";
import Vehicle1 from "./components/Vehicle1";
import Vehicle2 from "./components/Vehicle2";
import Vehicle3 from "./components/Vehicle3";
import Night1 from "./components/Night1";
import Night2 from "./components/Night2";
import DVR1 from "./components/DVR1";
import NVR1 from "./components/NVR1";
import NVR2 from "./components/NVR2";
import Bio1 from "./components/Bio1";
import Bio2 from "./components/Bio2";
import Bio3 from "./components/Bio3";
import DVR2 from "./components/DVR2";
import DVR3 from "./components/DVR3";
import ScrollToTop from "./components/ScrollToTop";
import ContactHead from "./components/ContactHead";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
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
                <Wireless2 />
                <Wireless3 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />

          <Route
            path="/vehicle"
            element={
              <>
                <Vehicle1 />
                <Vehicle2 />
                <Vehicle3 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />

          <Route
            path="/night"
            element={
              <>
                <Night1 />
                <Night2 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />

          <Route
            path="/dvr"
            element={
              <>
                <DVR1 />
                <DVR2 />
                <DVR3 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />

          <Route
            path="/nvr"
            element={
              <>
                <NVR1 />
                <NVR2 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />

          <Route
            path="/bio"
            element={
              <>
                <Bio1 />
                <Bio2 />
                <Bio3 />
                <IndoorOutdoor3 />
                <BrandsSection />
                <Footer />
              </>
            }
          />

          <Route path="/about" element={
  <>
    <About />
    <IndoorOutdoor3 />
    <BrandsSection />
    <Footer />
  </>
} />
          <Route
            path="/contact"
            element={
              <>
                <ContactHead />
                <Team />
                
                <ContactSection />
                
                
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
