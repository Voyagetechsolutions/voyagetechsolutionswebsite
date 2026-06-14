# Voyage Technology Solutions — Website

A fast, static marketing site whose one job is to convert a logistics/fintech
buyer into a 20-minute call. Built with **Astro + Tailwind**, deploys free to
Vercel or Netlify.

## Run it

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build → dist/
npm run preview  # preview the production build
```

## ⭐ Rebrand in one place

Company name, domain, email, calendar link and copy all live in **one file**:

```
src/config/site.ts        →  SITE.name, SITE.domain, SITE.email,
                             SITE.calendarUrl, SITE.tagline, SITE.links
```

To rebrand: edit `src/config/site.ts` and swap the logo glyph (the `V` mark in
`Header.astro` / `Footer.astro`) plus `public/favicon.svg`. Nothing else
hard-codes the name.

### Before going live — fill these in

- [ ] `SITE.calendarUrl` — your real Cal.com / Calendly link (currently a placeholder).
- [ ] `SITE.email` — the inbox you actually monitor.
- [ ] `SITE.domain` — your real domain (used for canonical URLs + sitemap).
- [ ] `public/robots.txt` sitemap line — update the domain.
- [ ] `src/pages/work.astro` — drop the real timeframe into the invoice case
      study (`// TODO` marker) and confirm the Zimbabwe Shipping copy.

## Deploy

**Vercel:** import the repo → it auto-detects Astro → deploy. Add your custom
domain in project settings.

**Netlify:** import the repo → `netlify.toml` already sets build command and
publish dir → deploy. Add your custom domain in site settings.

Both give you HTTPS automatically on the free tier.

## Sitemap

5 pages: Home, What we do, Work, Endon AI, Contact. Resist adding more — the
site's job is conversion, not coverage.

## Contact form

The form on `/contact` composes a `mailto:` link in the browser (no backend, by
design). If you later want submissions to hit an inbox without the user's mail
client, wire the form to [Formspree](https://formspree.io) or Netlify Forms —
both free, no backend code needed.
