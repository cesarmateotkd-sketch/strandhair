# Strand improvement log

Read this before any Strand work. The Monday cycle adds to it, and so does any session that makes a mistake. The `.claude/` folder isn't served by GitHub Pages; check that this file still returns 404 at hairtypequiz.hair/.claude/learnings.md.

Goal: revenue (Amazon Associates, the $12 guide, later brand affiliates and AdSense) and Google page 1 for the pages that earn.

## How the cycle works (every Monday)
1. **Measure.** GSC 7 days vs the 7 before, URL inspection, GA4 (sessions by channel, quiz_complete, affiliate_click by placement, guide_click, begin_checkout, sign_up). Gumroad and Associates numbers come from the owner until the APIs are connected.
2. **Grade due experiments.** For each experiment whose check date has passed, record the result: win / no change / loss / can't tell. If an experiment didn't do what was expected, write down why under Mistakes and lessons.
3. **Pick 1–3 new experiments,** highest expected revenue first. Each needs a hypothesis, one metric, a baseline with dates, and a check date 3–4 weeks out (Google needs time). Change one thing per page per experiment so results can be read.
4. **Ship.** Small fixes go live directly (title/meta, claim corrections); everything else is previewed and waits for the owner's MERGE IT.
5. **Log** here, commit to the `claude/*` work branch and push. Report to the owner with what was learned, not just what was done.

## Rules learned the hard way (check before acting)
- Never run a page-wide find-and-replace that can reach the JSON-LD; validate every JSON-LD block before each commit (Nov 23).
- Test what matters, not just the format: a link test must check each product ID against the verified list (Nov 23).
- Before calling a page weak, check its last crawl date. Three "crawled, not indexed" pages had last been read before their upgrades (Nov 22).
- Before merging a branch into main, list `git log main..branch`. A merge pulled an unapproved preview into main on Nov 22 (caught before the push). Cherry-pick when only part is approved.
- Check every product claim against the brand's or retailer's current label: Ouidad in the curl cream post, a nonexistent Mielle detangling spray, Curl La La "flaxseed", Babassu listed as a leave-in. A wrong product is the fastest way to lose a reader's trust and a sale.
- No comparisons between ethnic groups (13 posts had them until Nov 21). Search for these terms before any merge: African, Caucasian, Asian, ethnic, race.
- Every number needs a source with a date or a "not studied" label. Unsourced shrinkage %, growth rates and porosity claims kept coming back from older posts.
- Never promise a lead magnet that doesn't exist (the "Hair Type Cheat Sheet" until Oct 26). The only one is the 4C Wash Day Checklist.
- Use the exact font filenames. Wrong names 404 silently because of `font-display: optional` (25 pages until Oct 26).
- Cloudflare caches /images and /js for a year: give changed files new names.
- GitHub Pages sometimes skips a build after a merge. Confirm live with curl, and push a tiny commit if it hasn't deployed after 5 minutes.
- Firecrawl credits run out around midday. Do Firecrawl work early, and save the results to files.
- An old www sitemap hid 21 pages for months. Check Search Console's sitemaps list in every weekly review.
- Re-requesting indexing doesn't help "crawled, not indexed" pages. They need a different angle or a merge (how-to-wash-4c merged into the 4C routine, Nov 22).

## Mistakes and lessons (newest first)
| Date | What happened | Cost | Lesson / rule added |
|---|---|---|---|
| 2026-11-23 | A claim fix on the 2C routine used a page-wide regex that also matched the same sentence inside the JSON-LD FAQ, inserting an HTML link with quotes and breaking the structured data; it went live for about 30 minutes | Google could not read the 2C FAQ/article data briefly | Edit body text and JSON-LD separately: parse the JSON, change it, dump it back. After every page edit, validate all JSON-LD blocks before committing |
| 2026-11-23 | The exact-links preview (v10) still pointed 11 slots (Not Your Mother's, Aunt Jackie's) at old, unchecked ASINs: the update regex skipped names with escaped apostrophes, and the link test only checked URL format | None (caught in the Monday cycle before merge) | Parse quiz.js entries with an escape-aware pattern; the link test now fails on any /dp/ ASIN not in the verified list |
| 2026-11-22 | Told the owner "about 20" posts needed the waves & curls signup before counting; it was 9 | A question asked on a wrong number | Count before quoting a number to the owner |
| 2026-11-22 | `git checkout <file>` during cleanup reverted claim fixes made minutes earlier on the 4C printable page | None (redone in the same session) | Run `git diff <file>` before any `git checkout <file>` |
| 2026-11-22 | The 4C checklist PDF (our only lead magnet) still had unsourced claims (hygral fatigue, cuticle sealing, LOC/LCO rules); its source file wasn't in the repo | Trust | Check lead magnets and PDFs in evidence passes, not just posts; keep PDF sources in the repo (scripts/checklists) |
| 2026-11-22 | Merging snippet fixes into main also pulled in the unapproved high porosity preview | None (caught before the push) | List commits before merging (rule above) |
| 2026-11-21 | Launch email: 3 of 11 opened, 0 clicks | No sales from the list | 11 subscribers can't validate a product. Grow the list before judging the guide by email |
| 2026-11-21 | Ethnicity comparisons found in 13 posts | Brand risk | Owner rule plus a grep before every merge |
| 2026-11-20 | Product facts wrong on 3 roundups | Trust, affiliate relevance | Check labels for every product |
| 2026-10-26 | Lead magnet promised that didn't exist; fonts 404 | Lost signups; weaker design | Rules above |

## Experiments
| ID | Started | Page / channel | Change | Hypothesis | Metric (baseline, dates) | Check on | Result |
|---|---|---|---|---|---|---|---|
| E1 | 2026-11-22 | 42 pages | Titles ≤70 characters, descriptions ≤160 | Snippets that aren't cut off get more clicks | Site CTR (Oct 24–Nov 20 baseline from GSC) | 2026-12-15 | |
| E2 | 2026-11-22 | 4C routine + wash merge | Research table, wash page folded in | One stronger page beats two weak ones | 4C routine position and impressions; indexed yes/no | 2026-12-15 | |
| E3 | 2026-11-22 | Myths hub | New linkable page | Outreach links to it; it gets indexed | Referring domains (Ahrefs DR 0), indexed, impressions | 2026-12-20 | |
| E4 | 2026-11-21 | 3C, 4C products, low porosity, 2B | Retitled for near-page-1 queries | Position up, first clicks | Positions in the Monday ranking report | 2026-12-13 | |
| E5 | 2026-11-21 | guide.html + quiz offer | $12 guide, launch price $9 | Some readers buy | guide_click, begin_checkout, Gumroad sales (owner) | 2026-12-05 | |
| E6 | 2026-11-22 | Quiz 2A–3C results + thank-you page | Waves & Curls checklist signup (was 4A–4C only) | Type 2–3 quiz takers sign up too | sign_up (method quiz_results) by hair_type; Mailchimp list size (12 on Nov 22) | 2026-12-20 | |
| E7 | 2026-11-22 | 6 crawled-not-indexed pages | 4A, protective styles, scalp, baggy: just need a recrawl (Google last read them Jul–Oct, before the Nov 7 upgrades). Twist-out: short-answer box + link from the 4C routine. Wash day checklist page rebuilt with both checklists inline + research table | Pages get indexed once recrawled | Indexed yes/no via URL inspection | 2026-12-20 | |
| E8 | 2026-11-22 | Quiz (js/quiz.js v10) | Exact Amazon product pages for every checked product (184 of 204 rendered links across the 12 types); 5 discontinued products swapped for label-checked ones already on the site (Sunny Isle JBCO, SheaMoisture ABS Bamboo Charcoal, Mielle leave-in, SheaMoisture smoothie, Aunt Jackie's gel); search links for Not Your Mother's Curl Talk and 9 other unavailable items | Exact pages convert better than search results, so more clicks per quiz | Amazon outbound clicks (GA4 `click`, linkDomain amazon.com, page /) per quiz_complete: 35 / 93 = 0.38 (Oct 25–Nov 21). Note: `affiliate_click` only recorded 2 in that window because it was added late; use the outbound `click` event | 2026-12-20 | |
| E9 | 2026-11-23 | Protein treatment post | Schedule table (hair condition / protein / how often) right under the answer-first intro, aimed at the "how often" answer box | A scannable table lifts position and gets the first clicks for frequency queries | GSC "how often should i do a protein treatment on 4c hair" pos 6.6, 5 impr, 0 clicks; page 107 impr/wk, pos 14.6, 1 click (Nov 15–21) | 2026-12-20 | |
| E10 | 2026-11-23 | LOC method post | Answer-first intro, research table (5 studies + not studied), visible FAQ matching the schema | First evidence on a page with 0 studies lifts position for "loc method" | GSC Nov 9–22: 101 impr, 0 clicks, avg pos 40.2; "loc method" 28 impr pos 38.1 | 2026-12-20 | |

## Weekly log
- **Nov 23 (week Nov 15–21 vs Nov 8–14):** impressions 1,945 → 2,367, clicks 2 → 10, CTR 0.10% → 0.42%, avg position 29.4 → 23.5. Indexed 45/62 (twist-out newly indexed). Sessions: Facebook 45 (new, source unknown), Pinterest 16, organic search 23. Amazon outbound clicks 35 (20 from the quiz on Nov 17 alone), quiz_complete 24, sign_up 0 (1 the week before; Mailchimp shows +1 real subscriber Nov 22). No experiment reached its check date.
