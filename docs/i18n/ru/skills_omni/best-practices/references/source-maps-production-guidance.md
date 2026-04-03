# Source Maps Production Guidance (Русский)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇪🇸 [es](../../../../es/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇫🇷 [fr](../../../../fr/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇩🇪 [de](../../../../de/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇮🇹 [it](../../../../it/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇷🇺 [ru](../../../../ru/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇯🇵 [ja](../../../../ja/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇰🇷 [ko](../../../../ko/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇸🇦 [ar](../../../../ar/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇮🇳 [hi](../../../../hi/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇮🇳 [in](../../../../in/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇹🇭 [th](../../../../th/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇻🇳 [vi](../../../../vi/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇮🇩 [id](../../../../id/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇲🇾 [ms](../../../../ms/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇳🇱 [nl](../../../../nl/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇵🇱 [pl](../../../../pl/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇸🇪 [sv](../../../../sv/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇳🇴 [no](../../../../no/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇩🇰 [da](../../../../da/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇫🇮 [fi](../../../../fi/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇵🇹 [pt](../../../../pt/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇷🇴 [ro](../../../../ro/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇭🇺 [hu](../../../../hu/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇧🇬 [bg](../../../../bg/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇸🇰 [sk](../../../../sk/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇮🇱 [he](../../../../he/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇵🇭 [phi](../../../../phi/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇨🇿 [cs](../../../../cs/skills_omni/best-practices/references/source-maps-production-guidance.md) · 🇹🇷 [tr](../../../../tr/skills_omni/best-practices/references/source-maps-production-guidance.md)

---


Use this reference to decide whether production source maps should be public, hidden, private-uploaded, or disabled.

## Decision table

| Posture | When it fits | Main tradeoff |
| --- | --- | --- |
| Public source maps | Only when exposure is accepted explicitly | Easier debugging, greater source disclosure |
| Hidden source maps | Good default when uploading to private error tracking | Better debugging without public map access |
| Private upload to error tracking | Strong option for production apps with observability tooling | Requires operational setup |
| Disabled entirely | Appropriate for simpler deployments or strict exposure minimization | Harder debugging without replacement tooling |

## Review steps

1. Check bundler config for production map generation.
2. Verify whether `.map` files are publicly reachable.
3. Check whether maps are uploaded privately to an approved error tracker.
4. Confirm what debugging workflow remains if public maps are removed.

## Example

```javascript
module.exports = {
  devtool: process.env.NODE_ENV === 'production' ? 'hidden-source-map' : 'source-map',
}
```

## Устранение неполадок

### Stack traces became unreadable

- confirm whether hidden or private-uploaded maps are available
- verify release/version mapping in the error tracker
- avoid re-exposing public maps as the first fix

### Maps are still public after configuration changes

- check build output and CDN publishing rules
- verify old artifacts are not still being served
- inspect generated HTML or headers for stale references
