# Verification Matrix (עברית)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/codenavi/references/verification-matrix.md) · 🇪🇸 [es](../../../../es/skills_omni/codenavi/references/verification-matrix.md) · 🇫🇷 [fr](../../../../fr/skills_omni/codenavi/references/verification-matrix.md) · 🇩🇪 [de](../../../../de/skills_omni/codenavi/references/verification-matrix.md) · 🇮🇹 [it](../../../../it/skills_omni/codenavi/references/verification-matrix.md) · 🇷🇺 [ru](../../../../ru/skills_omni/codenavi/references/verification-matrix.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/codenavi/references/verification-matrix.md) · 🇯🇵 [ja](../../../../ja/skills_omni/codenavi/references/verification-matrix.md) · 🇰🇷 [ko](../../../../ko/skills_omni/codenavi/references/verification-matrix.md) · 🇸🇦 [ar](../../../../ar/skills_omni/codenavi/references/verification-matrix.md) · 🇮🇳 [hi](../../../../hi/skills_omni/codenavi/references/verification-matrix.md) · 🇮🇳 [in](../../../../in/skills_omni/codenavi/references/verification-matrix.md) · 🇹🇭 [th](../../../../th/skills_omni/codenavi/references/verification-matrix.md) · 🇻🇳 [vi](../../../../vi/skills_omni/codenavi/references/verification-matrix.md) · 🇮🇩 [id](../../../../id/skills_omni/codenavi/references/verification-matrix.md) · 🇲🇾 [ms](../../../../ms/skills_omni/codenavi/references/verification-matrix.md) · 🇳🇱 [nl](../../../../nl/skills_omni/codenavi/references/verification-matrix.md) · 🇵🇱 [pl](../../../../pl/skills_omni/codenavi/references/verification-matrix.md) · 🇸🇪 [sv](../../../../sv/skills_omni/codenavi/references/verification-matrix.md) · 🇳🇴 [no](../../../../no/skills_omni/codenavi/references/verification-matrix.md) · 🇩🇰 [da](../../../../da/skills_omni/codenavi/references/verification-matrix.md) · 🇫🇮 [fi](../../../../fi/skills_omni/codenavi/references/verification-matrix.md) · 🇵🇹 [pt](../../../../pt/skills_omni/codenavi/references/verification-matrix.md) · 🇷🇴 [ro](../../../../ro/skills_omni/codenavi/references/verification-matrix.md) · 🇭🇺 [hu](../../../../hu/skills_omni/codenavi/references/verification-matrix.md) · 🇧🇬 [bg](../../../../bg/skills_omni/codenavi/references/verification-matrix.md) · 🇸🇰 [sk](../../../../sk/skills_omni/codenavi/references/verification-matrix.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/codenavi/references/verification-matrix.md) · 🇮🇱 [he](../../../../he/skills_omni/codenavi/references/verification-matrix.md) · 🇵🇭 [phi](../../../../phi/skills_omni/codenavi/references/verification-matrix.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/codenavi/references/verification-matrix.md) · 🇨🇿 [cs](../../../../cs/skills_omni/codenavi/references/verification-matrix.md) · 🇹🇷 [tr](../../../../tr/skills_omni/codenavi/references/verification-matrix.md)

---


Use this matrix to choose acceptable evidence for the task at hand.

| Task type | Preferred evidence | Acceptable fallback | Must be stated if missing |
| --- | --- | --- | --- |
| Bug fix | failing repro now passes; targeted regression test | manual repro steps with exact inputs | environment gap, unproven assumptions |
| Small feature | targeted tests; manual path walkthrough | lint/typecheck plus precise manual checks | untested edge cases |
| Refactor | unchanged tests; diff review; typecheck | targeted smoke check on affected path | behavioral assumptions |
| Flow explanation | file/symbol trace; note reviewed against source | developer confirmation after walkthrough | ambiguous branches or unknown runtime paths |
| External API/library usage | official docs plus targeted code/test evidence | repository-native examples or existing call sites | uncertain contract details |

## Minimum verification checklist

- Verify each planned step.
- Review changed scope, not just test output.
- Confirm external boundaries if they matter.
- State what was not verified automatically.
- Provide manual validation steps when needed.

## Manual validation format

Use this structure when automatic verification is unavailable:

```text
Could not verify automatically:
- [what could not be run]

Assumptions:
- [environment, data, flag, service assumptions]

Manual checks:
1. [step]
2. [step]
3. [expected outcome]

Residual risk:
- [what may still be wrong]
```
