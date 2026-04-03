# Core Web Vitals router note (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/agents/core-web-vitals-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/agents/core-web-vitals-router.md)

---


Use `@core-web-vitals` when the request is explicitly about:

- Largest Contentful Paint
- Interaction to Next Paint
- Cumulative Layout Shift
- Core Web Vitals field regressions
- Search Console or CrUX CWV issues

Route elsewhere when:

- the user wants a broad site performance review rather than CWV-specific remediation
- the main task is a Lighthouse score audit
- the work is framework-specific beyond the CWV focus
- the issue is primarily accessibility, analytics architecture, or backend profiling

## Handoff hints

- Use `@perf-web-optimization` for broader frontend performance work.
- Use `@perf-lighthouse` for audit-driven remediation centered on Lighthouse output.
- Use `@perf-astro` for Astro-specific optimization requests.
- Use `@accessibility` if UI stabilization changes need accessibility review.
