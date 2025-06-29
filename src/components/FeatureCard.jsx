/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */

// FeatureCard.jsx
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { RiShieldLine } from "react-icons/ri";
import { HiOutlineDeviceMobile } from "react-icons/hi"; // Heroicons – tall and minimal
import { LuMonitor } from "react-icons/lu"; // Lucide – crisp lines, great for tech UIs

export default function FeatureCard({ title, content, image, delay = 0 }) {
  const navigate = useNavigate();

  const onExploreClick = () => {
    navigate("/product/bypass-emulator");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay,
        duration: 0.7,
        ease: "easeOut",
      }}
      whileHover={{
        scale: 1.05,
        boxShadow: `
          inset 0 0 12px rgba(0, 255, 180, 0.2),
          0 0 25px rgba(0, 255, 180, 0.35),
          0 10px 30px rgba(0, 0, 0, 0.5)
        `,
        transition: {
          boxShadow: { duration: 0.1 },
          scale: { duration: 0.3 },
        },
      }}
      className="h-full flex flex-col bg-[#1A1A2E] rounded-2xl p-6 space-y-4 text-center overflow-hidden max-w-3xl w-full mx-auto"
      style={{
        border: "1px solid rgba(255, 255, 255, 0.05)",
      }}
    >
      {image && (
        <div className="aspect-video w-full overflow-hidden rounded-lg bg-black/10 relative">
          <motion.img
            src={image}
            alt={title}
            loading="lazy"
            className="w-full h-full object-contain transition-transform duration-300"
            animate={{
              scale: [1, 1.05, 1],
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "loop",
            }}
            whileHover={{ scale: 1.1 }}
          />
          <span className="absolute top-2 right-2 text-xs bg-green-400 text-black px-2 py-1 rounded-full font-semibold shadow-md">
            Recommended
          </span>
        </div>
      )}

      <div className="text-green-400 font-semibold text-3xl text-center">
        {title}
      </div>

      <div className="w-full h-[2px] bg-green-700 mx-auto my-1 rounded-full" />

      <div className="space-y-3 text-center">
        {/* First line stays plain */}
        <div className="text-gray-200 text-base font-medium">
          {content.split("\n")[0]}
        </div>

        {/* Remaining lines with different bg + icons */}
        {content
          .split("\n")
          .slice(1)
          .map((line, index) => {
            const bgColors = [
              "bg-[#243C58]", // 2nd line
              "bg-[#2A2F7A]", // 3rd line
              "bg-[#42267D]", // 4th line
            ];

            const icons = [
              <RiShieldLine
                key="shield"
                className="text-white-300 text-xl mr-2"
              />,
              <HiOutlineDeviceMobile key="mobile" className="text-white-300 text-xl mr-2" />,
              <LuMonitor key="monitor" className="text-white-300 text-xl mr-2" />,
            ];

            return (
              <div
                key={index}
                className={`inline-flex items-center justify-center ${
                  bgColors[index] || "bg-white/5"
                } backdrop-blur-md rounded-xl px-6 py-6 text-sm text-gray-200 shadow-inner border border-white/10 mx-2 my-7`}
              >
                {icons[index]}
                {line}
              </div>
            );
          })}

        {/* Button */}
        <div className="text-center mt-12 z-10 relative">
          <button
            onClick={onExploreClick}
            className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md transition cursor-pointer"
          >
            Explore Now
          </button>
        </div>
      </div>
    </motion.div>
  );
}
