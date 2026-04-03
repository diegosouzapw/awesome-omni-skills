# Large Feature Example (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/examples/large-feature-example.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/examples/large-feature-example.md)

---


## Request

"Add role-based access control for project settings so only project admins can edit settings."

## Right-sized approach

- Scope: large
- Artifacts: `spec.md`, `design.md`, `tasks.md`
- Traceability: requirement IDs required

## Example requirement slice

```md
## Requirements
- REQ-1: Non-admin users must be prevented from updating project settings.
- REQ-2: Non-admin users must not see edit controls for project settings.
- REQ-3: Admin users must keep existing settings access.
```

## Example task slice

```md
## T-01: Add backend authorization guard
- Requirement(s): REQ-1
- Done when: update requests are rejected for non-admin users
- How verified: integration test for denied access

## T-02: Hide edit controls in the UI
- Requirement(s): REQ-2
- Depends on: T-01
- Done when: non-admin users cannot see edit affordances
- How verified: UI test or manual role-based verification

## T-03: Preserve allowed admin flow
- Requirement(s): REQ-3
- Depends on: T-01
- Done when: admin editing still works
- How verified: integration or regression coverage
```

## Example execution notes

- Commit backend guard separately from UI visibility if they are independently reviewable.
- Record any discrepancy between current behavior and desired authorization policy.
