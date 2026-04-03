# PR Comment Handling Workflow Reference (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-address-comments/references/pr-comment-handling-workflow.md)

---


Use this as the execution checklist when the user wants to address comments on an existing PR.

## Fast path

1. Run auth preflight.
2. Identify the PR for the current branch.
3. Fetch PR metadata and structured feedback.
4. Summarize and number actionable items.
5. Ask the user which items to address.
6. Apply selected fixes.
7. Run targeted validation.
8. Draft or post replies.
9. Resolve threads only if the fix is complete.
10. Report what changed and what remains.

## Minimum data to capture

- PR number
- PR URL
- branch name
- draft state
- review decision
- list of issue comments
- list of review threads/comments
- unresolved vs resolved thread state
- outdated state when available

## Suggested operator summary format

For each numbered item, include:

- type: issue comment / review thread
- author
- file and line if available
- one-sentence summary of the requested change
- whether it appears actionable, ambiguous, or outdated
- likely validation needed after the fix

## Reply discipline

Good replies usually include:

- what changed
- where it changed
- validation run
- any tradeoff, limitation, or follow-up

Avoid one-word replies like `fixed` unless the user explicitly asks for ultra-brief responses.
