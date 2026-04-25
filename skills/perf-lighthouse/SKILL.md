---
name: perf-lighthouse
description: "Lighthouse Audits workflow skill. Use this skill when the user needs Run Lighthouse audits locally via CLI or Node API, parse and interpret reports, and set performance budgets. Use when measuring site performance, understanding Lighthouse scores, setting up budgets, or integrating audits into CI. Triggers on: lighthouse, run lighthouse, lighthouse score, performance audit, performance budget. Do NOT use for fixing specific performance issues (use perf-web-optimization or core-web-vitals) or Astro-specific optimization (use perf-astro) and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["perf-lighthouse", "run", "lighthouse", "audits", "locally", "via", "cli", "node"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "tech-leads-club"
date_added: "2026-04-14"
date_updated: "2026-04-24"
---

# Lighthouse Audits

## Overview

This public intake copy packages `packages/skills-catalog/skills/(performance)/perf-lighthouse` from `https://github.com/tech-leads-club/agent-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Lighthouse Audits

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: CLI Quick Start, Common Flags, Performance Budgets, Node API, GitHub Actions, Lighthouse CI (LHCI).

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when the request clearly matches the imported source intent: Run Lighthouse audits locally via CLI or Node API, parse and interpret reports, and set performance budgets. Use when measuring site performance, understanding Lighthouse scores, setting up budgets, or integrating....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: CLI Quick Start

```bash
# Install
npm install -g lighthouse

# Basic audit
lighthouse https://example.com

# Mobile performance only (faster)
lighthouse https://example.com --preset=perf --form-factor=mobile

# Output JSON for parsing
lighthouse https://example.com --output=json --output-path=./report.json

# Output HTML report
lighthouse https://example.com --output=html --output-path=./report.html
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @perf-lighthouse to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @perf-lighthouse against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @perf-lighthouse for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @perf-lighthouse using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `packages/skills-catalog/skills/(performance)/perf-lighthouse`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

| Issue               | Solution                                              |
| ------------------- | ----------------------------------------------------- |
| Inconsistent scores | Run multiple times (`--number-of-runs=3`), use median |
| Chrome not found    | Set `CHROME_PATH` env var                             |
| Timeouts            | Increase with `--max-wait-for-load=60000`             |
| Auth required       | Use `--extra-headers` or puppeteer script             |

## Related Skills

- `@accessibility` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-cold-outreach` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-pricing` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ai-sdr` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Common Flags

```bash
--preset=perf           # Performance only (skip accessibility, SEO, etc.)
--form-factor=mobile    # Mobile device emulation (default)
--form-factor=desktop   # Desktop
--throttling-method=devtools  # More accurate throttling
--only-categories=performance,accessibility  # Specific categories
--chrome-flags="--headless"   # Headless Chrome
```

#### Imported: Performance Budgets

Create `budget.json`:

```json
[
  {
    "resourceSizes": [
      { "resourceType": "script", "budget": 200 },
      { "resourceType": "image", "budget": 300 },
      { "resourceType": "stylesheet", "budget": 50 },
      { "resourceType": "total", "budget": 500 }
    ],
    "resourceCounts": [{ "resourceType": "third-party", "budget": 5 }],
    "timings": [
      { "metric": "interactive", "budget": 3000 },
      { "metric": "first-contentful-paint", "budget": 1500 },
      { "metric": "largest-contentful-paint", "budget": 2500 }
    ]
  }
]
```

Run with budget:

```bash
lighthouse https://example.com --budget-path=./budget.json
```

#### Imported: Node API

```javascript
import lighthouse from 'lighthouse'
import * as chromeLauncher from 'chrome-launcher'

async function runAudit(url) {
  const chrome = await chromeLauncher.launch({ chromeFlags: ['--headless'] })

  const result = await lighthouse(url, {
    port: chrome.port,
    onlyCategories: ['performance'],
    formFactor: 'mobile',
    throttling: {
      cpuSlowdownMultiplier: 4,
    },
  })

  await chrome.kill()

  const { performance } = result.lhr.categories
  const { 'largest-contentful-paint': lcp } = result.lhr.audits

  return {
    score: Math.round(performance.score * 100),
    lcp: lcp.numericValue,
  }
}
```

#### Imported: GitHub Actions

```yaml
# .github/workflows/lighthouse.yml
name: Lighthouse

on:
  pull_request:
  push:
    branches: [main]

jobs:
  lighthouse:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - name: Build site
        run: npm ci && npm run build

      - name: Run Lighthouse
        uses: treosh/lighthouse-ci-action@v11
        with:
          urls: |
            http://localhost:3000
            http://localhost:3000/about
          budgetPath: ./budget.json
          uploadArtifacts: true
          temporaryPublicStorage: true
        env:
          LHCI_GITHUB_APP_TOKEN: ${{ secrets.LHCI_GITHUB_APP_TOKEN }}
```

#### Imported: Lighthouse CI (LHCI)

For full CI integration with historical tracking:

```bash
# Install
npm install -g @lhci/cli

# Initialize config
lhci wizard
```

Creates `lighthouserc.js`:

```javascript
module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/', 'http://localhost:3000/about'],
      startServerCommand: 'npm run start',
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'categories:accessibility': ['warn', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 1500 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
    upload: {
      target: 'temporary-public-storage', // or 'lhci' for self-hosted
    },
  },
}
```

Run:

```bash
lhci autorun
```

#### Imported: Parse JSON Report

```javascript
import fs from 'fs'

const report = JSON.parse(fs.readFileSync('./report.json'))

// Overall scores (0-1, multiply by 100 for percentage)
const scores = {
  performance: report.categories.performance.score,
  accessibility: report.categories.accessibility.score,
  seo: report.categories.seo.score,
}

// Core Web Vitals
const vitals = {
  lcp: report.audits['largest-contentful-paint'].numericValue,
  cls: report.audits['cumulative-layout-shift'].numericValue,
  fcp: report.audits['first-contentful-paint'].numericValue,
  tbt: report.audits['total-blocking-time'].numericValue,
}

// Failed audits
const failed = Object.values(report.audits)
  .filter((a) => a.score !== null && a.score < 0.9)
  .map((a) => ({ id: a.id, score: a.score, title: a.title }))
```

#### Imported: Compare Builds

```bash
# Save baseline
lighthouse https://prod.example.com --output=json --output-path=baseline.json

# Run on PR
lighthouse https://preview.example.com --output=json --output-path=pr.json

# Compare (custom script)
node compare-reports.js baseline.json pr.json
```

Simple comparison script:

```javascript
const baseline = JSON.parse(fs.readFileSync(process.argv[2]))
const pr = JSON.parse(fs.readFileSync(process.argv[3]))

const metrics = ['largest-contentful-paint', 'cumulative-layout-shift', 'total-blocking-time']

metrics.forEach((metric) => {
  const base = baseline.audits[metric].numericValue
  const current = pr.audits[metric].numericValue
  const diff = (((current - base) / base) * 100).toFixed(1)
  const emoji = current <= base ? '✅' : '❌'
  console.log(`${emoji} ${metric}: ${diff}% (${base.toFixed(0)} → ${current.toFixed(0)})`)
})
```
