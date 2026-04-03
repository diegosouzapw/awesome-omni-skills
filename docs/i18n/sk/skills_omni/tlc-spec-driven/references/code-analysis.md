# Code Analysis Tools (Slovenčina)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇪🇸 [es](../../../../es/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇫🇷 [fr](../../../../fr/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇩🇪 [de](../../../../de/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇮🇹 [it](../../../../it/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇷🇺 [ru](../../../../ru/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇯🇵 [ja](../../../../ja/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇰🇷 [ko](../../../../ko/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇸🇦 [ar](../../../../ar/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇮🇳 [hi](../../../../hi/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇮🇳 [in](../../../../in/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇹🇭 [th](../../../../th/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇻🇳 [vi](../../../../vi/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇮🇩 [id](../../../../id/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇲🇾 [ms](../../../../ms/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇳🇱 [nl](../../../../nl/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇵🇱 [pl](../../../../pl/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇸🇪 [sv](../../../../sv/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇳🇴 [no](../../../../no/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇩🇰 [da](../../../../da/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇫🇮 [fi](../../../../fi/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇵🇹 [pt](../../../../pt/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇷🇴 [ro](../../../../ro/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇭🇺 [hu](../../../../hu/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇧🇬 [bg](../../../../bg/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇸🇰 [sk](../../../../sk/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇮🇱 [he](../../../../he/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇵🇭 [phi](../../../../phi/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇨🇿 [cs](../../../../cs/skills_omni/tlc-spec-driven/references/code-analysis.md) · 🇹🇷 [tr](../../../../tr/skills_omni/tlc-spec-driven/references/code-analysis.md)

---


Use graceful degradation for code search and structural analysis.

## Tool Priority

1. **ast-grep** (`sg`) - Structural pattern-based search
2. **ripgrep** (`rg`) - Fast context-aware text search
3. **grep** - Standard text search (always available)

## Detection

Check tool availability before use:

```bash
# Check for ast-grep
if command -v sg >/dev/null 2>&1; then
  # Use ast-grep for structural search
elif command -v rg >/dev/null 2>&1; then
  # Fall back to ripgrep
else
  # Use standard grep as final fallback
fi
```

## Usage Examples

**Finding function definitions:**

```bash
# ast-grep (best - structural)
sg -p 'function $NAME($$$) { $$$ }'

# ripgrep (fallback - fast text)
rg '^function\s+\w+\(' --type-add 'source:*.[extension]' -t source

# grep (last resort - basic)
grep -r '^function ' --include="*.[extension]"
```

**Finding imports/requires:**

```bash
# ast-grep
sg -p 'import { $$$ } from "$MODULE"'

# ripgrep
rg '^import .* from' --type-add 'source:*.[extension]' -t source

# grep
grep -r '^import ' --include="*.[extension]"
```

**Finding class/component definitions:**

```bash
# ast-grep
sg -p 'class $NAME { $$$ }'

# ripgrep
rg '^(class|export class)\s+\w+' --type-add 'source:*.[extension]' -t source

# grep
grep -r '^class ' --include="*.[extension]"
```

## Search Scope

**Best practices:**

- Limit to source file extensions relevant to project
- Exclude directories: `node_modules`, `vendor`, `dist`, `build`, `.git`
- Focus on source directories: `src`, `lib`, `app`
- Use file type filters when available

**Performance tips:**

- Use specific patterns over broad searches
- Limit directory depth with `--max-depth` (ripgrep/grep)
- Cache results for repeated queries

## Fallback Notice

If ast-grep unavailable, display once per session:

```
⚠️ ast-grep not detected. Install for more precise structural code analysis.
   https://ast-grep.github.io/guide/quick-start.html
```

## When to Use

- Finding usage patterns across codebase
- Identifying code structure and organization
- Locating function/class/component definitions
- Analyzing import/dependency patterns
- Refactoring impact analysis
- Code navigation in unfamiliar codebases
