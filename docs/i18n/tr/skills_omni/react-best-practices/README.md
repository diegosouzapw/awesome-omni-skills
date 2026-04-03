# React Best Practices (Türkçe)

🌐 **Languages:** 🇺🇸 [English](../../../../../skills_omni/react-best-practices/README.md) · 🇪🇸 [es](../../../es/skills_omni/react-best-practices/README.md) · 🇫🇷 [fr](../../../fr/skills_omni/react-best-practices/README.md) · 🇩🇪 [de](../../../de/skills_omni/react-best-practices/README.md) · 🇮🇹 [it](../../../it/skills_omni/react-best-practices/README.md) · 🇷🇺 [ru](../../../ru/skills_omni/react-best-practices/README.md) · 🇨🇳 [zh-CN](../../../zh-CN/skills_omni/react-best-practices/README.md) · 🇯🇵 [ja](../../../ja/skills_omni/react-best-practices/README.md) · 🇰🇷 [ko](../../../ko/skills_omni/react-best-practices/README.md) · 🇸🇦 [ar](../../../ar/skills_omni/react-best-practices/README.md) · 🇮🇳 [hi](../../../hi/skills_omni/react-best-practices/README.md) · 🇮🇳 [in](../../../in/skills_omni/react-best-practices/README.md) · 🇹🇭 [th](../../../th/skills_omni/react-best-practices/README.md) · 🇻🇳 [vi](../../../vi/skills_omni/react-best-practices/README.md) · 🇮🇩 [id](../../../id/skills_omni/react-best-practices/README.md) · 🇲🇾 [ms](../../../ms/skills_omni/react-best-practices/README.md) · 🇳🇱 [nl](../../../nl/skills_omni/react-best-practices/README.md) · 🇵🇱 [pl](../../../pl/skills_omni/react-best-practices/README.md) · 🇸🇪 [sv](../../../sv/skills_omni/react-best-practices/README.md) · 🇳🇴 [no](../../../no/skills_omni/react-best-practices/README.md) · 🇩🇰 [da](../../../da/skills_omni/react-best-practices/README.md) · 🇫🇮 [fi](../../../fi/skills_omni/react-best-practices/README.md) · 🇵🇹 [pt](../../../pt/skills_omni/react-best-practices/README.md) · 🇷🇴 [ro](../../../ro/skills_omni/react-best-practices/README.md) · 🇭🇺 [hu](../../../hu/skills_omni/react-best-practices/README.md) · 🇧🇬 [bg](../../../bg/skills_omni/react-best-practices/README.md) · 🇸🇰 [sk](../../../sk/skills_omni/react-best-practices/README.md) · 🇺🇦 [uk-UA](../../../uk-UA/skills_omni/react-best-practices/README.md) · 🇮🇱 [he](../../../he/skills_omni/react-best-practices/README.md) · 🇵🇭 [phi](../../../phi/skills_omni/react-best-practices/README.md) · 🇧🇷 [pt-BR](../../../pt-BR/skills_omni/react-best-practices/README.md) · 🇨🇿 [cs](../../../cs/skills_omni/react-best-practices/README.md) · 🇹🇷 [tr](../../../tr/skills_omni/react-best-practices/README.md)

---


A structured repository for creating and maintaining React Best Practices optimized for agents and LLMs.

## Structure

- `rules/` - Individual rule files (one per rule)
  - `_sections.md` - Section metadata (titles, impacts, descriptions)
  - `_template.md` - Template for creating new rules
  - `area-description.md` - Individual rule files
- `src/` - Build scripts and utilities
- `metadata.json` - Document metadata (version, organization, abstract)
- __`AGENTS.md`__ - Compiled output (generated)
- __`test-cases.json`__ - Test cases for LLM evaluation (generated)

## Başlarken

1. Install dependencies:
   ```bash
   pnpm install
   ```

2. Build AGENTS.md from rules:
   ```bash
   pnpm build
   ```

3. Validate rule files:
   ```bash
   pnpm validate
   ```

4. Extract test cases:
   ```bash
   pnpm extract-tests
   ```

## Creating a New Rule

1. Copy `rules/_template.md` to `rules/area-description.md`
2. Choose the appropriate area prefix:
   - `async-` for Eliminating Waterfalls (Section 1)
   - `bundle-` for Bundle Size Optimization (Section 2)
   - `server-` for Server-Side Performance (Section 3)
   - `client-` for Client-Side Data Fetching (Section 4)
   - `rerender-` for Re-render Optimization (Section 5)
   - `rendering-` for Rendering Performance (Section 6)
   - `js-` for JavaScript Performance (Section 7)
   - `advanced-` for Advanced Patterns (Section 8)
3. Fill in the frontmatter and content
4. Ensure you have clear examples with explanations
5. Run `pnpm build` to regenerate AGENTS.md and test-cases.json

## Rule File Structure

Each rule file should follow this structure:

```markdown
---
title: Rule Title Here
impact: MEDIUM
impactDescription: Optional description
tags: tag1, tag2, tag3
---

## Rule Title Here

Brief explanation of the rule and why it matters.

**Incorrect (description of what's wrong):**

```typescript
// Bad code example
```

**Correct (description of what's right):**

```typescript
// Good code example
```

Optional explanatory text after examples.

Reference: [Link](https://example.com)

## File Naming Convention

- Files starting with `_` are special (excluded from build)
- Rule files: `area-description.md` (e.g., `async-parallel.md`)
- Section is automatically inferred from filename prefix
- Rules are sorted alphabetically by title within each section
- IDs (e.g., 1.1, 1.2) are auto-generated during build

## Impact Levels

- `CRITICAL` - Highest priority, major performance gains
- `HIGH` - Significant performance improvements
- `MEDIUM-HIGH` - Moderate-high gains
- `MEDIUM` - Moderate performance improvements
- `LOW-MEDIUM` - Low-medium gains
- `LOW` - Incremental improvements

## Scripts

- `pnpm build` - Compile rules into AGENTS.md
- `pnpm validate` - Validate all rule files
- `pnpm extract-tests` - Extract test cases for LLM evaluation
- `pnpm dev` - Build and validate

## Contributing

When adding or modifying rules:

1. Use the correct filename prefix for your section
2. Follow the `_template.md` structure
3. Include clear bad/good examples with explanations
4. Add appropriate tags
5. Run `pnpm build` to regenerate AGENTS.md and test-cases.json
6. Rules are automatically sorted by title - no need to manage numbers!

## Acknowledgments

Originally created by [@shuding](https://x.com/shuding) at [Vercel](https://vercel.com).
