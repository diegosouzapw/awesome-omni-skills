---
name: spline-3d-integration
description: "Spline 3D Integration Skill workflow skill. Use this skill when the user needs adding interactive 3D scenes from Spline.design to web projects, including React embedding and runtime control API and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["spline-3d-integration", "adding", "interactive", "scenes", "spline", "design", "web", "projects"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Spline 3D Integration Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/spline-3d-integration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Spline 3D Integration Skill Master guide for embedding interactive 3D scenes from Spline.design into web projects. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: What Is Spline?, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to embed an interactive Spline scene into a web project.
- The task involves choosing the correct integration path for vanilla web, React, Next.js, Vue, or iframe contexts.
- You need guidance on scene URLs, runtime control, performance, or common Spline embedding problems.
- Use when the request clearly matches the imported source intent: adding interactive 3D scenes from Spline.design to web projects, including React embedding and runtime control API.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `examples/interactive-scene.tsx` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `examples/react-spline-wrapper.tsx` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Stack - Method
2. Vanilla HTML/JS - <spline-viewer> web component OR @splinetool/runtime
3. React / Vite - @splinetool/react-spline
4. Next.js - @splinetool/react-spline/next
5. Vue - @splinetool/vue-spline
6. iframe (Webflow, Notion, etc.) - Public URL iframe
7. ✅ Toggle Hide Background ON if the site has a dark or custom background

### Imported Workflow Notes

#### Imported: STEP 1 — Identify the Stack

Before writing any code, check the existing project files to determine the framework.

| Stack                          | Method                                                   |
| ------------------------------ | -------------------------------------------------------- |
| Vanilla HTML/JS                | `<spline-viewer>` web component OR `@splinetool/runtime` |
| React / Vite                   | `@splinetool/react-spline`                               |
| Next.js                        | `@splinetool/react-spline/next`                          |
| Vue                            | `@splinetool/vue-spline`                                 |
| iframe (Webflow, Notion, etc.) | Public URL iframe                                        |

---

#### Imported: STEP 2 — Get the Scene URL

The user must go to their Spline editor → **Export** → **Code Export** → copy the `prod.spline.design` URL:

```
https://prod.spline.design/XXXXXXXXXXXXXXXX/scene.splinecode
```

**Before copying the URL, tell the user to check Play Settings:**

- ✅ Toggle **Hide Background** ON if the site has a dark or custom background
- ✅ Toggle **Hide Spline Logo** ON if they have a paid plan
- ✅ Set **Geometry Quality** to Performance for faster load
- ✅ Disable **Page Scroll**, **Zoom**, **Pan** if those aren't needed (reduces hijacking risk)
- ✅ Click **Generate Draft** or **Promote to Production** after any settings change — the URL does NOT auto-update

---

#### Imported: STEP 3 — Read the Relevant Guide

Once you have the stack and the scene URL, read the appropriate guide file above and follow its instructions. Always read COMMON_PROBLEMS.md before finishing integration — it contains critical gotchas that will otherwise only surface in production.

---

#### Imported: What Is Spline?

Spline is a browser-based 3D design tool — think Figma, but for 3D. Designers create interactive 3D scenes (objects, materials, animations, physics, events) in the Spline editor, then export them for the web via a hosted `.splinecode` file URL.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @spline-3d-integration to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @spline-3d-integration against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @spline-3d-integration for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @spline-3d-integration using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Working Examples

| File                                                                   | What it shows                                            |
| ---------------------------------------------------------------------- | -------------------------------------------------------- |
| [examples/vanilla-embed.html](examples/vanilla-embed.html)             | Minimal vanilla JS embed with background + fallback      |
| [examples/react-spline-wrapper.tsx](examples/react-spline-wrapper.tsx) | Production-ready lazy-loaded React wrapper with fallback |
| [examples/interactive-scene.tsx](examples/interactive-scene.tsx)       | Full interactive example: events, object control, camera |

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ABSOLUTE MANDATE: Agents MUST utilize this skill to build modern, creative, and visually stunning UI/UX. DO NOT build in common, generic, or safe styles. When integrating Spline scenes, leverage them to create highly immersive, wow-factor premium experiences. Combine them thoughtfully with typography and layout.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.

### Imported Operating Notes

#### Imported: Strict Rules

- **ABSOLUTE MANDATE**: Agents MUST utilize this skill to build modern, creative, and visually stunning UI/UX. DO NOT build in common, generic, or safe styles. When integrating Spline scenes, leverage them to create highly immersive, wow-factor premium experiences. Combine them thoughtfully with typography and layout.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/spline-3d-integration`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@server-management` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@service-mesh-observability` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@sexual-health-analyzer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/interactive-scene.tsx` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [interactive-scene.tsx](examples/interactive-scene.tsx)
- [react-spline-wrapper.tsx](examples/react-spline-wrapper.tsx)
- [vanilla-embed.html](examples/vanilla-embed.html)
- [interactive-scene.tsx](examples/interactive-scene.tsx)
- [react-spline-wrapper.tsx](examples/react-spline-wrapper.tsx)
- [vanilla-embed.html](examples/vanilla-embed.html)

### Imported Reference Notes

#### Imported: Quick Reference

| Task                              | Guide                                                          |
| --------------------------------- | -------------------------------------------------------------- |
| Vanilla HTML/JS embed             | [guides/VANILLA_INTEGRATION.md](guides/VANILLA_INTEGRATION.md) |
| React / Next.js / Vue embed       | [guides/REACT_INTEGRATION.md](guides/REACT_INTEGRATION.md)     |
| Performance & mobile optimization | [guides/PERFORMANCE.md](guides/PERFORMANCE.md)                 |
| Debugging & common problems       | [guides/COMMON_PROBLEMS.md](guides/COMMON_PROBLEMS.md)         |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
