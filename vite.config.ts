import { defineConfig } from "vite";
import baseConfig from "./vite.base.config";
import devConfig from "./vite.dev.config";
import prodConfig from "./vite.prod.config";
// 策略模式
const viteConfig = {
  serve: () => ({ ...baseConfig, ...devConfig }),
  build: () => ({ ...baseConfig, ...prodConfig }),
};

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  console.log(command,"command");
  return viteConfig[command]();
});
// import react from "@vitejs/plugin-react";
// import legacy from "@vitejs/plugin-legacy";
// import { defineConfig } from "vite";

// export default defineConfig({
//   resolve: {
//     alias: {
//       "@": "/src",
//     },
//   },
//   plugins: [react(), legacy()],
// });
