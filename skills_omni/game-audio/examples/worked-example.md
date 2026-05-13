# Worked Example: Converting a Broad Request into a Runtime Audio Plan

## Input Request

```yaml
project:
  genre: sci-fi co-op shooter
  perspective: first-person
  platforms: [PC, Xbox Series, PS5]
  engine_stack: Unity + FMOD
request:
  summary: "Our game sounds good in isolation, but matches become messy. Players miss callouts, the music keeps changing too fast, and performance drops in big fights."
constraints:
  - 4-player co-op
  - dense combat arenas
  - voice chat may be active
  - accessibility review required before content lock
```

## Step 1: Classify the Real Problems

This is not just a sound-quality request. It includes at least five runtime concerns:

1. dialogue and callout intelligibility
2. adaptive music stability
3. voice-count and performance pressure
4. category/routing policy
5. accessibility under heavy gameplay load

The `game-audio` skill is a good fit.

## Step 2: Ask the Missing Questions

Before proposing changes, collect:

- current top-level buses or mixer groups
- whether dialogue, voice chat, and UI share routing
- current music transition owner
- current max voices and virtualization policy
- target playback setups: headset, TV speakers, soundbar
- whether accessibility sliders already exist

## Step 3: Build a Structured Audio Plan

### Proposed Categories

```yaml
categories:
  Dialogue:
    includes: [npc_speech, mission_callouts, system_callouts]
    priority: highest
  VoiceChat:
    includes: [player_voice_chat]
    priority: highest
  UI:
    includes: [menu, damage_warning, objective_confirm]
    priority: high
  Player:
    includes: [weapons, abilities, foley]
    priority: high
  Enemies:
    includes: [attacks, telegraphs, reactions]
    priority: high
  World:
    includes: [doors, machinery, interactables]
    priority: medium
  Ambience:
    includes: [wind, distant_battle, room_tone]
    priority: low_to_medium
  Music:
    includes: [exploration, tension, combat, boss]
    priority: protected_but_duckable
```

### Mix Policy

```yaml
ducking_rules:
  - when: mission_dialogue_active
    reduce: [Music, Ambience]
    amount: moderate
  - when: critical_ui_warning
    reduce: [Ambience]
    amount: light
  - when: voice_chat_detected
    reduce: [Music]
    amount: light
```

### Adaptive Music Ownership

```yaml
music_controller:
  owner: combat_director
  inputs:
    threat: 0.0-1.0
    boss_phase: [none, intro, phase1, phase2, finale]
    mission_state: [explore, tension, combat, success, fail]
  rules:
    - "combat starts when threat >= 0.6 for 1.0s"
    - "combat exits only when threat <= 0.25 for 4.0s"
    - "boss states override normal combat transitions"
    - "success and fail are terminal one-shot overrides"
```

### Performance Policy

```yaml
performance:
  likely_worst_case:
    simultaneous_players: 4
    high_threat_enemies: 20
    active_emitters: very_high
  protection_rules:
    preserve_first:
      - Dialogue
      - VoiceChat
      - critical_UI
      - enemy_attack_telegraphs
    virtualize_first:
      - distant_ambience_details
      - decorative_world_loops
      - duplicate_debris_impacts
  review_points:
    - peak voice count during boss wave
    - CPU cost of layered music plus reverb sends
    - memory impact of long looping ambiences
```

### Accessibility Policy

```yaml
accessibility:
  sliders:
    - Master
    - Dialogue
    - Music
    - SFX
    - VoiceChat
  checks:
    - "mission callouts remain understandable during peak combat"
    - "critical warnings are audible on stereo speakers and headphones"
    - "important cues do not rely only on rear spatialization"
```

## Step 4: Convert the Plan into Operator Output

A good final response to the user would say:

> Your main issue is not asset quality; it is runtime control. Rework the mix around protected dialogue and callout routing, assign one owner for music transitions, set explicit voice-protection rules, and profile worst-case combat instead of isolated audio previews.

## Step 5: Expected Before/After Outcome

### Before

- dialogue and mission callouts compete with music and ambience
- combat music flickers because several systems can trigger transitions
- dense encounters exceed comfortable voice counts
- accessibility depends on ideal playback conditions

### After

- dialogue and callouts keep priority under pressure
- music transitions are stable because one controller owns state changes
- low-information sounds drop or virtualize before high-information cues
- accessibility controls and review criteria are part of the runtime design

## Reusable Output Template

```markdown
Recommended game-audio plan:
1. Define top-level categories by runtime function.
2. Protect dialogue, UI warnings, and high-value gameplay telegraphs.
3. Assign one owner to adaptive music transitions.
4. Limit runtime controls to a documented set of meaningful parameters/states.
5. Set voice and CPU fallback rules before adding more content.
6. Review accessibility and profiling results in dense gameplay scenes.
```

Use this example as a pattern when a user asks for "better game audio" but the real problem is system behavior at runtime.
