# Decomposition Roadmap Template (Português (Brasil))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇪🇸 [es](../../../../es/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇫🇷 [fr](../../../../fr/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇩🇪 [de](../../../../de/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇮🇹 [it](../../../../it/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇷🇺 [ru](../../../../ru/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇯🇵 [ja](../../../../ja/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇰🇷 [ko](../../../../ko/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇸🇦 [ar](../../../../ar/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇮🇳 [hi](../../../../hi/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇮🇳 [in](../../../../in/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇹🇭 [th](../../../../th/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇻🇳 [vi](../../../../vi/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇮🇩 [id](../../../../id/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇲🇾 [ms](../../../../ms/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇳🇱 [nl](../../../../nl/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇵🇱 [pl](../../../../pl/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇸🇪 [sv](../../../../sv/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇳🇴 [no](../../../../no/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇩🇰 [da](../../../../da/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇫🇮 [fi](../../../../fi/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇵🇹 [pt](../../../../pt/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇷🇴 [ro](../../../../ro/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇭🇺 [hu](../../../../hu/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇧🇬 [bg](../../../../bg/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇸🇰 [sk](../../../../sk/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇮🇱 [he](../../../../he/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇵🇭 [phi](../../../../phi/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇨🇿 [cs](../../../../cs/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md) · 🇹🇷 [tr](../../../../tr/skills_omni/decomposition-planning-roadmap/references/roadmap-template.md)

---


Use this template to produce a phased, reviewable migration roadmap.

## 1. Objective and Constraints

- **Primary business outcome:**
- **Secondary outcomes:**
- **Non-goals:**
- **Time horizon:**
- **Constraints:** budget / staffing / compliance / runtime / freeze windows

## 2. Current-State Assessment

### Completed patterns
- [ ] Component inventory
- [ ] Dependency mapping
- [ ] Domain grouping
- [ ] Partial extraction already in place

### Current blockers
- [ ] Shared database
- [ ] Cross-cutting transactions
- [ ] Batch/reporting dependency
- [ ] No clear team ownership
- [ ] Weak observability
- [ ] Weak rollback capability

### Readiness gaps
- CI/CD:
- Telemetry:
- Ownership:
- Runbooks:
- Testing:

## 3. Candidate Extraction Summary

| Candidate | Business capability / domain | Value | Coupling | Data independence | Ownership readiness | Recommendation |
| --- | --- | --- | --- | --- | --- | --- |
| | | | | | | |

## 4. Recommended Extraction Order

1. **First:**
   - Why now:
   - Preconditions:
   - Rollback point:
2. **Next:**
3. **Deferred:**
4. **Rejected:**

## 5. Transition Pattern by Candidate

| Candidate | Pattern | Temporary adapters needed | Cutover style | Rollback point |
| --- | --- | --- | --- | --- |
| | | | | |

## 6. Phased Roadmap

### Phase 1: Analysis and preparation
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Pause conditions:**
- **Owners:**

### Phase 2: Boundary preparation
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Pause conditions:**
- **Owners:**

### Phase 3: First extraction
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Rollback conditions:**
- **Owners:**

### Phase 4: Expansion
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Pause conditions:**
- **Owners:**

### Phase 5: Optimization and consolidation
- **Objective:**
- **Scope:**
- **Dependencies:**
- **Milestones:**
- **Success criteria:**
- **Owners:**

## 7. Risks and Mitigations

| Risk | Impact | Trigger | Mitigation | Contingency | Owner |
| --- | --- | --- | --- | --- | --- |
| | | | | | |

## 8. Architecture Stories / Epics

### Story / Epic
- Description:
- Acceptance criteria:
- Estimate:
- Dependencies:
- Owner:

## 9. Metrics and Fitness Functions

| Metric | Baseline | Target | Measurement method | Review cadence |
| --- | --- | --- | --- | --- |
| | | | | |

## 10. Stakeholder Decisions Needed

- Decision:
- Options considered:
- Recommended choice:
- Decision owner:
- Due date:
