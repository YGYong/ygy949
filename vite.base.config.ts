import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import UnoCSS from "unocss/vite";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [react(), UnoCSS({ configFile: "./unocss.config.ts" })],
});
