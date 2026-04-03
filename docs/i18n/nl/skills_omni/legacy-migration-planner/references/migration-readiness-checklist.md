# Migration Readiness Checklist (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇪🇸 [es](../../../../es/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇫🇷 [fr](../../../../fr/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇩🇪 [de](../../../../de/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇮🇹 [it](../../../../it/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇷🇺 [ru](../../../../ru/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇯🇵 [ja](../../../../ja/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇰🇷 [ko](../../../../ko/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇸🇦 [ar](../../../../ar/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇮🇳 [hi](../../../../hi/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇮🇳 [in](../../../../in/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇹🇭 [th](../../../../th/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇻🇳 [vi](../../../../vi/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇮🇩 [id](../../../../id/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇲🇾 [ms](../../../../ms/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇳🇱 [nl](../../../../nl/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇵🇱 [pl](../../../../pl/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇸🇪 [sv](../../../../sv/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇳🇴 [no](../../../../no/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇩🇰 [da](../../../../da/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇫🇮 [fi](../../../../fi/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇵🇹 [pt](../../../../pt/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇷🇴 [ro](../../../../ro/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇭🇺 [hu](../../../../hu/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇧🇬 [bg](../../../../bg/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇸🇰 [sk](../../../../sk/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇮🇱 [he](../../../../he/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇵🇭 [phi](../../../../phi/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇨🇿 [cs](../../../../cs/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md) · 🇹🇷 [tr](../../../../tr/skills_omni/legacy-migration-planner/references/migration-readiness-checklist.md)

---


Use this checklist before recommending a target architecture or migration wave plan.

## 1. Delivery Readiness

Check whether the team can deliver incremental changes safely.

- Version control and review workflow are in regular use
- CI builds are reliable enough to validate migration changes
- Deployment process is documented or observable
- Teams can deploy small increments instead of rare large releases
- Ownership for affected areas is known

## 2. Testing Readiness

Check whether changes can be validated before and after cutover.

- Baseline smoke tests exist for critical user flows
- Contract or interface tests exist, or can be added before migration
- Regression coverage is sufficient for the first migration wave
- Test environments are close enough to production to catch compatibility issues
- There is a way to compare legacy and new behavior during coexistence

## 3. Observability Readiness

Check whether failures will be detectable during phased rollout.

- Logs are available for critical paths
- Basic metrics exist for request volume, latency, and error rates
- Tracing or request correlation exists, or can be added
- Dashboards can isolate behavior for the migrating area
- Alerting exists for user-visible failures

## 4. Architecture Readiness

Check whether a safe target state is realistic.

- Current runtime versions are verified from source
- External interfaces are inventoried
- Dependency graph is understood well enough to identify seams
- Data ownership is documented or can be documented
- The team has evidence for whether modular monolith or microservices is the better target

## 5. Rollout Readiness

Check whether phased delivery is operationally possible.

- Traffic can be routed, switched, or isolated safely if needed
- Feature flags, staged rollout, or equivalent controls exist when applicable
- Rollback conditions can be measured
- Rollback actions are documented for application deploys
- Data-changing steps have explicit recovery assumptions

## 6. Stop Conditions

Do not recommend an execution roadmap yet if any of these are true:

- current versions are unknown
- no external contract inventory exists
- no meaningful test baseline exists for critical flows
- no way exists to detect migration failure in production
- proposed service boundaries depend on unresolved shared writes
- the desired target architecture is being chosen for fashion rather than evidence

## Outcome Labels

Use one of these labels in `readiness-checklist.md`:

- **Ready for phased migration**
- **Ready only for preparatory refactoring**
- **Not ready for safe migration planning without more evidence**
