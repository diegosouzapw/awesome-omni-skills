# LCP diagnostic tree (中文（简体）)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/references/lcp-diagnostic-tree.md)

---


Use LCP as a four-subpart problem.

## Step 1: identify the actual LCP element

Confirm whether the LCP candidate is:

- image
- text block
- video poster
- SVG
- background image

Do not optimize a guessed hero element until you confirm it is actually the LCP candidate.

## Step 2: classify the dominant delay

### A. TTFB is high

Symptoms:

- document request starts slowly
- waterfall shows delayed first byte
- all later work is pushed back

Likely fixes:

- improve caching
- use CDN or edge delivery where already supported
- reduce backend latency
- avoid redirects on the target route

### B. Resource discovery is late

Symptoms:

- browser does not request the LCP resource early
- LCP asset appears after CSS, JS, or client rendering steps
- LCP image is hidden behind script or lazy loading

Likely fixes:

- include the LCP element in initial HTML
- remove lazy loading from the real LCP resource
- preload the LCP image only if it is stable and correct
- use `fetchpriority="high"` only on the actual LCP image
- avoid CSS background images for critical hero content when discoverability suffers

### C. Resource load duration is long

Symptoms:

- request starts on time but takes too long to finish
- image bytes are excessive for viewport needs

Likely fixes:

- reduce image bytes
- serve correctly sized responsive images
- use efficient formats such as AVIF or WebP where supported
- improve compression and cache behavior

### D. Element render delay is high

Symptoms:

- resource finishes loading, but paint happens much later
- render-blocking CSS or JS delays paint
- text LCP waits on fonts or hydration

Likely fixes:

- reduce render-blocking CSS and JS
- inline only truly critical CSS
- avoid gating hero content behind client-side fetches
- use server rendering, static rendering, or streaming where already appropriate
- reduce hydration bottlenecks
- optimize font loading and fallback behavior

## Safe guardrails

- Do not preload several competing hero images.
- Do not mark below-the-fold images as high priority.
- Do not move important above-the-fold content out of initial HTML just to reduce bundle work.
- If text is the LCP element, image optimization alone will not solve the problem.
