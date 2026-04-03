# Nx Command Recipes (Português (Portugal))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-run-tasks/references/nx-command-recipes.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-run-tasks/references/nx-command-recipes.md)

---


These recipes assume the workspace already defines the targets being run.

## Discover project targets

```bash
nx show project myapp --json
```

## Run one target for one project

```bash
nx run myapp:test
nx run myapp:lint
nx run myapp:build --configuration=production
nx run myapp:serve
```

## Run the same target for selected projects

```bash
nx run-many -t test --projects=myapp,mylib
nx run-many -t lint --projects=web,ui --exclude=legacy-ui
```

## Run several tasks across the workspace

```bash
nx run-many -t build,test,lint --parallel=3
```

## Affected execution

```bash
nx affected -t test --base=origin/main --head=HEAD
nx affected -t build,lint --base=origin/main --head=HEAD
nx affected -t test --files=libs/util/src/index.ts
```

## Debugging flags

```bash
nx run myapp:test --verbose
nx affected -t test --base=origin/main --head=HEAD --verbose
```

## Cache diagnosis

```bash
nx run myapp:build --skipNxCache
```

Use this only to verify whether cached replay is involved in a suspicious result.

## Stop on first failure

```bash
nx run-many -t test --projects=app1,app2,app3 --nxBail
```

## Forward arguments to the underlying tool

```bash
nx run myapp:test -- --watch
nx run myapp:test -- --runInBand
nx run myapp:e2e -- --grep="checkout"
```

Whether `--` is required depends on the target and executor behavior used by the workspace.

## Reset local Nx state

```bash
nx reset
```
