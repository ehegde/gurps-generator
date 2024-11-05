import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "https://ehegde.github.io/gurps-generator/",
  server: {
    port: 3000,
  },
});
