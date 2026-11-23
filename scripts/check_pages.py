#!/usr/bin/env python3
"""Pre-push check for Strand page edits (owner rule, Nov 23, 2026).

Small fixes go live without a preview only if this passes. For every changed
.html file (vs a git ref, default origin/main) it checks:
  - every JSON-LD block parses
  - exactly one </head>, one <body, and (for blog posts) one <article>…</article>
  - the file didn't shrink by more than 300 bytes (truncation guard)
  - stylesheet count didn't drop
  - no visible text was lost outside <article> (head/nav/footer unchanged in length, ±200 bytes)
Usage: python3 scripts/check_pages.py [ref] [--allow-shrink FILE ...]
  --allow-shrink: only after reviewing `git diff --word-diff` and confirming every removed
  passage is an intended claim removal inside the article.
Exit code 1 on any failure.
"""
import json, re, subprocess, sys

args = sys.argv[1:]
allow = set()
if "--allow-shrink" in args:
    i = args.index("--allow-shrink"); allow = set(args[i+1:]); args = args[:i]
ref = args[0] if args else "origin/main"
files = subprocess.run(["git", "diff", "--name-only", ref, "--", "*.html"],
                       capture_output=True, text=True).stdout.split()
fail = False

def old_version(path):
    r = subprocess.run(["git", "show", f"{ref}:{path}"], capture_output=True, text=True)
    return r.stdout if r.returncode == 0 else None

def outside_article(s):
    a, b = s.find("<article"), s.find("</article>")
    return s if a < 0 or b < 0 else s[:a] + s[b:]

for f in files:
    try:
        new = open(f, encoding="utf-8").read()
    except FileNotFoundError:
        continue
    old = old_version(f)
    problems = []
    for i, blk in enumerate(re.findall(r'<script type="application/ld\+json">(.*?)</script>', new, re.S)):
        try:
            json.loads(blk)
        except Exception as e:
            problems.append(f"JSON-LD block {i} invalid: {e}")
    if new.count("</head>") != 1 or new.count("<body") != 1:
        problems.append("head/body tags missing or duplicated")
    if f.startswith("blog/") and f != "blog/index.html":
        if new.count("<article") != 1 or new.count("</article>") != 1:
            problems.append("article tags missing or duplicated")
    if old is not None:
        if len(new) < len(old) - 300 and f not in allow:
            problems.append(f"file shrank {len(old)} -> {len(new)} bytes")
        if new.count("<style") < old.count("<style"):
            problems.append("a <style> block was removed")
        oo, no = outside_article(old), outside_article(new)
        # JSON-LD and added <style> blocks may legitimately change outside the article
        strip = lambda s: re.sub(r'<script type="application/ld\+json">.*?</script>|<style>\n#research.*?</style>\n|<style>\n@media\(max-width:640px\)\{table\.m-stack.*?</style>\n', "", s, flags=re.S)
        if abs(len(strip(no)) - len(strip(oo))) > 200:
            problems.append(f"content outside <article> changed by {len(strip(no)) - len(strip(oo))} bytes")
    status = "OK " if not problems else "FAIL"
    print(f"{status} {f} ({len(old) if old else 0} -> {len(new)} bytes)")
    for p in problems:
        print("     -", p)
    fail |= bool(problems)

if not files:
    print("no changed .html files vs", ref)
sys.exit(1 if fail else 0)
