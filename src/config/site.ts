/**
 * Single source of truth for company identity.
 *
 * REBRAND CHECKLIST: to rename the company or change contact details,
 * edit the values below and swap the logo asset in /public. Nothing else
 * in the codebase should hard-code the name, domain, email, or links.
 */
export const SITE = {
  /** Company name, shown in header, footer, titles. */
  name: "Voyage Technology Solutions",
  /** Short name for tight spaces (nav, logo wordmark). */
  shortName: "Voyage",
  /** Bare domain, no protocol. Used for canonical URLs + email. */
  domain: "voyagetechsolutions.com",
  /** Contact inbox. Used for mailto links everywhere. */
  email: "hello@voyagetechsolutions.com",
  /** Booking link (Cal.com / Calendly). The primary conversion action. */
  calendarUrl: "https://cal.com/your-handle/intro-call",
  /** One-line description for meta tags + footer. */
  tagline:
    "Document and compliance automation for logistics and fintech teams.",
  /** Longer meta description for SEO / link previews. */
  description:
    "We build document and compliance automation for logistics and fintech teams — shipping production software, not slide decks.",
  /** Optional social / external links. Leave empty to hide. */
  links: {
    linkedin: "",
    endonAi: "https://endonai.com",
  },
} as const;

export type Site = typeof SITE;
