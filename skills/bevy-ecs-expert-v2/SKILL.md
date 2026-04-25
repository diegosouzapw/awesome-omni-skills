---
name: bevy-ecs-expert-v2
description: "Bevy ECS Expert workflow skill. Use this skill when the user needs Master Bevy's Entity Component System (ECS) in Rust, covering Systems, Queries, Resources, and parallel scheduling and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["bevy-ecs-expert-v2", "bevy-ecs-expert", "master", "bevy", "entity", "component", "system", "ecs"]
complexity: beginner
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-19"
date_updated: "2026-04-25"
---

# Bevy ECS Expert

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/bevy-ecs-expert` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Bevy ECS Expert

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Use when developing games with the Bevy engine in Rust.
- Use when designing game systems that need to run in parallel.
- Use when optimizing game performance by minimizing cache misses.
- Use when refactoring object-oriented logic into data-oriented ECS patterns.
- Use when the request clearly matches the imported source intent: Master Bevy's Entity Component System (ECS) in Rust, covering Systems, Queries, Resources, and parallel scheduling.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Defining Components Use simple structs for data.
2. Derive Component and Reflect.
3. `rust #[derive(Component, Reflect, Default)] #[reflect(Component)] struct Velocity { x: f32, y: f32, } #[derive(Component)] struct Player; ### 2.
4. Writing Systems Systems are regular Rust functions that query components.
5. rust fn movementsystem( time: Res<Time>, mut query: Query<(&mut Transform, &Velocity), With<Player>>, ) { for (mut transform, velocity) in &mut query { transform.translation.x += velocity.x time.deltaseconds(); transform.translation.y += velocity.y time.deltaseconds(); } } ### 3.
6. Managing Resources Use Resource for global data (score, game state).
7. rust #[derive(Resource)] struct GameState { score: u32, } fn scoresystem(mut gamestate: ResMut<GameState>) { gamestate.score += 10; } ### 4.

### Imported Workflow Notes

#### Imported: Step-by-Step Guide

### 1. Defining Components

Use simple structs for data. Derive `Component` and `Reflect`.

```rust
#[derive(Component, Reflect, Default)]
#[reflect(Component)]
struct Velocity {
    x: f32,
    y: f32,
}

#[derive(Component)]
struct Player;
```

### 2. Writing Systems

Systems are regular Rust functions that query components.

```rust
fn movement_system(
    time: Res<Time>,
    mut query: Query<(&mut Transform, &Velocity), With<Player>>,
) {
    for (mut transform, velocity) in &mut query {
        transform.translation.x += velocity.x * time.delta_seconds();
        transform.translation.y += velocity.y * time.delta_seconds();
    }
}
```

### 3. Managing Resources

Use `Resource` for global data (score, game state).

```rust
#[derive(Resource)]
struct GameState {
    score: u32,
}

fn score_system(mut game_state: ResMut<GameState>) {
    game_state.score += 10;
}
```

### 4. Scheduling Systems

Add systems to the `App` builder, defining execution order if needed.

```rust
fn main() {
    App::new()
        .add_plugins(DefaultPlugins)
        .init_resource::<GameState>()
        .add_systems(Update, (movement_system, score_system).chain())
        .run();
}
```

#### Imported: Overview

A guide to building high-performance game logic using Bevy's data-oriented ECS architecture. Learn how to structure systems, optimize queries, manage resources, and leverage parallel execution.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @bevy-ecs-expert-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @bevy-ecs-expert-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @bevy-ecs-expert-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @bevy-ecs-expert-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples

### Example 1: Spawning Entities with Require Component

```rust
use bevy::prelude::*;

#[derive(Component, Reflect, Default)]
#[require(Velocity, Sprite)]
struct Player;

#[derive(Component, Default)]
struct Velocity {
    x: f32,
    y: f32,
}

fn setup(mut commands: Commands, asset_server: Res<AssetServer>) {
    commands.spawn((
        Player,
        Velocity { x: 10.0, y: 0.0 },
        Sprite::from_image(asset_server.load("player.png")),
    ));
}
```

### Example 2: Query Filters

Use `With` and `Without` to filter entities efficiently.

```rust
fn enemy_behavior(
    query: Query<&Transform, (With<Enemy>, Without<Dead>)>,
) {
    for transform in &query {
        // Only active enemies processed here
    }
}
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- ✅ Do: Use Query filters (With, Without, Changed) to reduce iteration count.
- ✅ Do: Prefer Res over ResMut when read-only access is sufficient to allow parallel execution.
- ✅ Do: Use Bundle to spawn complex entities atomically.
- ❌ Don't: Store heavy logic inside Components; keep them as pure data.
- ❌ Don't: Use RefCell or interior mutability inside components; let the ECS handle borrowing.
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

- ✅ **Do:** Use `Query` filters (`With`, `Without`, `Changed`) to reduce iteration count.
- ✅ **Do:** Prefer `Res` over `ResMut` when read-only access is sufficient to allow parallel execution.
- ✅ **Do:** Use `Bundle` to spawn complex entities atomically.
- ❌ **Don't:** Store heavy logic inside Components; keep them as pure data.
- ❌ **Don't:** Use `RefCell` or interior mutability inside components; let the ECS handle borrowing.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/bevy-ecs-expert`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting

**Problem:** System panic with "Conflict" error.
**Solution:** You are likely trying to access the same component mutably in two systems running in parallel. Use `.chain()` to order them or split the logic.

## Related Skills

- `@backend-dev-guidelines-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@backend-development-feature-development-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@backend-security-coder-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@backtesting-frameworks-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |
