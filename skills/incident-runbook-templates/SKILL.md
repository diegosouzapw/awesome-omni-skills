---
name: incident-runbook-templates
description: "Incident Runbook Templates workflow skill. Use this skill when the user needs Production-ready templates for incident response runbooks covering detection, triage, mitigation, resolution, and communication and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["incident-runbook-templates", "production-ready", "templates", "for", "incident", "response", "runbooks", "covering"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-21"
---

# Incident Runbook Templates

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/incident-runbook-templates` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Incident Runbook Templates Production-ready templates for incident response runbooks covering detection, triage, mitigation, resolution, and communication.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Runbook Templates, Impact Assessment, Detection, Initial Triage (First 5 Minutes), Communication Templates.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to incident runbook templates
- You need a different domain or tool outside this scope
- Creating incident response procedures
- Building service-specific runbooks
- Establishing escalation paths
- Documenting recovery procedures

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

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. from:
6. ipBlock:
7. 192.168.1.0/24 # Suspicious range

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Mitigation Procedures

### 4.1 Service Completely Down
```bash
# Step 1: Check pod status
kubectl get pods -n payments

# Step 2: If pods are crash-looping, check logs
kubectl logs -n payments -l app=payment-service --tail=100

# Step 3: Check recent deployments
kubectl rollout history deployment/payment-service -n payments

# Step 4: ROLLBACK if recent deploy is suspect
kubectl rollout undo deployment/payment-service -n payments

# Step 5: Scale up if resource constrained
kubectl scale deployment/payment-service -n payments --replicas=10

# Step 6: Verify recovery
kubectl rollout status deployment/payment-service -n payments
```

### 4.2 High Latency
```bash
# Step 1: Check database connections
kubectl exec -n payments deploy/payment-service -- \
  curl localhost:8080/metrics | grep db_pool

# Step 2: Check slow queries (if DB issue)
psql -h $DB_HOST -U $DB_USER -c "
  SELECT pid, now() - query_start AS duration, query
  FROM pg_stat_activity
  WHERE state = 'active' AND duration > interval '5 seconds'
  ORDER BY duration DESC;"

# Step 3: Kill long-running queries if needed
psql -h $DB_HOST -U $DB_USER -c "SELECT pg_terminate_backend(pid);"

# Step 4: Check external dependency latency
curl -w "@curl-format.txt" -o /dev/null -s https://api.stripe.com/v1/health

# Step 5: Enable circuit breaker if dependency is slow
kubectl set env deployment/payment-service \
  STRIPE_CIRCUIT_BREAKER_ENABLED=true -n payments
```

### 4.3 Partial Failures (Specific Errors)
```bash
# Step 1: Identify error pattern
kubectl logs -n payments -l app=payment-service --tail=500 | \
  grep -i error | sort | uniq -c | sort -rn | head -20

# Step 2: Check error tracking
# Go to Sentry: https://sentry.io/payments

# Step 3: If specific endpoint, enable feature flag to disable
curl -X POST https://api.company.com/internal/feature-flags \
  -d '{"flag": "DISABLE_PROBLEMATIC_FEATURE", "enabled": true}'

# Step 4: If data issue, check recent data changes
psql -h $DB_HOST -c "
  SELECT * FROM audit_log
  WHERE table_name = 'payment_methods'
  AND created_at > now() - interval '1 hour';"
```

### 4.4 Traffic Surge
```bash
# Step 1: Check current request rate
kubectl top pods -n payments

# Step 2: Scale horizontally
kubectl scale deployment/payment-service -n payments --replicas=20

# Step 3: Enable rate limiting
kubectl set env deployment/payment-service \
  RATE_LIMIT_ENABLED=true \
  RATE_LIMIT_RPS=1000 -n payments

# Step 4: If attack, block suspicious IPs
kubectl apply -f - <<EOF
apiVersion: networking.k8s.io/v1
kind: NetworkPolicy
metadata:
  name: block-suspicious
  namespace: payments
spec:
  podSelector:
    matchLabels:
      app: payment-service
  ingress:
  - from:
    - ipBlock:
        cidr: 0.0.0.0/0
        except:
        - 192.168.1.0/24  # Suspicious range
EOF
```

#### Imported: Verification Steps

```bash
# Verify service is healthy
curl -s https://api.company.com/payments/health | jq

# Verify error rate is back to normal
curl -s "http://prometheus:9090/api/v1/query?query=sum(rate(http_requests_total{status=~'5..'}[5m]))" | jq '.data.result[0].value[1]'

# Verify latency is acceptable
curl -s "http://prometheus:9090/api/v1/query?query=histogram_quantile(0.99,sum(rate(http_request_duration_seconds_bucket[5m]))by(le))" | jq

# Smoke test critical flows
./scripts/smoke-test-payments.sh
```

#### Imported: Rollback Procedures

```bash
# Rollback Kubernetes deployment
kubectl rollout undo deployment/payment-service -n payments

# Rollback database migration (if applicable)
./scripts/db-rollback.sh $MIGRATION_VERSION

# Rollback feature flag
curl -X POST https://api.company.com/internal/feature-flags \
  -d '{"flag": "NEW_PAYMENT_FLOW", "enabled": false}'
```

#### Imported: Overview

**Service**: Payment Processing Service
**Owner**: Platform Team
**Slack**: #payments-incidents
**PagerDuty**: payments-oncall

#### Imported: Core Concepts

### 1. Incident Severity Levels

| Severity | Impact | Response Time | Example |
|----------|--------|---------------|---------|
| **SEV1** | Complete outage, data loss | 15 min | Production down |
| **SEV2** | Major degradation | 30 min | Critical feature broken |
| **SEV3** | Minor impact | 2 hours | Non-critical bug |
| **SEV4** | Minimal impact | Next business day | Cosmetic issue |

### 2. Runbook Structure

```
1. Overview & Impact
2. Detection & Alerts
3. Initial Triage
4. Mitigation Steps
5. Root Cause Investigation
6. Resolution Procedures
7. Verification & Rollback
8. Communication Templates
9. Escalation Matrix
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @incident-runbook-templates to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @incident-runbook-templates against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @incident-runbook-templates for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @incident-runbook-templates using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep runbooks updated - Review after every incident
- Test runbooks regularly - Game days, chaos engineering
- Include rollback steps - Always have an escape hatch
- Document assumptions - What must be true for steps to work
- Link to dashboards - Quick access during stress
- Don't assume knowledge - Write for 3 AM brain
- Don't skip verification - Confirm each step worked

### Imported Operating Notes

#### Imported: Best Practices

### Do's
- **Keep runbooks updated** - Review after every incident
- **Test runbooks regularly** - Game days, chaos engineering
- **Include rollback steps** - Always have an escape hatch
- **Document assumptions** - What must be true for steps to work
- **Link to dashboards** - Quick access during stress

### Don'ts
- **Don't assume knowledge** - Write for 3 AM brain
- **Don't skip verification** - Confirm each step worked
- **Don't forget communication** - Keep stakeholders informed
- **Don't work alone** - Escalate early
- **Don't skip postmortems** - Learn from every incident

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/incident-runbook-templates`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@base` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@calc` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@draw` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@image-studio` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Escalation Matrix

| Condition | Escalate To | Contact |
|-----------|-------------|---------|
| > 15 min unresolved SEV1 | Engineering Manager | @manager (Slack) |
| Data breach suspected | Security Team | #security-incidents |
| Financial impact > $10k | Finance + Legal | @finance-oncall |
| Customer communication needed | Support Lead | @support-lead |

#### Imported: Quick Reference

| Issue | Command |
|-------|---------|
| Check connections | `SELECT count(*) FROM pg_stat_activity;` |
| Kill query | `SELECT pg_terminate_backend(pid);` |
| Check replication lag | `SELECT extract(epoch from (now() - pg_last_xact_replay_timestamp()));` |
| Check locks | `SELECT * FROM pg_locks WHERE NOT granted;` |

#### Imported: Resources

- [Google SRE Book - Incident Management](https://sre.google/sre-book/managing-incidents/)
- [PagerDuty Incident Response](https://response.pagerduty.com/)
- [Atlassian Incident Management](https://www.atlassian.com/incident-management)

#### Imported: Runbook Templates

### Template 1: Service Outage Runbook

```markdown
# [Service Name] Outage Runbook

#### Imported: Impact Assessment

- [ ] Which customers are affected?
- [ ] What percentage of traffic is impacted?
- [ ] Are there financial implications?
- [ ] What's the blast radius?

#### Imported: Detection

### Alerts
- `payment_error_rate > 5%` (PagerDuty)
- `payment_latency_p99 > 2s` (Slack)
- `payment_success_rate < 95%` (PagerDuty)

### Dashboards
- [Payment Service Dashboard](https://grafana/d/payments)
- [Error Tracking](https://sentry.io/payments)
- [Dependency Status](https://status.stripe.com)

#### Imported: Initial Triage (First 5 Minutes)

### 1. Assess Scope
```bash
# Check service health
kubectl get pods -n payments -l app=payment-service

# Check recent deployments
kubectl rollout history deployment/payment-service -n payments

# Check error rates
curl -s "http://prometheus:9090/api/v1/query?query=sum(rate(http_requests_total{status=~'5..'}[5m]))"
```

### 2. Quick Health Checks
- [ ] Can you reach the service? `curl -I https://api.company.com/payments/health`
- [ ] Database connectivity? Check connection pool metrics
- [ ] External dependencies? Check Stripe, bank API status
- [ ] Recent changes? Check deploy history

### 3. Initial Classification
| Symptom | Likely Cause | Go To Section |
|---------|--------------|---------------|
| All requests failing | Service down | Section 4.1 |
| High latency | Database/dependency | Section 4.2 |
| Partial failures | Code bug | Section 4.3 |
| Spike in errors | Traffic surge | Section 4.4 |

#### Imported: Communication Templates

### Initial Notification (Internal)
```
🚨 INCIDENT: Payment Service Degradation

Severity: SEV2
Status: Investigating
Impact: ~20% of payment requests failing
Start Time: [TIME]
Incident Commander: [NAME]

Current Actions:
- Investigating root cause
- Scaling up service
- Monitoring dashboards

Updates in #payments-incidents
```

### Status Update
```
📊 UPDATE: Payment Service Incident

Status: Mitigating
Impact: Reduced to ~5% failure rate
Duration: 25 minutes

Actions Taken:
- Rolled back deployment v2.3.4 → v2.3.3
- Scaled service from 5 → 10 replicas

Next Steps:
- Continuing to monitor
- Root cause analysis in progress

ETA to Resolution: ~15 minutes
```

### Resolution Notification
```
✅ RESOLVED: Payment Service Incident

Duration: 45 minutes
Impact: ~5,000 affected transactions
Root Cause: Memory leak in v2.3.4

Resolution:
- Rolled back to v2.3.3
- Transactions auto-retried successfully

Follow-up:
- Postmortem scheduled for [DATE]
- Bug fix in progress
```
```

### Template 2: Database Incident Runbook

```markdown
# Database Incident Runbook

#### Imported: Connection Pool Exhaustion

```sql
-- Check current connections
SELECT datname, usename, state, count(*)
FROM pg_stat_activity
GROUP BY datname, usename, state
ORDER BY count(*) DESC;

-- Identify long-running connections
SELECT pid, usename, datname, state, query_start, query
FROM pg_stat_activity
WHERE state != 'idle'
ORDER BY query_start;

-- Terminate idle connections
SELECT pg_terminate_backend(pid)
FROM pg_stat_activity
WHERE state = 'idle'
AND query_start < now() - interval '10 minutes';
```

#### Imported: Replication Lag

```sql
-- Check lag on replica
SELECT
  CASE
    WHEN pg_last_wal_receive_lsn() = pg_last_wal_replay_lsn() THEN 0
    ELSE extract(epoch from now() - pg_last_xact_replay_timestamp())
  END AS lag_seconds;

-- If lag > 60s, consider:
-- 1. Check network between primary/replica
-- 2. Check replica disk I/O
-- 3. Consider failover if unrecoverable
```

#### Imported: Disk Space Critical

```bash
# Check disk usage
df -h /var/lib/postgresql/data

# Find large tables
psql -c "SELECT relname, pg_size_pretty(pg_total_relation_size(relid))
FROM pg_catalog.pg_statio_user_tables
ORDER BY pg_total_relation_size(relid) DESC
LIMIT 10;"

# VACUUM to reclaim space
psql -c "VACUUM FULL large_table;"

# If emergency, delete old data or expand disk
```
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
