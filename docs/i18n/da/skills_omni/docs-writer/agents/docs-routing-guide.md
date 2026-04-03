# Docs Routing Guide (Dansk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇪🇸 [es](../../../../es/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇫🇷 [fr](../../../../fr/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇩🇪 [de](../../../../de/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇮🇹 [it](../../../../it/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇷🇺 [ru](../../../../ru/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇯🇵 [ja](../../../../ja/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇰🇷 [ko](../../../../ko/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇸🇦 [ar](../../../../ar/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇮🇳 [hi](../../../../hi/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇮🇳 [in](../../../../in/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇹🇭 [th](../../../../th/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇻🇳 [vi](../../../../vi/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇮🇩 [id](../../../../id/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇲🇾 [ms](../../../../ms/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇳🇱 [nl](../../../../nl/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇵🇱 [pl](../../../../pl/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇸🇪 [sv](../../../../sv/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇳🇴 [no](../../../../no/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇩🇰 [da](../../../../da/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇫🇮 [fi](../../../../fi/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇵🇹 [pt](../../../../pt/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇷🇴 [ro](../../../../ro/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇭🇺 [hu](../../../../hu/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇧🇬 [bg](../../../../bg/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇸🇰 [sk](../../../../sk/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇮🇱 [he](../../../../he/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇵🇭 [phi](../../../../phi/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇨🇿 [cs](../../../../cs/skills_omni/docs-writer/agents/docs-routing-guide.md) · 🇹🇷 [tr](../../../../tr/skills_omni/docs-writer/agents/docs-routing-guide.md)

---


Use this guide when the task starts as documentation work but may need a handoff.

## Stay in `docs-writer` when

- the main deliverable is user-facing documentation
- the core work is clarifying, structuring, or verifying prose docs
- you can validate the content against implementation or trusted specs

## Hand off when

### Accessibility dominates
Use `@accessibility` when the request needs semantic structure review, alt-text strategy, inclusive wording review, or accessibility-specific acceptance criteria.

### Security dominates
Use `@security-review` when the document contains production operations, secrets handling, incident procedures, or guidance that could create security risk if inaccurate.

### API reference generation dominates
Use `@api-reference` when the task is primarily generated or schema-driven reference documentation instead of authored guides.

### Release communication dominates
Use `@release-notes` when the main output is a changelog, release note, or version announcement.

### Architecture explanation dominates
Use `@architecture-docs` when the deliverable is mostly ADRs, system design rationale, or internal architecture communication.

### Implementation truth is unclear
Escalate to a subject-matter owner when code, tests, and existing docs conflict and no safe inference is possible.
