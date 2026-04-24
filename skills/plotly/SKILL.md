---
name: plotly
description: "Plotly workflow skill. Use this skill when the user needs Interactive visualization library. Use when you need hover info, zoom, pan, or web-embeddable charts. Best for dashboards, exploratory analysis, and presentations. For static publication figures use matplotlib or scientific-visualization and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["plotly", "interactive", "visualization", "library", "use", "you", "need", "hover"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# Plotly

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/plotly` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Plotly Python graphing library for creating interactive, publication-quality visualizations with 40+ chart types.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Choosing Between APIs, Core Capabilities, Integration with Dash, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need interactive charts with hover, zoom, pan, or web embedding.
- You are building dashboards, exploratory analysis notebooks, or presentations that benefit from rich interaction.
- You want to choose between Plotly Express and Graph Objects for the same visualization task.
- Use when the request clearly matches the imported source intent: Interactive visualization library. Use when you need hover info, zoom, pan, or web-embeddable charts. Best for dashboards, exploratory analysis, and presentations. For static publication figures use matplotlib or....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. ### Scientific Data Visualization python import plotly.express as px # Scatter plot with trendline fig = px.scatter(df, x='temperature', y='yield', trendline='ols') # Heatmap from matrix fig = px.imshow(correlationmatrix, textauto=True, colorcontinuousscale='RdBu') # 3D surface plot import plotly.graphobjects as go fig = go.Figure(data=[go.Surface(z=zdata, x=xdata, y=ydata)]) ### Statistical Analysis python # Distribution comparison fig = px.histogram(df, x='values', color='group', marginal='box', nbins=30) # Box plot with all points fig = px.box(df, x='category', y='value', points='all') # Violin plot fig = px.violin(df, x='group', y='measurement', box=True) ### Time Series and Financial python # Time series with rangeslider fig = px.line(df, x='date', y='price') fig.updatexaxes(rangeslidervisible=True) # Candlestick chart import plotly.graphobjects as go fig = go.Figure(data=[go.Candlestick( x=df['date'], open=df['open'], high=df['high'], low=df['low'], close=df['close'] )]) ### Multi-Plot Dashboards python from plotly.subplots import makesubplots import plotly.graphobjects as go fig = makesubplots( rows=2, cols=2, subplottitles=('Scatter', 'Bar', 'Histogram', 'Box'), specs=[[{'type': 'scatter'}, {'type': 'bar'}], [{'type': 'histogram'}, {'type': 'box'}]] ) fig.addtrace(go.Scatter(x=[1, 2, 3], y=[4, 5, 6]), row=1, col=1) fig.addtrace(go.Bar(x=['A', 'B'], y=[1, 2]), row=1, col=2) fig.addtrace(go.Histogram(x=data), row=2, col=1) fig.addtrace(go.Box(y=data), row=2, col=2) fig.updatelayout(height=800, showlegend=False)
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Common Workflows

### Scientific Data Visualization

```python
import plotly.express as px

# Scatter plot with trendline
fig = px.scatter(df, x='temperature', y='yield', trendline='ols')

# Heatmap from matrix
fig = px.imshow(correlation_matrix, text_auto=True, color_continuous_scale='RdBu')

# 3D surface plot
import plotly.graph_objects as go
fig = go.Figure(data=[go.Surface(z=z_data, x=x_data, y=y_data)])
```

### Statistical Analysis

```python
# Distribution comparison
fig = px.histogram(df, x='values', color='group', marginal='box', nbins=30)

# Box plot with all points
fig = px.box(df, x='category', y='value', points='all')

# Violin plot
fig = px.violin(df, x='group', y='measurement', box=True)
```

### Time Series and Financial

```python
# Time series with rangeslider
fig = px.line(df, x='date', y='price')
fig.update_xaxes(rangeslider_visible=True)

# Candlestick chart
import plotly.graph_objects as go
fig = go.Figure(data=[go.Candlestick(
    x=df['date'],
    open=df['open'],
    high=df['high'],
    low=df['low'],
    close=df['close']
)])
```

### Multi-Plot Dashboards

```python
from plotly.subplots import make_subplots
import plotly.graph_objects as go

fig = make_subplots(
    rows=2, cols=2,
    subplot_titles=('Scatter', 'Bar', 'Histogram', 'Box'),
    specs=[[{'type': 'scatter'}, {'type': 'bar'}],
           [{'type': 'histogram'}, {'type': 'box'}]]
)

fig.add_trace(go.Scatter(x=[1, 2, 3], y=[4, 5, 6]), row=1, col=1)
fig.add_trace(go.Bar(x=['A', 'B'], y=[1, 2]), row=1, col=2)
fig.add_trace(go.Histogram(x=data), row=2, col=1)
fig.add_trace(go.Box(y=data), row=2, col=2)

fig.update_layout(height=800, showlegend=False)
```

#### Imported: Choosing Between APIs

### Use Plotly Express (px)
For quick, standard visualizations with sensible defaults:
- Working with pandas DataFrames
- Creating common chart types (scatter, line, bar, histogram, etc.)
- Need automatic color encoding and legends
- Want minimal code (1-5 lines)

See reference/plotly-express.md for complete guide.

### Use Graph Objects (go)
For fine-grained control and custom visualizations:
- Chart types not in Plotly Express (3D mesh, isosurface, complex financial charts)
- Building complex multi-trace figures from scratch
- Need precise control over individual components
- Creating specialized visualizations with custom shapes and annotations

See reference/graph-objects.md for complete guide.

**Note:** Plotly Express returns graph objects Figure, so you can combine approaches:
```python
fig = px.scatter(df, x='x', y='y')
fig.update_layout(title='Custom Title')  # Use go methods on px figure
fig.add_hline(y=10)                     # Add shapes
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @plotly to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @plotly against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @plotly for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @plotly using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

Install Plotly:
```bash
uv pip install plotly
```

Basic usage with Plotly Express (high-level API):
```python
import plotly.express as px
import pandas as pd

df = pd.DataFrame({
    'x': [1, 2, 3, 4],
    'y': [10, 11, 12, 13]
})

fig = px.scatter(df, x='x', y='y', title='My First Plot')
fig.show()
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/plotly`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@odoo-sales-crm-expert` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-security-rules` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-shopify-integration` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@odoo-upgrade-advisor` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Files

- **plotly-express.md** - High-level API for quick visualizations
- **graph-objects.md** - Low-level API for fine-grained control
- **chart-types.md** - Complete catalog of 40+ chart types with examples
- **layouts-styling.md** - Subplots, templates, colors, customization
- **export-interactivity.md** - Export options and interactive features

#### Imported: Additional Resources

- Official documentation: https://plotly.com/python/
- API reference: https://plotly.com/python-api-reference/
- Community forum: https://community.plotly.com/

#### Imported: Core Capabilities

### 1. Chart Types

Plotly supports 40+ chart types organized into categories:

**Basic Charts:** scatter, line, bar, pie, area, bubble

**Statistical Charts:** histogram, box plot, violin, distribution, error bars

**Scientific Charts:** heatmap, contour, ternary, image display

**Financial Charts:** candlestick, OHLC, waterfall, funnel, time series

**Maps:** scatter maps, choropleth, density maps (geographic visualization)

**3D Charts:** scatter3d, surface, mesh, cone, volume

**Specialized:** sunburst, treemap, sankey, parallel coordinates, gauge

For detailed examples and usage of all chart types, see reference/chart-types.md.

### 2. Layouts and Styling

**Subplots:** Create multi-plot figures with shared axes:
```python
from plotly.subplots import make_subplots
import plotly.graph_objects as go

fig = make_subplots(rows=2, cols=2, subplot_titles=('A', 'B', 'C', 'D'))
fig.add_trace(go.Scatter(x=[1, 2], y=[3, 4]), row=1, col=1)
```

**Templates:** Apply coordinated styling:
```python
fig = px.scatter(df, x='x', y='y', template='plotly_dark')
# Built-in: plotly_white, plotly_dark, ggplot2, seaborn, simple_white
```

**Customization:** Control every aspect of appearance:
- Colors (discrete sequences, continuous scales)
- Fonts and text
- Axes (ranges, ticks, grids)
- Legends
- Margins and sizing
- Annotations and shapes

For complete layout and styling options, see reference/layouts-styling.md.

### 3. Interactivity

Built-in interactive features:
- Hover tooltips with customizable data
- Pan and zoom
- Legend toggling
- Box/lasso selection
- Rangesliders for time series
- Buttons and dropdowns
- Animations

```python
# Custom hover template
fig.update_traces(
    hovertemplate='<b>%{x}</b><br>Value: %{y:.2f}<extra></extra>'
)

# Add rangeslider
fig.update_xaxes(rangeslider_visible=True)

# Animations
fig = px.scatter(df, x='x', y='y', animation_frame='year')
```

For complete interactivity guide, see reference/export-interactivity.md.

### 4. Export Options

**Interactive HTML:**
```python
fig.write_html('chart.html')                       # Full standalone
fig.write_html('chart.html', include_plotlyjs='cdn')  # Smaller file
```

**Static Images (requires kaleido):**
```bash
uv pip install kaleido
```

```python
fig.write_image('chart.png')   # PNG
fig.write_image('chart.pdf')   # PDF
fig.write_image('chart.svg')   # SVG
```

For complete export options, see reference/export-interactivity.md.

#### Imported: Integration with Dash

For interactive web applications, use Dash (Plotly's web app framework):

```bash
uv pip install dash
```

```python
import dash
from dash import dcc, html
import plotly.express as px

app = dash.Dash(__name__)

fig = px.scatter(df, x='x', y='y')

app.layout = html.Div([
    html.H1('Dashboard'),
    dcc.Graph(figure=fig)
])

app.run_server(debug=True)
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
