# Strand — Project Context for Claude Code

## What This Is
**Strand** (`hairtypequiz.hair`) is a static hair care site on GitHub Pages, proxied through Cloudflare. It has two main functions:
1. A **hair type quiz** (1A–4C) that outputs a personalized product routine with Amazon affiliate links and YouTube tutorial cards
2. A **blog** of 56 SEO-optimized posts on natural, curly, coily, and wavy hair (routines by type, technique guides, evidence-led product roundups)

Monetization: Amazon Associates affiliate commissions + Google AdSense (not applied yet; the gate is traffic only, ~100 daily sessions; ~14/day as of Oct 2026).

---

## Repo Structure

```
/
├── index.html              # Main quiz page (self-contained, ~1400 lines)
├── about.html, privacy.html
├── wash-day-checklist.html # Public 4C Wash Day Checklist landing page (indexed)
├── checklist.html          # Signup thank-you page (noindex) — a view = an email signup
├── checklist-4c-wash-day.html # Printable checklist (noindex)
├── 404.html
├── favicon.svg             # Branded SVG favicon (espresso bg, caramel italic "s")
├── robots.txt              # Allow all crawlers
├── sitemap.xml             # 60 URLs; submitted to GSC as the non-www URL
├── CNAME                   # hairtypequiz.hair
├── fonts/                  # Self-hosted WOFF2 (see Fonts below for exact filenames)
├── images/                 # OG/pin images (1000×1500 PNG), named og-[slug].png
├── js/
│   └── quiz.js             # 50KB — lazy-loaded on first quiz interaction only
├── blog/
│   ├── index.html          # Post listing with category filter + featured "Latest" card
│   └── *.html              # 56 posts
└── .claude/
    ├── settings.json       # Permission allow rules (committed)
    └── skills/             # frontend-design, ga-report
```

List current posts with `ls blog/*.html`; the blog index is the canonical ordered list.

---

## Technical Architecture

### Fonts
- **Self-hosted** in `/fonts/`. The exact filenames are `cormorant-garamond-normal.woff2`, `cormorant-garamond-italic.woff2`, and `dm-sans.woff2`. **Use these names.** Until Oct 26, 2026, 25 pages referenced `cormorant-normal.woff2` / `cormorant-italic.woff2`, which 404, so headings silently fell back to a generic serif.
- Preloaded via `<link rel="preload">` in `<head>`
- Inline `@font-face` with `font-display: optional` (no CLS from font swap). Because of `optional`, a missing font fails silently: check `document.fonts` status when testing.

### JavaScript
- **Quiz logic** (`js/quiz.js`, 50KB) lazy-loads on first user interaction with `.hair-card`
- A 1.6KB inline stub in `index.html` handles the load queue, URL param auto-load (`?type=3B`), and nav/FAQ toggling
- Pattern: `_loadQuiz(cb)` queues callbacks until quiz.js is ready, handles rapid successive clicks correctly

### Analytics tags
- GA4 (G-WZFESSQ350), Google Ads (AW-980643963), GTM (GTM-KCVJS3MM), Meta Pixel (1528517258881779)
- **Deferred to first user interaction** (mousedown, keydown, touchstart, scroll) with a 30-second fallback timer
- `gtag()` shim defined inline to queue events before the real script loads

### Content Security Policy
Live CSP (meta tag on every page):
```
default-src 'self';
script-src 'self' 'unsafe-inline' https://www.googletagmanager.com https://www.google-analytics.com https://connect.facebook.net https://www.googleadservices.com;
style-src 'self' 'unsafe-inline';
font-src 'self';
img-src 'self' https: data:;
connect-src 'self' https://*.google-analytics.com https://analytics.google.com https://www.googletagmanager.com https://www.facebook.com https://connect.facebook.net https://www.googleadservices.com https://stats.g.doubleclick.net https://*.fbcdn.net;
frame-src https://www.googletagmanager.com;
object-src 'none';
base-uri 'self';
form-action 'self' https://*.list-manage.com;
```
`form-action` must keep `https://*.list-manage.com` or Mailchimp signups break. `upgrade-insecure-requests` is intentionally absent (Cloudflare handles HTTPS; in a meta tag it caused Chrome Issues warnings).

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
  - Known minor issue: `www.` redirects to `http://` then `https://` (two hops). A Redirect Rule `www.*` → `https://hairtypequiz.hair/${path}` would fix it.
- Extensionless URLs (e.g. `/blog/loc-method-beginners-guide`) serve the page with 200; canonical tags point to the `.html` URL and Google honors them.

### Branch Strategy
- `main` — production (every push deploys)
- Work happens on `claude/*` branches. Site changes are previewed (desktop + mobile screenshots) and merged to `main` only after owner approval.

---

## SEO & Analytics

### What's Set Up
- **GA4** property 533457768 (G-WZFESSQ350). Read it with the `ga-report` skill (`.claude/skills/ga-report`).
- **Google Search Console**: domain property `sc-domain:hairtypequiz.hair`. The GA service account has Full User access; Search Console API is enabled in Cloud project 946942643975. Requests to `searchconsole.googleapis.com` are authenticated by a proxy network secret (no key in code).
  - **API reads work** (search analytics, sitemaps list, URL inspection).
  - **API writes don't**: submitting/deleting sitemaps fails because the proxy decodes the `%2F` the API needs in the path, and Google offers no indexing-request API. The owner does these in the Search Console app.
- **Sitemap**: the submitted one is `https://hairtypequiz.hair/sitemap.xml` (non-www). The old www sitemap (last read June 2026) was the reason 21 pages went undiscovered for months.
- GSC alerts: enabled for manual actions + coverage issues
- Amazon Associates: tag `strand01-20` on all product links (search-URL format `amazon.com/s?k=...&tag=strand01-20`)
- Google AdSense account meta tag on all pages (pending traffic threshold)

### Indexing routine
- The owner can request ~10 indexings/day in the Search Console app. Prioritize by GA traffic and affiliate value.
- "Discovered/unknown" pages: request indexing. "Crawled — currently not indexed" pages: Google read them and passed, so re-requesting doesn't help; they need content changes (differentiate or merge). As of Oct 25: 4A routine, how to wash 4C, protective styles, how to find your hair type, scalp care, baggy method.

### Analytics to-dos
- Mark `quiz_complete` as a GA4 key event (owner)
- Per-placement Amazon Associates tracking IDs; monthly Associates CSV exports via a Google Drive folder
- Optional: Microsoft Clarity (needs CSP change, preview first), Bing Webmaster Tools

### Schema Markup
- `WebSite` + `FAQPage` + `Organization` on `index.html`
- `BlogPosting`/`Article` + `BreadcrumbList` (+ `FAQPage` on newer posts) on blog posts
- Pinterest Article Rich Pin meta tags on posts; Pinterest domain verified

### OG / Pin Images
All 1000×1500 PNG in `/images/`, named `og-[slug].png`. The OG image doubles as the pin Pinterest uses when a reader saves the post.

---

## Email
- **Mailchimp** form on 54 pages: `https://hair.us10.list-manage.com/subscribe/post?u=d1b239b37b6c1105dd901b721&id=4220e3e234&f_id=0046e0e1f0`, with the honeypot field `b_d1b239b37b6c1105dd901b721_4220e3e234`.
- The only lead magnet is the **4C Wash Day Checklist**. Copy the standard dark "Get the 4C Wash Day Checklist" block from any recent post; never invent a lead magnet. (Three posts promised a nonexistent "Hair Type Cheat Sheet" and posted to a placeholder list until Oct 26.)
- A signup = a view of `/checklist.html` (thank-you page). After any form change, the owner sends one test signup.
- Idea for later: a general wash day checklist for all hair types (the 4C one is a mismatch on type 2–3 posts).

---

## Common Tasks

### Adding a new blog post
1. Copy the most recent roundup post as a template (correct font filenames, quick picks, CSP)
2. Update: title, description, canonical URL, OG tags, schema (headline, datePublished, dateModified, FAQ)
3. Add to `sitemap.xml` (and bump home/blog `lastmod`)
4. Add to `blog/index.html` as the featured "Latest" card (demote the previous one)
5. Add a card to the `index.html` blog section and bump "View All N Articles"
6. Cross-link from 2–3 relevant existing posts (Related Reading + an in-text link)
7. Create the pin/OG image (1000×1500) at `/images/og-[slug].png`
8. Preview on a `claude/*` branch → owner approval → merge to `main`
9. Owner requests indexing in GSC and posts the pin

### Updating quiz product data
All product routines live in `js/quiz.js` in the `routines` object, keyed by hair type (e.g., `"3B"`). Each routine has steps with `step`, `why`, `products[]`, and `videos[]` arrays.

### Deploying changes
Merge the approved branch into `main` and push. GitHub Pages deploys in about a minute. Cloudflare caches fonts, JS, and images for 1 year: if updating an existing font, JS, or image file, rename it or append `?v=2` to bust the cache (new filenames are fine).

### Pins via Canva
- Canva `create-design` makes good photographic pins but check: (1) apostrophes — some Canva display fonts draw ’ as an acute-looking wedge; straight `'` renders cleanly; (2) size — resize to custom 1000×1500; (3) export PNG and compress (a 256-color quantize took 1.3 MB → 440 KB with no visible change).
- Canva requires showing the owner a preview before committing edits.

---

## Planned: Automated Content Pipeline ("CEO system")
**Not built. Don't build the approval queue until the owner says "start the queue."**
- The owner runs everything from an iPhone (Claude app + Safari).
- A "CEO" Claude session the owner chats with, which starts helpers as needed: **Analyst** (GA4 + GSC), **Strategist** (vidIQ, Firecrawl search + research papers, Semrush when available), **Creator** (articles, pins via `frontend-design` or Canva).
- A mobile approval-queue page where the owner approves/edits/rejects items; a scheduled **Publisher** posts only approved items: Pinterest 1–3 pins/day, Facebook ~3 posts/week (following the Meta rules below).
- A weekly analyst report. Time zone: America/New_York.
- Tokens pending: Pinterest developer app (scopes boards:read, pins:read, pins:write, user_accounts:read; network secret for api.pinterest.com; expires every 30 days — needs a renewal reminder) and a long-lived Meta Page token (pages_manage_posts, pages_read_engagement, pages_show_list, read_insights; network secret for graph.facebook.com).
- First manual run: Post 55 (Oct 25–26, 2026): GSC/GA gap analysis → vidIQ + Firecrawl validation → PubMed evidence → article + pin → preview → deploy.

### Connectors status (Oct 2026)
- Working: GA4 and Search Console (via proxy), Gmail, Google Drive/Docs/Sheets/Calendar, Canva, Firecrawl, vidIQ, GitHub.
- Blocked: Semrush (out of API units), Ahrefs (connection not finished). Firecrawl can't read Pinterest's newsroom/trend report.

---

## Content

### Roadmap (from the original list, all published)
4A routine, hair porosity test, scalp care, TWA hairstyles, best leave-ins for 4C, wavy routine for beginners. Pick new topics from GSC query gaps + GA clicks + vidIQ/Pinterest demand rather than a fixed list.

---

## Open Items (as of Oct 27, 2026)
Start here in a new session. Update this list as items close.

- [ ] **Post 57: best curl creams for type 4 hair**: live Oct 27 (`blog/best-curl-creams-4c-hair.html`). Fact-check fixes on `claude/post57-factcheck` (Curl La La has no flaxseed; survey and coconut-oil wording); then a `compliance` job. Owner: request indexing and post its pin. Analyst pick: curl creams convert best on the blog (0.40 Amazon clicks/view) and 185 GSC impressions for "best curl cream for 4c/4b/4a" land on the general `best-curl-creams-natural-hair` page at ~pos 36. Keep that page on "natural hair" broadly and cross-link the two.
- [ ] **Mobile table overflow on older posts**: the 4C routine page's 4A/4B/4C comparison table clips its right column on phones. Fix by stacking into labeled cards on mobile (see `.ev-table` in `blog/best-products-low-porosity-hair.html`), and check other older posts for the same issue. Preview first.
- [ ] **Owner: request indexing for Post 56** (`silk-press-4c-hair-at-home`) in GSC and post its Canva pin.
- [ ] **Owner: register `hair_type` as a GA4 custom dimension** (Admin → Custom definitions). `quiz_complete` already sends it; needed to see which hair types quiz-takers get.
- [ ] **Owner: Pinterest developer app token and Meta long-lived Page token** — still pending; the Publisher can't run without them.
- [x] **GSC check Oct 28**: 44 of 60 indexed (from 31 of 58 on Oct 25), including Posts 55 and 56. Still out: 7 discovered-not-indexed (ACV rinse, clarifying shampoos, heat protectants, co-washing, finger coils, breakage vs shedding, wavy routine), 3 unknown (bond builders, hair steamer, rice water), 6 crawled-not-indexed (4A routine, wash 4C, protective styles, scalp care, baggy method, wash-day-checklist). Sitemap last read Oct 25 (58 URLs; now 60) — owner to resubmit and remove the old www entry. Impressions +77% week over week (625 → 1,108), clicks flat at 4, avg position 36.2 → 35.0.
- [x] Oct 26–27: Post 56 live; low-porosity product links routed to Post 55; breadcrumb fixed on 17 older posts (it inherited the sticky flex `nav` styles).

## Growth Priorities (Current State)

### Done
- [x] 56 blog posts with affiliate links; quick picks on roundup posts
- [x] GA4 on all pages; ga-report skill
- [x] GSC verified; correct sitemap submitted (Oct 25, 2026); Search Console API reads connected
- [x] GSC alerts configured
- [x] OG images, FAQPage schema, BreadcrumbList
- [x] Internal link graph, blog section on homepage
- [x] Core Web Vitals — all green (PSI)
- [x] Robots.txt, 404.html
- [x] Mailchimp email capture with 4C Wash Day Checklist
- [x] Pinterest boards (5), Rich Pin meta tags

### In Progress / Next
- [ ] **Indexing**: work through unindexed pages ~10/day (see Indexing routine)
- [ ] **Backlinks**: the main ranking weakness (the site ranks ~#73 for "hair type quiz")
- [ ] **Near-page-1 posts**: tune titles/intros for "3b vs 3c", "does 4c hair grow slower", protein-treatment frequency, sulfate-free shampoo questions
- [ ] **"Crawled, not indexed" posts**: differentiate or merge
- [ ] **Pinterest**: 1–3 pins/day; enable Rich Pins via URL debugger
- [ ] **Apply for AdSense** at ~100 daily sessions
- [ ] **Amazon Associates audit** — most clicks come from the quiz (45 of 63 Amazon clicks in 60 days)

### Monetization Stack
1. Amazon Associates (active) — affiliate commissions
2. Google AdSense (pending) — display ads once traffic threshold hit
3. Direct affiliate programs (future) — SheaMoisture, Mielle Organics, Cantu via ShareASale/Impact

---

## Owner Preferences & Feedback Log

Standing feedback from the site owner. Apply it without being reminded, and add new feedback here as it's given.

### Approval before anything goes out
- **Preview first, always.** Show designs, pins, ads, and site changes before posting or pushing. Site changes: screenshot desktop + mobile, wait for approval, then push.
- **Social posts are approved in batches.** Prepare 5–7 pins (image, title, description, link) per batch. Only pins marked approved in the queue get posted; scheduled runs never post unapproved items.
- **Use Opus for implementation work on the site** when the owner asks for changes to be made.

### Design direction
- Use the `frontend-design` skill (`.claude/skills/`) for any visual work: pins, ads, page changes.
- Avoid templated looks. The first serum ad (dark background, centered serif stack, fake button) was replaced by the "evidence ledger" design: paper/document feel, monospace data rows, structure that encodes real findings.
- Lead with evidence and science. That's the site's differentiator in articles, ads, and pins.
- Keep the brand palette (espresso / caramel / cream) and `--caramel-text` for text on light backgrounds.
- **Approved pattern: "Quick picks" block** near the top of roundup posts, plus a one-line "Best for + View on Amazon" summary under each product. Reference implementation: `blog/best-hair-growth-serums-natural-hair.html` (`.quick-picks`, `.qp-*`, `.card-summary`). The data column must come from the post's own content (evidence grade, hold level, heat stage, etc.); never invent ratings, and no dollar prices.
- **"Why this article" with every article preview (Oct 27, 2026).** Each preview of a post, outline or pin batch includes a short "Why this article" section: the SEO rationale (target phrase and intent; the GSC queries, impressions, position, clicks, date range and the page currently getting them; secondary phrases; the current top 5 and how this post differs; why this topic now; cannibalization risk and internal links; SEO title and meta with lengths), plus GA/Amazon data with dates, the audience, the evidence used and what's "not studied", what the free team suggested and what was kept or dropped, and open risks.
- **No star ratings, review counts, Amazon prices or "Amazon's #1 / bestseller" claims anywhere** (posts, quiz data, schema). Amazon's terms don't allow copied prices or ratings, and they go stale. Swept site-wide Oct 28, 2026. Use budget/premium wording for price; general category price ranges (e.g. steamer types, silk vs satin) are fine.
- **Evidence tables cite real studies** (PubMed links) and mark ungraded steps "not studied" rather than guessing. On mobile, wide tables stack into labeled cards (see `.ev-table` in `blog/best-products-low-porosity-hair.html`).
- **Pins (Oct 26, 2026):** for Post 55 the owner chose the Canva photographic creative over the hand-built `frontend-design` pin, and asked to use only that one. Offer a Canva option for future pins.

### Testing
- **Block analytics in test browsers.** Any Playwright/headless run against the site must abort all non-localhost requests first, or real GA4 events and Google Ads conversions fire.
- Don't submit test signups to the real Mailchimp list; ask the owner to send one.

### Copy & platforms
- Quora answers should be genuinely useful and drive traffic to the site, usually via the quiz link where it fits naturally. Don't force links.
- Meta ads: never "you/your hair" personal-attribute framing or health claims. Talk about the research and the products.
- Pinterest is the priority channel; post 1–3 pins/day, never in bursts. Facebook is a later, light test. Instagram and X are not automated.

### Gmail
- `mcp__Gmail__trash_thread` is pre-approved in `.claude/settings.json` for inbox cleanup (trash only; never send or permanently delete without asking).
