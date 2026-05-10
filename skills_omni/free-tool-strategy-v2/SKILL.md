---
name: "free-tool-strategy-v2"
description: "Use when planning, comparing, or reviewing an engineering-as-marketing free tool that must deliver real user utility, remain crawlable and measurable, and support lead generation without SEO-first or privacy-risky tactics."
version: "0.0.1"
category: "business"
tags:
  - "free-tool-strategy-v2"
  - "engineering-as-marketing"
  - "free-tools"
  - "seo"
  - "lead-generation"
  - "product-marketing"
  - "omni-enhanced"
complexity: "advanced"
risk: "safe"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "Unknown"
date_added: "2026-04-16"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "free-tool-strategy-v2"
family_name: "Free Tool Strategy (Engineering as Marketing)"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/free-tool-strategy-v2"
upstream_skill: "skills/free-tool-strategy-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "free-tool-strategy-v2"
---

# Free Tool Strategy (Engineering as Marketing)

## Overview

Use this skill to plan, compare, or review a free tool intended to create qualified demand through genuine product value.

The governing rule is: **the tool should still be worth shipping if it produced no SEO uplift and no captured leads**. Traffic, awareness, and lead generation should follow from usefulness, not from thin pages, forced signup walls, or scaled SEO-first content.

This curated version preserves the upstream intent while tightening execution in the areas that most affect launch quality:
- people-first utility before acquisition goals
- discoverability for interactive and JavaScript-heavy tools
- measurement with recommended GA4 lead events
- privacy, email, and conversion guardrails for lead capture

## When to Use

Use this skill when you need to:
- evaluate whether a free tool is a strong engineering-as-marketing bet
- compare multiple tool concepts before design or implementation
- review an existing tool for SEO, UX, conversion, and measurement gaps
- decide between building a standalone tool, embedding a lightweight calculator, or dropping the idea
- produce a launch recommendation with explicit tradeoffs

Do **not** use this skill when:
- the "tool" is really a gated demo, brochure page, or lead form with minimal utility
- the main goal is scaled traffic acquisition without meaningful user value
- success depends on dark patterns, aggressive email capture, or unclear consent
- the work is primarily a full product roadmap, not a free acquisition asset

## Workflow

1. **Define the user problem and job-to-be-done**
   - Name the user, the trigger, the decision they are trying to make, and the minimum useful output.
   - State what the user gets before any signup, handoff, or sales contact.
   - Reject ideas that cannot produce immediate standalone value.

2. **Classify the tool format**
   - Identify whether it is a calculator, grader, generator, checker, estimator, comparator, validator, or workflow helper.
   - Note whether the output is static, personalized, downloadable, or shareable.
   - Prefer formats where the value is obvious within one session.

3. **Evaluate people-first usefulness before channel strategy**
   - Ask whether a target user would intentionally seek, bookmark, share, or cite the tool.
   - Check whether the output is specific enough to support a real decision.
   - Remove SEO-only embellishments that do not improve usefulness.

4. **Review discoverability and technical indexability**
   - Confirm the tool has a clear landing page, descriptive headings, crawlable content, and indexable output states where appropriate.
   - For JavaScript-heavy tools, verify critical content, labels, and result explanations are still discoverable and not hidden behind broken rendering.
   - Check Core Web Vitals risk, especially slow result rendering, layout shift, and interaction delay.

5. **Define conversion and measurement paths**
   - Identify the primary business outcome: email capture, demo request, report export, account creation, or assisted handoff.
   - Keep the core value accessible before the conversion ask whenever possible.
   - Map GA4 events with preference for recommended naming such as `generate_lead` rather than arbitrary custom lead event names.

6. **Apply privacy and trust guardrails**
   - Minimize data collection.
   - Separate optional lead capture from required tool function unless the gating is essential and defensible.
   - Ensure email follow-up expectations, consent handling, and claims made by the tool are clear.

7. **Compare build vs. buy vs. embed**
   - Build when differentiation, output quality, or integration depth is strategic.
   - Buy or embed when the tool is commodity-like and speed matters more than uniqueness.
   - Drop the project if the acquisition story only works with traffic inflation or aggressive gating.

8. **Produce the recommendation**
   - Summarize the tool concept, target user, value proof, discoverability readiness, conversion design, instrumentation plan, and major risks.
   - End with a concrete disposition: **launch**, **revise**, **pilot**, or **reject**.

## Review Dimensions

Use these dimensions in every evaluation:

- **User value:** Does the tool solve a real problem in one session?
- **Output quality:** Is the result actionable, specific, and credible?
- **Acquisition fit:** Is the concept naturally discoverable and shareable?
- **Technical readiness:** Can search engines and users reliably reach the useful experience?
- **Conversion design:** Does the CTA fit the value delivered without undermining trust?
- **Measurement:** Can the team observe usage, drop-off, and lead generation cleanly?
- **Compliance and trust:** Are privacy, consent, and follow-up expectations reasonable?

For a reusable scorecard, open [references/review-criteria.md](references/review-criteria.md).

## Examples

### Example 1: Strong concept

**Input**
```text
SaaS category: cloud cost management
Idea: "Kubernetes cost savings calculator"
Target user: platform engineer evaluating optimization work
Business goal: qualified demo requests
```

**Recommended review outcome**
```text
Disposition: Launch after minor revisions
Why it works:
- Clear user problem with measurable output
- Useful before signup if the calculator returns estimated monthly waste and top savings levers
- Natural SEO/search demand and shareability
- Conversion can be placed after result delivery with optional report export
Required revisions:
- Add assumptions disclosure and methodology notes
- Instrument result generation and lead capture in GA4
- Ensure result explanation is indexable and not hidden behind client-side failures
```

### Example 2: Weak concept

**Input**
```text
SaaS category: B2B analytics
Idea: "AI marketing maturity quiz"
Target user: unspecified
Business goal: collect emails
```

**Recommended review outcome**
```text
Disposition: Reject or redesign
Why it fails:
- Utility is vague and generic
- Output likely becomes thin, repetitive, and SEO-first
- Lead capture appears to be the product, not the tool
- Hard to create credible, differentiated results without strong methodology
Possible salvage:
- Rebuild as a benchmark tool with concrete inputs, explicit scoring logic, and actionable recommendations
```

For a worked comparison with before/after reasoning, open [examples/review-example.md](examples/review-example.md).

## Best Practices

Do:
- Deliver the primary answer or calculation before asking for contact information whenever feasible.
- State assumptions, formulas, confidence limits, and data freshness for any estimator or grader.
- Design landing pages so the tool purpose, target user, and expected output are obvious above the fold.
- Use plain-language result explanations that can stand on their own if the interactive component fails.
- Instrument meaningful milestones such as tool start, result generation, export, and lead submission.
- Treat structured data as a visibility aid, not a substitute for useful content.
- Minimize personal data collection and keep optional fields truly optional.

Do not:
- Ship a tool whose only differentiated output is "contact sales for details."
- Force account creation before the user sees any real value unless there is a strong operational reason.
- Inflate SEO footprint with many near-duplicate tool pages or programmatic result pages with thin value.
- Hide critical copy, labels, or results inside fragile client-side rendering without validation.
- Use custom analytics naming where a recommended GA4 event already fits the business action.
- Promise precision that the tool cannot support.

## Troubleshooting

**Symptoms:** The concept gets traffic interest internally, but the review still feels weak.

**Solution:** Check whether the idea is useful without acquisition benefits. If the concept only works when paired with SEO volume, email gating, or sales follow-up, the tool is probably not strong enough yet.

**Symptoms:** The tool seems valuable, but search visibility is poor.

**Solution:** Review whether the landing page explains the tool in crawlable text, whether result states have indexable explanatory content where appropriate, and whether JavaScript rendering failures hide important content.

**Symptoms:** Users engage with the tool but lead capture is low.

**Solution:** Re-evaluate timing and relevance of the CTA. Ask only after the user receives a meaningful result, and align the ask with the output, such as report export, saved history, or expert follow-up.

**Symptoms:** Analytics show usage, but the team cannot tie activity to qualified demand.

**Solution:** Define a clean event model with explicit milestones and a recommended lead event such as `generate_lead`. Separate tool interaction from conversion events so funnel drop-off is visible.

**Symptoms:** Legal or trust concerns appear late in the review.

**Solution:** Audit data collection, consent language, retention assumptions, and outbound email expectations before launch approval. Remove fields or follow-up flows that are not necessary for the stated user value.

## Additional Resources

- [references/review-criteria.md](references/review-criteria.md) — Open this when you need a concise review rubric with pass/fail criteria for usefulness, indexability, instrumentation, conversion, and trust.
- [examples/review-example.md](examples/review-example.md) — Open this when you need a worked example showing how to critique a weak concept and improve it into a launchable one.

## Related Skills

No related local skills were provided in the source context.
