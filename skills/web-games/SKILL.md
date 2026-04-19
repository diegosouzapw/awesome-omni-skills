---
name: web-games
description: "Web Browser Game Development workflow skill. Use this skill when the user needs Web browser game development principles. Framework selection, WebGPU, optimization, PWA and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: fullstack-web
tags: ["web-games", "web", "browser", "game", "development", "principles", "framework", "selection"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Web Browser Game Development

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/game-development/web-games` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Web Browser Game Development > Framework selection and browser-specific principles. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. Framework Selection, 2. WebGPU Adoption, 4. Asset Strategy, 5. PWA for Games, 6. Audio Handling, 7. Anti-Patterns.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Web browser game development principles. Framework selection, WebGPU, optimization, PWA.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

#### Imported: 1. Framework Selection

### Decision Tree

```
What type of game?
│
├── 2D Game
│   ├── Full game engine features? → Phaser
│   └── Raw rendering power? → PixiJS
│
├── 3D Game
│   ├── Full engine (physics, XR)? → Babylon.js
│   └── Rendering focused? → Three.js
│
└── Hybrid / Canvas
    └── Custom → Raw Canvas/WebGL
```

### Comparison (2025)

| Framework | Type | Best For |
|-----------|------|----------|
| **Phaser 4** | 2D | Full game features |
| **PixiJS 8** | 2D | Rendering, UI |
| **Three.js** | 3D | Visualizations, lightweight |
| **Babylon.js 7** | 3D | Full engine, XR |

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @web-games to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @web-games against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @web-games for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @web-games using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Constraint - Strategy
- No local file access - Asset bundling, CDN
- Tab throttling - Pause when hidden
- Mobile data limits - Compress assets
- Audio autoplay - Require user interaction
- Asset compression - KTX2, Draco, WebP
- Lazy loading - Load on demand

### Imported Operating Notes

#### Imported: 3. Performance Principles

### Browser Constraints

| Constraint | Strategy |
|------------|----------|
| No local file access | Asset bundling, CDN |
| Tab throttling | Pause when hidden |
| Mobile data limits | Compress assets |
| Audio autoplay | Require user interaction |

### Optimization Priority

1. **Asset compression** - KTX2, Draco, WebP
2. **Lazy loading** - Load on demand
3. **Object pooling** - Avoid GC
4. **Draw call batching** - Reduce state changes
5. **Web Workers** - Offload heavy computation

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/game-development/web-games`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@daily-gift` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@design-taste-frontend` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 2. WebGPU Adoption

### Browser Support (2025)

| Browser | Support |
|---------|---------|
| Chrome | ✅ Since v113 |
| Edge | ✅ Since v113 |
| Firefox | ✅ Since v131 |
| Safari | ✅ Since 18.0 |
| **Total** | **~73%** global |

### Decision

- **New projects**: Use WebGPU with WebGL fallback
- **Legacy support**: Start with WebGL
- **Feature detection**: Check `navigator.gpu`

---

#### Imported: 4. Asset Strategy

### Compression Formats

| Type | Format |
|------|--------|
| Textures | KTX2 + Basis Universal |
| Audio | WebM/Opus (fallback: MP3) |
| 3D Models | glTF + Draco/Meshopt |

### Loading Strategy

| Phase | Load |
|-------|------|
| Startup | Core assets, <2MB |
| Gameplay | Stream on demand |
| Background | Prefetch next level |

---

#### Imported: 5. PWA for Games

### Benefits

- Offline play
- Install to home screen
- Full screen mode
- Push notifications

### Requirements

- Service worker for caching
- Web app manifest
- HTTPS

---

#### Imported: 6. Audio Handling

### Browser Requirements

- Audio context requires user interaction
- Create AudioContext on first click/tap
- Resume context if suspended

### Best Practices

- Use Web Audio API
- Pool audio sources
- Preload common sounds
- Compress with WebM/Opus

---

#### Imported: 7. Anti-Patterns

| ❌ Don't | ✅ Do |
|----------|-------|
| Load all assets upfront | Progressive loading |
| Ignore tab visibility | Pause when hidden |
| Block on audio load | Lazy load audio |
| Skip compression | Compress everything |
| Assume fast connection | Handle slow networks |

---

> **Remember:** Browser is the most accessible platform. Respect its constraints.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
