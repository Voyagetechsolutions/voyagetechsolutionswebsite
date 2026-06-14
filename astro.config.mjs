// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import { SITE } from "./src/config/site.ts";

// https://astro.build/config
export default defineConfig({
  site: `https://${SITE.domain}`,
  vite: {
    plugins: [tailwindcss()],
  },
});
