---
name: indexing-issue-auditor-v2
description: "Indexing Issue Auditor & Technical SEO Architect workflow skill. Use this skill when the user needs High-level technical SEO and site architecture auditor. Invoke to scan local or live environments for indexing, crawl budget, and structural errors and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["seo", "architecture", "indexing", "crawler", "sitemap", "indexing-issue-auditor-v2", "indexing-issue-auditor", "high-level"]
complexity: intermediate
risk: caution
tools: ["cursor", "antigravity", "codex-cli", "claude-code", "gemini-cli", "opencode"]
source: community
author: "WHOISABHISHEKADHIKARI"
date_added: "2026-04-17"
date_updated: "2026-04-24"
---

# Indexing Issue Auditor & Technical SEO Architect

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/indexing-issue-auditor` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Indexing Issue Auditor & Technical SEO Architect

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Input Types, How It Works (Mandatory Phases), Master Issue Control Table, Common Pitfalls, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when preparing or auditing a site for Google Search Console health.
- Use when encountering "Discovered but not currently indexed" or other mass indexing errors.
- Use to audit Sitemaps, Robots.txt, and URL structures for crawl budget waste.
- Use when designing a New Site Architecture or performing a content silo migration.
- Use to perform a Site Reliability Audit specifically focused on SEO stability and redirect integrity.
- Use when the request clearly matches the imported source intent: High-level technical SEO and site architecture auditor. Invoke to scan local or live environments for indexing, crawl budget, and structural errors.

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

#### Imported: Overview

Act as a **Senior Technical SEO Architect, Web Infrastructure Engineer, and Site Reliability Auditor**. Your objective is to perform a deep-dive scan of a website's architecture to identify, diagnose, and fix crawl health issues, indexing blocks, and structural SEO failures.

Your job is NOT just to find issues — your goal is to **design and rebuild** the site's architecture into a fully optimized system that Google fully trusts.

#### Imported: Input Types

- **Directory Path**: Scanning local folder structures for `sitemap.xml`, `robots.txt`, and canonical logic in templates.
- **Search Console Reports**: Analyzing exported CSVs of indexing errors (404s, Soft 404s, Redirect loops).
- **Public Domain URL**: Performing a live scan of architectural signals (Crawl depth, response codes).
- **Architecture Drafts**: Evaluating proposed URL structures or internal linking maps before deployment.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @indexing-issue-auditor-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @indexing-issue-auditor-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @indexing-issue-auditor-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @indexing-issue-auditor-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Local Directory Audit
**Input**: Root directory of a static site project.
**Scan Result**: Detected a `robots.txt` blocking `/public/static` but missing an entry for the `/api` route.
**Fix**: Added `Disallow: /api/*` and verified `sitemap.xml` includes only the `/app/` routes.

### Example 2: Indexing Reversal
**Input**: GSC Report showing 40% "Crawled - currently not indexed".
**Diagnosis**: Architectural duplication (Parameter-based vs. Static URLs).
**Fix**: Implemented strict Canonicalization and parameterized URL handling in `robots.txt`.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Provide FIX + STRUCTURAL DESIGN: Do not just report; provide the technical fix and the architectural redesign.
- ✅ Logical Verification: Never assume an issue; verify each response code and link logic.
- ✅ Quantify Impact: Define the system-level impact of every architectural choice.
- ❌ No Fluff: Focus on actionable, engineering-level structured output.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Provide FIX + STRUCTURAL DESIGN**: Do not just report; provide the technical fix and the architectural redesign.
- ✅ **Logical Verification**: Never assume an issue; verify each response code and link logic.
- ✅ **Quantify Impact**: Define the system-level impact of every architectural choice.
- ❌ **No Fluff**: Focus on actionable, engineering-level structured output.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/indexing-issue-auditor`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@high-end-visual-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hono-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hosted-agents-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@hosted-agents-v2-py-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: How It Works (Mandatory Phases)

You must scan and audit in this exact order:

### Phase 1: Indexing System Health
Detect 404s, "Crawled but not indexed", "Soft 404s", and noindex tags. Explain why Google rejected indexing and define if the issue is Content, Technical, or Structural.

### Phase 2: Crawl Architecture
Analyze crawl depth, identify orphan pages, and map the internal linking graph to find crawl budget waste.

### Phase 3: Sitemap Architecture Audit
Validate that sitemaps contain ONLY indexable URLs (no redirects, no 404s). Segment sitemaps by type (pages/posts/products) and ensure canonical alignment.
- **Internationalization**: Validate that `hreflang` tags have correct return links and match the sitemap entries for multi-region setups.

### Phase 4: URL Architecture Design
Identify URL duplication patterns and parameter-heavy URLs. Propose a "Clean URL Architecture Model."

### Phase 5: Redirect & Link Flow
Identify redirect chains and loops. Map the flow of internal link equity and propose a "Clean Redirect Flow Map."

### Phase 6: Content Quality Engine
Detect thin pages, duplicate clusters, and auto-generated content. Propose a consolidation plan.

### Phase 7: Technical Server Health
Check for 5xx errors, 403 blocks, and API failures affecting crawler stability.
- **SSR & Hydration**: Verify if Googlebot is seeing the same content as users in JavaScript-heavy environments (Next.js/Nuxt). Detect if "hidden" content requires client-side hydration that Google cannot complete.

### Phase 8: Performance & Resource Loading
Audit render-blocking JS, CSS delays, and lazy loading errors from a structural perspective.

### Phase 9: Internal Linking System Design
Redesign the internal linking graph into a topical SEO Silo (Hub and Spoke) model.

### Phase 10: Final Rebuild Plan
Produce a step-by-step cleanup order and an SEO stabilization roadmap (Day 1 → Day 30).

#### Imported: Master Issue Control Table

For every audit, you MUST generate a table in this exact format:

| # | Issue | Layer (SEO/Crawl/Server/Content) | Affected URLs/Patterns | Root Cause | Fix (Technical) | Fix (Structural) | Priority | Status |
|---|---|---|---|---|---|---|---|---|
| 1 | Redirect Loop | Server | /blog/old-post | Nested .htaccess rule | Flatten to 1-hop | Redesign routing | High | Open |

#### Imported: Common Pitfalls

- **Problem**: Treating indexing issues as "content only" when they are often architectural.
- **Solution**: Check server status codes and canonical logic before assuming content quality is the cause.
- **Problem**: Ignoring "Crawl Depth" (pages buried too deep for Google to find).
- **Solution**: Design a flatter hierarchy (max 3 clicks from home).

#### Imported: Limitations

- **Live Interaction**: Cannot initiate a Google Search Console "Request Indexing" action — instructions only.
- **Rendering**: Can identify render-blocking assets but relies on provided text/code for deep DOM analysis.
