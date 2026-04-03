# Dependency Commands by Ecosystem (العربية)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇪🇸 [es](../../../../es/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇫🇷 [fr](../../../../fr/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇩🇪 [de](../../../../de/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇮🇹 [it](../../../../it/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇷🇺 [ru](../../../../ru/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇯🇵 [ja](../../../../ja/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇰🇷 [ko](../../../../ko/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇸🇦 [ar](../../../../ar/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇮🇳 [hi](../../../../hi/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇮🇳 [in](../../../../in/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇹🇭 [th](../../../../th/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇻🇳 [vi](../../../../vi/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇮🇩 [id](../../../../id/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇲🇾 [ms](../../../../ms/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇳🇱 [nl](../../../../nl/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇵🇱 [pl](../../../../pl/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇸🇪 [sv](../../../../sv/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇳🇴 [no](../../../../no/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇩🇰 [da](../../../../da/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇫🇮 [fi](../../../../fi/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇵🇹 [pt](../../../../pt/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇷🇴 [ro](../../../../ro/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇭🇺 [hu](../../../../hu/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇧🇬 [bg](../../../../bg/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇸🇰 [sk](../../../../sk/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇮🇱 [he](../../../../he/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇵🇭 [phi](../../../../phi/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇨🇿 [cs](../../../../cs/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md) · 🇹🇷 [tr](../../../../tr/skills_omni/coupling-analysis/examples/dependency-commands-by-ecosystem.md)

---


Use only the commands relevant to the repository you are analyzing.

## JavaScript / TypeScript

```bash
npm ls --all
npm explain <package-name>
```

## Python

```bash
pipdeptree
grep -R "^import \|^from " path/to/package | head -200
```

## Go

```bash
go mod graph
go list -deps ./...
```

## Rust

```bash
cargo tree
```

## JVM

```bash
./gradlew dependencies
mvn dependency:tree
```

## Git history

```bash
git log --since="6 months ago" --format='' --name-only | sed '/^$/d' | sort | uniq -c | sort -rn | head -50
```
