# Performance Profiling Checklist (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/chrome-devtools/references/performance-profiling-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/chrome-devtools/references/performance-profiling-checklist.md)

---


Use this checklist to keep performance investigations evidence-driven.

## 1. Classify the symptom

Choose one primary symptom first:

- slow initial page load
- sluggish click or tap response
- typing lag
- scrolling or animation jank
- layout shift or visual instability
- heavy script execution or long tasks

## 2. Choose the right trace shape

### For initial load issues

- Start a trace with reload.
- Wait for the page load and the visible issue to complete.
- Review load-related insights and screenshots if available.

### For interaction issues

- Start the trace before the interaction.
- Perform the exact laggy action.
- Stop after the lag is visible in the trace.
- Do not rely only on a reload trace for interaction complaints.

## 3. Capture minimum useful evidence

Record at least:

- page or flow tested
- whether tracing used reload or live interaction
- the user-visible symptom
- the main bottleneck seen in the trace
- the likely metric or performance theme affected

## 4. Frame findings with modern web metrics

Where applicable, tie evidence to:

- **LCP** for slow largest-content rendering during load
- **CLS** for layout instability and unexpected movement
- **INP** for delayed interaction responsiveness
- **Long tasks** for main-thread blocking work

## 5. Common bottleneck categories

- render-blocking resources
- large images or media
- heavy JavaScript execution
- excessive style/layout recalculation
- layout thrash
- third-party scripts
- slow API dependencies affecting render

## 6. Report like this

- **Symptom:** what the user feels
- **Trace type:** reload or interaction
- **Evidence:** what the trace shows
- **Likely bottleneck:** where time is going
- **Likely next fix area:** what team should inspect next

## 7. Avoid weak conclusions

Do not say "the page is slow" without pointing to evidence such as:

- long scripting blocks
- layout shift clusters
- delayed render of the largest content
- repeated network stalls affecting render
