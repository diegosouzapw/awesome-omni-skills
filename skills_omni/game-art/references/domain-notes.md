# Game Art Domain Notes

Use this reference when the main workflow has already identified a likely style direction and you need compact implementation rules.

## 1) Resolution and Scale Anchors

Pick one primary scale language and document it before broad asset production.

| Context | Good anchor decision | Common failure |
|---|---|---|
| Pixel art 2D | Define base tile size, character reference size, and whether presentation is pixel-perfect | Characters, tiles, VFX, and UI are authored at mixed pixel densities |
| Stylized 3D | Define world unit expectations, target texel density range, and camera distance assumptions | Props look authored for different games because texture density and silhouette scale drift |
| UI-heavy games | Define text size floors, icon families, and contrast expectations early | UI is treated as separate late-stage art and no longer matches world readability |

Minimum scale checklist:

- one reference character or prop sheet exists
- one environment anchor exists
- VFX scale is tested at gameplay camera distance
- UI relationship to world art is intentional, not accidental
- any exceptions are documented as exceptions

## 2) Atlas and Packing Policy

Atlas policy should match runtime behavior, not just artist preference.

Use a shared atlas when:

- many small sprites are rendered together
- assets are usually loaded together
- the project benefits from fewer texture switches or simpler content grouping

Avoid packing unrelated assets together when:

- they belong to different streaming or loading contexts
- UI assets need independent updates
- memory churn would be caused by loading a large atlas for one small element
- compression or filtering needs differ significantly

Practical atlas rules:

- atlas by scene, biome, character set, or UI domain when that maps to runtime usage
- keep font/UI-critical assets separate if they need distinct quality settings
- re-check padding, filtering, and mip behavior for assets with sharp edges or pixel-art constraints

## 3) Naming and Asset Ownership

Naming is not cosmetic. It controls discoverability, review quality, and downstream automation.

Suggested pattern:

`[domain]_[type]_[subject]_[variant]_[state]`

Examples:

- `chr_enemy_slime_a_idle`
- `env_forest_tree_oak_b`
- `ui_icon_inventory_potion_small`
- `vfx_hit_spark_fire_small`

Rules:

- keep separators and case style consistent across the whole project
- reserve suffixes for meaningful variants, not random personal habits
- do not use final, final2, test, temp as shipping names
- distinguish source files from exported runtime assets clearly

Ownership checklist:

- editable source path is known
- runtime export path is known
- naming for animation clips, textures, meshes, and materials is aligned
- deprecated assets are either removed or marked clearly for cleanup

## 4) Folder and Library Structure

A workable structure usually separates by asset domain first, then by gameplay or environment grouping.

Example structure:

```text
Art/
  Characters/
  Environments/
  Props/
  UI/
  VFX/
  Animations/
  Source/
```

Useful rule of thumb:

- store working files where artists can manage them safely
- store exported runtime assets where integrators can find them consistently
- avoid deep nesting that hides ownership
- avoid flat dumping grounds where every asset type mixes together

## 5) Animation Reuse and Import Caveats

When many related characters exist, reuse should be the default plan.

Prefer:

- shared skeletons for similar humanoids or repeated creature classes
- consistent bone naming
- stable export orientation and scale settings
- one documented FBX/export convention for the team

Watch for:

- one-off rig changes that break retargeting
- mismatched root motion assumptions
n- inconsistent frame rates or clip ranges across exporters
- imported clips with naming drift or duplicate skeleton variants

Pre-production animation checklist:

- shared skeleton decision made or explicitly rejected
- export version/settings documented
- clip naming pattern documented
- root motion ownership decided
- engine import test completed on representative assets

## 6) Accessibility and Readability Checks

Game art decisions should survive realistic play conditions.

Check at minimum:

- critical state changes are not hue-only
- warning markers and interactables have shape, motion, or value cues in addition to color
- UI text and icons stay readable at expected device size and distance
- low-contrast decorative treatments do not hide primary actions
- status effects and rarity indicators have redundant signals

Fast review prompts:

- Can the player identify hazards during movement?
- Can enemy versus ally versus neutral be distinguished without perfect color perception?
- Does the UI remain readable on smaller or lower-quality displays?

## 7) Integration Review Questions

Before approving an art direction, ask:

1. What is the normal gameplay viewing distance?
2. What details actually survive on the target screen?
3. What is the memory/loading implication of this texture and atlas plan?
4. How many assets will need animation reuse?
5. What rules will keep the tenth contributor aligned with the first two?
6. Which review criteria can be checked objectively during production?

If these questions do not have clear answers, the art direction is probably still too aesthetic and not yet production-ready.
