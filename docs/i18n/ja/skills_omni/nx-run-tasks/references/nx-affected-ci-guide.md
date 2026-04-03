# Nx Affected in CI (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-run-tasks/references/nx-affected-ci-guide.md)

---


`nx affected` is most useful when CI provides a reliable diff range.

## Preferred CI pattern

Use explicit refs or SHAs instead of relying on defaults:

```bash
nx affected -t test --base=origin/main --head=HEAD
```

You can substitute your CI system's known base and head values.

## When this goes wrong

Common causes:

- shallow clone without enough history
- wrong base branch or SHA
- detached HEAD behavior that differs from local development
- no usable Git metadata in the current environment

## Safe fallback when Git metadata is not usable

Drive affected calculation from files:

```bash
nx affected -t lint --files=apps/web/src/app.tsx,libs/ui/src/button.tsx
```

## Practical guidance

- prefer explicit `--base` and `--head` in CI
- avoid assuming local defaults match CI checkout behavior
- if affected output looks wrong, validate the diff inputs before blaming target definitions
- use file-based fallback when the pipeline intentionally does not expose enough Git history

## Diagnostic sequence

1. Confirm the branch or SHA pair you intended to compare.
2. Re-run with `--verbose`.
3. If history is incomplete, adjust checkout/fetch depth using the repository's normal CI approach.
4. If Git metadata is unavailable by design, switch to `--files`.
5. Only after diff inputs are validated should you investigate target selection logic.
