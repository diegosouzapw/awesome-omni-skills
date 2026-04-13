---
name: seo-forensic-incident-response
description: "SEO Forensic Incident Response workflow skill. Use this skill when the user needs Investigate sudden drops in organic traffic or rankings and run a structured forensic SEO incident response with triage, root-cause analysis and recovery plan and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["seo-forensic-incident-response", "investigate", "sudden", "drops", "organic", "traffic", "rankings", "and"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# SEO Forensic Incident Response

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-forensic-incident-response` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SEO Forensic Incident Response You are an expert in forensic SEO incident response. Your goal is to investigate sudden drops in organic traffic or rankings, identify the most likely causes, and provide a prioritized remediation plan. This skill is not a generic SEO audit. It is designed for incident scenarios: traffic crashes, suspected penalties, core update impacts, or major technical failures.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Initial Incident Triage, Incident Classification Framework, Forensic Hypothesis Building, Output Format, Task-Specific Questions, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to understand and resolve a sudden, significant drop in organic traffic or rankings.
- There are signs of a possible penalty, core update impact, major technical regression or other SEO incident.
- You need a routine SEO health check or prioritization of opportunities (use seo-audit).
- You are focused on long-term local visibility for legal/professional services (use local-legal-seo-audit).
- Use when the request clearly matches the imported source intent: Investigate sudden drops in organic traffic or rankings and run a structured forensic SEO incident response with triage, root-cause analysis and recovery plan.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Plot clicks, impressions, CTR, and average position over the last 6–12 months.
2. Identify:
3. Exact start of the drop
4. Whether the drop is step-like (sudden) or gradual
5. Whether it affects all countries/devices or specific segments
6. Step-like drop → technical issue, manual action, deployment.
7. Gradual slide → quality issues, competitor improvements, algorithmic re-evaluation.

### Imported Workflow Notes

#### Imported: Data-Driven Investigation Steps

When you have GSC and analytics access, structure the analysis like a forensic investigation:

### 1. Timeline Reconstruction

- Plot clicks, impressions, CTR, and average position over the last 6–12 months.
- Identify:
  - Exact start of the drop
  - Whether the drop is step-like (sudden) or gradual
  - Whether it affects all countries/devices or specific segments

Use this to narrow likely causes:
- **Step-like drop** → technical issue, manual action, deployment.
- **Gradual slide** → quality issues, competitor improvements, algorithmic re-evaluation.

### 2. Segment Analysis

Segment the impact by:

- **Device**: desktop vs. mobile
- **Country / region**
- **Query type**: branded vs. non-branded
- **Page type**: home, category, product, blog, docs, etc.

Look for patterns:
- Only mobile affected → potential mobile UX, CWV, or mobile-only indexing issue.
- Specific country affected → geo-targeting, hreflang, local factors.
- Non-branded hit harder than branded → often algorithm/quality-related.

### 3. Page-Level Impact

Identify:

- Top pages with largest drop in clicks and impressions.
- New 404s or heavily redirected URLs among previously high-traffic pages.
- Any pages that disappeared from the index or lost most of their ranking queries.

Check for:

- URL changes without proper redirects
- Canonical changes
- Noindex additions
- Template or content changes on those pages

### 4. Technical Integrity Checks

Focus on incident-related technical regressions:

- **Robots.txt**
  - Any recent changes?
  - Are key sections blocked unintentionally?

- **Indexation & Noindex**
  - Sudden spike in “Excluded” or “Noindexed” pages in GSC
  - Important pages with meta noindex or X-Robots-Tag set incorrectly

- **Redirects**
  - New redirect chains or loops
  - HTTP → HTTPS consistency
  - www vs. non-www consistency
  - Migrations without full redirect mapping

- **Server & Availability**
  - Increased 5xx/4xx in logs or GSC
  - Downtime or throttling by security tools
  - Rate-limiting or blocking of Googlebot

- **Core Web Vitals (CWV)**
  - Sudden degradation in CWV affecting large portions of the site
  - Especially on mobile

### 5. Content & Quality Reassessment

When technical is clean, analyze content factors:

- Which topics or content types were hit hardest?
- Is content:
  - Thin, generic, or outdated?
  - Over-optimized or keyword-stuffed?
  - Lacking original data, examples, or experience?

Evaluate against E-E-A-T:

- **Experience**: Does the content show first-hand experience?
- **Expertise**: Is the author qualified and clearly identified?
- **Authoritativeness**: Does the site have references, citations, recognition?
- **Trustworthiness**: Clear about who is behind the site, policies, contact info.

---

#### Imported: Initial Incident Triage

Before deep analysis, clarify the incident context:

1. **Incident Description**
   - When did you first notice the drop?
   - Was it sudden (1–3 days) or gradual (weeks)?
   - Which metrics are affected? (sessions, clicks, impressions, conversions)
   - Is the impact site-wide, specific sections, or specific pages?

2. **Data Access**
   - Do you have access to:
     - Google Search Console (GSC)?
     - Web analytics (GA4, Matomo, etc.)?
     - Server logs or CDN logs?
     - Deployment/change logs (Git, CI/CD, CMS release notes)?

3. **Recent Changes Checklist**
   Ask explicitly about the 30–60 days before the drop:
   - Site redesign or theme change
   - URL structure changes or migrations
   - CMS/plugin updates
   - Changes to hosting, CDN, or security tools (WAF, firewalls)
   - Changes to robots.txt, sitemap, canonical tags, or redirects
   - Bulk content edits or content pruning

4. **Business Context**
   - Is this a seasonal niche?
   - Any external events affecting demand?
   - Any previous manual actions or penalties?

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-forensic-incident-response to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/seo-forensic-incident-response/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/seo-forensic-incident-response/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @seo-forensic-incident-response using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-forensic-incident-response`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

### Imported Reference Notes

#### Imported: Incident Classification Framework

Classify the incident into one or more buckets to guide the investigation:

1. **Algorithm / Core Update Impact**
   - Drop coincides with known Google core update dates
   - Impact skewed toward certain types of queries or content
   - No major technical changes around the same time

2. **Technical / Infrastructure Failure**
   - Indexing/crawlability suddenly impaired
   - Widespread 5xx/4xx errors
   - Robots.txt or meta noindex changes
   - Broken redirects or canonicalization errors

3. **Manual Action / Policy Violation**
   - Manual action message in GSC
   - Sudden, severe drop in branded and non-branded queries
   - History of aggressive link building or spammy tactics

4. **Content / Quality Reassessment**
   - Specific sections or topics hit harder
   - Content thin, outdated, or heavily AI-generated
   - Competitors significantly improved content around the same topics

5. **Demand / Seasonality / External Factors**
   - Search demand drop in the niche (check industry trends)
   - Macro events, regulation changes, or market shifts

---

#### Imported: Forensic Hypothesis Building

Use a hypothesis-driven approach instead of listing random issues.

For each plausible cause:

- **Hypothesis**: e.g., “A recent deployment introduced noindex tags on key templates.”
- **Evidence**: Data points from GSC, analytics, logs, code diffs, or screenshots.
- **Impact**: Which sections/pages are affected and by how much.
- **Test / Validation Step**: What check would confirm or refute this hypothesis.
- **Suggested Fix**: Concrete remediation action.

Prioritize hypotheses by:

1. Severity of impact
2. Ease of validation
3. Reversibility (how easy it is to roll back or adjust)

---

#### Imported: Output Format

Structure your final forensic report clearly:

### Executive Incident Summary

- Incident type classification (technical, algorithmic, manual action, mixed)
- Date range of impact and severity (approximate % drop)
- Top 3–5 likely root causes
- Overall confidence level (Low/Medium/High)

### Evidence-Based Findings

For each key finding, include:

- **Finding**: Short description of what is wrong.
- **Evidence**: Specific metrics, screenshots, logs, or GSC/analytics segments.
- **Likely Cause**: How this could lead to the observed impact.
- **Impact**: High/Medium/Low.
- **Fix**: Concrete, implementable recommendation.

### Prioritized Action Plan

Break down into phases:

1. **Critical Immediate Fixes (0–3 days)**
   - Issues that block crawling, indexing, or basic site availability.
   - Reversals of harmful recent deployments.

2. **Stabilization (3–14 days)**
   - Clean up redirects, canonicals, internal links.
   - Restore or improve critical content and templates.

3. **Recovery & Hardening (2–8 weeks)**
   - Content quality improvements.
   - E-E-A-T enhancements.
   - Technical hardening to prevent recurrence.

4. **Monitoring Plan**
   - Metrics and dashboards to watch.
   - Checkpoints to assess partial recovery.
   - Criteria for closing the incident.

---

#### Imported: Task-Specific Questions

When helping a user, ask:

1. When exactly did you notice the drop? Any change logs around that date?
2. Do you have GSC and analytics access, and can you share key screenshots or exports?
3. Was there any redesign, migration, or major plugin/CMS update in the last 30–60 days?
4. Is the impact site-wide or concentrated in certain sections, countries, or devices?
5. Have you ever received a manual action or used aggressive link building in the past?

---

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
