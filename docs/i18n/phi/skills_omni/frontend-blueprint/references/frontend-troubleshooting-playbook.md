# Frontend Troubleshooting Playbook (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/frontend-blueprint/references/frontend-troubleshooting-playbook.md)

---


## Missing References

**Symptoms:** The user keeps saying "just make it nice" or cannot share examples.

**Recovery:** Use contrast pairs, anti-references, and one-sentence direction options. Do not generate a complete UI until one direction is chosen.

## Token Drift

**Symptoms:** Final output feels inconsistent even though individual pieces look acceptable.

**Recovery:** Re-check the token worksheet. Standardize repeated colors, spacing, radius, and typography before changing component structure.

## Responsive Regression

**Symptoms:** Layout works full-width but collapses poorly in smaller spaces.

**Recovery:** Test both viewport width and container width assumptions. Simplify nesting, reduce fixed dimensions, and use more adaptive layout rules.

## Accessibility Regression After Redesign

**Symptoms:** Cleaner visuals caused lower contrast, hidden focus, or smaller click targets.

**Recovery:** Restore usability first. Keep the direction but adjust values and states until the component is both attractive and operable.

## Interactive Pattern Failure

**Symptoms:** Dialogs, menus, tabs, and accordions look polished but behave incorrectly.

**Recovery:** Repair semantics and keyboard interaction before adding more visual polish.

## Workflow Overhead

**Symptoms:** A tiny request is being treated like a design-system project.

**Recovery:** Compress discovery, keep the approval gate, and produce only the smallest artifact needed to avoid guessing.
