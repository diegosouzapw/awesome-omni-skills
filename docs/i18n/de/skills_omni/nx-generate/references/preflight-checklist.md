# Preflight Checklist (Deutsch)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-generate/references/preflight-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-generate/references/preflight-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-generate/references/preflight-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-generate/references/preflight-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-generate/references/preflight-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-generate/references/preflight-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-generate/references/preflight-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-generate/references/preflight-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-generate/references/preflight-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-generate/references/preflight-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-generate/references/preflight-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-generate/references/preflight-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-generate/references/preflight-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-generate/references/preflight-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-generate/references/preflight-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-generate/references/preflight-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-generate/references/preflight-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-generate/references/preflight-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-generate/references/preflight-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-generate/references/preflight-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-generate/references/preflight-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-generate/references/preflight-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-generate/references/preflight-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-generate/references/preflight-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-generate/references/preflight-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-generate/references/preflight-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-generate/references/preflight-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-generate/references/preflight-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-generate/references/preflight-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-generate/references/preflight-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-generate/references/preflight-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-generate/references/preflight-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-generate/references/preflight-checklist.md)

---


Complete this checklist before running `nx generate`.

## Workspace and command context

- [ ] I know the workspace root.
- [ ] I am using the repo's local package-manager wrapper for Nx.
- [ ] I know whether current working directory affects placement for this generator.

## Generator selection

- [ ] I listed available generators with `nx list`.
- [ ] I checked local workspace generators before external plugins.
- [ ] I selected the exact generator name.

## Option validation

- [ ] I ran `<wrapper> nx g <generator> --help`.
- [ ] I identified required options.
- [ ] I captured important optional options relevant to the request.
- [ ] I know the target name, directory, and any tags or metadata.

## Side-effect review

- [ ] I understand whether the generator may modify config files.
- [ ] I understand whether it may affect multiple projects.
- [ ] I reviewed schema or source if the generator is unfamiliar.
- [ ] I confirmed the side effects still match the user request.

## Verification plan

- [ ] I know which project(s) will need lint/test/build verification.
- [ ] I plan to inspect the diff immediately after generation.
- [ ] I will re-check the diff after verification in case sync generators update files.

## When to stop and ask for confirmation

Pause and confirm with the user if:

- generator choice is ambiguous
- required naming or path inputs are missing
- the generator changes broader workspace config than requested
- the generated artifact could land in multiple valid locations
