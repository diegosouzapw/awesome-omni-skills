# Worked Review Example

## Input

The change request contains:
- SQL migration adding a required `customer_email` column to `orders`
- application update that starts writing the new column immediately
- Kubernetes manifest for PostgreSQL using `emptyDir`

### Proposed migration

```sql
ALTER TABLE orders ADD COLUMN customer_email TEXT NOT NULL;
CREATE INDEX idx_orders_created_at ON orders(created_at);
```

### Storage manifest excerpt

```yaml
volumes:
  - name: data
    emptyDir: {}
```

## Review

### Decision

**Unsafe as proposed**

### Primary risks
- existing `orders` rows may violate `NOT NULL`
- no evidence that the new index matches a target query pattern
- database storage is ephemeral and not suitable for durable state

### Evidence missing
- count of rows with missing email source data
- deployment order for code and schema
- execution plan or target query for the new index
- persistent volume strategy and recovery expectations

### Safer direction
1. Add `customer_email` as nullable.
2. Deploy application code that can read/write both old and new states.
3. Backfill in batches with validation checks.
4. Add `NOT NULL` only after data is confirmed complete.
5. Require persistent storage before approving runtime deployment.
6. Justify the index with the actual query pattern and plan evidence.

## Expected operator output

```text
Decision: unsafe as proposed
Engine/runtime: PostgreSQL on Kubernetes
Change type: schema + migration + operational
Primary risks:
- incompatible NOT NULL addition against existing data
- index added without workload evidence
- ephemeral storage for persistent database state
Evidence reviewed:
- migration SQL
- storage manifest excerpt
Required follow-ups:
- staged backfill plan
- query plan for proposed index use
- PVC/StatefulSet or equivalent durable storage design
Reasoning:
- correctness and durability risks are unresolved and cannot be approved on syntax alone
```
