# Worked Example: Fork Permissions Case (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇪🇸 [es](../../../../es/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇫🇷 [fr](../../../../fr/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇩🇪 [de](../../../../de/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇮🇹 [it](../../../../it/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇷🇺 [ru](../../../../ru/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇯🇵 [ja](../../../../ja/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇰🇷 [ko](../../../../ko/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇸🇦 [ar](../../../../ar/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇮🇳 [hi](../../../../hi/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇮🇳 [in](../../../../in/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇹🇭 [th](../../../../th/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇻🇳 [vi](../../../../vi/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇮🇩 [id](../../../../id/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇲🇾 [ms](../../../../ms/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇳🇱 [nl](../../../../nl/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇵🇱 [pl](../../../../pl/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇸🇪 [sv](../../../../sv/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇳🇴 [no](../../../../no/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇩🇰 [da](../../../../da/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇫🇮 [fi](../../../../fi/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇵🇹 [pt](../../../../pt/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇷🇴 [ro](../../../../ro/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇭🇺 [hu](../../../../hu/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇧🇬 [bg](../../../../bg/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇸🇰 [sk](../../../../sk/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇮🇱 [he](../../../../he/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇵🇭 [phi](../../../../phi/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇨🇿 [cs](../../../../cs/skills_omni/gh-fix-ci/examples/fork-permissions-case.md) · 🇹🇷 [tr](../../../../tr/skills_omni/gh-fix-ci/examples/fork-permissions-case.md)

---


## Situation

A PR from `contributor:feature-branch` fails in a workflow step that uploads results or accesses a secret, but the same workflow succeeds on branches inside the main repository.

## Evidence Pattern

- Event is `pull_request`
- The failing step depends on a repository secret or elevated token permissions
- Logs show missing secret input, access denied, or skipped secure step

## Example Summary

```text
The failing check is a GitHub Actions workflow, but the evidence suggests the failure is specific to fork PR restrictions.

- The workflow is running on `pull_request` from a fork.
- A later step requires a secret or write-capable token.
- That capability is reduced or unavailable in fork context.

This is not strong evidence of an application code defect.

Proposed plan:
1. Confirm whether the secure step should run on fork PRs.
2. Adjust workflow conditions or split trusted/untrusted paths if needed.
3. Preserve least privilege; do not widen permissions casually.
```

## Reminder

Do not recommend exposing secrets to forked workflows as a quick fix.
