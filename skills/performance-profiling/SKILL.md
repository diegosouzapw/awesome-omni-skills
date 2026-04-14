---
name: performance-profiling
description: "Performance Profiling workflow skill. Use this skill when the user needs Performance profiling principles. Measurement, analysis, and optimization techniques and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["performance-profiling", "performance", "profiling", "principles", "measurement", "analysis", "and", "optimization"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Performance Profiling

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/performance-profiling` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Performance Profiling > Measure, analyze, optimize - in that order.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 🔧 Runtime Scripts, 1. Core Web Vitals, 3. Bundle Analysis, 4. Runtime Profiling, 5. Common Bottlenecks, 6. Quick Win Priorities.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Performance profiling principles. Measurement, analysis, and optimization techniques.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `scripts/lighthouse_audit.py` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `scripts/lighthouse_audit.py` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. BASELINE → Measure current state
2. IDENTIFY → Find the bottleneck
3. FIX → Make targeted change
4. VALIDATE → Confirm improvement
5. Problem - Tool
6. Page load - Lighthouse
7. Bundle size - Bundle analyzer

### Imported Workflow Notes

#### Imported: 2. Profiling Workflow

### The 4-Step Process

```
1. BASELINE → Measure current state
2. IDENTIFY → Find the bottleneck
3. FIX → Make targeted change
4. VALIDATE → Confirm improvement
```

### Profiling Tool Selection

| Problem | Tool |
|---------|------|
| Page load | Lighthouse |
| Bundle size | Bundle analyzer |
| Runtime | DevTools Performance |
| Memory | DevTools Memory |
| Network | DevTools Network |

---

#### Imported: 🔧 Runtime Scripts

**Execute these for automated profiling:**

| Script | Purpose | Usage |
|--------|---------|-------|
| `scripts/lighthouse_audit.py` | Lighthouse performance audit | `python scripts/lighthouse_audit.py https://example.com` |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @performance-profiling to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @performance-profiling against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @performance-profiling for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @performance-profiling using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/performance-profiling`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@os-scripting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@oss-hunter` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@outlook-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@outlook-calendar-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/lighthouse_audit.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [lighthouse_audit.py](scripts/lighthouse_audit.py)
- [lighthouse_audit.py](scripts/lighthouse_audit.py)

### Imported Reference Notes

#### Imported: 1. Core Web Vitals

### Targets

| Metric | Good | Poor | Measures |
|--------|------|------|----------|
| **LCP** | < 2.5s | > 4.0s | Loading |
| **INP** | < 200ms | > 500ms | Interactivity |
| **CLS** | < 0.1 | > 0.25 | Stability |

### When to Measure

| Stage | Tool |
|-------|------|
| Development | Local Lighthouse |
| CI/CD | Lighthouse CI |
| Production | RUM (Real User Monitoring) |

---

#### Imported: 3. Bundle Analysis

### What to Look For

| Issue | Indicator |
|-------|-----------|
| Large dependencies | Top of bundle |
| Duplicate code | Multiple chunks |
| Unused code | Low coverage |
| Missing splits | Single large chunk |

### Optimization Actions

| Finding | Action |
|---------|--------|
| Big library | Import specific modules |
| Duplicate deps | Dedupe, update versions |
| Route in main | Code split |
| Unused exports | Tree shake |

---

#### Imported: 4. Runtime Profiling

### Performance Tab Analysis

| Pattern | Meaning |
|---------|---------|
| Long tasks (>50ms) | UI blocking |
| Many small tasks | Possible batching opportunity |
| Layout/paint | Rendering bottleneck |
| Script | JavaScript execution |

### Memory Tab Analysis

| Pattern | Meaning |
|---------|---------|
| Growing heap | Possible leak |
| Large retained | Check references |
| Detached DOM | Not cleaned up |

---

#### Imported: 5. Common Bottlenecks

### By Symptom

| Symptom | Likely Cause |
|---------|--------------|
| Slow initial load | Large JS, render blocking |
| Slow interactions | Heavy event handlers |
| Jank during scroll | Layout thrashing |
| Growing memory | Leaks, retained refs |

---

#### Imported: 6. Quick Win Priorities

| Priority | Action | Impact |
|----------|--------|--------|
| 1 | Enable compression | High |
| 2 | Lazy load images | High |
| 3 | Code split routes | High |
| 4 | Cache static assets | Medium |
| 5 | Optimize images | Medium |

---

#### Imported: 7. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| Guess at problems | Profile first |
| Micro-optimize | Fix biggest issue |
| Optimize early | Optimize when needed |
| Ignore real users | Use RUM data |

---

> **Remember:** The fastest code is code that doesn't run. Remove before optimizing.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
