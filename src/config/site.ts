/**
 * Single source of truth for company identity + SEO.
 *
 * REBRAND / GO-LIVE CHECKLIST: edit the values below and swap the logo asset
 * in /public. Anything marked `TODO` must be filled in with real data before
 * launch — search rankings and rich results depend on accurate NAP
 * (name / address / phone) and the real domain.
 */
export const SITE = {
  /** Company name, shown in header, footer, titles. */
  name: "Voyage Technology Solutions",
  /** Short name for tight spaces (nav, logo wordmark). */
  shortName: "Voyage",
  /** Registered legal name for structured data. */
  legalName: "Voyage Technology Solutions",

  /** Fallback domain (bare, no protocol). On Vercel the real production URL is
   *  detected automatically — see PROD_DOMAIN below. Swap this for a custom
   *  domain later and it'll be used everywhere. */
  domain: "vtsweb-theta.vercel.app",
  /** Contact inbox. Used for mailto links + schema. */
  email: "hello@voyagetechsolutions.com",
  /** TODO: real phone in international format, e.g. "+27 XX XXX XXXX". Empty hides it. */
  phone: "",
  /** Booking link (Cal.com / Calendly). The primary conversion action. */
  calendarUrl: "https://cal.com/your-handle/intro-call",

  /** Short tagline for footer + fallback meta. */
  tagline:
    "We build software — web and mobile apps, custom systems, automation and integrations, shipped to production.",
  /** Default meta description (keyword-rich, under ~160 chars). */
  description:
    "Johannesburg-based software development company serving all of South Africa and clients worldwide. We build custom software, web and mobile apps, automation and integrations — shipped to production.",
  /** Keyword themes used for meta + content (not a ranking factor alone, but guides copy). */
  keywords: [
    "software development company South Africa",
    "software development company Johannesburg",
    "custom software development South Africa",
    "web application development",
    "mobile app development",
    "software developers Johannesburg",
    "automation and integrations",
  ],

  /** Business location for local SEO + LocalBusiness schema. */
  location: {
    city: "Johannesburg",
    region: "Gauteng",
    country: "South Africa",
    countryCode: "ZA",
  },
  /** Approx. Johannesburg CBD coordinates for LocalBusiness geo. */
  geo: { lat: -26.2041, lng: 28.0473 },
  /** Areas served — local + international per the brief. */
  areaServed: ["South Africa", "Worldwide"],
  /** Indicative price band for schema ($ = budget … $$$$ = premium). */
  priceRange: "$$",

  /** Social / external profiles (used as schema sameAs). Empty entries are skipped. */
  links: {
    linkedin: "", // TODO: company LinkedIn URL
    endonAi: "https://endonai.com",
  },

  /** Absolute-path share image (1200×630) generated into /public. */
  ogImage: "/og.png",
} as const;

export type Site = typeof SITE;

/**
 * Resolved production domain. On Vercel, `VERCEL_PROJECT_PRODUCTION_URL` is the
 * canonical production host (e.g. "voyagetechsolutions.vercel.app" or a custom
 * domain once attached), so canonicals / sitemap / OG always point at the live
 * URL with no manual step. Falls back to SITE.domain locally.
 */
export const PROD_DOMAIN =
  (typeof process !== "undefined" &&
    process.env?.VERCEL_PROJECT_PRODUCTION_URL) ||
  SITE.domain;

/** Profiles for schema `sameAs` — only non-empty links. */
export const SAME_AS: string[] = [SITE.links.linkedin, SITE.links.endonAi].filter(
  Boolean
);
