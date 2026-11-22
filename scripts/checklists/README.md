# Wash day checklists

`cl.py` holds the step text for both checklists and writes `c4.html`, `wc.html` and `steps.json` to the folder given as its argument. `pdf3.js` (Playwright) renders the two HTML files to one-page PDFs in `/downloads/`. `wdc.py` rebuilds the main content of `/wash-day-checklist.html` from `steps.json`.

Edit the steps in `cl.py`, then run all three so the PDFs and the web page stay in sync. The paths at the top of each script point at the session scratchpad; change them to your output folder. Block all non-localhost requests when rendering.
