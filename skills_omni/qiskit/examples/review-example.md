# Qiskit Review Example

This example shows how to review and improve a Qiskit workflow request.

## Scenario

User intent: "Create a Bell-state circuit, test it locally, then prepare it for execution on a real backend later."

---

## Weak plan to reject or revise

> Install Qiskit, build the Bell circuit, execute it, and then run it on hardware. If hardware is slow, just use the simulator first. Add your IBM token directly in the notebook so the code works everywhere.

### Why this is weak

- Does not distinguish local validation from backend-targeted execution.
- Uses vague "execute it" wording instead of choosing an appropriate primitive.
- Does not mention transpiling against the target backend.
- Encourages unsafe credential handling.
- Gives no review checkpoint for compiled depth, routing, or backend fit.

---

## Improved modern plan

### Step 1: Create a clean environment

```bash
python -m venv .venv
source .venv/bin/activate
python -m pip install --upgrade pip
pip install qiskit
python -c "import qiskit; print(qiskit.__version__)"
```

Expected observation:
- Qiskit imports successfully.
- A concrete version string is printed for later debugging.

### Step 2: Build the smallest useful circuit

```python
from qiskit import QuantumCircuit

qc = QuantumCircuit(2, 2)
qc.h(0)
qc.cx(0, 1)
qc.measure([0, 1], [0, 1])
print(qc)
```

Expected observation:
- The circuit is a Bell-state preparation with two measurements.
- The operator can visually verify the logic before choosing an execution path.

### Step 3: Validate locally with a modern primitive-oriented approach

```python
from qiskit.primitives import StatevectorSampler

sampler = StatevectorSampler()
job = sampler.run([qc])
result = job.result()
print(result)
```

Expected observation:
- The result structure is returned successfully.
- The operator confirms the workflow shape and output plumbing locally.

Review note:
- This validates logic and code structure quickly.
- It does **not** prove hardware behavior, noise sensitivity, or backend feasibility.

### Step 4: Prepare for backend-targeted execution

Before hardware execution, review:
- target backend qubit availability,
- supported instructions and routing constraints,
- expected transpilation overhead,
- runtime access and credentials.

Illustrative transpilation step:

```python
from qiskit import transpile

# backend is intentionally not hardcoded here.
# Select it from the user's authenticated environment and target requirements.
transpiled_qc = transpile(qc, backend=backend, optimization_level=1)
print(transpiled_qc)
```

Expected observation:
- The circuit may change structure after layout and routing.
- Depth and gate count can increase depending on the backend target.

Review note:
- This is the point where backend-aware feasibility becomes visible.
- If the transpiled circuit grows sharply, revisit backend choice or circuit design before running jobs.

### Step 5: Use secure credentials for IBM Quantum access

Good practice:
- Save credentials through the supported IBM Quantum flow.
- Load them from secure local configuration.

Bad practice:

```python
# Do not do this
API_TOKEN = "paste-real-token-here"
```

Expected observation:
- No secrets appear in source, shell history, or review artifacts.

---

## Before/after review summary

| Review point | Weak plan | Improved plan |
| --- | --- | --- |
| Environment hygiene | Implicit | Fresh virtual environment and version check |
| Primitive choice | Vague "execute" wording | Explicit local primitive-based validation |
| Backend awareness | Missing | Backend-targeted transpilation step added |
| Credential safety | Hardcoded token risk | Secure credential-saving path |
| Result interpretation | Simulator and hardware blurred together | Local validation and hardware behavior clearly separated |

---

## What good output looks like

A strong final answer or implementation plan should say something close to this:

> First validate the Bell circuit locally with a current primitive-based workflow, then select a real backend and transpile specifically for that target before any hardware run. Keep IBM credentials out of code, and treat hardware results as backend-dependent rather than guaranteed to match local validation exactly.

That is the standard this skill aims to enforce.
