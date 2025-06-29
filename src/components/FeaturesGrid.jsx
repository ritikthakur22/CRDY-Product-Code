/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */

import FeatureCard from "./FeatureCard";
import bypassBanner from "../images/bypass-banner.png";
import { LuWrench } from "react-icons/lu"; // Lucide – clean and lightweight
import { RiShieldLine } from "react-icons/ri"; // Remix Icons – simple and sharp
export default function FeaturesGrid() {


  return (
    <section className="relative overflow-hidden px-6 py-20 bg-gradient-to-br from-[#0F0F3D] via-[#1A1A2E] to-black rounded-xl max-w-5xl mx-auto">
      <div className="text-center mb-12 z-10 relative">
        <div className="flex justify-center items-center space-x-2">
          <LuWrench className="text-green-400 text-5xl hover:scale-125 transition-transform duration-300 delay-150 drop-shadow-[0_0_4px_#00ff00]" />
          <h2
            className="text-5xl font-bold text-white"
            style={{ textShadow: "0 0 10px rgba(52,211,153,0.8)" }}
          >
            About Crdy-Xits
          </h2>
        </div>
      </div>

      <div className="relative z-10 w-full">
        <FeatureCard
          title="Bypass Emulator"
          content={`Unlock full access by bypassing emulator restrictions in apps and games.\n💪 UnBannable\n📱 Supports Android x86 & ARM\n📱 No root required`}
          image={bypassBanner}
          delay={0}
        />
      </div>

    </section>
  );
}
