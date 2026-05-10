---
name: "firebase-v2"
description: "Use this skill when designing, reviewing, or operating Firebase systems across Auth, Firestore, Realtime Database, Storage, Functions, Hosting, App Check, and related security boundaries."
version: "0.0.1"
category: "backend"
tags:
  - "firebase-v2"
  - "firebase"
  - "firestore"
  - "authentication"
  - "cloud-functions"
  - "hosting"
  - "security-rules"
  - "app-check"
  - "api-integration"
  - "omni-enhanced"
complexity: "advanced"
risk: "caution"
tools:
  - "codex-cli"
  - "claude-code"
  - "cursor"
  - "gemini-cli"
  - "opencode"
source: "omni-team"
author: "Omni Skills Team"
license: "Unknown"
date_added: "2026-04-16"
date_updated: "2026-05-10"
source_type: "omni-curated"
maintainer: "Omni Skills Team"
family_id: "firebase-v2"
family_name: "Firebase"
variant_id: "omni"
variant_label: "Omni Curated"
is_default_variant: true
derived_from: "skills/firebase-v2"
upstream_skill: "skills/firebase-v2"
upstream_author: "sickn33"
upstream_source: "community"
upstream_pr: "271"
upstream_head_repo: "diegosouzapw/awesome-omni-skills"
upstream_head_sha: "93ab394af5645f7127d5003ee02c9566ae5353cd"
curation_surface: "skills_omni"
enhanced_origin: "omni-skills-private"
source_repo: "diegosouzapw/awesome-omni-skills"
replaces:
  - "firebase-v2"
---

# Firebase

## Overview

This skill preserves the upstream Firebase skill identity while curating it into an execution-focused operator guide.

Firebase is fast to start but easy to misapply. Most production issues come from a small set of repeat mistakes:
- choosing Firestore for a workload that is actually relational
- designing collections before confirming query shapes and index requirements
- treating Security Rules, IAM, and App Check as if they solve the same problem
- deploying Functions, indexes, or Rules without emulator-backed testing
- underestimating listener cost, read amplification, and index side effects

Use this skill to plan, review, implement, or troubleshoot systems involving:
- Firebase Authentication
- Cloud Firestore
- Realtime Database
- Cloud Storage for Firebase
- Cloud Functions for Firebase, especially 2nd gen behavior
- Firebase Hosting
- App Check
- emulator-based local testing

## When to Use

Use this skill when the user needs to:
- design a Firebase-backed application from scratch
- review an existing Firebase architecture for security, cost, or scaling risk
- decide between Firestore, Realtime Database, or a relational alternative
- debug Security Rules failures, missing indexes, auth integration issues, or Functions deployment/runtime behavior
- add emulator-backed testing before deploying rules or backend changes
- evaluate whether App Check, IAM, and Security Rules are applied at the right boundaries

Do **not** default to this skill when the workload is clearly relational, requires complex joins, or needs heavy ad hoc querying. In those cases, evaluate Firebase SQL Connect or Data Connect, or a non-Firebase relational service, before forcing the data model into Firestore.

## Workflow

1. **Clarify the product surface and trust boundaries**
   - List the exact Firebase products in scope: Auth, Firestore, Storage, Functions, Hosting, Messaging, App Check.
   - Separate client-side access from server-side access.
   - Identify who reads or writes data: end user, privileged backend, scheduled job, admin operator, or third-party integration.

2. **Choose the right data and backend model before implementation**
   - Use Firestore when access patterns are document-oriented, read-heavy, and denormalized.
   - Use Realtime Database only when its sync model is specifically beneficial.
   - If the user needs relational constraints, joins, or SQL-style querying, stop and assess Firebase SQL Connect or Data Connect instead of reshaping everything into Firestore.
   - Design around query patterns first; in Firestore, schema follows queries more than relationships.

3. **Define request, auth, and authorization paths explicitly**
   - For client SDK access, define the authenticated principal, expected claims, and the Security Rules decision path.
   - For Admin SDK or server access, note that IAM/service account permissions apply and Security Rules do not protect those reads and writes.
   - Decide whether App Check is needed to reduce abuse from scripted or unauthorized app traffic.
   - If using email-link authentication, verify the current supported flow and do not rely on Firebase Dynamic Links, which shut down on 2025-08-25.

4. **Model Firestore collections, documents, and indexes from concrete queries**
   - Write the intended query shapes before creating collections.
   - Check whether each query requires composite indexes, array membership behavior, or ordering constraints.
   - Estimate cardinality, document growth, and whether listeners or fan-out writes will multiply reads.
   - Avoid hotspot patterns such as monotonically increasing write targets or narrow key distribution in high-write workloads.

5. **Test rules and backend behavior locally before deployment**
   - Use the Local Emulator Suite for rules and integration tests.
   - Verify allowed and denied cases for Firestore, Storage, and Auth-dependent behavior.
   - For Functions, test callable or HTTP handlers with representative auth context and payloads.
   - Keep tests focused on realistic user roles and bad-path scenarios, not only happy paths.

6. **Set production runtime controls deliberately**
   - For Functions 2nd gen, decide region, concurrency, memory, timeout, min instances, and secret handling intentionally.
   - Keep data and compute in compatible regions to reduce latency and egress surprises.
   - Use least-privilege service accounts where possible.
   - Plan deployment order when rules, indexes, functions, and app code change together.

7. **Review cost, observability, and rollback paths before launch**
   - Check read amplification from listeners, pagination, and rule-evaluation side effects.
   - Confirm logging and error reporting paths for Functions and app clients.
   - Ensure there is a rollback path for rules, function releases, and index-dependent application changes.
   - Record which failures should be solved by Rules, IAM, App Check, or code fixes.

## Examples

### Example 1: Firestore query-first planning

**Input requirement**

```text
Users can view their own orders, sorted by createdAt descending.
Support staff can view orders for a specific store and status.
The dashboard updates live for new orders.
```

**Recommended interpretation**

```yaml
collections:
  orders:
    fields:
      userId: string
      storeId: string
      status: string
      createdAt: timestamp
      total: number
queries:
  - name: user_orders
    where:
      userId: == auth.uid
    order_by:
      createdAt: desc
  - name: store_status_orders
    where:
      storeId: == $storeId
      status: == $status
    order_by:
      createdAt: desc
risks:
  - live listeners on broad store queries can create sustained read cost
  - support-staff access must be role-gated in rules or moved behind privileged backend APIs
likely_followups:
  - composite index for storeId + status + createdAt
  - rules tests for user vs support role access
```

**Expected operator decision**
- keep user-specific live queries narrow
- define support role claims before writing rules
- create indexes from known query shapes, not after production errors

### Example 2: Security boundary review

**Scenario**

```text
A mobile app writes profile data directly to Firestore.
A backend job updates billing state using the Admin SDK.
The team enabled App Check and assumes billing writes are now protected by rules.
```

**Correct boundary model**

```text
Mobile app -> Auth + Security Rules + optional App Check
Backend Admin SDK job -> IAM/service account permissions
Security Rules do not constrain Admin SDK writes
App Check does not replace Auth or IAM
```

**Expected operator action**
- review Firestore rules for client writes
- review service account IAM for backend jobs
- treat App Check as abuse resistance for app-origin traffic, not authorization for privileged systems

### Example 3: Emulator-backed rules test workflow

Open [`examples/emulator-rules-test-workflow.md`](examples/emulator-rules-test-workflow.md) when you need a concrete before/deploy validation loop for Firestore rules.

## Best Practices

- **Do** design Firestore from required queries, sort orders, and access paths.
- **Do** treat Security Rules, IAM, and App Check as separate layers with different enforcement points.
- **Do** use the emulator for rule and integration testing before production deploys.
- **Do** keep listeners as narrow as possible and measure how often they reconnect or refetch.
- **Do** select Functions 2nd gen region and concurrency intentionally; defaults are not always cost-safe or latency-safe.
- **Do** use custom claims or backend-mediated access for administrative roles rather than broad client-side permissions.
- **Do** consider Firebase SQL Connect or Data Connect when the user is asking for relational behavior.

- **Do not** assume Security Rules filter arbitrary query results; Firestore rules are not a substitute for query design.
- **Do not** use the Admin SDK from semi-trusted environments.
- **Do not** assume App Check proves user identity or authorization.
- **Do not** ship functions, indexes, or rules together without checking migration and rollback order.
- **Do not** ignore composite index creation prompts and then treat the resulting failures as transient bugs.
- **Do not** rely on deprecated email-link flows that depended on Firebase Dynamic Links.

## Troubleshooting

**Symptoms:** Firestore query fails with a missing index error.

**Solution:** Capture the exact query shape, create the required index, and verify the query matches your intended data model. If index demands keep growing unexpectedly, revisit the schema and query design rather than layering indexes indefinitely.

**Symptoms:** A client can read or write data that should be blocked.

**Solution:** Check whether the access is happening through a client SDK or the Admin SDK. For client SDK access, review Security Rules and auth claims. For Admin SDK access, review IAM and service account usage; Rules do not enforce those requests.

**Symptoms:** Queries are denied even though documents seem like they should match the rules.

**Solution:** Re-check the query against Firestore rules semantics. Rules are evaluated against the potential result set, not used as row-level post-filters. Align the query constraints with what the rules allow.

**Symptoms:** Costs rise sharply after enabling real-time listeners.

**Solution:** Inspect listener scope, reconnect behavior, and document churn. Reduce broad listeners, paginate where possible, and confirm whether the application is re-subscribing more often than expected.

**Symptoms:** A Cloud Function works locally but behaves poorly in production.

**Solution:** Review 2nd gen runtime settings: region, concurrency, memory, timeout, min instances, networking, and secrets. Also verify service account permissions and whether the function is too close to Firestore hot paths.

**Symptoms:** Email-link authentication stopped working or behaves inconsistently across links.

**Solution:** Check whether the flow depended on Firebase Dynamic Links. That service shut down on 2025-08-25, so older integration guidance may be invalid. Confirm the current supported email-link auth implementation before patching symptoms.

**Symptoms:** The team keeps building join-heavy workarounds in Firestore.

**Solution:** Stop and reassess the product fit. The workload may belong in Firebase SQL Connect, Data Connect, or another relational backend instead of a denormalized Firestore model.

## Additional Resources

- [`references/firestore-security-and-cost-reference.md`](references/firestore-security-and-cost-reference.md) — open this for a compact operator reference on security boundaries, read-cost drivers, App Check scope, and common Firestore production traps.
- [`examples/emulator-rules-test-workflow.md`](examples/emulator-rules-test-workflow.md) — open this when you need a concrete local test loop for Firestore rules before deployment.

## Related Skills

No related local skills were provided in the source context.
