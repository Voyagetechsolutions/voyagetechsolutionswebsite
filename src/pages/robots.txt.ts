import type { APIRoute } from "astro";
import { PROD_DOMAIN } from "../config/site.ts";

// Dynamic robots.txt so the sitemap URL always tracks the live production domain.
export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: https://${PROD_DOMAIN}/sitemap-index.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
