---
name: uniprot-database
description: "UniProt Database workflow skill. Use this skill when the user needs Direct REST API access to UniProt. Protein searches, FASTA retrieval, ID mapping, Swiss-Prot/TrEMBL. For Python workflows with multiple databases, prefer bioservices (unified interface to 40+ services). Use this for direct HTTP/REST work or UniProt-specific control and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["uniprot-database", "direct", "rest", "api", "access", "uniprot", "protein", "searches"]
complexity: intermediate
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-24"
---

# UniProt Database

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/uniprot-database` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# UniProt Database

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Python Implementation, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Searching for protein entries by name, gene symbol, accession, or organism
- Retrieving protein sequences in FASTA or other formats
- Mapping identifiers between UniProt and external databases (Ensembl, RefSeq, PDB, etc.)
- Accessing protein annotations including GO terms, domains, and functional descriptions
- Batch retrieving multiple protein entries efficiently
- Querying reviewed (Swiss-Prot) vs. unreviewed (TrEMBL) protein data

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

UniProt is the world's leading comprehensive protein sequence and functional information resource. Search proteins by name, gene, or accession, retrieve sequences in FASTA format, perform ID mapping across databases, access Swiss-Prot/TrEMBL annotations via REST API for protein analysis.

#### Imported: Core Capabilities

### 1. Searching for Proteins

Search UniProt using natural language queries or structured search syntax.

**Common search patterns:**
```python
# Search by protein name
query = "insulin AND organism_name:\"Homo sapiens\""

# Search by gene name
query = "gene:BRCA1 AND reviewed:true"

# Search by accession
query = "accession:P12345"

# Search by sequence length
query = "length:[100 TO 500]"

# Search by taxonomy
query = "taxonomy_id:9606"  # Human proteins

# Search by GO term
query = "go:0005515"  # Protein binding
```

Use the API search endpoint: `https://rest.uniprot.org/uniprotkb/search?query={query}&format={format}`

**Supported formats:** JSON, TSV, Excel, XML, FASTA, RDF, TXT

### 2. Retrieving Individual Protein Entries

Retrieve specific protein entries by accession number.

**Accession number formats:**
- Classic: P12345, Q1AAA9, O15530 (6 characters: letter + 5 alphanumeric)
- Extended: A0A022YWF9 (10 characters for newer entries)

**Retrieve endpoint:** `https://rest.uniprot.org/uniprotkb/{accession}.{format}`

Example: `https://rest.uniprot.org/uniprotkb/P12345.fasta`

### 3. Batch Retrieval and ID Mapping

Map protein identifiers between different database systems and retrieve multiple entries efficiently.

**ID Mapping workflow:**
1. Submit mapping job to: `https://rest.uniprot.org/idmapping/run`
2. Check job status: `https://rest.uniprot.org/idmapping/status/{jobId}`
3. Retrieve results: `https://rest.uniprot.org/idmapping/results/{jobId}`

**Supported databases for mapping:**
- UniProtKB AC/ID
- Gene names
- Ensembl, RefSeq, EMBL
- PDB, AlphaFoldDB
- KEGG, GO terms
- And many more (see `/references/id_mapping_databases.md`)

**Limitations:**
- Maximum 100,000 IDs per job
- Results stored for 7 days

### 4. Streaming Large Result Sets

For large queries that exceed pagination limits, use the stream endpoint:

`https://rest.uniprot.org/uniprotkb/stream?query={query}&format={format}`

The stream endpoint returns all results without pagination, suitable for downloading complete datasets.

### 5. Customizing Retrieved Fields

Specify exactly which fields to retrieve for efficient data transfer.

**Common fields:**
- `accession` - UniProt accession number
- `id` - Entry name
- `gene_names` - Gene name(s)
- `organism_name` - Organism
- `protein_name` - Protein names
- `sequence` - Amino acid sequence
- `length` - Sequence length
- `go_*` - Gene Ontology annotations
- `cc_*` - Comment fields (function, interaction, etc.)
- `ft_*` - Feature annotations (domains, sites, etc.)

**Example:** `https://rest.uniprot.org/uniprotkb/search?query=insulin&fields=accession,gene_names,organism_name,length,sequence&format=tsv`

See `/references/api_fields.md` for complete field list.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @uniprot-database to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @uniprot-database against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @uniprot-database for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @uniprot-database using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Query Syntax Examples

**Boolean operators:**
```
kinase AND organism_name:human
(diabetes OR insulin) AND reviewed:true
cancer NOT lung
```

**Field-specific searches:**
```
gene:BRCA1
accession:P12345
organism_id:9606
taxonomy_name:"Homo sapiens"
annotation:(type:signal)
```

**Range queries:**
```
length:[100 TO 500]
mass:[50000 TO 100000]
```

**Wildcards:**
```
gene:BRCA*
protein_name:kinase*
```

See `/references/query_syntax.md` for comprehensive syntax documentation.

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Use reviewed entries when possible: Filter with reviewed:true for Swiss-Prot (manually curated) entries
- Specify format explicitly: Choose the most appropriate format (FASTA for sequences, TSV for tabular data, JSON for programmatic parsing)
- Use field selection: Only request fields you need to reduce bandwidth and processing time
- Handle pagination: For large result sets, implement proper pagination or use the stream endpoint
- Cache results: Store frequently accessed data locally to minimize API calls
- Rate limiting: Be respectful of API resources; implement delays for large batch operations
- Check data quality: TrEMBL entries are computational predictions; Swiss-Prot entries are manually reviewed

### Imported Operating Notes

#### Imported: Best Practices

1. **Use reviewed entries when possible**: Filter with `reviewed:true` for Swiss-Prot (manually curated) entries
2. **Specify format explicitly**: Choose the most appropriate format (FASTA for sequences, TSV for tabular data, JSON for programmatic parsing)
3. **Use field selection**: Only request fields you need to reduce bandwidth and processing time
4. **Handle pagination**: For large result sets, implement proper pagination or use the stream endpoint
5. **Cache results**: Store frequently accessed data locally to minimize API calls
6. **Rate limiting**: Be respectful of API resources; implement delays for large batch operations
7. **Check data quality**: TrEMBL entries are computational predictions; Swiss-Prot entries are manually reviewed

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/uniprot-database`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@tmux` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@todoist-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tool-design` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@tool-use-guardian` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

### scripts/
`uniprot_client.py` - Python client with helper functions for common UniProt operations including search, retrieval, ID mapping, and streaming.

### references/
- `api_fields.md` - Complete list of available fields for customizing queries
- `id_mapping_databases.md` - Supported databases for ID mapping operations
- `query_syntax.md` - Comprehensive query syntax with advanced examples
- `api_examples.md` - Code examples in multiple languages (Python, curl, R)

#### Imported: Additional Resources

- **API Documentation**: https://www.uniprot.org/help/api
- **Interactive API Explorer**: https://www.uniprot.org/api-documentation
- **REST Tutorial**: https://www.uniprot.org/help/uniprot_rest_tutorial
- **Query Syntax Help**: https://www.uniprot.org/help/query-fields
- **SPARQL Endpoint**: https://sparql.uniprot.org/ (for advanced graph queries)

#### Imported: Python Implementation

For programmatic access, use the provided helper script `scripts/uniprot_client.py` which implements:

- `search_proteins(query, format)` - Search UniProt with any query
- `get_protein(accession, format)` - Retrieve single protein entry
- `map_ids(ids, from_db, to_db)` - Map between identifier types
- `batch_retrieve(accessions, format)` - Retrieve multiple entries
- `stream_results(query, format)` - Stream large result sets

**Alternative Python packages:**
- **Unipressed**: Modern, typed Python client for UniProt REST API
- **bioservices**: Comprehensive bioinformatics web services client

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
