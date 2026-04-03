# Verification Checklist (Français)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-generate/references/verification-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-generate/references/verification-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-generate/references/verification-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-generate/references/verification-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-generate/references/verification-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-generate/references/verification-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-generate/references/verification-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-generate/references/verification-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-generate/references/verification-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-generate/references/verification-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-generate/references/verification-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-generate/references/verification-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-generate/references/verification-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-generate/references/verification-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-generate/references/verification-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-generate/references/verification-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-generate/references/verification-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-generate/references/verification-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-generate/references/verification-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-generate/references/verification-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-generate/references/verification-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-generate/references/verification-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-generate/references/verification-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-generate/references/verification-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-generate/references/verification-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-generate/references/verification-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-generate/references/verification-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-generate/references/verification-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-generate/references/verification-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-generate/references/verification-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-generate/references/verification-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-generate/references/verification-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-generate/references/verification-checklist.md)

---


Use this checklist after running an Nx generator.

## Immediate checks

- [ ] Confirm the command succeeded.
- [ ] Inspect created and modified files.
- [ ] Confirm the artifact landed in the intended directory.
- [ ] Confirm project name, tags, and config updates look correct.

## Formatting

- [ ] Run repo-appropriate formatting.
- [ ] If using Nx formatting, run:
  ```bash
  pnpm nx format --fix
  ```

## Project-scoped validation

Prefer scoped validation over workspace-wide commands.

- [ ] Run lint for the changed or created project when available.
- [ ] Run test for the changed or created project when available.
- [ ] Run build for the changed or created project when available.
- [ ] Use affected/project-scoped commands when the impacted scope is known.

## Sync-generator awareness

- [ ] Re-check the diff after running tasks.
- [ ] Note any additional file changes caused by follow-up task execution.

## Handoff summary

Record:

- generator used
- final command
- files/projects created
- config changes introduced
- verification performed
- unresolved follow-ups
