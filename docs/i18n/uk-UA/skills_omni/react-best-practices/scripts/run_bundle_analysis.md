# Bundle Analysis Command Reference (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/scripts/run_bundle_analysis.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/scripts/run_bundle_analysis.md)

---


Use this command reference when reviewing a Next.js bundle-size issue.

## Typical safe flow

1. Confirm the app already supports the Next.js bundle analyzer setup.
2. Run the project's existing analyzer command if one exists.
3. If the project uses the standard analyzer integration, a common pattern is:

```bash
ANALYZE=true npm run build
```

4. Inspect which routes or shared chunks grew.
5. Trace regressions back to:
   - new `use client` boundaries
   - heavy route-level imports
   - barrel imports
   - third-party libraries that can be deferred or isolated

## Review notes

- Prefer the project's documented build command over inventing a new one.
- Do not modify build configuration unless the user asked for setup work.
- Record which route or chunk changed before proposing code edits.
