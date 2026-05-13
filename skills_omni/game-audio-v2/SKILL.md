---
name: "game-audio-v2"
description: "Game Audio Principles workflow skill. Use this skill when the user needs practical game-audio guidance for sound design, music integration, adaptive systems, spatial audio, performance, and accessibility while preserving upstream provenance and workflow intent."
version: "0.0.1"
category: "content-media"
tags:
  - "game-audio-v2"
  - "game-audio"
  - "game"
  - "audio"
  - "sound-design"
  - "music"
  - "adaptive-audio"
  - "spatial-audio"
  - "accessibility"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
license: "Unknown"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-16"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "game-audio-v2"
family_name: "Game Audio Principles"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/game-audio-v2"
upstream_skill: "skills/game-audio-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "game-audio-v2"
---

# Game Audio Principles

## Overview

This skill preserves the intent of the upstream `game-audio` workflow while turning it into a practical operator guide.

Use it to plan, review, or refine game audio for:
- sound effects and gameplay feedback
- music integration and transitions
- adaptive or state-driven audio systems
- 2D versus 3D/spatial audio decisions
- performance, memory, streaming, and voice-budget tradeoffs
- accessibility defaults for gameplay-critical cues

This is a planning and review skill. It helps an operator make defensible audio decisions, produce clear recommendations, and keep provenance intact. It is not a DAW tutorial, a middleware certification guide, or a substitute for engine-specific implementation documentation.

## When to Use

Use this skill when the request involves one or more of the following:
- designing an audio approach for a game feature, level, character, or platform
- deciding whether sounds should be 2D, 3D, music-driven, ambient, dialogue, or runtime-reactive
- reviewing an audio system for clarity, immersion, performance, or accessibility
- planning adaptive music, state-based mixing, or parameter-driven changes
- identifying likely engine or middleware constraints before implementation
- producing an audio review checklist, design recommendation, or implementation brief

Do **not** use this skill as the primary workflow when the request is mainly about:
- composing music or writing lyrics
- detailed DAW editing, mastering chains, or plugin recommendations
- legal licensing advice for music or voice assets
- reverse engineering proprietary middleware setups without documentation
- inventing engine features, undocumented APIs, or platform behavior

### Activation Checklist

Activate this skill only if the operator can answer **yes** to at least one of these:
1. Is the user asking for game-audio design, review, or implementation guidance?
2. Does the task require classifying sounds into functional categories such as UI, Foley, ambience, dialogue, music, or reactive layers?
3. Does the task involve spatialization, voice limits, streaming, mixing states, or runtime adaptation?
4. Is accessibility for gameplay-critical audio cues in scope?
5. Is the output expected to be a concrete recommendation rather than abstract audio theory?

If most answers are **no**, use a more specific music-production, engine-implementation, or accessibility skill instead.

## Workflow

1. **Define the gameplay purpose**
   - Identify what the player must learn, feel, or react to.
   - Separate informational cues from emotional or decorative audio.
   - Note whether failure to hear a cue would affect playability, fairness, or comprehension.

2. **Classify each sound role**
   - Bucket requested sounds into: UI, feedback, Foley, weapons/abilities, ambience, dialogue, music, cinematics, and runtime-reactive layers.
   - Mark each bucket as primarily **2D**, **3D**, or **hybrid**.
   - Flag sounds that must remain intelligible during heavy mix conditions.

3. **Choose the adaptation model**
   - For simple cases, use discrete states or mixer snapshots.
   - For richer behavior, use parameters such as combat intensity, stealth level, biome, health, or narrative phase.
   - Keep the number of exposed states manageable and tied to gameplay, not to arbitrary audio wishes.

4. **Check implementation constraints early**
   - Determine whether the target stack is engine-native audio, FMOD, Wwise, Apple PHASE, or a mixed setup.
   - Confirm likely constraints for streaming, voice limits, concurrency, spatialization, and profiling.
   - If the implementation target is unknown, provide engine-agnostic guidance first and isolate any stack-specific assumptions.

5. **Set performance and memory expectations**
   - Identify long-form assets that should likely stream rather than fully preload.
   - Identify short, latency-sensitive assets that should likely remain memory-resident.
   - Define a rough voice-budget strategy: protected critical cues, limited ambience layers, controlled one-shot bursts, and explicit concurrency rules.

6. **Apply accessibility as a default gate**
   - Ensure gameplay-critical audio has a visual, textual, or haptic companion path where feasible.
   - Recommend separate volume controls for music, SFX, dialogue/voice, and UI when the game scope supports them.
   - Treat subtitle or caption strategy as part of the system design, not a post-production extra.

7. **Review spatial-audio choices**
   - Use 3D/spatial audio when source location matters to play, navigation, threat detection, or presence.
   - Prefer 2D for UI, non-diegetic music, menu feedback, and cues that must always be clearly heard.
   - Be explicit about falloff, occlusion assumptions, listener context, and platform-managed spatial behavior.

8. **Validate at runtime, not just in editor previews**
   - Check profiling or runtime-debug tooling for voice counts, stream/cache behavior, and mix state transitions.
   - Test in representative gameplay density: combat, menus, traversal, cutscenes, and failure/retry loops.
   - Verify that important cues still read under stress, not only in isolated auditioning.

9. **Produce the recommendation**
   - Summarize category decisions, adaptation logic, performance assumptions, accessibility defaults, and unresolved risks.
   - Separate confirmed facts from assumptions.
   - Preserve upstream provenance and copied support-file context if the task includes repository handoff or editorial merge.

## Examples

### Example 1: Audio classification for a stealth encounter

**Input**
```text
We are building a stealth mission in a museum. The player must hear guard footsteps, alarm panels, radio chatter, and a music shift when discovered. We also need a hint sound when the player is hidden.
```

**Recommended output**
```text
Classification:
- Guard footsteps: 3D, gameplay-critical, priority-protected, moderate variation set
- Alarm panels: 3D if world-placed, with strong visual companion indicator
- Radio chatter: hybrid; 3D if diegetic from guards, 2D if used as mission-wide status narration
- Discovery music shift: 2D music layer or snapshot-driven transition
- Hidden-state hint: 2D or lightly spatialized UI-style confirmation, must stay intelligible

Adaptive logic:
- Parameter: stealth_state = hidden / suspicious / detected
- Music changes only on meaningful state transitions
- Mixer snapshot reduces ambience and raises guard-detail band during suspicious state

Accessibility:
- Hidden/detected states also shown visually
- Alarm status has subtitle/text or icon support
```

### Example 2: Performance review for a combat scene

**Input**
```text
Combat audio feels messy on console. There are many enemies, layered weapon tails, UI pings, music stems, and voice lines.
```

**Recommended output**
```text
Review focus:
- Protect UI confirmation, player damage, and critical enemy telegraphs
- Add concurrency limits for repeated enemy barks and tail-heavy weapon layers
- Stream long music stems; keep short hit-confirm assets memory-resident
- Verify runtime voice counts during peak combat instead of trusting editor playback
- Reduce decorative layers before reducing gameplay-informational cues
```

For a longer worked scenario, open [`examples/worked-example.md`](examples/worked-example.md).

## Best Practices

- **Do** start from gameplay function; **do not** start from “what sounds cool” in isolation.
- **Do** classify sounds before discussing implementation; **do not** mix UI, music, ambience, and critical telegraphs into one vague bucket.
- **Do** keep adaptive logic tied to real game states or parameters; **do not** create too many fragile micro-states.
- **Do** reserve 3D/spatial audio for location-relevant sounds; **do not** spatialize everything by default.
- **Do** protect intelligibility of critical cues with priority, ducking, or voice-budget rules; **do not** let decorative layers mask gameplay information.
- **Do** choose streaming versus preload behavior intentionally; **do not** assume all assets can be treated the same.
- **Do** test on target-like hardware and in dense gameplay; **do not** rely only on isolated editor preview or headphones in a quiet room.
- **Do** make accessibility part of the first-pass design; **do not** treat subtitles, volume separation, or non-audio alternatives as optional polish.
- **Do** document assumptions about engine, middleware, and platform behavior; **do not** present stack-specific advice as universal truth.
- **Do** preserve provenance when packaging or handing off upstream-derived content; **do not** remove source context.

## Troubleshooting

**Symptoms:** Important cues disappear during combat or crowded scenes.  
**Solution:** Review voice limits, concurrency groups, and priority rules first. Protect player feedback, threat telegraphs, UI confirmations, and dialogue needed for play. Reduce decorative one-shots and ambience before cutting critical cues.

**Symptoms:** Music transitions feel arbitrary or overactive.  
**Solution:** Reduce the number of adaptive triggers. Tie transitions to meaningful state changes such as exploration, tension, combat, victory, or narrative phase. Prefer a small parameter model over many loosely defined booleans.

**Symptoms:** Spatial audio feels confusing or inconsistent across platforms.  
**Solution:** Re-check which sounds truly need world positioning, verify listener assumptions, and confirm whether the target platform or middleware manages parts of the spatialization pipeline differently. Keep UI and must-hear feedback non-spatial when clarity matters more than placement.

**Symptoms:** Memory or load spikes occur when scenes start.  
**Solution:** Review which assets are long-form and should stream versus which are short and latency-sensitive and should stay resident. Inspect cache/stream behavior at runtime instead of assuming import defaults are correct.

**Symptoms:** Players miss crucial information when playing with low volume, no headphones, or hearing limitations.  
**Solution:** Add or strengthen visual/text alternatives for gameplay-critical cues, provide separate volume categories, and verify subtitle/caption coverage for relevant content.

**Symptoms:** Recommendations become too engine-specific before the implementation target is known.  
**Solution:** Separate universal design guidance from stack-specific notes. State assumptions explicitly and move engine or middleware caveats into a short implementation appendix or reference lookup.

## Additional Resources

- [`references/domain-notes.md`](references/domain-notes.md) — Open this when you need engine/middleware/platform caveats, runtime profiling hooks, streaming and voice-limit reminders, or accessibility defaults that should not clutter the main workflow.
- [`examples/worked-example.md`](examples/worked-example.md) — Open this when you need a full before/after style recommendation that turns a vague game-audio request into a structured review output.

## Related Skills

No related local skills were provided in the source context.
