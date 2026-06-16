import type { APIRoute } from "astro";
import { SITE } from "../config/site.ts";

// Dynamic robots.txt so the sitemap URL always tracks SITE.domain.
export const GET: APIRoute = () => {
  const body = [
    "User-agent: *",
    "Allow: /",
    "",
    `Sitemap: https://${SITE.domain}/sitemap-index.xml`,
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
