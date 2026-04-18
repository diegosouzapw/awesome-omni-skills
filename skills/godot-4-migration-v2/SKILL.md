---
name: godot-4-migration-v2
description: "Godot 4 Migration Guide workflow skill. Use this skill when the user needs Specialized guide for migrating Godot 3.x projects to Godot 4 (GDScript 2.0), covering syntax changes, Tweens, and exports and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["godot-4-migration-v2", "godot-4-migration", "specialized", "guide", "for", "migrating", "godot", "projects"]
complexity: beginner
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-16"
date_updated: "2026-04-16"
---

# Godot 4 Migration Guide

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/godot-4-migration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Godot 4 Migration Guide

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Key Changes, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when porting a Godot 3 project to Godot 4.
- Use when encountering syntax errors after upgrading.
- Use when replacing deprecated nodes (like Tween node vs create_tween).
- Use when updating export variables to @export annotations.
- Use when the request clearly matches the imported source intent: Specialized guide for migrating Godot 3.x projects to Godot 4 (GDScript 2.0), covering syntax changes, Tweens, and exports.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

A critical guide for developers transitioning from Godot 3.x to Godot 4. This skill focuses on the major syntax changes in GDScript 2.0, the new `Tween` system, and `export` annotation updates.

#### Imported: Key Changes

### 1. Annotations (`@`)

Godot 4 uses `@` for keywords that modify behavior.
- `export var x` -> `@export var x`
- `onready var y` -> `@onready var y`
- `tool` -> `@tool` (at top of file)

### 2. Setters and Getters

Properties now define setters/getters inline.

**Godot 3:**
```gdscript
var health setget set_health, get_health

func set_health(value):
    health = value
```

**Godot 4:**
```gdscript
var health: int:
    set(value):
        health = value
        emit_signal("health_changed", health)
    get:
        return health
```

### 3. Tween System

The `Tween` node is deprecated. Use `create_tween()` in code.

**Godot 3:**
```gdscript
$Tween.interpolate_property(...)
$Tween.start()
```

**Godot 4:**
```gdscript
var tween = create_tween()
tween.tween_property($Sprite, "position", Vector2(100, 100), 1.0)
tween.parallel().tween_property($Sprite, "modulate:a", 0.0, 1.0)
```

### 4. Signal Connections

String-based connections are discouraged. Use callables.

**Godot 3:**
```gdscript
connect("pressed", self, "_on_pressed")
```

**Godot 4:**
```gdscript
pressed.connect(_on_pressed)
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @godot-4-migration-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @godot-4-migration-v2 against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @godot-4-migration-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @godot-4-migration-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Typed Arrays

GDScript 2.0 supports typed arrays for better performance and type safety.

```gdscript
# Godot 3
var enemies = []

# Godot 4
var enemies: Array[Node] = []

func _ready():
    for child in get_children():
        if child is Enemy:
            enemies.append(child)
```

### Example 2: Awaiting Signals (Coroutines)

`yield` is replaced by `await`.

**Godot 3:**
```gdscript
yield(get_tree().create_timer(1.0), "timeout")
```

**Godot 4:**
```gdscript
await get_tree().create_timer(1.0).timeout
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use @exportrange, @exportfile, etc., for better inspector UI.
- ✅ Do: Type all variables (var x: int) for performance gains in GDScript 2.0.
- ✅ Do: Use super() to call parent methods instead of .function_name().
- ❌ Don't: Use string names for signals (emit_signal("name")) if you can use the signal object (name.emit()).
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `@export_range`, `@export_file`, etc., for better inspector UI.
- ✅ **Do:** Type all variables (`var x: int`) for performance gains in GDScript 2.0.
- ✅ **Do:** Use `super()` to call parent methods instead of `.function_name()`.
- ❌ **Don't:** Use string names for signals (`emit_signal("name")`) if you can use the signal object (`name.emit()`).

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/godot-4-migration`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** "Identifier 'Tween' is not a valid type."
**Solution:** `Tween` is now `SceneTreeTween` or just an object returned by `create_tween()`. You rarely type it explicitly, just use `var tween = create_tween()`.

## Related Skills

- `@game-design-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gdb-cli-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gdpr-data-handling-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@gemini-api-dev-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
