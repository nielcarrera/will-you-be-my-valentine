import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/", // CHANGE THIS (or just delete this line)
  plugins: [react()],
});
