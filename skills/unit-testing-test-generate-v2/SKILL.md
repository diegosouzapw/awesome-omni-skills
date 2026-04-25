---
name: unit-testing-test-generate-v2
description: "Automated Unit Test Generation workflow skill. Use this skill when the user needs Generate comprehensive, maintainable unit tests across languages with strong coverage and edge case focus and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: testing-security
tags: ["unit-testing-test-generate-v2", "unit-testing-test-generate", "generate", "comprehensive", "maintainable", "unit", "tests", "across"]
complexity: advanced
risk: safe
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-25"
date_updated: "2026-04-25"
---

# Automated Unit Test Generation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/unit-testing-test-generate` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Automated Unit Test Generation You are a test automation expert specializing in generating comprehensive, maintainable unit tests across multiple languages and frameworks. Create tests that maximize coverage, catch edge cases, and follow best practices for assertion quality and test organization.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Context, Requirements, Output Format, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- You need unit tests for existing code
- You want consistent test structure and coverage
- You need mocks, fixtures, and edge-case validation
- You only need integration or E2E tests
- You cannot access the source code under test
- Tests must be hand-written for compliance reasons

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

1. Analyze Code for Test Generation Scan codebase to identify untested code and generate comprehensive test suites: `python import ast from pathlib import Path from typing import Dict, List, Any class TestGenerator: def _init(self, language: str): self.language = language self.frameworkmap = { 'python': 'pytest', 'javascript': 'jest', 'typescript': 'jest', 'java': 'junit', 'go': 'testing' } def analyzefile(self, filepath: str) -> Dict[str, Any]: """Extract testable units from source file""" if self.language == 'python': return self.analyzepython(filepath) elif self.language in ['javascript', 'typescript']: return self.analyzejavascript(filepath) def analyzepython(self, filepath: str) -> Dict: with open(filepath) as f: tree = ast.parse(f.read()) functions = [] classes = [] for node in ast.walk(tree): if isinstance(node, ast.FunctionDef): functions.append({ 'name': node.name, 'args': [arg.arg for arg in node.args.args], 'returns': ast.unparse(node.returns) if node.returns else None, 'decorators': [ast.unparse(d) for d in node.decoratorlist], 'docstring': ast.getdocstring(node), 'complexity': self.calculatecomplexity(node) }) elif isinstance(node, ast.ClassDef): methods = [n.name for n in node.body if isinstance(n, ast.FunctionDef)] classes.append({ 'name': node.name, 'methods': methods, 'bases': [ast.unparse(base) for base in node.bases] }) return {'functions': functions, 'classes': classes, 'file': filepath} ### 2.
2. Generate Python Tests with pytest python def generatepytesttests(self, analysis: Dict) -> str: """Generate pytest test file from code analysis""" tests = ['import pytest', 'from unittest.mock import Mock, patch', ''] modulename = Path(analysis['file']).stem tests.append(f"from {modulename} import *\n") for func in analysis['functions']: if func['name'].startswith(''): continue testclass = self.generatefunctiontests(func) tests.append(testclass) for cls in analysis['classes']: testclass = self.generateclasstests(cls) tests.append(testclass) return '\n'.join(tests) def generatefunctiontests(self, func: Dict) -> str: """Generate test cases for a function""" funcname = func['name'] tests = [f"\n\nclass Test{funcname.title()}:"] # Happy path test tests.append(f" def test{funcname}success(self):") tests.append(f" result = {funcname}({self.generatemockargs(func['args'])})") tests.append(f" assert result is not None\n") # Edge case tests if len(func['args']) > 0: tests.append(f" def test{funcname}withemptyinput(self):") tests.append(f" with pytest.raises((ValueError, TypeError)):") tests.append(f" {funcname}({self.generateemptyargs(func['args'])})\n") # Exception handling test tests.append(f" def test{funcname}handleserrors(self):") tests.append(f" with pytest.raises(Exception):") tests.append(f" {funcname}({self.generateinvalidargs(func['args'])})\n") return '\n'.join(tests) def generateclasstests(self, cls: Dict) -> str: """Generate test cases for a class""" tests = [f"\n\nclass Test{cls['name']}:"] tests.append(f" @pytest.fixture") tests.append(f" def instance(self):") tests.append(f" return {cls['name']}()\n") for method in cls['methods']: if method.startswith('') and method != 'init': continue tests.append(f" def test{method}(self, instance):") tests.append(f" result = instance.{method}()") tests.append(f" assert result is not None\n") return '\n'.join(tests) ### 3.
3. Generate JavaScript/TypeScript Tests with Jest typescript interface TestCase { name: string; setup?: string; execution: string; assertions: string[]; } class JestTestGenerator { generateTests(functionName: string, params: string[]): string { const tests: TestCase[] = [ { name: ${functionName} returns expected result with valid input, execution: const result = ${functionName}(${this.generateMockParams(params)}), assertions: ['expect(result).toBeDefined()', 'expect(result).not.toBeNull()'] }, { name: ${functionName} handles null input gracefully, execution: const result = ${functionName}(null), assertions: ['expect(result).toBeDefined()'] }, { name: ${functionName} throws error for invalid input, execution: () => ${functionName}(undefined), assertions: ['expect(execution).toThrow()'] } ]; return this.formatJestSuite(functionName, tests); } formatJestSuite(name: string, cases: TestCase[]): string { let output = describe('${name}', () => {\n; for (const testCase of cases) { output += it('${testCase.name}', () => {\n; if (testCase.setup) { output += ${testCase.setup}\n; } output += const execution = ${testCase.execution};\n; for (const assertion of testCase.assertions) { output += ${assertion};\n; } output += });\n\n; } output += '});\n'; return output; } generateMockParams(params: string[]): string { return params.map(p => mock${p.charAt(0).toUpperCase() + p.slice(1)}).join(', '); } } ### 4.
4. Generate React Component Tests typescript function generateReactComponentTest(componentName: string): string { return import { render, screen, fireEvent } from '@testing-library/react'; import { ${componentName} } from './${componentName}'; describe('${componentName}', () => { it('renders without crashing', () => { render(<${componentName} />); expect(screen.getByRole('main')).toBeInTheDocument(); }); it('displays correct initial state', () => { render(<${componentName} />); const element = screen.getByTestId('${componentName.toLowerCase()}'); expect(element).toBeVisible(); }); it('handles user interaction', () => { render(<${componentName} />); const button = screen.getByRole('button'); fireEvent.click(button); expect(screen.getByText(/clicked/i)).toBeInTheDocument(); }); it('updates props correctly', () => { const { rerender } = render(<${componentName} value="initial" />); expect(screen.getByText('initial')).toBeInTheDocument(); rerender(<${componentName} value="updated" />); expect(screen.getByText('updated')).toBeInTheDocument(); }); }); ; } ### 5.
5. Coverage Analysis and Gap Detection python import subprocess import json class CoverageAnalyzer: def analyzecoverage(self, testcommand: str) -> Dict: """Run tests with coverage and identify gaps""" result = subprocess.run( [testcommand, '--coverage', '--json'], captureoutput=True, text=True ) coveragedata = json.loads(result.stdout) gaps = self.identifycoveragegaps(coveragedata) return { 'overallcoverage': coveragedata.get('totals', {}).get('percentcovered', 0), 'uncoveredlines': gaps, 'filesbelowthreshold': self.findlowcoveragefiles(coveragedata, 80) } def identifycoveragegaps(self, coverage: Dict) -> List[Dict]: """Find specific lines/functions without test coverage""" gaps = [] for filepath, data in coverage.get('files', {}).items(): missinglines = data.get('missinglines', []) if missinglines: gaps.append({ 'file': filepath, 'lines': missinglines, 'functions': data.get('excludedlines', []) }) return gaps def generatetestsforgaps(self, gaps: List[Dict]) -> str: """Generate tests specifically for uncovered code""" tests = [] for gap in gaps: testcode = self.createtargetedtest(gap) tests.append(testcode) return '\n\n'.join(tests) ### 6.
6. Mock Generation python def generatemockobjects(self, dependencies: List[str]) -> str: """Generate mock objects for external dependencies""" mocks = ['from unittest.mock import Mock, MagicMock, patch\n'] for dep in dependencies: mocks.append(f"@pytest.fixture") mocks.append(f"def mock{dep}():") mocks.append(f" mock = Mock(spec={dep})") mocks.append(f" mock.method.returnvalue = 'mocked_result'") mocks.append(f" return mock\n") return '\n'.join(mocks) `
7. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.

### Imported Workflow Notes

#### Imported: Instructions

### 1. Analyze Code for Test Generation

Scan codebase to identify untested code and generate comprehensive test suites:

```python
import ast
from pathlib import Path
from typing import Dict, List, Any

class TestGenerator:
    def __init__(self, language: str):
        self.language = language
        self.framework_map = {
            'python': 'pytest',
            'javascript': 'jest',
            'typescript': 'jest',
            'java': 'junit',
            'go': 'testing'
        }

    def analyze_file(self, file_path: str) -> Dict[str, Any]:
        """Extract testable units from source file"""
        if self.language == 'python':
            return self._analyze_python(file_path)
        elif self.language in ['javascript', 'typescript']:
            return self._analyze_javascript(file_path)

    def _analyze_python(self, file_path: str) -> Dict:
        with open(file_path) as f:
            tree = ast.parse(f.read())

        functions = []
        classes = []

        for node in ast.walk(tree):
            if isinstance(node, ast.FunctionDef):
                functions.append({
                    'name': node.name,
                    'args': [arg.arg for arg in node.args.args],
                    'returns': ast.unparse(node.returns) if node.returns else None,
                    'decorators': [ast.unparse(d) for d in node.decorator_list],
                    'docstring': ast.get_docstring(node),
                    'complexity': self._calculate_complexity(node)
                })
            elif isinstance(node, ast.ClassDef):
                methods = [n.name for n in node.body if isinstance(n, ast.FunctionDef)]
                classes.append({
                    'name': node.name,
                    'methods': methods,
                    'bases': [ast.unparse(base) for base in node.bases]
                })

        return {'functions': functions, 'classes': classes, 'file': file_path}
```

### 2. Generate Python Tests with pytest

```python
def generate_pytest_tests(self, analysis: Dict) -> str:
    """Generate pytest test file from code analysis"""
    tests = ['import pytest', 'from unittest.mock import Mock, patch', '']

    module_name = Path(analysis['file']).stem
    tests.append(f"from {module_name} import *\n")

    for func in analysis['functions']:
        if func['name'].startswith('_'):
            continue

        test_class = self._generate_function_tests(func)
        tests.append(test_class)

    for cls in analysis['classes']:
        test_class = self._generate_class_tests(cls)
        tests.append(test_class)

    return '\n'.join(tests)

def _generate_function_tests(self, func: Dict) -> str:
    """Generate test cases for a function"""
    func_name = func['name']
    tests = [f"\n\nclass Test{func_name.title()}:"]

    # Happy path test
    tests.append(f"    def test_{func_name}_success(self):")
    tests.append(f"        result = {func_name}({self._generate_mock_args(func['args'])})")
    tests.append(f"        assert result is not None\n")

    # Edge case tests
    if len(func['args']) > 0:
        tests.append(f"    def test_{func_name}_with_empty_input(self):")
        tests.append(f"        with pytest.raises((ValueError, TypeError)):")
        tests.append(f"            {func_name}({self._generate_empty_args(func['args'])})\n")

    # Exception handling test
    tests.append(f"    def test_{func_name}_handles_errors(self):")
    tests.append(f"        with pytest.raises(Exception):")
    tests.append(f"            {func_name}({self._generate_invalid_args(func['args'])})\n")

    return '\n'.join(tests)

def _generate_class_tests(self, cls: Dict) -> str:
    """Generate test cases for a class"""
    tests = [f"\n\nclass Test{cls['name']}:"]
    tests.append(f"    @pytest.fixture")
    tests.append(f"    def instance(self):")
    tests.append(f"        return {cls['name']}()\n")

    for method in cls['methods']:
        if method.startswith('_') and method != '__init__':
            continue

        tests.append(f"    def test_{method}(self, instance):")
        tests.append(f"        result = instance.{method}()")
        tests.append(f"        assert result is not None\n")

    return '\n'.join(tests)
```

### 3. Generate JavaScript/TypeScript Tests with Jest

```typescript
interface TestCase {
  name: string;
  setup?: string;
  execution: string;
  assertions: string[];
}

class JestTestGenerator {
  generateTests(functionName: string, params: string[]): string {
    const tests: TestCase[] = [
      {
        name: `${functionName} returns expected result with valid input`,
        execution: `const result = ${functionName}(${this.generateMockParams(params)})`,
        assertions: ['expect(result).toBeDefined()', 'expect(result).not.toBeNull()']
      },
      {
        name: `${functionName} handles null input gracefully`,
        execution: `const result = ${functionName}(null)`,
        assertions: ['expect(result).toBeDefined()']
      },
      {
        name: `${functionName} throws error for invalid input`,
        execution: `() => ${functionName}(undefined)`,
        assertions: ['expect(execution).toThrow()']
      }
    ];

    return this.formatJestSuite(functionName, tests);
  }

  formatJestSuite(name: string, cases: TestCase[]): string {
    let output = `describe('${name}', () => {\n`;

    for (const testCase of cases) {
      output += `  it('${testCase.name}', () => {\n`;
      if (testCase.setup) {
        output += `    ${testCase.setup}\n`;
      }
      output += `    const execution = ${testCase.execution};\n`;
      for (const assertion of testCase.assertions) {
        output += `    ${assertion};\n`;
      }
      output += `  });\n\n`;
    }

    output += '});\n';
    return output;
  }

  generateMockParams(params: string[]): string {
    return params.map(p => `mock${p.charAt(0).toUpperCase() + p.slice(1)}`).join(', ');
  }
}
```

### 4. Generate React Component Tests

```typescript
function generateReactComponentTest(componentName: string): string {
  return `
import { render, screen, fireEvent } from '@testing-library/react';
import { ${componentName} } from './${componentName}';

describe('${componentName}', () => {
  it('renders without crashing', () => {
    render(<${componentName} />);
    expect(screen.getByRole('main')).toBeInTheDocument();
  });

  it('displays correct initial state', () => {
    render(<${componentName} />);
    const element = screen.getByTestId('${componentName.toLowerCase()}');
    expect(element).toBeVisible();
  });

  it('handles user interaction', () => {
    render(<${componentName} />);
    const button = screen.getByRole('button');
    fireEvent.click(button);
    expect(screen.getByText(/clicked/i)).toBeInTheDocument();
  });

  it('updates props correctly', () => {
    const { rerender } = render(<${componentName} value="initial" />);
    expect(screen.getByText('initial')).toBeInTheDocument();

    rerender(<${componentName} value="updated" />);
    expect(screen.getByText('updated')).toBeInTheDocument();
  });
});
`;
}
```

### 5. Coverage Analysis and Gap Detection

```python
import subprocess
import json

class CoverageAnalyzer:
    def analyze_coverage(self, test_command: str) -> Dict:
        """Run tests with coverage and identify gaps"""
        result = subprocess.run(
            [test_command, '--coverage', '--json'],
            capture_output=True,
            text=True
        )

        coverage_data = json.loads(result.stdout)
        gaps = self.identify_coverage_gaps(coverage_data)

        return {
            'overall_coverage': coverage_data.get('totals', {}).get('percent_covered', 0),
            'uncovered_lines': gaps,
            'files_below_threshold': self.find_low_coverage_files(coverage_data, 80)
        }

    def identify_coverage_gaps(self, coverage: Dict) -> List[Dict]:
        """Find specific lines/functions without test coverage"""
        gaps = []
        for file_path, data in coverage.get('files', {}).items():
            missing_lines = data.get('missing_lines', [])
            if missing_lines:
                gaps.append({
                    'file': file_path,
                    'lines': missing_lines,
                    'functions': data.get('excluded_lines', [])
                })
        return gaps

    def generate_tests_for_gaps(self, gaps: List[Dict]) -> str:
        """Generate tests specifically for uncovered code"""
        tests = []
        for gap in gaps:
            test_code = self.create_targeted_test(gap)
            tests.append(test_code)
        return '\n\n'.join(tests)
```

### 6. Mock Generation

```python
def generate_mock_objects(self, dependencies: List[str]) -> str:
    """Generate mock objects for external dependencies"""
    mocks = ['from unittest.mock import Mock, MagicMock, patch\n']

    for dep in dependencies:
        mocks.append(f"@pytest.fixture")
        mocks.append(f"def mock_{dep}():")
        mocks.append(f"    mock = Mock(spec={dep})")
        mocks.append(f"    mock.method.return_value = 'mocked_result'")
        mocks.append(f"    return mock\n")

    return '\n'.join(mocks)
```

#### Imported: Context

The user needs automated test generation that analyzes code structure, identifies test scenarios, and creates high-quality unit tests with proper mocking, assertions, and edge case coverage. Focus on framework-specific patterns and maintainable test suites.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @unit-testing-test-generate-v2 to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @unit-testing-test-generate-v2 against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @unit-testing-test-generate-v2 for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @unit-testing-test-generate-v2 using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/unit-testing-test-generate`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@ui-tokens-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-ux-designer-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-ux-pro-max-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@ui-visual-validator-v2` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Requirements

$ARGUMENTS

#### Imported: Output Format

1. **Test Files**: Complete test suites ready to run
2. **Coverage Report**: Current coverage with gaps identified
3. **Mock Objects**: Fixtures for external dependencies
4. **Test Documentation**: Explanation of test scenarios
5. **CI Integration**: Commands to run tests in pipeline

Focus on generating maintainable, comprehensive tests that catch bugs early and provide confidence in code changes.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
