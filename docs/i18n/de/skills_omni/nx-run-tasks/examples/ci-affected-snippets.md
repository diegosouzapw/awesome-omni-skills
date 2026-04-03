# CI Affected Snippets (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-run-tasks/examples/ci-affected-snippets.md)

---


Use these as command patterns, then adapt ref names to the repository.

## Test affected projects with explicit diff inputs

```bash
nx affected -t test --base=origin/main --head=HEAD --verbose
```

## Build and lint affected projects

```bash
nx affected -t build,lint --base=origin/main --head=HEAD --parallel=3
```

## File-driven fallback when Git metadata is unavailable

```bash
nx affected -t test --files=apps/web/src/app.tsx,libs/util/src/index.ts --verbose
```

## Debug suspected cache-related behavior in CI

```bash
nx affected -t test --base=origin/main --head=HEAD --skipNxCache --verbose
```

Use cache bypass only for investigation, not as the default pipeline pattern.
