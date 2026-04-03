# Delegation Smoke Tests (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇪🇸 [es](../../../../es/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇫🇷 [fr](../../../../fr/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇩🇪 [de](../../../../de/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇮🇹 [it](../../../../it/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇷🇺 [ru](../../../../ru/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇯🇵 [ja](../../../../ja/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇰🇷 [ko](../../../../ko/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇸🇦 [ar](../../../../ar/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇮🇳 [hi](../../../../hi/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇮🇳 [in](../../../../in/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇹🇭 [th](../../../../th/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇻🇳 [vi](../../../../vi/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇮🇩 [id](../../../../id/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇲🇾 [ms](../../../../ms/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇳🇱 [nl](../../../../nl/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇵🇱 [pl](../../../../pl/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇸🇪 [sv](../../../../sv/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇳🇴 [no](../../../../no/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇩🇰 [da](../../../../da/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇫🇮 [fi](../../../../fi/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇵🇹 [pt](../../../../pt/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇷🇴 [ro](../../../../ro/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇭🇺 [hu](../../../../hu/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇧🇬 [bg](../../../../bg/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇸🇰 [sk](../../../../sk/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇮🇱 [he](../../../../he/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇵🇭 [phi](../../../../phi/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇨🇿 [cs](../../../../cs/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md) · 🇹🇷 [tr](../../../../tr/skills_omni/cursor-subagent-creator/examples/delegation-smoke-tests.md)

---


Use these prompts after creating a Cursor subagent.

## Explicit invocation tests

```text
/verifier confirm the new export feature is fully implemented and tested
```

```text
/security-auditor review the payment flow for security issues
```

```text
/orchestrator break this migration into phases and coordinate the work
```

## Natural-language delegation tests

```text
Please verify that the completed authentication work actually functions and list anything still incomplete.
```

```text
Before merge, review these payment changes for security risks around auth, secrets, and permissions.
```

```text
This migration is large. Split it into phases, coordinate the work, and keep the handoffs clear.
```

## What to check

- Did Cursor delegate to the intended subagent?
- Did the output match the requested structure?
- Did the subagent stay within its scope?
- Did permissions match expected behavior?
- Was the description specific enough?
