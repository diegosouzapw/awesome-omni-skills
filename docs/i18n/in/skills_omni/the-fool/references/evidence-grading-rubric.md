# Evidence Grading Rubric (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇪🇸 [es](../../../../es/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇫🇷 [fr](../../../../fr/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇩🇪 [de](../../../../de/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇮🇹 [it](../../../../it/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇷🇺 [ru](../../../../ru/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇯🇵 [ja](../../../../ja/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇰🇷 [ko](../../../../ko/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇸🇦 [ar](../../../../ar/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇮🇳 [hi](../../../../hi/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇮🇳 [in](../../../../in/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇹🇭 [th](../../../../th/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇻🇳 [vi](../../../../vi/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇮🇩 [id](../../../../id/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇲🇾 [ms](../../../../ms/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇳🇱 [nl](../../../../nl/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇵🇱 [pl](../../../../pl/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇸🇪 [sv](../../../../sv/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇳🇴 [no](../../../../no/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇩🇰 [da](../../../../da/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇫🇮 [fi](../../../../fi/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇵🇹 [pt](../../../../pt/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇷🇴 [ro](../../../../ro/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇭🇺 [hu](../../../../hu/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇧🇬 [bg](../../../../bg/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇸🇰 [sk](../../../../sk/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇮🇱 [he](../../../../he/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇵🇭 [phi](../../../../phi/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇨🇿 [cs](../../../../cs/skills_omni/the-fool/references/evidence-grading-rubric.md) · 🇹🇷 [tr](../../../../tr/skills_omni/the-fool/references/evidence-grading-rubric.md)

---


Use this to classify support quality for each material claim.

## Evidence grades

### Direct

Strongest practical support for the claim in context.

Examples:
- production metrics
- controlled experiment results
- representative usability testing
- audited logs
- verified financial or operational outcomes

### Indirect

Relevant but not fully decisive support.

Examples:
- adjacent-case studies
- benchmark data from a similar environment
- internal expert analysis without direct validation
- partial telemetry

### Anecdotal

Low-confidence support based on personal reports or isolated examples.

Examples:
- single customer story
- one team's experience
- non-representative interview quotes

### Assertion

Claim is stated but not supported.

Examples:
- "everyone wants this"
- "this will scale"
- "this is secure"

### Missing

No evidence presented for a decision-critical claim.

## Claim audit template

| Claim | Evidence grade | What supports it | What is missing | Effect on confidence |
| --- | --- | --- | --- | --- |
| <claim> | Direct/Indirect/Anecdotal/Assertion/Missing | <support> | <gap> | <impact> |

## Rules

- Do not treat anecdotes as representative demand.
- Do not treat correlation as causation unless justified.
- Lower confidence when key claims rest on assertion or missing evidence.
- If multiple key claims are weak, the overall output should trend toward `LOW` or `PIVOT` confidence.
