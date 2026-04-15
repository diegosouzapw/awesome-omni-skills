---
name: obsidian-clipper-template-creator
description: "Obsidian Web Clipper Template Creator workflow skill. Use this skill when the user needs Guide for creating templates for the Obsidian Web Clipper. Use when you want to create a new clipping template, understand available variables, or format clipped content and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["obsidian-clipper-template-creator", "guide", "for", "creating", "templates", "the", "obsidian", "web"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Obsidian Web Clipper Template Creator

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/obsidian-clipper-template-creator` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Obsidian Web Clipper Template Creator This skill helps you create importable JSON templates for the Obsidian Web Clipper.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to create or refine an importable Obsidian Web Clipper template.
- You want to map a site's real DOM, schema data, and selectors into a valid clipping template.
- You need selector verification and template logic guidance before handing the JSON to the user.
- Use when the request clearly matches the imported source intent: Guide for creating templates for the Obsidian Web Clipper. Use when you want to create a new clipping template, understand available variables, or format clipped content.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/analysis-workflow.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/bases-workflow.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Identify User Intent: specific site (YouTube), specific type (Recipe), or general clipping?
2. Check Existing Bases: The user likely has a "Base" schema defined in Bases/.
3. Action: Read Bases/*.base to find a matching category (e.g., Recipes.base).
4. Action: Use the properties defined in the Base to structure the Clipper template properties.
5. See references/bases-workflow.md for details.
6. Fetch & Analyze Reference URL: Validate variables against a real page.
7. Action: Ask the user for a sample URL of the content they want to clip (if not provided).

### Imported Workflow Notes

#### Imported: Workflow

1. **Identify User Intent:** specific site (YouTube), specific type (Recipe), or general clipping?
2. **Check Existing Bases:** The user likely has a "Base" schema defined in `Bases/`.
    - **Action:** Read `Bases/*.base` to find a matching category (e.g., `Recipes.base`).
    - **Action:** Use the properties defined in the Base to structure the Clipper template properties.
    - See [references/bases-workflow.md](references/bases-workflow.md) for details.
3. **Fetch & Analyze Reference URL:** Validate variables against a real page.
    - **Action:** Ask the user for a sample URL of the content they want to clip (if not provided).
    - **Action (REQUIRED):** Use **WebFetch** to retrieve page content; if WebFetch is not available, use a browser DOM snapshot. See [references/analysis-workflow.md](references/analysis-workflow.md).
    - **Action:** Analyze the HTML for Schema.org JSON, Meta tags, and CSS selectors.
    - **Action (REQUIRED):** Verify each selector against the fetched content. Do not guess selectors.
    - See [references/analysis-workflow.md](references/analysis-workflow.md) for analysis techniques.
4. **Draft the JSON:** Create a valid JSON object following the schema.
    - See [references/json-schema.md](references/json-schema.md).
5. **Consider template logic:** Use conditionals for optional blocks (e.g. show nutrition only if present), loops for list data, variable assignment to avoid repeating expressions, and fallbacks for missing variables. Use logic only when it improves the template; keep simple templates simple. See [references/logic.md](references/logic.md).
6. **Verify Variables:** Ensure the chosen variables (Preset, Schema, Selector) exist in your analysis.
    - **Action (REQUIRED):** If a selector cannot be verified from the fetched content, state that explicitly and ask for another URL.
    - See [references/variables.md](references/variables.md).

#### Imported: Output Format

**ALWAYS** output the final result as a JSON code block that the user can copy and import.

The Clipper template editor validates template syntax.
If you use template logic (conditionals, loops, variable assignment), ensure it follows the syntax in [references/logic.md](references/logic.md) and the official [Logic](https://help.obsidian.md/web-clipper/logic) docs so the template passes validation.

```json
{
  "schemaVersion": "0.1.0",
  "name": "My Template",
  ...
}
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @obsidian-clipper-template-creator to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @obsidian-clipper-template-creator against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @obsidian-clipper-template-creator for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @obsidian-clipper-template-creator using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

See [assets/](assets/) for JSON examples.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always verify selectors against live page content before responding.
- Never guess selectors. If the DOM cannot be accessed or the element is missing, ask for another URL or a screenshot.
- Prefer stable selectors (data attributes, semantic roles, unique IDs) over fragile class chains.
- Document the target element in your reasoning (e.g., "About sidebar paragraph") to reduce mismatch.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Selector Verification Rules

- **Always verify selectors** against live page content before responding.
- **Never guess selectors.** If the DOM cannot be accessed or the element is missing, ask for another URL or a screenshot.
- **Prefer stable selectors** (data attributes, semantic roles, unique IDs) over fragile class chains.
- **Document the target element** in your reasoning (e.g., "About sidebar paragraph") to reduce mismatch.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/obsidian-clipper-template-creator`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/analysis-workflow.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/clipping-template.json` |

- [analysis-workflow.md](references/analysis-workflow.md)
- [bases-workflow.md](references/bases-workflow.md)
- [filters.md](references/filters.md)
- [json-schema.md](references/json-schema.md)
- [clipping-template.json](assets/clipping-template.json)
- [recipe-template.json](assets/recipe-template.json)

### Imported Reference Notes

#### Imported: Resources

- [references/variables.md](references/variables.md) - Available data variables.
- [references/filters.md](references/filters.md) - Formatting filters.
- [references/json-schema.md](references/json-schema.md) - JSON structure documentation.
- [references/logic.md](references/logic.md) - Template logic.
- [references/bases-workflow.md](references/bases-workflow.md) - How to map Bases to Templates.
- [references/analysis-workflow.md](references/analysis-workflow.md) - How to validate page data.

### Official Documentation

- [Variables](https://help.obsidian.md/web-clipper/variables)
- [Filters](https://help.obsidian.md/web-clipper/filters)
- [Logic](https://help.obsidian.md/web-clipper/logic)
- [Templates](https://help.obsidian.md/web-clipper/templates)

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
