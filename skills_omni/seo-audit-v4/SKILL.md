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
  - "canonicalization"
  - "javascript-seo"
  - "structured-data"
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
date_updated: "2026-05-12"
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

Use it when the goal is to **identify, explain, and prioritize SEO issues** affecting crawlability, indexation, rendering, canonicalization, structured data, content quality, and organic performance. Outputs should be **evidence-led, scoped, and decision-oriented**.

This is an **audit skill**, not an implementation skill.

- Diagnose before recommending fixes.
- Separate confirmed technical issues from ranking hypotheses.
- Do not claim penalties, algorithm hits, or causation without direct evidence.
- Prioritize by business impact, scope, and confidence.
- Preserve upstream workflow intent and provenance when handing off or merging findings.

## When to Use

Use this skill when the user asks for any of the following:

- A technical SEO audit of a site, section, template, or migration.
- Investigation of crawlability, indexation, canonicalization, rendering, or sitemap problems.
- Review of structured data eligibility, page experience signals, or mobile usability concerns.
- Diagnosis of organic traffic loss where technical causes are plausible.
- A severity-ranked findings report with evidence, likely cause, and next validation step.

Do **not** use this skill as the primary workflow when:

- The user only wants copywriting, metadata writing, or content generation.
- The task is pure implementation of fixes with no audit or diagnosis phase.
- The user wants guarantees about rankings, penalties, or recovery timelines.
- Access is too limited to support meaningful conclusions and the user has not accepted a constrained audit.

## Scope Gate

Before starting, confirm the operating boundary. Ask for missing inputs first.

1. **Target scope**: domain, subdomain, folder, country/language variant, or page set.
2. **Business context**: key templates, critical pages, recent migrations, traffic drop timing, release history.
3. **Access available**: Search Console, analytics, crawl exports, CMS, server logs, CDN rules, robots.txt, sitemap files.
4. **Constraints**: production-only review, no implementation, limited time, sample-based audit, regulated content.
5. **Success criteria**: blocker identification, launch readiness, root-cause diagnosis, or prioritized roadmap.

If core access is missing, continue only with an explicit limitation statement such as:

> "This is a constrained SEO audit based on public evidence and supplied artifacts only. Findings may miss issues that require Search Console, logs, or authenticated crawling data."

## Required Output Format

Return findings in a structure that supports action and review:

1. **Audit scope and limitations**
2. **Executive summary**
3. **Top issues by severity**
4. **Detailed findings** with:
   - issue title
   - severity
   - affected scope
   - evidence
   - likely cause
   - SEO impact
   - confidence level
   - recommended next validation step
5. **Open questions / missing access**
6. **Priority order**: fix now, validate next, monitor

A useful finding is specific enough that another operator can verify it without guessing.

## Workflow

1. **Confirm scope and access**
   - Define what is in scope and what is out.
   - Record available evidence sources.
   - Note whether the audit is full, sample-based, or hypothesis-led.

2. **Collect baseline evidence**
   - Capture representative URLs by template and business importance.
   - Gather robots.txt, sitemap locations, canonical targets, response behavior, rendered HTML evidence, and Search Console signals if available.
   - Note historical context such as redesigns, migrations, robots changes, or JavaScript framework changes.

3. **Audit crawl and index controls**
   - Check whether important URLs are discoverable through links, sitemaps, and internal architecture.
   - Review robots directives, noindex usage, canonicals, redirect chains, soft-404 patterns, and status-code anomalies.
   - Distinguish between pages that are blocked from crawling versus crawled but excluded from indexing.

4. **Audit rendering and page quality signals**
   - Compare raw and rendered states when JavaScript may affect links, content, canonicals, metadata, or structured data.
   - Review mobile presentation, page experience concerns, and template-level issues that suppress content or navigation.
   - Check whether important content is present, unique enough, and aligned with search intent.

5. **Audit search appearance and structured signals**
   - Validate titles, descriptions, heading patterns, hreflang where relevant, structured data quality, and duplication signals.
   - Confirm that metadata supports indexing and interpretation rather than conflicting with canonicals or redirects.

6. **Assess internal linking and architecture**
   - Evaluate whether priority pages receive crawl paths and anchor support.
   - Look for orphaned pages, excessive depth, faceted traps, parameter sprawl, and duplicate route patterns.

7. **Prioritize findings**
   - Rank issues by affected scope, business value, reversibility, and confidence.
   - Separate sitewide blockers from local optimizations.
   - Flag hypotheses that need validation instead of presenting them as confirmed causes.

8. **Produce the audit report**
   - Summarize what is broken, why it matters, how certain you are, and what should happen next.
   - Preserve provenance if findings are merged into a repository workflow or handoff packet.

## Review Dimensions

At minimum, review these issue families:

- **Crawlability**: robots blocking, inaccessible navigation, crawl traps, broken discovery paths.
- **Indexation**: noindex misuse, excluded duplicates, soft 404s, weak canonical signals, thin or duplicative pages.
- **Canonicalization**: conflicting canonicals, self-canonical gaps, canonical-to-redirect patterns, duplicate route handling.
- **Rendering**: JS-dependent content or links not reliably exposed, delayed rendering of key elements, raw/render mismatch.
- **Information architecture**: orphan pages, excessive click depth, poor internal linking to priority pages.
- **On-page signals**: title duplication, weak headings, intent mismatch, thin template content.
- **Structured data**: invalid markup, policy-risk markup, missing required properties, mismatch with visible content.
- **Performance and mobile usability**: issues that materially affect crawl, rendering, or user access.

## Severity Model

Use a simple and defensible severity scale:

- **Critical**: prevents crawl, indexing, or correct canonical selection for high-value pages or large site sections.
- **High**: materially suppresses discoverability, indexing quality, or search appearance across important templates.
- **Medium**: meaningful quality issue with moderate scope or uncertain impact.
- **Low**: localized issue, hygiene problem, or optimization opportunity.
- **Monitor**: no confirmed defect yet; track with a validation method.

Severity should reflect **business impact plus scope**, not just technical purity.

## Examples

### Example 1: Good finding

```md
Issue: Product pages excluded because canonical points to category URLs
Severity: High
Affected scope: ~3,200 product detail pages
Evidence:
- Sample product URLs return 200 and are internally linked
- HTML canonical points to parent category URL
- Search Console coverage for sampled pages shows alternate page with proper canonical tag
Likely cause: Template-level canonical logic inherited category canonical setting
SEO impact: Product pages are unlikely to be indexed as independent landing pages
Confidence: High
Recommended next validation step: Confirm the canonical tag rule across templates and sample recrawl after correction
```

### Example 2: Weak finding to avoid

```md
Issue: Google may be penalizing the site
Severity: Critical
Evidence: Traffic went down
Why weak: No direct evidence, no technical mechanism, no separation between correlation and cause
```

For a fuller worked example, open [`examples/review-example.md`](examples/review-example.md).

## Best Practices

- **Do** start with scope, access, and known business events before reviewing symptoms.
- **Do** use representative URL samples across templates instead of relying on one page.
- **Do** distinguish public-web evidence from Search Console-only evidence.
- **Do** state limitations when access gaps reduce confidence.
- **Do** tie every major finding to proof, affected scope, and next validation step.
- **Do** identify whether an issue is page-level, template-level, or architecture-level.
- **Do** prioritize blockers before metadata refinements.

- **Do not** promise ranking lifts, recovery timelines, or penalty explanations without direct evidence.
- **Do not** mark every issue High; calibrate by impact and breadth.
- **Do not** confuse canonical preference with indexation guarantee.
- **Do not** treat all Core Web Vitals or performance issues as primary SEO blockers if crawl/index signals are healthy.
- **Do not** recommend broad robots blocking or noindex changes without clearly stating the risk.
- **Do not** claim JavaScript SEO failure unless raw/render evidence shows missing or altered critical signals.

## Troubleshooting

**Symptoms:** Many important URLs are absent from search results, but pages load normally in the browser.

**Solution:** Check indexation evidence first: noindex directives, canonicals, redirects, duplicate clusters, sitemap inclusion, and Search Console page indexing states. A page being reachable is not the same as being indexable.

**Symptoms:** Search Console shows "Crawled - currently not indexed" on many pages.

**Solution:** Avoid a single-cause explanation. Review duplication, thin template content, weak internal linking, soft-404 characteristics, and canonical ambiguity. Treat this as a diagnostic state, not a verdict.

**Symptoms:** Important content exists after user interaction but not reliably in initial HTML.

**Solution:** Compare raw versus rendered output for content, links, canonicals, metadata, and structured data. If critical elements depend on delayed JS execution, classify it as a rendering risk and scope the affected templates.

**Symptoms:** Sitemaps exist, but discovery and indexing remain poor.

**Solution:** Check whether sitemap URLs are canonical, indexable, return valid status codes, and align with internal linking. Sitemaps support discovery; they do not override poor canonical or quality signals.

**Symptoms:** Structured data is present but rich result eligibility is inconsistent.

**Solution:** Validate syntax, required properties, policy fit, and consistency with visible content. Separate markup validity from search feature eligibility.

**Symptoms:** Organic traffic dropped after a migration or redesign.

**Solution:** Compare pre/post behavior for redirects, canonicals, status codes, internal links, robots rules, sitemap coverage, and rendering changes. Prioritize migration regressions before broader content theories.

## Additional Resources

- [`references/review-criteria.md`](references/review-criteria.md) — open this during the audit to classify issue families, evidence standards, severity logic, and validation paths consistently.
- [`examples/review-example.md`](examples/review-example.md) — open this when you need a concrete example of a scoped, evidence-based SEO audit write-up.

## Related Skills

No related local skills were supplied in the source context.
