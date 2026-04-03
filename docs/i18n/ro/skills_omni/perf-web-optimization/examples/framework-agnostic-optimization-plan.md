# Framework-Agnostic Optimization Plan (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-web-optimization/examples/framework-agnostic-optimization-plan.md)

---


## Scenario

A product page is slow on first load and still re-downloads assets on repeat visits.

## Plan

1. Capture a baseline for the product page using the triage checklist.
2. Inspect the Network panel for:
   - hero image discovery order
   - large JS bundles
   - render-blocking CSS
   - cache headers on HTML and static assets
3. Inspect the Performance panel for:
   - long tasks during startup
   - third-party execution after load
4. Apply fixes in this order:
   - correct hero image loading and sizing
   - defer or split non-critical JavaScript
   - reduce or postpone third-party scripts
   - tighten caching for fingerprinted assets
   - refine font loading and only keep critical preloads
5. Re-test after each class of change.
6. Document rollout notes:
   - hashed assets confirmed
   - CDN invalidation needs
   - rollback concerns

## Expected outcomes

- earlier hero image request
- less render-blocking work
- smaller critical JavaScript cost
- fewer repeat-visit downloads for stable assets
