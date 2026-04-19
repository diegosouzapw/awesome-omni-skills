# Worked Example: Laggy Filterable Product List

This example demonstrates a realistic diagnosis flow for a React UI where typing in a search box feels slow.

## Scenario

A page renders a searchable list of products. Users report that typing into the search field lags and the results area visibly stutters.

## Initial Component

```jsx
import { useEffect, useState } from 'react';

export default function ProductSearch({ products }) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(products);

  useEffect(() => {
    const next = products
      .filter((p) => p.name.toLowerCase().includes(query.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));

    setFiltered(next);
  }, [products, query]);

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
      />

      <ProductList
        items={filtered}
        renderMeta={{ highlight: query.length > 0 }}
        onSelect={(id) => console.log('selected', id)}
      />
    </div>
  );
}

function ProductList({ items, renderMeta, onSelect }) {
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index} onClick={() => onSelect(item.id)}>
          {renderMeta.highlight ? <strong>{item.name}</strong> : item.name}
        </li>
      ))}
    </ul>
  );
}
```

## Baseline Profiler Observations

React DevTools Profiler recording of typing three characters shows:
- each keystroke causes more than one commit
- `ProductSearch` re-renders on each keystroke, then re-renders again after the Effect sets state
- `ProductList` re-renders every time
- all rows re-render
- the list grows expensive as product count increases

## Diagnosis

There are several issues, but they should be addressed in the smallest useful order:

1. **Unnecessary Effect-driven state**
   - `filtered` is derived from `products` and `query`.
   - The Effect creates an extra render cycle.

2. **Unstable props defeat memoization opportunities**
   - `renderMeta={{ highlight: ... }}` creates a new object every render.
   - `onSelect={(id) => ...}` creates a new function every render.

3. **Bad keys**
   - `key={index}` is unsafe for dynamic filtering/reordering.

4. **List size may still dominate**
   - Even after cleanup, a very large result set may require virtualization.

## Step 1: Remove unnecessary Effect state

Compute the filtered list during render and memoize only because the calculation is a plausible hot path for a large dataset.

```jsx
import { useMemo, useState, useCallback, useDeferredValue } from 'react';

export default function ProductSearch({ products }) {
  const [query, setQuery] = useState('');
  const deferredQuery = useDeferredValue(query);

  const filtered = useMemo(() => {
    return products
      .filter((p) => p.name.toLowerCase().includes(deferredQuery.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name));
  }, [products, deferredQuery]);

  const handleSelect = useCallback((id) => {
    console.log('selected', id);
  }, []);

  const highlight = query.length > 0;

  return (
    <div>
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search products"
      />

      <ProductList
        items={filtered}
        highlight={highlight}
        onSelect={handleSelect}
      />
    </div>
  );
}
```

### Why this change came first
- It removes the extra commit caused by the Effect.
- It keeps data flow simpler.
- It defers the expensive downstream filtering work without delaying the controlled input update.

### Why alternatives were not chosen first
- Adding `memo` first would not solve the extra render caused by the Effect.
- Adding a custom `memo` comparison would increase complexity before fixing the more basic design issue.

## Step 2: Simplify and stabilize child props

Convert the child to take simple props and make row identity stable.

```jsx
import { memo } from 'react';

const ProductList = memo(function ProductList({ items, highlight, onSelect }) {
  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} onClick={() => onSelect(item.id)}>
          {highlight ? <strong>{item.name}</strong> : item.name}
        </li>
      ))}
    </ul>
  );
});
```

### Why this helps
- `highlight` is a primitive instead of a new object each render.
- `handleSelect` has stable identity.
- `item.id` is a stable key for a dynamic filtered list.
- `memo` now has a better chance of skipping work when `items`, `highlight`, and `onSelect` are unchanged.

### Important caveat
If `filtered` changes on every keystroke, `ProductList` will still re-render, and that is expected. `memo` helps only when the same props recur. It is not a universal solution.

## Step 3: Re-profile

Expected profiler changes:
- fewer commits per keystroke because the unnecessary Effect is gone
- improved input responsiveness because expensive result updates use the deferred query
- reduced avoidable prop churn
- more predictable list identity because keys are stable

## Step 4: Decide whether virtualization is needed

If profiling still shows the main cost comes from rendering many visible rows, the next fix is usually **virtualization**, not more memoization.

At that point, replace the plain list with a windowed list implementation such as `react-window` or an equivalent library used by the project.

## What not to conclude from this example

- Do not assume every derived value needs `useMemo`.
  - Here it is reasonable because filtering and sorting a large collection can be expensive.
- Do not assume `useDeferredValue` replaces all optimization.
  - It improves responsiveness for non-urgent downstream work but does not remove the underlying cost.
- Do not assume `memo` should be added everywhere.
  - It helps only when render cost is meaningful and props are often the same.

## Summary of the chosen optimization order

1. Remove unnecessary Effect-driven state.
2. Stabilize and simplify child props.
3. Re-measure.
4. Use deferred scheduling for non-urgent heavy result updates.
5. Virtualize if row count remains the dominant problem.

This order follows current React guidance: fix structure first, then apply targeted memoization and scheduling tools, then address volume with virtualization when needed.
