/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


// FeatureCard.jsx
import { motion } from "framer-motion";

export default function FeatureCard({ title, content, image, delay = 0 }) {
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
      className="h-full flex flex-col bg-[#1A1A2E] rounded-2xl p-6 text-center space-y-6 cursor-pointer overflow-hidden max-w-3xl w-full mx-auto"
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

      <div className="text-white font-semibold text-2xl">{title}</div>

      <div className="text-base text-gray-300 whitespace-pre-line text-left flex-grow leading-relaxed">
        {content}
      </div>
    </motion.div>
  );
}
