# Coding Principles (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/coding-principles.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/coding-principles.md)

---


Behavioral bias, not checklist. Read before every implementation.

---

## Before Coding

- State assumptions explicitly. If uncertain, ask.
- Multiple interpretations exist? Present all—don't pick silently.
- Simpler approach exists? Say so. Push back when warranted.
- Something unclear? Stop. Name what's confusing. Ask.
- User's approach seems wrong? Disagree honestly. Don't be sycophantic.

---

## During Implementation

### Simplicity

- No features beyond what was asked
- No abstractions for single-use code
- No "flexibility" or "configurability" not requested
- No error handling for impossible scenarios
- 200 lines that could be 50? Rewrite it.

### Surgical Changes

- Don't "improve" adjacent code, comments, or formatting
- Don't refactor things that aren't broken
- Match existing style, even if you'd do differently
- Unrelated dead code noticed? Mention it—don't delete it
- Remove ONLY imports/variables/functions YOUR changes orphaned
- Don't remove pre-existing dead code unless asked

### Test Integrity

- NEVER weaken an existing test assertion to make it pass
- NEVER delete a test to reduce failure count
- NEVER use the test framework's skip/disable/pending mechanism to bypass a failing test
- NEVER modify tests written in the RED phase during GREEN phase
- If a test is genuinely wrong, STOP and confirm with the user before changing it
- Tests are the spec — implementation conforms to tests, not the other way around

### Goal-Driven

- Transform vague tasks into verifiable goals
- Multi-step work? State brief plan with verify checkpoints
- Every changed line must trace directly to user's request

---

## After Each Change

Ask: "Would senior engineer call this overcomplicated?"
If yes → simplify before proceeding.
