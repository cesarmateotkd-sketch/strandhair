#!/usr/bin/env python3
"""Read-only GA4 Data API query for hairtypequiz.hair.

Needs env vars GA_PROPERTY_ID and GA_SERVICE_ACCOUNT_JSON (service account
with Viewer access on the property). Uses only the stdlib plus the openssl CLI
(the system python cryptography package is broken in this environment).

Usage:
  ga_query.py test
  ga_query.py report --start 2026-08-20 --end 2026-09-24 \
      --dimensions pagePath --metrics screenPageViews [--filter pagePath=/blog/] [--limit 50]
"""
import argparse, base64, json, os, subprocess, sys, tempfile, time, urllib.parse, urllib.request, urllib.error

SCOPE = "https://www.googleapis.com/auth/analytics.readonly"


def b64(data):
    return base64.urlsafe_b64encode(data).rstrip(b"=")


def load_creds():
    pid, raw = os.environ.get("GA_PROPERTY_ID"), os.environ.get("GA_SERVICE_ACCOUNT_JSON")
    missing = [n for n, v in (("GA_PROPERTY_ID", pid), ("GA_SERVICE_ACCOUNT_JSON", raw)) if not v]
    if missing:
        sys.exit(f"Missing env vars: {', '.join(missing)}. They load at session start; add them in the environment settings and start a new session.")
    raw = raw.strip()
    if raw[:1] == "'" and raw[-1:] == "'":
        raw = raw[1:-1]
    try:
        key = json.loads(raw)
    except json.JSONDecodeError as e:
        sys.exit(f"GA_SERVICE_ACCOUNT_JSON is not valid JSON ({e.msg} at char {e.pos}). Re-paste it as one line.")
    return pid.strip(), key


def access_token(key):
    now = int(time.time())
    header = b64(json.dumps({"alg": "RS256", "typ": "JWT"}).encode())
    claims = b64(json.dumps({"iss": key["client_email"], "scope": SCOPE,
                             "aud": key["token_uri"], "iat": now, "exp": now + 3600}).encode())
    sig = b64(rs256_sign(key["private_key"], header + b"." + claims))
    body = urllib.parse.urlencode({"grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
                                   "assertion": (header + b"." + claims + b"." + sig).decode()}).encode()
    return post(key["token_uri"], body, {"Content-Type": "application/x-www-form-urlencoded"})["access_token"]


def rs256_sign(pem, data):
    with tempfile.TemporaryDirectory() as d:
        kp = os.path.join(d, "k.pem")
        fd = os.open(kp, os.O_WRONLY | os.O_CREAT, 0o600)
        with os.fdopen(fd, "w") as f:
            f.write(pem)
        r = subprocess.run(["openssl", "dgst", "-sha256", "-sign", kp], input=data, capture_output=True)
    if r.returncode:
        sys.exit("Could not sign with the service account key: " + r.stderr.decode()[:300])
    return r.stdout


def post(url, body, headers):
    req = urllib.request.Request(url, data=body, headers=headers, method="POST")
    try:
        with urllib.request.urlopen(req, timeout=30) as r:
            return json.load(r)
    except urllib.error.HTTPError as e:
        sys.exit(f"HTTP {e.code} from {url.split('/')[2]}: {e.read().decode()[:600]}")


def run_report(pid, token, start, end, dims, mets, flt=None, limit=50):
    body = {"dateRanges": [{"startDate": start, "endDate": end}],
            "dimensions": [{"name": d} for d in dims],
            "metrics": [{"name": m} for m in mets], "limit": limit}
    if flt:
        field, value = flt.split("=", 1)
        body["dimensionFilter"] = {"filter": {"fieldName": field,
                                              "stringFilter": {"matchType": "BEGINS_WITH", "value": value}}}
    return post(f"https://analyticsdata.googleapis.com/v1beta/properties/{pid}:runReport",
                json.dumps(body).encode(),
                {"Authorization": f"Bearer {token}", "Content-Type": "application/json"})


def print_table(res, dims, mets):
    rows = res.get("rows", [])
    print("\t".join(dims + mets))
    for r in rows:
        print("\t".join([d["value"] for d in r.get("dimensionValues", [])] +
                        [m["value"] for m in r.get("metricValues", [])]))
    print(f"({len(rows)} rows)")


if __name__ == "__main__":
    ap = argparse.ArgumentParser()
    sub = ap.add_subparsers(dest="cmd", required=True)
    sub.add_parser("test")
    rp = sub.add_parser("report")
    rp.add_argument("--start", required=True); rp.add_argument("--end", required=True)
    rp.add_argument("--dimensions", default="date"); rp.add_argument("--metrics", default="sessions")
    rp.add_argument("--filter"); rp.add_argument("--limit", type=int, default=50)
    a = ap.parse_args()
    pid, key = load_creds()
    tok = access_token(key)
    if a.cmd == "test":
        res = run_report(pid, tok, "7daysAgo", "yesterday", ["date"], ["sessions", "screenPageViews"])
        print(f"Connected to GA4 property {pid} as {key['client_email']}")
        print_table(res, ["date"], ["sessions", "screenPageViews"])
    else:
        dims, mets = a.dimensions.split(","), a.metrics.split(",")
        print_table(run_report(pid, tok, a.start, a.end, dims, mets, a.filter, a.limit), dims, mets)
