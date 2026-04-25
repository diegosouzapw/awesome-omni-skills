---
name: junta-leiloeiros-v2
description: "Skill: Leiloeiros das Juntas Comerciais do Brasil workflow skill. Use this skill when the user needs Coleta e consulta dados de leiloeiros oficiais de todas as 27 Juntas Comerciais do Brasil. Scraper multi-UF, banco SQLite, API FastAPI e exportacao CSV/JSON and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["scraping", "brazilian-data", "auctioneers", "api", "junta-leiloeiros-v2", "junta-leiloeiros", "coleta", "consulta"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-17"
date_updated: "2026-04-25"
---

# Skill: Leiloeiros das Juntas Comerciais do Brasil

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/junta-leiloeiros` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Skill: Leiloeiros das Juntas Comerciais do Brasil

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Localização, Instalação (Uma Vez), Para Sites Com Javascript:, Coletar Dados, Todos Os 27 Estados.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When the user mentions "leiloeiro junta" or related topics
- When the user mentions "junta comercial leiloeiro" or related topics
- When the user mentions "scraper junta" or related topics
- When the user mentions "jucesp leiloeiro" or related topics
- When the user mentions "jucerja" or related topics
- When the user mentions "jucemg leiloeiro" or related topics

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path through the `external_source` block before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `references/juntas_urls.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `references/legal.md` | Adds the next most relevant copied source file without loading the entire package |
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

Coleta e consulta dados de leiloeiros oficiais de todas as 27 Juntas Comerciais do Brasil. Scraper multi-UF, banco SQLite, API FastAPI e exportacao CSV/JSON.

#### Imported: How It Works

Coleta dados públicos de leiloeiros oficiais de todas as 27 Juntas Comerciais estaduais,
persiste em banco SQLite local e oferece API REST e exportação em múltiplos formatos.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @junta-leiloeiros-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @junta-leiloeiros-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @junta-leiloeiros-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @junta-leiloeiros-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.

### Imported Operating Notes

#### Imported: Best Practices

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/junta-leiloeiros`, fails to mention provenance, or does not use any copied source files at all.
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
| `references` | copied reference notes, guides, or background material from upstream | `references/juntas_urls.md` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/db.py` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [juntas_urls.md](references/juntas_urls.md)
- [legal.md](references/legal.md)
- [schema.md](references/schema.md)
- [db.py](scripts/db.py)
- [export.py](scripts/export.py)
- [requirements.txt](scripts/requirements.txt)
- [run_all.py](scripts/run_all.py)

### Imported Reference Notes

#### Imported: Localização

```
C:\Users\renat\skills\junta-leiloeiros\
├── scripts/
│   ├── scraper/
│   │   ├── base_scraper.py      ← classe abstrata
│   │   ├── states.py            ← registro dos 27 scrapers
│   │   ├── jucesp.py / jucerja.py / jucemg.py / jucec.py / jucis_df.py
│   │   └── generic_scraper.py   ← usado pelos 22 estados restantes
│   ├── db.py                    ← banco SQLite
│   ├── run_all.py               ← orquestrador de scraping
│   ├── serve_api.py             ← API FastAPI
│   ├── export.py                ← exportação
│   └── requirements.txt
├── references/
│   ├── juntas_urls.md           ← URLs e status de todas as 27 juntas
│   ├── schema.md                ← schema do banco
│   └── legal.md                 ← base legal
└── data/
    ├── leiloeiros.db            ← banco SQLite (criado no primeiro run)
    ├── scraping_log.json        ← log de cada coleta
    └── exports/                 ← arquivos exportados
```

#### Imported: Instalação (Uma Vez)

```bash
pip install -r C:\Users\renat\skills\junta-leiloeiros\scripts\requirements.txt

#### Imported: Para Sites Com Javascript:

playwright install chromium
```

#### Imported: Coletar Dados

```bash

#### Imported: Todos Os 27 Estados

python C:\Users\renat\skills\junta-leiloeiros\scripts\run_all.py

#### Imported: Estados Específicos

python C:\Users\renat\skills\junta-leiloeiros\scripts\run_all.py --estado SP RJ MG

#### Imported: Ver O Que Seria Coletado Sem Executar

python C:\Users\renat\skills\junta-leiloeiros\scripts\run_all.py --dry-run

#### Imported: Controlar Paralelismo (Default: 5)

python C:\Users\renat\skills\junta-leiloeiros\scripts\run_all.py --concurrency 3
```

#### Imported: Estatísticas Por Estado

python C:\Users\renat\skills\junta-leiloeiros\scripts\db.py

#### Imported: Sql Direto

sqlite3 C:\Users\renat\skills\junta-leiloeiros\data\leiloeiros.db \
  "SELECT estado, COUNT(*) FROM leiloeiros GROUP BY estado"
```

#### Imported: Servir Api Rest

```bash
python C:\Users\renat\skills\junta-leiloeiros\scripts\serve_api.py

#### Imported: Docs Interativos: Http://Localhost:8000/Docs

```

**Endpoints:**
- `GET /leiloeiros?estado=SP&situacao=ATIVO&nome=silva&limit=100`
- `GET /leiloeiros/{estado}` — ex: `/leiloeiros/SP`
- `GET /busca?q=texto`
- `GET /stats`
- `GET /export/json`
- `GET /export/csv`

#### Imported: Exportar Dados

```bash
python C:\Users\renat\skills\junta-leiloeiros\scripts\export.py --format csv
python C:\Users\renat\skills\junta-leiloeiros\scripts\export.py --format json
python C:\Users\renat\skills\junta-leiloeiros\scripts\export.py --format all
python C:\Users\renat\skills\junta-leiloeiros\scripts\export.py --format csv --estado SP
```

#### Imported: Usar Em Código Python

```python
import sys
sys.path.insert(0, r"C:\Users\renat\skills\junta-leiloeiros\scripts")
from db import Database

db = Database()
db.init()

#### Imported: Todos Os Leiloeiros Ativos De Sp

leiloeiros = db.get_all(estado="SP", situacao="ATIVO")

#### Imported: Busca Por Nome

resultados = db.search("silva")

#### Imported: Estatísticas

stats = db.get_stats()
```

#### Imported: Adicionar Scraper Customizado

Se um estado precisar de lógica específica (ex: site usa JavaScript):

```python

#### Imported: Scripts/Scraper/Meu_Estado.Py

from .base_scraper import AbstractJuntaScraper, Leiloeiro
from typing import List

class MeuEstadoScraper(AbstractJuntaScraper):
    estado = "XX"
    junta = "JUCEX"
    url = "https://www.jucex.xx.gov.br/leiloeiros"

    async def parse_leiloeiros(self) -> List[Leiloeiro]:
        soup = await self.fetch_page()
        if not soup:
            return []
        # lógica específica aqui
        return [self.make_leiloeiro(nome="...", matricula="...")]
```

Registrar em `scripts/scraper/states.py`:
```python
from .meu_estado import MeuEstadoScraper
SCRAPERS["XX"] = MeuEstadoScraper
```

#### Imported: Referências

- URLs de todas as juntas: `references/juntas_urls.md`
- Schema do banco: `references/schema.md`
- Base legal da coleta: `references/legal.md`
- Log de coleta: `data/scraping_log.json`

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
