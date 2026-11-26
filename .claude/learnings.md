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
- For every named product: confirm it exists, it is the type the post says (cleanser vs styler, rinse-out vs mask), and the directions match the brand (Nov 23).
- Before reporting a traffic spike, check engaged sessions and dates: 45 "Facebook" sessions on Nov 19 had 0 engagement (crawler) (Nov 23).
- Run `python3 scripts/check_pages.py` before every push to main; small fixes go live only if it passes (owner, Nov 23).
- Never run a page-wide find-and-replace that can reach the JSON-LD; validate every JSON-LD block before each commit (Nov 23).
- Edit only inside `<article>…</article>`, cap every regex match length, and compare file size before/after: a page that shrinks by more than a few hundred bytes is a stop sign (Nov 23).
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
| 2026-11-23 | Product sweep of all 234 blog products: 3 more invented products (The Doux "Anonymous Rock Star" brilliantine, Camille Rose "Rosemary Mint Edge Pomade", It's a 10 "Miracle Bond Rebuilder") and 2 wrong product types (Camille Rose Cocoa Nibs is a serum, not a detangling masque; SheaMoisture Manuka "Multi-Action" is a leave-in, not a conditioner) | Readers sent to searches for products that don't exist | Swapped for real, checked products (preview); sweep method: auto-match against verified quiz products, then eyeball the rest and search the doubtful ones |
| 2026-11-23 | Older posts recommended products that don't exist ("Darling Amigos" threading thread, "Curad" magnetic rollers) and wrong product types (Camille Rose Spiked Honey "co-wash" is a styling mousse; Olaplex No. 5 "20–30 min treatment" is a 1–3 min rinse-out) | Readers sent to searches for nonexistent or wrong products; lost affiliate trust | Every pass checks each named product exists and is the type claimed (brand page or retailer listing), not just its ingredients |
| 2026-11-23 | A claim fix on the 2C routine used a page-wide regex that also matched the same sentence inside the JSON-LD FAQ, inserting an HTML link with quotes and breaking the structured data; it went live. Worse: the same regex (`.*?` across tags) matched from a sentence in the JSON-LD to a sentence in the article and deleted ~17 KB in between (end of JSON-LD, all CSS, top of the article); the first repair then kept the truncated file | The live 2C page lost its styles and article top for about an hour | Edit body text and JSON-LD separately: parse the JSON, change it, dump it back. After every page edit, validate all JSON-LD blocks before committing |
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
| E11 | 2026-11-23 | 2C routine | Answer-first "what is 2C hair" intro, research table (6 studies + not studied), visible FAQ synced to schema | Definition-first intro and evidence lift position for "2c hair" | GSC Nov 9–22: 113 impr, 0 clicks, avg pos 59; "2c hair" 41 impr pos 57 | 2026-12-20 | |
| E12 | 2026-11-23 | Best shampoos | Co-wash pick swapped (Camille Rose Spiked Honey is a styling mousse) for As I Am Coconut CoWash with an exact product link; research table (5 studies + not studied); visible FAQ | A correct co-wash pick and evidence lift position and Amazon clicks | GSC Nov 9–22: 77 impr, 0 clicks, avg pos 48; "best clarifying shampoo for natural hair" pos 25 | 2026-12-20 | |
| E13 | 2026-11-23 | Deep conditioning guide | Claim corrections live; preview: answer-first how-to intro + research table (5 studies + not studied). Job split kept: guide = how to, best-deep-conditioners roundup = which product | Answer-first how-to lifts "how to deep condition" queries toward page 1 | GSC Nov 9–22: 72 impr, 0 clicks, avg pos 34.6; "deep conditioning methods" pos 24, "how to deep condition hair" pos 36 | 2026-12-20 | |

## Weekly log
- **Nov 23 (week Nov 15–21 vs Nov 8–14):** impressions 1,945 → 2,367, clicks 2 → 10, CTR 0.10% → 0.42%, avg position 29.4 → 23.5. Indexed 45/62 (twist-out newly indexed). Sessions: Facebook 45 (checked Nov 23: all on Nov 19, 25+ different landing pages, 0 engaged sessions, 0 s duration: link-preview crawler or automated scan, not readers; exclude from traffic), Pinterest 16, organic search 23. Amazon outbound clicks 35 (20 from the quiz on Nov 17 alone), quiz_complete 24, sign_up 0 (1 the week before; Mailchimp shows +1 real subscriber Nov 22). No experiment reached its check date.

## Outreach log
Free pitches only (owner: up to 10/week since Nov 24; replies need the owner's OK). One follow-up per site after 7 days.

| Date | Site | Contact | Page / offer | Status |
|---|---|---|---|---|
| 2026-11-19 | Hair Is Curly | editorial@ | Guest post: porosity research | Declined Nov 20 |
| 2026-11-19 | Curl Warehouse | hello@ | Paid guest post (their store links) | No follow-ups (their request) |
| 2026-11-19 | Quicksilver Hair | joli@ | Porosity research tables | Sent |
| 2026-11-19 | CurlsBot | info@ | Hair typing study page | Sent |
| 2026-11-19 | Naturally You! | form | Guest article (4C growth) | Submitted |
| 2026-11-22 | The Beauty Web | contact@ | Guest article: porosity research | Sent |
| 2026-11-22 | The Mestiza Muse | team@ | Article: mixed curl patterns | Sent |
| 2026-11-24 | Big Head Justice | info@ | Myths page (#castor-grows, #float-test, #oil-moisturizes) | Sent |
| 2026-11-24 | Natural Haircare News | info@ | Guest post: 5 myths checked against research | Sent |
| 2026-11-24 | Kindred Curl (salon, Pittsburgh) | hello@ | Myths page #typing-science, #wash-rarely for their curl-training myths post | Autoreply Nov 24 (owner busy, slow replies) |
| 2026-11-24 | Raising Biracial Babies | christina@ | Myths page #not-growing, #detangle-often for her hair growth posts | Sent |
| 2026-11-25 | Wild Soul Salon (Jackie Wilt, Denver curl specialist) | jackiewiltartistry@gmail.com | #typing-science + hair type chart for "What Hair Type Do I Have?" (Jan 2026) | Sent |
| 2026-11-25 | Black Girl Curls (blackcurlmagic.com) | info@ | #oil-moisturizes for Myth #1 in "5 Common Natural Hair Care Myths Debunked" | Sent |
| 2026-11-25 | A Second Chance, Inc. (kinship care nonprofit, PA) | communications@ | Hair type chart + quiz for "A Kinship Caregiver's Guide to Caring for Diverse Hair Textures" (Sep 2026) | Sent |

Lessons (Nov 24 research): free, real hair blogs are a small pool; many "write for us" pages are paid or wig shops, and "best blogs" lists are often years old or noindex (Curlee 2021, noindex). Vet: active in 12 months, indexable, real email. Benchmarks: link outreach replies ~8.5% (Backlinko/Pitchbox, 12M emails); manually edited emails beat automated ones (Hunter 2026). Plan on ~1 link per 10-15 pitches.

- 2026-11-24: Canva's AI chart for 1A-4C looked polished but drew the patterns wrong (3A and all type 4 as the same squiggle, no 4B zigzag, unequal lengths that contradicted its own "same length" caption, renamed 3B/3C). For diagrams where the drawing is the content, generate the geometry in code; use Canva for photographic pins and layouts.

- 2026-11-24 (tools): When Firecrawl credits run out, use PubMed's free E-utilities API for study lookups (esearch/esummary at eutils.ncbi.nlm.nih.gov work from the container; plain pubmed.ncbi.nlm.nih.gov pages return 429), and Jina Reader (https://r.jina.ai/<url>, free, no key; tested Nov 24) or plain curl/Playwright for brand and retailer pages (Ulta, Target and brand sites load). Never bypass bot protection or CAPTCHAs. Connector options not yet connected: Parallel Search (free, no account), Tavily, Exa, TinyFish (cloud browser), AWS Web Search.
- 2026-11-24: Best oils pass replaced a whole <p> to fix one sentence ("One honest caveat") and deleted the coconut pre-poo instructions sharing that paragraph. Caught in the word diff before commit. Rule: when replacing a block by a phrase inside it, print the full original block first; prefer sentence-level replacement when the phrase isn't the block's first words.
- 2026-11-24: Smaller slips in the evidence passes, all caught before publishing: (1) best products for 4C: the research table was inserted inside the indented `.step-divider` wrapper (insert before wrapper comments/divs, not before the first h2 inside them; check the heading's left offset in the phone render); (2) a Playwright script run from the repo directory saved a screenshot into the repo (always cd to the scratchpad or use absolute paths; `git status` before `git add`); (3) silk vs satin: a sentence-level replace kept the old next sentence, duplicating the point (print the surrounding paragraph after every replace); (4) 4B pass: two script runs stopped on targets split by <strong> tags (pre-check every target against the page before applying; the all-or-nothing write meant nothing broke). (5) A Quora draft said warmth during deep conditioning was "not studied" while the site cites two lab studies for it: re-check drafted copy against learnings before handing it out.
- 2026-11-25 (product facts verified, brand/retailer pages): Garnier Fructis Pure Clean Purifying Shampoo is sulfate-free (the "Fortifying" variant contains SLES; don't mix them up). NYM Curl Talk Sculpting Gel holds with VP/VA copolymer + PVP + glycerin, no flaxseed. Maui Moisture Curl Quench + Coconut Oil Shampoo is sulfate-free (olefin sulfonate surfactant). Herbal Essences "Bio:Renew"/"Totally Twisted" curl mousse is now "Curl Boosting Mousse" (Amazon B0B995XZ6T). SheaMoisture JBCO Strengthen & Restore Shampoo is sulfate-free. SheaMoisture's US name is "Manuka Honey & Yogurt Hydrate + Repair Protein-Strong Treatment" ("Protein Power" is the Canadian name, sold there as a leave-in).
- 2026-11-25 (channels): Pinterest pin A "Natural Hair Myths vs Evidence" posted by the owner (utm_campaign=myths, board Natural Hair Science). Quora answer #4 (low porosity 3C/4A, links to the 3C routine #low-porosity-3c) posted by the owner. Track: GA4 sessions with utm_campaign=myths and Quora referrals to the 3C routine, check Dec 2.

## YouTube Shorts (Nov 25, 2026)
- First 3 "myth check" Shorts built (washing, float test, oil), faceless: vidIQ voice "Bella", vidIQ music bed at 10%, PIL frames + ffmpeg, -16 LUFS. Generator and scene specs in `.claude/youtube/` (render.py reads scripts.json for lines/timings and scenes.json for visuals; voiceover per line gives the timings).
- Rules applied: hook text on frame 1, captions from second 0 with the current word highlighted, a scene change every 2-4 s, 29-36 s long, the last line loops back to the hook, every claim's source on screen and in the description, narrator never claims to be an expert, no ethnic comparisons (the wash study's population is not named; "didn't study curly or coily hair").
- Layout: keep captions and the source line above y=1500 of 1920 (the Shorts title and buttons cover the bottom). Glyphs missing from DM Sans: check marks and circled numbers render as boxes; use words.
- Uploads are staged as vidIQ drafts (`.claude/youtube/drafts.md`); publishing needs the owner's yes and their privacy and timing choice.
- 2026-11-25 (myths page, owner approved "add and merge"): added #sulfates (Partly true: SDS removed ~7x more protein than water under friction, PMID 15698750; no published study compares sulfate-free vs sulfate shampoos, Int J Trichology 2015 review PMID 25878443) and #silicones (Not supported: dimethicone protects against friction, rinse-out varies, PMID 25878443). Page now 36 claims; scoreboard 20/9/5/2. Live on main, IndexNow 200. The share image (og-hair-myths-vs-evidence.png) and pin A still say "34 claims"; refresh only under a new filename (Cloudflare caches images for a year).
- 2026-11-25 (Reddit assessment): Reddit links are nofollow (no ranking credit); the value is threads that rank in Google and get cited by AI answers, plus audience language. Link comments get removed ~2.5x as often as linkless ones (Ownfeed sample, Nov 2026). Each subreddit sets its own rules; r/HaircareScience wants specific scientific questions and keeps a "Common Hair Myths" wiki.
- 2026-11-25 (channels): Pinterest pin G "Hair Type Chart: 1A to 4C (Free Printable)" posted by the owner (utm_campaign=chart, board Natural Hair Science). Quora answer #5 (oils for 4C, links to best-oils-natural-hair.html) posted by the owner. Track: GA4 sessions with utm_campaign=chart and Quora referrals to the oils page, check Dec 2. Next pin: B (pins-nov23); next Quora: biotin draft.

## Site audit (Nov 26, 2026): 51/100
- Technical 85 (HTTPS, robots, sitemap of 63 URLs all exist, valid JSON-LD on 67 pages, 404 works; www still takes two redirect hops; 9 titles over 65 chars). Indexing 60 (48/63 indexed; myths page "Crawled - currently not indexed" Nov 25; 6 crawled-not-indexed, 8 discovered-not-indexed, wavy routine unknown to Google). Content 85 (sourced evidence tables site-wide). Authority 10 (Ahrefs DR 0). Search 35 (Oct 28-Nov 24: 7,824 impressions vs 3,314 the 28 days before, 24 clicks, CTR 0.31%, avg position 27.0; 8 pages average top 10). Conversion 35 (28 days: 89 quiz_complete, 12 affiliate_click, 1 sign_up, 1 guide_click). Traffic 30 (Pinterest is the top source; Direct is mostly unengaged).
- Internal links: hair-type-chart.html has only 1 internal link in (from how-to-find-your-hair-type); the myths page needs more links from the homepage and top posts. PageSpeed API refused unauthenticated calls Nov 26 (no lighthouseResult); CWV last confirmed green earlier.
- 2026-11-26: audit fixes live. 9 titles trimmed to 52-59 chars (small fix); homepage "vetted against real review data from thousands of buyers" replaced with "checked against its ingredient list, and against published research where it exists" (unsupported claim). Footer Explore lists on 51 pages + homepage selector/about text now link the myths page and hair type chart (owner merged). 12 older pages with other footer layouts unchanged. Check Dec 3: index status of hair-myths-vs-evidence.html (crawled-not-indexed Nov 25) and hair-type-chart.html. Translate button: declined on Claude's advice (English 1,093 of ~1,150 sessions in 90 days; widget hurts speed/CSP and isn't indexable).
