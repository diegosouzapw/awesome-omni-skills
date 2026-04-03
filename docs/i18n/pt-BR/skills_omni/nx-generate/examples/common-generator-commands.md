# Common Generator Commands (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-generate/examples/common-generator-commands.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-generate/examples/common-generator-commands.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-generate/examples/common-generator-commands.md)

---


Replace `pnpm` with the package-manager wrapper used by the repo.

## List plugins and generators

```bash
pnpm nx list
pnpm nx list @nx/react
pnpm nx list @nx/js
```

## Inspect generator help

```bash
pnpm nx g @nx/react:library --help
pnpm nx g @nx/web:app --help
pnpm nx g my-plugin:feature --help
```

## Generate a library

```bash
pnpm nx g @nx/js:library --name=shared-utils --directory=libs/shared --no-interactive
```

## Generate an app

```bash
pnpm nx g @nx/web:app --name=storefront --directory=apps --no-interactive
```

## Generate a component

```bash
pnpm nx g @nx/react:component --name=product-card --project=storefront --no-interactive
```

## Run a local workspace generator

```bash
pnpm nx g my-plugin:feature --name=checkout --directory=storefront --no-interactive
```

## Preview first with dry-run

```bash
pnpm nx g @nx/js:library --name=shared-utils --directory=libs/shared --dry-run --no-interactive
```

## Verify the result

```bash
pnpm nx format --fix
pnpm nx lint shared-utils
pnpm nx test shared-utils
pnpm nx build shared-utils
```
