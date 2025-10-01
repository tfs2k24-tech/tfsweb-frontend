import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import fs from "fs";

export default defineConfig({
  plugins: [react(),
            tailwindcss()
  ],
  server: {
    https: {
      key: fs.readFileSync("./localhost-key.pem"),
      cert: fs.readFileSync("./localhost.pem"),
    },
    host: "localhost", // you can use 0.0.0.0 if needed
    port: 5173,        // or any port you want
  },
});
