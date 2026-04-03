# Handoff Router (Bahasa Indonesia)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/figma-implement-design/agents/handoff-router.md) · 🇪🇸 [es](../../../../es/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇩🇪 [de](../../../../de/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇮🇹 [it](../../../../it/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇮🇳 [in](../../../../in/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇹🇭 [th](../../../../th/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇮🇩 [id](../../../../id/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇳🇴 [no](../../../../no/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇩🇰 [da](../../../../da/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇮🇱 [he](../../../../he/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/figma-implement-design/agents/handoff-router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/figma-implement-design/agents/handoff-router.md)

---


Use this note when the task is no longer primarily a Figma design implementation workflow.

## Route to `@figma` when

- MCP setup is missing
- OAuth or connection recovery is required
- the user wants general Figma exploration rather than implementation
- the task is mostly about raw file inspection or tool troubleshooting

## Route to `@accessibility` when

- the implementation uncovered deeper accessibility concerns that require dedicated review
- the user wants WCAG-focused auditing beyond normal implementation checks
- focus management, keyboard flow, or semantic remediation becomes the main work item

## Route to a frontend testing or visual regression skill when

- the design implementation is complete and now needs screenshot comparison or regression automation
- the team wants durable parity checks in CI rather than one-time visual review

## Route to a design-system or token-management skill when

- the main blocker is token architecture
- many components need shared variant redesign
- the work has expanded beyond one implementation into system-level component governance

## Handoff note template

```text
This started as a Figma implementation task, but the main blocker is now <blocker>. Handing off to <skill> with preserved context: target node, fetched screenshot/context, component mapping decisions so far, token mismatches, and any known accessibility or asset issues.
```
