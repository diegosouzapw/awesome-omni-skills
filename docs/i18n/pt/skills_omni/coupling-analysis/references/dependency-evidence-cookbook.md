# Dependency Evidence Cookbook (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇪🇸 [es](../../../../es/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇩🇪 [de](../../../../de/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇮🇹 [it](../../../../it/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇮🇳 [in](../../../../in/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇹🇭 [th](../../../../th/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇮🇩 [id](../../../../id/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇳🇴 [no](../../../../no/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇩🇰 [da](../../../../da/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇮🇱 [he](../../../../he/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/coupling-analysis/references/dependency-evidence-cookbook.md)

---


Use these commands as safe starting points for evidence gathering. Review before execution and run only what matches the repository and task.

## General rules

- Prefer read-only inspection commands.
- Distinguish package graphs from source import graphs and runtime call graphs.
- Filter generated, vendored, and test-only paths when they distort the picture.
- Dynamic imports, reflection, and generated code may require deeper tooling or runtime evidence.

## Git history and co-change

```bash
# top changed files in the last 6 months
git log --since="6 months ago" --format='' --name-only | sed '/^$/d' | sort | uniq -c | sort -rn | head -50
```

```bash
# recent history for a specific path
git log --since="6 months ago" --stat -- path/to/area
```

## JavaScript / TypeScript

### Package dependency evidence

```bash
npm ls --all
```

### Why a package is present

```bash
npm explain <package-name>
```

### Code import graph

Consider using repository-configured static analysis tools if present, such as dependency-cruiser.

## Python

### Installed dependency tree

```bash
pipdeptree
```

### Basic import inspection

Use repository search for import hotspots:

```bash
grep -R "^import \|^from " path/to/python/package | head -200
```

## Go

### Module requirement graph

```bash
go mod graph
```

### Package dependencies

```bash
go list -deps ./...
```

## Rust

### Dependency tree

```bash
cargo tree
```

## JVM projects

Prefer build-tool-native dependency reports and architecture checks already configured in the repository.

Examples may include:

```bash
./gradlew dependencies
```

```bash
mvn dependency:tree
```

If the project already uses ArchUnit or jQAssistant, inspect those rules before inventing a new classification.

## Service and contract evidence

Inspect:

- OpenAPI specs
- Protobuf definitions
- GraphQL schemas
- API client packages
- ingress/egress configuration
- deployment descriptors and service manifests

Questions to answer:

- Is the interface versioned?
- Does it expose internal models or consumer-oriented contracts?
- Are consumers using only what they need?
- Does integration require synchronized deploys?

## Ownership and boundary evidence

Inspect:

- CODEOWNERS
- directory conventions
- CI/CD pipelines
- deployment manifests
- on-call ownership docs
- ADRs

## What not to conclude too quickly

Do not claim that:

- a package dependency proves runtime coupling severity
- a static import proves meaningful maintenance coupling
- absence of direct references means absence of functional coupling
- a schema automatically means good contract coupling
