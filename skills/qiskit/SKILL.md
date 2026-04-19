---
name: qiskit
description: "Qiskit workflow skill. Use this skill when the user needs Qiskit is the world's most popular open-source quantum computing framework with 13M+ downloads. Build quantum circuits, optimize for hardware, execute on simulators or real quantum computers, and analyze results. Supports IBM Quantum (100+ qubit systems), IonQ, Amazon Braket, and other providers and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["qiskit", "the", "world", "most", "popular", "open-source", "quantum", "computing"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Qiskit

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/qiskit` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Qiskit

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Common Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You are building or optimizing quantum circuits with Qiskit for simulators or real hardware.
- You need IBM Quantum-style tooling for transpilation, execution, visualization, or algorithm libraries.
- You want guidance on moving from a simple circuit prototype to backend-aware execution.
- Use when the request clearly matches the imported source intent: Qiskit is the world's most popular open-source quantum computing framework with 13M+ downloads. Build quantum circuits, optimize for hardware, execute on simulators or real quantum computers, and analyze results.....
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

## Operating Table

| Situation | Start here | Why it matters |
| --- | --- | --- |
| First-time use | `EXTERNAL_SOURCE.json` | Confirms repository, branch, commit, and imported path before touching the copied workflow |
| Provenance review | `ORIGIN.md` | Gives reviewers a plain-language audit trail for the imported source |
| Workflow execution | `SKILL.md` | Starts with the smallest copied file that materially changes execution |
| Supporting context | `SKILL.md` | Adds the next most relevant copied source file without loading the entire package |
| Handoff decision | `## Related Skills` | Helps the operator switch to a stronger native skill when the task drifts |

## Workflow

This workflow is intentionally editorial and operational at the same time. It keeps the imported source useful to the operator while still satisfying the public intake standards that feed the downstream enhancer flow.

1. Install Qiskit or set up IBM Quantum account → references/setup.md
2. Build a new quantum circuit → references/circuits.md
3. Understand gates and circuit operations → references/circuits.md
4. Run circuits and get measurements → references/primitives.md
5. Compute expectation values → references/primitives.md
6. Optimize circuits for hardware → references/transpilation.md
7. Visualize circuits or results → references/visualization.md

### Imported Workflow Notes

#### Imported: Workflow Decision Guide

**If you need to:**

- Install Qiskit or set up IBM Quantum account → `references/setup.md`
- Build a new quantum circuit → `references/circuits.md`
- Understand gates and circuit operations → `references/circuits.md`
- Run circuits and get measurements → `references/primitives.md`
- Compute expectation values → `references/primitives.md`
- Optimize circuits for hardware → `references/transpilation.md`
- Visualize circuits or results → `references/visualization.md`
- Execute on IBM Quantum hardware → `references/backends.md`
- Connect to third-party providers → `references/backends.md`
- Implement end-to-end quantum workflow → `references/patterns.md`
- Build specific algorithm (VQE, QAOA, etc.) → `references/algorithms.md`
- Solve chemistry or optimization problems → `references/algorithms.md`

#### Imported: Overview

Qiskit is the world's most popular open-source quantum computing framework with 13M+ downloads. Build quantum circuits, optimize for hardware, execute on simulators or real quantum computers, and analyze results. Supports IBM Quantum (100+ qubit systems), IonQ, Amazon Braket, and other providers.

**Key Features:**
- 83x faster transpilation than competitors
- 29% fewer two-qubit gates in optimized circuits
- Backend-agnostic execution (local simulators or cloud hardware)
- Comprehensive algorithm libraries for optimization, chemistry, and ML

#### Imported: Core Capabilities

### 1. Setup and Installation
For detailed installation, authentication, and IBM Quantum account setup:
- **See `references/setup.md`**

Topics covered:
- Installation with uv
- Python environment setup
- IBM Quantum account and API token configuration
- Local vs. cloud execution

### 2. Building Quantum Circuits
For constructing quantum circuits with gates, measurements, and composition:
- **See `references/circuits.md`**

Topics covered:
- Creating circuits with QuantumCircuit
- Single-qubit gates (H, X, Y, Z, rotations, phase gates)
- Multi-qubit gates (CNOT, SWAP, Toffoli)
- Measurements and barriers
- Circuit composition and properties
- Parameterized circuits for variational algorithms

### 3. Primitives (Sampler and Estimator)
For executing quantum circuits and computing results:
- **See `references/primitives.md`**

Topics covered:
- **Sampler**: Get bitstring measurements and probability distributions
- **Estimator**: Compute expectation values of observables
- V2 interface (StatevectorSampler, StatevectorEstimator)
- IBM Quantum Runtime primitives for hardware
- Sessions and Batch modes
- Parameter binding

### 4. Transpilation and Optimization
For optimizing circuits and preparing for hardware execution:
- **See `references/transpilation.md`**

Topics covered:
- Why transpilation is necessary
- Optimization levels (0-3)
- Six transpilation stages (init, layout, routing, translation, optimization, scheduling)
- Advanced features (virtual permutation elision, gate cancellation)
- Common parameters (initial_layout, approximation_degree, seed)
- Best practices for efficient circuits

### 5. Visualization
For displaying circuits, results, and quantum states:
- **See `references/visualization.md`**

Topics covered:
- Circuit drawings (text, matplotlib, LaTeX)
- Result histograms
- Quantum state visualization (Bloch sphere, state city, QSphere)
- Backend topology and error maps
- Customization and styling
- Saving publication-quality figures

### 6. Hardware Backends
For running on simulators and real quantum computers:
- **See `references/backends.md`**

Topics covered:
- IBM Quantum backends and authentication
- Backend properties and status
- Running on real hardware with Runtime primitives
- Job management and queuing
- Session mode (iterative algorithms)
- Batch mode (parallel jobs)
- Local simulators (StatevectorSampler, Aer)
- Third-party providers (IonQ, Amazon Braket)
- Error mitigation strategies

### 7. Qiskit Patterns Workflow
For implementing the four-step quantum computing workflow:
- **See `references/patterns.md`**

Topics covered:
- **Map**: Translate problems to quantum circuits
- **Optimize**: Transpile for hardware
- **Execute**: Run with primitives
- **Post-process**: Extract and analyze results
- Complete VQE example
- Session vs. Batch execution
- Common workflow patterns

### 8. Quantum Algorithms and Applications
For implementing specific quantum algorithms:
- **See `references/algorithms.md`**

Topics covered:
- **Optimization**: VQE, QAOA, Grover's algorithm
- **Chemistry**: Molecular ground states, excited states, Hamiltonians
- **Machine Learning**: Quantum kernels, VQC, QNN
- **Algorithm libraries**: Qiskit Nature, Qiskit ML, Qiskit Optimization
- Physics simulations and benchmarking

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @qiskit to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @qiskit against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @qiskit for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @qiskit using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

### Installation

```bash
uv pip install qiskit
uv pip install "qiskit[visualization]" matplotlib
```

### First Circuit

```python
from qiskit import QuantumCircuit
from qiskit.primitives import StatevectorSampler

# Create Bell state (entangled qubits)
qc = QuantumCircuit(2)
qc.h(0)           # Hadamard on qubit 0
qc.cx(0, 1)       # CNOT from qubit 0 to 1
qc.measure_all()  # Measure both qubits

# Run locally
sampler = StatevectorSampler()
result = sampler.run([qc], shots=1024).result()
counts = result[0].data.meas.get_counts()
print(counts)  # {'00': ~512, '11': ~512}
```

### Visualization

```python
from qiskit.visualization import plot_histogram

qc.draw('mpl')           # Circuit diagram
plot_histogram(counts)   # Results histogram
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Start with simulators: Test locally before using hardware
- Always transpile: Optimize circuits before execution
- Use appropriate primitives:
- Sampler for bitstrings (optimization algorithms)
- Estimator for expectation values (chemistry, physics)
- Choose execution mode:
- Session: Iterative algorithms (VQE, QAOA)

### Imported Operating Notes

#### Imported: Best Practices

### Development Workflow

1. **Start with simulators**: Test locally before using hardware
   ```python
   from qiskit.primitives import StatevectorSampler
   sampler = StatevectorSampler()
   ```

2. **Always transpile**: Optimize circuits before execution
   ```python
   from qiskit import transpile
   qc_optimized = transpile(qc, backend=backend, optimization_level=3)
   ```

3. **Use appropriate primitives**:
   - Sampler for bitstrings (optimization algorithms)
   - Estimator for expectation values (chemistry, physics)

4. **Choose execution mode**:
   - Session: Iterative algorithms (VQE, QAOA)
   - Batch: Independent parallel jobs
   - Single job: One-off experiments

### Performance Optimization

- Use optimization_level=3 for production
- Minimize two-qubit gates (major error source)
- Test with noisy simulators before hardware
- Save and reuse transpiled circuits
- Monitor convergence in variational algorithms

### Hardware Execution

- Check backend status before submitting
- Use least_busy() for testing
- Save job IDs for later retrieval
- Apply error mitigation (resilience_level)
- Start with fewer shots, increase for final runs

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/qiskit`, fails to mention provenance, or does not use any copied source files at all.
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



### Imported Reference Notes

#### Imported: Additional Resources

- **Official Docs**: https://quantum.ibm.com/docs
- **Qiskit Textbook**: https://qiskit.org/learn
- **API Reference**: https://docs.quantum.ibm.com/api/qiskit
- **Patterns Guide**: https://quantum.cloud.ibm.com/docs/en/guides/intro-to-patterns

#### Imported: Common Patterns

### Pattern 1: Simple Circuit Execution

```python
from qiskit import QuantumCircuit, transpile
from qiskit.primitives import StatevectorSampler

qc = QuantumCircuit(2)
qc.h(0)
qc.cx(0, 1)
qc.measure_all()

sampler = StatevectorSampler()
result = sampler.run([qc], shots=1024).result()
counts = result[0].data.meas.get_counts()
```

### Pattern 2: Hardware Execution with Transpilation

```python
from qiskit_ibm_runtime import QiskitRuntimeService, SamplerV2 as Sampler
from qiskit import transpile

service = QiskitRuntimeService()
backend = service.backend("ibm_brisbane")

qc_optimized = transpile(qc, backend=backend, optimization_level=3)

sampler = Sampler(backend)
job = sampler.run([qc_optimized], shots=1024)
result = job.result()
```

### Pattern 3: Variational Algorithm (VQE)

```python
from qiskit_ibm_runtime import Session, EstimatorV2 as Estimator
from scipy.optimize import minimize

with Session(backend=backend) as session:
    estimator = Estimator(session=session)

    def cost_function(params):
        bound_qc = ansatz.assign_parameters(params)
        qc_isa = transpile(bound_qc, backend=backend)
        result = estimator.run([(qc_isa, hamiltonian)]).result()
        return result[0].data.evs

    result = minimize(cost_function, initial_params, method='COBYLA')
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
