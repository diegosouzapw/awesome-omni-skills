---
name: networkx
description: "NetworkX workflow skill. Use this skill when the user needs NetworkX is a Python package for creating, manipulating, and analyzing complex networks and graphs and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["networkx", "python", "package", "for", "creating", "manipulating", "and", "analyzing"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-25"
---

# NetworkX

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/networkx` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# NetworkX

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Working with NetworkX, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating graphs: Building network structures from data, adding nodes and edges with attributes
- Graph analysis: Computing centrality measures, finding shortest paths, detecting communities, measuring clustering
- Graph algorithms: Running standard algorithms like Dijkstra's, PageRank, minimum spanning trees, maximum flow
- Network generation: Creating synthetic networks (random, scale-free, small-world models) for testing or simulation
- Graph I/O: Reading from or writing to various formats (edge lists, GraphML, JSON, CSV, adjacency matrices)
- Visualization: Drawing and customizing network visualizations with matplotlib or interactive libraries

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview and provenance files before loading any copied upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: Overview

NetworkX is a Python package for creating, manipulating, and analyzing complex networks and graphs. Use this skill when working with network or graph data structures, including social networks, biological networks, transportation systems, citation networks, knowledge graphs, or any system involving relationships between entities.

#### Imported: Core Capabilities

### 1. Graph Creation and Manipulation

NetworkX supports four main graph types:
- **Graph**: Undirected graphs with single edges
- **DiGraph**: Directed graphs with one-way connections
- **MultiGraph**: Undirected graphs allowing multiple edges between nodes
- **MultiDiGraph**: Directed graphs with multiple edges

Create graphs by:
```python
import networkx as nx

# Create empty graph
G = nx.Graph()

# Add nodes (can be any hashable type)
G.add_node(1)
G.add_nodes_from([2, 3, 4])
G.add_node("protein_A", type='enzyme', weight=1.5)

# Add edges
G.add_edge(1, 2)
G.add_edges_from([(1, 3), (2, 4)])
G.add_edge(1, 4, weight=0.8, relation='interacts')
```

**Reference**: See `references/graph-basics.md` for comprehensive guidance on creating, modifying, examining, and managing graph structures, including working with attributes and subgraphs.

### 2. Graph Algorithms

NetworkX provides extensive algorithms for network analysis:

**Shortest Paths**:
```python
# Find shortest path
path = nx.shortest_path(G, source=1, target=5)
length = nx.shortest_path_length(G, source=1, target=5, weight='weight')
```

**Centrality Measures**:
```python
# Degree centrality
degree_cent = nx.degree_centrality(G)

# Betweenness centrality
betweenness = nx.betweenness_centrality(G)

# PageRank
pagerank = nx.pagerank(G)
```

**Community Detection**:
```python
from networkx.algorithms import community

# Detect communities
communities = community.greedy_modularity_communities(G)
```

**Connectivity**:
```python
# Check connectivity
is_connected = nx.is_connected(G)

# Find connected components
components = list(nx.connected_components(G))
```

**Reference**: See `references/algorithms.md` for detailed documentation on all available algorithms including shortest paths, centrality measures, clustering, community detection, flows, matching, tree algorithms, and graph traversal.

### 3. Graph Generators

Create synthetic networks for testing, simulation, or modeling:

**Classic Graphs**:
```python
# Complete graph
G = nx.complete_graph(n=10)

# Cycle graph
G = nx.cycle_graph(n=20)

# Known graphs
G = nx.karate_club_graph()
G = nx.petersen_graph()
```

**Random Networks**:
```python
# Erdős-Rényi random graph
G = nx.erdos_renyi_graph(n=100, p=0.1, seed=42)

# Barabási-Albert scale-free network
G = nx.barabasi_albert_graph(n=100, m=3, seed=42)

# Watts-Strogatz small-world network
G = nx.watts_strogatz_graph(n=100, k=6, p=0.1, seed=42)
```

**Structured Networks**:
```python
# Grid graph
G = nx.grid_2d_graph(m=5, n=7)

# Random tree
G = nx.random_tree(n=100, seed=42)
```

**Reference**: See `references/generators.md` for comprehensive coverage of all graph generators including classic, random, lattice, bipartite, and specialized network models with detailed parameters and use cases.

### 4. Reading and Writing Graphs

NetworkX supports numerous file formats and data sources:

**File Formats**:
```python
# Edge list
G = nx.read_edgelist('graph.edgelist')
nx.write_edgelist(G, 'graph.edgelist')

# GraphML (preserves attributes)
G = nx.read_graphml('graph.graphml')
nx.write_graphml(G, 'graph.graphml')

# GML
G = nx.read_gml('graph.gml')
nx.write_gml(G, 'graph.gml')

# JSON
data = nx.node_link_data(G)
G = nx.node_link_graph(data)
```

**Pandas Integration**:
```python
import pandas as pd

# From DataFrame
df = pd.DataFrame({'source': [1, 2, 3], 'target': [2, 3, 4], 'weight': [0.5, 1.0, 0.75]})
G = nx.from_pandas_edgelist(df, 'source', 'target', edge_attr='weight')

# To DataFrame
df = nx.to_pandas_edgelist(G)
```

**Matrix Formats**:
```python
import numpy as np

# Adjacency matrix
A = nx.to_numpy_array(G)
G = nx.from_numpy_array(A)

# Sparse matrix
A = nx.to_scipy_sparse_array(G)
G = nx.from_scipy_sparse_array(A)
```

**Reference**: See `references/io.md` for complete documentation on all I/O formats including CSV, SQL databases, Cytoscape, DOT, and guidance on format selection for different use cases.

### 5. Visualization

Create clear and informative network visualizations:

**Basic Visualization**:
```python
import matplotlib.pyplot as plt

# Simple draw
nx.draw(G, with_labels=True)
plt.show()

# With layout
pos = nx.spring_layout(G, seed=42)
nx.draw(G, pos=pos, with_labels=True, node_color='lightblue', node_size=500)
plt.show()
```

**Customization**:
```python
# Color by degree
node_colors = [G.degree(n) for n in G.nodes()]
nx.draw(G, node_color=node_colors, cmap=plt.cm.viridis)

# Size by centrality
centrality = nx.betweenness_centrality(G)
node_sizes = [3000 * centrality[n] for n in G.nodes()]
nx.draw(G, node_size=node_sizes)

# Edge weights
edge_widths = [3 * G[u][v].get('weight', 1) for u, v in G.edges()]
nx.draw(G, width=edge_widths)
```

**Layout Algorithms**:
```python
# Spring layout (force-directed)
pos = nx.spring_layout(G, seed=42)

# Circular layout
pos = nx.circular_layout(G)

# Kamada-Kawai layout
pos = nx.kamada_kawai_layout(G)

# Spectral layout
pos = nx.spectral_layout(G)
```

**Publication Quality**:
```python
plt.figure(figsize=(12, 8))
pos = nx.spring_layout(G, seed=42)
nx.draw(G, pos=pos, node_color='lightblue', node_size=500,
        edge_color='gray', with_labels=True, font_size=10)
plt.title('Network Visualization', fontsize=16)
plt.axis('off')
plt.tight_layout()
plt.savefig('network.png', dpi=300, bbox_inches='tight')
plt.savefig('network.pdf', bbox_inches='tight')  # Vector format
```

**Reference**: See `references/visualization.md` for extensive documentation on visualization techniques including layout algorithms, customization options, interactive visualizations with Plotly and PyVis, 3D networks, and publication-quality figure creation.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @networkx to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @networkx against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @networkx for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @networkx using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/networkx`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Reference

### Basic Operations
```python
# Create
G = nx.Graph()
G.add_edge(1, 2)

# Query
G.number_of_nodes()
G.number_of_edges()
G.degree(1)
list(G.neighbors(1))

# Check
G.has_node(1)
G.has_edge(1, 2)
nx.is_connected(G)

# Modify
G.remove_node(1)
G.remove_edge(1, 2)
G.clear()
```

### Essential Algorithms
```python
# Paths
nx.shortest_path(G, source, target)
nx.all_pairs_shortest_path(G)

# Centrality
nx.degree_centrality(G)
nx.betweenness_centrality(G)
nx.closeness_centrality(G)
nx.pagerank(G)

# Clustering
nx.clustering(G)
nx.average_clustering(G)

# Components
nx.connected_components(G)
nx.strongly_connected_components(G)  # Directed

# Community
community.greedy_modularity_communities(G)
```

### File I/O Quick Reference
```python
# Read
nx.read_edgelist('file.txt')
nx.read_graphml('file.graphml')
nx.read_gml('file.gml')

# Write
nx.write_edgelist(G, 'file.txt')
nx.write_graphml(G, 'file.graphml')
nx.write_gml(G, 'file.gml')

# Pandas
nx.from_pandas_edgelist(df, 'source', 'target')
nx.to_pandas_edgelist(G)
```

#### Imported: Resources

This skill includes comprehensive reference documentation:

### references/graph-basics.md
Detailed guide on graph types, creating and modifying graphs, adding nodes and edges, managing attributes, examining structure, and working with subgraphs.

### references/algorithms.md
Complete coverage of NetworkX algorithms including shortest paths, centrality measures, connectivity, clustering, community detection, flow algorithms, tree algorithms, matching, coloring, isomorphism, and graph traversal.

### references/generators.md
Comprehensive documentation on graph generators including classic graphs, random models (Erdős-Rényi, Barabási-Albert, Watts-Strogatz), lattices, trees, social network models, and specialized generators.

### references/io.md
Complete guide to reading and writing graphs in various formats: edge lists, adjacency lists, GraphML, GML, JSON, CSV, Pandas DataFrames, NumPy arrays, SciPy sparse matrices, database integration, and format selection guidelines.

### references/visualization.md
Extensive documentation on visualization techniques including layout algorithms, customizing node and edge appearance, labels, interactive visualizations with Plotly and PyVis, 3D networks, bipartite layouts, and creating publication-quality figures.

#### Imported: Additional Resources

- **Official Documentation**: https://networkx.org/documentation/latest/
- **Tutorial**: https://networkx.org/documentation/latest/tutorial.html
- **Gallery**: https://networkx.org/documentation/latest/auto_examples/index.html
- **GitHub**: https://github.com/networkx/networkx

#### Imported: Working with NetworkX

### Installation

Ensure NetworkX is installed:
```python
# Check if installed
import networkx as nx
print(nx.__version__)

# Install if needed (via bash)
# uv pip install networkx
# uv pip install networkx[default]  # With optional dependencies
```

### Common Workflow Pattern

Most NetworkX tasks follow this pattern:

1. **Create or Load Graph**:
   ```python
   # From scratch
   G = nx.Graph()
   G.add_edges_from([(1, 2), (2, 3), (3, 4)])

   # Or load from file/data
   G = nx.read_edgelist('data.txt')
   ```

2. **Examine Structure**:
   ```python
   print(f"Nodes: {G.number_of_nodes()}")
   print(f"Edges: {G.number_of_edges()}")
   print(f"Density: {nx.density(G)}")
   print(f"Connected: {nx.is_connected(G)}")
   ```

3. **Analyze**:
   ```python
   # Compute metrics
   degree_cent = nx.degree_centrality(G)
   avg_clustering = nx.average_clustering(G)

   # Find paths
   path = nx.shortest_path(G, source=1, target=4)

   # Detect communities
   communities = community.greedy_modularity_communities(G)
   ```

4. **Visualize**:
   ```python
   pos = nx.spring_layout(G, seed=42)
   nx.draw(G, pos=pos, with_labels=True)
   plt.show()
   ```

5. **Export Results**:
   ```python
   # Save graph
   nx.write_graphml(G, 'analyzed_network.graphml')

   # Save metrics
   df = pd.DataFrame({
       'node': list(degree_cent.keys()),
       'centrality': list(degree_cent.values())
   })
   df.to_csv('centrality_results.csv', index=False)
   ```

### Important Considerations

**Floating Point Precision**: When graphs contain floating-point numbers, all results are inherently approximate due to precision limitations. This can affect algorithm outcomes, particularly in minimum/maximum computations.

**Memory and Performance**: Each time a script runs, graph data must be loaded into memory. For large networks:
- Use appropriate data structures (sparse matrices for large sparse graphs)
- Consider loading only necessary subgraphs
- Use efficient file formats (pickle for Python objects, compressed formats)
- Leverage approximate algorithms for very large networks (e.g., `k` parameter in centrality calculations)

**Node and Edge Types**:
- Nodes can be any hashable Python object (numbers, strings, tuples, custom objects)
- Use meaningful identifiers for clarity
- When removing nodes, all incident edges are automatically removed

**Random Seeds**: Always set random seeds for reproducibility in random graph generation and force-directed layouts:
```python
G = nx.erdos_renyi_graph(n=100, p=0.1, seed=42)
pos = nx.spring_layout(G, seed=42)
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
