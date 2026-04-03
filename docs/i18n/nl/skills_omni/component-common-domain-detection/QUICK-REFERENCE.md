# Common Domain Component Detection - Quick Reference (Nederlands)

🌐 **Languages:** 🇺🇸 [English](../../../../../skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇪🇸 [es](../../../es/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇫🇷 [fr](../../../fr/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇩🇪 [de](../../../de/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇮🇹 [it](../../../it/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇷🇺 [ru](../../../ru/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇨🇳 [zh-CN](../../../zh-CN/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇯🇵 [ja](../../../ja/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇰🇷 [ko](../../../ko/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇸🇦 [ar](../../../ar/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇮🇳 [hi](../../../hi/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇮🇳 [in](../../../in/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇹🇭 [th](../../../th/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇻🇳 [vi](../../../vi/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇮🇩 [id](../../../id/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇲🇾 [ms](../../../ms/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇳🇱 [nl](../../../nl/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇵🇱 [pl](../../../pl/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇸🇪 [sv](../../../sv/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇳🇴 [no](../../../no/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇩🇰 [da](../../../da/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇫🇮 [fi](../../../fi/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇵🇹 [pt](../../../pt/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇷🇴 [ro](../../../ro/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇭🇺 [hu](../../../hu/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇧🇬 [bg](../../../bg/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇸🇰 [sk](../../../sk/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇺🇦 [uk-UA](../../../uk-UA/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇮🇱 [he](../../../he/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇵🇭 [phi](../../../phi/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇧🇷 [pt-BR](../../../pt-BR/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇨🇿 [cs](../../../cs/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md) · 🇹🇷 [tr](../../../tr/skills_omni/component-common-domain-detection/QUICK-REFERENCE.md)

---


## Domain vs Infrastructure

| Type               | Description                              | Examples                        | Consolidate?               |
| ------------------ | ---------------------------------------- | ------------------------------- | -------------------------- |
| **Domain**         | Business logic, common to some processes | Notification, audit, validation | ✅ Yes                     |
| **Infrastructure** | Technical concerns, common to all        | Logging, metrics, security      | ❌ No (handled separately) |

## Detection Strategies

### 1. Namespace Pattern Detection

Find components with common leaf node names:

```
services/customer/notification  ← Common pattern
services/ticket/notification     ← Common pattern
services/survey/notification     ← Common pattern
```

**Common Patterns**:

- `*.notification`, `*.notify`, `*.email`
- `*.audit`, `*.auditing`, `*.log`
- `*.validation`, `*.validate`, `*.validator`
- `*.format`, `*.formatter`, `*.formatting`

### 2. Shared Class Detection

Find classes used across multiple components:

```
SMTPConnection → Used by 5 components
AuditLogger → Used by 8 components
DataFormatter → Used by 3 components
```

### 3. Functionality Analysis

Examine code to verify similarity:

- Read source code of each component
- Identify similarities and differences
- Assess if differences can be abstracted

## Coupling Analysis

### Before Consolidation

```
Component A: CA = 2 (used by 2 components)
Component B: CA = 2 (used by 2 components)
Component C: CA = 1 (used by 1 component)
Total CA: 5
```

### After Consolidation

```
Consolidated Component: CA = 5 (used by 5 components)
Total CA: 5 (same!)
```

**Verdict**: ✅ Safe to consolidate (no coupling increase)

### Warning Signs

```
After Consolidation: CA = 15 (was 5)
Verdict: ⚠️ High coupling increase - reconsider
```

## Consolidation Approaches

### Shared Service

**Use when**:

- Functionality changes frequently
- Complex operations
- Needs independent scaling

**Example**: Notification service called by multiple components

### Shared Library

**Use when**:

- Stable functionality
- Simple utilities
- Compile-time dependency acceptable

**Example**: Validation utilities packaged as npm package

### Component Merge

**Use when**:

- Highly related functionality
- Low coupling impact
- Same deployment unit acceptable

**Example**: Merge 3 notification components into 1

## Quick Analysis Steps

1. **Scan** → Find common namespace patterns
2. **Detect** → Identify shared classes
3. **Analyze** → Verify functionality similarity
4. **Assess** → Calculate coupling impact
5. **Recommend** → Suggest consolidation approach

## Output Template

```markdown
## Common Domain Components Found

### [Functionality Name]

**Components**:

- component1 (X% - Y statements)
- component2 (X% - Y statements)

**Functionality Analysis**:

- Similarities: [what's the same]
- Differences: [what's different]
- Consolidation Feasibility: ✅ High / ⚠️ Medium / ❌ Low

**Coupling Analysis**:

- Before: CA = X
- After: CA = Y
- Verdict: ✅ Safe / ⚠️ Monitor / ❌ Too risky

**Recommendation**: [consolidation approach]
```

## Decision Tree

```
Found common pattern?
├─ YES → Analyze functionality
│   ├─ Similar enough?
│   │   ├─ YES → Assess coupling
│   │   │   ├─ CA increase acceptable?
│   │   │   │   ├─ YES → ✅ Consolidate
│   │   │   │   └─ NO → ⚠️ Reconsider or use shared library
│   │   └─ NO → ❌ Don't consolidate
│   └─ NO → ❌ Don't consolidate
└─ NO → No consolidation needed
```

## Common Patterns

### High Consolidation Candidates ✅

- Notification components
- Audit components
- Validation components
- Formatting components

### Low Consolidation Candidates ❌

- Infrastructure utilities
- Different business contexts
- High coupling risk scenarios
