# Dependency Audit Triage (日本語)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/best-practices/references/dependency-audit-triage.md) · 🇪🇸 [es](../../../../es/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇫🇷 [fr](../../../../fr/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇩🇪 [de](../../../../de/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇮🇹 [it](../../../../it/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇷🇺 [ru](../../../../ru/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇯🇵 [ja](../../../../ja/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇰🇷 [ko](../../../../ko/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇸🇦 [ar](../../../../ar/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇮🇳 [hi](../../../../hi/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇮🇳 [in](../../../../in/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇹🇭 [th](../../../../th/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇻🇳 [vi](../../../../vi/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇮🇩 [id](../../../../id/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇲🇾 [ms](../../../../ms/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇳🇱 [nl](../../../../nl/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇵🇱 [pl](../../../../pl/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇸🇪 [sv](../../../../sv/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇳🇴 [no](../../../../no/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇩🇰 [da](../../../../da/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇫🇮 [fi](../../../../fi/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇵🇹 [pt](../../../../pt/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇷🇴 [ro](../../../../ro/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇭🇺 [hu](../../../../hu/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇧🇬 [bg](../../../../bg/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇸🇰 [sk](../../../../sk/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇮🇱 [he](../../../../he/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇵🇭 [phi](../../../../phi/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇨🇿 [cs](../../../../cs/skills_omni/best-practices/references/dependency-audit-triage.md) · 🇹🇷 [tr](../../../../tr/skills_omni/best-practices/references/dependency-audit-triage.md)

---


Use this playbook to interpret dependency findings safely.

## Goal

Turn audit results into a reviewable remediation plan instead of applying updates blindly.

## Basic commands

```bash
npm audit
npm audit --json
npm ls <package-name>
```

## Triage steps

1. Record the audit output.
2. Separate direct dependencies from transitive ones.
3. Identify whether the vulnerable package is used in production, build tooling, tests, or only local workflows.
4. Review the fixed version and whether it implies a major-version jump.
5. Check whether the package is actually reachable by the affected code path.
6. Prefer targeted updates where possible.
7. Re-run tests, smoke checks, or critical user flows after any lockfile change.

## Decision hints

### Safe to consider quickly

- patch-level updates with low compatibility risk
- direct dependency updates with passing tests
- non-production-only issues with documented scope

### Requires caution

- major-version upgrades
- framework or bundler dependency churn
- transitive fixes that change many packages
- findings that cannot be remediated without ecosystem-level updates

## Notes on `npm audit fix`

`npm audit fix` can be useful as a draft remediation step, but it should not be treated as a default safe fix. Review the resulting diff and rerun validation before keeping it.

## Output template

For each finding, record:

- package
- severity
- direct or transitive
- affected environment
- proposed fix
- breakage risk
- validation result
- disposition: fixed, deferred, accepted temporarily, or handed off
