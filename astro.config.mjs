// @ts-check
import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import { PROD_DOMAIN } from "./src/config/site.ts";

// https://astro.build/config
export default defineConfig({
  site: `https://${PROD_DOMAIN}`,
  integrations: [
    sitemap({
      lastmod: new Date(),
      changefreq: "weekly",
      priority: 0.7,
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
