/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      blur: {
        "3xl": "80px",
      },
      animation: {
        pulse: "pulse 4s ease-in-out infinite",
      },
      keyframes: {
        pulse: {
          "0%, 100%": { opacity: 0.2 },
          "50%": { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
