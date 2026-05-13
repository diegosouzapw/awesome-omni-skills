# Worked Example: Turning a Vague Art Request into a Production Brief

## Starting Request

```text
We want the game to feel cozy and magical.
It is a farming and exploration game.
We are thinking about pixel art or painted 2D.
It should run on Nintendo Switch and mid-range PCs.
There will be lots of crops, tools, villagers, and UI screens.
```

## Step 1: Fill the Missing Production Context

Reasonable follow-up questions:

- What is the gameplay camera distance and angle?
- How crowded can the screen become during farming, inventory, and town scenes?
- Is the team better at frame-by-frame art or modular/rigged animation?
- How much UI is always visible?
- How many environment variants and seasonal swaps are expected?

Assume the answers are:

```text
Camera: angled top-down, medium distance
Gameplay density: many small props and crops on screen at once
UI: always-visible hotbar plus frequent menus
Team: 2 artists, 1 animator
Animation scope: moderate, many repeated NPC and crop states
Seasonal variants: yes
```

## Step 2: Reject Style Options That Do Not Fit the Constraints

### Option A: Highly detailed painted 2D

Pros:

- strong mood and atmosphere
- flexible for promotional art

Cons:

- medium gameplay distance weakens fine detail payoff
- high asset volume makes consistency expensive
- seasonal/environment variation cost rises quickly
- readability risk increases when many small crops and props overlap

### Option B: Structured stylized 2D with limited-detail painted surfaces

Pros:

- preserves warmth and charm
- supports readability at gameplay distance
- easier to standardize across props, crops, villagers, and UI
- lower production burden for a small team

Cons:

- requires discipline to avoid over-rendering hero assets

### Option C: Strict low-resolution pixel art

Pros:

- clean constraints
- good asset reuse potential

Cons:

- always-visible UI and medium-distance angled camera may force compromises
- animation and environment detail may become cramped
- cozy/magical atmosphere may require more resolution than strict pixel rules allow

## Step 3: Recommendation

Choose **stylized 2D with simplified painted forms**, not strict pixel art and not detail-heavy painted rendering.

Why:

- the medium-distance camera benefits more from clean shapes than from texture detail
- the project has many repeated assets, so consistent production rules matter more than painterly uniqueness
- Switch and mid-range PC targets reward controlled texture and atlas policy
- the UI-heavy experience needs legibility and visual separation from world clutter

## Step 4: Convert the Recommendation into Production Rules

### Visual style rules

- Use broad shapes and clear silhouette groups for crops, tools, villagers, and interactables.
- Keep rendering simple enough that props remain readable when many are visible together.
- Reserve the most detailed treatment for portraits, key locations, and store/menu illustrations.

### Scale and resolution rules

- Define one player reference sheet and one crop-tile reference sheet before further production.
- Test common tools, crops, and pickup items at real gameplay camera size.
- Keep decorative detail subordinate to object identity.

### Asset pipeline rules

- Group atlases by gameplay domain: farm props, villagers, UI, seasonal environment sets.
- Keep UI assets separate from world atlases where update cadence and quality needs differ.
- Use consistent naming for asset type, subject, and state.

Example naming:

```text
chr_villager_baker_a_idle
prop_tool_wateringcan_a
env_crop_turnip_stage03
ui_icon_seedbag_small
```

### Animation rules

- Use reusable rigs or cutout-friendly setups for villagers where possible.
- Standardize crop growth-state naming and export ownership.
- Avoid one-off animation conventions per asset family.

### Accessibility rules

- Do not signal crop readiness by color shift alone.
- Use shape, sparkle, outline, or motion cues for interactables.
- Check menu text and icons at handheld-size viewing conditions.

## Step 5: Final Operator Deliverable

```text
Recommended art direction: stylized 2D with simplified painted forms and strong silhouette readability.

Why this fits:
- supports cozy and magical tone without relying on high-detail rendering
- remains readable at angled top-down gameplay distance
- scales better for a small team producing many repeated content sets
- fits Switch and mid-range PC constraints with manageable texture and atlas policy

Production rules:
- lock one character sheet and one crop/environment reference scale before expanding content
- atlas by gameplay domain and seasonal set, not by random artist ownership
- keep UI on a separate readability track from dense world art
- use shared naming patterns for crops, characters, props, and UI
- standardize animation/export settings for repeated villagers and crop states

Top risks:
- over-rendered props that become muddy at gameplay distance
- inconsistent crop and villager scale across seasons and scenes
- UI style drifting away from world art
- interactables relying on color only

Acceptance checks:
- player can distinguish tools, crops, villagers, and interactables during normal movement
- seasonal variants preserve the same scale and naming structure
- UI remains legible in handheld-like conditions
- repeated content families reuse the same export and naming rules
```

## What Changed from the Original Vague Request

Before:

```text
Cozy and magical farming game. Maybe pixel art or painted 2D.
```

After:

```text
A constrained, production-ready art direction with camera-aware readability rules,
scale anchors, atlas policy, naming conventions, animation reuse guidance,
and accessibility checks.
```

That transformation is the core purpose of this skill.
