# GitHub Comment Types for PR Handling (Polski)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-address-comments/references/github-comment-types.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-address-comments/references/github-comment-types.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-address-comments/references/github-comment-types.md)

---


GitHub PR feedback usually appears in two different shapes that agents should not mix up.

## 1. PR conversation comments

These are top-level comments on the pull request conversation tab. Operationally, they are issue comments on the PR.

Use cases:

- answering general reviewer questions
- acknowledging follow-up tasks
- updating the PR conversation

Typical tool path:

- `gh pr comment`
- issue comment REST endpoints

## 2. Review comments and review threads

These are comments attached to code diffs. They may be part of a thread and can have resolved or unresolved state.

Use cases:

- addressing file-specific code review feedback
- replying in context to a diff line
- deciding whether a thread should be resolved

Typical tool path:

- `gh api`
- review comment REST endpoints
- GraphQL review thread objects

## Why the distinction matters

If you only use top-level PR comments, you can miss code review feedback completely. If you treat review threads like issue comments, reply and resolution behavior may be wrong.

## Recommended handling order

1. unresolved review threads
2. non-outdated review comments
3. top-level PR conversation comments needing action
4. outdated comments that still need an explanatory reply
