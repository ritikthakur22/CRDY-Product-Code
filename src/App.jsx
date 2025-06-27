/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


import { Routes, Route, Navigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import FeaturesGrid from "./components/FeaturesGrid";
import Footer from "./components/Footer";
import AnimatedBackground from "./components/AnimatedBackground";
import Contact from "./components/Contact";
import BypassEmulator from "./pages/BypassEmulatorPage";
import DemoPage from "./pages/WatchDemo";

function MainPage({ setActiveSection }) {
  useEffect(() => {
    const sections = ["home", "about", "product", "contact"];
    const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // e.g. "/crdy-product"

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.id;
            setActiveSection(id);

            // Update URL with base and section, empty for home
            window.history.replaceState(
              null,
              "",
              `${base}/${id === "home" ? "" : id}`
            );
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

  const base = import.meta.env.BASE_URL.replace(/\/$/, ""); // e.g. "/crdy-product"

  return (
    <div className="relative min-h-screen font-sans bg-gradient-to-br from-[#0B0B1F] to-[#111133] overflow-x-hidden text-white">
      <AnimatedBackground />
      <Navbar activeSection={activeSection} />
      <main>
        <Routes>
          {/* Redirect base path to /home */}
          <Route
            path={`${base}/`}
            element={<Navigate to={`${base}/home`} replace />}
          />
          <Route
            path={`${base}/home`}
            element={<MainPage setActiveSection={setActiveSection} />}
          />
          <Route
            path={`${base}/about`}
            element={<MainPage setActiveSection={setActiveSection} />}
          />
          <Route
            path={`${base}/product`}
            element={<MainPage setActiveSection={setActiveSection} />}
          />
          <Route
            path={`${base}/contact`}
            element={<MainPage setActiveSection={setActiveSection} />}
          />
          <Route path="/product/bypass-emulator" element={<BypassEmulator />} />
          <Route path={`/demo`} element={<DemoPage />} />

          {/* Catch-all fallback */}
          <Route path="*" element={<Navigate to={`${base}/home`} replace />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
