# Game Audio Domain Notes

Use this reference when the main skill is not enough and you need a compact concept crosswalk across common game-audio tools and platform guidance.

## Core Concept Crosswalk

| Design intent | Wwise-style term | FMOD-style term | Unity-style term | Unreal-style term | Practical note |
|---|---|---|---|---|---|
| Trigger playback | Event | Event | Play call / Audio Source trigger / Timeline signal | Audio component trigger / MetaSound trigger / Cue trigger | Keep gameplay event names stable and semantic. |
| Continuous runtime value | RTPC / Game parameter | Parameter | Exposed parameter / script-driven value / mixer parameter | Parameter / control input | Document owner, range, and update frequency. |
| Discrete game mode | State / Switch | Parameter with discrete values or event logic | Script state + mixer snapshot / state machine | Gameplay state + sound mix/submix logic / MetaSound logic | Use one authority for state changes. |
| Routing layer | Bus / Auxiliary bus | Bus / VCA | Audio Mixer group | Submix / bus | Routing should match runtime control needs, not folder layout. |
| Temporary mix change | State-driven mix / ducking setup | Snapshot / automation | Snapshot | Sound mix / submix automation | Avoid having many systems trigger contradictory mix changes. |
| Voice management | Priority / virtual voice behavior | Priority / polyphony / virtualization | Priority / max voices behavior | Concurrency / priority / virtualization behavior | Protect dialogue and critical cues first. |
| Music assembly | Interactive Music Hierarchy | Event + parameter timeline logic | Timeline + mixer + scripting | Quartz / MetaSound / Sequencer / Blueprint logic | Choose one transition owner. |

## Adaptive Music Patterns

### Vertical layering

Use when intensity should rise smoothly without changing the current musical section.

Good for:
- combat escalation
- stealth tension growth
- exploration layers that thicken near threats

Watch for:
- too many simultaneous layers increasing CPU and masking
- layers that sound incomplete when heard alone
- abrupt mute/unmute instead of musically aligned transitions

### Horizontal re-sequencing

Use when the game needs distinct sections, such as exploration, combat, boss, fail, or victory.

Good for:
- clean structural changes
- authored transitions and stingers
- branching based on mission state

Watch for:
- repeated restarts from duplicate triggers
- no cooldown or hysteresis between states
- multiple systems trying to own the transition graph

### Hybrid approach

Use when sections define mode and layers define intensity inside the mode.

Good for:
- action-adventure
- RPG combat escalation
- dynamic open-world encounters

Watch for:
- unclear precedence between section changes and layer changes
- too many parameters controlling the same musical perception

## Runtime Control Checklist

For every event, parameter, state, switch, or snapshot, define:

- **Owner:** which gameplay or UI system writes it
- **Range or values:** numeric range or allowed discrete values
- **Update timing:** on change, per frame, debounced, or at checkpoints
- **Fallback:** what happens if no value arrives
- **Observability:** how QA or profiling can verify it changed correctly

Bad pattern:
- `intensity`, `danger`, `combatLevel`, and `stress` all trying to express the same thing

Better pattern:
- one `threat` parameter with documented meaning
- one `combat_active` state
- one music controller responsible for transition decisions

## Routing and Priority Notes

A practical top-level bus structure usually includes:

- Master
- Dialogue
- UI
- Music
- Ambience
- Player
- Enemies
- World
- Cinematics

Useful priority guidance:

- **Highest:** critical dialogue, failure warnings, accessibility-critical UI alerts
- **High:** player feedback, incoming threat indicators, objective cues
- **Medium:** enemy detail, environmental interactions, non-critical UI
- **Low:** decorative debris, distant detail, duplicate low-information layers

If voice counts spike:
- virtualize or cull decorative layers first
- preserve tails only when they matter perceptually
- reduce duplicate emitters in dense scenes

## Spatial and Environmental Notes

Questions to answer before implementation:

- Is the source diegetic or non-diegetic?
- Must the player localize it precisely, or only notice its presence?
- Should it remain intelligible through walls, crowds, or distance?
- Is it heard in first person, third person, top-down, or mixed camera modes?
- Does the platform output path change the design, such as headphones versus TV speakers?

Practical rules:
- critical warning sounds may need less aggressive attenuation than realistic ambience
- dialogue and UI generally should not depend on precise 3D localization to remain understandable
- environmental sends should support place and scale without washing out gameplay-critical transients

## Accessibility Review Checklist

Use this as a quick pass during planning and review.

- Separate user controls for at least master, music, SFX, and dialogue when possible.
- Dialogue remains understandable during action-heavy moments.
- Critical cues are not encoded only as low-volume ambience or narrow stereo placement.
- Important information does not rely on a single frequency region that is often masked.
- Menu and UI confirmation sounds remain audible at reduced music levels.
- Accessibility-sensitive warnings are not the first sounds to be dropped under voice pressure.
- Headphone and speaker behavior are both considered if the game supports both.

## Profiling Prompts

During QA or review, ask:

- Which category reaches the highest simultaneous voice count?
- Which sounds are virtualized first, and is that acceptable?
- Do music transitions align with game state changes or oscillate around thresholds?
- Does dialogue remain clear during worst-case combat and ambient load?
- Are CPU spikes tied to layered music, convolution-style effects, or emitter density?
- Are memory spikes caused by too many preloaded assets or long simultaneous tails?

## Common Failure Patterns

1. **Folder-first organization**
   - Content is tidy on disk but impossible to control at runtime.

2. **Too many overlapping parameters**
   - Mix and music become unpredictable because several systems describe the same intensity concept.

3. **No transition owner**
   - Music and snapshots restart or flicker when gameplay systems compete.

4. **Realism over readability**
   - Critical cues become inaudible because attenuation, occlusion, or crowd detail is too aggressive.

5. **Late performance planning**
   - Audio content grows naturally until budgets are exceeded, then emergency cuts damage quality.
