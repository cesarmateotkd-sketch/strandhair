# Strand — Project Context for Claude Code

## What This Is
**Strand** (`hairtypequiz.hair`) is a static hair care site on GitHub Pages, proxied through Cloudflare. It has two main functions:
1. A **hair type quiz** (1A–4C) that outputs a personalized product routine with Amazon affiliate links and YouTube tutorial cards
2. A **blog** of 10 SEO-optimized posts targeting natural hair keywords

Monetization: Amazon Associates affiliate commissions + Google AdSense (pending approval — need ~100 daily sessions first).

---

## Repo Structure

```
/
├── index.html          # Main quiz page (self-contained, ~1400 lines)
├── favicon.svg         # Branded SVG favicon (espresso bg, caramel italic "s")
├── robots.txt          # Allow all crawlers
├── sitemap.xml         # All 12 pages, submitted to GSC
├── CNAME               # hairtypequiz.hair
├── fonts/              # Self-hosted WOFF2 (Cormorant Garamond normal+italic, DM Sans)
├── images/             # OG images (1000×1500 PNG + SVG) for all pages
├── js/
│   └── quiz.js         # 50KB — lazy-loaded on first quiz interaction only
└── blog/
    ├── index.html
    ├── how-to-grow-4c-hair-faster.html
    ├── protective-styles-for-natural-hair.html
    ├── how-to-wash-4c-hair.html
    ├── loc-method-beginners-guide.html
    ├── protein-treatment-for-natural-hair.html
    ├── best-diffusers-for-curly-hair.html
    ├── best-products-for-4c-hair.html
    ├── 3b-vs-3c-curls.html
    ├── curly-girl-method-wavy-hair.html
    └── how-to-find-your-hair-type.html
```

---

## Technical Architecture

### Fonts
- **Self-hosted** in `/fonts/` — Cormorant Garamond (normal + italic WOFF2) and DM Sans
- Preloaded via `<link rel="preload">` in `<head>`
- Inline `@font-face` with `font-display: optional` (no CLS from font swap)
- Eliminated the Google Fonts → gstatic.com critical request chain (was 601ms)

### JavaScript
- **Quiz logic** (`js/quiz.js`, 50KB) lazy-loads on first user interaction with `.hair-card`
- A 1.6KB inline stub in `index.html` handles the load queue, URL param auto-load (`?type=3B`), and nav/FAQ toggling
- Pattern: `_loadQuiz(cb)` queues callbacks until quiz.js is ready, handles rapid successive clicks correctly

### Google Analytics (GA4 — G-WZFESSQ350)
- **Deferred to first user interaction** (mousedown, keydown, touchstart, scroll) with a 5-second fallback timer
- `gtag()` shim defined inline to queue events before the real script loads
- Means Lighthouse never loads `gtag.js` during audits → clears "unused JS" finding

### Content Security Policy
Current CSP (meta tag, all 12 pages):
```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com;
style-src 'self' 'unsafe-inline';
font-src 'self';
img-src 'self' https: data:;
connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://www.googletagmanager.com;
object-src 'none';
base-uri 'self';
form-action 'self';
```
Note: `upgrade-insecure-requests` was removed (Cloudflare handles HTTPS; in a meta tag it caused Chrome Issues panel warnings). `frame-src` removed (no iframes).

### CSS Color Palette
```css
--cream: #FAF7F2        /* page background */
--warm-white: #F5F0E8   /* section backgrounds */
--sand: #E8DDD0         /* hair-family background, borders */
--espresso: #3D2B1F     /* headings, dark sections, CTA buttons */
--caramel: #C4945A      /* decorative only — backgrounds, dark-bg text, hover states */
--caramel-text: #8B5E1A /* caramel for TEXT on light backgrounds (WCAG AA 4.5:1) */
--mocha: #7A5848        /* body/secondary text (was #8B6F5E, darkened for contrast) */
--muted: #6B5B53        /* meta text, descriptions (was #9B8B82, darkened for contrast) */
--sage: #7A8C7E         /* decorative only — do not use as text on light bg */
--blush: #E8C4B0        /* decorative borders */
--text: #2A1F1A         /* primary body text */
--green: #4A7C5F        /* unused in CSS, kept for reference */
```

**Key rule:** `--caramel` (#C4945A) is only 2.6:1 on cream — use `--caramel-text` (#8B5E1A) for any text on light backgrounds. `--caramel` is fine on `--espresso` backgrounds (4.9:1).

### ARIA / Accessibility
Hair grid structure (passes `aria-required-children` + `aria-required-parent`):
```html
<div class="hair-grid" role="list">
  <div class="hair-family">           <!-- no role, transparent -->
    <div class="family-label">...</div>
    <article class="hair-card" role="listitem">...</article>
  </div>
</div>
```

### Heading Order
```
h1 (hero)
  h2 (how it works)
    h3 (steps)
  h2 (hair type selector)
  h2 (results — hidden until interaction)
    h3 (share strip)
  h2 (about)
    h3 (quick reference)
      h4 (type items)
  h2 (FAQ)
    h3 (FAQ questions)
  h2 (blog section)
footer
  h3 (Explore, Hair Types) ← was h4, fixed
```

---

## Infrastructure

### Hosting
- **GitHub Pages** — `main` branch, custom domain `hairtypequiz.hair`
- **Cloudflare** proxy in front (orange cloud enabled)
  - Cache Rule: `/fonts/*`, `/js/*`, `/images/*` + `/favicon.svg` → 1-year Edge + Browser TTL
  - Handles HTTPS, compression, CDN

### Branch Strategy
- `main` — production
- Feature work done on `claude/review-session-*` branches, merged to main when complete

---

## SEO & Analytics

### What's Set Up
- GA4 property: G-WZFESSQ350
- Google Search Console: verified, sitemap submitted (`/sitemap.xml`), all 10 posts indexing requested
- GSC alerts: enabled for manual actions + coverage issues
- Amazon Associates: affiliate tag on all product links in `js/quiz.js`
- Google AdSense account meta tag on all pages (pending traffic threshold for approval)

### Schema Markup
- `WebSite` + `FAQPage` + `Organization` on `index.html`
- `Article` + `BreadcrumbList` on all blog posts
- Pinterest Article Rich Pin meta tags on all 10 posts
- Pinterest domain verified

### OG Images
All 1000×1500 PNG, stored in `/images/`. Named `og-[slug].png`.

---

## Content

### 10 Blog Posts (Published)
| Slug | Topic |
|---|---|
| `how-to-grow-4c-hair-faster` | Science-backed 4C growth guide |
| `protective-styles-for-natural-hair` | 10 protective styles |
| `how-to-wash-4c-hair` | 5-step wash day routine |
| `loc-method-beginners-guide` | LOC method explainer |
| `protein-treatment-for-natural-hair` | Light/medium/heavy protein |
| `best-diffusers-for-curly-hair` | Diffuser picks + technique |
| `best-products-for-4c-hair` | Full 4C product roundup |
| `3b-vs-3c-curls` | Type 3 subtype comparison |
| `curly-girl-method-wavy-hair` | CGM for wavy hair |
| `how-to-find-your-hair-type` | Hair type identification guide |

### Content Roadmap (Priority Order)
1. 4A hair care routine — underserved, high intent
2. Hair porosity test at home — evergreen, links to every post
3. Scalp care routine for natural hair — connects to growth post
4. TWA hairstyles and tips — growing search volume
5. Best leave-in conditioners for 4C hair — high affiliate value
6. Wavy hair routine for beginners — broadens beyond 4C audience

Target: 20 posts before applying for AdSense.

---

## Growth Priorities (Current State)

### Done
- [x] 10 blog posts with affiliate links
- [x] GA4 on all pages
- [x] GSC verified, sitemap submitted, indexing requested
- [x] GSC alerts configured
- [x] OG images, FAQPage schema, BreadcrumbList
- [x] Internal link graph complete
- [x] Blog section on homepage
- [x] Core Web Vitals — all green (PSI)
- [x] Robots.txt
- [x] 404.html
- [x] Pinterest boards created (5 boards)
- [x] Pinterest Rich Pin meta tags on all posts

### In Progress / Next
- [ ] **Email capture** — Mailchimp (free to 500 contacts). Embed form on blog index, bottom of every post, and homepage. Lead magnet idea: "Hair Type Cheat Sheet" PDF or "4C Wash Day Checklist"
- [ ] **Pinterest** — claim website, pin all 10 posts (1–2/day), enable Rich Pins via Pinterest URL debugger
- [ ] **Write 2 new blog posts** (Week 2 target)
- [ ] **Apply for AdSense** once hitting ~100 daily sessions
- [ ] **Amazon Associates audit** — check which links are getting clicks, double down on those topics

### Monetization Stack
1. Amazon Associates (active) — affiliate commissions
2. Google AdSense (pending) — display ads once traffic threshold hit
3. Direct affiliate programs (future) — SheaMoisture, Mielle Organics, Cantu via ShareASale/Impact

---

## Common Tasks

### Adding a new blog post
1. Copy an existing blog post as a template
2. Update: title, description, canonical URL, OG tags, article schema (headline, datePublished, dateModified)
3. Add to `sitemap.xml`
4. Add to `blog/index.html` post listing
5. Add link from `index.html` blog section
6. Cross-link from 2–3 relevant existing posts
7. Create OG image (1000×1500) in `/images/og-[slug].png`
8. Request indexing in GSC

### Updating quiz product data
All product routines live in `js/quiz.js` in the `routines` object, keyed by hair type (e.g., `"3B"`). Each routine has steps with `step`, `why`, `products[]`, and `videos[]` arrays.

### Deploying changes
```bash
git add .
git commit -m "description"
git push origin main
```
GitHub Pages deploys automatically. Cloudflare cache for static assets is 1 year — if updating a font or JS file, rename it or append `?v=2` to bust the cache.
