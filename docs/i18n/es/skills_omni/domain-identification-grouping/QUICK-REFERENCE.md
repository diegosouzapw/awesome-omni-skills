# Domain Identification & Grouping - Quick Reference (Español)

🌐 **Languages:** 🇺🇸 [English](../../../../../skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇪🇸 [es](../../../es/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇫🇷 [fr](../../../fr/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇩🇪 [de](../../../de/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇮🇹 [it](../../../it/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇷🇺 [ru](../../../ru/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇨🇳 [zh-CN](../../../zh-CN/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇯🇵 [ja](../../../ja/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇰🇷 [ko](../../../ko/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇸🇦 [ar](../../../ar/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇮🇳 [hi](../../../hi/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇮🇳 [in](../../../in/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇹🇭 [th](../../../th/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇻🇳 [vi](../../../vi/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇮🇩 [id](../../../id/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇲🇾 [ms](../../../ms/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇳🇱 [nl](../../../nl/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇵🇱 [pl](../../../pl/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇸🇪 [sv](../../../sv/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇳🇴 [no](../../../no/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇩🇰 [da](../../../da/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇫🇮 [fi](../../../fi/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇵🇹 [pt](../../../pt/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇷🇴 [ro](../../../ro/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇭🇺 [hu](../../../hu/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇧🇬 [bg](../../../bg/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇸🇰 [sk](../../../sk/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇺🇦 [uk-UA](../../../uk-UA/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇮🇱 [he](../../../he/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇵🇭 [phi](../../../phi/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇧🇷 [pt-BR](../../../pt-BR/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇨🇿 [cs](../../../cs/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md) · 🇹🇷 [tr](../../../tr/skills_omni/domain-identification-grouping/QUICK-REFERENCE.md)

---


## Domain Definition

**Domain** = Logical grouping of components representing a distinct business capability

**Key Characteristics**:

- Represents business area, not technical layer
- Contains related components
- Has clear boundaries
- Can become domain service

## Domain Identification Strategies

### 1. Business Capability Analysis

```
What business capabilities does the system provide?
→ Each capability = Potential domain
```

### 2. Vocabulary Analysis

```
What business language do components use?
→ Components sharing vocabulary = Same domain
```

### 3. Relationship Analysis

```
Which components are frequently used together?
→ Related components = Same domain
```

### 4. Stakeholder Collaboration

```
What do business experts say?
→ Their understanding = Domain boundaries
```

## Component-to-Domain Assignment

### Decision Process

```
Analyze component:
├─ What business capability does it support?
├─ What domain vocabulary does it use?
├─ What other components does it relate to?
└─ Assign to domain that best fits
```

### Edge Cases

- **Unclear assignment**: Analyze more deeply, check relationships
- **Multiple domains**: Choose primary domain, document secondary
- **Shared functionality**: May belong to Shared domain

## Namespace Refactoring

### Pattern

**Before**: `services/billing/payment`  
**After**: `services/customer/billing/payment`

**Rule**: Add domain node to namespace

### Refactoring Steps

1. Update namespace declarations
2. Update import statements
3. Update directory structure
4. Run tests
5. Update documentation

## Domain Validation

### Checklist

- [ ] All components assigned to a domain
- [ ] Domains have clear boundaries
- [ ] Components fit domain vocabulary
- [ ] Domains represent distinct capabilities
- [ ] Stakeholders validate groupings

### Cohesion Check

```
High Cohesion ✅:
- Components share business language
- Components used together
- Direct relationships

Low Cohesion ❌:
- Different vocabularies
- Rarely used together
- No relationships
```

## Domain Size Guidelines

| Size      | Component Count | Notes                  |
| --------- | --------------- | ---------------------- |
| Small     | 2-4             | May need consolidation |
| Medium    | 5-8             | Ideal size             |
| Large     | 9-15            | Monitor for splitting  |
| Too Large | >15             | Consider splitting     |

## Common Domain Patterns

### Typical Domains

- **Customer**: Customer management, profiles, billing
- **Product**: Catalog, inventory, pricing
- **Order**: Processing, fulfillment
- **Billing**: Invoicing, payments
- **Reporting**: Reports, analytics
- **Admin**: User management, config
- **Shared**: Common functionality

### Domain Count

**Ideal**: 3-7 domains  
**Too Many**: >10 domains (consider merging)  
**Too Few**: <3 domains (consider splitting)

## Output Template

```markdown
## Domain: [Name] ([namespace])

**Business Capability**: [what it does]

**Components**:

- Component 1
- Component 2

**Component Count**: X
**Total Size**: Y statements (Z% of codebase)

**Domain Cohesion**: ✅ High / ⚠️ Medium / ❌ Low

**Boundaries**:

- Clear separation from [Domain A]
- Clear separation from [Domain B]
```

## Quick Analysis Steps

1. **Identify** → Analyze components, find business capabilities
2. **Group** → Assign components to domains
3. **Validate** → Check cohesion, boundaries, completeness
4. **Refactor** → Align namespaces with domains
5. **Map** → Create domain visualization

## Decision Tree

```
Identify domains
├─ Analyze component responsibilities
├─ Identify business capabilities
├─ Group by vocabulary/relationships
└─ Validate with stakeholders

Assign components
├─ Analyze functionality
├─ Check relationships
├─ Assign to domain
└─ Handle edge cases

Refactor namespaces
├─ Compare current vs target
├─ Identify changes needed
├─ Create refactoring plan
└─ Execute refactoring
```
