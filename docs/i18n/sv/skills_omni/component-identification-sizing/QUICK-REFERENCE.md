# Component Identification & Sizing - Quick Reference (Svenska)

🌐 **Languages:** 🇺🇸 [English](../../../../../skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇪🇸 [es](../../../es/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇫🇷 [fr](../../../fr/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇩🇪 [de](../../../de/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇮🇹 [it](../../../it/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇷🇺 [ru](../../../ru/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇨🇳 [zh-CN](../../../zh-CN/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇯🇵 [ja](../../../ja/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇰🇷 [ko](../../../ko/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇸🇦 [ar](../../../ar/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇮🇳 [hi](../../../hi/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇮🇳 [in](../../../in/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇹🇭 [th](../../../th/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇻🇳 [vi](../../../vi/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇮🇩 [id](../../../id/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇲🇾 [ms](../../../ms/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇳🇱 [nl](../../../nl/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇵🇱 [pl](../../../pl/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇸🇪 [sv](../../../sv/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇳🇴 [no](../../../no/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇩🇰 [da](../../../da/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇫🇮 [fi](../../../fi/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇵🇹 [pt](../../../pt/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇷🇴 [ro](../../../ro/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇭🇺 [hu](../../../hu/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇧🇬 [bg](../../../bg/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇸🇰 [sk](../../../sk/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇺🇦 [uk-UA](../../../uk-UA/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇮🇱 [he](../../../he/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇵🇭 [phi](../../../phi/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇧🇷 [pt-BR](../../../pt-BR/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇨🇿 [cs](../../../cs/skills_omni/component-identification-sizing/QUICK-REFERENCE.md) · 🇹🇷 [tr](../../../tr/skills_omni/component-identification-sizing/QUICK-REFERENCE.md)

---


## Component Definition

**Component** = Leaf node in directory/namespace structure containing source files

**Subdomain** = Parent namespace that has been extended (not a component)

## Size Metrics

| Metric         | How to Calculate                                  | Purpose               |
| -------------- | ------------------------------------------------- | --------------------- |
| **Statements** | Count executable statements (not lines)           | Accurate size measure |
| **Files**      | Count source files in component                   | Complexity indicator  |
| **Percent**    | `(component_statements / total_statements) * 100` | Relative size         |
| **Std Dev**    | `sqrt(sum((size - mean)^2) / (n-1))`              | Outlier detection     |

## Size Thresholds

| App Size                  | Oversized Threshold | Notes                             |
| ------------------------- | ------------------- | --------------------------------- |
| Small (<10 components)    | >30% of codebase    | Fewer components, higher variance |
| Medium (10-20 components) | >15% of codebase    | Balanced threshold                |
| Large (>20 components)    | >10% of codebase    | More components, lower variance   |

**Standard Deviation Rule**: Components >2 std dev from mean are oversized

## Component Status

- ✅ **OK**: Within 1-2 std dev from mean, appropriate size
- ⚠️ **Too Large**: >2 std dev above mean or exceeds threshold
- 🔍 **Too Small**: <1 std dev below mean or <1% of codebase

## Quick Analysis Steps

1. **Map directories** → Identify leaf nodes (components)
2. **Count statements** → Per component, sum across files
3. **Calculate stats** → Mean, std dev, percentages
4. **Flag outliers** → >2 std dev or threshold violations
5. **Recommend actions** → Split large, consolidate small

## Common Patterns

### Node.js/Express

```
services/ComponentName/     ← Component
routes/v1/endpoint/        ← Component
models/ModelName/          ← Component
```

### Java

```
com.company.domain.service ← Component (leaf package)
com.company.domain         ← Subdomain (parent)
```

### Python

```
app/domain/service/        ← Component (leaf module)
app/domain/               ← Subdomain (parent)
```

## Output Template

```markdown
## Component Inventory

| Component | Namespace | Statements | Files | %   | Status |
| --------- | --------- | ---------- | ----- | --- | ------ |
| Name      | path      | 4,312      | 23    | 5%  | ✅ OK  |

## Summary

- Total: X components
- Mean: Y statements
- Std Dev: Z statements
- Oversized: [list]
- Recommendations: [actions]
```
