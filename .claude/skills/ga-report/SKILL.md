---
name: ga-report
description: Read Google Analytics (GA4) data for hairtypequiz.hair — sessions, page views, events, traffic sources, before/after comparisons. Use when the owner asks about traffic, signups, conversions, or how a site change performed.
---

# GA4 reporting for Strand

Read-only access through the GA4 Data API, property `533457768` (StrandHairQuiz).
Needs env var `GA_PROPERTY_ID`. Auth: `GA_SERVICE_ACCOUNT_JSON` if set, otherwise a
Google-type network secret for analyticsdata.googleapis.com attached by the proxy. Env vars load at session start.

## Commands
```bash
python3 .claude/skills/ga-report/ga_query.py test
python3 .claude/skills/ga-report/ga_query.py report --start 2026-08-20 --end 2026-09-24 \
  --dimensions pagePath --metrics screenPageViews,sessions --filter pagePath=/blog/
python3 .claude/skills/ga-report/ga_query.py report --start 30daysAgo --end yesterday \
  --dimensions eventName --metrics eventCount
```
`--filter` is `dimension=prefix` (BEGINS_WITH). Dimension/metric names are GA4 API names
(e.g. `pagePath`, `sessionSource`, `eventName`, `date`; `sessions`, `screenPageViews`,
`eventCount`, `bounceRate`, `activeUsers`).

## Notes
- Never print or echo `GA_SERVICE_ACCOUNT_JSON`.
- Key dates: design audit deployed ~2026-09-14; quick picks rollout 2026-10-20.
- Events of interest: `Lead` (Meta pixel, not GA), `quiz_complete`, `generate_lead`,
  views of `/wash-day-checklist.html` and `/checklist.html` (thank-you page = signup).
- Two `quiz_complete` events and two Google Ads conversions on 2026-10-20 came from a
  localhost test browser; discount them.
