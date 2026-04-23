---
name: "app-store-changelog"
description: "App Store Changelog workflow skill. Use this skill when the user needs Generate user-facing App Store release notes from git history since the last tag and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "fullstack-web"
tags:
  - "app-store-changelog"
  - "generate"
  - "user-facing"
  - "app"
  - "store"
  - "release"
  - "notes"
  - "git"
  - "omni-enhanced"
complexity: "beginner"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-14"
date_updated: "2026-04-23"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "app-store-changelog"
family_name: "App Store Changelog"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/app-store-changelog"
upstream_skill: "skills/app-store-changelog"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "126"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "032affbbd536f09d7636f0fbbfd35093380dae89"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "app-store-changelog"
---

# App Store Changelog

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/app-store-changelog` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# App Store Changelog

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Output Format, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user asks for App Store "What's New" text or release notes from git history.
- When you need to turn raw commits into concise, user-facing release bullets.
- Use when the request clearly matches the imported source intent: Generate user-facing App Store release notes from git history since the last tag.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/release-notes-guidelines.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `scripts/collect_release_changes.sh` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Run scripts/collectreleasechanges.sh from the repo root to gather commits and touched files.
2. If needed, pass a specific tag or ref: scripts/collectreleasechanges.sh v1.2.3 HEAD.
3. If no tags exist, the script falls back to full history.
4. Scan commits and files to identify user-visible changes.
5. Group changes by theme (New, Improved, Fixed) and deduplicate overlaps.
6. Drop internal-only work (build scripts, refactors, dependency bumps, CI).
7. Write short, benefit-focused bullets for each user-facing change.

### Imported Workflow Notes

#### Imported: Workflow

### 1) Collect changes
- Run `scripts/collect_release_changes.sh` from the repo root to gather commits and touched files.
- If needed, pass a specific tag or ref: `scripts/collect_release_changes.sh v1.2.3 HEAD`.
- If no tags exist, the script falls back to full history.

### 2) Triage for user impact
- Scan commits and files to identify user-visible changes.
- Group changes by theme (New, Improved, Fixed) and deduplicate overlaps.
- Drop internal-only work (build scripts, refactors, dependency bumps, CI).

### 3) Draft App Store notes
- Write short, benefit-focused bullets for each user-facing change.
- Use clear verbs and plain language; avoid internal jargon.
- Prefer 5 to 10 bullets unless the user requests a different length.

### 4) Validate
- Ensure every bullet maps back to a real change in the range.
- Check for duplicates and overly technical wording.
- Ask for clarification if any change is ambiguous or possibly internal-only.

#### Imported: Overview

Generate a comprehensive, user-facing changelog from git history since the last tag, then translate commits into clear App Store release notes.

#### Imported: Output Format

- Title (optional): "What's New" or product name + version.
- Bullet list only; one sentence per bullet.
- Stick to storefront limits if the user provides one.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @app-store-changelog to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @app-store-changelog against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @app-store-changelog for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @app-store-changelog using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Commit-to-Bullet Examples

The following shows how raw commits are translated into App Store bullets:

| Raw commit message | App Store bullet |
|---|---|
| `fix(auth): resolve token refresh race condition on iOS 17` | • Fixed a login issue that could leave some users unexpectedly signed out. |
| `feat(search): add voice input to search bar` | • Search your library hands-free with the new voice input option. |
| `perf(timeline): lazy-load images to reduce scroll jank` | • Scrolling through your timeline is now smoother and faster. |

Internal-only commits that are **dropped** (no user impact):
- `chore: upgrade fastlane to 2.219`
- `refactor(network): extract URLSession wrapper into module`
- `ci: add nightly build job`

#### Imported: Example Output

```
What's New in Version 3.4

• Search your library hands-free with the new voice input option.
• Scrolling through your timeline is now smoother and faster.
• Fixed a login issue that could leave some users unexpectedly signed out.
• Added dark-mode support to the settings screen.
• Improved load times when opening large photo albums.
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/app-store-changelog`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/release-notes-guidelines.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/collect_release_changes.sh` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/openai.yaml` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [release-notes-guidelines.md](references/release-notes-guidelines.md)
- [collect_release_changes.sh](scripts/collect_release_changes.sh)
- [openai.yaml](agents/openai.yaml)
- [openai.yaml](agents/openai.yaml)
- [release-notes-guidelines.md](references/release-notes-guidelines.md)
- [collect_release_changes.sh](scripts/collect_release_changes.sh)

### Imported Reference Notes

#### Imported: Resources

- `scripts/collect_release_changes.sh`: Collect commits and touched files since last tag.
- `references/release-notes-guidelines.md`: Language, filtering, and QA rules for App Store notes.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
