# Minimal Change Plan Example (Italiano)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/codenavi/examples/minimal-change-plan.md) · 🇪🇸 [es](../../../../es/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇫🇷 [fr](../../../../fr/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇩🇪 [de](../../../../de/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇮🇹 [it](../../../../it/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇷🇺 [ru](../../../../ru/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇯🇵 [ja](../../../../ja/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇰🇷 [ko](../../../../ko/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇸🇦 [ar](../../../../ar/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇮🇳 [hi](../../../../hi/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇮🇳 [in](../../../../in/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇹🇭 [th](../../../../th/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇻🇳 [vi](../../../../vi/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇮🇩 [id](../../../../id/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇲🇾 [ms](../../../../ms/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇳🇱 [nl](../../../../nl/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇵🇱 [pl](../../../../pl/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇸🇪 [sv](../../../../sv/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇳🇴 [no](../../../../no/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇩🇰 [da](../../../../da/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇫🇮 [fi](../../../../fi/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇵🇹 [pt](../../../../pt/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇷🇴 [ro](../../../../ro/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇭🇺 [hu](../../../../hu/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇧🇬 [bg](../../../../bg/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇸🇰 [sk](../../../../sk/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇮🇱 [he](../../../../he/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇵🇭 [phi](../../../../phi/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇨🇿 [cs](../../../../cs/skills_omni/codenavi/examples/minimal-change-plan.md) · 🇹🇷 [tr](../../../../tr/skills_omni/codenavi/examples/minimal-change-plan.md)

---


```text
Mission: Fix coupon validation schema mismatch
Scope: src/services/coupon.ts, tests/coupon.test.ts

Approach:
1. Confirm current response schema in docs and existing tests
   → files: docs/, tests/coupon.test.ts
   → verify: field name evidence captured in notes
2. Update property access in coupon service
   → files: src/services/coupon.ts
   → verify: targeted test passes
3. Search for remaining outdated field usage
   → files: src/services/, tests/
   → verify: no stale references remain

Risks:
- Another consumer may still expect the old shape

Fallback:
- Stop after recon and ask for guidance if the external contract is still ambiguous
```
