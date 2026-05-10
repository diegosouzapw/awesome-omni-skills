---
name: "game-art"
description: "Game Art Principles workflow skill. Use this skill when the user needs game art principles: visual style selection, asset pipeline decisions, animation workflow, and production-aware art direction that can ship. Preserve upstream intent and provenance when handing off or merging."
version: "0.0.1"
category: "cli-automation"
tags:
  - "game-art"
  - "game"
  - "art"
  - "art-direction"
  - "asset-pipeline"
  - "animation"
  - "style-guide"
  - "production"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "Unknown"
date_added: "2026-04-15"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "game-art"
family_name: "Game Art Principles"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/game-art"
upstream_skill: "skills/game-art"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "game-art"
---

# Game Art Principles

## Overview

This skill preserves the upstream intent of **game art principles** while making it operational for production use. Use it to turn a vague art-direction request into a concrete, shippable plan covering:

- visual style selection
- readability and camera constraints
- resolution and scale rules
- asset naming and organization
- texture, atlas, and import decisions
- animation workflow and reuse
- accessibility and UI legibility checks

This is **not** a drawing tutorial. It is a workflow for deciding **how art should be made and integrated** so the project stays consistent, readable, and technically manageable.

## When to Use

Use this skill when the request is about defining or reviewing **how game art should be structured**, not just whether something “looks cool.”

Typical triggers:

- choosing between pixel art, hand-painted 2D, stylized 3D, or realistic 3D
- creating an art direction brief that engineering and content teams can execute
- defining asset pipeline rules before large-scale production begins
- reviewing import, atlas, naming, scale, or animation decisions that are causing inconsistency
- checking whether an art style fits camera distance, target platform, memory budget, or accessibility needs
- converting a loose creative request into concrete rules for artists, animators, and integrators

Do **not** use this skill as the primary tool when:

- the user wants engine-specific rendering code or shaders only
- the task is concept art critique without pipeline implications
- the task is purely audio, narrative, or level design
- the user needs legal licensing review for outsourced art

## Inputs to Collect First

Before recommending a style or pipeline, collect the minimum production context:

1. **Game type and camera**: side-view, top-down, isometric, first-person, third-person, UI-heavy, etc.
2. **Target platforms**: mobile, PC, console, web, handheld.
3. **Performance and memory constraints**: especially for mobile, VR, or large open worlds.
4. **Core readability needs**: combat clarity, interactable highlighting, enemy silhouette needs, UI density.
5. **Content scale**: rough count of characters, props, environments, VFX, and UI assets.
6. **Animation model**: frame-by-frame, cutout/2D rig, skeletal 3D, shared skeletons, procedural layers.
7. **Toolchain expectations**: Unity, Unreal, Blender-centered workflows, or mixed pipelines.
8. **Accessibility goals**: color-blind safety, contrast, text legibility, input/UI navigation clarity.

If these are unknown, state assumptions explicitly before proposing a pipeline.

## Workflow

1. **Define the visual target in production terms**
   - Name the intended look plainly: for example, “low-resolution pixel art for a fixed orthographic camera” or “stylized 3D with readable silhouettes at mid-distance.”
   - Tie style to constraints, not only taste.
   - Capture the desired emotional tone, but also the technical consequences.

2. **Lock camera, readability, and interaction priorities**
   - Identify the normal viewing distance and object density on screen.
   - Decide what must remain readable first: player, enemies, hazards, pickups, interactables, text, or minimap markers.
   - Reject styles that depend on detail the player will never see at gameplay distance.

3. **Set resolution and scale rules before asset production**
   - Define base unit conventions for world scale, sprite density, texel density, or target texture ranges.
   - Decide whether the project needs strict pixel-perfect presentation, flexible scaling, or cinematic detail.
   - Ensure environment props, characters, VFX, and UI obey the same scale language.

4. **Choose asset structure and import rules**
   - Specify naming conventions, folder layout, atlas strategy, texture compression expectations, and import defaults.
   - Decide which assets can be packed together and which must stay separate for streaming, modularity, or UI updates.
   - Include source-of-truth rules for editable files versus exported runtime files.

5. **Design the animation workflow around reuse**
   - Decide whether characters share skeletons, controllers, rigs, naming patterns, or export settings.
   - Prefer reusable skeletons and retarget-friendly setups when many similar characters are expected.
   - Note engine import caveats early so animators do not create assets that are expensive to integrate later.

6. **Apply color, contrast, and accessibility checks**
   - Verify that critical game states are not communicated by hue alone.
   - Check UI and gameplay art for contrast and legibility under realistic screen conditions.
   - Confirm that highlights, warnings, health states, and interactables still read for color-blind users.

7. **Document anti-patterns and acceptance rules**
   - List what should be avoided: mixed scale systems, inconsistent silhouettes, unreadable effects, untracked naming variants, or oversized textures.
   - Convert the chosen direction into reviewable rules that other contributors can follow.

8. **Produce the handoff brief**
   - Deliver a concise art-direction summary with style choice, constraints, scale, pipeline, animation, accessibility, and approval criteria.
   - If the repository includes upstream support files or provenance material, preserve those during merge or handoff.

## Output Format

A good final answer from this skill usually contains:

- **Recommended style direction**
- **Why it fits the game and platform constraints**
- **Resolution / scale rules**
- **Asset pipeline rules**
- **Animation approach**
- **Accessibility and readability checks**
- **Top risks and anti-patterns**
- **A short implementation checklist**

## Examples

### Example 1: Style recommendation for a mobile action game

**Input**
```text
Game: top-down mobile action roguelite
Platforms: iOS and Android
Camera: distant, always moving
Needs: readable enemies, fast combat clarity, many repeated props
Team: 2 artists, 1 animator
```

**Recommended output**
```text
Choose stylized 2D with simplified shapes and high silhouette contrast.
Avoid detail-heavy painted textures because gameplay distance is too far to reward them.
Use a limited palette with strong value separation between player, enemies, hazards, and pickups.
Atlas repeated environment props by biome.
Keep VFX shapes bold and short-lived so they do not hide enemy attacks.
Prefer cutout or lightweight skeletal animation for reusable enemies and UI-adjacent character motion.
```

### Example 2: Scale rule decision for pixel art

**Input**
```text
Game: side-view platformer
Art direction: pixel art
Problem: character, tiles, and UI mockups were created at different pixel densities
```

**Recommended output**
```text
Stop new asset production until a base pixel density is defined.
Set one character reference sheet and one tile-size rule as the project anchor.
Require environment tiles, props, and effects to match that density.
Keep UI either intentionally pixel-matched or intentionally separated as higher-resolution interface art; do not mix by accident.
```

### Example 3: Animation reuse plan for 3D NPCs

**Input**
```text
Game: third-person RPG
Need: 20 humanoid NPC variants with similar movement
```

**Recommended output**
```text
Adopt a shared humanoid skeleton and consistent bone naming before authoring variants.
Retarget common locomotion and idle sets rather than animating each NPC from scratch.
Define export settings and validation checks once, then require all variants to conform.
Reserve unique animation work for hero characters and special interactions only.
```

For a longer worked example with concrete decision tables, open [`examples/worked-example.md`](examples/worked-example.md).

## Best Practices

- **Do** choose style based on camera distance, gameplay density, and production capacity.
- **Do** define scale, texel density, or pixel density before content volume grows.
- **Do** establish folder, naming, and export rules before multiple contributors start producing assets.
- **Do** treat atlas and import settings as design decisions, not cleanup work for later.
- **Do** plan animation reuse early when many related characters or props exist.
- **Do** evaluate color and contrast under actual gameplay conditions, not only isolated mockups.
- **Do** preserve provenance and existing upstream support files when the task is an enhancement or handoff.

- **Do not** approve a style that depends on fine texture detail when the gameplay camera is far away.
- **Do not** let each artist invent their own scale or naming rules.
- **Do not** mix realistic materials, exaggerated silhouettes, and conflicting UI styles without a deliberate system.
- **Do not** rely only on color to indicate team, danger, rarity, or interaction state.
- **Do not** create unique skeletons or export settings per character unless there is a strong reason.
- **Do not** postpone import and packing policy until after hundreds of assets already exist.

## Troubleshooting

**Symptoms:** The art looks good in mockups but unreadable during gameplay.

**Solution:** Re-check gameplay camera distance, movement speed, object overlap, and silhouette contrast. Simplify shapes, increase value separation, and remove detail that does not survive at runtime scale.

**Symptoms:** Assets feel inconsistent even though individual pieces are high quality.

**Solution:** Audit scale, line weight, texture treatment, palette range, and naming/export conventions. Inconsistency usually comes from missing production rules, not lack of artistic effort.

**Symptoms:** UI and world art clash visually.

**Solution:** Decide whether UI should share the world style or intentionally sit above it. Align typography, icon treatment, contrast targets, and scale logic instead of letting UI evolve independently.

**Symptoms:** Import settings and atlases keep changing late in production.

**Solution:** Move import defaults, atlas policy, and source/export ownership into the project brief. Late churn here usually signals that the pipeline was never defined clearly enough.

**Symptoms:** Animation integration is slow and brittle.

**Solution:** Standardize skeletons, naming, export settings, and clip ownership. Reduce one-off rigs where reuse is expected. Validate engine import assumptions before expanding content production.

**Symptoms:** Players miss hazards or interactables.

**Solution:** Increase silhouette distinction, motion cues, contrast, and placement logic. Confirm that critical states are readable without relying only on hue.

## Additional Resources

- [`references/domain-notes.md`](references/domain-notes.md) — open this for compact engine- and pipeline-oriented notes on atlas policy, naming, redirector cleanup, scale systems, accessibility checks, and animation import caveats.
- [`examples/worked-example.md`](examples/worked-example.md) — open this when you need a concrete before/after transformation from vague art request to production-ready brief.

## Related Skills

No verified related local skills were provided in the source context.
