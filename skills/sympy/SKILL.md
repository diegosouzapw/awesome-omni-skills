---
name: sympy
description: "SymPy - Symbolic Mathematics in Python workflow skill. Use this skill when the user needs SymPy is a Python library for symbolic mathematics that enables exact computation using mathematical symbols rather than numerical approximations and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: development
tags: ["sympy", "python", "library", "for", "symbolic", "mathematics", "enables", "exact"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# SymPy - Symbolic Mathematics in Python

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/sympy` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# SymPy - Symbolic Mathematics in Python

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Capabilities, Working with SymPy: Best Practices, Common Use Case Patterns, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Solving equations symbolically (algebraic, differential, systems of equations)
- Performing calculus operations (derivatives, integrals, limits, series)
- Manipulating and simplifying algebraic expressions
- Working with matrices and linear algebra symbolically
- Doing physics calculations (mechanics, quantum mechanics, vector analysis)
- Number theory computations (primes, factorization, modular arithmetic)

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

1. ### With NumPy python import numpy as np from sympy import symbols, lambdify x = symbols('x') expr = x2 + 2x + 1 f = lambdify(x, expr, 'numpy') xarray = np.linspace(-5, 5, 100) yarray = f(xarray) ### With Matplotlib python import matplotlib.pyplot as plt import numpy as np from sympy import symbols, lambdify, sin x = symbols('x') expr = sin(x) / x f = lambdify(x, expr, 'numpy') xvals = np.linspace(-10, 10, 1000) yvals = f(xvals) plt.plot(xvals, yvals) plt.show() ### With SciPy python from scipy.optimize import fsolve from sympy import symbols, lambdify # Define equation symbolically x = symbols('x') equation = x3 - 2x - 5 # Convert to numerical function f = lambdify(x, equation, 'numpy') # Solve numerically with initial guess solution = fsolve(f, 2)
2. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
3. Read the overview and provenance files before loading any copied upstream support files.
4. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
5. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
6. Validate the result against the upstream expectations and the evidence you can point to in the copied files.
7. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.

### Imported Workflow Notes

#### Imported: Integration with Scientific Workflows

### With NumPy

```python
import numpy as np
from sympy import symbols, lambdify

x = symbols('x')
expr = x**2 + 2*x + 1

f = lambdify(x, expr, 'numpy')
x_array = np.linspace(-5, 5, 100)
y_array = f(x_array)
```

### With Matplotlib

```python
import matplotlib.pyplot as plt
import numpy as np
from sympy import symbols, lambdify, sin

x = symbols('x')
expr = sin(x) / x

f = lambdify(x, expr, 'numpy')
x_vals = np.linspace(-10, 10, 1000)
y_vals = f(x_vals)

plt.plot(x_vals, y_vals)
plt.show()
```

### With SciPy

```python
from scipy.optimize import fsolve
from sympy import symbols, lambdify

# Define equation symbolically
x = symbols('x')
equation = x**3 - 2*x - 5

# Convert to numerical function
f = lambdify(x, equation, 'numpy')

# Solve numerically with initial guess
solution = fsolve(f, 2)
```

#### Imported: Overview

SymPy is a Python library for symbolic mathematics that enables exact computation using mathematical symbols rather than numerical approximations. This skill provides comprehensive guidance for performing symbolic algebra, calculus, linear algebra, equation solving, physics calculations, and code generation using SymPy.

#### Imported: Core Capabilities

### 1. Symbolic Computation Basics

**Creating symbols and expressions:**
```python
from sympy import symbols, Symbol
x, y, z = symbols('x y z')
expr = x**2 + 2*x + 1

# With assumptions
x = symbols('x', real=True, positive=True)
n = symbols('n', integer=True)
```

**Simplification and manipulation:**
```python
from sympy import simplify, expand, factor, cancel
simplify(sin(x)**2 + cos(x)**2)  # Returns 1
expand((x + 1)**3)  # x**3 + 3*x**2 + 3*x + 1
factor(x**2 - 1)    # (x - 1)*(x + 1)
```

**For detailed basics:** See `references/core-capabilities.md`

### 2. Calculus

**Derivatives:**
```python
from sympy import diff
diff(x**2, x)        # 2*x
diff(x**4, x, 3)     # 24*x (third derivative)
diff(x**2*y**3, x, y)  # 6*x*y**2 (partial derivatives)
```

**Integrals:**
```python
from sympy import integrate, oo
integrate(x**2, x)              # x**3/3 (indefinite)
integrate(x**2, (x, 0, 1))      # 1/3 (definite)
integrate(exp(-x), (x, 0, oo))  # 1 (improper)
```

**Limits and Series:**
```python
from sympy import limit, series
limit(sin(x)/x, x, 0)  # 1
series(exp(x), x, 0, 6)  # 1 + x + x**2/2 + x**3/6 + x**4/24 + x**5/120 + O(x**6)
```

**For detailed calculus operations:** See `references/core-capabilities.md`

### 3. Equation Solving

**Algebraic equations:**
```python
from sympy import solveset, solve, Eq
solveset(x**2 - 4, x)  # {-2, 2}
solve(Eq(x**2, 4), x)  # [-2, 2]
```

**Systems of equations:**
```python
from sympy import linsolve, nonlinsolve
linsolve([x + y - 2, x - y], x, y)  # {(1, 1)} (linear)
nonlinsolve([x**2 + y - 2, x + y**2 - 3], x, y)  # (nonlinear)
```

**Differential equations:**
```python
from sympy import Function, dsolve, Derivative
f = symbols('f', cls=Function)
dsolve(Derivative(f(x), x) - f(x), f(x))  # Eq(f(x), C1*exp(x))
```

**For detailed solving methods:** See `references/core-capabilities.md`

### 4. Matrices and Linear Algebra

**Matrix creation and operations:**
```python
from sympy import Matrix, eye, zeros
M = Matrix([[1, 2], [3, 4]])
M_inv = M**-1  # Inverse
M.det()        # Determinant
M.T            # Transpose
```

**Eigenvalues and eigenvectors:**
```python
eigenvals = M.eigenvals()  # {eigenvalue: multiplicity}
eigenvects = M.eigenvects()  # [(eigenval, mult, [eigenvectors])]
P, D = M.diagonalize()  # M = P*D*P^-1
```

**Solving linear systems:**
```python
A = Matrix([[1, 2], [3, 4]])
b = Matrix([5, 6])
x = A.solve(b)  # Solve Ax = b
```

**For comprehensive linear algebra:** See `references/matrices-linear-algebra.md`

### 5. Physics and Mechanics

**Classical mechanics:**
```python
from sympy.physics.mechanics import dynamicsymbols, LagrangesMethod
from sympy import symbols

# Define system
q = dynamicsymbols('q')
m, g, l = symbols('m g l')

# Lagrangian (T - V)
L = m*(l*q.diff())**2/2 - m*g*l*(1 - cos(q))

# Apply Lagrange's method
LM = LagrangesMethod(L, [q])
```

**Vector analysis:**
```python
from sympy.physics.vector import ReferenceFrame, dot, cross
N = ReferenceFrame('N')
v1 = 3*N.x + 4*N.y
v2 = 1*N.x + 2*N.z
dot(v1, v2)  # Dot product
cross(v1, v2)  # Cross product
```

**Quantum mechanics:**
```python
from sympy.physics.quantum import Ket, Bra, Commutator
psi = Ket('psi')
A = Operator('A')
comm = Commutator(A, B).doit()
```

**For detailed physics capabilities:** See `references/physics-mechanics.md`

### 6. Advanced Mathematics

The skill includes comprehensive support for:

- **Geometry:** 2D/3D analytic geometry, points, lines, circles, polygons, transformations
- **Number Theory:** Primes, factorization, GCD/LCM, modular arithmetic, Diophantine equations
- **Combinatorics:** Permutations, combinations, partitions, group theory
- **Logic and Sets:** Boolean logic, set theory, finite and infinite sets
- **Statistics:** Probability distributions, random variables, expectation, variance
- **Special Functions:** Gamma, Bessel, orthogonal polynomials, hypergeometric functions
- **Polynomials:** Polynomial algebra, roots, factorization, Groebner bases

**For detailed advanced topics:** See `references/advanced-topics.md`

### 7. Code Generation and Output

**Convert to executable functions:**
```python
from sympy import lambdify
import numpy as np

expr = x**2 + 2*x + 1
f = lambdify(x, expr, 'numpy')  # Create NumPy function
x_vals = np.linspace(0, 10, 100)
y_vals = f(x_vals)  # Fast numerical evaluation
```

**Generate C/Fortran code:**
```python
from sympy.utilities.codegen import codegen
[(c_name, c_code), (h_name, h_header)] = codegen(
    ('my_func', expr), 'C'
)
```

**LaTeX output:**
```python
from sympy import latex
latex_str = latex(expr)  # Convert to LaTeX for documents
```

**For comprehensive code generation:** See `references/code-generation-printing.md`

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @sympy to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @sympy against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @sympy for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @sympy using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Getting Started Examples

### Example 1: Solve Quadratic Equation
```python
from sympy import symbols, solve, sqrt
x = symbols('x')
solution = solve(x**2 - 5*x + 6, x)
# [2, 3]
```

### Example 2: Calculate Derivative
```python
from sympy import symbols, diff, sin
x = symbols('x')
f = sin(x**2)
df_dx = diff(f, x)
# 2*x*cos(x**2)
```

### Example 3: Evaluate Integral
```python
from sympy import symbols, integrate, exp
x = symbols('x')
integral = integrate(x * exp(-x**2), (x, 0, oo))
# 1/2
```

### Example 4: Matrix Eigenvalues
```python
from sympy import Matrix
M = Matrix([[1, 2], [2, 1]])
eigenvals = M.eigenvals()
# {3: 1, -1: 1}
```

### Example 5: Generate Python Function
```python
from sympy import symbols, lambdify
import numpy as np
x = symbols('x')
expr = x**2 + 2*x + 1
f = lambdify(x, expr, 'numpy')
f(np.array([1, 2, 3]))
# array([ 4,  9, 16])
```

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Point directly at the copied upstream files that justify the workflow instead of relying on generic review boilerplate.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/sympy`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Troubleshooting Common Issues

1. **"NameError: name 'x' is not defined"**
   - Solution: Always define symbols using `symbols()` before use

2. **Unexpected numerical results**
   - Issue: Using floating-point numbers like `0.5` instead of `Rational(1, 2)`
   - Solution: Use `Rational()` or `S()` for exact arithmetic

3. **Slow performance in loops**
   - Issue: Using `subs()` and `evalf()` repeatedly
   - Solution: Use `lambdify()` to create a fast numerical function

4. **"Can't solve this equation"**
   - Try different solvers: `solve`, `solveset`, `nsolve` (numerical)
   - Check if the equation is solvable algebraically
   - Use numerical methods if no closed-form solution exists

5. **Simplification not working as expected**
   - Try different simplification functions: `simplify`, `factor`, `expand`, `trigsimp`
   - Add assumptions to symbols (e.g., `positive=True`)
   - Use `simplify(expr, force=True)` for aggressive simplification

## Related Skills

- `@shopify-apps` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shopify-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@shopify-development` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@signup-flow-cro` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Reference Files Structure

This skill uses modular reference files for different capabilities:

1. **`core-capabilities.md`**: Symbols, algebra, calculus, simplification, equation solving
   - Load when: Basic symbolic computation, calculus, or solving equations

2. **`matrices-linear-algebra.md`**: Matrix operations, eigenvalues, linear systems
   - Load when: Working with matrices or linear algebra problems

3. **`physics-mechanics.md`**: Classical mechanics, quantum mechanics, vectors, units
   - Load when: Physics calculations or mechanics problems

4. **`advanced-topics.md`**: Geometry, number theory, combinatorics, logic, statistics
   - Load when: Advanced mathematical topics beyond basic algebra and calculus

5. **`code-generation-printing.md`**: Lambdify, codegen, LaTeX output, printing
   - Load when: Converting expressions to code or generating formatted output

#### Imported: Quick Reference: Most Common Functions

```python
# Symbols
from sympy import symbols, Symbol
x, y = symbols('x y')

# Basic operations
from sympy import simplify, expand, factor, collect, cancel
from sympy import sqrt, exp, log, sin, cos, tan, pi, E, I, oo

# Calculus
from sympy import diff, integrate, limit, series, Derivative, Integral

# Solving
from sympy import solve, solveset, linsolve, nonlinsolve, dsolve

# Matrices
from sympy import Matrix, eye, zeros, ones, diag

# Logic and sets
from sympy import And, Or, Not, Implies, FiniteSet, Interval, Union

# Output
from sympy import latex, pprint, lambdify, init_printing

# Utilities
from sympy import evalf, N, nsimplify
```

#### Imported: Additional Resources

- Official Documentation: https://docs.sympy.org/
- Tutorial: https://docs.sympy.org/latest/tutorials/intro-tutorial/index.html
- API Reference: https://docs.sympy.org/latest/reference/index.html
- Examples: https://github.com/sympy/sympy/tree/master/examples

#### Imported: Working with SymPy: Best Practices

### 1. Always Define Symbols First

```python
from sympy import symbols
x, y, z = symbols('x y z')
# Now x, y, z can be used in expressions
```

### 2. Use Assumptions for Better Simplification

```python
x = symbols('x', positive=True, real=True)
sqrt(x**2)  # Returns x (not Abs(x)) due to positive assumption
```

Common assumptions: `real`, `positive`, `negative`, `integer`, `rational`, `complex`, `even`, `odd`

### 3. Use Exact Arithmetic

```python
from sympy import Rational, S
# Correct (exact):
expr = Rational(1, 2) * x
expr = S(1)/2 * x

# Incorrect (floating-point):
expr = 0.5 * x  # Creates approximate value
```

### 4. Numerical Evaluation When Needed

```python
from sympy import pi, sqrt
result = sqrt(8) + pi
result.evalf()    # 5.96371554103586
result.evalf(50)  # 50 digits of precision
```

### 5. Convert to NumPy for Performance

```python
# Slow for many evaluations:
for x_val in range(1000):
    result = expr.subs(x, x_val).evalf()

# Fast:
f = lambdify(x, expr, 'numpy')
results = f(np.arange(1000))
```

### 6. Use Appropriate Solvers

- `solveset`: Algebraic equations (primary)
- `linsolve`: Linear systems
- `nonlinsolve`: Nonlinear systems
- `dsolve`: Differential equations
- `solve`: General purpose (legacy, but flexible)

#### Imported: Common Use Case Patterns

### Pattern 1: Solve and Verify

```python
from sympy import symbols, solve, simplify
x = symbols('x')

# Solve equation
equation = x**2 - 5*x + 6
solutions = solve(equation, x)  # [2, 3]

# Verify solutions
for sol in solutions:
    result = simplify(equation.subs(x, sol))
    assert result == 0
```

### Pattern 2: Symbolic to Numeric Pipeline

```python
# 1. Define symbolic problem
x, y = symbols('x y')
expr = sin(x) + cos(y)

# 2. Manipulate symbolically
simplified = simplify(expr)
derivative = diff(simplified, x)

# 3. Convert to numerical function
f = lambdify((x, y), derivative, 'numpy')

# 4. Evaluate numerically
results = f(x_data, y_data)
```

### Pattern 3: Document Mathematical Results

```python
# Compute result symbolically
integral_expr = Integral(x**2, (x, 0, 1))
result = integral_expr.doit()

# Generate documentation
print(f"LaTeX: {latex(integral_expr)} = {latex(result)}")
print(f"Pretty: {pretty(integral_expr)} = {pretty(result)}")
print(f"Numerical: {result.evalf()}")
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
