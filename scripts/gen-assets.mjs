/**
 * Generates raster brand assets from inline SVG:
 *   public/og.png            (1200×630 social share image)
 *   public/apple-touch-icon.png (180×180)
 *   public/icon-192.png, icon-512.png (PWA manifest)
 *
 * Run: node scripts/gen-assets.mjs
 */
import sharp from "sharp";
import { fileURLToPath } from "node:url";
import { dirname, resolve } from "node:path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const pub = resolve(__dirname, "../public");

const NAVY = "#060a16";
const BRAND = "#3d7bff";
const CYAN = "#2fd9e6";

// --- Social share image (1200×630) ---
const og = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#070c1a"/>
      <stop offset="1" stop-color="#04060f"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.8" cy="0.1" r="0.7">
      <stop offset="0" stop-color="${BRAND}" stop-opacity="0.35"/>
      <stop offset="1" stop-color="${BRAND}" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="mark" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${BRAND}"/>
      <stop offset="1" stop-color="${CYAN}"/>
    </linearGradient>
    <linearGradient id="accent" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${BRAND}"/>
      <stop offset="1" stop-color="${CYAN}"/>
    </linearGradient>
  </defs>
  <rect width="1200" height="630" fill="url(#bg)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <g>
    <rect x="80" y="74" width="84" height="84" rx="22" fill="url(#mark)"/>
    <path d="M104 100 L122 132 L140 100" fill="none" stroke="#fff" stroke-width="6.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="104" cy="100" r="5" fill="#fff"/>
    <circle cx="140" cy="100" r="5" fill="#fff"/>
    <circle cx="122" cy="132" r="6" fill="#fff"/>
    <text x="184" y="118" font-family="Arial, sans-serif" font-size="34" font-weight="700" fill="#eef2fb">Voyage</text>
    <text x="184" y="146" font-family="Arial, sans-serif" font-size="17" letter-spacing="3" fill="#8a99bd">TECHNOLOGY SOLUTIONS</text>
  </g>
  <text x="80" y="330" font-family="Arial, sans-serif" font-size="76" font-weight="700" fill="#eef2fb">We build software.</text>
  <text x="80" y="412" font-family="Arial, sans-serif" font-size="34" fill="#aab6d4">Web &amp; mobile apps · custom systems · automation</text>
  <text x="80" y="456" font-family="Arial, sans-serif" font-size="34" fill="#aab6d4">Shipped to production, not promised in slide decks.</text>
  <rect x="80" y="520" width="220" height="6" rx="3" fill="url(#accent)"/>
  <text x="80" y="566" font-family="Arial, sans-serif" font-size="24" fill="#8a99bd">South Africa · serving clients worldwide</text>
</svg>`;

// --- Square icon (logo mark on navy) ---
const icon = `
<svg width="512" height="512" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="m" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="${BRAND}"/>
      <stop offset="1" stop-color="${CYAN}"/>
    </linearGradient>
  </defs>
  <rect width="512" height="512" rx="112" fill="${NAVY}"/>
  <rect x="96" y="96" width="320" height="320" rx="84" fill="url(#m)"/>
  <path d="M188 188 L256 312 L324 188" fill="none" stroke="#fff" stroke-width="26" stroke-linecap="round" stroke-linejoin="round"/>
  <circle cx="188" cy="188" r="20" fill="#fff"/>
  <circle cx="324" cy="188" r="20" fill="#fff"/>
  <circle cx="256" cy="312" r="24" fill="#fff"/>
</svg>`;

const ogBuf = Buffer.from(og);
const iconBuf = Buffer.from(icon);

await sharp(ogBuf).png().toFile(resolve(pub, "og.png"));
await sharp(iconBuf).resize(512, 512).png().toFile(resolve(pub, "icon-512.png"));
await sharp(iconBuf).resize(192, 192).png().toFile(resolve(pub, "icon-192.png"));
await sharp(iconBuf)
  .resize(180, 180)
  .png()
  .toFile(resolve(pub, "apple-touch-icon.png"));

console.log("Generated og.png, icon-512.png, icon-192.png, apple-touch-icon.png");
