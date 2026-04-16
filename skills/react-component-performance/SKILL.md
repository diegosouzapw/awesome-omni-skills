---
name: react-component-performance
description: "React Component Performance workflow skill. Use this skill when the user needs Diagnose slow React components and suggest targeted performance fixes and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["react-component-performance", "diagnose", "slow", "react", "components", "and", "suggest", "targeted"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-16"
---

# React Component Performance

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/react-component-performance` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# React Component Performance

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Checklist, Optimization Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user asks to profile or improve a slow React component.
- When you need to reduce re-renders, list lag, or expensive render work in React UI.
- Use when the request clearly matches the imported source intent: Diagnose slow React components and suggest targeted performance fixes.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when copied upstream references, examples, or scripts materially improve the answer.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/examples.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `agents/openai.yaml` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Reproduce or describe the slowdown.
2. Identify what triggers re-renders (state updates, props churn, effects).
3. Isolate fast-changing state from heavy subtrees.
4. Stabilize props and handlers; memoize where it pays off.
5. Reduce expensive work (computation, DOM size, list length).
6. Validate: open React DevTools Profiler → record the interaction → inspect the Flamegraph for components rendering longer than ~16 ms → compare against a pre-optimization baseline recording.
7. Open React DevTools → Profiler tab.

### Imported Workflow Notes

#### Imported: Workflow

1. Reproduce or describe the slowdown.
2. Identify what triggers re-renders (state updates, props churn, effects).
3. Isolate fast-changing state from heavy subtrees.
4. Stabilize props and handlers; memoize where it pays off.
5. Reduce expensive work (computation, DOM size, list length).
6. **Validate**: open React DevTools Profiler → record the interaction → inspect the Flamegraph for components rendering longer than ~16 ms → compare against a pre-optimization baseline recording.

#### Imported: Profiling Validation Steps

1. Open **React DevTools → Profiler** tab.
2. Click **Record**, perform the slow interaction, then **Stop**.
3. Switch to **Flamegraph** view; any bar labeled with a component and time > ~16 ms is a candidate.
4. Use **Ranked chart** to sort by self render time and target the top offenders.
5. Apply one optimization at a time, re-record, and compare render counts and durations against the baseline.

#### Imported: Overview

Identify render hotspots, isolate expensive updates, and apply targeted optimizations without changing UI behavior.

#### Imported: Checklist

- Measure: use React DevTools Profiler or log renders; capture baseline.
- Find churn: identify state updated on a timer, scroll, input, or animation.
- Split: move ticking state into a child; keep heavy lists static.
- Memoize: wrap leaf rows with `memo` only when props are stable.
- Stabilize props: use `useCallback`/`useMemo` for handlers and derived values.
- Avoid derived work in render: precompute, or compute inside memoized helpers.
- Control list size: window/virtualize long lists; avoid rendering hidden items.
- Keys: ensure stable keys; avoid index when order can change.
- Effects: verify dependency arrays; avoid effects that re-run on every render.
- Style/layout: watch for expensive layout thrash or large Markdown/diff renders.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @react-component-performance to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @react-component-performance against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @react-component-performance for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @react-component-performance using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Reference

Load `references/examples.md` when the user wants a concrete refactor example.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/react-component-performance`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@puzzle-activity-planner` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pydantic-ai` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pydantic-models-py` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@pypict-skill` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/examples.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/openai.yaml` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [examples.md](references/examples.md)
- [openai.yaml](agents/openai.yaml)
- [openai.yaml](agents/openai.yaml)
- [examples.md](references/examples.md)

### Imported Reference Notes

#### Imported: Optimization Patterns

### Isolate ticking state

Move a timer or animation counter into a child so the parent list never re-renders on each tick.

```tsx
// ❌ Before – entire parent (and list) re-renders every second
function Dashboard({ items }: { items: Item[] }) {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <>
      <Clock tick={tick} />
      <ExpensiveList items={items} /> {/* re-renders every second */}
    </>
  );
}

// ✅ After – only <Clock> re-renders; list is untouched
function Clock() {
  const [tick, setTick] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setTick(t => t + 1), 1000);
    return () => clearInterval(id);
  }, []);
  return <span>{tick}s</span>;
}

function Dashboard({ items }: { items: Item[] }) {
  return (
    <>
      <Clock />
      <ExpensiveList items={items} />
    </>
  );
}
```

### Stabilize callbacks with `useCallback` + `memo`

```tsx
// ❌ Before – new handler reference on every render busts Row memo
function List({ items }: { items: Item[] }) {
  const handleClick = (id: string) => console.log(id); // new ref each render
  return items.map(item => <Row key={item.id} item={item} onClick={handleClick} />);
}

// ✅ After – stable handler; Row only re-renders when its own item changes
const Row = memo(({ item, onClick }: RowProps) => (
  <li onClick={() => onClick(item.id)}>{item.name}</li>
));

function List({ items }: { items: Item[] }) {
  const handleClick = useCallback((id: string) => console.log(id), []);
  return items.map(item => <Row key={item.id} item={item} onClick={handleClick} />);
}
```

### Prefer derived data outside render

```tsx
// ❌ Before – recomputes on every render
function Summary({ orders }: { orders: Order[] }) {
  const total = orders.reduce((sum, o) => sum + o.amount, 0); // runs every render
  return <p>Total: {total}</p>;
}

// ✅ After – recomputes only when orders changes
function Summary({ orders }: { orders: Order[] }) {
  const total = useMemo(() => orders.reduce((sum, o) => sum + o.amount, 0), [orders]);
  return <p>Total: {total}</p>;
}
```

### Additional patterns

- **Split rows**: extract list rows into memoized components with narrow props.
- **Defer heavy rendering**: lazy-render or collapse expensive content until expanded.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
