/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


import React from "react";
import { FaDiscord, FaYoutube } from "react-icons/fa";
import { motion } from "framer-motion";

const cardVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: (i) => ({
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { delay: 0.2 + i * 0.2, duration: 0.5, ease: "easeOut" },
  }),
};

const logoVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

export default function Contact() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#1B1B38] bg-opacity-80 backdrop-blur-md text-white py-10 px-4 mt-10 max-w-4xl mx-auto rounded-3xl shadow-lg"
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-3xl font-extrabold text-green-400 mb-4 text-center drop-shadow-lg"
      >
        GET IN TOUCH
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-base text-purple-300 max-w-xl mx-auto leading-relaxed mb-8"
      >
        Reach out for inquiries
        <br />
        and support
      </motion.p>

      <div className="flex flex-col md:flex-row justify-around items-center gap-8 mb-8 flex-wrap">
        {/* Discord */}
        <motion.a
          custom={0}
          variants={cardVariants}
          href="https://discord.gg/ZtVdDAMHfq"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center space-y-2 hover:text-white transition-colors"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(88, 101, 242, 0.5)",
          }}
        >
          <motion.div variants={logoVariants}>
            <FaDiscord className="text-5xl sm:text-6xl max-w-full" style={{ color: "#5865F2" }} />
          </motion.div>
          <h3 className="text-lg font-semibold text-white">CRDY Gaming's</h3>
          <p className="text-purple-300 max-w-xs">
            Discord community for all support & inquiries.
          </p>
        </motion.a>

        {/* YouTube */}
        <motion.a
          custom={1}
          variants={cardVariants}
          href="https://www.youtube.com/@crdyxits"
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center text-center space-y-2 hover:text-white transition-colors"
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 25px rgba(255, 0, 0, 0.4)",
          }}
        >
          <motion.div variants={logoVariants}>
            <FaYoutube className="text-5xl sm:text-6xl text-red-600 max-w-full" />
          </motion.div>
          <h3 className="text-lg font-semibold text-white">CRDY Xits</h3>
          <p className="text-purple-300 max-w-xs">
            YouTube channel for guides and updates.
          </p>
        </motion.a>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="text-center max-w-xl mx-auto"
      >
        <h4 className="text-lg font-semibold text-green-400 mb-2">Hours</h4>
        <p className="text-purple-300 leading-relaxed text-sm">
          All time available.
          <br />
          Admin will try to reply you as soon as possible.
        </p>
      </motion.div>
    </motion.section>
  );
}
