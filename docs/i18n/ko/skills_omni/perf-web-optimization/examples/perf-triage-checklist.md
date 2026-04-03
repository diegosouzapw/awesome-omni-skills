# Performance Triage Checklist (한국어)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-web-optimization/examples/perf-triage-checklist.md)

---


Use this template before and after changes.

## Scope

- URL or route:
- Environment tested:
- First load or repeat visit:
- Device/network assumptions:

## Symptoms

- What feels slow?
- When did it start?
- Is the issue visual loading, interaction, or both?

## Network evidence

- Largest assets:
- Likely hero/LCP resource:
- Render-blocking CSS or JS:
- Duplicate downloads observed:
- Compression present on text assets:
- Cache headers of HTML:
- Cache headers of static assets:

## Main-thread evidence

- Long tasks observed:
- Heavy script evaluation:
- Layout/style spikes:
- Third-party cost:

## Top suspected causes

1.
2.
3.

## Proposed fixes by priority

1.
2.
3.

## Verification notes

- Before:
- After:
- Regressions checked:
- Follow-ups for other skills:
