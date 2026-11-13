/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesGrid from "./components/FeaturesGrid";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import Contact from "./components/Contact";
import BypassEmulator from "./pages/BypassEmulatorPage";
import DemoPage from "./pages/WatchDemo";
import "./App.css";

function MainPage({ setActiveSection }) {
  useEffect(() => {
    const sections = ["home", "about", "product", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            // Clean path update
            window.history.replaceState(null, "", `#/${id === "home" ? "home" : id}`);
          }
        });
      },
      { threshold: 0.6 }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [setActiveSection]);

  return (
    <>
      <section id="home">
        <HeroSection />
      </section>
      <section id="about">
        <AboutSection />
      </section>
      <section id="product">
        <FeaturesGrid />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </>
  );
}

export default function App() {
  const location = useLocation();
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (location.hash) {
      const el = document.querySelector(location.hash);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);

  const [showContent, setShowContent] = useState(false);
  useGSAP(() => {
    const tl = gsap.timeline();

    tl.to('.vi-mask-group', {
      rotate: 10,
      duration: 2,
      ease: 'power4.inOut',
      transformOrigin: '50% 50%',
    });

    tl.to('.vi-mask-group', {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: 'expo.inOut',
      transformOrigin: '50% 50%',
      opacity: 0,
      onUpdate: function () {
        if (this.progress() >= 0.9) {
          document.querySelector('.svg')?.remove();
          setShowContent(true);
          this.kill();
        }
      },
    });
  });

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black" />
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="200"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  CXP
                </text>
              </g>
            </mask>
          </defs>
          <image
            href={`${import.meta.env.BASE_URL}bg.png`}
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          />
        </svg>
      </div>

      {showContent && (
        <div
          className={`relative min-h-screen font-sans bg-gradient-to-br from-[#0B0B1F] to-[#111133] overflow-x-hidden text-white transition-opacity duration-500 ${
            showContent ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          }`}
        >
          <div className="relative min-h-screen font-sans bg-gradient-to-br from-[#0B0B1F] to-[#111133] overflow-x-hidden text-white">
            <AnimatedBackground />
            <Navbar activeSection={activeSection} />
            <main>
              <Routes>
                <Route path="/" element={<Navigate to="/home" replace />} />
                <Route path="/home" element={<MainPage setActiveSection={setActiveSection} />} />
                <Route path="/about" element={<MainPage setActiveSection={setActiveSection} />} />
                <Route path="/product" element={<MainPage setActiveSection={setActiveSection} />} />
                <Route path="/contact" element={<MainPage setActiveSection={setActiveSection} />} />
                <Route path="/product/bypass-emulator" element={<BypassEmulator />} />
                <Route path="/demo" element={<DemoPage />} />
                <Route path="*" element={<Navigate to="/home" replace />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      )}
    </>
  );
}
