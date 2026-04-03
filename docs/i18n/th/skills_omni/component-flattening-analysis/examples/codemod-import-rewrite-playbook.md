# Codemod Import Rewrite Playbook (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-flattening-analysis/examples/codemod-import-rewrite-playbook.md)

---


Use this approach when many files move and manual import updates are risky.

## When to use

Prefer this playbook when:

- more than a handful of files will move
- the repo uses TS path aliases
- barrels and re-exports complicate manual updates
- repeated edits make manual review error-prone

## Safe sequence

1. Finalize the classification and strategy first.
2. Make one small batch of file moves.
3. Rewrite imports and exports using AST-aware tooling where available.
4. Review the diff for accidental path rewrites.
5. Run typecheck, lint, tests, and build.
6. Repeat for the next batch if needed.

## What the codemod must update

- direct relative imports
- alias-based imports if paths changed
- barrel exports
- re-export files
- type-only imports where applicable
- test imports and story/demo imports if the repo has them

## What to review manually afterward

- dynamic imports
- framework registration points
- generated route or module manifests
- package entrypoints and compatibility re-exports

## Rule of thumb

Use automation for mechanical path updates, but keep architectural decisions manual.
