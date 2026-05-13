# Worked Example: Baseline to Refined ffuf Results

This example shows how to reduce false positives instead of trusting the first ffuf run.

## Scenario

You are authorized to test `https://app.example` for content discovery.

Initial manual checks show:
- `GET /this-should-not-exist-12345` returns `200 OK`
- Response body size is about `5120` bytes
- The page is a generic application error template

That means a naive status-code-only run will be noisy.

## Step 1: Capture the baseline

Manual check:

```bash
curl -i https://app.example/this-should-not-exist-12345
```

Observed baseline:
- Status: `200`
- Size: `5120`
- Words: roughly stable across random nonexistent paths

## Step 2: Run a first constrained ffuf pass

```bash
ffuf -u https://app.example/FUZZ -w wordlists/common.txt -mc all -json -o out/first-pass.json
```

Possible result shape:

```json
[
  {"input":"admin","status":200,"length":5120},
  {"input":"api","status":200,"length":2481},
  {"input":"assets","status":301,"length":169},
  {"input":"backup","status":200,"length":5120}
]
```

Interpretation:
- `admin` and `backup` currently look the same as the known-bad baseline.
- `api` differs in body length and is worth checking.
- `assets` redirects and is worth checking.

## Step 3: Refine using filters

Because the baseline size is `5120`, filter it out:

```bash
ffuf -u https://app.example/FUZZ -w wordlists/common.txt -mc all -fs 5120 -json -o out/refined.json
```

Expected improvement:

```json
[
  {"input":"api","status":200,"length":2481},
  {"input":"assets","status":301,"length":169}
]
```

Now the result set is smaller and more actionable.

## Step 4: Add autocalibration if the template varies slightly

If the application returns soft matches that vary enough to defeat a single size filter, try autocalibration:

```bash
ffuf -u https://app.example/FUZZ -w wordlists/common.txt -mc all -ac -json -o out/autocal.json
```

Expected behavior:
- ffuf attempts to learn the baseline dynamically.
- False positives should drop if the target produces repeatable but misleading responses.

## Step 5: Escalate only on validated leads

After reviewing refined results, you might recurse only into real directories:

```bash
ffuf -u https://app.example/assets/FUZZ -w wordlists/common.txt -fc 404 -json -o out/assets-pass.json
```

Do not recurse broadly until the first pass has produced a small set of plausible paths.

## Optional variation: virtual host fuzzing

If the authorized scope includes virtual host discovery and the default host returns a stable template of size `4242`:

```bash
ffuf -u https://app.example/ -H 'Host: FUZZ.app.example' -w wordlists/subdomains.txt -fs 4242 -json -o out/vhosts.json
```

Expected interpretation:
- Responses that differ materially from the `4242`-byte baseline are candidates for follow-up.

## What success looks like

A good ffuf run does **not** mean “many responses.”
A good run means:
- the baseline is understood,
- obvious noise is filtered,
- the command is reproducible,
- and the remaining hits are plausible enough for manual review.
