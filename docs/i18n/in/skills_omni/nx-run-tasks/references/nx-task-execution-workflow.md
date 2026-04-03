# Nx Task Execution Workflow (हिन्दी (IN))

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-run-tasks/references/nx-task-execution-workflow.md)

---


Use this checklist when deciding how to run a task in an Nx workspace.

## 1. Confirm the user's intent

Choose one:

- one project, one target
- many projects, same target
- many projects, several targets
- changed scope only
- local serve/watch workflow

## 2. Discover targets first

```bash
nx show project <project> --json
```

Why:

- shows resolved `targets`
- includes inferred targets from Nx plugins
- avoids guessing from partial config files

## 3. Pick the execution mode

### Use `nx run`

Best for one project and one target.

```bash
nx run <project>:<target>
```

Examples:

```bash
nx run web:build
nx run api:test
nx run dashboard:serve
```

### Use `nx run-many`

Best for the same target across several or all projects.

```bash
nx run-many -t <target> --projects=<p1>,<p2>
```

Examples:

```bash
nx run-many -t lint --projects=web,ui
nx run-many -t build,test,lint
nx run-many -t test --projects=app1,app2 --exclude=legacy-app
```

### Use `nx affected`

Best when execution should be limited to changed scope.

```bash
nx affected -t <target> --base=<base> --head=<head>
```

Examples:

```bash
nx affected -t test --base=origin/main --head=HEAD
nx affected -t build,lint --base=origin/main --head=HEAD
nx affected -t lint --files=apps/web/src/app.tsx,libs/ui/src/button.tsx
```

## 4. Add only the flags you need

Common execution flags:

- `--configuration=<name>`
- `--parallel=<n>`
- `--exclude=<projects>`
- `--verbose`
- `--nxBail`
- `--skipNxCache`
- `--outputStyle=<style>`

## 5. Forward underlying tool arguments carefully

When the target supports pass-through args:

```bash
nx run myapp:test -- --watch
nx run myapp:test -- --grep="login"
```

## 6. Validate and triage

If a run fails, classify the problem:

- target does not exist
- `affected` diff input is wrong
- cache behavior is surprising
- workspace state is stale
- the real issue is inside the build/test tool itself

## 7. Use narrow recovery steps

```bash
nx show project <project> --json
nx run <project>:<target> --verbose
nx run <project>:<target> --skipNxCache
nx reset
```

Use `--skipNxCache` only for diagnosis, not as your default command.
