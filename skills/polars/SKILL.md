---
name: polars
description: "Polars workflow skill. Use this skill when the user needs Fast in-memory DataFrame library for datasets that fit in RAM. Use when pandas is too slow but data still fits in memory. Lazy evaluation, parallel execution, Apache Arrow backend. Best for 1-100GB datasets, ETL pipelines, faster pandas replacement. For larger-than-RAM data use dask or vaex and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: data-ai
tags: ["polars", "fast", "in-memory", "dataframe", "library", "for", "datasets", "fit"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Polars

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/polars` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Polars

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Common Operations, Aggregations and Window Functions, Data I/O, Transformations, Pandas Migration.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need a faster in-memory DataFrame workflow than pandas for data that still fits in RAM.
- You are building ETL, analytics, or transformation pipelines that benefit from lazy evaluation and parallel execution.
- You want expression-based tabular operations on top of Apache Arrow semantics.
- Use when the request clearly matches the imported source intent: Fast in-memory DataFrame library for datasets that fit in RAM. Use when pandas is too slow but data still fits in memory. Lazy evaluation, parallel execution, Apache Arrow backend. Best for 1-100GB datasets, ETL....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

Polars is a lightning-fast DataFrame library for Python and Rust built on Apache Arrow. Work with Polars' expression-based API, lazy evaluation framework, and high-performance data manipulation capabilities for efficient data processing, pandas migration, and data pipeline optimization.

#### Imported: Core Concepts

### Expressions

Expressions are the fundamental building blocks of Polars operations. They describe transformations on data and can be composed, reused, and optimized.

**Key principles:**
- Use `pl.col("column_name")` to reference columns
- Chain methods to build complex transformations
- Expressions are lazy and only execute within contexts (select, with_columns, filter, group_by)

**Example:**
```python
# Expression-based computation
df.select(
    pl.col("name"),
    (pl.col("age") * 12).alias("age_in_months")
)
```

### Lazy vs Eager Evaluation

**Eager (DataFrame):** Operations execute immediately
```python
df = pl.read_csv("file.csv")  # Reads immediately
result = df.filter(pl.col("age") > 25)  # Executes immediately
```

**Lazy (LazyFrame):** Operations build a query plan, optimized before execution
```python
lf = pl.scan_csv("file.csv")  # Doesn't read yet
result = lf.filter(pl.col("age") > 25).select("name", "age")
df = result.collect()  # Now executes optimized query
```

**When to use lazy:**
- Working with large datasets
- Complex query pipelines
- When only some columns/rows are needed
- Performance is critical

**Benefits of lazy evaluation:**
- Automatic query optimization
- Predicate pushdown
- Projection pushdown
- Parallel execution

For detailed concepts, load `references/core_concepts.md`.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @polars to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @polars against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @polars for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @polars using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

### Installation and Basic Usage

Install Polars:
```python
uv pip install polars
```

Basic DataFrame creation and operations:
```python
import polars as pl

# Create DataFrame
df = pl.DataFrame({
    "name": ["Alice", "Bob", "Charlie"],
    "age": [25, 30, 35],
    "city": ["NY", "LA", "SF"]
})

# Select columns
df.select("name", "age")

# Filter rows
df.filter(pl.col("age") > 25)

# Add computed columns
df.with_columns(
    age_plus_10=pl.col("age") + 10
)
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use lazy evaluation for large datasets:
- Avoid Python functions in hot paths:
- Stay within expression API for parallelization
- Use .map_elements() only when necessary
- Prefer native Polars operations
- Use streaming for very large data:
- Select only needed columns early:

### Imported Operating Notes

#### Imported: Best Practices

### Performance Optimization

1. **Use lazy evaluation for large datasets:**
   ```python
   lf = pl.scan_csv("large.csv")  # Don't use read_csv
   result = lf.filter(...).select(...).collect()
   ```

2. **Avoid Python functions in hot paths:**
   - Stay within expression API for parallelization
   - Use `.map_elements()` only when necessary
   - Prefer native Polars operations

3. **Use streaming for very large data:**
   ```python
   lf.collect(streaming=True)
   ```

4. **Select only needed columns early:**
   ```python
   # Good: Select columns early
   lf.select("col1", "col2").filter(...)

   # Bad: Filter on all columns first
   lf.filter(...).select("col1", "col2")
   ```

5. **Use appropriate data types:**
   - Categorical for low-cardinality strings
   - Appropriate integer sizes (i32 vs i64)
   - Date types for temporal data

### Expression Patterns

**Conditional operations:**
```python
pl.when(condition).then(value).otherwise(other_value)
```

**Column operations across multiple columns:**
```python
df.select(pl.col("^.*_value$") * 2)  # Regex pattern
```

**Null handling:**
```python
pl.col("x").fill_null(0)
pl.col("x").is_null()
pl.col("x").drop_nulls()
```

For additional best practices and patterns, load `references/best_practices.md`.

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/polars`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@os-scripting` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@oss-hunter` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@outlook-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@outlook-calendar-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |



### Imported Reference Notes

#### Imported: Resources

This skill includes comprehensive reference documentation:

### references/
- `core_concepts.md` - Detailed explanations of expressions, lazy evaluation, and type system
- `operations.md` - Comprehensive guide to all common operations with examples
- `pandas_migration.md` - Complete migration guide from pandas to Polars
- `io_guide.md` - Data I/O operations for all supported formats
- `transformations.md` - Joins, concatenation, pivots, and reshaping operations
- `best_practices.md` - Performance optimization tips and common patterns

Load these references as needed when users require detailed information about specific topics.

#### Imported: Common Operations

### Select
Select and manipulate columns:
```python
# Select specific columns
df.select("name", "age")

# Select with expressions
df.select(
    pl.col("name"),
    (pl.col("age") * 2).alias("double_age")
)

# Select all columns matching a pattern
df.select(pl.col("^.*_id$"))
```

### Filter
Filter rows by conditions:
```python
# Single condition
df.filter(pl.col("age") > 25)

# Multiple conditions (cleaner than using &)
df.filter(
    pl.col("age") > 25,
    pl.col("city") == "NY"
)

# Complex conditions
df.filter(
    (pl.col("age") > 25) | (pl.col("city") == "LA")
)
```

### With Columns
Add or modify columns while preserving existing ones:
```python
# Add new columns
df.with_columns(
    age_plus_10=pl.col("age") + 10,
    name_upper=pl.col("name").str.to_uppercase()
)

# Parallel computation (all columns computed in parallel)
df.with_columns(
    pl.col("value") * 10,
    pl.col("value") * 100,
)
```

### Group By and Aggregations
Group data and compute aggregations:
```python
# Basic grouping
df.group_by("city").agg(
    pl.col("age").mean().alias("avg_age"),
    pl.len().alias("count")
)

# Multiple group keys
df.group_by("city", "department").agg(
    pl.col("salary").sum()
)

# Conditional aggregations
df.group_by("city").agg(
    (pl.col("age") > 30).sum().alias("over_30")
)
```

For detailed operation patterns, load `references/operations.md`.

#### Imported: Aggregations and Window Functions

### Aggregation Functions
Common aggregations within `group_by` context:
- `pl.len()` - count rows
- `pl.col("x").sum()` - sum values
- `pl.col("x").mean()` - average
- `pl.col("x").min()` / `pl.col("x").max()` - extremes
- `pl.first()` / `pl.last()` - first/last values

### Window Functions with `over()`
Apply aggregations while preserving row count:
```python
# Add group statistics to each row
df.with_columns(
    avg_age_by_city=pl.col("age").mean().over("city"),
    rank_in_city=pl.col("salary").rank().over("city")
)

# Multiple grouping columns
df.with_columns(
    group_avg=pl.col("value").mean().over("category", "region")
)
```

**Mapping strategies:**
- `group_to_rows` (default): Preserves original row order
- `explode`: Faster but groups rows together
- `join`: Creates list columns

#### Imported: Data I/O

### Supported Formats
Polars supports reading and writing:
- CSV, Parquet, JSON, Excel
- Databases (via connectors)
- Cloud storage (S3, Azure, GCS)
- Google BigQuery
- Multiple/partitioned files

### Common I/O Operations

**CSV:**
```python
# Eager
df = pl.read_csv("file.csv")
df.write_csv("output.csv")

# Lazy (preferred for large files)
lf = pl.scan_csv("file.csv")
result = lf.filter(...).select(...).collect()
```

**Parquet (recommended for performance):**
```python
df = pl.read_parquet("file.parquet")
df.write_parquet("output.parquet")
```

**JSON:**
```python
df = pl.read_json("file.json")
df.write_json("output.json")
```

For comprehensive I/O documentation, load `references/io_guide.md`.

#### Imported: Transformations

### Joins
Combine DataFrames:
```python
# Inner join
df1.join(df2, on="id", how="inner")

# Left join
df1.join(df2, on="id", how="left")

# Join on different column names
df1.join(df2, left_on="user_id", right_on="id")
```

### Concatenation
Stack DataFrames:
```python
# Vertical (stack rows)
pl.concat([df1, df2], how="vertical")

# Horizontal (add columns)
pl.concat([df1, df2], how="horizontal")

# Diagonal (union with different schemas)
pl.concat([df1, df2], how="diagonal")
```

### Pivot and Unpivot
Reshape data:
```python
# Pivot (wide format)
df.pivot(values="sales", index="date", columns="product")

# Unpivot (long format)
df.unpivot(index="id", on=["col1", "col2"])
```

For detailed transformation examples, load `references/transformations.md`.

#### Imported: Pandas Migration

Polars offers significant performance improvements over pandas with a cleaner API. Key differences:

### Conceptual Differences
- **No index**: Polars uses integer positions only
- **Strict typing**: No silent type conversions
- **Lazy evaluation**: Available via LazyFrame
- **Parallel by default**: Operations parallelized automatically

### Common Operation Mappings

| Operation | Pandas | Polars |
|-----------|--------|--------|
| Select column | `df["col"]` | `df.select("col")` |
| Filter | `df[df["col"] > 10]` | `df.filter(pl.col("col") > 10)` |
| Add column | `df.assign(x=...)` | `df.with_columns(x=...)` |
| Group by | `df.groupby("col").agg(...)` | `df.group_by("col").agg(...)` |
| Window | `df.groupby("col").transform(...)` | `df.with_columns(...).over("col")` |

### Key Syntax Patterns

**Pandas sequential (slow):**
```python
df.assign(
    col_a=lambda df_: df_.value * 10,
    col_b=lambda df_: df_.value * 100
)
```

**Polars parallel (fast):**
```python
df.with_columns(
    col_a=pl.col("value") * 10,
    col_b=pl.col("value") * 100,
)
```

For comprehensive migration guide, load `references/pandas_migration.md`.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
