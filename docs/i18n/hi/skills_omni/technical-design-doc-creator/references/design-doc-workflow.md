# Design Doc Workflow (हिन्दी)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/technical-design-doc-creator/references/design-doc-workflow.md)

---


Use this lifecycle when operating the skill.

## 1. Intake

**Inputs:** user request, existing context, linked tickets if any
**Actions:** confirm a TDD is the right artifact; identify audience and project type
**Outputs:** clear task framing, expected document type
**Stop if:** the user actually needs docs writing, code generation, or a different specialist workflow

## 2. Discovery

**Inputs:** initial user answers
**Actions:** gather mandatory inputs, recover problem framing, identify missing assumptions
**Outputs:** enough context to draft
**Stop if:** problem statement, scope, and high-level approach are still missing

## 3. Risk and scope classification

**Inputs:** project type, production impact, data sensitivity, migration scope
**Actions:** decide whether security, observability, rollback, migration, or approvals are mandatory
**Outputs:** right-sized section set
**Stop if:** mandatory triggered sections are still unresolved

## 4. Drafting

**Inputs:** validated discovery notes
**Actions:** write the TDD with architectural detail, decisions, and operational readiness
**Outputs:** first complete draft
**Stop if:** the draft contains guessed facts or code-heavy implementation detail

## 5. Validation

**Inputs:** draft TDD
**Actions:** check completeness, measurable NFRs, risks, review blockers, and reversibility
**Outputs:** corrected draft plus missing-items summary
**Stop if:** production-impacting work lacks observability or rollback plans

## 6. Review preparation

**Inputs:** validated draft
**Actions:** attach ADRs, risk log, open questions, and approval fields where helpful
**Outputs:** review-ready packet
**Stop if:** key decisions and unresolved questions are not visible

## 7. Handoff

**Inputs:** final draft and review notes
**Actions:** summarize next steps, owners, and downstream publication or specialist handoff needs
**Outputs:** implementation-ready or review-ready design artifact

## Scaling guidance

- **Small:** core sections only; keep concise.
- **Medium:** add alternatives, dependencies, open questions, and rollout notes.
- **High-risk / production:** include security, observability, release/rollback, migration notes, and approvals.
