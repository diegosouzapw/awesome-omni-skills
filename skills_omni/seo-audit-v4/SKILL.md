---
name: "seo-audit-v4"
slug: "seo-audit-v4"
description: "SEO Audit workflow skill. Use this skill when the user needs to diagnose and audit SEO issues affecting crawlability, indexation, rankings, and organic performance while preserving upstream workflow intent, copied support files, and provenance."
version: "0.0.1"
category: "business"
tags:
  - "seo-audit-v4"
  - "seo-audit"
  - "technical-seo"
  - "indexation"
  - "crawlability"
  - "search-console"
  - "javascript-seo"
  - "canonicalization"
  - "core-web-vitals"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "unknown"
date_added: "2026-04-27"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "seo-audit-v4"
family_name: "SEO Audit"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/seo-audit-v4"
upstream_skill: "skills/seo-audit-v4"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "seo-audit-v4"
---

# SEO Audit

## Overview

This skill preserves the intent of the upstream SEO audit workflow while making it more reliable to execute as a disciplined diagnostic review.

Use it when the goal is to **identify, explain, and prioritize SEO issues** affecting crawlability, indexation, rendering, canonicalization, content quality, and organic performance. The output should be **evidence-led, scoped, and decision-oriented**. The operator should diagnose and rank issues by impact and confidence, **not promise ranking gains** and **not implement fixes unless explicitly requested**.

This skill is strongest when the audit is **Search Console-first**, tied to a defined business scope, and clear about the boundary between:

- **Crawling problems**
- **Indexing problems**
- **Rendering problems**
- **Relevance/ranking problems**
- **Measurement/reporting gaps**

If the request is vague, turn it into an explicit audit brief before producing findings.

## When to Use

Use this skill when:

- A site has lost organic visibility and the user needs a structured diagnosis.
- Important URLs are not indexed, have dropped from indexation, or are indexed under the wrong canonical.
- JavaScript-rendered content may not be discoverable or rendered consistently.
- Search Console shows spikes in exclusions, crawl anomalies, mobile usability concerns, or performance decline.
- The user wants a prioritized SEO findings report rather than code changes.
- You need to review a migration, platform change, template rollout, robots/canonical update, or major content change for SEO risk.

Do **not** use this skill as the primary workflow when:

- The request is to directly implement code, CMS, or server fixes.
- The user wants guaranteed ranking outcomes or traffic forecasts without evidence.
- No target property, URL set, or business scope is available and the user refuses to define one.
- The task is purely editorial copywriting, link outreach, or keyword ideation with no audit component.

## Scope Gate

Before auditing, confirm or request these inputs if they are missing:

1. **Property scope**: domain, subdomain, folder, country/language, or site section.
2. **Business priority**: revenue pages, lead-gen pages, editorial pages, local pages, or support content.
3. **Primary symptoms**: indexing loss, ranking drop, traffic decline, rendering issue, CWV concern, or rich result loss.
4. **Change window**: migrations, launches, robots changes, template changes, JS framework changes, redirects, server incidents.
5. **Available evidence**: Search Console access, analytics exports, crawl exports, sample URLs, log evidence, screenshots.
6. **Success condition**: triage memo, stakeholder-ready audit, remediation backlog, or executive summary.

If these are absent, ask focused questions first instead of guessing.

## Workflow

1. **Define the audit question and scope**
   - State what is being audited: entire site, section, template family, or representative URLs.
   - Separate reported symptoms from assumptions.
   - Record constraints such as missing access, incomplete exports, or limited URL samples.

2. **Establish baseline evidence**
   - Prefer Search Console reports and URL Inspection outputs when available.
   - Capture the affected URL patterns, affected countries/devices, and timing of the problem.
   - Note whether the issue is isolated, template-level, or sitewide.

3. **Classify the problem correctly**
   - Decide whether the primary issue is crawl, indexing, canonicalization, rendering, mobile parity, page quality, structured data eligibility, or performance.
   - Avoid collapsing all SEO symptoms into “ranking issue.”
   - Use the evidence matrix in `references/review-criteria.md` to match symptoms to the right diagnostic path.

4. **Inspect representative URLs**
   - Review at least one healthy URL and one affected URL when possible.
   - Compare declared canonical, selected canonical, robots rules, response status, render output, internal links, and structured data presence.
   - Check whether page content available to users is also available to Googlebot after rendering.

5. **Evaluate site-level patterns**
   - Look for recurring exclusion states, soft 404 behavior, duplicate clusters, redirect chains, parameter noise, mobile/desktop parity gaps, or server instability.
   - Distinguish page-specific defects from systemic patterns.
   - Escalate only the patterns that materially affect important pages.

6. **Prioritize findings by impact, confidence, and reversibility**
   - Mark each finding with severity, confidence, affected scope, and evidence source.
   - Prefer findings that explain observed symptoms over speculative “SEO opportunities.”
   - Separate immediate blockers from longer-horizon optimization ideas.

7. **Write the audit output**
   - For each finding, include: symptom, evidence, likely cause, affected scope, business impact, confidence, and recommended next action.
   - Make recommendations narrow and testable.
   - If implementation was not requested, stop at diagnosis and prioritization.

8. **State open questions and follow-up evidence needed**
   - Identify what could change the conclusion: logs, additional URL inspections, analytics segmentation, or implementation confirmation.
   - Explicitly note when confidence is reduced because evidence is missing.

## Output Structure

Use this structure in your final audit response:

- **Audit scope**
- **Observed symptoms**
- **Key findings**
- **Prioritized remediation queue**
- **Confidence and evidence limits**
- **Open questions / next checks**

For each finding, prefer this compact format:

- **Finding**
- **Why it matters**
- **Evidence**
- **Affected scope**
- **Priority**: Critical / High / Medium / Low
- **Confidence**: High / Medium / Low
- **Recommended next action**

## Examples

### Example 1: Indexing loss after template change

**Input**

```text
User reports that ~2,000 product URLs dropped from organic traffic after a frontend release.
Search Console shows many URLs as "Crawled - currently not indexed" and some as alternate canonical.
```

**Expected audit direction**

```text
- Confirm the affected URL pattern and release window.
- Compare a healthy product URL and an affected product URL.
- Check response status, canonical tags, rendered content, and internal linking.
- Determine whether the issue is quality duplication, canonical conflict, or render incompleteness.
- Produce a ranked findings list instead of claiming Google will reindex after fixes.
```

### Example 2: JavaScript rendering suspicion

**Input**

```text
Category pages look complete in the browser, but Google is not indexing pagination-linked product cards.
```

**Expected audit direction**

```text
- Verify what content and links exist in the initial HTML versus rendered DOM.
- Check whether critical product links depend on delayed client-side execution.
- Review whether important text and navigation are absent or degraded before rendering completes.
- Report whether the problem is likely render discoverability or a separate indexation issue.
```

### Example 3: Canonical mismatch

**Input**

```text
The page declares a self-referencing canonical, but Search Console-selected canonical points to another URL.
```

**Expected audit direction**

```text
- Compare duplicate candidates for content similarity, internal links, redirects, hreflang alignment, and canonical consistency.
- Determine whether the declared canonical is unsupported by stronger consolidation signals.
- Recommend reducing conflicting signals rather than repeating the tag alone.
```

A fuller worked example is available in `examples/review-example.md`.

## Best Practices

Do:

- Start with **scope, symptom, and timing** before proposing causes.
- Use **Search Console and URL-level evidence** before generalized SEO advice.
- Separate **indexing** from **ranking** unless evidence supports both.
- Compare an **affected URL** against a **healthy control URL** whenever possible.
- Prioritize issues that affect **important templates or business-critical pages**.
- Treat Core Web Vitals using current metrics, including **INP** rather than outdated FID framing.
- Note that rich result opportunities and content-system guidance change over time; assess eligibility against current Google behavior, not old checklists.
- Write recommendations that are **testable and reversible**.

Do not:

- Promise ranking recovery, reindexation timing, or traffic outcomes.
- Call every exclusion state an error; some exclusions are expected.
- Assume a robots.txt rule, noindex, or canonical is the only signal involved.
- Diagnose JavaScript SEO solely from “it works in my browser.”
- Recommend deleting, redirecting, or canonicalizing at scale without identifying affected patterns and tradeoffs.
- Overweight third-party scorecards when first-party evidence shows a different root cause.
- Confuse structured data presence with guaranteed rich results.

## Troubleshooting

**Symptoms:** Many important URLs are reported as `Crawled - currently not indexed`.

**Solution:** Check whether affected pages are thin, duplicative, weakly linked, delayed in rendering critical content, or part of a low-value URL pattern. Compare healthy and affected examples. Do not assume crawl access alone should lead to indexation.

**Symptoms:** Search Console-selected canonical does not match the declared canonical.

**Solution:** Review duplicate similarity, redirects, internal linking, sitemap inclusion, hreflang consistency, and parameterized variants. The selected canonical often follows the stronger aggregate signal set rather than the tag alone.

**Symptoms:** Important content is visible to users but not reliably indexed.

**Solution:** Test whether essential text, links, and metadata are available in the initial HTML or only after client-side rendering. Check for delayed hydration, blocked resources, or rendering-dependent navigation.

**Symptoms:** Large numbers of URLs are excluded as soft 404.

**Solution:** Inspect whether pages return `200` with near-empty, placeholder, expired, or low-value content. Confirm whether the content matches user intent for the URL type and whether thin templates are being generated at scale.

**Symptoms:** Mobile performance or indexing differs from desktop expectations.

**Solution:** Audit mobile-first parity: content, structured data, internal links, metadata, and interactive blockers. Do not assume desktop completeness means mobile indexing parity.

**Symptoms:** Traffic dropped after a migration or redirect rollout.

**Solution:** Review redirect chains, final status codes, canonical alignment, sitemap freshness, internal links, and major template regressions. Separate migration mechanics from broader ranking shifts.

**Symptoms:** Crawl rate or coverage worsened during server instability.

**Solution:** Check whether 5xx errors, timeouts, or overload patterns affect important sections. Prioritize server reliability before making speculative on-page recommendations.

## Additional Resources

- `references/review-criteria.md` — Open this when you need a compact symptom-to-evidence matrix for crawl, indexing, canonical, rendering, mobile parity, structured data, server, and CWV checks.
- `examples/review-example.md` — Open this when you need a model of a concise, evidence-led audit finding with prioritization and next actions.

## Related Skills

No confirmed related local skills were provided in the source context.
