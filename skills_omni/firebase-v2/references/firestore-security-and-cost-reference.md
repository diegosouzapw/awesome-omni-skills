# Firestore Security and Cost Reference

Use this reference during design review, incident response, or pre-deploy checks when you need the short version of what enforces access, what increases cost, and what usually breaks in production.

## 1. Security Boundary Quick Map

| Access path | Typical caller | Primary control layer | Important caveat |
|---|---|---|---|
| Client SDK -> Firestore | mobile/web app user | Firebase Auth + Security Rules | Rules must be written to match allowed query shapes; they do not act as arbitrary result filters |
| Client SDK -> Storage | mobile/web app user | Firebase Auth + Storage Rules | File path design and metadata checks matter; broad write paths become privilege leaks |
| Admin SDK -> Firestore/Storage | backend, scheduled job, migration script | IAM / service account permissions | Admin SDK bypasses Security Rules |
| HTTPS or callable Functions | app client or third-party caller | function code, Auth validation, App Check where applicable, IAM for internal resources | Do not assume function endpoints inherit Firestore Rules automatically |
| Hosting-delivered app traffic | browser | app auth model, backend enforcement, App Check where supported | Hosting does not replace backend authorization |

## 2. Security Rules, IAM, and App Check: Different Jobs

| Layer | What it does | What it does not do | Operator check |
|---|---|---|---|
| Security Rules | Authorizes client SDK access to Firestore/Storage/Realtime Database based on auth state, request context, and document/path conditions | Does not govern Admin SDK traffic; does not rescue a bad query design | Confirm all client reads/writes are represented by tested allow/deny cases |
| IAM | Authorizes server-side principals such as service accounts and operators | Does not protect direct client SDK access | Review which service accounts can read/write production data |
| App Check | Reduces abuse from unauthorized or scripted app traffic by attesting app origin | Does not identify the user; does not replace Rules or IAM | Verify App Check is treated as abuse resistance, not authorization |

## 3. Firestore Query and Rules Boundaries

- Design collections from query shapes first.
- Expect composite indexes for multi-field filter/order combinations.
- Rules evaluate whether the query could return unauthorized data; they do not post-filter results after execution.
- A query that seems logically narrow can still fail if the rule conditions and query constraints do not align.
- Broad collection listeners are operationally expensive even when individual document reads seem cheap.

## 4. Common Firestore Cost Drivers

| Cost driver | Why it grows | Typical mitigation |
|---|---|---|
| Broad real-time listeners | reconnects, large matching sets, frequent updates | narrow the query, reduce listener scope, paginate, avoid always-on background subscriptions |
| Read amplification from denormalization gaps | client fetches multiple documents to assemble one view | precompute view-friendly documents, adjust document shape, move expensive joins to backend |
| Index-heavy query patterns | many composite indexes and repeated scans from evolving query needs | stabilize query patterns early; redesign schema when indexes keep proliferating |
| Hot documents/collections | concentrated write traffic causes contention and retries | shard counters, spread writes, avoid monotonic hotspots |
| Large support/admin dashboards | wide filters plus live updates trigger persistent reads | use scoped queries, cache derived data, gate expensive live views to true operational need |

## 5. Pre-Deploy Review Checks

### For Firestore client access
- Which exact queries will the client run?
- Which rules allow them?
- Which cases must be denied?
- Which composite indexes are required?
- Are listeners narrow enough to be cost-safe?

### For privileged backend access
- Which Functions or jobs use the Admin SDK?
- Which service account executes them?
- Does that account have more access than needed?
- Is the operation idempotent and auditable?

### For App Check
- Which endpoints or SDK-backed products should reject unverified app traffic?
- What is the fallback behavior during rollout?
- Has the team avoided claiming App Check as user authorization?

## 6. Product-Fit Triggers to Reconsider Firestore

Reassess the architecture when you see repeated signs like:
- persistent need for joins or relational constraints
- many-to-many traversal dominating feature requests
- operators building manual consistency repair jobs for normalized data shapes
- expensive dashboards caused by reconstructing relational views from documents

When those signals appear, review Firebase SQL Connect or Data Connect instead of forcing additional Firestore workarounds.

## 7. Current Operational Note

Older guidance for email-link authentication may still assume Firebase Dynamic Links. That service shut down on 2025-08-25, so validate the current supported flow before keeping or repairing legacy email-link implementations.
