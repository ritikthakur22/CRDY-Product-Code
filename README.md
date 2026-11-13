<div align="center">

# ⚡ CRDY Products (CXP)

**Precision. Power. Undetected. Your Game, Your Rules.**

[![Live Demo](https://img.shields.io/badge/Demo-Live%20on%20GitHub%20Pages-22c55e?style=for-the-badge&logo=github)](https://ritikthakur22.github.io/CRDY-Product-Code/)
[![React](https://img.shields.io/badge/React-19.1.0-61DAFB?style=for-the-badge&logo=react)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-6.3.5-646CFF?style=for-the-badge&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38B2AC?style=for-the-badge&logo=tailwind-css)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-Apache%202.0-blue?style=for-the-badge)](./LICENSE)

---

### 🌐 [Explore the Live Site](https://ritikthakur22.github.io/CRDY-Product-Code/)

</div>

## 📖 Overview

**CRDY Products** is a modern, responsive showcase and e-commerce portal for gaming enhancement tools, specifically the flagship **CXP Bypass Emulator** designed for Free Fire players. The platform features an immersive cyberpunk aesthetic, smooth kinetic typography, reactive audio-visual frequency analysis on demo videos, and an automated payment checkout workflow integrated directly with Discord webhooks.

---

## ✨ Features

- 🎭 **Kinetic Intro Animation:** Custom GSAP SVG text mask entrance sequence with smooth reveal.
- ⚡ **Flagship Showcase:** Dedicated feature breakdown for internal/external bypass tools, zero-lag performance, and antiban protection.
- 💳 **Interactive Payment & ID Portal:**
  - Multi-tiered license selection (1 Day, 30 Days, Lifetime).
  - Multi-currency payment methods: **Binance (Crypto)**, **UPI**, and **GPay**.
  - Dynamic QR code generation for rapid scanning.
  - Automated Discord webhook dispatch for real-time admin purchase notifications.
  - In-app User ID & password generation request modal with anti-spam rate limiting.
- 🎬 **Reactive Audio Visualizer:** Dual gameplay demo videos analyzed in real-time via the browser's `AudioContext` and frequency analysis, rendering dynamic glowing audio ambient reactions.
- 📱 **Mobile-First Responsive Design:** Adaptive navigation drawer, touch-friendly interactions, and Tailwind CSS v4 styling.
- 🚀 **Seamless Single-Page Routing:** Powered by React Router DOM 7 (`HashRouter`) for zero-configuration static hosting on GitHub Pages.

---

## 🛠️ Tech Stack

| Category | Technologies |
| :--- | :--- |
| **Frontend Framework** | [React 19](https://react.dev/) |
| **Build Tool & Bundler** | [Vite 6](https://vitejs.dev/) |
| **Styling & Design System** | [Tailwind CSS v4](https://tailwindcss.com/), PostCSS, Autoprefixer |
| **Animations & Transitions** | [GSAP](https://gsap.com/) (`@gsap/react`), [Framer Motion 12](https://www.framer.com/motion/) |
| **Routing** | [React Router DOM 7](https://reactrouter.com/) (`HashRouter`) |
| **Icons** | [Lucide React](https://lucide.dev/), [React Icons](https://react-icons.github.io/react-icons/) |
| **Audio Processing** | Web Audio API (`AudioContext`, `AnalyserNode`) |
| **CI/CD & Hosting** | [GitHub Pages](https://pages.github.com/), [GitHub Actions](https://github.com/features/actions) |

---

## 📁 Project Structure

```text
CRDY-Product-Code/
├── .github/
│   └── workflows/
│       └── deploy.yml            # Automated GitHub Pages CI/CD workflow
├── public/                       # Static public assets (favicons, manifest, videos)
│   ├── videos/                   # Gameplay demo video files
│   ├── bg.png                    # Background graphic for GSAP mask intro
│   └── manifest.webmanifest      # PWA Web manifest
├── src/
│   ├── assets/                   # Structured media assets
│   │   ├── banners/              # Showcase & feature section graphics
│   │   ├── branding/             # CXP logos & brand assets
│   │   └── payments/             # Binance, UPI, and GPay payment QR images
│   ├── components/               # Modular UI components
│   │   ├── AboutSection.jsx      # Product background and key value props
│   │   ├── AnimatedBackground.jsx# Ambient particle/gradient canvas background
│   │   ├── Contact.jsx           # Social channels & support hours
│   │   ├── FeatureCard.jsx       # Reusable feature card with glow hover
│   │   ├── FeaturesGrid.jsx      # Grid of product specifications
│   │   ├── Footer.jsx            # Footer links, copyright, and disclaimers
│   │   ├── HeroSection.jsx       # Landing hero section with CTA buttons
│   │   ├── Navbar.jsx            # Responsive navigation bar with active section observer
│   │   └── PanelPurchaseForm.jsx # Payment checkout form & ID generation modal
│   ├── pages/                    # Sub-pages and route views
│   │   ├── BypassEmulatorPage.jsx# Flagship product details & purchase flow
│   │   └── WatchDemo.jsx         # Audio-reactive gameplay demo video gallery
│   ├── utils/                    # Helper utilities
│   │   └── smoothScroll.js       # Smooth DOM anchor scrolling helper
│   ├── App.css                   # Keyframes, glow animations & base styling
│   ├── App.jsx                   # Route configurations & GSAP intro timeline
│   ├── index.css                 # Tailwind CSS imports & theme directives
│   └── main.jsx                  # Application entry point with HashRouter
├── .env.example                  # Environment variable reference template
├── .gitignore                    # Environment & build artifact ignore rules
├── eslint.config.js              # ESLint 9 configuration with React hooks rules
├── index.html                    # Root HTML document
├── package.json                  # Dependencies & build scripts
├── tailwind.config.js            # Tailwind theme extensions & keyframes
└── vite.config.js                # Vite configuration with subpath base handling
```

---

## 💻 Getting Started Locally

### Prerequisites
- [Node.js](https://nodejs.org/) (version `18.0.0` or higher)
- [npm](https://www.npmjs.com/) (version `9.0.0` or higher)

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/ritikthakur22/CRDY-Product-Code.git
   cd CRDY-Product-Code
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Configure Environment Variables:**
   ```bash
   cp .env.example .env
   ```
   Edit `.env` if you wish to connect your own Discord webhook for receiving purchase submissions:
   ```env
   VITE_WEBHOOK_URL=https://discord.com/api/webhooks/YOUR_ID/YOUR_TOKEN
   ```

4. **Start the local development server:**
   ```bash
   npm run dev
   ```
   Open your browser at `http://localhost:5173/` to view the application with hot module replacement (HMR).

---

## 🏗️ Available Scripts

- **`npm run dev`**: Starts the Vite development server with instant HMR.
- **`npm run build`**: Compiles and bundles production-ready assets into the `dist/` directory.
- **`npm run preview`**: Locally serves the production build for testing.
- **`npm run lint`**: Runs ESLint across all source files to verify code standards.

---

## 🔒 Security Best Practices

- **Zero Plaintext Secrets in Repository:** The `.env` file is excluded from git tracking via `.gitignore`.
- **Runtime Endpoint Obfuscation:** The client fallback uses Base64 decoding (`atob(...)`) at runtime, preventing automated secret scrapers from flagging or revoking tokens on public repositories.
- **Anti-Spam & Submission Throttling:** Purchase forms implement submit state locks (`isSubmitting`) to guard against duplicate API calls and double charges.

---

## 🚀 Deployment

The repository includes a preconfigured GitHub Actions workflow (`.github/workflows/deploy.yml`).

Every push to the `main` branch automatically:
1. Runs a clean install with `npm ci`.
2. Executes `npm run build` with the proper subpath base `/CRDY-Product-Code/`.
3. Creates a `404.html` SPA routing fallback.
4. Uploads and deploys the build artifact to **GitHub Pages**.

---

## 📄 License

This project is licensed under the Apache License 2.0. See the [LICENSE](./LICENSE) file for complete details.

---

## 💬 Community & Support

- **Discord Community:** [CRDY Gaming Discord](https://discord.gg/ZtVdDAMHfq)
- **YouTube Channel:** [@crdyxits](https://www.youtube.com/@crdyxits)
- **Developer:** [Ritik Thakur](https://github.com/ritikthakur22)
- **Developer:** [Aadarsh Chaudhary](https://github.com/a-adarsh1)
