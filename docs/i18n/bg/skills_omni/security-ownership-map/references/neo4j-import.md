# Neo4j Import Notes (Български)

🌐 **Languages:** 🇺🇸 [English](../../../../../../skills_omni/security-ownership-map/references/neo4j-import.md) · 🇪🇸 [es](../../../../es/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇫🇷 [fr](../../../../fr/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇩🇪 [de](../../../../de/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇮🇹 [it](../../../../it/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇷🇺 [ru](../../../../ru/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇨🇳 [zh-CN](../../../../zh-CN/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇯🇵 [ja](../../../../ja/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇰🇷 [ko](../../../../ko/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇸🇦 [ar](../../../../ar/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇮🇳 [hi](../../../../hi/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇮🇳 [in](../../../../in/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇹🇭 [th](../../../../th/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇻🇳 [vi](../../../../vi/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇮🇩 [id](../../../../id/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇲🇾 [ms](../../../../ms/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇳🇱 [nl](../../../../nl/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇵🇱 [pl](../../../../pl/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇸🇪 [sv](../../../../sv/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇳🇴 [no](../../../../no/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇩🇰 [da](../../../../da/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇫🇮 [fi](../../../../fi/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇵🇹 [pt](../../../../pt/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇷🇴 [ro](../../../../ro/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇭🇺 [hu](../../../../hu/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇧🇬 [bg](../../../../bg/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇸🇰 [sk](../../../../sk/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇺🇦 [uk-UA](../../../../uk-UA/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇮🇱 [he](../../../../he/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇵🇭 [phi](../../../../phi/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇧🇷 [pt-BR](../../../../pt-BR/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇨🇿 [cs](../../../../cs/skills_omni/security-ownership-map/references/neo4j-import.md) · 🇹🇷 [tr](../../../../tr/skills_omni/security-ownership-map/references/neo4j-import.md)

---


Use these steps when persisting the ownership graph to Neo4j.

## Quick import (LOAD CSV)

1. Copy `people.csv`, `files.csv`, and `edges.csv` into the Neo4j import directory.
2. Run the following Cypher from Neo4j Browser or `cypher-shell`:

```cypher
CREATE CONSTRAINT person_id IF NOT EXISTS FOR (p:Person) REQUIRE p.id IS UNIQUE;
CREATE CONSTRAINT file_id IF NOT EXISTS FOR (f:File) REQUIRE f.id IS UNIQUE;

LOAD CSV WITH HEADERS FROM 'file:///people.csv' AS row
MERGE (p:Person {id: row.person_id})
SET p.name = row.name,
    p.email = row.email,
    p.first_seen = row.first_seen,
    p.last_seen = row.last_seen,
    p.commit_count = toInteger(row.commit_count),
    p.touches = toInteger(row.touches),
    p.sensitive_touches = toFloat(row.sensitive_touches),
    p.primary_tz_offset = CASE row.primary_tz_offset WHEN '' THEN null ELSE row.primary_tz_offset END,
    p.primary_tz_minutes = CASE row.primary_tz_minutes WHEN '' THEN null ELSE toInteger(row.primary_tz_minutes) END,
    p.timezone_offsets = CASE row.timezone_offsets WHEN '' THEN null ELSE row.timezone_offsets END;

LOAD CSV WITH HEADERS FROM 'file:///files.csv' AS row
MERGE (f:File {id: row.file_id})
SET f.path = row.path,
    f.first_seen = row.first_seen,
    f.last_seen = row.last_seen,
    f.commit_count = toInteger(row.commit_count),
    f.touches = toInteger(row.touches),
    f.bus_factor = toInteger(row.bus_factor),
    f.sensitivity_score = toFloat(row.sensitivity_score),
    f.sensitivity_tags = row.sensitivity_tags;

LOAD CSV WITH HEADERS FROM 'file:///edges.csv' AS row
MATCH (p:Person {id: row.person_id})
MATCH (f:File {id: row.file_id})
MERGE (p)-[r:TOUCHES]->(f)
SET r.touches = toInteger(row.touches),
    r.recency_weight = toFloat(row.recency_weight),
    r.first_seen = row.first_seen,
    r.last_seen = row.last_seen,
    r.sensitive_weight = toFloat(row.sensitive_weight);

LOAD CSV WITH HEADERS FROM 'file:///cochange_edges.csv' AS row
MATCH (f1:File {id: row.file_a})
MATCH (f2:File {id: row.file_b})
MERGE (f1)-[r:COCHANGES]->(f2)
SET r.cochange_count = toInteger(row.cochange_count),
    r.jaccard = toFloat(row.jaccard);
```

## Visualization tips

- Use Neo4j Bloom or Browser with `MATCH (p:Person)-[r:TOUCHES]->(f:File) RETURN p,r,f`.
- Filter by `f.sensitivity_score > 0` to highlight security-relevant clusters.
- For Gephi, import `edges.csv` as edges and `files.csv` / `people.csv` as nodes.
