import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

export default defineConfig({
  plugins: [tailwindcss()],
  // _site/ をルートとして配信
  root: path.resolve(process.cwd(), "_site"),
  server: {
    host: "127.0.0.1",
    open: true,
  },
});
