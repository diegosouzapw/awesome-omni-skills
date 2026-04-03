# netlify.toml Patterns (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇪🇸 [es](../../../../es/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇫🇷 [fr](../../../../fr/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇩🇪 [de](../../../../de/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇮🇹 [it](../../../../it/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇷🇺 [ru](../../../../ru/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇯🇵 [ja](../../../../ja/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇰🇷 [ko](../../../../ko/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇸🇦 [ar](../../../../ar/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇮🇳 [hi](../../../../hi/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇮🇳 [in](../../../../in/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇹🇭 [th](../../../../th/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇻🇳 [vi](../../../../vi/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇮🇩 [id](../../../../id/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇲🇾 [ms](../../../../ms/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇳🇱 [nl](../../../../nl/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇵🇱 [pl](../../../../pl/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇸🇪 [sv](../../../../sv/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇳🇴 [no](../../../../no/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇩🇰 [da](../../../../da/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇫🇮 [fi](../../../../fi/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇵🇹 [pt](../../../../pt/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇷🇴 [ro](../../../../ro/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇭🇺 [hu](../../../../hu/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇧🇬 [bg](../../../../bg/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇸🇰 [sk](../../../../sk/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇮🇱 [he](../../../../he/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇵🇭 [phi](../../../../phi/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇨🇿 [cs](../../../../cs/skills_omni/netlify-deploy/references/netlify-toml-patterns.md) · 🇹🇷 [tr](../../../../tr/skills_omni/netlify-deploy/references/netlify-toml-patterns.md)

---


Prefer `netlify.toml` as the durable source of Netlify build configuration.

## Static site

```toml
[build]
  publish = "."
```

Use only when the repository root itself contains the final static files.

## Vite or React-style app

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

Verify that `npm run build` actually outputs to `dist`.

## Generic app with build output in `build`

```toml
[build]
  command = "npm run build"
  publish = "build"
```

## Monorepo pattern

```toml
[build]
  base = "apps/web"
  command = "npm run build"
  publish = "dist"
```

Use this when the deployable app lives below the repo root. Verify that paths are correct relative to the base directory.

## Notes

- Do not guess framework defaults when the repository already states the build output elsewhere.
- Validate `package.json` scripts alongside `netlify.toml`.
- If framework-specific adapters are involved, verify against project and framework documentation before changing publish paths.
