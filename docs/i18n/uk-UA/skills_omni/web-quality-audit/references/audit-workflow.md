# Audit workflow reference (Українська)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/web-quality-audit/references/audit-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/web-quality-audit/references/audit-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/web-quality-audit/references/audit-workflow.md)

---


Use this reference when executing a real audit, not just summarizing quality concepts.

## 1. Scope

Capture:

- target domain or environment
- site type: marketing site, docs site, ecommerce, SaaS app, dashboard, portal
- business-critical pages or flows
- public vs authenticated coverage
- constraints such as unavailable accounts, geofencing, feature flags, or unstable test data

## 2. Select representative pages or flows

Prefer a small set that reflects real user paths:

- homepage or entry page
- one key template page
- one conversion or lead-gen page
- one authenticated or stateful page when relevant
- one critical journey if single-page snapshots would miss interaction issues

## 3. Record evidence context

For each page or step, record:

- URL
- page or flow role
- timestamp
- device assumption
- network assumption
- auth state
- tool used
- whether the result is lab data, field data, or manual observation

## 4. Run automated checks

Collect category outputs for:

- performance
- accessibility
- SEO
- best practices

Keep raw outputs or screenshots when available.

## 5. Run manual validation

### Accessibility

Manually verify:

- keyboard navigation
- visible focus
- headings and landmarks
- form labels and errors
- dialog/menu/tab/custom widget behavior

### SEO

Manually verify:

- robots/index directives
- canonical tags
- title and description uniqueness
- mobile rendering basics
- sitemap and status behavior

### Browser-facing best practices

Manually verify:

- HTTPS behavior
- mixed content
- console errors
- permission prompts
- obvious deprecated API usage where visible

## 6. Synthesize findings

For each finding, write:

- category
- summary
- evidence
- user impact
- business impact
- likely cause
- recommended fix
- confidence and caveats
- whether it appears template-wide or isolated

## 7. Prioritize

Fix first:

1. blockers to use, conversion, indexing, or trust
2. issues affecting multiple pages or core journeys
3. problems confirmed by both lab and field evidence
4. lower-effort, high-impact changes

## 8. Handoff

Escalate when the issue needs deeper specialization:

- `@core-web-vitals` for deep performance diagnosis
- `@web-accessibility` for accessibility remediation
- `@seo` for technical SEO follow-up
- `@web-best-practices` for platform hygiene follow-up
