# Routing Note for react-best-practices (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/react-best-practices/agents/router.md) · 🇪🇸 [es](../../../../es/skills_omni/react-best-practices/agents/router.md) · 🇫🇷 [fr](../../../../fr/skills_omni/react-best-practices/agents/router.md) · 🇩🇪 [de](../../../../de/skills_omni/react-best-practices/agents/router.md) · 🇮🇹 [it](../../../../it/skills_omni/react-best-practices/agents/router.md) · 🇷🇺 [ru](../../../../ru/skills_omni/react-best-practices/agents/router.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/react-best-practices/agents/router.md) · 🇯🇵 [ja](../../../../ja/skills_omni/react-best-practices/agents/router.md) · 🇰🇷 [ko](../../../../ko/skills_omni/react-best-practices/agents/router.md) · 🇸🇦 [ar](../../../../ar/skills_omni/react-best-practices/agents/router.md) · 🇮🇳 [hi](../../../../hi/skills_omni/react-best-practices/agents/router.md) · 🇮🇳 [in](../../../../in/skills_omni/react-best-practices/agents/router.md) · 🇹🇭 [th](../../../../th/skills_omni/react-best-practices/agents/router.md) · 🇻🇳 [vi](../../../../vi/skills_omni/react-best-practices/agents/router.md) · 🇮🇩 [id](../../../../id/skills_omni/react-best-practices/agents/router.md) · 🇲🇾 [ms](../../../../ms/skills_omni/react-best-practices/agents/router.md) · 🇳🇱 [nl](../../../../nl/skills_omni/react-best-practices/agents/router.md) · 🇵🇱 [pl](../../../../pl/skills_omni/react-best-practices/agents/router.md) · 🇸🇪 [sv](../../../../sv/skills_omni/react-best-practices/agents/router.md) · 🇳🇴 [no](../../../../no/skills_omni/react-best-practices/agents/router.md) · 🇩🇰 [da](../../../../da/skills_omni/react-best-practices/agents/router.md) · 🇫🇮 [fi](../../../../fi/skills_omni/react-best-practices/agents/router.md) · 🇵🇹 [pt](../../../../pt/skills_omni/react-best-practices/agents/router.md) · 🇷🇴 [ro](../../../../ro/skills_omni/react-best-practices/agents/router.md) · 🇭🇺 [hu](../../../../hu/skills_omni/react-best-practices/agents/router.md) · 🇧🇬 [bg](../../../../bg/skills_omni/react-best-practices/agents/router.md) · 🇸🇰 [sk](../../../../sk/skills_omni/react-best-practices/agents/router.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/react-best-practices/agents/router.md) · 🇮🇱 [he](../../../../he/skills_omni/react-best-practices/agents/router.md) · 🇵🇭 [phi](../../../../phi/skills_omni/react-best-practices/agents/router.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/react-best-practices/agents/router.md) · 🇨🇿 [cs](../../../../cs/skills_omni/react-best-practices/agents/router.md) · 🇹🇷 [tr](../../../../tr/skills_omni/react-best-practices/agents/router.md)

---


Use this skill as the primary router when the request is mainly about React or Next.js performance behavior.

## Stay in this skill when

- the task is about bundle size, rendering speed, hydration, data-fetch waterfalls, or interaction performance
- the user asks for measurable optimization guidance
- the code review needs performance-focused refactoring suggestions

## Hand off when

- the main issue is accessibility correctness or UX semantics
- the issue is a general bug rather than a performance problem
- the task introduces security-sensitive server or third-party changes
- the user really wants component API architecture or composition guidance

## Handoff pattern

When handing off, keep the performance findings:

- symptom observed
- likely root cause
- what was measured
- which performance-sensitive boundaries were identified

This lets the next skill continue with context instead of restarting diagnosis.
