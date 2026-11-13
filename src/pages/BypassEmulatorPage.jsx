/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


import { useEffect } from "react";
import "../App.css";
import PanelPurchaseForm from "../components/PanelPurchaseForm";

import img1 from "../images/bypass-emulator-changes.png";
import img2 from "../images/CXP-premium-bypass.png";

import qrBinance from "../assets/private/bianance.png";
import qrUpi from "../assets/private/upi.png";
import qrGpay from "../assets/private/Gpay.png";

export default function BypassEmulatorPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const panelName = "Bypass Emulator";
  const panelImages = [img1, img2];

  // Define prices and durations with matching keys (use strings like "1", "2", "3")
  const prices = {
    1: "1 $",
    2: "7 $",
    3: "15 $",
  };

  const durations = {
    1: "1 Day",
    2: "30 Days",
    3: "Lifetime",
  };

  const qrImages = {
    binance: qrBinance,
    upi: qrUpi,
    gpay: qrGpay,
  };

  const webhookURL =
    import.meta.env.VITE_WEBHOOK_URL ||
    (typeof atob === "function"
      ? atob(
          "aHR0cHM6Ly9kaXNjb3JkLmNvbS9hcGkvd2ViaG9va3MvMTM4ODQ1MTgwOTI3Nzc3MTg4MS95Z0g1QjIzd2ZPTmZZcGpNaVV4QWg0RGN0dkVpX3VldFp3OXNkRmxtQkN6SXVrWTZFdFhwQl8wc0lfMHZZSlFBMi1IQQ=="
        )
      : "");

  return (
    <section className="min-h-screen bg-[#12122A] pt-28 pb-20 px-6 max-w-6xl mx-auto text-gray-200 flex flex-col items-center gap-16 font-sans">
      <h1 className="text-5xl font-extrabold text-white text-center drop-shadow-lg animate-fadeInUp">
        {panelName}
      </h1>

      <p className="max-w-xl text-center text-lg text-gray-400">
        Payment Methods:{" "}
        <span className="text-yellow-400 font-semibold animate-pulse">
          Binance
        </span>
        ,{" "}
        <span className="text-green-500 font-semibold animate-pulse">UPI</span>,{" "}
        <span className="bg-gradient-to-r from-blue-400 via-red-500 to-green-400 bg-clip-text text-transparent font-semibold animate-pulse">
          GPay
        </span>
      </p>

      {/* OR Separator */}
      <div className="flex items-center justify-center my-6 w-full max-w-lg mx-auto">
        <div className="border-t border-green-500 flex-grow" />
        <span className="mx-4 bg-[#12122A] px-4 text-sm font-semibold text-green-400 uppercase tracking-widest select-none">
          OR
        </span>
        <div className="border-t border-green-500 flex-grow" />
      </div>

      {/* Exchange Info */}
      <div className="max-w-lg text-center px-6 space-y-5">
        <p className="text-2xl font-extrabold text-white leading-snug">
          Exchange with level <span className="text-yellow-400">55+</span> Free
          Fire ID
        </p>

        <p className="text-base text-gray-300 max-w-md mx-auto">
          (Only via Discord:{" "}
          <a
            href="https://discord.gg/ZtVdDAMHfq"
            target="_blank"
            rel="noreferrer noopener"
            className="font-bold text-red-500 underline hover:decoration-red-600"
          >
            CRDY Gaming
          </a>{" "}
          - DM <span className="font-semibold text-pink-500">crdy_dev</span>)
        </p>
      </div>

      {/* Preview Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 max-w-6xl w-full">
        {panelImages.map((src, i) => (
          <div
            key={i}
            className="preview-image animate-fadeInUp"
            style={{ animationDelay: `${0.3 + i * 0.2}s` }}
          >
            {/* Glow background */}
            <div className="glow-bg" />

            {/* Image */}
            <img
              src={src}
              alt={`Preview ${i + 1}`}
              className="img-zoom"
              draggable={false}
            />

            {/* Preview label at top right */}
            <span
              className="preview-label"
              style={{ top: "1.25rem", right: "1.25rem" }}
            >
              Preview
            </span>
          </div>
        ))}
      </div>

      {/* Purchase Form */}
      <div className="w-full max-w-3xl">
        <PanelPurchaseForm
          panelName={panelName}
          prices={prices}
          durations={durations}
          qrImages={qrImages}
          webhookURL={webhookURL}
          priceDefaultKey="1"
        />
      </div>
    </section>
  );
}
