---
name: monetization-v2
description: "MONETIZATION - Do Produto ao Revenue workflow skill. Use this skill when the user needs Estrategia e implementacao de monetizacao para produtos digitais - Stripe, subscriptions, pricing experiments, freemium, upgrade flows, churn prevention, revenue optimization e modelos de negocio SaaS and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: cli-automation
tags: ["monetization", "stripe", "saas", "pricing", "subscriptions", "monetization-v2", "estrategia", "implementacao"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# MONETIZATION - Do Produto ao Revenue

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/monetization` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# MONETIZATION - Do Produto ao Revenue

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, A Regra De Ouro, Erros Classicos, Ou, Config.Py, Criar Customer E Subscription.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to monetization
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: Estrategia e implementacao de monetizacao para produtos digitais - Stripe, subscriptions, pricing experiments, freemium, upgrade flows, churn prevention, revenue optimization e modelos de negocio SaaS.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. bash pip install stripe python from fastapi import Request, HTTPException import stripe async def stripewebhook(request: Request): payload = await request.body() sigheader = request.headers.get("stripe-signature") try: event = stripe.Webhook.constructevent( payload, sigheader, STRIPEWEBHOOKSECRET ) except ValueError: raise HTTPException(statuscode=400, detail="Invalid payload") except stripe.error.SignatureVerificationError: raise HTTPException(statuscode=400, detail="Invalid signature") handlers = { "customer.subscription.created": handlesubscriptioncreated, "customer.subscription.updated": handlesubscriptionupdated, "customer.subscription.deleted": handlesubscriptiondeleted, "invoice.paymentsucceeded": handlepaymentsucceeded, "invoice.paymentfailed": handlepaymentfailed, "customer.subscription.trialwillend": handletrialending, } handler = handlers.get(event["type"]) if handler: await handler(event["data"]["object"]) return {"status": "ok"} `
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Setup Inicial

```bash
pip install stripe

#### Imported: Webhook - Processar Eventos

```python
from fastapi import Request, HTTPException
import stripe

async def stripe_webhook(request: Request):
    payload = await request.body()
    sig_header = request.headers.get("stripe-signature")

    try:
        event = stripe.Webhook.construct_event(
            payload, sig_header, STRIPE_WEBHOOK_SECRET
        )
    except ValueError:
        raise HTTPException(status_code=400, detail="Invalid payload")
    except stripe.error.SignatureVerificationError:
        raise HTTPException(status_code=400, detail="Invalid signature")

    handlers = {
        "customer.subscription.created": handle_subscription_created,
        "customer.subscription.updated": handle_subscription_updated,
        "customer.subscription.deleted": handle_subscription_deleted,
        "invoice.payment_succeeded": handle_payment_succeeded,
        "invoice.payment_failed": handle_payment_failed,
        "customer.subscription.trial_will_end": handle_trial_ending,
    }

    handler = handlers.get(event["type"])
    if handler:
        await handler(event["data"]["object"])

    return {"status": "ok"}
```

#### Imported: Overview

Estrategia e implementacao de monetizacao para produtos digitais - Stripe, subscriptions, pricing experiments, freemium, upgrade flows, churn prevention, revenue optimization e modelos de negocio SaaS. Ativar para: integrar Stripe, criar planos de assinatura, pricing strategy, upgrade/downgrade, webhook de pagamento, trial gratuito, churn, LTV/CAC, unit economics, modelo de negocio.

#### Imported: How It Works

> Price is what you pay. Value is what you get. - Warren Buffett
> A monetizacao perfeita captura valor proporcional ao valor entregue.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @monetization-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @monetization-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @monetization-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @monetization-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/monetization`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@mermaid-expert-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@metasploit-framework-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@micro-saas-launcher-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@microservices-patterns-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: A Regra De Ouro

Usuarios pagam quando:
1. O produto resolve um problema real (need)
2. A solucao e melhor que alternativas (differentiation)
3. O preco e percebido como justo (value perception)
4. O momento de cobranca e natural (timing)

#### Imported: Erros Classicos

- Cobranca antes de mostrar valor (kill activation)
- Preco muito baixo (sinaliza baixa qualidade)
- Planos demais (paralisia de escolha)
- Trial sem carta de credito (baixa conversao)
- Churn invisivel (sem alertas de cancelamento iminente)

---

#### Imported: Ou

npm install stripe
```

```python

#### Imported: Config.Py

import stripe
import os

stripe.api_key = os.environ["STRIPE_SECRET_KEY"]
STRIPE_WEBHOOK_SECRET = os.environ["STRIPE_WEBHOOK_SECRET"]

PLANS = {
    "free": None,
    "pro": os.environ["STRIPE_PRICE_PRO"],
    "business": os.environ["STRIPE_PRICE_BIZ"],
}
```

#### Imported: Criar Customer E Subscription

```python
def create_customer(email: str, name: str, user_id: str) -> str:
    customer = stripe.Customer.create(
        email=email,
        name=name,
        metadata={"user_id": user_id}
    )
    return customer.id

def create_subscription(customer_id: str, price_id: str, trial_days: int = 14):
    subscription = stripe.Subscription.create(
        customer=customer_id,
        items=[{"price": price_id}],
        trial_period_days=trial_days,
        payment_behavior="default_incomplete",
        expand=["latest_invoice.payment_intent"],
    )
    return {
        "subscription_id": subscription.id,
        "client_secret": subscription.latest_invoice.payment_intent.client_secret,
        "status": subscription.status
    }
```

#### Imported: Checkout Session (Recomendado Para Conversao)

```python
def create_checkout_session(
    customer_id: str,
    price_id: str,
    success_url: str,
    cancel_url: str,
    trial_days: int = 14
) -> str:
    session = stripe.checkout.Session.create(
        customer=customer_id,
        mode="subscription",
        line_items=[{"price": price_id, "quantity": 1}],
        subscription_data={"trial_period_days": trial_days},
        success_url=success_url + "?session_id={CHECKOUT_SESSION_ID}",
        cancel_url=cancel_url,
        allow_promotion_codes=True,
    )
    return session.url
```

#### Imported: Customer Portal (Self-Service)

```python
def create_portal_session(customer_id: str, return_url: str) -> str:
    session = stripe.billing_portal.Session.create(
        customer=customer_id,
        return_url=return_url,
    )
    return session.url
```

#### Imported: Verificar Status Da Subscription

```python
def get_subscription_status(customer_id: str) -> dict:
    subscriptions = stripe.Subscription.list(
        customer=customer_id,
        status="all",
        limit=1
    )
    if not subscriptions.data:
        return {"tier": "free", "status": "none"}

    sub = subscriptions.data[0]
    return {
        "tier": get_tier_from_price(sub.items.data[0].price.id),
        "status": sub.status,
        "trial_end": sub.trial_end,
        "current_period_end": sub.current_period_end,
        "cancel_at_period_end": sub.cancel_at_period_end,
    }
```

---

#### Imported: Framework De Pricing Para Saas

**Metodo 1: Value-Based Pricing (Recomendado)**
```
1. Calcule o valor economico entregue ao usuario
   Ex: produto economiza 2h/semana = R$ 200/mes de valor
2. Capture 10-30% do valor criado
   Ex: R$ 29/mes = 14% do valor
3. Valide com pesquisa de willingness-to-pay
4. Teste 3 price points (A/B test)
```

**Metodo 2: Competitive Anchor**
```
Referencia: ChatGPT Plus = $20/mes (R$ 100)
Anchor: Notion = R$ 32/mes
Posicao: Pro = R$ 29/mes (mais barato que ChatGPT, similar ao Notion)
Mensagem: Tudo que o ChatGPT faz, por voz no Alexa
```

#### Imported: Psicologia De Pricing

```
R$ 29/mes (nao R$ 30 - efeito do digito esquerdo)
Plano anual com desconto claro: R$ 249/ano (economize R$ 99)
Destaque no plano que voce quer vender (visual hierarchy)
Ancoragem: mostra o plano caro primeiro
Trial sem cartao para ativacao, com cartao para retencao
Badge Mais popular no plano middle
```

#### Imported: Estrutura De Planos (3 E O Numero Certo)

| Feature             | Free    | Pro        | Business   |
|---------------------|---------|------------|------------|
| Preco               | Gratis  | R$ 29/mes  | R$ 99/mes  |
| Conversas/mes       | 50      | Ilimitado  | Ilimitado  |
| Memoria             | 7 dias  | 1 ano      | Permanente |
| Board especialistas | Nao     | Sim        | Sim        |
| Multi-usuarios      | Nao     | Nao        | Ate 10     |
| API access          | Nao     | Nao        | Sim        |
| Suporte             | Nao     | Email      | Priority   |

---

#### Imported: Sinais De Churn Iminente

```python
CHURN_SIGNALS = {
    "high_risk": [
        "nao logou nos ultimos 14 dias",
        "uso caiu >70% em 2 semanas",
        "abriu cancelamento mas nao concluiu",
        "ticket de suporte aberto sem resolucao",
    ],
    "medium_risk": [
        "nao logou em 7 dias",
        "uso caiu >40%",
        "nao completou onboarding",
        "nunca usou feature core",
    ]
}
```

#### Imported: Sequencia Anti-Churn

```
Dia 0:  Usuario nao usa por 7 dias
        -> Email: Sentimos sua falta. O que aconteceu?

Dia 3:  Sem resposta
        -> Push/Email: case study de usuario similar com sucesso

Dia 7:  Nao voltou
        -> Email: oferta especial (20% off por 3 meses)

Dia 14: Trial expirando
        -> In-app modal + email urgente: Sua conta vai dormir em 3 dias

Dia 30: Cancelou
        -> Offboarding email: Lamentamos ver voce ir.
        -> 3 meses depois: reativacao com novidades
```

#### Imported: Exit Survey (Obrigatorio)

```python
CANCELLATION_REASONS = [
    "Muito caro",
    "Nao uso o suficiente",
    "Falta funcionalidade X",
    "Encontrei alternativa melhor",
    "Problemas tecnicos",
    "Outro"
]

#### Imported: Falta Feature -> Roadmap + Notificacao Quando Lancar

```

---

#### Imported: Calculos Essenciais

```python
def calculate_unit_economics(
    mrr: float,
    customers: int,
    new_customers: int,
    churned: int,
    cac_total: float,
):
    arpu = mrr / customers
    churn_rate = churned / customers
    ltv = arpu / churn_rate
    cac = cac_total / new_customers
    ltv_cac = ltv / cac
    months_to_recover_cac = cac / arpu

    return {
        "ARPU": f"R$ {arpu:.2f}",
        "Churn Rate": f"{churn_rate*100:.1f}%",
        "LTV": f"R$ {ltv:.0f}",
        "CAC": f"R$ {cac:.0f}",
        "LTV/CAC": f"{ltv_cac:.1f}x",
        "Payback": f"{months_to_recover_cac:.1f} meses",
        "Status": "Saudavel" if ltv_cac > 3 else "Otimizar"
    }
```

#### Imported: Benchmarks Saas B2C Brasil

| Metrica               | Ruim  | Ok     | Bom    | Excelente |
|-----------------------|-------|--------|--------|-----------|
| Churn Mensal          | >7%   | 5-7%   | 2-5%   | <2%       |
| LTV/CAC               | <1x   | 1-3x   | 3-5x   | >5x       |
| Payback               | >18m  | 12-18m | 6-12m  | <6m       |
| Conversao trial->pago | <3%   | 3-8%   | 8-15%  | >15%      |
| MoM Growth            | <5%   | 5-10%  | 10-20% | >20%      |

---

#### Imported: Dashboard De Revenue (Metricas Diarias)

```
MRR atual: R$ XX.XXX
  New MRR (novos assinantes): +R$ X.XXX
  Expansion MRR (upgrades): +R$ XXX
  Contraction MRR (downgrades): -R$ XXX
  Churned MRR (cancelamentos): -R$ XXX
  Net New MRR: +/- R$ XXX

ARR (Annualized): R$ XX.XXX x 12
Churn Rate: X.X%
Net Revenue Retention: XXX% (meta: >100%)
```

#### Imported: Automacao De Revenue Com Stripe

```python
async def check_usage_and_upsell(user_id: str, usage: dict):
    if usage["conversations_this_month"] >= 45:
        await send_upgrade_prompt(
            user_id=user_id,
            message="Voce esta usando 90% do seu limite. Faca upgrade para Pro.",
            cta_url=f"/upgrade?utm=usage-limit"
        )
```

---

#### Imported: 7. Comandos Rapidos

| Comando              | Acao                                     |
|----------------------|------------------------------------------|
| /stripe-setup        | Configura Stripe do zero                 |
| /pricing-analysis    | Analisa estrategia de pricing atual      |
| /churn-playbook      | Sequencia anti-churn personalizada       |
| /unit-economics      | Calcula LTV/CAC e saude financeira       |
| /upgrade-flow        | Design do fluxo de upgrade               |
| /revenue-dashboard   | Template de dashboard de revenue         |
| /trial-optimization  | Otimiza conversao de trial               |

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
