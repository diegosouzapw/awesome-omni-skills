---
name: cirq
description: "Cirq - Quantum Computing with Python workflow skill. Use this skill when the user needs Cirq is Google Quantum AI's open-source framework for designing, simulating, and running quantum circuits on quantum computers and simulators and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: devops
tags: ["cirq", "google", "quantum", "open-source", "framework", "for", "designing", "simulating"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# Cirq - Quantum Computing with Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/cirq` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Cirq - Quantum Computing with Python Cirq is Google Quantum AI's open-source framework for designing, simulating, and running quantum circuits on quantum computers and simulators.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Common Patterns, Common Issues, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You are designing, simulating, or executing quantum circuits with the Cirq ecosystem.
- You need Google Quantum AI-style primitives, parameterized circuits, or integrations like cirq-google and cirq-ionq.
- You are prototyping or teaching quantum workflows in Python and want concrete circuit examples.
- Use when the request clearly matches the imported source intent: Cirq is Google Quantum AI's open-source framework for designing, simulating, and running quantum circuits on quantum computers and simulators.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.
- Use when provenance needs to stay visible in the answer, PR, or review packet.

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

1. bash uv pip install cirq For hardware integration: bash # Google Quantum Engine uv pip install cirq-google # IonQ uv pip install cirq-ionq # AQT (Alpine Quantum Technologies) uv pip install cirq-aqt # Pasqal uv pip install cirq-pasqal # Azure Quantum uv pip install azure-quantum cirq
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview, playbook, and source summary before loading any upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the checklist, rubric, and expected evidence for the task.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Installation

```bash
uv pip install cirq
```

For hardware integration:
```bash
# Google Quantum Engine
uv pip install cirq-google

# IonQ
uv pip install cirq-ionq

# AQT (Alpine Quantum Technologies)
uv pip install cirq-aqt

# Pasqal
uv pip install cirq-pasqal

# Azure Quantum
uv pip install azure-quantum cirq
```

#### Imported: Core Capabilities

### Circuit Building
For comprehensive information about building quantum circuits, including qubits, gates, operations, custom gates, and circuit patterns, see:
- **references/building.md** - Complete guide to circuit construction

Common topics:
- Qubit types (GridQubit, LineQubit, NamedQubit)
- Single and two-qubit gates
- Parameterized gates and operations
- Custom gate decomposition
- Circuit organization with moments
- Standard circuit patterns (Bell states, GHZ, QFT)
- Import/export (OpenQASM, JSON)
- Working with qudits and observables

### Simulation
For detailed information about simulating quantum circuits, including exact simulation, noisy simulation, parameter sweeps, and the Quantum Virtual Machine, see:
- **references/simulation.md** - Complete guide to quantum simulation

Common topics:
- Exact simulation (state vector, density matrix)
- Sampling and measurements
- Parameter sweeps (single and multiple parameters)
- Noisy simulation
- State histograms and visualization
- Quantum Virtual Machine (QVM)
- Expectation values and observables
- Performance optimization

### Circuit Transformation
For information about optimizing, compiling, and manipulating quantum circuits, see:
- **references/transformation.md** - Complete guide to circuit transformations

Common topics:
- Transformer framework
- Gate decomposition
- Circuit optimization (merge gates, eject Z gates, drop negligible operations)
- Circuit compilation for hardware
- Qubit routing and SWAP insertion
- Custom transformers
- Transformation pipelines

### Hardware Integration
For information about running circuits on real quantum hardware from various providers, see:
- **references/hardware.md** - Complete guide to hardware integration

Supported providers:
- **Google Quantum AI** (cirq-google) - Sycamore, Weber processors
- **IonQ** (cirq-ionq) - Trapped ion quantum computers
- **Azure Quantum** (azure-quantum) - IonQ and Honeywell backends
- **AQT** (cirq-aqt) - Alpine Quantum Technologies
- **Pasqal** (cirq-pasqal) - Neutral atom quantum computers

Topics include device representation, qubit selection, authentication, job management, and circuit optimization for hardware.

### Noise Modeling
For information about modeling noise, noisy simulation, characterization, and error mitigation, see:
- **references/noise.md** - Complete guide to noise modeling

Common topics:
- Noise channels (depolarizing, amplitude damping, phase damping)
- Noise models (constant, gate-specific, qubit-specific, thermal)
- Adding noise to circuits
- Readout noise
- Noise characterization (randomized benchmarking, XEB)
- Noise visualization (heatmaps)
- Error mitigation techniques

### Quantum Experiments
For information about designing experiments, parameter sweeps, data collection, and using the ReCirq framework, see:
- **references/experiments.md** - Complete guide to quantum experiments

Common topics:
- Experiment design patterns
- Parameter sweeps and data collection
- ReCirq framework structure
- Common algorithms (VQE, QAOA, QPE)
- Data analysis and visualization
- Statistical analysis and fidelity estimation
- Parallel data collection

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @cirq to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/cirq/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/cirq/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @cirq using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

### Basic Circuit

```python
import cirq
import numpy as np

# Create qubits
q0, q1 = cirq.LineQubit.range(2)

# Build circuit
circuit = cirq.Circuit(
    cirq.H(q0),              # Hadamard on q0
    cirq.CNOT(q0, q1),       # CNOT with q0 control, q1 target
    cirq.measure(q0, q1, key='result')
)

print(circuit)

# Simulate
simulator = cirq.Simulator()
result = simulator.run(circuit, repetitions=1000)

# Display results
print(result.histogram(key='result'))
```

### Parameterized Circuit

```python
import sympy

# Define symbolic parameter
theta = sympy.Symbol('theta')

# Create parameterized circuit
circuit = cirq.Circuit(
    cirq.ry(theta)(q0),
    cirq.measure(q0, key='m')
)

# Sweep over parameter values
sweep = cirq.Linspace('theta', start=0, stop=2*np.pi, length=20)
results = simulator.run_sweep(circuit, params=sweep, repetitions=1000)

# Process results
for params, result in zip(sweep, results):
    theta_val = params['theta']
    counts = result.histogram(key='m')
    print(f"θ={theta_val:.2f}: {counts}")
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Circuit Design
- Use appropriate qubit types for your topology
- Keep circuits modular and reusable
- Label measurements with descriptive keys
- Validate circuits against device constraints before execution
- Simulation
- Use state vector simulation for pure states (more efficient)

### Imported Operating Notes

#### Imported: Best Practices

1. **Circuit Design**
   - Use appropriate qubit types for your topology
   - Keep circuits modular and reusable
   - Label measurements with descriptive keys
   - Validate circuits against device constraints before execution

2. **Simulation**
   - Use state vector simulation for pure states (more efficient)
   - Use density matrix simulation only when needed (mixed states, noise)
   - Leverage parameter sweeps instead of individual runs
   - Monitor memory usage for large systems (2^n grows quickly)

3. **Hardware Execution**
   - Always test on simulators first
   - Select best qubits using calibration data
   - Optimize circuits for target hardware gateset
   - Implement error mitigation for production runs
   - Store expensive hardware results immediately

4. **Circuit Optimization**
   - Start with high-level built-in transformers
   - Chain multiple optimizations in sequence
   - Track depth and gate count reduction
   - Validate correctness after transformation

5. **Noise Modeling**
   - Use realistic noise models from calibration data
   - Include all error sources (gate, decoherence, readout)
   - Characterize before mitigating
   - Keep circuits shallow to minimize noise accumulation

6. **Experiments**
   - Structure experiments with clear separation (data generation, collection, analysis)
   - Use ReCirq patterns for reproducibility
   - Save intermediate results frequently
   - Parallelize independent tasks
   - Document thoroughly with metadata

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/cirq`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Additional Resources

- **Official Documentation**: https://quantumai.google/cirq
- **API Reference**: https://quantumai.google/reference/python/cirq
- **Tutorials**: https://quantumai.google/cirq/tutorials
- **Examples**: https://github.com/quantumlib/Cirq/tree/master/examples
- **ReCirq**: https://github.com/quantumlib/ReCirq

#### Imported: Common Patterns

### Variational Algorithm Template

```python
import scipy.optimize

def variational_algorithm(ansatz, cost_function, initial_params):
    """Template for variational quantum algorithms."""

    def objective(params):
        circuit = ansatz(params)
        simulator = cirq.Simulator()
        result = simulator.simulate(circuit)
        return cost_function(result)

    # Optimize
    result = scipy.optimize.minimize(
        objective,
        initial_params,
        method='COBYLA'
    )

    return result

# Define ansatz
def my_ansatz(params):
    q = cirq.LineQubit(0)
    return cirq.Circuit(
        cirq.ry(params[0])(q),
        cirq.rz(params[1])(q)
    )

# Define cost function
def my_cost(result):
    state = result.final_state_vector
    # Calculate cost based on state
    return np.real(state[0])

# Run optimization
result = variational_algorithm(my_ansatz, my_cost, [0.0, 0.0])
```

### Hardware Execution Template

```python
def run_on_hardware(circuit, provider='google', device_name='weber', repetitions=1000):
    """Template for running on quantum hardware."""

    if provider == 'google':
        import cirq_google
        engine = cirq_google.get_engine()
        processor = engine.get_processor(device_name)
        job = processor.run(circuit, repetitions=repetitions)
        return job.results()[0]

    elif provider == 'ionq':
        import cirq_ionq
        service = cirq_ionq.Service()
        result = service.run(circuit, repetitions=repetitions, target='qpu')
        return result

    elif provider == 'azure':
        from azure.quantum.cirq import AzureQuantumService
        # Setup workspace...
        service = AzureQuantumService(workspace)
        result = service.run(circuit, repetitions=repetitions, target='ionq.qpu')
        return result

    else:
        raise ValueError(f"Unknown provider: {provider}")
```

### Noise Study Template

```python
def noise_comparison_study(circuit, noise_levels):
    """Compare circuit performance at different noise levels."""

    results = {}

    for noise_level in noise_levels:
        # Create noisy circuit
        noisy_circuit = circuit.with_noise(cirq.depolarize(p=noise_level))

        # Simulate
        simulator = cirq.DensityMatrixSimulator()
        result = simulator.run(noisy_circuit, repetitions=1000)

        # Analyze
        results[noise_level] = {
            'histogram': result.histogram(key='result'),
            'dominant_state': max(
                result.histogram(key='result').items(),
                key=lambda x: x[1]
            )
        }

    return results

# Run study
noise_levels = [0.0, 0.001, 0.01, 0.05, 0.1]
results = noise_comparison_study(circuit, noise_levels)
```

#### Imported: Common Issues

**Circuit too deep for hardware:**
- Use circuit optimization transformers to reduce depth
- See `transformation.md` for optimization techniques

**Memory issues with simulation:**
- Switch from density matrix to state vector simulator
- Reduce number of qubits or use stabilizer simulator for Clifford circuits

**Device validation errors:**
- Check qubit connectivity with device.metadata.nx_graph
- Decompose gates to device-native gateset
- See `hardware.md` for device-specific compilation

**Noisy simulation too slow:**
- Density matrix simulation is O(2^2n) - consider reducing qubits
- Use noise models selectively on critical operations only
- See `simulation.md` for performance optimization

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
