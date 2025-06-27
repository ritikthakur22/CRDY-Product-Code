import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/crdy-product/", // 👈 This sets the default route
  plugins: [react(), tailwindcss()],
});
