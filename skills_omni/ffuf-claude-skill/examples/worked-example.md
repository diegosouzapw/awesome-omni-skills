# Worked Example: Safe ffuf Directory Discovery

This example shows a small, reviewable workflow for discovering directories on an authorized target while avoiding common false positives.

## Scenario

Goal:
- discover likely administrative or internal paths on `https://target.example/`
- keep the run bounded
- produce output that another operator can reproduce

Assumptions:
- authorization is already confirmed
- `wordlists/common.txt` is an approved small wordlist
- the target may use redirects and custom 404 pages

## Step 1: Capture a baseline

```bash
curl -i https://target.example/
curl -i https://target.example/this-should-not-exist-9f4c1/
```

Observed baseline:
- `/` returns `200`
- invalid path returns `302` to `/not-found`
- invalid path body size is effectively `1690` bytes after redirect resolution

Interpretation:
- a redirect alone is not enough to call something a hit
- size and redirect target must be considered together

## Step 2: Run a conservative first pass

```bash
ffuf -u https://target.example/FUZZ -w wordlists/common.txt \
  -mc all -fs 1690 -rate 40 -timeout 10 -maxtime 180 \
  -of json -o out/dirs-pass1.json
```

Why this command:
- `-mc all` keeps visibility during calibration
- `-fs 1690` suppresses the known baseline response size
- `-rate 40` and `-maxtime 180` keep the run bounded
- JSON output supports later review

## Step 3: Review likely results

Example trimmed output interpretation:

```text
/admin      [Status: 403, Size: 612, Words: 74]
/api        [Status: 301, Size: 0, Redirect: /api/]
/backup     [Status: 200, Size: 4981, Words: 621]
/assets     [Status: 302, Size: 1690, Redirect: /not-found]
```

Expected triage:
- `/admin` -> **keep**; access-controlled path can still be important
- `/api` -> **keep**; redirect to a concrete subpath suggests a real endpoint
- `/backup` -> **keep and verify**; distinct `200` body may be a true positive
- `/assets` -> **drop**; same baseline size and redirect pattern as the invalid path

## Step 4: Verify promising hits

```bash
curl -i https://target.example/admin
curl -i https://target.example/api/
curl -i https://target.example/backup
```

Expected follow-up:
- confirm whether `/admin` is a real restricted area
- confirm whether `/api/` exposes docs, version info, or additional paths
- inspect `/backup` carefully to determine whether it is a live page, index, or false positive

## Step 5: Decide whether recursion is justified

Only recurse if the first pass supports it.

Example:
- recurse into `/api/` if it clearly exists and the scope allows deeper discovery
- do **not** recurse into paths that only reproduce the wildcard response pattern

Possible next command:

```bash
ffuf -u https://target.example/api/FUZZ -w wordlists/common.txt \
  -mc all -fs 1690 -rate 30 -timeout 10 -maxtime 180 \
  -of json -o out/api-pass2.json
```

## Handoff Notes Template

Include these points in your summary:
- target: `https://target.example/`
- purpose: bounded directory discovery
- baseline miss behavior: `302` to `/not-found`, size `1690`
- first-pass command: include the exact command used
- likely true positives: `/admin`, `/api/`, `/backup`
- likely noise suppressed: paths matching the baseline redirect-and-size pattern

## Before / After Filtering Snapshot

Before filtering:
- many paths appear as `302`
- output is noisy and hard to trust

After filtering the baseline size:
- only responses that differ materially from the miss pattern remain
- analyst time shifts from noise review to verification of a small result set
