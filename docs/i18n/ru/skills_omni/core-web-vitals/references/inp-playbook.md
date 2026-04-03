# INP playbook (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/references/inp-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/references/inp-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/references/inp-playbook.md)

---


## Good threshold

- Good: **200ms or less**
- Needs improvement: **over 200ms up to 500ms**
- Poor: **over 500ms**

## Diagnose by phase

### 1. Input delay

Meaning:

The browser cannot start handling the interaction promptly because the main thread is busy.

Look for:

- long tasks already running
- third-party scripts occupying the main thread
- expensive startup work that overlaps with user interactions

Typical fixes:

- reduce startup JS
- defer non-critical work
- break up long tasks
- lazy-load heavy third-party code

### 2. Processing duration

Meaning:

The event handler and related JS take too long.

Look for:

- expensive synchronous logic
- large loops or parsing work
- framework rerender cascades triggered by one action

Typical fixes:

- simplify handler work
- move CPU-heavy tasks off the main thread when possible
- memoize or isolate expensive rerenders
- process data in smaller chunks

### 3. Presentation delay

Meaning:

The app finishes JS but still takes too long to present the next frame.

Look for:

- large style recalculation or layout cost
- DOM churn after state updates
- paint-heavy visual changes

Typical fixes:

- reduce DOM work after interactions
- batch reads and writes carefully
- avoid layout thrash
- prefer smaller, more local visual updates

## Safe improvement rules

- prioritize immediate visual feedback first
- defer analytics and background work
- yield during non-urgent processing
- measure the slowest interactions in production when local reproduction is weak

## Common anti-patterns

- assuming debounce alone solves INP
- treating handler runtime as the whole metric
- using `requestIdleCallback` for work that still blocks visible response
- ignoring low-end mobile devices and third-party script cost
