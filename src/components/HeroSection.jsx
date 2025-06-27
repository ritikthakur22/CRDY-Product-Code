/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


import { motion, useAnimation, useCycle } from "framer-motion";
import { useEffect } from "react";

const blobVariants = {
  float: {
    y: [0, -20, 0],
    x: [0, 10, 0],
    transition: {
      yoyo: Infinity,
      duration: 6,
      ease: "easeInOut",
    },
  },
};

export default function HeroSection() {
  const controls = useAnimation();
  const [glow, cycleGlow] = useCycle(
    "text-green-400 drop-shadow-[0_0_10px_rgba(52,211,153,0.9)]",
    "text-teal-400 drop-shadow-[0_0_15px_rgba(45,212,191,1)]"
  );

  useEffect(() => {
    controls.start({
      className: glow,
      transition: { duration: 2, yoyo: Infinity, ease: "easeInOut" },
    });
    const interval = setInterval(() => cycleGlow(), 2000);
    return () => clearInterval(interval);
  }, [controls, glow, cycleGlow]);

  return (
    <motion.section
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      whileHover={{ scale: 1.02 }}
      className="relative text-center py-16 md:py-20 overflow-hidden"
    >
      {/* Animated blurred background blobs */}
      <motion.div
        variants={blobVariants}
        animate="float"
        className="absolute top-10 left-1/4 w-60 h-60 rounded-full bg-purple-700 opacity-30 blur-3xl"
      />
      <motion.div
        variants={blobVariants}
        animate="float"
        transition={{
          yoyo: Infinity,
          duration: 8,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-indigo-600 opacity-25 blur-3xl"
      />
      <motion.div
        variants={blobVariants}
        animate="float"
        transition={{
          yoyo: Infinity,
          duration: 7,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute bottom-10 left-1/2 w-64 h-64 rounded-full bg-blue-600 opacity-20 blur-2xl"
      />

      {/* Text content */}
      <motion.h1
        animate={controls}
        className="relative z-10 text-4xl md:text-5xl font-bold mb-4"
        style={{ textShadow: "0 0 10px rgba(52,211,153,0.8)" }}
      >
        Precision. Power. Undetected. <br /> Your Game, Your Rules
      </motion.h1>
      <p className="relative z-10 text-green-400 text-sm">Hack. Aim. Destroy.</p>
    </motion.section>
  );
}
