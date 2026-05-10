---
name: "game-audio"
description: "Game Audio Principles workflow skill. Use this skill when the user needs game audio principles, including sound design, music integration, adaptive audio systems, spatial audio, and practical runtime audio planning. Preserve upstream workflow intent, copied support files, and provenance when handing off or merging."
version: "0.0.1"
category: "content-media"
license: "CC-BY-SA-4.0"
tags:
  - "game-audio"
  - "game"
  - "audio"
  - "sound-design"
  - "adaptive-music"
  - "spatial-audio"
  - "middleware"
  - "accessibility"
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
date_added: "2026-04-15"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "game-audio"
family_name: "Game Audio Principles"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/game-audio"
upstream_skill: "skills/game-audio"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "game-audio"
---

# Game Audio Principles

## Overview

This skill preserves the intent of the upstream `game-audio` workflow while turning it into an execution-ready guide for planning, reviewing, or improving game audio systems.

Use it to make audio decisions that hold up at runtime, not just on paper. The focus is on category design, sound behavior, music integration, adaptive systems, spatial playback, mix clarity, performance budgeting, and accessibility.

This is an engine-agnostic workflow. It fits concept work, implementation planning, content review, middleware setup review, and cross-discipline alignment between design, audio, engineering, and QA.

## When to Use

Use this skill when the request involves one or more of the following:

- designing a game audio category structure
- planning sound behavior for gameplay, UI, dialogue, ambience, or cinematics
- integrating music with transitions, layers, or state-based logic
- mapping runtime audio controls such as events, parameters, states, switches, buses, snapshots, or submixes
- evaluating 3D, environmental, or perspective-based audio behavior
- reducing masking, clipping, voice theft, or mix instability
- setting audio performance and memory budgets
- improving accessibility through clarity, mix policy, and user controls

Do **not** use this skill as the primary workflow when the user needs:

- DAW-specific composition instruction
- legal advice for licensing or royalties
- plugin-specific mixing chains with no game-runtime component
- reverse engineering proprietary game assets
- engine scripting details that belong in a dedicated engine implementation skill

### Activation Checklist

Activate this skill if the answer needs at least **two** of these runtime-oriented concerns:

1. audio categories or routing
2. adaptive music or state-driven behavior
3. spatial or environmental playback
4. voice limits, priorities, or virtualization
5. runtime profiling or performance budgets
6. accessibility or user-facing audio controls

If the request is only "make this sound better" with no runtime context, ask for:

- game genre and camera perspective
- target platforms
- engine or middleware in use
- major audio categories
- whether music is static or adaptive
- current pain points such as masking, memory, transitions, or loudness swings

## Workflow

1. **Define the gameplay role of each audio system**
   - Separate the problem into SFX, dialogue, ambience, music, UI, and cinematic layers.
   - State what each layer must communicate to the player: feedback, warning, reward, orientation, mood, or narrative.
   - Identify the most important cues that must always win attention.

2. **Build a clear category and routing structure**
   - Create stable top-level groups such as `Dialogue`, `Player`, `Weapons`, `Enemies`, `UI`, `Ambience`, `Music`, and `Cinematics`.
   - Assign each group an owner, routing path, loudness intent, and ducking rules.
   - Avoid categories that describe file storage only; organize for runtime control.

3. **Design event behavior before asset volume tweaks**
   - For each sound, define trigger source, playback variation, concurrency behavior, looping rules, tails, and stop conditions.
   - Decide whether playback is one-shot, looped, layered, randomized, or state-driven.
   - Use variation and context rules to prevent repetition before reaching for heavy processing.

4. **Plan adaptive music and state ownership**
   - Decide whether adaptation is vertical, horizontal, or hybrid.
   - Define which game system owns transitions: combat state, exploration tension, boss phase, stealth visibility, or scripted sequence.
   - Keep transition authority clear. Competing systems cause music thrashing and broken pacing.

5. **Map runtime controls explicitly**
   - List required events, parameters, states, switches, buses, snapshots, submixes, or mixers.
   - For each control, define who writes it, its valid range or values, update frequency, and fallback behavior.
   - Prefer a small, meaningful parameter set over many overlapping controls.

6. **Specify spatial and environmental behavior**
   - Determine which sources are 2D, 3D, head-locked, diegetic, non-diegetic, or perspective-dependent.
   - Define distance curves, spread, occlusion, obstruction, reverb sends, and room/biome behavior.
   - Make gameplay-critical sounds remain intelligible even when realism would hide them.

7. **Set voice, memory, and CPU budgets early**
   - Define likely worst-case voice counts by category.
   - Establish priority rules for dialogue, mission-critical cues, UI alerts, and music.
   - Plan virtualization or graceful degradation before content grows beyond budget.

8. **Design accessibility and user control defaults**
   - Expose separate controls where possible for master, music, SFX, dialogue, and UI.
   - Protect speech intelligibility and critical warning cues.
   - Avoid relying on one frequency band, one spatial cue, or one ear-only presentation for critical information.

9. **Profile and revise with real gameplay**
   - Test in dense combat, open traversal, menus, cutscenes, and low-resource scenarios.
   - Inspect voice usage, transition stability, masking, clipping, CPU cost, and memory behavior.
   - Fix ownership, routing, and priority problems before polishing individual assets.

## Best Practices

### Do

- Design audio around player information needs, not only realism.
- Keep category names stable so engineering, content, and QA use the same language.
- Define transition ownership for adaptive music in one place.
- Reserve top priority for mission-critical dialogue and warning cues.
- Use parameter ranges with documented meaning, such as `threat = 0.0-1.0`, not vague labels.
- Test audio with typical and worst-case gameplay densities.
- Plan fallback behavior for missing states, unavailable emitters, or exceeded voice limits.
- Include accessibility review in the same pass as mix and performance review.

### Don't

- Don't let multiple systems fight over the same music state or snapshot.
- Don't solve every mix issue by raising gain; fix routing, masking, and priority first.
- Don't create dozens of near-duplicate parameters for slightly different contexts.
- Don't hide critical cues behind distance attenuation or environmental effects without override rules.
- Don't ship category structures that match folders but offer no runtime control.
- Don't assume headphone-focused spatial design works equally well on TV speakers, handheld devices, or accessibility modes.

## Examples

### Example 1: Runtime audio plan for a third-person action game

```yaml
request:
  game_type: third-person action
  platforms: [PC, PS5, Xbox Series]
  engine: Unreal + Wwise
  problem: combat sounds chaotic, music transitions feel abrupt, dialogue gets buried

recommended_plan:
  categories:
    - Dialogue
    - Player
    - Enemies
    - Weapons
    - UI
    - Ambience
    - Music
  priority_rules:
    dialogue: highest
    ui_critical: high
    player_feedback: high
    ambience: medium
    debris_detail: low
  adaptive_music:
    approach: hybrid
    states: [exploration, tension, combat, boss]
    owner: gameplay_state_manager
    transition_rule: combat exits require 3s cooldown before exploration can resume
  runtime_controls:
    parameters:
      threat: 0.0-1.0
      player_health: 0.0-1.0
    events:
      - play_combat_music
      - stop_combat_music
      - duck_music_for_dialogue
  expected_result:
    - dialogue remains intelligible during combat
    - music stops thrashing between states
    - low-priority detail sounds virtualize first
```

### Example 2: Before/after category design

```text
Before
- SFX1
- SFX2
- Misc
- Foley
- Music
- Voice

Problems
- no routing intent
- no ownership
- impossible to set meaningful priorities
- UI and gameplay compete in the same groups

After
- Dialogue
- UI
- Player_Foley
- Player_Abilities
- Enemy_Attacks
- World_Interactables
- Ambience
- Music

Expected behavior
- dialogue bus can duck music and ambience
- UI alerts stay audible regardless of combat density
- enemy attack cues can outrank low-value world detail
```

### Example 3: Adaptive music decision note

```json
{
  "goal": "Increase tension as enemies detect the player without hard cuts every second.",
  "bad_design": {
    "owner": "enemy_ai + ui_alert_system + level_script",
    "result": "competing transitions and repeated restarts"
  },
  "better_design": {
    "owner": "music_state_controller",
    "inputs": ["alert_level", "combat_active", "boss_phase"],
    "transition_rules": [
      "combat enters immediately when combat_active = true",
      "combat exits only after 3 seconds below alert threshold",
      "boss phase overrides all non-failure states"
    ],
    "expected_result": "stable transitions and readable pacing"
  }
}
```

## Troubleshooting

**Symptoms:** Dialogue disappears when combat intensifies or music swells.

**Solution:** Raise dialogue priority, verify dialogue routing, apply controlled ducking to music and dense SFX buses, and remove conflicting wideband content around the speech range from non-critical layers.

**Symptoms:** Adaptive music keeps restarting, flickering, or jumping between sections.

**Solution:** Assign one system as transition owner, add cooldown or hysteresis rules, reduce duplicate triggers, and document override precedence for combat, boss, fail, and cinematic states.

**Symptoms:** Important gameplay cues vanish in crowded scenes.

**Solution:** Review voice limits, per-category concurrency, and priority rules. Let low-value detail virtualize or drop first, not mission-critical cues.

**Symptoms:** 3D sounds feel realistic but gameplay information becomes hard to read.

**Solution:** Relax attenuation, occlusion, or spread for gameplay-critical cues. Keep realism subordinate to readability when the sound carries player-facing information.

**Symptoms:** Repetition makes weapons, footsteps, or UI feedback feel cheap.

**Solution:** Add variation at the event level through random containers, pitch or start-offset ranges, layered alternates, or contextual switching instead of duplicating the same file everywhere.

**Symptoms:** Mix sounds balanced in editor preview but fails during real gameplay.

**Solution:** Test with live gameplay states, not isolated audition. Profile worst-case scene density, menu overlays, and transition-heavy sequences.

**Symptoms:** Audio CPU or memory spikes late in production.

**Solution:** Re-check streaming strategy, voice counts, effect usage, and unnecessary simultaneous layers. Cut inaudible complexity before optimizing high-value cues.

**Symptoms:** Accessibility feedback says players miss critical cues.

**Solution:** Add stronger category controls, clearer dialogue presence, redundant cue channels where possible, and avoid encoding vital information only in subtle spatial placement or narrow-band effects.

## Additional Resources

- [Engine and middleware domain notes](references/domain-notes.md) - Open this when you need concept mapping across Wwise, FMOD, Unity, Unreal, accessibility guidance, and spatial-audio terminology.
- [Worked example](examples/worked-example.md) - Open this when you need a concrete end-to-end example of turning a vague game-audio request into a runtime-ready plan.

## Related Skills

No confirmed local related skills were provided in the source context. Add links here only when repository-local companion skills are known.

## Provenance Notes

This enhanced version keeps the identity and scope of the upstream `game-audio` skill while improving operational guidance for runtime game-audio planning. Preserve copied support files and provenance records if this skill is merged or handed off downstream.
