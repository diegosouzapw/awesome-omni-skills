# Lighthouse Audit Workflow (Suomi)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/perf-lighthouse/references/lighthouse-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/perf-lighthouse/references/lighthouse-workflow.md)

---


Use this workflow when you need a repeatable audit that can survive local review, CI, or handoff.

## 1. Define the run

Record:

- target URL or URLs
- mobile or desktop
- categories to collect
- auth requirements
- local CLI, Node API, or LHCI mode
- where artifacts will be stored

## 2. Normalize the environment

Prefer:

- a production-like build
- deterministic startup
- explicit config checked into the repo
- a dedicated `artifacts/` directory

Avoid comparing:

- dev server versus production server
- mobile versus desktop
- one Lighthouse version versus another without noting the change

## 3. Perform an initial smoke run

Run one audit to validate:

- Chrome launches
- the target URL is reachable
- the report is generated
- the route under test is the intended route

## 4. Collect repeatable evidence

For important decisions, keep:

- JSON report
- HTML report when useful for review
- command or config used
- Lighthouse version
- form factor and throttling context
- app build identifier or commit SHA

## 5. Handle noisy results correctly

If the page is unstable or CI is noisy:

- run at least 3 times
- keep all JSON outputs
- compare medians or stable repeated values
- do not report a regression from a single noisy run

## 6. Interpret before enforcing

Summarize:

- category score
- key metrics and units
- failed or regressed audits
- confidence based on run consistency
- whether the result needs a follow-up in a performance remediation skill

## 7. Enforce with the right tool

Use `budget.json` when you want Lighthouse budget support for resource and timing budgets.

Use LHCI assertions when you want CI pass/fail rules for categories and metrics.

## 8. Handoff cleanly

When the audit is complete, provide:

- environment summary
- saved artifact paths
- metrics summary
- likely regression areas
- recommended next skill if implementation work is needed
