import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), babel({ presets: [reactCompilerPreset()] })],
  base: "/social-dashboard/",
  server: {
    proxy: {
      "/api": {
        target:
          "https://7p3ojp7lndd7znoou7yy2qjffa0cqpuz.lambda-url.eu-north-1.on.aws/",
        changeOrigin: true,
        secure: true,
      },
    },
  },
});
