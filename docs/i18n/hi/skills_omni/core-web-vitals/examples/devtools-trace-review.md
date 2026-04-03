# DevTools trace review checklist (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/examples/devtools-trace-review.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/examples/devtools-trace-review.md)

---


Use this checklist while reviewing a Performance trace.

## LCP

- Confirm the real LCP element.
- Check when its resource was discovered.
- Check whether the element was blocked by CSS, fonts, or hydration.
- Note if the LCP candidate changes by viewport.

## INP

- Identify the slow interaction.
- Look for long tasks before handler start.
- Measure handler work.
- Inspect rendering delay after JS completes.
- Check for third-party script interference.

## CLS

- Review layout-shift events.
- Identify the shifted node and likely root cause.
- Check for media, embeds, banners, or route-shell changes.
- Confirm whether the shift followed recent user input.

## Review notes

- Metric targeted:
- Main finding:
- Smallest safe fix:
- Follow-up measurement needed:
