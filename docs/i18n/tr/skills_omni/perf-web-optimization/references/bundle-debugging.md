# Bundle Debugging (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-web-optimization/references/bundle-debugging.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-web-optimization/references/bundle-debugging.md)

---


Use this reference when shipped JavaScript is too large or code splitting is not paying off.

## Start with evidence

Check:

- the largest bundles or chunks
- duplicated modules across chunks
- route-independent code loaded on every page
- third-party packages with disproportionate cost

## Common failure modes

### Tree shaking did not work

Possible causes:

- broad imports
- CommonJS packages
- side effects in a dependency
- bundler configuration or package metadata that prevents dead-code elimination

### Code splitting changed files but not perceived speed

Possible causes:

- split code is still imported eagerly
- duplicated dependencies were created across chunks
- too many small requests added overhead without reducing critical work
- route-independent code still loads on every route

### Replacing a heavy library did not reduce output much

Possible causes:

- the old package remains transitively
- another dependency brought similar code back
- imports were not narrowed enough
- compression hid the actual parse and execution cost difference

## Safe fixes

- remove unused dependencies fully
- prefer ESM-friendly libraries where possible
- narrow imports
- split by route or real feature boundaries
- confirm with analyzer output after each change

## Example checks

```bash
# Webpack
npx webpack-bundle-analyzer dist/stats.json

# Vite-based projects
npx vite-bundle-visualizer
```
