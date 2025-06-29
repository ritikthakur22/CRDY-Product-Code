/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import { motion } from "framer-motion";
import aboutImg from "../images/AboutsectionImage.png";
import { HiOutlineInformationCircle } from "react-icons/hi2";
import { HiOutlineCheckCircle } from "react-icons/hi2";
import { HiShieldCheck } from "react-icons/hi"; // Heroicons – bold with a checkmark
import { HiUserGroup } from "react-icons/hi"; // Heroicons – minimal and elegant
import { LuRocket } from "react-icons/lu"; // Lucide – clean and modern
import { TbCrown } from "react-icons/tb"; // Tabler Icons – clean lines, modern feel
import { AiOutlineMinus } from "react-icons/ai"; // Ant Design – clean and simple
import { AiOutlineStar } from "react-icons/ai";


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
            <div className="flex items-center space-x-2">
              <HiOutlineInformationCircle className="text-green-400 text-2xl hover:scale-125 transition-transform duration-300 delay-150  drop-shadow-[0_0_4px_#00ff00]" />
              <span style={{ textShadow: "0 0 10px rgba(52,211,153,0.8)" }}>
                About Crdy-Xits
              </span>
            </div>
          </h2>

          <p className="text-lg font-semibold">
            Bypass Emulator – Our Flagship Tool
          </p>

          <p>
            Crdy-Xits is proud to present the most trusted and powerful{" "}
            <strong>Bypass Emulator</strong> tool for Free Fire players. Unlock
            full emulator capabilities with complete antiban protection.
          </p>

          <h3 className="text-2xl font-semibold mt-8 mb-4 flex items-center space-x-3 text-green-400">
            <span>🔑</span>
            <span>Key Features</span>
          </h3>

          <ul className="list-disc list-inside space-y-2 text-white-400">
            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="cursor-pointer transition flex items-center space-x-2"
            >
              <HiOutlineCheckCircle className="text-green-400 text-2xl hover:scale-125 transition-transform duration-300" />
              <span>Undetectable & Safe for Main IDs</span>
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="cursor-pointer transition flex items-center space-x-2"
            >
              <HiOutlineCheckCircle className="text-green-400 text-2xl hover:scale-125 transition-transform duration-300" />
              <span>Supports Android x86 & ARM</span>
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="cursor-pointer transition flex items-center space-x-2"
            >
              <HiOutlineCheckCircle className="text-green-400 text-2xl hover:scale-125 transition-transform duration-300" />
              <span>Plug-and-Play – No Root Required</span>
            </motion.li>

            <motion.li
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.3, ease: "easeInOut" },
              }}
              className="cursor-pointer transition flex items-center space-x-2"
            >
              <HiOutlineCheckCircle className="text-green-400 text-2xl hover:scale-125 transition-transform duration-300" />
              <span>Zero-lag, stable performance</span>
            </motion.li>
          </ul>

          <h3 className="text-2xl text-green-400 font-semibold mt-8 mb-4 flex items-center space-x-3">
            <span>🤔</span>
            <span>Why Choose Us?</span>
          </h3>

          <ul className="list-none space-y-2">
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer transition"
            >
              <HiShieldCheck className="inline mr-2 text-2xl text-green-400" />
              <span>Trusted by thousands of gamers</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer transition"
            >
              <HiUserGroup className="inline mr-2 text-2xl text-[#5B9BEE]" />
              <span>Growing, verified gaming community</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer transition"
            >
              <LuRocket className="inline mr-2 text-2xl text-[#AF78EA]" />
              <span>Continuous updates & support</span>
            </motion.li>
            <motion.li
              whileHover={{ scale: 1.1 }}
              className="cursor-pointer transition flex items-center space-x-3"
            >
              {/* Icons stacked with tight spacing */}
              <span className="flex flex-col items-center text-[#EFC317]">
                <TbCrown className="text-2xl -mb-3" />
                <AiOutlineMinus className="text-xl" />
              </span>

              <span>Always antiban — always protected</span>
            </motion.li>
          </ul>

          {/* <p className="mt-8 text-lg font-semibold">
            📢 Take control of your Free Fire emulator experience — start with
            Bypass Emulator today.
          </p> */}

          <div className="p-4 max-w-md mt-10">
            <div className="flex items-start space-x-3 rounded-xl border border-green-400/30 bg-white/5 backdrop-blur-md p-4 text-green-400">
              <AiOutlineStar className="text-4xl mt-1" />
              <p className="text-[16px] font-semibold leading-relaxed">
                Take control of your free fire emulator experience – start with{" "}
                <span className="text-green-500 font-extrabold">Bypass Emulator</span> today.
              </p>
            </div>
          </div>
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
