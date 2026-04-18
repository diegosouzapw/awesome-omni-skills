---
name: saga-orchestration
description: "Saga Orchestration workflow skill. Use this skill when the user needs Patterns for managing distributed transactions and long-running business processes and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: tools
tags: ["saga-orchestration", "patterns", "for", "managing", "distributed", "transactions", "and", "long-running"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-18"
---

# Saga Orchestration

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/saga-orchestration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Saga Orchestration Patterns for managing distributed transactions and long-running business processes.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Concepts, Templates, Durable Execution Alternative, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to saga orchestration
- You need a different domain or tool outside this scope
- Coordinating multi-service transactions
- Implementing compensating transactions
- Managing long-running business workflows
- Handling failures in distributed systems

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `resources/implementation-playbook.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `resources/implementation-playbook.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Clarify goals, constraints, and required inputs.
2. Apply relevant best practices and validate outcomes.
3. Provide actionable steps and verification.
4. If detailed examples are required, open resources/implementation-playbook.md.
5. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
6. Read the overview and provenance files before loading any copied upstream support files.
7. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.

### Imported Workflow Notes

#### Imported: Instructions

- Clarify goals, constraints, and required inputs.
- Apply relevant best practices and validate outcomes.
- Provide actionable steps and verification.
- If detailed examples are required, open `resources/implementation-playbook.md`.

#### Imported: Core Concepts

### 1. Saga Types

```
Choreography                    Orchestration
┌─────┐  ┌─────┐  ┌─────┐     ┌─────────────┐
│Svc A│─►│Svc B│─►│Svc C│     │ Orchestrator│
└─────┘  └─────┘  └─────┘     └──────┬──────┘
   │        │        │               │
   ▼        ▼        ▼         ┌─────┼─────┐
 Event    Event    Event       ▼     ▼     ▼
                            ┌────┐┌────┐┌────┐
                            │Svc1││Svc2││Svc3│
                            └────┘└────┘└────┘
```

### 2. Saga Execution States

| State            | Description                    |
| ---------------- | ------------------------------ |
| **Started**      | Saga initiated                 |
| **Pending**      | Waiting for step completion    |
| **Compensating** | Rolling back due to failure    |
| **Completed**    | All steps succeeded            |
| **Failed**       | Saga failed after compensation |

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @saga-orchestration to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @saga-orchestration against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @saga-orchestration for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @saga-orchestration using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Make steps idempotent - Safe to retry
- Design compensations carefully - They must work
- Use correlation IDs - For tracing across services
- Implement timeouts - Don't wait forever
- Log everything - For debugging failures
- Don't assume instant completion - Sagas take time
- Don't skip compensation testing - Most critical part

### Imported Operating Notes

#### Imported: Best Practices

### Do's

- **Make steps idempotent** - Safe to retry
- **Design compensations carefully** - They must work
- **Use correlation IDs** - For tracing across services
- **Implement timeouts** - Don't wait forever
- **Log everything** - For debugging failures

### Don'ts

- **Don't assume instant completion** - Sagas take time
- **Don't skip compensation testing** - Most critical part
- **Don't couple services** - Use async messaging
- **Don't ignore partial failures** - Handle gracefully

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/saga-orchestration`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@prompt-engineer` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@prompt-engineering` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@prompt-engineering-patterns` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@prompt-library` - Use when the work is better handled by that native specialization after this imported skill establishes context.

## Additional Resources

Use this support matrix and the linked files below as the operator packet for this imported skill. They should reflect real copied source material, not generic scaffolding.

| Resource family | What it gives the reviewer | Example path |
| --- | --- | --- |
| `references` | copied reference notes, guides, or background material from upstream | `references/n/a` |
| `examples` | worked examples or reusable prompts copied from upstream | `examples/n/a` |
| `scripts` | upstream helper scripts that change execution or validation | `scripts/n/a` |
| `agents` | routing or delegation notes that are genuinely part of the imported package | `agents/n/a` |
| `assets` | supporting assets or schemas copied from the source package | `assets/n/a` |

- [implementation-playbook.md](resources/implementation-playbook.md)

### Imported Reference Notes

#### Imported: Resources

- [Saga Pattern](https://microservices.io/patterns/data/saga.html)
- [Designing Data-Intensive Applications](https://dataintensive.net/)

#### Imported: Templates

### Template 1: Saga Orchestrator Base

```python
from abc import ABC, abstractmethod
from dataclasses import dataclass, field
from enum import Enum
from typing import List, Dict, Any, Optional
from datetime import datetime
import uuid

class SagaState(Enum):
    STARTED = "started"
    PENDING = "pending"
    COMPENSATING = "compensating"
    COMPLETED = "completed"
    FAILED = "failed"


@dataclass
class SagaStep:
    name: str
    action: str
    compensation: str
    status: str = "pending"
    result: Optional[Dict] = None
    error: Optional[str] = None
    executed_at: Optional[datetime] = None
    compensated_at: Optional[datetime] = None


@dataclass
class Saga:
    saga_id: str
    saga_type: str
    state: SagaState
    data: Dict[str, Any]
    steps: List[SagaStep]
    current_step: int = 0
    created_at: datetime = field(default_factory=datetime.utcnow)
    updated_at: datetime = field(default_factory=datetime.utcnow)


class SagaOrchestrator(ABC):
    """Base class for saga orchestrators."""

    def __init__(self, saga_store, event_publisher):
        self.saga_store = saga_store
        self.event_publisher = event_publisher

    @abstractmethod
    def define_steps(self, data: Dict) -> List[SagaStep]:
        """Define the saga steps."""
        pass

    @property
    @abstractmethod
    def saga_type(self) -> str:
        """Unique saga type identifier."""
        pass

    async def start(self, data: Dict) -> Saga:
        """Start a new saga."""
        saga = Saga(
            saga_id=str(uuid.uuid4()),
            saga_type=self.saga_type,
            state=SagaState.STARTED,
            data=data,
            steps=self.define_steps(data)
        )
        await self.saga_store.save(saga)
        await self._execute_next_step(saga)
        return saga

    async def handle_step_completed(self, saga_id: str, step_name: str, result: Dict):
        """Handle successful step completion."""
        saga = await self.saga_store.get(saga_id)

        # Update step
        for step in saga.steps:
            if step.name == step_name:
                step.status = "completed"
                step.result = result
                step.executed_at = datetime.utcnow()
                break

        saga.current_step += 1
        saga.updated_at = datetime.utcnow()

        # Check if saga is complete
        if saga.current_step >= len(saga.steps):
            saga.state = SagaState.COMPLETED
            await self.saga_store.save(saga)
            await self._on_saga_completed(saga)
        else:
            saga.state = SagaState.PENDING
            await self.saga_store.save(saga)
            await self._execute_next_step(saga)

    async def handle_step_failed(self, saga_id: str, step_name: str, error: str):
        """Handle step failure - start compensation."""
        saga = await self.saga_store.get(saga_id)

        # Mark step as failed
        for step in saga.steps:
            if step.name == step_name:
                step.status = "failed"
                step.error = error
                break

        saga.state = SagaState.COMPENSATING
        saga.updated_at = datetime.utcnow()
        await self.saga_store.save(saga)

        # Start compensation from current step backwards
        await self._compensate(saga)

    async def _execute_next_step(self, saga: Saga):
        """Execute the next step in the saga."""
        if saga.current_step >= len(saga.steps):
            return

        step = saga.steps[saga.current_step]
        step.status = "executing"
        await self.saga_store.save(saga)

        # Publish command to execute step
        await self.event_publisher.publish(
            step.action,
            {
                "saga_id": saga.saga_id,
                "step_name": step.name,
                **saga.data
            }
        )

    async def _compensate(self, saga: Saga):
        """Execute compensation for completed steps."""
        # Compensate in reverse order
        for i in range(saga.current_step - 1, -1, -1):
            step = saga.steps[i]
            if step.status == "completed":
                step.status = "compensating"
                await self.saga_store.save(saga)

                await self.event_publisher.publish(
                    step.compensation,
                    {
                        "saga_id": saga.saga_id,
                        "step_name": step.name,
                        "original_result": step.result,
                        **saga.data
                    }
                )

    async def handle_compensation_completed(self, saga_id: str, step_name: str):
        """Handle compensation completion."""
        saga = await self.saga_store.get(saga_id)

        for step in saga.steps:
            if step.name == step_name:
                step.status = "compensated"
                step.compensated_at = datetime.utcnow()
                break

        # Check if all compensations complete
        all_compensated = all(
            s.status in ("compensated", "pending", "failed")
            for s in saga.steps
        )

        if all_compensated:
            saga.state = SagaState.FAILED
            await self._on_saga_failed(saga)

        await self.saga_store.save(saga)

    async def _on_saga_completed(self, saga: Saga):
        """Called when saga completes successfully."""
        await self.event_publisher.publish(
            f"{self.saga_type}Completed",
            {"saga_id": saga.saga_id, **saga.data}
        )

    async def _on_saga_failed(self, saga: Saga):
        """Called when saga fails after compensation."""
        await self.event_publisher.publish(
            f"{self.saga_type}Failed",
            {"saga_id": saga.saga_id, "error": "Saga failed", **saga.data}
        )
```

### Template 2: Order Fulfillment Saga

```python
class OrderFulfillmentSaga(SagaOrchestrator):
    """Orchestrates order fulfillment across services."""

    @property
    def saga_type(self) -> str:
        return "OrderFulfillment"

    def define_steps(self, data: Dict) -> List[SagaStep]:
        return [
            SagaStep(
                name="reserve_inventory",
                action="InventoryService.ReserveItems",
                compensation="InventoryService.ReleaseReservation"
            ),
            SagaStep(
                name="process_payment",
                action="PaymentService.ProcessPayment",
                compensation="PaymentService.RefundPayment"
            ),
            SagaStep(
                name="create_shipment",
                action="ShippingService.CreateShipment",
                compensation="ShippingService.CancelShipment"
            ),
            SagaStep(
                name="send_confirmation",
                action="NotificationService.SendOrderConfirmation",
                compensation="NotificationService.SendCancellationNotice"
            )
        ]


# Usage
async def create_order(order_data: Dict):
    saga = OrderFulfillmentSaga(saga_store, event_publisher)
    return await saga.start({
        "order_id": order_data["order_id"],
        "customer_id": order_data["customer_id"],
        "items": order_data["items"],
        "payment_method": order_data["payment_method"],
        "shipping_address": order_data["shipping_address"]
    })


# Event handlers in each service
class InventoryService:
    async def handle_reserve_items(self, command: Dict):
        try:
            # Reserve inventory
            reservation = await self.reserve(
                command["items"],
                command["order_id"]
            )
            # Report success
            await self.event_publisher.publish(
                "SagaStepCompleted",
                {
                    "saga_id": command["saga_id"],
                    "step_name": "reserve_inventory",
                    "result": {"reservation_id": reservation.id}
                }
            )
        except InsufficientInventoryError as e:
            await self.event_publisher.publish(
                "SagaStepFailed",
                {
                    "saga_id": command["saga_id"],
                    "step_name": "reserve_inventory",
                    "error": str(e)
                }
            )

    async def handle_release_reservation(self, command: Dict):
        # Compensating action
        await self.release_reservation(
            command["original_result"]["reservation_id"]
        )
        await self.event_publisher.publish(
            "SagaCompensationCompleted",
            {
                "saga_id": command["saga_id"],
                "step_name": "reserve_inventory"
            }
        )
```

### Template 3: Choreography-Based Saga

```python
from dataclasses import dataclass
from typing import Dict, Any
import asyncio

@dataclass
class SagaContext:
    """Passed through choreographed saga events."""
    saga_id: str
    step: int
    data: Dict[str, Any]
    completed_steps: list


class OrderChoreographySaga:
    """Choreography-based saga using events."""

    def __init__(self, event_bus):
        self.event_bus = event_bus
        self._register_handlers()

    def _register_handlers(self):
        self.event_bus.subscribe("OrderCreated", self._on_order_created)
        self.event_bus.subscribe("InventoryReserved", self._on_inventory_reserved)
        self.event_bus.subscribe("PaymentProcessed", self._on_payment_processed)
        self.event_bus.subscribe("ShipmentCreated", self._on_shipment_created)

        # Compensation handlers
        self.event_bus.subscribe("PaymentFailed", self._on_payment_failed)
        self.event_bus.subscribe("ShipmentFailed", self._on_shipment_failed)

    async def _on_order_created(self, event: Dict):
        """Step 1: Order created, reserve inventory."""
        await self.event_bus.publish("ReserveInventory", {
            "saga_id": event["order_id"],
            "order_id": event["order_id"],
            "items": event["items"]
        })

    async def _on_inventory_reserved(self, event: Dict):
        """Step 2: Inventory reserved, process payment."""
        await self.event_bus.publish("ProcessPayment", {
            "saga_id": event["saga_id"],
            "order_id": event["order_id"],
            "amount": event["total_amount"],
            "reservation_id": event["reservation_id"]
        })

    async def _on_payment_processed(self, event: Dict):
        """Step 3: Payment done, create shipment."""
        await self.event_bus.publish("CreateShipment", {
            "saga_id": event["saga_id"],
            "order_id": event["order_id"],
            "payment_id": event["payment_id"]
        })

    async def _on_shipment_created(self, event: Dict):
        """Step 4: Complete - send confirmation."""
        await self.event_bus.publish("OrderFulfilled", {
            "saga_id": event["saga_id"],
            "order_id": event["order_id"],
            "tracking_number": event["tracking_number"]
        })

    # Compensation handlers
    async def _on_payment_failed(self, event: Dict):
        """Payment failed - release inventory."""
        await self.event_bus.publish("ReleaseInventory", {
            "saga_id": event["saga_id"],
            "reservation_id": event["reservation_id"]
        })
        await self.event_bus.publish("OrderFailed", {
            "order_id": event["order_id"],
            "reason": "Payment failed"
        })

    async def _on_shipment_failed(self, event: Dict):
        """Shipment failed - refund payment and release inventory."""
        await self.event_bus.publish("RefundPayment", {
            "saga_id": event["saga_id"],
            "payment_id": event["payment_id"]
        })
        await self.event_bus.publish("ReleaseInventory", {
            "saga_id": event["saga_id"],
            "reservation_id": event["reservation_id"]
        })
```

### Template 4: Saga with Timeouts

```python
class TimeoutSagaOrchestrator(SagaOrchestrator):
    """Saga orchestrator with step timeouts."""

    def __init__(self, saga_store, event_publisher, scheduler):
        super().__init__(saga_store, event_publisher)
        self.scheduler = scheduler

    async def _execute_next_step(self, saga: Saga):
        if saga.current_step >= len(saga.steps):
            return

        step = saga.steps[saga.current_step]
        step.status = "executing"
        step.timeout_at = datetime.utcnow() + timedelta(minutes=5)
        await self.saga_store.save(saga)

        # Schedule timeout check
        await self.scheduler.schedule(
            f"saga_timeout_{saga.saga_id}_{step.name}",
            self._check_timeout,
            {"saga_id": saga.saga_id, "step_name": step.name},
            run_at=step.timeout_at
        )

        await self.event_publisher.publish(
            step.action,
            {"saga_id": saga.saga_id, "step_name": step.name, **saga.data}
        )

    async def _check_timeout(self, data: Dict):
        """Check if step has timed out."""
        saga = await self.saga_store.get(data["saga_id"])
        step = next(s for s in saga.steps if s.name == data["step_name"])

        if step.status == "executing":
            # Step timed out - fail it
            await self.handle_step_failed(
                data["saga_id"],
                data["step_name"],
                "Step timed out"
            )
```

#### Imported: Durable Execution Alternative

The templates above build saga infrastructure from scratch — saga stores, event publishers, compensation tracking. **Durable execution frameworks** (like DBOS) eliminate much of this boilerplate: the workflow runtime automatically persists state to a database, retries failed steps, and resumes from the last checkpoint after crashes. Instead of building a `SagaOrchestrator` base class, you write a workflow function with steps — the framework handles persistence, crash recovery, and exactly-once execution semantics. Consider durable execution when you want saga-like reliability without managing the coordination infrastructure yourself.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
