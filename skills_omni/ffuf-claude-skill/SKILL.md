---
name: "ffuf-claude-skill"
description: "Use when you need to perform authorized web fuzzing with ffuf through a safe, reviewable workflow that starts with baseline calibration, uses explicit matcher/filter logic, bounds runtime, and preserves reproducible output for handoff."
version: "0.0.1"
category: "fullstack-web"
tags:
  - "ffuf-claude-skill"
  - "web"
  - "fuzzing"
  - "ffuf"
  - "content-discovery"
  - "forced-browsing"
  - "vhost"
  - "fullstack-web"
  - "omni-enhanced"
complexity: "intermediate"
risk: "safe"
tools:
  - "ffuf"
  - "curl"
  - "bash"
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "Upstream repository license applies; verify before redistribution"
date_added: "2026-04-14"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "ffuf-claude-skill"
family_name: "Ffuf Claude Skill"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/ffuf-claude-skill"
upstream_skill: "skills/ffuf-claude-skill"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "ffuf-claude-skill"
---

# Ffuf Claude Skill

## Overview

This skill supports **authorized web fuzzing with `ffuf`** using a workflow that is practical for operators and safe for review and handoff.

Use it when you need to:
- discover directories, files, parameters, or virtual hosts with `ffuf`
- establish a **baseline response** before choosing filters
- use **explicit matcher/filter logic** instead of guessing from one-off responses
- **bound scan runtime** with rate, timeout, recursion, and max-time controls
- preserve **machine-readable output** for later review, triage, or merge handoff

This enhanced version keeps the upstream identity and intent, but rewrites the operational guidance into a clearer English workflow.

## When to Use

Use this skill when all of the following are true:
- you have authorization to test the target
- the task is **content discovery**, **forced browsing**, **virtual host discovery**, or similarly scoped web fuzzing
- `ffuf` is the right tool for the job, rather than a browser-only review or a full scanner
- you need output that another operator can reproduce from the command line

Typical triggers:
- “Find hidden directories or admin panels on this app.”
- “Enumerate virtual hosts behind this IP or reverse proxy.”
- “Fuzz a parameter or endpoint with a controlled request template.”
- “Run a safe, bounded ffuf pass and give me the results in JSON.”

Do **not** use this skill when:
- the user lacks permission to test the target
- the task requires exploitation rather than discovery
- the target is too fragile for active fuzzing
- a different protocol or tool family is required

## Workflow

1. **Confirm scope and safety constraints**
   - Verify target hosts, paths, methods, allowed rate, and time window.
   - Prefer the smallest wordlist and narrowest target that can answer the question.
   - Decide whether the job is path discovery, file extension discovery, parameter fuzzing, or vhost enumeration.

2. **Collect a baseline response before fuzzing**
   - Fetch the target with `curl` or a browser once.
   - Note status code, content length, line count, word count, redirects, and any common error body.
   - If the application uses wildcard routing, soft-404 pages, or a WAF banner, record that before choosing ffuf filters.

3. **Choose a minimal first-pass ffuf command**
   - Start with one focused wordlist and one fuzz position.
   - Use explicit rate, timeout, and max-time controls.
   - Write output to a machine-readable format such as JSON.
   - Avoid recursion until the first pass shows that recursion is justified.

4. **Calibrate matchers and filters**
   - Compare results to the baseline.
   - Use status, size, words, or lines to keep true positives and suppress the baseline noise pattern.
   - If auto-calibration helps, verify that it behaves sensibly for the target rather than assuming it is correct.
   - For multi-domain or vhost work, treat calibration carefully because shared filters can hide valid responses.

5. **Run a bounded scan**
   - Add recursion only when you have evidence that discovered directories are worth descending into.
   - Set sensible limits for threads, delay, rate, timeout, and total run time.
   - Preserve the exact command you used so another operator can reproduce the run.

6. **Review and validate findings**
   - Re-check high-signal results with `curl` or a browser.
   - Confirm whether hits differ by status, body, title, redirect target, or content length.
   - Separate real discoveries from wildcard responses, login redirects, and generic error pages.

7. **Prepare handoff-ready output**
   - Save JSON output and summarize the command, filters, wordlist, target, and notable hits.
   - Call out any caveats: wildcard routing, redirect-heavy behavior, Host-header dependence, or possible false positives.

## Examples

### 1) Baseline directory discovery

```bash
curl -i https://target.example/
ffuf -u https://target.example/FUZZ -w wordlists/common.txt \
  -mc all -fs 4242 -rate 50 -timeout 10 -maxtime 300 \
  -of json -o out/dirs.json
```

Expected outcome:
- `curl` establishes the baseline response characteristics.
- `ffuf` keeps all status codes visible with `-mc all` while filtering the known baseline size with `-fs 4242`.
- `out/dirs.json` can be reviewed or handed off.

### 2) Extension-aware file discovery

```bash
ffuf -u https://target.example/FUZZ -w wordlists/files.txt \
  -e .php,.txt,.bak -mc 200,204,301,302,307,401,403 \
  -rate 40 -timeout 10 -maxtime 300 \
  -of json -o out/files.json
```

Expected outcome:
- finds file-like resources without scanning every possible path shape
- keeps redirects and access-controlled hits that may still matter operationally

### 3) Virtual host discovery

```bash
ffuf -u https://target.example/ -H 'Host: FUZZ.target.example' \
  -w wordlists/vhosts.txt -mc all -fs 1690 \
  -rate 25 -timeout 10 -maxtime 300 \
  -of json -o out/vhosts.json
```

Expected outcome:
- uses the `Host` header fuzz position instead of path fuzzing
- filters the known default vhost body size
- preserves results for manual follow-up on any differing hostnames

### 4) Parameter fuzzing with a request template

```bash
ffuf -request req.txt -request-proto https \
  -w wordlists/params.txt:PARAM -w wordlists/values.txt:VAL \
  -mc all -fc 400 -rate 20 -timeout 10 -maxtime 300 \
  -of json -o out/params.json
```

Expected outcome:
- reuses a captured request where headers, cookies, or method matter
- filters obvious bad-request noise while preserving unusual behavior for review

For a worked end-to-end exercise with command selection and result interpretation, open [examples/worked-example.md](examples/worked-example.md).

## Best Practices

Do:
- **Start with a baseline** before selecting matchers or filters.
- **Use one fuzz dimension at a time** unless a multi-wordlist job is clearly required.
- **Prefer machine-readable output** such as JSON for review and handoff.
- **Bound runtime** with `-rate`, `-timeout`, and `-maxtime`.
- **Re-validate promising hits** with `curl` or a browser before reporting them as findings.
- **Record the exact command** and any assumptions about wildcard responses or redirects.
- **Use the smallest effective wordlist** first, then expand only if justified.

Do not:
- do unauthenticated or unauthorized scanning
- run recursion by default on a broad target
- assume `200` means success or `403` means uninteresting
- rely on a single signal when the app clearly uses soft-404s or generic redirects
- hand off screenshots alone when JSON output and the exact command are available
- let auto-calibration hide target-specific behavior without spot-checking the results

## Troubleshooting

**Symptoms:** Almost every payload returns a match.

**Solution:** Establish a real baseline first. Compare size, word count, line count, redirect behavior, and body shape. Then switch from broad matching to explicit filters such as response size or word count. If the application uses wildcard routing or a custom 404 page, status code alone is usually insufficient.

**Symptoms:** Valid findings disappear after enabling auto-calibration or shared filters.

**Solution:** Re-test with narrower scope and inspect whether the baseline differs by host, path, or redirect target. In vhost or multi-domain workflows, shared calibration can suppress legitimate variants. Prefer per-target review over blind trust in automatic suppression.

**Symptoms:** Recursion causes the scan to grow too large or too noisy.

**Solution:** Remove recursion and rerun the first pass. Only recurse into directories that clearly produce distinct responses and operational value. Also reduce rate, set `-maxtime`, and use a smaller wordlist before expanding again.

**Symptoms:** The target starts timing out or behaving inconsistently.

**Solution:** Lower concurrency or request rate, increase timeout carefully, and shorten the scan scope. Confirm with `curl` whether the application is unstable, rate-limited, or fronted by a control layer such as a WAF.

**Symptoms:** Vhost results look inconsistent or all resemble the default site.

**Solution:** Verify DNS resolution and Host-header behavior manually with `curl`. Check whether TLS, SNI, reverse proxy configuration, or a default vhost page is masking differences. Filter against the true default body only after that baseline is confirmed.

## Additional Resources

- [references/domain-notes.md](references/domain-notes.md) — open this for compact operator guidance on calibration, matcher/filter selection, recursion decisions, output strategy, and known ffuf caveats.
- [examples/worked-example.md](examples/worked-example.md) — open this for a concrete start-to-finish directory discovery exercise with baseline analysis and result triage.

## Related Skills

No confirmed local related skills were provided in the source context.
