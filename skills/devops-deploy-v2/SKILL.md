---
name: devops-deploy-v2
description: "DEVOPS-DEPLOY \u2014 Da Ideia para Producao workflow skill. Use this skill when the user needs DevOps e deploy de aplicacoes \u2014 Docker, CI/CD com GitHub Actions, AWS Lambda, SAM, Terraform, infraestrutura como codigo e monitoramento and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["devops", "docker", "ci-cd", "aws", "terraform", "github-actions", "devops-deploy-v2", "devops-deploy"]
complexity: advanced
risk: caution
tools: ["claude-code", "antigravity", "cursor", "gemini-cli", "codex-cli", "opencode"]
source: community
author: "renat"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# DEVOPS-DEPLOY — Da Ideia para Producao

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/devops-deploy` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# DEVOPS-DEPLOY — Da Ideia para Producao

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: How It Works, Dockerfile Otimizado (Python), Docker Compose (Dev Local), Sam Template (Serverless), Template.Yaml, Build E Deploy.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- When you need specialized assistance with this domain
- The task is unrelated to devops deploy
- A simpler, more specific tool can handle the request
- The user needs general-purpose assistance without domain expertise
- Use when the request clearly matches the imported source intent: DevOps e deploy de aplicacoes — Docker, CI/CD com GitHub Actions, AWS Lambda, SAM, Terraform, infraestrutura como codigo e monitoramento.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. uses: actions/checkout@v4
2. uses: actions/setup-python@v5
3. run: pip install -r requirements.txt
4. run: pytest tests/ -v --cov=src --cov-report=xml
5. uses: codecov/codecov-action@v4
6. run: pip install bandit safety
7. run: bandit -r src/ -ll

### Imported Workflow Notes

#### Imported: .Github/Workflows/Deploy.Yml

name: Deploy Auri

on:
  push:
    branches: [main]
  pull_request:
    branches: [main]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-python@v5
        with: { python-version: "3.11" }
      - run: pip install -r requirements.txt
      - run: pytest tests/ -v --cov=src --cov-report=xml
      - uses: codecov/codecov-action@v4

  security:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - run: pip install bandit safety
      - run: bandit -r src/ -ll
      - run: safety check -r requirements.txt

  deploy:
    needs: [test, security]
    if: github.ref == 'refs/heads/main'
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: aws-actions/setup-sam@v2
      - uses: aws-actions/configure-aws-credentials@v4
        with:
          aws-access-key-id: ${{ secrets.AWS_ACCESS_KEY_ID }}
          aws-secret-access-key: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
          aws-region: us-east-1
      - run: sam build
      - run: sam deploy --no-confirm-changeset
      - name: Notify Telegram on Success
        run: |
          curl -s -X POST "https://api.telegram.org/bot${{ secrets.TELEGRAM_BOT_TOKEN }}/sendMessage" \
            -d "chat_id=${{ secrets.TELEGRAM_CHAT_ID }}" \
            -d "text=Auri deployed successfully! Commit: ${{ github.sha }}"
```

---

#### Imported: Overview

DevOps e deploy de aplicacoes — Docker, CI/CD com GitHub Actions, AWS Lambda, SAM, Terraform, infraestrutura como codigo e monitoramento. Ativar para: dockerizar aplicacao, configurar pipeline CI/CD, deploy na AWS, Lambda, ECS, configurar GitHub Actions, Terraform, rollback, blue-green deploy, health checks, alertas.

#### Imported: How It Works

> "Move fast and don't break things." — Engenharia de elite nao e lenta.
> E rapida e confiavel ao mesmo tempo.

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @devops-deploy-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/devops-deploy-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/devops-deploy-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @devops-deploy-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Deploy Commands

```bash

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.

### Imported Operating Notes

#### Imported: Best Practices

- Provide clear, specific context about your project and requirements
- Review all suggestions before applying them to production code
- Combine with other complementary skills for comprehensive analysis

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/devops-deploy`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Dockerfile Otimizado (Python)

```dockerfile
FROM python:3.11-slim AS builder
WORKDIR /app
COPY requirements.txt .
RUN pip install --no-cache-dir --user -r requirements.txt

FROM python:3.11-slim
WORKDIR /app
COPY --from=builder /root/.local /root/.local
COPY . .
ENV PATH=/root/.local/bin:$PATH
ENV PYTHONUNBUFFERED=1
EXPOSE 8000
HEALTHCHECK --interval=30s --timeout=3s CMD curl -f http://localhost:8000/health || exit 1
CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
```

#### Imported: Docker Compose (Dev Local)

```yaml
version: "3.9"
services:
  app:
    build: .
    ports: ["8000:8000"]
    environment:
      - ANTHROPIC_API_KEY=${ANTHROPIC_API_KEY}
    volumes:
      - .:/app
    depends_on: [db, redis]
  db:
    image: postgres:15
    environment:
      POSTGRES_DB: auri
      POSTGRES_USER: auri
      POSTGRES_PASSWORD: ${DB_PASSWORD}
    volumes:
      - pgdata:/var/lib/postgresql/data
  redis:
    image: redis:7-alpine
volumes:
  pgdata:
```

---

#### Imported: Sam Template (Serverless)

```yaml

#### Imported: Template.Yaml

AWSTemplateFormatVersion: '2010-09-09'
Transform: AWS::Serverless-2016-10-31

Globals:
  Function:
    Timeout: 30
    Runtime: python3.11
    Environment:
      Variables:
        ANTHROPIC_API_KEY: !Ref AnthropicApiKey
        DYNAMODB_TABLE: !Ref AuriTable

Resources:
  AuriFunction:
    Type: AWS::Serverless::Function
    Properties:
      CodeUri: src/
      Handler: lambda_function.handler
      MemorySize: 512
      Policies:
        - DynamoDBCrudPolicy:
            TableName: !Ref AuriTable

  AuriTable:
    Type: AWS::DynamoDB::Table
    Properties:
      TableName: auri-users
      BillingMode: PAY_PER_REQUEST
      AttributeDefinitions:
        - AttributeName: userId
          AttributeType: S
      KeySchema:
        - AttributeName: userId
          KeyType: HASH
      TimeToLiveSpecification:
        AttributeName: ttl
        Enabled: true
```

#### Imported: Build E Deploy

sam build
sam deploy --guided  # primeira vez
sam deploy           # deploys seguintes

#### Imported: Deploy Rapido (Sem Confirmacao)

sam deploy --no-confirm-changeset --no-fail-on-empty-changeset

#### Imported: Ver Logs Em Tempo Real

sam logs -n AuriFunction --tail

#### Imported: Deletar Stack

sam delete
```

---

#### Imported: Health Check Endpoint

```python
from fastapi import FastAPI
import time, os

app = FastAPI()
START_TIME = time.time()

@app.get("/health")
async def health():
    return {
        "status": "healthy",
        "uptime_seconds": time.time() - START_TIME,
        "version": os.environ.get("APP_VERSION", "unknown"),
        "environment": os.environ.get("ENV", "production")
    }
```

#### Imported: Alertas Cloudwatch

```python
import boto3

def create_error_alarm(function_name: str, sns_topic_arn: str):
    cw = boto3.client("cloudwatch")
    cw.put_metric_alarm(
        AlarmName=f"{function_name}-errors",
        MetricName="Errors",
        Namespace="AWS/Lambda",
        Dimensions=[{"Name": "FunctionName", "Value": function_name}],
        Period=300,
        EvaluationPeriods=1,
        Threshold=5,
        ComparisonOperator="GreaterThanThreshold",
        AlarmActions=[sns_topic_arn],
        TreatMissingData="notBreaching"
    )
```

---

#### Imported: 5. Checklist De Producao

- [ ] Variaveis de ambiente via Secrets Manager (nunca hardcoded)
- [ ] Health check endpoint respondendo
- [ ] Logs estruturados (JSON) com request_id
- [ ] Rate limiting configurado
- [ ] CORS restrito a dominios autorizados
- [ ] DynamoDB com backup automatico ativado
- [ ] Lambda com timeout adequado (10-30s)
- [ ] CloudWatch alarmes para erros e latencia
- [ ] Rollback plan documentado
- [ ] Load test antes do lancamento

---

#### Imported: 6. Comandos

| Comando | Acao |
|---------|------|
| `/docker-setup` | Dockeriza a aplicacao |
| `/sam-deploy` | Deploy completo na AWS Lambda |
| `/ci-cd-setup` | Configura GitHub Actions pipeline |
| `/monitoring-setup` | Configura CloudWatch e alertas |
| `/production-checklist` | Roda checklist pre-lancamento |
| `/rollback` | Plano de rollback para versao anterior |

#### Imported: Common Pitfalls

- Using this skill for tasks outside its domain expertise
- Applying recommendations without understanding your specific context
- Not providing enough project context for accurate analysis

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
