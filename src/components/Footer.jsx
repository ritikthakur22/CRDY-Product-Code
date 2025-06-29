/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import { FaDiscord, FaYoutube } from "react-icons/fa";
import { RiYoutubeLine } from "react-icons/ri"; // Remix Icons – clean and outlined
import { RiDiscordLine } from "react-icons/ri"; // Remix Icons – modern and minimal
import { MdOutlineCopyright } from "react-icons/md"; // Material Design – sleek and simple
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      initial={false}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="backdrop-blur-md text-white py-10 px-6 sm:px-10 mt-7 w-full overflow-x-hidden"
      style={{ backgroundColor: "rgba(27, 27, 56, 0.6)" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Top section: columns */}
        <div className="flex flex-col md:flex-row justify-between gap-8">
          {/* Column 1 */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-3 max-w-xs md:max-w-none"
          >
            <h3 className="text-2xl font-extrabold text-green-400 mb-2 drop-shadow-lg">
              CRDY Products
            </h3>
            <p className="text-purple-300 leading-relaxed">
              High-performance Bypass Emulator.
              <br />
              Delivery through Discord | Secure Payments.
            </p>
            <span>
              <a href="https://discord.gg/ZtVdDAMHfq" target="_blank">
                <RiDiscordLine className="inline text-xl sm:text-3xl text-white cursor-pointer hover:text-[#5865F2]" />
              </a>
              <a href="https://www.youtube.com/@crdyxits" target="_blank">
                <RiYoutubeLine className="inline text-xl sm:text-3xl text-white mx-5 cursor-pointer hover:text-red-600" />
              </a>
            </span>
          </motion.div>

          {/* Column 2 */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-3 max-w-xs md:max-w-none"
          >
            <h4 className="text-lg font-semibold text-green-400 mb-2">
              Contact
            </h4>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://discord.gg/ZtVdDAMHfq"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors ease-in-out duration-300"
            >
              <FaDiscord className="text-xl shrink-0" />
              <span className="truncate">
                Discord: <strong>CRDY Gamings</strong>
              </span>
            </motion.a>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="https://www.youtube.com/@crdyxits"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors ease-in-out duration-300"
            >
              <FaYoutube className="text-xl shrink-0" />
              <span className="truncate">
                YouTube: <strong>CRDY Xits</strong>
              </span>
            </motion.a>
          </motion.div>
        </div>

        {/* Bottom row: copyright */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="border-t border-green-400/20 pt-6 text-sm text-purple-400 flex justify-center items-center text-center"
        >
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-center gap-2">
              <MdOutlineCopyright className="text-lg" />
              <span>2025 CRDY Products. All rights reserved.</span>
            </div>
            <div>
              Web design by{" "}
              <a
                href="https://github.com/a-adarsh1"
                target="_blank"
                rel="noreferrer"
                className="text-green-400 font-semibold hover:underline"
              >
                A-adarsh1
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  );
}

{
  /* Right: Copyright */
}
{
  /* <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="flex-1 min-w-[220px] text-sm text-purple-400"
        >
          <div className="flex items-center gap-1">
            <FaCopyright className="shrink-0" />
            <span className="truncate">
              2025 CRDY Products. All rights reserved.
            </span>
          </div>
          <div>
            Web design by{" "}
            <a
              href="https://github.com/a-adarsh1"
              target="_blank"
              rel="noreferrer"
              className="text-green-400 font-semibold hover:underline"
            >
              A-adarsh1
            </a>
          </div>
        </motion.div> */
}
