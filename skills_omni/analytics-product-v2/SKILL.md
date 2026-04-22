---
name: "analytics-product-v2"
description: "ANALYTICS-PRODUCT \\u2014 Decida com Dados workflow skill. Use this skill when the user needs Analytics de produto \\u2014 PostHog, Mixpanel, eventos, funnels, cohorts, retencao, north star metric, OKRs e dashboards de produto and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: "data-ai"
tags:
  - "analytics"
  - "product"
  - "metrics"
  - "posthog"
  - "mixpanel"
  - "analytics-product-v2"
  - "analytics-product"
  - "produto"
  - "omni-enhanced"
complexity: "intermediate"
risk: "caution"
tools:
  - "claude-code"
  - "antigravity"
  - "cursor"
  - "gemini-cli"
  - "codex-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
date_added: "2026-04-15"
date_updated: "2026-04-21"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "analytics-product-v2"
family_name: "ANALYTICS-PRODUCT \u2014 Decida com Dados"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/analytics-product-v2"
upstream_skill: "skills/analytics-product-v2"
upstream_author: "renat"
upstream_source: "community"
upstream_pr: "91"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "8fab9480d35a3f46aca4c7314a9d34bd60d77f92"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "analytics-product-v2"
---

# ANALYTICS-PRODUCT — Decida com Dados

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/analytics-product` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# ANALYTICS-PRODUCT — Decida com Dados

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Analytics-Product — Decida Com Dados, Eventos Essenciais Da Auri, Implementacao Posthog (Python), Uso:, Funil De Ativacao Auri.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to analytics product
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: Analytics de produto — PostHog, Mixpanel, eventos, funnels, cohorts, retencao, north star metric, OKRs e dashboards de produto.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `metadata.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
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

Analytics de produto — PostHog, Mixpanel, eventos, funnels, cohorts, retencao, north star metric, OKRs e dashboards de produto. Ativar para: configurar tracking de eventos, criar funil de conversao, analise de cohort, retencao, DAU/MAU, feature flags, A/B testing, north star metric, OKRs, dashboard de produto.

#### Imported: How It Works

```
[objeto]_[verbo_passado]

Correto:   user_signed_up, conversation_started, upgrade_completed
Errado:    signup, click, conversion
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @analytics-product-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @analytics-product-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @analytics-product-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @analytics-product-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/analytics-product`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@2d-games` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Analytics-Product — Decida Com Dados

> "In God we trust. All others must bring data." — W. Edwards Deming

---

#### Imported: Eventos Essenciais Da Auri

```python
AURI_EVENTS = {
    # Aquisicao
    "user_signed_up":        {"props": ["source", "medium", "campaign"]},
    "onboarding_started":    {"props": ["step_count"]},
    "onboarding_completed":  {"props": ["time_to_complete", "steps_skipped"]},

    # Ativacao
    "first_conversation":    {"props": ["intent", "response_time"]},
    "aha_moment_reached":    {"props": ["trigger", "session_number"]},
    "feature_discovered":    {"props": ["feature_name", "discovery_method"]},

    # Retencao
    "conversation_started":  {"props": ["intent", "user_tier", "device"]},
    "conversation_completed":{"props": ["messages_count", "duration", "rating"]},
    "session_started":       {"props": ["days_since_last", "platform"]},

    # Receita
    "upgrade_viewed":        {"props": ["trigger", "current_tier"]},
    "upgrade_started":       {"props": ["target_tier", "trigger"]},
    "upgrade_completed":     {"props": ["tier", "plan", "revenue"]},
    "subscription_canceled": {"props": ["reason", "tier", "tenure_days"]},
    "payment_failed":        {"props": ["attempt_count", "error_code"]},
}
```

#### Imported: Implementacao Posthog (Python)

```python
from posthog import Posthog
import os

posthog = Posthog(
    project_api_key=os.environ["POSTHOG_API_KEY"],
    host=os.environ.get("POSTHOG_HOST", "https://app.posthog.com")
)

def track(user_id: str, event: str, properties: dict = None):
    posthog.capture(
        distinct_id=user_id,
        event=event,
        properties=properties or {}
    )

def identify(user_id: str, traits: dict):
    posthog.identify(
        distinct_id=user_id,
        properties=traits
    )

#### Imported: Uso:

track("user_123", "conversation_started", {
    "intent": "business_advice",
    "device": "alexa",
    "user_tier": "pro"
})
```

---

#### Imported: Funil De Ativacao Auri

```
Visita landing page          (100%)
    | [meta: 40%]
Clicou "Experimentar"         (40%)
    | [meta: 70%]
Completou cadastro            (28%)
    | [meta: 60%]
Fez primeira conversa         (17%)  <- AHA MOMENT
    | [meta: 50%]
Voltou no dia seguinte        (8.5%)
    | [meta: 40%]
Usou 3+ dias na semana        (3.4%)
    | [meta: 20%]
Converteu para Pro            (0.7%)
```

#### Imported: Otimizando O Funil

```
Para cada drop-off > benchmark:
1. Identificar: onde exatamente o usuario sai?
2. Entender: por que? (session recordings, surveys)
3. Hipotese: qual mudanca poderia melhorar?
4. Testar: A/B test com amostra estatisticamente significante
5. Medir: 2 semanas minimo, p-value < 0.05
6. Aprender: mesmo se falhar, entende-se o usuario melhor
```

---

#### Imported: Analise De Cohort (Retencao Semanal)

```python
def calculate_cohort_retention(events_df):
    """
    events_df: DataFrame com colunas [user_id, event_date, event_name]
    Retorna: matriz de retencao [cohort_week x week_number]
    """
    import pandas as pd

    first_session = events_df[events_df.event_name == "session_started"] \
        .groupby("user_id")["event_date"].min() \
        .dt.to_period("W")

    sessions = events_df[events_df.event_name == "session_started"].copy()
    sessions["cohort"] = sessions["user_id"].map(first_session)
    sessions["weeks_since"] = (
        sessions["event_date"].dt.to_period("W") - sessions["cohort"]
    ).apply(lambda x: x.n)

    cohort_data = sessions.groupby(["cohort", "weeks_since"])["user_id"].nunique()
    cohort_sizes = cohort_data.unstack().iloc[:, 0]
    retention = cohort_data.unstack().divide(cohort_sizes, axis=0) * 100

    return retention
```

#### Imported: Benchmarks De Retencao (Assistentes De Voz)

| Semana | Pessimo | Ok | Bom | Excelente |
|--------|---------|-----|-----|-----------|
| W1 | <20% | 20-35% | 35-50% | >50% |
| W4 | <10% | 10-20% | 20-30% | >30% |
| W8 | <5% | 5-12% | 12-20% | >20% |

---

#### Imported: Definindo A North Star Da Auri

```
Framework:
1. O que cria valor real para o usuario? -> Conversas que geram insight/acao
2. O que prediz crescimento de longo prazo? -> Usuarios com 3+ conv/semana
3. Como medir? -> "Weekly Active Conversationalists" (WAC)

North Star: WAC (Weekly Active Conversationalists)
Definicao: Usuarios com >= 3 conversas na semana que duraram >= 2 minutos

Meta Ano 1: 10.000 WAC
Meta Ano 2: 100.000 WAC
```

#### Imported: Dashboard North Star

```python
def calculate_north_star(db):
    wac = db.query("""
        SELECT COUNT(DISTINCT user_id) as wac
        FROM conversations
        WHERE
            created_at >= NOW() - INTERVAL '7 days'
            AND duration_seconds >= 120
        GROUP BY user_id
        HAVING COUNT(*) >= 3
    """).scalar()

    return {
        "wac": wac,
        "wow_growth": calculate_wow_growth(db, "wac"),
        "target": 10000,
        "progress": f"{wac/10000*100:.1f}%"
    }
```

---

#### Imported: Feature Flags Com Posthog

```python
def is_feature_enabled(user_id: str, feature: str) -> bool:
    return posthog.feature_enabled(feature, user_id)

if is_feature_enabled(user_id, "new-onboarding-v2"):
    show_new_onboarding()
else:
    show_old_onboarding()
```

#### Imported: Calculadora De Significancia Estatistica

```python
from scipy import stats
import numpy as np

def ab_test_significance(
    control_conversions: int,
    control_visitors: int,
    variant_conversions: int,
    variant_visitors: int,
    confidence: float = 0.95
) -> dict:
    control_rate = control_conversions / control_visitors
    variant_rate = variant_conversions / variant_visitors
    lift = (variant_rate - control_rate) / control_rate * 100

    _, p_value = stats.chi2_contingency([
        [control_conversions, control_visitors - control_conversions],
        [variant_conversions, variant_visitors - variant_conversions]
    ])[:2]

    significant = p_value < (1 - confidence)

    return {
        "control_rate": f"{control_rate*100:.2f}%",
        "variant_rate": f"{variant_rate*100:.2f}%",
        "lift": f"{lift:+.1f}%",
        "p_value": round(p_value, 4),
        "significant": significant,
        "recommendation": "Deploy variant" if significant and lift > 0 else "Keep control"
    }
```

---

#### Imported: 6. Comandos

| Comando | Acao |
|---------|------|
| `/event-taxonomy` | Define taxonomia de eventos |
| `/funnel-analysis` | Analisa funil de conversao |
| `/cohort-retention` | Calcula retencao por cohort |
| `/north-star` | Define ou revisa North Star Metric |
| `/ab-test` | Calcula significancia de A/B test |
| `/dashboard-setup` | Cria dashboard de produto |
| `/okr-template` | Template de OKRs para produto |

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
