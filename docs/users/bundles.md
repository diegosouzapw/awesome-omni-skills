# Curated Bundles

Bundles are curated selectors layered on top of the catalog. They are useful today, but they are not a guarantee that every referenced skill is already published.

## Important Behavior

`--bundle` does not install a special package type. It expands the selected bundle and installs only the members that are currently available in the catalog.

If a bundle references skills that do not exist yet, install plans surface those members as warnings.

Example:

```bash
npx omni-skills --cursor --bundle full-stack
```

## Current Availability

Based on the current generated catalog:

| Bundle | Intended for | Available now | Notes |
| :----- | :----------- | :------------ | :---- |
| `essentials` | Every developer | `1/4` | Currently includes `find-skills` |
| `full-stack` | Web and app developers | `1/4` | Currently installs `omni-figma` |
| `security` | Security engineers | `0/2` | Members still pending publication |
| `devops` | Platform and infra teams | `0/3` | Members still pending publication |
| `ai-engineer` | LLM and ML developers | `0/3` | Members still pending publication |
| `oss-maintainer` | Open source maintainers | `1/4` | Currently includes `find-skills` |

The generated truth source for this is `dist/bundles.json`.

## When to Use a Bundle

Use a bundle when:

- you want a curated starting point
- you want install plans that can grow as the catalog expands
- you are comfortable with warnings for members not published yet

Use `--skill` instead when:

- you want a guaranteed minimal install
- you already know the exact skill you need
- you do not want roadmap members in the plan output

## Practical Recommendation

Today, if you want something fully concrete:

- use `--skill omni-figma` for direct installation
- use `--bundle full-stack` only if you want the bundle context plus the current warning surface

## Inspecting Bundles

```bash
# generated bundle availability
cat dist/bundles.json

# plan a bundle install through the API
curl http://127.0.0.1:3333/v1/bundles
```
