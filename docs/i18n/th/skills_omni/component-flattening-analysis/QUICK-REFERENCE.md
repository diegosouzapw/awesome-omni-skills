# Component Flattening Analysis - Quick Reference (ไทย)

🌐 **Languages:** 🇺🇸 [English](../../../../../skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇪🇸 [es](../../../es/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇫🇷 [fr](../../../fr/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇩🇪 [de](../../../de/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇮🇹 [it](../../../it/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇷🇺 [ru](../../../ru/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇨🇳 [zh-CN](../../../zh-CN/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇯🇵 [ja](../../../ja/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇰🇷 [ko](../../../ko/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇸🇦 [ar](../../../ar/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇮🇳 [hi](../../../hi/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇮🇳 [in](../../../in/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇹🇭 [th](../../../th/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇻🇳 [vi](../../../vi/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇮🇩 [id](../../../id/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇲🇾 [ms](../../../ms/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇳🇱 [nl](../../../nl/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇵🇱 [pl](../../../pl/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇸🇪 [sv](../../../sv/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇳🇴 [no](../../../no/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇩🇰 [da](../../../da/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇫🇮 [fi](../../../fi/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇵🇹 [pt](../../../pt/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇷🇴 [ro](../../../ro/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇭🇺 [hu](../../../hu/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇧🇬 [bg](../../../bg/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇸🇰 [sk](../../../sk/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇺🇦 [uk-UA](../../../uk-UA/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇮🇱 [he](../../../he/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇵🇭 [phi](../../../phi/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇧🇷 [pt-BR](../../../pt-BR/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇨🇿 [cs](../../../cs/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md) · 🇹🇷 [tr](../../../tr/skills_omni/component-flattening-analysis/QUICK-REFERENCE.md)

---


## Component Definition

**Component** = Leaf node in directory/namespace structure containing source files

**Key Rule**: Components exist only as leaf nodes. If namespace is extended, parent becomes subdomain.

## Root Namespace vs Component

| Type               | Definition                    | Example                        | Has Code?               |
| ------------------ | ----------------------------- | ------------------------------ | ----------------------- |
| **Component**      | Leaf node (deepest directory) | `ss.survey.templates`          | ✅ Yes                  |
| **Root Namespace** | Extended by child nodes       | `ss.survey` (has `.templates`) | ❌ No (orphaned if yes) |
| **Subdomain**      | Same as root namespace        | `ss.survey`                    | ❌ No                   |

## Orphaned Classes

**Orphaned Class** = Source file in root namespace (non-leaf node)

**Problem**: No definable component associated with it

**Solution**: Move to leaf node namespace (component)

### Detection

```
Root namespace extended?
├─ YES → Check for source files
│   ├─ Has files? → Orphaned classes found
│   └─ No files? → ✅ OK
└─ NO → Not a root namespace
```

## Flattening Strategies

### Strategy 1: Consolidate Down ✅

**When**: Leaf nodes are small, related functionality

**Action**: Move leaf code into root namespace

**Example**:

```
Before: ss.survey/ + ss.survey.templates/
After:  ss.survey/ (single component)
```

### Strategy 2: Split Up ✅

**When**: Root namespace has distinct functional areas

**Action**: Move root code into new leaf nodes

**Example**:

```
Before: ss.ticket/ (45 orphaned files)
After:  ss.ticket.maintenance/ + ss.ticket.completion/
```

### Strategy 3: Extract Shared ✅

**When**: Root namespace has shared utilities

**Action**: Move shared code to `.shared` component

**Example**:

```
Before: ss.survey/ (domain + shared code)
After:  ss.survey/ + ss.survey.shared/
```

## Decision Tree

```
Found orphaned classes?
├─ YES → Analyze functionality
│   ├─ Related to leaf components?
│   │   ├─ YES → Consolidate Down
│   │   └─ NO → Distinct areas?
│   │       ├─ YES → Split Up
│   │       └─ NO → Shared code?
│   │           └─ YES → Extract Shared
│   └─ NO → ✅ No action needed
└─ NO → ✅ Structure is flat
```

## Common Patterns

### Pattern 1: Simple Consolidation

```
Before:
ss.survey/
├── Survey.js           ← Orphaned
└── templates/         ← Component
    └── Template.js

After:
ss.survey/             ← Component
├── Survey.js
└── Template.js
```

### Pattern 2: Functional Split

```
Before:
ss.ticket/             ← Root (45 orphaned files)
├── assign/            ← Component
└── route/              ← Component

After:
ss.ticket/             ← Subdomain
├── maintenance/       ← Component
├── completion/         ← Component
├── assign/            ← Component
└── route/              ← Component
```

### Pattern 3: Shared Code Extraction

```
Before:
ss.survey/             ← Root
├── Survey.js          ← Domain
├── Validator.js       ← Shared
└── templates/         ← Component

After:
ss.survey/             ← Component
├── Survey.js
└── shared/            ← Component
    └── Validator.js
```

## Quick Analysis Steps

1. **Map** → Build namespace tree, identify root namespaces
2. **Detect** → Find orphaned classes in root namespaces
3. **Analyze** → Determine flattening strategy
4. **Plan** → Create refactoring steps
5. **Execute** → Move files, update references

## Output Template

```markdown
## Orphaned Classes Analysis

### Root Namespace: [name]

**Orphaned Files** (X files):

- File1.js (domain/shared code)
- File2.js (domain/shared code)

**Leaf Components**:

- [component.name] (X files)

**Issue**: [description]

**Recommendation**: [strategy]

## Flattening Plan

### Priority: High/Medium/Low

**[Namespace]** → [Strategy]

- [Steps]
- Effort: X days
- Risk: Low/Medium/High
```

## Validation Rules

### Rule 1: Components Only as Leaf Nodes

```
✅ Valid:
ss.survey.templates/   ← Component (leaf node)

❌ Invalid:
ss.survey/             ← Root namespace with code
├── Survey.js          ← Orphaned class
└── templates/         ← Component
```

### Rule 2: No Orphaned Classes

```
✅ Valid:
ss.survey/             ← Subdomain (no code)
└── templates/         ← Component (has code)
    └── Template.js

❌ Invalid:
ss.survey/             ← Root namespace
├── Survey.js          ← Orphaned class ❌
└── templates/         ← Component
    └── Template.js
```

## Quick Checklist

- [ ] Mapped namespace hierarchies
- [ ] Identified root namespaces
- [ ] Found orphaned classes
- [ ] Classified orphaned classes
- [ ] Selected flattening strategy
- [ ] Created refactoring plan
- [ ] Updated all references
- [ ] Verified with tests
