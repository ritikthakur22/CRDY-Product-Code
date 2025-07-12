/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import logo from "../assets/CXP/Primary with transparent.png";
import { smoothScrollToId } from "../utils/smoothScroll";

const sections = ["home", "about", "product", "contact"];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [ignoreScroll, setIgnoreScroll] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const path = location.pathname.toLowerCase();

    if (path.includes("/about")) setActiveSection("about");
    else if (path.includes("/product")) setActiveSection("product");
    else if (path.includes("/contact")) setActiveSection("contact");
    else if (path === "/" || path.includes("/home")) {
      setActiveSection("home");
    } else {
      setActiveSection("");
    }

    const onScroll = () => {
      if (ignoreScroll) return;

      for (let section of sections) {
        const el = document.getElementById(section);
        if (!el) continue;
        const rect = el.getBoundingClientRect();
        if (rect.top <= 100 && rect.bottom >= 100) {
          setActiveSection(section);
          window.history.replaceState(null, "", `/${section}`);
          break;
        }
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [location, ignoreScroll]);

  const handleNavClick = (section) => {
    setIsOpen(false);
    setIgnoreScroll(true);

    setActiveSection(section);
    navigate(`/${section}`);

    setTimeout(() => {
      smoothScrollToId(section);
      setTimeout(() => {
        setIgnoreScroll(false);
      }, 700);
    }, 50);
  };

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 bg-[#12122A] shadow-md"
    >
      <div
        onClick={() => {
          navigate(`/`);
          setActiveSection("home");
          window.scrollTo({ top: 0, behavior: "smooth" });
          setIsOpen(false);
        }}
        className="flex items-center space-x-2 cursor-pointer select-none hover:scale-110 transition-transform duration-500"
        title="CXP Home"
      >
        <img src={logo} alt="Logo" className="w-16 h-8 object-contain" />
        <span className="text-white font-bold text-xl">CRDY Products</span>
      </div>

      <ul className="hidden md:flex space-x-8 text-sm text-white">
        {sections.map((section) => (
          <li
            key={section}
            onClick={() => handleNavClick(section)}
            className={`cursor-pointer px-2 py-1 relative transition-all ${
              activeSection === section
                ? "text-green-400 font-semibold after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-green-400"
                : "hover:text-green-300"
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex space-x-2">
        <button
          className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer select-none
            ${
              location.pathname === "/demo"
                ? "bg-green-500 text-black shadow-lg border-2 border-green-600 hover:bg-green-600"
                : "text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black"
            }
          `}
          onClick={() => {
            setIsOpen(false);
            navigate("/demo");
          }}
        >
          Watch Demo
        </button>

        <a
          href="https://discord.gg/ZtVdDAMHfq"
          rel="noopener noreferrer"
          className="bg-green-400 text-black px-4 py-1 rounded hover:bg-green-500 transition inline-flex items-center cursor-pointer select-none"
        >
          Join the Community
        </a>
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-white">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="absolute top-full left-0 w-full bg-[#1A1A2E] md:hidden flex flex-col px-6 py-4 space-y-4 text-white z-50"
          >
            {sections.map((section) => (
              <div
                key={section}
                onClick={() => handleNavClick(section)}
                className={`cursor-pointer text-center py-2 rounded ${
                  activeSection === section
                    ? "text-green-400 font-semibold bg-white/10"
                    : "hover:text-green-300"
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </div>
            ))}
            <button
              className={`px-5 py-2 rounded-lg font-semibold transition-all duration-300 ease-in-out cursor-pointer select-none
            ${
              location.pathname === "/demo"
                ? "bg-green-500 text-black shadow-lg border-2 border-green-600 hover:bg-green-600"
                : "text-green-400 border-2 border-green-400 hover:bg-green-400 hover:text-black"
            }
          `}
              onClick={() => {
                setIsOpen(false);
                navigate("/demo");
              }}
            >
              Watch Demo
            </button>

            <a
              href="https://discord.gg/ZtVdDAMHfq"
              rel="noopener noreferrer"
              className="bg-green-400 text-black px-4 py-1 rounded text-center block hover:bg-green-500 transition"
              onClick={() => setIsOpen(false)}
            >
              Join the Community
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
