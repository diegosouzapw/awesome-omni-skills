# Metric Capture Guide (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/references/metric-capture-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/references/metric-capture-guide.md)

---


Use this guide to collect before-and-after evidence for React or Next.js performance work.

## Minimum acceptable evidence

Capture at least one of the following before and after the change:

- bundle analysis output for the affected route or app section
- Web Vitals readings captured through `useReportWebVitals`
- Vercel Speed Insights or equivalent real-user metrics
- platform observability evidence for slow server responses
- a reproducible local symptom with route, device context, and what improved

## Recommended workflow

1. Name the affected route, page, or component path.
2. Record the symptom in one sentence.
3. Capture the baseline evidence.
4. Apply the smallest change that matches the identified root cause.
5. Capture the same evidence again.
6. Compare only like-for-like conditions.
7. Write a short conclusion: improved, unchanged, or inconclusive.

## Example evidence prompts

- What route got faster, and by which measurement?
- Did the initial client bundle shrink after reducing the `use client` boundary?
- Did streaming improve perceived loading, or only move where the delay appears?
- Did hydration warnings disappear without introducing flicker?
- Did the deployed result match the local expectation?

## Notes

- Local dev measurements are useful for triage but weaker than production-facing telemetry.
- Avoid claiming a performance win if the evidence only shows code style changes.
- If metrics are unavailable, state that clearly and keep claims narrow.
