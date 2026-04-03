# Task Router (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/chrome-devtools/agents/task-router.md) · 🇪🇸 [es](../../../../es/skills_omni/chrome-devtools/agents/task-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/chrome-devtools/agents/task-router.md) · 🇩🇪 [de](../../../../de/skills_omni/chrome-devtools/agents/task-router.md) · 🇮🇹 [it](../../../../it/skills_omni/chrome-devtools/agents/task-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/chrome-devtools/agents/task-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/chrome-devtools/agents/task-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/chrome-devtools/agents/task-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/chrome-devtools/agents/task-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/chrome-devtools/agents/task-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/chrome-devtools/agents/task-router.md) · 🇮🇳 [in](../../../../in/skills_omni/chrome-devtools/agents/task-router.md) · 🇹🇭 [th](../../../../th/skills_omni/chrome-devtools/agents/task-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/chrome-devtools/agents/task-router.md) · 🇮🇩 [id](../../../../id/skills_omni/chrome-devtools/agents/task-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/chrome-devtools/agents/task-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/chrome-devtools/agents/task-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/chrome-devtools/agents/task-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/chrome-devtools/agents/task-router.md) · 🇳🇴 [no](../../../../no/skills_omni/chrome-devtools/agents/task-router.md) · 🇩🇰 [da](../../../../da/skills_omni/chrome-devtools/agents/task-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/chrome-devtools/agents/task-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/chrome-devtools/agents/task-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/chrome-devtools/agents/task-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/chrome-devtools/agents/task-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/chrome-devtools/agents/task-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/chrome-devtools/agents/task-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/chrome-devtools/agents/task-router.md) · 🇮🇱 [he](../../../../he/skills_omni/chrome-devtools/agents/task-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/chrome-devtools/agents/task-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/chrome-devtools/agents/task-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/chrome-devtools/agents/task-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/chrome-devtools/agents/task-router.md)

---


Use this note when the task drifts beyond one-off Chrome DevTools investigation.

## Stay with `chrome-devtools` when

- the task is live browser inspection
- the user wants screenshots or quick reproduction
- the task is console/network debugging
- the task is one-off performance profiling
- the work is exploratory rather than a durable automated suite

## Hand off when

### Route to Playwright-oriented automation

Use a Playwright skill when the task becomes:

- repeatable end-to-end automation
- assertions and regression coverage
- CI execution
- multi-step deterministic test flows

### Route to accessibility work

Use an accessibility skill when the task becomes:

- semantic accessibility auditing
- keyboard/focus review
- screen-reader-specific investigation
- remediation planning for WCAG issues

### Route to deeper frontend performance work

Use a frontend performance skill when the task becomes:

- remediation planning after trace evidence
- bundle, rendering, or framework-level optimization work
- broader performance strategy beyond one trace session

### Route to security investigation

Use a web-security skill when the task becomes:

- security validation beyond debugging clues
- CSP design or policy hardening
- authentication/session security analysis
- browser-exposed security misconfiguration review

## Handoff packet

When handing off, include:

- page or flow investigated
- exact repro steps
- console findings
- network findings
- screenshots if relevant
- trace findings if relevant
- any remaining uncertainty
