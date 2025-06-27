/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


import FeatureCard from "./FeatureCard";
import bypassBanner from "../images/bypass-banner.png";
import { useNavigate } from "react-router-dom";

export default function FeaturesGrid() {
  const navigate = useNavigate();

  const onExploreClick = () => {
    navigate("/product/bypass-emulator");
  };

  return (
    <section className="relative overflow-hidden px-6 py-20 bg-gradient-to-br from-[#0F0F3D] via-[#1A1A2E] to-black rounded-xl max-w-5xl mx-auto">
      <h2 className="text-center text-4xl font-bold text-white mb-12 z-10 relative">
        🛡️ Our Featured Tool
      </h2>

      <div className="relative z-10 w-full">
        <FeatureCard
          title="Bypass Emulator"
          content={`Unlock full access by bypassing emulator restrictions in apps and games.\n✅ Undetectable\n✅ Supports Android x86 & ARM\n✅ Plug-and-play solution`}
          image={bypassBanner}
          delay={0}
        />
      </div>

      <div className="text-center mt-12 z-10 relative">
        <button
          onClick={onExploreClick}
          className="bg-green-500 hover:bg-green-400 text-black font-semibold px-6 py-3 rounded-xl shadow-md transition"
        >
          Explore Now
        </button>
      </div>
    </section>
  );
}
