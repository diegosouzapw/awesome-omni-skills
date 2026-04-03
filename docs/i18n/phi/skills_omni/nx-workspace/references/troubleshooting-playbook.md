# Troubleshooting Playbook (Filipino)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇪🇸 [es](../../../../es/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇫🇷 [fr](../../../../fr/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇩🇪 [de](../../../../de/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇮🇹 [it](../../../../it/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇷🇺 [ru](../../../../ru/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇯🇵 [ja](../../../../ja/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇰🇷 [ko](../../../../ko/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇸🇦 [ar](../../../../ar/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇮🇳 [hi](../../../../hi/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇮🇳 [in](../../../../in/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇹🇭 [th](../../../../th/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇻🇳 [vi](../../../../vi/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇮🇩 [id](../../../../id/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇲🇾 [ms](../../../../ms/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇳🇱 [nl](../../../../nl/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇵🇱 [pl](../../../../pl/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇸🇪 [sv](../../../../sv/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇳🇴 [no](../../../../no/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇩🇰 [da](../../../../da/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇫🇮 [fi](../../../../fi/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇵🇹 [pt](../../../../pt/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇷🇴 [ro](../../../../ro/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇭🇺 [hu](../../../../hu/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇧🇬 [bg](../../../../bg/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇸🇰 [sk](../../../../sk/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇮🇱 [he](../../../../he/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇵🇭 [phi](../../../../phi/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇨🇿 [cs](../../../../cs/skills_omni/nx-workspace/references/troubleshooting-playbook.md) · 🇹🇷 [tr](../../../../tr/skills_omni/nx-workspace/references/troubleshooting-playbook.md)

---


Use this playbook for common Nx workspace-management failures.

## 1. Missing or surprising targets

**Check:**

```bash
nx show project <name> --json
```

If the resolved target exists, the issue may be inferred configuration rather than a missing target.

## 2. Affected mismatch

**Check:**

```bash
nx show projects --affected --base=<base> --head=<head>
```

Verify refs and CI checkout depth before changing Nx settings.

## 3. Cache misses

**Check:**

- target cacheability
- inputs
- outputs
- shared defaults
- CI/local environment differences

## 4. Stale graph or stale workspace state

**Check:**

```bash
nx reset
nx show projects
```

Use `nx reset` before manual cache deletion.

## 5. Boundary drift

**Check:**

- project tags
- dependency directions
- enforcement rules

If architecture is expressed only through folders, enforcement is probably too weak.

## Escalation rule

If the issue is no longer primarily about Nx workspace structure, affected analysis, boundaries, or caching, route to the more specific adjacent skill.
