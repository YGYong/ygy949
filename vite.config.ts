import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";

// https://vitejs.dev/config/
export default defineConfig({
  base:'./',
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    react(),
    legacy()
  ],
});
