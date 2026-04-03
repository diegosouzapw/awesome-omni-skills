# Router Guidance (Română)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-fix-ci/agents/router.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-fix-ci/agents/router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-fix-ci/agents/router.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-fix-ci/agents/router.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-fix-ci/agents/router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-fix-ci/agents/router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-fix-ci/agents/router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-fix-ci/agents/router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-fix-ci/agents/router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-fix-ci/agents/router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-fix-ci/agents/router.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-fix-ci/agents/router.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-fix-ci/agents/router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-fix-ci/agents/router.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-fix-ci/agents/router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-fix-ci/agents/router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-fix-ci/agents/router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-fix-ci/agents/router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-fix-ci/agents/router.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-fix-ci/agents/router.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-fix-ci/agents/router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-fix-ci/agents/router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-fix-ci/agents/router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-fix-ci/agents/router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-fix-ci/agents/router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-fix-ci/agents/router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-fix-ci/agents/router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-fix-ci/agents/router.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-fix-ci/agents/router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-fix-ci/agents/router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-fix-ci/agents/router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-fix-ci/agents/router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-fix-ci/agents/router.md)

---


Use this skill for GitHub Actions-backed PR check triage and plan-first remediation.

## Route Away When

- The task is mainly about PR review comments rather than CI failures -> use `gh-address-comments`.
- The failing check is external to GitHub Actions -> hand off to the provider-specific workflow or team.
- The task becomes a broad workflow redesign, release pipeline overhaul, or repository-wide CI architecture change -> use a workflow authoring or broader CI skill.
- The root problem is clearly a normal code/test defect after triage -> continue with a test-debugging or implementation skill, but preserve the CI evidence packet.
- The likely fix involves security-sensitive permission or secret changes -> involve a security or permissions review skill.

## Preserve in Handoff

Always carry forward:
- PR number and URL
- head SHA
- failing or missing check name
- run URL if available
- failing job and attempt if known
- first actionable non-secret evidence snippet
- your confidence level and why
- whether user approval has already been granted for changes
