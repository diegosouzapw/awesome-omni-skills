# Worked Example: From Vague Request to Structured Audio Recommendation

## Scenario

A team asks:

```text
We need audio guidance for a co-op sci-fi extraction mission. Players explore a derelict ship, fight drones, hack doors, and must evacuate when the reactor becomes unstable. Audio currently feels noisy and players miss important warnings.
```

## Step 1: Clarify gameplay purpose

Key player needs:
- know when a drone is nearby and from where
- understand whether a hack is progressing, interrupted, or failed
- feel escalation during reactor instability
- hear evacuation urgency without losing combat readability
- avoid missing critical warnings in co-op chaos

## Step 2: Classify sound roles

| Audio element | Category | 2D / 3D / Hybrid | Why |
|---|---|---|---|
| Menu and inventory clicks | UI | 2D | Must remain clear and non-positional |
| Drone movement and attack cues | Enemy feedback | 3D | Direction and distance affect play |
| Door hack progress tones | Objective feedback | Hybrid | World-linked, but progress clarity matters |
| Reactor instability alarms | Global warning | Hybrid | World flavor plus must-hear status |
| Ambient ship hum and vent noise | Ambience | 3D | Builds place and movement context |
| Extraction countdown voice | Dialogue / system voice | 2D or lightly hybrid | Must remain intelligible under load |
| Combat music intensity layers | Music | 2D | Emotional framing, not source-locational |

## Step 3: Define adaptive logic

Recommended core parameters or states:
- `combat_intensity`: 0 to 100
- `objective_state`: idle / hacking / success / interrupted / failed
- `reactor_state`: stable / unstable / meltdown / evacuation

Recommended behavior:
- music intensity follows `combat_intensity` with smoothing to avoid flapping
- hack tones and UI reinforcement follow `objective_state`
- reactor alarms change only on major `reactor_state` transitions
- a ducking rule lowers ambience slightly during objective and warning moments

## Step 4: Apply performance and voice-budget thinking

Protect first:
- drone attack telegraphs
- player damage and revive cues
- hack success/failure states
- reactor escalation warnings
- extraction countdown voice

Limit first:
- repeated drone chatter variants
- overlapping distant impact tails
- decorative ship creaks during combat peaks
- redundant alarm layers that communicate the same state

Streaming guidance:
- stream long music layers and large ambience beds where appropriate
- keep short objective tones, UI confirms, and player-status cues ready for immediate playback

## Step 5: Accessibility pass

Required reinforcement:
- hack progress and failure should also have clear visual UI states
- reactor escalation must include strong on-screen warning language or iconography
- extraction countdown voice should have subtitle or text support if it contains actionable timing
- provide separate volume controls for music, SFX, dialogue/voice, and UI where feasible

## Expected Recommendation Output

```text
Recommendation summary:
1. Keep UI and inventory feedback fully 2D.
2. Make drone cues 3D and priority-protected because source location affects survival.
3. Treat door-hack progress as hybrid: localized source plus clear non-positional reinforcement for success/failure.
4. Drive music with one smoothed combat-intensity parameter instead of many event triggers.
5. Use explicit reactor states for major mix changes and warning escalation.
6. Protect player-status, objective, and evacuation cues with concurrency and priority rules.
7. Reduce decorative ambience and duplicate alarm layers before touching critical gameplay cues.
8. Add visual/text reinforcement for hack state and reactor warnings as a baseline accessibility requirement.
9. Validate voice counts, stream behavior, and transition readability in full co-op combat rather than editor preview only.
```

## Why this is a good output

It converts a vague complaint into:
- functional audio categories
- clear 2D versus 3D decisions
- a manageable adaptive model
- concrete performance tradeoffs
- explicit accessibility requirements
- a testable review plan

Use this structure when the user asks for recommendations, audits, or implementation planning rather than raw sound-design theory.
