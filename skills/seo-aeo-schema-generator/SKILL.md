---
name: seo-aeo-schema-generator
description: "SEO-AEO Schema Generator workflow skill. Use this skill when the user needs Generates valid JSON-LD structured data for 10 schema types with rich result eligibility validation and implementation-ready script blocks. Activate when the user wants to generate schema markup, JSON-LD, or structured data for any page and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["seo-aeo-schema-generator", "generates", "valid", "json-ld", "structured", "data", "for", "schema"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# SEO-AEO Schema Generator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-schema-generator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# SEO-AEO Schema Generator

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Supported Schema Types, How It Works, Common Pitfalls.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when adding structured data to a new landing page or blog post
- Use when a page needs FAQ rich results or product star ratings in search
- Use when validating existing schema for Google rich result eligibility
- Use after the content-quality-auditor flags missing schema
- Use when the request clearly matches the imported source intent: Generates valid JSON-LD structured data for 10 schema types with rich result eligibility validation and implementation-ready script blocks. Activate when the user wants to generate schema markup, JSON-LD, or structured....
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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Generates implementation-ready JSON-LD schema markup for 10 schema types including FAQPage, Article, Product, HowTo, and BreadcrumbList. Validates all required fields against Google rich result eligibility rules, flags missing fields with exact fix instructions, and outputs one clean `<script>` block per schema type ready to paste into the page `<head>`.

Part of the [SEO-AEO Engine](https://github.com/mrprewsh/seo-aeo-engine).

#### Imported: Supported Schema Types

| Type | Rich Result Unlocked |
|------|---------------------|
| FAQPage | FAQ accordion in SERP — AEO critical |
| Article | Article rich result, Top Stories |
| Product | Price, availability, rating in SERP |
| HowTo | Step-by-step rich result |
| Review | Star rating in SERP |
| AggregateRating | Star rating with review count |
| BreadcrumbList | Breadcrumb path in SERP URL |
| Organization | Brand knowledge panel signals |
| WebPage | Enhanced page understanding |
| WebSite | Sitelinks Searchbox |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @seo-aeo-schema-generator to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/seo-aeo-schema-generator/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/seo-aeo-schema-generator/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @seo-aeo-schema-generator using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example: FAQPage Schema Output
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is Syncro?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Syncro is a remote-first project management platform for distributed engineering teams. It centralises task tracking, async communication, and sprint planning in one tool."
      }
    }
  ]
}
</script>
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- ✅ Do: Always include FAQPage schema on any page with a FAQ section — it is the strongest AEO signal
- ✅ Do: Use one <script> block per schema type — never combine multiple types
- ✅ Do: Test every output in Google's Rich Results Test before deploying
- ❌ Don't: Use relative URLs anywhere in schema — all URLs must start with https://
- ❌ Don't: Leave placeholder text in any field before deploying
- ❌ Don't: Use HTML tags inside JSON-LD string values
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Always include FAQPage schema on any page with a FAQ section — it is the strongest AEO signal
- ✅ **Do:** Use one `<script>` block per schema type — never combine multiple types
- ✅ **Do:** Test every output in Google's Rich Results Test before deploying
- ❌ **Don't:** Use relative URLs anywhere in schema — all URLs must start with `https://`
- ❌ **Don't:** Leave placeholder text in any field before deploying
- ❌ **Don't:** Use HTML tags inside JSON-LD string values

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/seo-aeo-schema-generator`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Additional Resources

- [SEO-AEO Engine Repository](https://github.com/mrprewsh/seo-aeo-engine)
- [Full Schema Generator SKILL.md](https://github.com/mrprewsh/seo-aeo-engine/blob/main/.agent/skills/schema-generator/SKILL.md)

#### Imported: How It Works

### Step 1: Recommend Schema Types
If schema types are not specified, recommend the appropriate types based on the page type. Landing pages get FAQPage + Product + BreadcrumbList. Blog posts get Article + FAQPage + BreadcrumbList.

### Step 2: Use Built-In Schema Templates
Using your knowledge of schema.org and Google's rich result requirements, construct the JSON-LD template for each requested schema type. Use the required and recommended fields listed in the Google Rich Results documentation for that type.

### Step 3: Populate Fields
Map all page data to template placeholders. Check every required field against the rich result eligibility rules.

### Step 4: Validate
Flag any missing required field as a Critical issue. Flag missing recommended fields as warnings. Do not output schema with missing required fields.

### Step 5: Output Script Blocks
Write one `<script type="application/ld+json">` block per schema type. Include implementation instructions and testing tool links.

#### Imported: Common Pitfalls

- **Problem:** Schema passes validation but rich result doesn't appear in search
  **Solution:** Rich results can take weeks to appear after deployment. Request re-indexing in Google Search Console immediately after adding schema.

- **Problem:** Product schema missing star rating display
  **Solution:** Add AggregateRating object with ratingValue, reviewCount, bestRating, and worstRating — all four fields required.
