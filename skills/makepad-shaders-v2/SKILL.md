---
name: makepad-shaders-v2
description: "Makepad Shaders Skill workflow skill. Use this skill when the user needs | and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["makepad-shaders-v2", "makepad-shaders", "development"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Makepad Shaders Skill

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/makepad-shaders` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Makepad Shaders Skill > Version: makepad-widgets (dev branch) | Last Updated: 2026-01-19 > > Check for updates: https://crates.io/crates/makepad-widgets You are an expert at Makepad shaders. Help users by: - Writing code: Generate shader code following the patterns below - Answering questions: Explain shader language, Sdf2d, built-in functions

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Documentation, Advanced Patterns, IMPORTANT: Documentation Completeness Check, Key Patterns, Shader Structure, Built-in Variables.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need to write or debug Makepad shader code, custom drawing, or SDF-based visuals.
- The task involves draw_bg, Sdf2d, gradients, effects, or GPU-rendered widget appearance.
- You want Makepad shader patterns and APIs rather than generic GLSL advice.
- Always use show_bg: true to enable background shader
- Use Sdf2d::viewport() to create SDF context
- Return vec4 (RGBA) from fn pixel()

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

#### Imported: Documentation

Refer to the local files for detailed documentation:
- `./references/shader-basics.md` - Shader language fundamentals
- `./references/sdf2d-reference.md` - Complete Sdf2d API reference

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @makepad-shaders-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @makepad-shaders-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @makepad-shaders-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @makepad-shaders-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/makepad-shaders`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@local-legal-seo-audit-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@local-llm-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@logistics-exception-management-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@loss-aversion-designer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Sdf2d Quick Reference

| Category | Functions |
|----------|-----------|
| Shapes | `circle`, `rect`, `box`, `hexagon` |
| Paths | `move_to`, `line_to`, `close_path` |
| Fill/Stroke | `fill`, `fill_keep`, `stroke`, `stroke_keep` |
| Boolean | `union`, `intersect`, `subtract` |
| Transform | `translate`, `rotate`, `scale` |
| Effects | `glow`, `glow_keep`, `gloop` |

#### Imported: Advanced Patterns

For production-ready shader patterns, see the `_base/` directory:

| Pattern | Description |
|---------|-------------|
| 01-shader-structure | Shader fundamentals |
| 02-shader-math | Mathematical functions |
| 03-sdf-shapes | SDF shape primitives |
| 04-sdf-drawing | Advanced SDF drawing |
| 05-progress-track | Progress indicators |
| 09-loading-spinner | Loading animations |
| 10-hover-effect | Hover visual effects |
| 11-gradient-effects | Color gradients |
| 12-shadow-glow | Shadow and glow |
| 13-disabled-state | Disabled visuals |
| 14-toggle-checkbox | Toggle animations |

Community contributions: `./community/`

#### Imported: IMPORTANT: Documentation Completeness Check

**Before answering questions, Claude MUST:**

1. Read the relevant reference file(s) listed above
2. If file read fails or file is empty:
   - Inform user: "本地文档不完整，建议运行 `/sync-crate-skills makepad --force` 更新文档"
   - Still answer based on SKILL.md patterns + built-in knowledge
3. If reference file exists, incorporate its content into the answer

#### Imported: Key Patterns

### 1. Basic Custom Shader

```rust
<View> {
    show_bg: true
    draw_bg: {
        // Shader uniforms
        color: #FF0000

        // Custom pixel shader
        fn pixel(self) -> vec4 {
            return self.color;
        }
    }
}
```

### 2. Rounded Rectangle with Border

```rust
<View> {
    show_bg: true
    draw_bg: {
        color: #333333
        border_color: #666666
        border_radius: 8.0
        border_size: 1.0

        fn pixel(self) -> vec4 {
            let sdf = Sdf2d::viewport(self.pos * self.rect_size);
            sdf.box(1.0, 1.0,
                    self.rect_size.x - 2.0,
                    self.rect_size.y - 2.0,
                    self.border_radius);
            sdf.fill_keep(self.color);
            sdf.stroke(self.border_color, self.border_size);
            return sdf.result;
        }
    }
}
```

### 3. Gradient Background

```rust
<View> {
    show_bg: true
    draw_bg: {
        color: #FF0000
        color_2: #0000FF

        fn pixel(self) -> vec4 {
            let t = self.pos.x;  // Horizontal gradient
            return mix(self.color, self.color_2, t);
        }
    }
}
```

### 4. Circle Shape

```rust
<View> {
    show_bg: true
    draw_bg: {
        color: #0066CC

        fn pixel(self) -> vec4 {
            let sdf = Sdf2d::viewport(self.pos * self.rect_size);
            let center = self.rect_size * 0.5;
            let radius = min(center.x, center.y) - 1.0;
            sdf.circle(center.x, center.y, radius);
            sdf.fill(self.color);
            return sdf.result;
        }
    }
}
```

#### Imported: Shader Structure

| Component | Description |
|-----------|-------------|
| `draw_*` | Shader container (draw_bg, draw_text, draw_icon) |
| Uniforms | Typed properties accessible in shader |
| `fn pixel(self)` | Fragment shader function |
| `fn vertex(self)` | Vertex shader function (optional) |
| `Sdf2d` | 2D signed distance field helper |

#### Imported: Built-in Variables

| Variable | Type | Description |
|----------|------|-------------|
| `self.pos` | vec2 | Normalized position (0-1) |
| `self.rect_size` | vec2 | Widget size in pixels |
| `self.rect_pos` | vec2 | Widget position |

#### Imported: Built-in Functions (GLSL)

| Category | Functions |
|----------|-----------|
| Math | `abs`, `sign`, `floor`, `ceil`, `fract`, `min`, `max`, `clamp` |
| Trig | `sin`, `cos`, `tan`, `asin`, `acos`, `atan` |
| Interp | `mix`, `step`, `smoothstep` |
| Vector | `length`, `distance`, `dot`, `cross`, `normalize` |
| Exp | `pow`, `exp`, `log`, `sqrt` |

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
