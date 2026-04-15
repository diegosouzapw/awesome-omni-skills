---
name: game-audio
description: "Game Audio Principles workflow skill. Use this skill when the user needs Game audio principles. Sound design, music integration, adaptive audio systems and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: content-media
tags: ["game-audio", "game", "audio", "principles", "sound", "design", "music", "integration"]
complexity: intermediate
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-15"
---

# Game Audio Principles

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/game-development/game-audio` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Game Audio Principles > Sound design and music integration for immersive game experiences. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: 1. Audio Category System, 2. Sound Design Decisions, 3. Music Integration, 4. Adaptive Audio Decisions, 5. 3D Audio Decisions, 6. Platform Considerations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- This skill is applicable to execute the workflow or actions described in the overview.
- Use when the request clearly matches the imported source intent: Game audio principles. Sound design, music integration, adaptive audio systems.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.
- Use when the workflow should remain reviewable in the public intake repo before the private enhancer takes over.

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

#### Imported: 1. Audio Category System

### Category Definitions

| Category | Behavior | Examples |
|----------|----------|----------|
| **Music** | Looping, crossfade, ducking | BGM, combat music |
| **SFX** | One-shot, 3D positioned | Footsteps, impacts |
| **Ambient** | Looping, background layer | Wind, crowd, forest |
| **UI** | Immediate, non-3D | Button clicks, notifications |
| **Voice** | Priority, ducking trigger | Dialogue, announcer |

### Priority Hierarchy

```
When sounds compete for channels:

1. Voice (highest - always audible)
2. Player SFX (feedback critical)
3. Enemy SFX (gameplay important)
4. Music (mood, but duckable)
5. Ambient (lowest - can drop)
```

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @game-audio to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @game-audio against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @game-audio for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @game-audio using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/game-development/game-audio`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: 2. Sound Design Decisions

### SFX Creation Approach

| Approach | When to Use | Trade-offs |
|----------|-------------|------------|
| **Recording** | Realistic needs | High quality, time intensive |
| **Synthesis** | Sci-fi, retro, UI | Unique, requires skill |
| **Library samples** | Fast production | Common sounds, licensing |
| **Layering** | Complex sounds | Best results, more work |

### Layering Structure

| Layer | Purpose | Example: Gunshot |
|-------|---------|------------------|
| **Attack** | Initial transient | Click, snap |
| **Body** | Main character | Boom, blast |
| **Tail** | Decay, room | Reverb, echo |
| **Sweetener** | Special sauce | Shell casing, mechanical |

---

#### Imported: 3. Music Integration

### Music State System

```
Game State → Music Response
│
├── Menu → Calm, loopable theme
├── Exploration → Ambient, atmospheric
├── Combat detected → Transition to tension
├── Combat engaged → Full battle music
├── Victory → Stinger + calm transition
├── Defeat → Somber stinger
└── Boss → Unique, multi-phase track
```

### Transition Techniques

| Technique | Use When | Feel |
|-----------|----------|------|
| **Crossfade** | Smooth mood shift | Gradual |
| **Stinger** | Immediate event | Dramatic |
| **Stem mixing** | Dynamic intensity | Seamless |
| **Beat-synced** | Rhythmic gameplay | Musical |
| **Queue point** | Next natural break | Clean |

---

#### Imported: 4. Adaptive Audio Decisions

### Intensity Parameters

| Parameter | Affects | Example |
|-----------|---------|---------|
| **Threat level** | Music intensity | Enemy count |
| **Health** | Filter, reverb | Low health = muffled |
| **Speed** | Tempo, energy | Racing speed |
| **Environment** | Reverb, EQ | Cave vs outdoor |
| **Time of day** | Mood, volume | Night = quieter |

### Vertical vs Horizontal

| System | What Changes | Best For |
|--------|--------------|----------|
| **Vertical (layers)** | Add/remove instrument layers | Intensity scaling |
| **Horizontal (segments)** | Different music sections | State changes |
| **Combined** | Both | AAA adaptive scores |

---

#### Imported: 5. 3D Audio Decisions

### Spatialization

| Element | 3D Positioned? | Reason |
|---------|----------------|--------|
| Player footsteps | No (or subtle) | Always audible |
| Enemy footsteps | Yes | Directional awareness |
| Gunfire | Yes | Combat awareness |
| Music | No | Mood, non-diegetic |
| Ambient zone | Yes (area) | Environmental |
| UI sounds | No | Interface feedback |

### Distance Behavior

| Distance | Sound Behavior |
|----------|----------------|
| **Near** | Full volume, full frequency |
| **Medium** | Volume falloff, high-freq rolloff |
| **Far** | Low volume, low-pass filter |
| **Max** | Silent or ambient hint |

---

#### Imported: 6. Platform Considerations

### Format Selection

| Platform | Recommended Format | Reason |
|----------|-------------------|--------|
| PC | OGG Vorbis, WAV | Quality, no licensing |
| Console | Platform-specific | Certification |
| Mobile | MP3, AAC | Size, compatibility |
| Web | WebM/Opus, MP3 fallback | Browser support |

### Memory Budget

| Game Type | Audio Budget | Strategy |
|-----------|--------------|----------|
| Mobile casual | 10-50 MB | Compressed, fewer variants |
| PC indie | 100-500 MB | Quality focus |
| AAA | 1+ GB | Full quality, many variants |

---

#### Imported: 7. Mix Hierarchy

### Volume Balance Reference

| Category | Relative Level | Notes |
|----------|----------------|-------|
| **Voice** | 0 dB (reference) | Always clear |
| **Player SFX** | -3 to -6 dB | Prominent but not harsh |
| **Music** | -6 to -12 dB | Foundation, ducks for voice |
| **Enemy SFX** | -6 to -9 dB | Important but not dominant |
| **Ambient** | -12 to -18 dB | Subtle background |

### Ducking Rules

| When | Duck What | Amount |
|------|-----------|--------|
| Voice plays | Music, Ambient | -6 to -9 dB |
| Explosion | All except explosion | Brief duck |
| Menu open | Gameplay audio | -3 to -6 dB |

---

#### Imported: 8. Anti-Patterns

| Don't | Do |
|-------|-----|
| Play same sound repeatedly | Use variations (3-5 per sound) |
| Max volume everything | Use proper mix hierarchy |
| Ignore silence | Silence creates contrast |
| One music track loops forever | Provide variety, transitions |
| Skip audio in prototype | Placeholder audio matters |

---

> **Remember:** 50% of the game experience is audio. A muted game loses half its soul.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
