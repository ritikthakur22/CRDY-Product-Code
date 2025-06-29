/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import { motion } from "framer-motion";
import { RiYoutubeLine } from "react-icons/ri"; // Remix Icons – clean and outlined
import { RiDiscordLine } from "react-icons/ri"; // Remix Icons – modern and minimal
import { LuHeadphones } from "react-icons/lu"; // Lucide – clean and lightweight

const platforms = [
  {
    name: "CRDY Gaming's",
    description: "Discord community for all support & inquiries.",
    icon: (
      <div
        style={{ backgroundColor: "#5865F2" }}
        className="rounded-full p-3 inline-flex"
      >
        <RiDiscordLine className="text-5xl sm:text-6xl text-white" />
      </div>
    ),
    href: "https://discord.gg/ZtVdDAMHfq",
    glow: "0 0 25px rgba(88, 101, 242, 0.5)",
  },
  {
    name: "CRDY Xits",
    description: "YouTube channel for guides and updates.",
    icon: (
      <div className="bg-red-600 rounded-full p-3 inline-flex">
        <RiYoutubeLine className="text-5xl sm:text-6xl text-white" />
      </div>
    ),
    href: "https://www.youtube.com/@crdyxits",
    glow: "0 0 25px rgba(255, 0, 0, 0.4)",
  },
  {
    name: "Support",
    description:
      "24 hour available. Always available to clarify queries and provide guidance.",
    icon: (
      <div className="bg-green-500 rounded-full p-3 inline-flex">
        <LuHeadphones className="text-5xl sm:text-6xl text-white" />
      </div>
    ),
    href: "https://discord.gg/ZtVdDAMHfq",
    glow: "0 0 25px rgba(0, 255, 180, 0.35)",
  },
];

export default function Contact() {
  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="relative overflow-hidden bg-[#1B1B38] bg-opacity-80 backdrop-blur-md text-white py-10 px-4 mt-10 max-w-4xl mx-auto rounded-3xl shadow-lg"
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, delay: 0.1 }}
        className="text-center mb-6 relative"
      >
        <h2
          className="text-5xl font-bold text-white"
          style={{ textShadow: "0 0 10px rgba(52,211,153,0.8)" }}
        >
          GET IN TOUCH
        </h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.2 }}
        className="text-center text-base text-purple-300 max-w-xl mx-auto leading-relaxed mb-12"
      >
        Reach out for inquiries and support
      </motion.p>

      {/* cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {platforms.map((item, index) => (
          <motion.a
            key={index}
            href={item.href || "#"}
            target={item.href ? "_blank" : "_self"}
            rel="noopener noreferrer"
            whileHover={{
              scale: 1.05,
              boxShadow: item.glow,
            }}
            className="flex flex-col items-center text-center p-6 rounded-xl bg-white/5 backdrop-blur-md shadow-inner border border-white/10 transition duration-300 hover:text-white space-y-3 cursor-pointer"
          >
            {item.icon}
            <h3 className="text-lg font-semibold text-white">{item.name}</h3>
            <p className="text-sm text-purple-300">{item.description}</p>
          </motion.a>
        ))}
      </div>

      {/* Availability Info */}
      <motion.div
        initial={{ opacity: 0, y: 20, scale: 0.95 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
        className="text-center max-w-xl mx-auto mt-10"
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
