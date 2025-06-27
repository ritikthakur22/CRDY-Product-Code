/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


import { motion } from "framer-motion";
import aboutImg from "../images/AboutsectionImage.png";

const blobVariants = {
  float: {
    y: [0, -15, 0],
    transition: {
      repeat: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden py-12 md:py-16 px-6 md:px-16 min-h-[600px]"
    >
      {/* Background blobs */}
      <motion.div
        variants={blobVariants}
        animate="float"
        className="absolute top-0 left-1/4 w-72 h-72 rounded-full bg-purple-700 opacity-20 blur-3xl"
      />
      <motion.div
        variants={blobVariants}
        animate="float"
        transition={{ delay: 1, duration: 8 }}
        className="absolute top-20 right-1/4 w-80 h-80 rounded-full bg-indigo-600 opacity-15 blur-3xl"
      />
      <motion.div
        variants={blobVariants}
        animate="float"
        transition={{ delay: 0.5, duration: 7 }}
        className="absolute bottom-10 left-1/2 w-72 h-72 rounded-full bg-blue-600 opacity-10 blur-2xl"
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        {/* Text */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 space-y-6 text-white"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 flex items-center space-x-3">
            <span>💻</span>
            <span>About Crdy-Xits</span>
          </h2>

          <p className="text-lg font-semibold">
            Bypass Emulator – Our Flagship Tool
          </p>

          <p>
            Crdy-Xits is proud to present the most trusted and powerful{" "}
            <strong>Bypass Emulator</strong> tool for Free Fire players. Unlock
            full emulator capabilities with complete antiban protection.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 flex items-center space-x-3">
            <span>🔓</span>
            <span>Key Features</span>
          </h3>

          <ul className="list-disc list-inside space-y-2 text-green-400">
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer transition">
              🛡️ Undetectable & Safe for Main IDs
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer transition">
              ⚙️ Supports Android x86 & ARM
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer transition">
              🧩 Plug-and-Play – No Root Required
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer transition">
              🎯 Zero-lag, stable performance
            </motion.li>
          </ul>

          <h3 className="text-2xl font-semibold mt-8 mb-4 flex items-center space-x-3">
            <span>✅</span>
            <span>Why Choose Us?</span>
          </h3>

          <ul className="list-disc list-inside space-y-2 text-green-400">
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer transition">
              💯 Trusted by thousands of gamers
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer transition">
              🌐 Growing, verified gaming community
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer transition">
              🔄 Continuous updates & support
            </motion.li>
            <motion.li whileHover={{ scale: 1.1 }} className="cursor-pointer transition">
              🔐 Always antiban — always protected
            </motion.li>
          </ul>

          <p className="mt-8 text-lg font-semibold">
            📢 Take control of your Free Fire emulator experience — start with
            Bypass Emulator today.
          </p>
        </motion.div>

        {/* Image with hover animation */}
        <motion.img
          src={aboutImg}
          alt="Bypass Emulator Overview"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          whileHover={{
            scale: 1.05,
            rotate: 4,
            boxShadow: "0 10px 40px rgba(0, 255, 180, 0.2)",
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="w-full max-w-md rounded-xl shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
