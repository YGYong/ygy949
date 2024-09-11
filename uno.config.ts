// uno.config.ts
import { defineConfig } from "unocss";
import transformerDirectives from "@unocss/transformer-directives";

export default defineConfig({
  // ...UnoCSS options
  transformers: [transformerDirectives({ enforce: "pre" })],
  rules: [["m-1", { margin: "0.25rem" }]],
  shortcuts: {
    // 快捷方式到多个实用程序
    btn: "py-2 px-4 font-semibold rounded-lg shadow-md",
    "btn-green": "text-white bg-green-500 hover:bg-green-700",
    // 单个实用程序别名
    red: "text-red-100",
  },
  theme: {
    colors: {
      primary: "#3490dc",
      secondary: "#f1c40f",
      danger: "#e74c3c",
      success: "#2ecc71",
      warning: "#ffeb3b",
      info: "#34495e",
      light: "#ecf0f1",
      dark: "#2c3e50",
    },
  },
});
