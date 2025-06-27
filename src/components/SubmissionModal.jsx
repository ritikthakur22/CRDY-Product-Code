/**
 * Copyright 2025 Aadarsh Chaudhary
 *
 * Licensed under the Apache License, Version 2.0
 * http://www.apache.org/licenses/LICENSE-2.0
 */


import { useState, useEffect } from "react";

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
  const [submitted, setSubmitted] = useState(false);

  // Modal states
  const [showModal, setShowModal] = useState(false);
  const [modalStep, setModalStep] = useState("submitted"); // 'submitted', 'createId', 'success'
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [creating, setCreating] = useState(false);

  // Handle fade out
  const [fadeOut, setFadeOut] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!confirmed) return alert("Please confirm the payment.");

    const data = {
      panel: panelName,
      duration: durations[durationKey],
      price: prices[durationKey],
      paymentMethod,
      email,
      txnId,
    };

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ content: JSON.stringify(data, null, 2) }),
      });
      setSubmitted(true);
      setShowModal(true);
      setModalStep("submitted");
      setFadeOut(false);
    } catch (err) {
      alert("Failed to submit");
      console.error(err);
    }
  };

  const handleCreateIdClick = () => {
    setModalStep("createId");
  };

  const handleCreateIdSubmit = async () => {
    if (!userId.trim() || !password.trim()) {
      alert("Please enter both ID and password.");
      return;
    }

    setCreating(true);

    try {
      await fetch(webhookURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          content: JSON.stringify(
            {
              action: "Create ID",
              userId,
              password,
            },
            null,
            2
          ),
        }),
      });
      setModalStep("success");

      // Fade out modal after 3 seconds
      setTimeout(() => {
        setFadeOut(true);
      }, 2000);

      // After fade out animation, reset and close modal
      setTimeout(() => {
        setShowModal(false);
        setSubmitted(false);
        setUserId("");
        setPassword("");
        setConfirmed(false);
        setEmail("");
        setTxnId("");
        setDurationKey(priceDefaultKey);
        setPaymentMethod("binance");
        setFadeOut(false);
      }, 3600); // fade duration + buffer
    } catch (error) {
      alert("Failed to create ID. Please try again.");
      console.error(error);
    } finally {
      setCreating(false);
    }
  };

  const qrImage = qrImages[paymentMethod];

  return (
    <>
      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-purple-950 p-6 rounded-lg shadow-xl border border-purple-700 text-white"
      >
        {/* Time Selection */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Select Time Period
          </label>
          <select
            className="w-full p-2 rounded bg-purple-800 border border-purple-600 text-white text-center focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            value={durationKey}
            onChange={(e) => setDurationKey(e.target.value)}
          >
            {Object.keys(durations).map((key) => (
              <option key={key} value={key}>
                {durations[key]}
              </option>
            ))}
          </select>
        </div>

        {/* Amount Display */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">Amount</label>
          <input
            className="w-full p-2 rounded bg-purple-800 border border-purple-600 text-center text-white"
            value={prices[durationKey]}
            readOnly
          />
        </div>

        {/* Payment Method */}
        <div className="mb-4">
          <label className="block mb-1 text-sm font-medium">
            Payment Method
          </label>
          <select
            className="w-full p-2 rounded bg-purple-800 border border-purple-600 text-white text-center focus:ring-2 focus:ring-green-400 focus:outline-none transition"
            value={paymentMethod}
            onChange={(e) => setPaymentMethod(e.target.value)}
          >
            {Object.keys(qrImages).map((method) => (
              <option key={method} value={method}>
                {method.toUpperCase()}
              </option>
            ))}
          </select>
        </div>

        {/* QR Code */}
        {qrImage && (
          <div className="text-center my-6">
            <img
              src={qrImage}
              alt={`${paymentMethod} QR`}
              className="mx-auto max-w-xs border border-purple-600 rounded shadow-md"
            />
          </div>
        )}

        {/* Email */}
        <div className="relative mb-6">
          <input
            type="email"
            id="email"
            required
            className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-purple-600 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label
            htmlFor="email"
            className="absolute left-3 -top-2.5 bg-purple-950 px-1 text-sm text-purple-300 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-400"
          >
            Email
          </label>
        </div>

        {/* Transaction ID */}
        <div className="relative mb-6">
          <input
            type="text"
            id="txnId"
            required
            className="peer w-full px-4 pt-5 pb-2 bg-transparent border border-purple-600 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            placeholder="Transaction ID"
            value={txnId}
            onChange={(e) => setTxnId(e.target.value)}
          />
          <label
            htmlFor="txnId"
            className="absolute left-3 -top-2.5 bg-purple-950 px-1 text-sm text-purple-300 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-focus:-top-2.5 peer-focus:text-sm peer-focus:text-green-400"
          >
            Transaction ID
          </label>
        </div>

        {/* Confirm Payment */}
        <div className="mb-6 flex items-start gap-3">
          <input
            id="paymentConfirmed"
            type="checkbox"
            checked={confirmed}
            onChange={(e) => setConfirmed(e.target.checked)}
            className="mt-1 accent-green-500 w-5 h-5"
          />
          <label
            htmlFor="paymentConfirmed"
            className="cursor-pointer font-medium text-green-300 hover:text-green-400 text-sm select-none"
          >
            I confirm that I have completed the payment.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-3 rounded-lg bg-green-600 hover:bg-green-700 shadow-lg transition font-bold text-white text-lg"
        >
          Submit
        </button>
      </form>

      {/* Modal Overlay */}
      {showModal && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center backdrop-blur-md px-4
          bg-purple-900 bg-opacity-30
          transition-opacity duration-500 ease-in-out
          ${fadeOut ? "opacity-0 pointer-events-none" : "opacity-100"}`}
        >
          <div
            className={`bg-gradient-to-tr from-purple-900 via-purple-800 to-purple-900 p-8 rounded-xl shadow-2xl max-w-md w-full text-white text-center relative
            transform transition-transform duration-300
            ${fadeOut ? "scale-95 opacity-0" : "scale-100 opacity-100"}`}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-3 right-3 text-purple-400 hover:text-green-400 transition text-xl font-bold"
              aria-label="Close Modal"
            >
              &times;
            </button>

            {modalStep === "submitted" && (
              <>
                <h2 className="text-3xl font-extrabold mb-6 text-green-400 drop-shadow-md">
                  Submitted Successfully!
                </h2>
                <button
                  onClick={handleCreateIdClick}
                  className="mt-4 bg-green-600 hover:bg-green-700 px-8 py-3 rounded-full font-semibold transition shadow-md"
                >
                  Create ID
                </button>
              </>
            )}

            {modalStep === "createId" && (
              <>
                <h2 className="text-2xl font-semibold mb-6 text-green-300 drop-shadow">
                  Create Your ID
                </h2>
                <input
                  type="text"
                  placeholder="Enter ID"
                  value={userId}
                  onChange={(e) => setUserId(e.target.value)}
                  className="w-full mb-4 p-3 rounded-lg bg-purple-800 border border-purple-600 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition shadow-sm"
                />
                <input
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full mb-6 p-3 rounded-lg bg-purple-800 border border-purple-600 text-white placeholder-purple-400 focus:outline-none focus:ring-2 focus:ring-green-400 transition shadow-sm"
                />
                <button
                  onClick={handleCreateIdSubmit}
                  disabled={creating}
                  className={`w-full py-3 rounded-lg font-semibold transition shadow-md ${
                    creating
                      ? "bg-gray-600 cursor-not-allowed"
                      : "bg-green-600 hover:bg-green-700"
                  }`}
                >
                  {creating ? "Creating..." : "Create"}
                </button>
              </>
            )}

            {modalStep === "success" && (
              <h2 className="text-2xl text-green-400 font-semibold drop-shadow-md">
                ID created successfully!
              </h2>
            )}
          </div>
        </div>
      )}
    </>
  );
}
