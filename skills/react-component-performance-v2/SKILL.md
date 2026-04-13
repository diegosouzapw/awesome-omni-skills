---
name: react-component-performance-v2
description: "React Component Performance workflow skill. Use this skill when the user needs Diagnose slow React components and suggest targeted performance fixes and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["react-component-performance-v2", "react-component-performance", "diagnose", "slow", "react", "components", "and", "suggest"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# React Component Performance

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/react-component-performance` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# React Component Performance

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Checklist, Optimization Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user asks to profile or improve a slow React component.
- When you need to reduce re-renders, list lag, or expensive render work in React UI.
- Use when the request clearly matches the imported source intent: Diagnose slow React components and suggest targeted performance fixes.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.
- Use when the support pack, checklist, rubric, and playbook should guide execution before touching code or tools.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `references/omni-import-playbook.md` | Establishes the workflow, review packet, and provenance expectations before work begins |
| PR review or merge readiness | `references/omni-import-rubric.md` | Turns the imported skill into a checklist-driven review packet instead of an opaque file copy |
| Source or lineage verification | `scripts/omni_import_print_origin.py` | Confirms repository, branch, commit, and imported path quickly |
| Workflow execution | `references/omni-import-checklist.md` | Gives the operator the smallest useful entry point into the support pack |
| Handoff decision | `agents/omni-import-router.md` | Helps the operator switch to a stronger native skill when the task drifts |

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
Use @react-component-performance-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/react-component-performance-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/react-component-performance-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @react-component-performance-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Example Reference

Load `references/examples.md` when the user wants a concrete refactor example.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/react-component-performance`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operational packet for this imported skill. Together they provide the checklist, rubric, template, playbook, router guidance, and manifest that the validator expects to see represented in the public skill.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | checklists, rubrics, playbooks, and source summaries | `references/examples.md` |
| `examples` | prompt packets and usage templates | `examples/omni-import-operator-packet.md` |
| `scripts` | origin inspection and support-pack listing | `scripts/omni_import_list_support_pack.py` |
| `agents` | routing and handoff guidance | `agents/omni-import-router.md` |
| `assets` | machine-readable source manifest | `assets/omni-import-source-manifest.json` |

- [Imported intake checklist](references/omni-import-checklist.md)
- [Imported review rubric](references/omni-import-rubric.md)
- [Imported workflow playbook](references/omni-import-playbook.md)
- [Imported source summary](references/omni-import-source-summary.md)
- [Imported operator packet](examples/omni-import-operator-packet.md)
- [Imported prompt template](examples/omni-import-prompt-template.md)
- [Print origin details](scripts/omni_import_print_origin.py)
- [List support pack](scripts/omni_import_list_support_pack.py)

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
