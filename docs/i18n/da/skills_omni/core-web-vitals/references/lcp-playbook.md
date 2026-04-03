# LCP playbook (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/core-web-vitals/references/lcp-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/core-web-vitals/references/lcp-playbook.md)

---


## Good threshold

- Good: **2.5s or less**
- Needs improvement: **over 2.5s up to 4.0s**
- Poor: **over 4.0s**

## First question: what is the LCP element?

Confirm whether the LCP candidate is:

- hero image
- text block
- video poster
- SVG
- background image

The actual candidate may differ by:

- mobile vs desktop
- logged-in vs logged-out state
- A/B experiment variant
- localization or personalization

## Diagnose by subpart

### 1. TTFB is high

Symptoms:

- HTML document starts late
- everything else starts late too

Typical fixes:

- improve caching or CDN behavior
- reduce backend latency
- avoid redirects on the critical URL
- verify origin and edge configuration

### 2. Resource discovery delay is high

Symptoms:

- the LCP resource exists but begins loading late
- CSS background image or client-rendered hero is discovered after initial HTML parse

Typical fixes:

- make the LCP element discoverable earlier
- include hero markup in initial HTML when possible
- use `rel=preload` selectively for the real LCP resource
- use `fetchpriority="high"` only for the likely LCP image
- avoid lazy-loading above-the-fold content

### 3. Resource load duration is high

Symptoms:

- the LCP resource starts on time but takes too long to download

Typical fixes:

- reduce bytes
- serve correctly sized responsive images
- use modern formats where appropriate
- verify caching and compression

### 4. Element render delay is high

Symptoms:

- resource is ready, but painting still happens late
- text LCP blocked by font or CSS
- hero content gated by hydration or client-side rendering

Typical fixes:

- reduce render-blocking CSS and JS
- avoid waiting for hydration before showing hero content
- fix font-loading strategy
- simplify above-the-fold rendering path

## Common anti-patterns

- lazy-loading the actual hero image
- preloading many images instead of the single likely LCP resource
- using `fetchpriority="high"` broadly
- moving critical hero content behind client-only data fetches
- assuming the biggest image file is always the LCP element
