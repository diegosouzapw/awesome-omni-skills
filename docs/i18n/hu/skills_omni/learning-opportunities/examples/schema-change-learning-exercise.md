# Schema Change Learning Exercise (Magyar)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇪🇸 [es](../../../../es/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇫🇷 [fr](../../../../fr/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇩🇪 [de](../../../../de/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇮🇹 [it](../../../../it/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇷🇺 [ru](../../../../ru/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇯🇵 [ja](../../../../ja/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇰🇷 [ko](../../../../ko/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇸🇦 [ar](../../../../ar/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇮🇳 [hi](../../../../hi/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇮🇳 [in](../../../../in/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇹🇭 [th](../../../../th/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇻🇳 [vi](../../../../vi/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇮🇩 [id](../../../../id/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇲🇾 [ms](../../../../ms/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇳🇱 [nl](../../../../nl/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇵🇱 [pl](../../../../pl/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇸🇪 [sv](../../../../sv/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇳🇴 [no](../../../../no/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇩🇰 [da](../../../../da/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇫🇮 [fi](../../../../fi/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇵🇹 [pt](../../../../pt/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇷🇴 [ro](../../../../ro/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇭🇺 [hu](../../../../hu/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇧🇬 [bg](../../../../bg/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇸🇰 [sk](../../../../sk/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇮🇱 [he](../../../../he/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇵🇭 [phi](../../../../phi/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇨🇿 [cs](../../../../cs/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md) · 🇹🇷 [tr](../../../../tr/skills_omni/learning-opportunities/examples/schema-change-learning-exercise.md)

---


## Scenario

A nullable foreign key was introduced during a phased rollout.

## Good prompt

**Agent:** We finished the migration. Why do you think the new foreign key is nullable during rollout? (Take your best guess.)

## Why this works

- tied to one migration decision
- answerable without reading the whole system
- leads naturally into rollout safety, backfills, and deploy order

## Good follow-up after answer

State what was correct, what was missing, and why nullability reduces rollout risk while old rows are being backfilled.
