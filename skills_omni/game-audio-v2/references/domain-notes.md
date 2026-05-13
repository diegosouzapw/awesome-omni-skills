# Game Audio Domain Notes

Use this file when the request needs stack-aware caveats or when a recommendation could change based on engine, middleware, or platform behavior.

## Quick Comparison Matrix

| Stack / area | Prefer 2D for | Prefer 3D / spatial for | Adaptive control patterns | Voice / concurrency reminders | Streaming / loading reminders | Profiling / verification |
|---|---|---|---|---|---|---|
| Engine-agnostic baseline | UI, menu feedback, non-diegetic music, must-hear confirmations | Threat direction, source location, environmental presence, navigation cues | States, parameters, sidechain ducking, bus/mixer snapshots | Protect gameplay-critical cues first; decorative layers should lose conflicts | Stream long-form music/ambience; keep short latency-sensitive cues ready | Validate in runtime gameplay density, not isolated preview |
| Unity | UI, music, always-audible game feedback | World sounds using AudioSource spatial blend and distance settings | Audio Mixer groups, exposed parameters, snapshots | Review max real voice settings and per-scene layering pressure | Choose import/load behavior intentionally for clips; long assets often need different handling than short SFX | Use runtime profiling and mixer inspection during representative play |
| Unreal Engine | UI, music, non-positional confirmations | Attenuated world audio, environmental emitters, directional threats | Sound classes/mixes, MetaSounds or system logic, parameterized states | Use concurrency rules intentionally for repeated one-shots and barks | Check stream-caching and asset behavior under real level loads | Inspect with runtime audio debugging and profiling tools, not editor assumptions |
| FMOD | UI buses, music stems, persistent feedback layers | Event instances where source placement matters | Parameters, snapshots, VCAs, event state logic | Set event priorities and polyphony limits so key cues survive | Review sample-data loading versus streaming strategy per event type | Profile live event counts, virtualization, and parameter transitions |
| Wwise | UI buses, music segments, non-diegetic layers | Positioned events, emitters, geometry-aware scenarios where configured | States, switches, RTPCs, buses, ducking, music systems | Manage virtual voices, priorities, and limits explicitly | Differentiate streamed long-form assets from resident short cues | Verify with runtime profiling for voices, streams, and state changes |
| Apple spatial-audio / PHASE contexts | UI and global feedback that must remain stable | Spatial scenes where platform rendering and listener context matter | Scene or event logic layered above spatial rendering | Do not assume middleware and platform spatialization stacks behave identically | Test real device behavior, not simulator-only assumptions | Validate on target Apple hardware with the intended output mode |

## Practical Heuristics

### 1) 2D vs 3D decisions

Use **2D** when:
- the sound must always be understood immediately
- it represents interface confirmation or abstract game state
- it is non-diegetic music
- spatial placement adds confusion rather than meaning

Use **3D / spatial** when:
- the player benefits from locating the sound source
- distance, elevation, or direction affect gameplay
- the sound is diegetic and presence matters
- environmental motion or world placement is part of the experience

Use **hybrid treatment** when:
- a cue has both world source and readability needs
- the system uses a 3D source plus a controlled 2D reinforcement layer
- radio or narration may be diegetic in some states and global in others

### 2) Adaptive-system patterns that age well

Prefer:
- a small number of meaningful states
- one or two gameplay-driven continuous parameters
- explicit transitions for exploration, tension, combat, fail, and recovery
- mixer or bus changes that preserve intelligibility of critical cues

Avoid:
- many overlapping booleans with unclear priority
- music transitions on noisy low-value events
- letting every system drive audio independently without arbitration

### 3) Voice-budget reminders

Protect first:
- player damage, healing, hit confirm, parry, reload-empty, low-health, objective updates
- threat telegraphs that change outcomes
- dialogue required to complete tasks
- UI confirmations that prevent user error

Limit first:
- repeated crowd barks
- distant weapon tails
- decorative debris one-shots
- dense ambience layers that do not change player decisions

### 4) Streaming and memory reminders

Usually stream or partially stream:
- long music stems
- long ambience beds
- voice-over libraries that are large and not all needed simultaneously

Usually keep ready or resident when latency matters:
- UI clicks and confirms
- short weapon transients
- player movement and contact essentials
- state-change stingers that must trigger immediately

Always verify on target-like hardware because defaults and cache behavior vary.

### 5) Runtime validation checklist

Before shipping or final sign-off, verify:
- peak voice counts during combat, traversal, menus, and failure loops
- whether critical cues are masked by music or ambience
- whether state transitions flap too often
- whether streaming causes delay or stutter at scene starts
- whether subtitles, captions, or visual cue alternatives cover critical information
- whether headphone and TV/speaker playback both preserve readability

### 6) Accessibility defaults

Treat these as baseline recommendations, not stretch goals:
- separate volume controls for music, SFX, dialogue or voice, and UI where scope allows
- subtitles or captions for spoken information relevant to play
- non-audio reinforcement for gameplay-critical cues
- avoid making success depend only on subtle stereo or spatial distinctions
- test low-volume and non-headphone scenarios early

### 7) Platform and stack caution notes

- Do not assume editor playback equals runtime behavior.
- Do not assume one middleware's priority, virtualization, or streaming behavior maps directly to another.
- Do not assume platform-managed spatial rendering behaves identically across devices or output modes.
- If the implementation target is unknown, present engine-agnostic advice first and isolate stack-specific suggestions under clearly labeled assumptions.
