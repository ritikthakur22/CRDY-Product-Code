/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


import { useState } from "react";

export default function PanelPurchaseForm({
  panelName,
  prices,
  durations,
  qrImages,
  webhookURL,
  priceDefaultKey = "1",
}) {
  const [durationKey, setDurationKey] = useState(priceDefaultKey);
  const [paymentMethod, setPaymentMethod] = useState("binance");
  const [email, setEmail] = useState("");
  const [txnId, setTxnId] = useState("");
  const [confirmed, setConfirmed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState("submitted");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [creating, setCreating] = useState(false);

  const [emailFocused, setEmailFocused] = useState(false);
  const [txnFocused, setTxnFocused] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (isSubmitting) return;
    if (!confirmed) return alert("Please confirm the payment.");
    setIsSubmitting(true);

    const mentionText =
      "Owner role: <@&1316778658228076554>\nMod role: <@&1347241343818268733>";

    const embed = {
      content: mentionText,
      embeds: [
        {
          title: `🧾 New Panel Purchase - ${panelName}`,
          color: 0x00ff99,
          fields: [
            {
              name: "🕒 Duration",
              value: durations[durationKey],
              inline: true,
            },
            { name: "💰 Price", value: prices[durationKey], inline: false },
            {
              name: "💳 Payment Method",
              value: paymentMethod.toUpperCase(),
              inline: true,
            },
            { name: "📧 Email", value: email || "N/A", inline: false },
            {
              name: "🔐 Transaction ID",
              value: txnId ? `||${txnId}||` : "N/A",
              inline: true,
            },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: "CRDY Products • Payment Submission" },
        },
      ],
    };

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(embed),
      });
      
      setShowModal(true);
      setModalStep("submitted");
    } catch (err) {
      alert("Failed to submit to Discord.");
      console.error(err);
    }
  };

  const handleCreateIdClick = () => setModalStep("createId");

  const handleCreateIdSubmit = async () => {
    if (!userId.trim() || !password.trim()) {
      alert("Please enter both ID and password.");
      return;
    }

    setCreating(true);
    const mentionText =
      "Owner role: <@&1316778658228076554>\nMod role: <@&1347241343818268733>";

    const embed = {
      content: mentionText,
      embeds: [
        {
          title: "🆔 New ID Creation Request",
          color: 0x00ff99,
          fields: [
            { name: "User ID", value: userId, inline: false },
            { name: "Password", value: "||" + password + "||", inline: false },
          ],
          timestamp: new Date().toISOString(),
          footer: { text: "CRDY Products • ID Creation" },
        },
      ],
    };

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(embed),
      });
      setModalStep("success");
      setTimeout(() => {
        setShowModal(false);
        
        setUserId("");
        setPassword("");
        setConfirmed(false);
        setEmail("");
        setTxnId("");
        setDurationKey(priceDefaultKey);
        setPaymentMethod("binance");
      }, 2200);
    } catch (error) {
      alert("Failed to create ID. Please try again.");
      console.error(error);
    } finally {
      setCreating(false);
    }
  };

  const qrImage = qrImages[paymentMethod];

  const labelClass = (focusedOrFilled) =>
    `absolute left-4 top-3 text-green-400 text-sm transition-all duration-300 pointer-events-none ${
      focusedOrFilled
        ? "top-[-10px] text-xs opacity-90 bg-[#12122a] px-1 rounded"
        : ""
    }`;

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto relative bg-[#12122a] bg-opacity-80 border border-green-500 rounded-3xl shadow-[0_0_20px_rgba(0,255,150,0.6)] p-10 backdrop-blur-md"
      >
        {/* Time Selection Cards */}
        <div className="mb-12">
          <label className="block mb-6 text-green-400 font-bold tracking-wide text-center text-xl uppercase">
            Select Time Period
          </label>

          <div className="flex flex-wrap justify-center gap-8 max-w-5xl w-full mx-auto">
            {Object.entries(durations).map(([key, label], i) => {
              const iconMap = {
                1: "⏰",
                2: "📅",
                3: "♾️",
              };

              const icon = iconMap[key.toLowerCase()] || "🔘";
              const isSelected = durationKey === key;

              return (
                <div
                  key={key}
                  onClick={() => setDurationKey(key)}
                  className={`flex flex-col items-center justify-center min-w-[120px] max-w-[180px] md:min-w-[140px] md:max-w-[200px] cursor-pointer rounded-2xl p-6 text-center transition-all duration-300 transform
        ${
          isSelected
            ? "bg-gradient-to-br from-green-600 to-green-800 border-2 border-green-400 shadow-xl shadow-green-500/30 scale-[1.05]"
            : "bg-[#1A1A2E] border border-white/10 hover:border-green-300 hover:shadow-md hover:scale-105"
        }`}
                  style={{ animationDelay: `${0.1 * i + 0.2}s` }}
                >
                  <div className="text-4xl mb-3 leading-none font-sans">
                    {icon}
                  </div>
                  <div className="text-lg font-bold text-green-400 tracking-wide mb-1">
                    {label}
                  </div>
                  <div className="text-sm text-gray-300 font-medium">
                    {prices[key]}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Amount Display */}
        <div className="mb-8 text-center">
          <label className="block mb-2 text-green-400 font-semibold tracking-wide">
            Selected Plan Amount
          </label>
          <div
            className="
      w-full max-w-xs mx-auto
      p-6 rounded-2xl
      bg-gradient-to-r from-green-600 via-green-500 to-green-700
      text-green-50 font-extrabold text-3xl
      tracking-wide select-none
      shadow-lg shadow-green-600/60
      ring-2 ring-green-400
      "
          >
            {prices[durationKey]}
          </div>
        </div>

        {/* Payment Method Selection Cards */}
        <div className="mb-12">
          <label className="block mb-6 text-green-400 font-bold tracking-wide text-center text-xl uppercase">
            Select Payment Method
          </label>

          <div className="flex flex-wrap justify-center gap-8 max-w-3xl w-full mx-auto">
            {Object.keys(qrImages).map((method, i) => {
              const isSelected = paymentMethod === method;

              const iconMap = {
                binance: "🟡",
                upi: "📱",
                gpay: "💳",
              };

              return (
                <div
                  key={method}
                  onClick={() => setPaymentMethod(method)}
                  className={`flex flex-col items-center justify-center min-w-[120px] max-w-[180px] md:min-w-[140px] md:max-w-[200px] cursor-pointer rounded-2xl p-6 text-center transition-all duration-300 transform
            ${
              isSelected
                ? "bg-gradient-to-br from-green-600 to-green-800 border-2 border-green-400 shadow-xl shadow-green-500/30 scale-[1.05]"
                : "bg-[#1A1A2E] border border-white/10 hover:border-green-300 hover:shadow-md hover:scale-105"
            }`}
                  style={{ animationDelay: `${0.1 * i + 0.2}s` }}
                >
                  {/* Payment Icon */}
                  <div className="text-4xl mb-3">
                    {iconMap[method] || iconMap.default}
                  </div>

                  {/* Method Label */}
                  <div className="text-lg font-bold text-green-400 tracking-wide">
                    {method.toUpperCase()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* QR Code */}
        {qrImage && (
          <div className="text-center my-6">
            <img
              src={qrImage}
              alt={`${paymentMethod} QR`}
              className="mx-auto w-56 h-56 sm:w-72 sm:h-72 border-4 border-green-500 rounded-lg shadow-lg"
            />
          </div>
        )}

        {/* Email */}
        <div className="mb-10 relative">
          <input
            id="email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(email.length > 0)}
            className="peer w-full p-4 rounded-xl bg-[#1a1a33] border border-green-600 text-green-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 transition placeholder-transparent"
            placeholder=" "
          />
          <label
            htmlFor="email"
            className={labelClass(emailFocused || email.length > 0)}
          >
            Email
          </label>
        </div>

        {/* Transaction ID */}
        <div className="mb-10 relative">
          <input
            id="txnId"
            type="text"
            required
            value={txnId}
            onChange={(e) => setTxnId(e.target.value)}
            onFocus={() => setTxnFocused(true)}
            onBlur={() => setTxnFocused(txnId.length > 0)}
            className="peer w-full p-4 rounded-xl bg-[#1a1a33] border border-green-600 text-green-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 transition placeholder-transparent"
            placeholder=" "
          />
          <label
            htmlFor="txnId"
            className={labelClass(txnFocused || txnId.length > 0)}
          >
            Transaction ID
          </label>
        </div>

        {/* Confirm Payment */}
        <div className="mb-12 flex items-center gap-4">
          <input
            id="paymentConfirmed"
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="w-6 h-6 rounded-md border-2 border-green-400 accent-green-400 cursor-pointer transition shadow-[0_0_8px_rgba(0,255,150,0.7)]"
          />
          <label
            htmlFor="paymentConfirmed"
            className="cursor-pointer text-green-400 font-semibold select-none hover:text-green-500"
          >
            I confirm that I have completed the payment.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 font-extrabold text-lg text-black rounded-3xl bg-gradient-to-r from-green-400 to-green-600 shadow-lg
          hover:from-green-500 hover:to-green-700
          animate-pulse"
          style={{ animationDuration: "3s" }}
        >
          Submit
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-6"
          style={{ animation: "fadeInSlideUp 0.4s ease forwards" }}
        >
          <div className="bg-[#12122a] border border-green-500 rounded-3xl p-8 max-w-md w-full shadow-lg text-white text-center">
            {modalStep === "submitted" && (
              <>
                <h2 className="text-4xl font-bold mb-6 text-green-400 drop-shadow-md">
                  Submitted Successfully!
                </h2>
                <button
                  onClick={handleCreateIdClick}
                  className="inline-block px-10 py-3 bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 rounded-3xl font-semibold shadow-lg transition"
                >
                  Create ID
                </button>
              </>
            )}

            {modalStep === "createId" && (
              <>
                <h2 className="text-3xl font-semibold mb-6 text-green-400 drop-shadow-md">
                  Create Your ID
                </h2>
                <input
                  type="text"
                  placeholder="Enter ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full mb-5 p-4 rounded-xl bg-[#1a1a33] border border-green-600 text-green-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 transition placeholder-transparent placeholder:text-green-400"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-8 p-4 rounded-xl bg-[#1a1a33] border border-green-600 text-green-300 font-semibold focus:outline-none focus:ring-2 focus:ring-green-400 transition placeholder-transparent placeholder:text-green-400"
                />
                <button
                  onClick={handleCreateIdSubmit}
                  disabled={creating}
                  className={`w-full py-4 font-extrabold rounded-3xl transition shadow-lg
                    ${
                      creating
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
                    }`}
                >
                  {creating ? "Creating..." : "Create"}
                </button>
              </>
            )}

            {modalStep === "success" && (
              <h2 className="text-green-400 text-3xl font-bold drop-shadow-md">
                ID created successfully!
              </h2>
            )}
          </div>

          <style>{`
            @keyframes fadeInSlideUp {
              0% {
                opacity: 0;
                transform: translateY(20px);
              }
              100% {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      )}
    </>
  );
}
