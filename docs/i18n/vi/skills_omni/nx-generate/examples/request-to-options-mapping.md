# Request-to-Options Mapping (Tiếng Việt)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-generate/examples/request-to-options-mapping.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-generate/examples/request-to-options-mapping.md)

---


## Example 1

**User request:** Create a shared TypeScript utility library for formatting money.

**Likely interpretation:**

- artifact type: library
- likely generator: `@nx/js:library` or a local workspace library generator
- name: `money-formatting` or `shared-money-formatting`
- directory: `libs/shared` if that matches repo layout
- verification: lint, test, build for the new project

**Command shape:**

```bash
pnpm nx g @nx/js:library --name=money-formatting --directory=libs/shared --no-interactive
```

## Example 2

**User request:** Scaffold a checkout feature using the repo's conventions.

**Likely interpretation:**

- first inspect local generators
- likely generator family: local plugin
- name: `checkout`
- directory: depends on app or domain structure
- side effects: may update routing, tags, or shared config

**Command shape:**

```bash
pnpm nx list
pnpm nx g my-plugin:feature --help
pnpm nx g my-plugin:feature --name=checkout --directory=storefront --no-interactive
```

## Example 3

**User request:** Add a React component inside the storefront app.

**Likely interpretation:**

- artifact type: component
- likely generator: `@nx/react:component` or local equivalent
- target project: `storefront`
- name: `product-card`

**Command shape:**

```bash
pnpm nx g @nx/react:component --name=product-card --project=storefront --no-interactive
```

## Option-mapping checklist

Before execution, make sure you can fill in:

- exact generator
- name
- target project if applicable
- directory/path
- tags or scope metadata
- framework-specific options
- verification plan
