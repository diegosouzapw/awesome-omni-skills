# Traceability Guide (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/traceability.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/traceability.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/traceability.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/traceability.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/traceability.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/traceability.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/traceability.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/traceability.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/traceability.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/traceability.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/traceability.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/traceability.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/traceability.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/traceability.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/traceability.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/traceability.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/traceability.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/traceability.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/traceability.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/traceability.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/traceability.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/traceability.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/traceability.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/traceability.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/traceability.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/traceability.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/traceability.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/traceability.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/traceability.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/traceability.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/traceability.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/traceability.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/traceability.md)

---


Traceability keeps planning, execution, and verification connected.

## Minimum expectation

For large or complex work, carry identifiers across the workflow:

- requirement IDs in `spec.md`
- task references in `tasks.md`
- validation evidence in summaries or task notes
- commit references when practical

## Example mini-matrix

| Requirement | Acceptance criteria | Task | Verification | Commit note |
| --- | --- | --- | --- | --- |
| REQ-1 | Unauthorized users cannot open settings | T-01 add backend permission guard | integration test for denied access | `feat(auth): add settings guard [REQ-1]` |
| REQ-2 | Unauthorized users do not see settings controls | T-02 hide UI actions | UI test or manual verification | `feat(ui): hide settings controls [REQ-2]` |
| REQ-3 | Authorized users retain access | T-03 preserve existing allowed flow | regression or integration evidence | `test(auth): cover allowed access [REQ-3]` |

## Practical rules

- Not every tiny task needs a formal ID, but large work should be traceable.
- If a requirement changes, update downstream tasks and validation notes.
- If implementation deviates from the spec, record the deviation explicitly rather than silently changing traceability.
- Keep the traceability lightweight; do not turn it into bureaucracy for small changes.
