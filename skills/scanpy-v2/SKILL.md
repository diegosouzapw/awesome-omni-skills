---
name: scanpy-v2
description: "Scanpy: Single-Cell Analysis workflow skill. Use this skill when the user needs Scanpy is a scalable Python toolkit for analyzing single-cell RNA-seq data, built on AnnData. Apply this skill for complete single-cell workflows including quality control, normalization, dimensionality reduction, clustering, marker gene identification, visualization, and trajectory analysis and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: tools
tags: ["scanpy-v2", "scanpy", "scalable", "python", "toolkit", "for", "analyzing", "single-cell"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Scanpy: Single-Cell Analysis

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/scanpy` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Scanpy: Single-Cell Analysis

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Common Tasks, Key Parameters to Adjust, Common Pitfalls and Best Practices, Tips for Effective Analysis, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Analyzing single-cell RNA-seq data (.h5ad, 10X, CSV formats)
- Performing quality control on scRNA-seq datasets
- Creating UMAP, t-SNE, or PCA visualizations
- Identifying cell clusters and finding marker genes
- Annotating cell types based on gene expression
- Conducting trajectory inference or pseudotime analysis

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

1. Quality Control Identify and filter low-quality cells and genes: `python # Identify mitochondrial genes adata.var['mt'] = adata.varnames.str.startswith('MT-') # Calculate QC metrics sc.pp.calculateqcmetrics(adata, qcvars=['mt'], inplace=True) # Visualize QC metrics sc.pl.violin(adata, ['ngenesbycounts', 'totalcounts', 'pctcountsmt'], jitter=0.4, multipanel=True) # Filter cells and genes sc.pp.filtercells(adata, mingenes=200) sc.pp.filtergenes(adata, mincells=3) adata = adata[adata.obs.pctcountsmt < 5, :] # Remove high MT% cells Use the QC script for automated analysis: bash python scripts/qcanalysis.py inputfile.h5ad --output filtered.h5ad ### 2.
2. Normalization and Preprocessing python # Normalize to 10,000 counts per cell sc.pp.normalizetotal(adata, targetsum=1e4) # Log-transform sc.pp.log1p(adata) # Save raw counts for later adata.raw = adata # Identify highly variable genes sc.pp.highlyvariablegenes(adata, ntopgenes=2000) sc.pl.highlyvariablegenes(adata) # Subset to highly variable genes adata = adata[:, adata.var.highlyvariable] # Regress out unwanted variation sc.pp.regressout(adata, ['totalcounts', 'pctcountsmt']) # Scale data sc.pp.scale(adata, maxvalue=10) ### 3.
3. Dimensionality Reduction python # PCA sc.tl.pca(adata, svdsolver='arpack') sc.pl.pcavarianceratio(adata, log=True) # Check elbow plot # Compute neighborhood graph sc.pp.neighbors(adata, nneighbors=10, npcs=40) # UMAP for visualization sc.tl.umap(adata) sc.pl.umap(adata, color='leiden') # Alternative: t-SNE sc.tl.tsne(adata) ### 4.
4. Clustering python # Leiden clustering (recommended) sc.tl.leiden(adata, resolution=0.5) sc.pl.umap(adata, color='leiden', legendloc='on data') # Try multiple resolutions to find optimal granularity for res in [0.3, 0.5, 0.8, 1.0]: sc.tl.leiden(adata, resolution=res, keyadded=f'leiden{res}') ### 5.
5. Marker Gene Identification python # Find marker genes for each cluster sc.tl.rankgenesgroups(adata, 'leiden', method='wilcoxon') # Visualize results sc.pl.rankgenesgroups(adata, ngenes=25, sharey=False) sc.pl.rankgenesgroupsheatmap(adata, ngenes=10) sc.pl.rankgenesgroupsdotplot(adata, ngenes=5) # Get results as DataFrame markers = sc.get.rankgenesgroupsdf(adata, group='0') ### 6.
6. Cell Type Annotation python # Define marker genes for known cell types markergenes = ['CD3D', 'CD14', 'MS4A1', 'NKG7', 'FCGR3A'] # Visualize markers sc.pl.umap(adata, color=markergenes, useraw=True) sc.pl.dotplot(adata, varnames=markergenes, groupby='leiden') # Manual annotation clustertocelltype = { '0': 'CD4 T cells', '1': 'CD14+ Monocytes', '2': 'B cells', '3': 'CD8 T cells', } adata.obs['celltype'] = adata.obs['leiden'].map(clustertocelltype) # Visualize annotated types sc.pl.umap(adata, color='celltype', legendloc='on data') ### 7.
7. Save Results python # Save processed data adata.write('results/processeddata.h5ad') # Export metadata adata.obs.tocsv('results/cellmetadata.csv') adata.var.tocsv('results/genemetadata.csv') `

### Imported Workflow Notes

#### Imported: Standard Analysis Workflow

### 1. Quality Control

Identify and filter low-quality cells and genes:

```python
# Identify mitochondrial genes
adata.var['mt'] = adata.var_names.str.startswith('MT-')

# Calculate QC metrics
sc.pp.calculate_qc_metrics(adata, qc_vars=['mt'], inplace=True)

# Visualize QC metrics
sc.pl.violin(adata, ['n_genes_by_counts', 'total_counts', 'pct_counts_mt'],
             jitter=0.4, multi_panel=True)

# Filter cells and genes
sc.pp.filter_cells(adata, min_genes=200)
sc.pp.filter_genes(adata, min_cells=3)
adata = adata[adata.obs.pct_counts_mt < 5, :]  # Remove high MT% cells
```

**Use the QC script for automated analysis:**
```bash
python scripts/qc_analysis.py input_file.h5ad --output filtered.h5ad
```

### 2. Normalization and Preprocessing

```python
# Normalize to 10,000 counts per cell
sc.pp.normalize_total(adata, target_sum=1e4)

# Log-transform
sc.pp.log1p(adata)

# Save raw counts for later
adata.raw = adata

# Identify highly variable genes
sc.pp.highly_variable_genes(adata, n_top_genes=2000)
sc.pl.highly_variable_genes(adata)

# Subset to highly variable genes
adata = adata[:, adata.var.highly_variable]

# Regress out unwanted variation
sc.pp.regress_out(adata, ['total_counts', 'pct_counts_mt'])

# Scale data
sc.pp.scale(adata, max_value=10)
```

### 3. Dimensionality Reduction

```python
# PCA
sc.tl.pca(adata, svd_solver='arpack')
sc.pl.pca_variance_ratio(adata, log=True)  # Check elbow plot

# Compute neighborhood graph
sc.pp.neighbors(adata, n_neighbors=10, n_pcs=40)

# UMAP for visualization
sc.tl.umap(adata)
sc.pl.umap(adata, color='leiden')

# Alternative: t-SNE
sc.tl.tsne(adata)
```

### 4. Clustering

```python
# Leiden clustering (recommended)
sc.tl.leiden(adata, resolution=0.5)
sc.pl.umap(adata, color='leiden', legend_loc='on data')

# Try multiple resolutions to find optimal granularity
for res in [0.3, 0.5, 0.8, 1.0]:
    sc.tl.leiden(adata, resolution=res, key_added=f'leiden_{res}')
```

### 5. Marker Gene Identification

```python
# Find marker genes for each cluster
sc.tl.rank_genes_groups(adata, 'leiden', method='wilcoxon')

# Visualize results
sc.pl.rank_genes_groups(adata, n_genes=25, sharey=False)
sc.pl.rank_genes_groups_heatmap(adata, n_genes=10)
sc.pl.rank_genes_groups_dotplot(adata, n_genes=5)

# Get results as DataFrame
markers = sc.get.rank_genes_groups_df(adata, group='0')
```

### 6. Cell Type Annotation

```python
# Define marker genes for known cell types
marker_genes = ['CD3D', 'CD14', 'MS4A1', 'NKG7', 'FCGR3A']

# Visualize markers
sc.pl.umap(adata, color=marker_genes, use_raw=True)
sc.pl.dotplot(adata, var_names=marker_genes, groupby='leiden')

# Manual annotation
cluster_to_celltype = {
    '0': 'CD4 T cells',
    '1': 'CD14+ Monocytes',
    '2': 'B cells',
    '3': 'CD8 T cells',
}
adata.obs['cell_type'] = adata.obs['leiden'].map(cluster_to_celltype)

# Visualize annotated types
sc.pl.umap(adata, color='cell_type', legend_loc='on data')
```

### 7. Save Results

```python
# Save processed data
adata.write('results/processed_data.h5ad')

# Export metadata
adata.obs.to_csv('results/cell_metadata.csv')
adata.var.to_csv('results/gene_metadata.csv')
```

#### Imported: Overview

Scanpy is a scalable Python toolkit for analyzing single-cell RNA-seq data, built on AnnData. Apply this skill for complete single-cell workflows including quality control, normalization, dimensionality reduction, clustering, marker gene identification, visualization, and trajectory analysis.

#### Imported: Common Tasks

### Creating Publication-Quality Plots

```python
# Set high-quality defaults
sc.settings.set_figure_params(dpi=300, frameon=False, figsize=(5, 5))
sc.settings.file_format_figs = 'pdf'

# UMAP with custom styling
sc.pl.umap(adata, color='cell_type',
           palette='Set2',
           legend_loc='on data',
           legend_fontsize=12,
           legend_fontoutline=2,
           frameon=False,
           save='_publication.pdf')

# Heatmap of marker genes
sc.pl.heatmap(adata, var_names=genes, groupby='cell_type',
              swap_axes=True, show_gene_labels=True,
              save='_markers.pdf')

# Dot plot
sc.pl.dotplot(adata, var_names=genes, groupby='cell_type',
              save='_dotplot.pdf')
```

Refer to `references/plotting_guide.md` for comprehensive visualization examples.

### Trajectory Inference

```python
# PAGA (Partition-based graph abstraction)
sc.tl.paga(adata, groups='leiden')
sc.pl.paga(adata, color='leiden')

# Diffusion pseudotime
adata.uns['iroot'] = np.flatnonzero(adata.obs['leiden'] == '0')[0]
sc.tl.dpt(adata)
sc.pl.umap(adata, color='dpt_pseudotime')
```

### Differential Expression Between Conditions

```python
# Compare treated vs control within cell types
adata_subset = adata[adata.obs['cell_type'] == 'T cells']
sc.tl.rank_genes_groups(adata_subset, groupby='condition',
                         groups=['treated'], reference='control')
sc.pl.rank_genes_groups(adata_subset, groups=['treated'])
```

### Gene Set Scoring

```python
# Score cells for gene set expression
gene_set = ['CD3D', 'CD3E', 'CD3G']
sc.tl.score_genes(adata, gene_set, score_name='T_cell_score')
sc.pl.umap(adata, color='T_cell_score')
```

### Batch Correction

```python
# ComBat batch correction
sc.pp.combat(adata, key='batch')

# Alternative: use Harmony or scVI (separate packages)
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @scanpy-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/scanpy-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/scanpy-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @scanpy-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

### Basic Import and Setup

```python
import scanpy as sc
import pandas as pd
import numpy as np

# Configure settings
sc.settings.verbosity = 3
sc.settings.set_figure_params(dpi=80, facecolor='white')
sc.settings.figdir = './figures/'
```

### Loading Data

```python
# From 10X Genomics
adata = sc.read_10x_mtx('path/to/data/')
adata = sc.read_10x_h5('path/to/data.h5')

# From h5ad (AnnData format)
adata = sc.read_h5ad('path/to/data.h5ad')

# From CSV
adata = sc.read_csv('path/to/data.csv')
```

### Understanding AnnData Structure

The AnnData object is the core data structure in scanpy:

```python
adata.X          # Expression matrix (cells × genes)
adata.obs        # Cell metadata (DataFrame)
adata.var        # Gene metadata (DataFrame)
adata.uns        # Unstructured annotations (dict)
adata.obsm       # Multi-dimensional cell data (PCA, UMAP)
adata.raw        # Raw data backup

# Access cell and gene names
adata.obs_names  # Cell barcodes
adata.var_names  # Gene names
```

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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/scanpy`, fails to mention provenance, or does not use the support pack at all.
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
| `references` | checklists, rubrics, playbooks, and source summaries | `references/omni-import-checklist.md` |
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

#### Imported: Bundled Resources

### scripts/qc_analysis.py
Automated quality control script that calculates metrics, generates plots, and filters data:

```bash
python scripts/qc_analysis.py input.h5ad --output filtered.h5ad \
    --mt-threshold 5 --min-genes 200 --min-cells 3
```

### references/standard_workflow.md
Complete step-by-step workflow with detailed explanations and code examples for:
- Data loading and setup
- Quality control with visualization
- Normalization and scaling
- Feature selection
- Dimensionality reduction (PCA, UMAP, t-SNE)
- Clustering (Leiden, Louvain)
- Marker gene identification
- Cell type annotation
- Trajectory inference
- Differential expression

Read this reference when performing a complete analysis from scratch.

### references/api_reference.md
Quick reference guide for scanpy functions organized by module:
- Reading/writing data (`sc.read_*`, `adata.write_*`)
- Preprocessing (`sc.pp.*`)
- Tools (`sc.tl.*`)
- Plotting (`sc.pl.*`)
- AnnData structure and manipulation
- Settings and utilities

Use this for quick lookup of function signatures and common parameters.

### references/plotting_guide.md
Comprehensive visualization guide including:
- Quality control plots
- Dimensionality reduction visualizations
- Clustering visualizations
- Marker gene plots (heatmaps, dot plots, violin plots)
- Trajectory and pseudotime plots
- Publication-quality customization
- Multi-panel figures
- Color palettes and styling

Consult this when creating publication-ready figures.

### assets/analysis_template.py
Complete analysis template providing a full workflow from data loading through cell type annotation. Copy and customize this template for new analyses:

```bash
cp assets/analysis_template.py my_analysis.py
# Edit parameters and run
python my_analysis.py
```

The template includes all standard steps with configurable parameters and helpful comments.

#### Imported: Additional Resources

- **Official scanpy documentation**: https://scanpy.readthedocs.io/
- **Scanpy tutorials**: https://scanpy-tutorials.readthedocs.io/
- **scverse ecosystem**: https://scverse.org/ (related tools: squidpy, scvi-tools, cellrank)
- **Best practices**: Luecken & Theis (2019) "Current best practices in single-cell RNA-seq"

#### Imported: Key Parameters to Adjust

### Quality Control
- `min_genes`: Minimum genes per cell (typically 200-500)
- `min_cells`: Minimum cells per gene (typically 3-10)
- `pct_counts_mt`: Mitochondrial threshold (typically 5-20%)

### Normalization
- `target_sum`: Target counts per cell (default 1e4)

### Feature Selection
- `n_top_genes`: Number of HVGs (typically 2000-3000)
- `min_mean`, `max_mean`, `min_disp`: HVG selection parameters

### Dimensionality Reduction
- `n_pcs`: Number of principal components (check variance ratio plot)
- `n_neighbors`: Number of neighbors (typically 10-30)

### Clustering
- `resolution`: Clustering granularity (0.4-1.2, higher = more clusters)

#### Imported: Common Pitfalls and Best Practices

1. **Always save raw counts**: `adata.raw = adata` before filtering genes
2. **Check QC plots carefully**: Adjust thresholds based on dataset quality
3. **Use Leiden over Louvain**: More efficient and better results
4. **Try multiple clustering resolutions**: Find optimal granularity
5. **Validate cell type annotations**: Use multiple marker genes
6. **Use `use_raw=True` for gene expression plots**: Shows original counts
7. **Check PCA variance ratio**: Determine optimal number of PCs
8. **Save intermediate results**: Long workflows can fail partway through

#### Imported: Tips for Effective Analysis

1. **Start with the template**: Use `assets/analysis_template.py` as a starting point
2. **Run QC script first**: Use `scripts/qc_analysis.py` for initial filtering
3. **Consult references as needed**: Load workflow and API references into context
4. **Iterate on clustering**: Try multiple resolutions and visualization methods
5. **Validate biologically**: Check marker genes match expected cell types
6. **Document parameters**: Record QC thresholds and analysis settings
7. **Save checkpoints**: Write intermediate results at key steps

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
