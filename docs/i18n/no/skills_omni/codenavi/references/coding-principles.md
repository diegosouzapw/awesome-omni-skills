# Coding Principles (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/codenavi/references/coding-principles.md) · 🇪🇸 [es](../../../../es/skills_omni/codenavi/references/coding-principles.md) · 🇫🇷 [fr](../../../../fr/skills_omni/codenavi/references/coding-principles.md) · 🇩🇪 [de](../../../../de/skills_omni/codenavi/references/coding-principles.md) · 🇮🇹 [it](../../../../it/skills_omni/codenavi/references/coding-principles.md) · 🇷🇺 [ru](../../../../ru/skills_omni/codenavi/references/coding-principles.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/codenavi/references/coding-principles.md) · 🇯🇵 [ja](../../../../ja/skills_omni/codenavi/references/coding-principles.md) · 🇰🇷 [ko](../../../../ko/skills_omni/codenavi/references/coding-principles.md) · 🇸🇦 [ar](../../../../ar/skills_omni/codenavi/references/coding-principles.md) · 🇮🇳 [hi](../../../../hi/skills_omni/codenavi/references/coding-principles.md) · 🇮🇳 [in](../../../../in/skills_omni/codenavi/references/coding-principles.md) · 🇹🇭 [th](../../../../th/skills_omni/codenavi/references/coding-principles.md) · 🇻🇳 [vi](../../../../vi/skills_omni/codenavi/references/coding-principles.md) · 🇮🇩 [id](../../../../id/skills_omni/codenavi/references/coding-principles.md) · 🇲🇾 [ms](../../../../ms/skills_omni/codenavi/references/coding-principles.md) · 🇳🇱 [nl](../../../../nl/skills_omni/codenavi/references/coding-principles.md) · 🇵🇱 [pl](../../../../pl/skills_omni/codenavi/references/coding-principles.md) · 🇸🇪 [sv](../../../../sv/skills_omni/codenavi/references/coding-principles.md) · 🇳🇴 [no](../../../../no/skills_omni/codenavi/references/coding-principles.md) · 🇩🇰 [da](../../../../da/skills_omni/codenavi/references/coding-principles.md) · 🇫🇮 [fi](../../../../fi/skills_omni/codenavi/references/coding-principles.md) · 🇵🇹 [pt](../../../../pt/skills_omni/codenavi/references/coding-principles.md) · 🇷🇴 [ro](../../../../ro/skills_omni/codenavi/references/coding-principles.md) · 🇭🇺 [hu](../../../../hu/skills_omni/codenavi/references/coding-principles.md) · 🇧🇬 [bg](../../../../bg/skills_omni/codenavi/references/coding-principles.md) · 🇸🇰 [sk](../../../../sk/skills_omni/codenavi/references/coding-principles.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/codenavi/references/coding-principles.md) · 🇮🇱 [he](../../../../he/skills_omni/codenavi/references/coding-principles.md) · 🇵🇭 [phi](../../../../phi/skills_omni/codenavi/references/coding-principles.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/codenavi/references/coding-principles.md) · 🇨🇿 [cs](../../../../cs/skills_omni/codenavi/references/coding-principles.md) · 🇹🇷 [tr](../../../../tr/skills_omni/codenavi/references/coding-principles.md)

---


Apply these principles during execution.

## Core principles

- Solve the confirmed problem, not adjacent possibilities.
- Match existing repository style unless the task explicitly changes conventions.
- Keep diffs small and reviewable.
- Remove only the direct debris created by the change itself.
- Prefer existing local patterns over introducing new abstractions.

## Scope control

- Avoid broad formatting passes.
- Avoid unrelated renames.
- Avoid speculative helper layers.
- Avoid hidden behavior changes during cleanup.

## Evidence over confidence

- If an API or framework behavior matters, verify it.
- If verification is partial, say so clearly.
- If the environment cannot prove the fix, provide precise manual checks.
