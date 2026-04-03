# Reviewer Reply Templates (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-address-comments/references/reviewer-reply-templates.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-address-comments/references/reviewer-reply-templates.md)

---


Use these as starting points. Adapt them to the actual change.

## Code fix applied

```text
Updated `<path>` to address this feedback by <short description>. I also added/updated <test or validation artifact>. Validation run: `<command>`.
```

## Clarification without code change

```text
I reviewed this thread against the latest branch state and did not make a code change because <reason>. The current implementation in `<path>` already covers the concern via <brief explanation>.
```

## Outdated comment

```text
This looks outdated relative to the latest changes on the branch. The relevant logic now lives in `<path>` and the concern is handled by <brief explanation>. Happy to adjust further if you want the newer implementation changed as well.
```

## Partial follow-up

```text
Addressed the main issue in `<path>`, but I left <remaining concern> unchanged because <constraint or tradeoff>. Validation run: `<command>`. If you want, I can follow up with a separate change for the remaining piece.
```
