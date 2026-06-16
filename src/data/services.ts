/**
 * Content for the SEO landing pages at /services/[slug].
 * One entry = one page targeting a specific high-intent search.
 * Edit copy here; the route and nav read from this single source.
 */
export interface ServicePage {
  slug: string;
  /** Short label for nav + breadcrumbs. */
  navLabel: string;
  /** <title> text (before the brand suffix). */
  metaTitle: string;
  /** On-page H1. */
  h1: string;
  /** Hero lead paragraph. */
  lead: string;
  /** Meta description. */
  description: string;
  keywords: string[];
  image: string;
  imageAlt: string;
  problem: { heading: string; body: string };
  /** What we build — concrete deliverables. */
  build: { title: string; text: string }[];
  /** Why teams choose us for this. */
  outcomes: string[];
  faqs: { q: string; a: string }[];
}

export const SERVICES: ServicePage[] = [
  {
    slug: "custom-software-development",
    navLabel: "Custom software development",
    metaTitle: "Custom Software Development in South Africa",
    h1: "Custom software development for South African businesses",
    lead: "Off-the-shelf tools force your business to bend around them. We build custom software that fits how your team actually works — designed, built and shipped to production for companies in Johannesburg and across South Africa.",
    description:
      "Custom software development company in Johannesburg, South Africa. We build internal tools, dashboards and line-of-business systems tailored to your operation — shipped to production.",
    keywords: [
      "custom software development South Africa",
      "custom software development Johannesburg",
      "bespoke software development",
      "line of business software",
    ],
    image: "/images/service-systems.webp",
    imageAlt: "Custom software systems and dashboards built by Voyage Technology Solutions",
    problem: {
      heading: "When spreadsheets and generic tools stop scaling",
      body: "Most growing businesses outgrow their spreadsheets and off-the-shelf apps long before they replace them. Work gets re-keyed by hand, data lives in five places, and no tool does quite what you need. Custom software removes that friction — it does exactly your job, the way you do it.",
    },
    build: [
      { title: "Internal tools & dashboards", text: "Operational tooling that replaces spreadsheets and manual processes with software your team actually wants to use." },
      { title: "Line-of-business systems", text: "The core system your business runs on — quoting, scheduling, inventory, reporting — built around your real workflow." },
      { title: "Admin & back-office platforms", text: "Role-based portals and admin panels that give your team control without the chaos of shared spreadsheets." },
      { title: "Legacy rebuilds", text: "We modernise ageing or stalled systems and get them shipped, without a risky big-bang rewrite." },
    ],
    outcomes: [
      "Software that matches your process exactly — no workarounds",
      "Shipped to production in phases, so you see value early",
      "Built to scale past spreadsheets and manual re-keying",
    ],
    faqs: [
      { q: "How much does custom software cost in South Africa?", a: "It depends on scope — a focused internal tool is far cheaper than a full platform. We scope the work with you and give a clear estimate before anything is committed. The fastest way to a number is a short call." },
      { q: "Do you work with businesses outside Johannesburg?", a: "Yes. We're based in Johannesburg and build for clients across South Africa and internationally, working remotely over calls, shared docs and regular demos." },
      { q: "Can you improve software we already have?", a: "Absolutely. We regularly take over existing or stalled builds, fix what's broken and ship the rest." },
    ],
  },
  {
    slug: "web-app-development",
    navLabel: "Web app development",
    metaTitle: "Web Application Development in South Africa",
    h1: "Web application development that ships to production",
    lead: "From idea to a product your team and customers actually use. We build fast, reliable full-stack web applications for businesses in South Africa — and stay until they're live, not just demoed.",
    description:
      "Web application development company in South Africa. Full-stack web apps built with React, Next.js and modern back ends — designed, built and shipped to production.",
    keywords: [
      "web application development South Africa",
      "web app development Johannesburg",
      "full stack web development",
      "react developers South Africa",
    ],
    image: "/images/service-web.webp",
    imageAlt: "Web and mobile application interfaces built by Voyage Technology Solutions",
    problem: {
      heading: "Most web projects stall before they reach real users",
      body: "Agencies hand over a pretty demo; freelancers disappear at 80%. The hard part isn't the mock-up — it's shipping something stable that real customers use every day. That's the part we're built for.",
    },
    build: [
      { title: "Customer-facing web apps", text: "Portals, marketplaces, booking and account systems your customers log into and rely on." },
      { title: "Internal web platforms", text: "Dashboards and operational apps your team uses to run the business day to day." },
      { title: "SaaS products", text: "Multi-user products with auth, billing and roles — built to grow with your user base." },
      { title: "APIs & back ends", text: "Reliable back ends and APIs (Node, FastAPI) that power your app and connect to everything else." },
    ],
    outcomes: [
      "Modern stack (React / Next.js, Astro) that's fast and maintainable",
      "Shipped to production and supported — not abandoned at the demo",
      "Built to handle real users, real data and real load",
    ],
    faqs: [
      { q: "What technologies do you build web apps with?", a: "React and Next.js (and Astro for content-heavy sites) on the front end, with Node or FastAPI back ends. We choose the boring, reliable option over the fashionable one." },
      { q: "How long does a web app take to build?", a: "A focused app can ship in a few weeks; larger products run longer. We ship in phases so you get working software early and often rather than waiting months." },
      { q: "Can you take over a half-finished web app?", a: "Yes — picking up stalled builds, stabilising them and getting them shipped is something we do regularly." },
    ],
  },
  {
    slug: "mobile-app-development",
    navLabel: "Mobile app development",
    metaTitle: "Mobile App Development in South Africa",
    h1: "Mobile app development for South African teams",
    lead: "When the work happens away from a desk, your tools should travel with your team. We build mobile apps that put your product or operation in your users' pockets — for clients in Johannesburg and across South Africa.",
    description:
      "Mobile app development company in Johannesburg, South Africa. We build mobile apps for customers and field teams — designed, built and shipped to the app stores.",
    keywords: [
      "mobile app development South Africa",
      "mobile app developers Johannesburg",
      "app development company South Africa",
      "iOS and Android app development",
    ],
    image: "/images/service-web.webp",
    imageAlt: "Mobile app interface built by Voyage Technology Solutions",
    problem: {
      heading: "Field work and customers don't sit at a desk",
      body: "If your team works on the move — deliveries, inspections, sales — or your customers expect an app, a desktop-only tool leaves value on the table. A focused mobile app captures data where the work happens and keeps everyone in sync.",
    },
    build: [
      { title: "Customer apps", text: "Branded apps your customers use to order, book, track or manage their account on the go." },
      { title: "Field & ops apps", text: "Tools for teams in the field — capture data, work offline, sync when connected." },
      { title: "Companion apps", text: "Mobile front ends for your existing web platform or system, sharing one back end." },
      { title: "Store-ready delivery", text: "We handle the build through to the Apple App Store and Google Play, not just the code." },
    ],
    outcomes: [
      "One codebase, both platforms where it makes sense",
      "Designed for real-world use — offline, low-signal, on the move",
      "Connected to the same back end as your web tools",
    ],
    faqs: [
      { q: "Do you build for both iOS and Android?", a: "Yes. Where it fits, we build cross-platform so a single codebase serves both stores, which keeps cost and maintenance down. We'll advise if a native approach suits your case better." },
      { q: "Can the app work with our existing system?", a: "Yes — we connect mobile apps to your existing web platform or back end so data stays in one place and in sync." },
      { q: "Do you handle publishing to the app stores?", a: "We take it through to the App Store and Google Play, and can guide you through the developer-account setup if you don't have one yet." },
    ],
  },
  {
    slug: "automation-and-integrations",
    navLabel: "Automation & integrations",
    metaTitle: "Business Automation & Systems Integration in South Africa",
    h1: "Automation & integrations that cut out the manual work",
    lead: "Your tools don't talk to each other, and your team pays for it in re-keyed data and wasted hours. We connect your systems and automate the repetitive work — for businesses in South Africa and beyond. This is a particular strength of ours.",
    description:
      "Business automation and systems integration in South Africa. We connect your tools with APIs and data pipelines and automate manual work — document processing, reporting and data sync.",
    keywords: [
      "business automation South Africa",
      "systems integration South Africa",
      "API integration services",
      "workflow automation Johannesburg",
    ],
    image: "/images/service-automation.webp",
    imageAlt: "Connected systems and automation pipeline built by Voyage Technology Solutions",
    problem: {
      heading: "Manual, repetitive work is quietly expensive",
      body: "When your tools don't integrate, someone re-types data between them, copies numbers into reports, and chases information by hand. It's slow, error-prone and doesn't scale. Automation turns those workflows into reliable pipelines that just run.",
    },
    build: [
      { title: "System integrations", text: "We connect your CRM, accounting, ops and other tools with APIs so data flows automatically between them." },
      { title: "Document & data automation", text: "Automated PDF/CSV extraction, conversion and reporting — rule-driven pipelines that produce clean output every time." },
      { title: "Workflow automation", text: "We automate the repetitive multi-step processes your team does by hand, with the right checks built in." },
      { title: "Data pipelines & reporting", text: "Reliable pipelines that pull, transform and surface your data so reports build themselves." },
    ],
    outcomes: [
      "Hours of manual re-keying and reporting removed every week",
      "Fewer errors — the pipeline runs the same way every time",
      "Your existing tools, finally working together",
    ],
    faqs: [
      { q: "Which tools can you integrate?", a: "If it has an API or exports data, we can usually connect it — CRMs, accounting packages, e-commerce, internal systems and more. We'll confirm feasibility for your specific stack on a quick call." },
      { q: "Is automation worth it for a small team?", a: "Often especially so — small teams feel manual work most. If a task is repetitive and rule-based, automating it frees your people for higher-value work and pays for itself quickly." },
      { q: "Do you handle sensitive data carefully?", a: "Yes. We build POPIA / data-protection-aware pipelines, and our own product Endon AI does on-device PII redaction — handling sensitive data correctly is core to how we work." },
    ],
  },
];
