# Review Router (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇪🇸 [es](../../../../es/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇩🇪 [de](../../../../de/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇮🇹 [it](../../../../it/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇮🇳 [in](../../../../in/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇹🇭 [th](../../../../th/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇮🇩 [id](../../../../id/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇳🇴 [no](../../../../no/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇩🇰 [da](../../../../da/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇮🇱 [he](../../../../he/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-design-guidelines-v2/agents/review-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-design-guidelines-v2/agents/review-router.md)

---


Use this note when deciding whether `web-design-guidelines-v2` should remain the lead skill.

## Stay with this skill when

- the core task is reviewing UI code or behavior
- the main findings concern semantics, focus, keyboard behavior, forms, motion, responsive layout, theming, or navigation state
- the output is a PR review, audit packet, or implementation guidance for interface quality

## Hand off when

### `@accessibility`
The user needs a deeper accessibility investigation, standards mapping, or broader conformance-oriented review.

### `@core-web-vitals`
The dominant issue is render performance, layout shift, long interactions, or performance budgets.

### `@seo`
The main concern is indexing, metadata, content discoverability, or search visibility.

### `@frontend-debugging`
The work is mostly about reproducing and fixing runtime bugs, crashes, hydration defects, or broken event flows.

### `@design-system`
The request is primarily about component governance, token usage, shared pattern decisions, or system-wide consistency policy.

### `@web-quality-audit`
The user wants a broader multi-domain website assessment rather than a focused UI review.

### `@localization` / `@i18n`
The dominant issues involve locale formatting, translation quality, bidi support, or localization workflow quality.

## Multi-skill overlap rule

If the task starts as a UI review but reveals adjacent issues, keep this skill as the lead only for the UI findings. Summarize the overlap and recommend the follow-on skill rather than inflating this review into a broader audit.
