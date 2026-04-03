# Example: Performance Investigation Report (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇪🇸 [es](../../../../es/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇫🇷 [fr](../../../../fr/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇩🇪 [de](../../../../de/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇮🇹 [it](../../../../it/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇷🇺 [ru](../../../../ru/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇯🇵 [ja](../../../../ja/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇰🇷 [ko](../../../../ko/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇸🇦 [ar](../../../../ar/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇮🇳 [hi](../../../../hi/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇮🇳 [in](../../../../in/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇹🇭 [th](../../../../th/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇻🇳 [vi](../../../../vi/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇮🇩 [id](../../../../id/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇲🇾 [ms](../../../../ms/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇳🇱 [nl](../../../../nl/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇵🇱 [pl](../../../../pl/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇸🇪 [sv](../../../../sv/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇳🇴 [no](../../../../no/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇩🇰 [da](../../../../da/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇫🇮 [fi](../../../../fi/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇵🇹 [pt](../../../../pt/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇷🇴 [ro](../../../../ro/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇭🇺 [hu](../../../../hu/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇧🇬 [bg](../../../../bg/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇸🇰 [sk](../../../../sk/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇮🇱 [he](../../../../he/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇵🇭 [phi](../../../../phi/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇨🇿 [cs](../../../../cs/skills_omni/chrome-devtools/examples/performance-investigation-report.md) · 🇹🇷 [tr](../../../../tr/skills_omni/chrome-devtools/examples/performance-investigation-report.md)

---


Use this format for handoff after a DevTools trace review.

## Performance Investigation Summary

- **Page or flow:**
- **Primary symptom:**
- **Trace type:** Reload trace / interaction trace
- **Environment notes:** viewport, throttling, signed-in state, feature flags

## Findings

- **User-visible impact:**
- **Likely metric affected:** LCP / CLS / INP / long tasks / other
- **Main evidence from trace:**
- **Likely bottleneck area:**
- **Confidence level:** Low / Medium / High

## Suggested next inspection area

- render-blocking resources
- image optimization
- JavaScript execution cost
- layout recalculation
- third-party scripts
- API latency affecting render

## Evidence packet

- screenshot attached: yes / no
- console anomalies: yes / no
- failing or slow requests: yes / no
- trace insight summary: yes / no

## Redactions applied

List any removed secrets, tokens, personal data, or internal-only details.
