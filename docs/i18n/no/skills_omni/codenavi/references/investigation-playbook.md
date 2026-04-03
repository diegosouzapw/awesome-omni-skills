# Investigation Playbook (Norsk)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/codenavi/references/investigation-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/codenavi/references/investigation-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/codenavi/references/investigation-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/codenavi/references/investigation-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/codenavi/references/investigation-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/codenavi/references/investigation-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/codenavi/references/investigation-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/codenavi/references/investigation-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/codenavi/references/investigation-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/codenavi/references/investigation-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/codenavi/references/investigation-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/codenavi/references/investigation-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/codenavi/references/investigation-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/codenavi/references/investigation-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/codenavi/references/investigation-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/codenavi/references/investigation-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/codenavi/references/investigation-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/codenavi/references/investigation-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/codenavi/references/investigation-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/codenavi/references/investigation-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/codenavi/references/investigation-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/codenavi/references/investigation-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/codenavi/references/investigation-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/codenavi/references/investigation-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/codenavi/references/investigation-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/codenavi/references/investigation-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/codenavi/references/investigation-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/codenavi/references/investigation-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/codenavi/references/investigation-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/codenavi/references/investigation-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/codenavi/references/investigation-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/codenavi/references/investigation-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/codenavi/references/investigation-playbook.md)

---


Use this playbook when the repository is unfamiliar and the right entrypoint is not obvious.

## Search-first recon sequence

1. Restate the mission in one sentence.
2. Pick the strongest available anchor:
   - error message
   - route or endpoint
   - UI text
   - config key
   - feature flag
   - command name
   - test name
   - symbol or type name
3. Search for the anchor across the repo.
4. Open the smallest relevant span first:
   - function signature
   - handler body
   - related config
   - nearby tests
5. Trace direct callers and callees.
6. Identify boundaries:
   - database
   - queue
   - network call
   - cache
   - feature flag
   - environment variable
7. Stop once you can explain the current behavior and propose a verifiable next step.

## Practical search patterns

Search for:

- exact error text
- endpoint fragments such as `/api/...`
- config keys and env var names
- UI labels or user-visible strings
- test names matching the failure or feature
- symbols near the area named in the report

## File reading rules

- Prefer partial reads over whole-file reads for large files.
- Read tests near implementation early.
- Check README, docs, and config before inferring behavior.
- Avoid opening many sibling files unless the trace requires it.

## Stop conditions

Stop recon and move to planning when you can answer:

- Where does the flow start?
- Which files are most likely to change?
- What evidence will prove the fix or explanation is correct?
- What is still uncertain?

## If recon is drifting

- Collapse back to one entrypoint.
- Write a one-sentence mission again.
- List the top 3 candidate files only.
- Do not read the repo sequentially.
