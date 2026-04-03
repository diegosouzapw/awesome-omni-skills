# Astro Performance Troubleshooting (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-astro/references/astro-performance-troubleshooting.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-astro/references/astro-performance-troubleshooting.md)

---


## Slow LCP on a marketing page

**Symptoms:** Hero content appears late, often due to a large image or slow server response.

**Check:**
- Is the LCP element really the hero image, or is it a text block?
- Is the image optimized with `astro:assets`?
- Does it have responsive sizes and explicit dimensions?
- Is TTFB poor because the route is SSR unnecessarily?
- Is preload being used on the right resource?

**Likely fixes:**
- prerender the page if possible
- optimize and prioritize the real LCP image
- remove render-blocking work ahead of the hero

## CLS after adding custom fonts

**Symptoms:** Text shifts after load or flashes between fallback and final font.

**Check:**
- Are too many font files or weights loading?
- Did preload include non-critical variants?
- Is fallback text metrically very different from the final font?
- Is `font-display` appropriate for the content?

**Likely fixes:**
- reduce variants
- preload only the critical font file
- self-host and subset fonts
- tune fallback choices and layout expectations

## Hydration-heavy page with poor INP

**Symptoms:** Delayed interactions, large JS, or long tasks.

**Check:**
- Which components use `client:load`, `client:visible`, `client:idle`, or similar directives?
- Could any become static or hydrate later?
- Are third-party widgets dominating execution time?
- Are inline scripts preventing bundling or deduplication?

**Likely fixes:**
- shrink or remove islands
- defer non-critical hydration
- isolate or delay third-party code
- keep scripts in Astro's processing path

## Critical CSS integration shows little benefit

**Symptoms:** Larger HTML, little LCP change, or duplicated bytes across routes.

**Check:**
- Was route CSS already small?
- Are users revisiting pages where cached external CSS would be cheaper?
- Is the real bottleneck image discovery, JS, or TTFB instead?

**Likely fixes:**
- remove or limit critical CSS inlining
- focus on images, fonts, scripts, or SSR latency first

## SSR route still slow after frontend changes

**Symptoms:** Large waits before first bytes or slow dynamic responses.

**Check:**
- Can the route be prerendered?
- Are data requests serialized?
- Is cache missing or ineffective?
- Is the hosting region far from users?

**Likely fixes:**
- prerender where possible
- reduce backend waterfalls
- improve caching
- route to server or infrastructure specialists if needed
