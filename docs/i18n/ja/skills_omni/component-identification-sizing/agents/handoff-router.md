# Handoff Router (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇪🇸 [es](../../../../es/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇩🇪 [de](../../../../de/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇮🇹 [it](../../../../it/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇮🇳 [in](../../../../in/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇹🇭 [th](../../../../th/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇮🇩 [id](../../../../id/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇳🇴 [no](../../../../no/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇩🇰 [da](../../../../da/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇮🇱 [he](../../../../he/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/component-identification-sizing/agents/handoff-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/component-identification-sizing/agents/handoff-router.md)

---


Use this note when the task moves beyond static component identification and sizing.

## Route when

### Dependency analysis is needed

Hand off when the user asks:

- which components are tightly coupled
- what depends on what
- whether a large component can be extracted safely

Pass along:

- component inventory
- boundary confidence
- largest components
- ambiguous/shared components

### Decomposition planning is needed

Hand off when the user asks:

- what to extract first
- how to sequence refactors
- how to define target domains or bounded contexts

Pass along:

- prioritized size findings
- notes on cohesion and suspected subdomains
- limitations of size-only analysis

### Security or dependency-risk scanning is needed

Hand off when the user asks:

- whether dependencies are vulnerable
- whether vendored code is risky
- how to scan packages for CVEs

Pass along:

- repository scope
- exclusions used
- package/component paths already identified

### Runtime/service topology analysis is needed

Hand off when the user asks:

- which services talk to each other at runtime
- where bottlenecks occur
- what the deployment topology looks like

Pass along:

- static component inventory only as context
- explicit statement that this skill did not analyze runtime behavior

## Minimal handoff packet

```text
Completed static component identification and sizing for <scope>.

Exclusions used: <rules>
Boundary signals used: <signals>
Largest components: <list>
Ambiguous components: <list>
Limitations: size metrics are structural only, not runtime or dependency proof.
```
