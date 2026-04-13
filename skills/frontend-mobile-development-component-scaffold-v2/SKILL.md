---
name: frontend-mobile-development-component-scaffold-v2
description: "React/React Native Component Scaffolding workflow skill. Use this skill when the user needs You are a React component architecture expert specializing in scaffolding production-ready, accessible, and performant components. Generate complete component implementations with TypeScript, tests, s and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: frontend
tags: ["frontend-mobile-development-component-scaffold-v2", "frontend-mobile-development-component-scaffold", "you", "are", "react", "component", "architecture", "expert"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-13"
date_updated: "2026-04-13"
---

# React/React Native Component Scaffolding

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills/skills/frontend-mobile-development-component-scaffold` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# React/React Native Component Scaffolding You are a React component architecture expert specializing in scaffolding production-ready, accessible, and performant components. Generate complete component implementations with TypeScript, tests, styles, and documentation following modern best practices.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Context, Requirements, Output Format, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on react/react native component scaffolding tasks or workflows
- Needing guidance, best practices, or checklists for react/react native component scaffolding
- The task is unrelated to react/react native component scaffolding
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: You are a React component architecture expert specializing in scaffolding production-ready, accessible, and performant components. Generate complete component implementations with TypeScript, tests, s.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Analyze Component Requirements `typescript interface ComponentSpec { name: string; type: 'functional' | 'page' | 'layout' | 'form' | 'data-display'; props: PropDefinition[]; state?: StateDefinition[]; hooks?: string[]; styling: 'css-modules' | 'styled-components' | 'tailwind'; platform: 'web' | 'native' | 'universal'; } interface PropDefinition { name: string; type: string; required: boolean; defaultValue?: any; description: string; } class ComponentAnalyzer { parseRequirements(input: string): ComponentSpec { // Extract component specifications from user input return { name: this.extractName(input), type: this.inferType(input), props: this.extractProps(input), state: this.extractState(input), hooks: this.identifyHooks(input), styling: this.detectStylingApproach(), platform: this.detectPlatform() }; } } ### 2.
2. Generate React Component `typescript interface GeneratorOptions { typescript: boolean; testing: boolean; storybook: boolean; accessibility: boolean; } class ReactComponentGenerator { generate(spec: ComponentSpec, options: GeneratorOptions): ComponentFiles { return { component: this.generateComponent(spec, options), types: options.typescript ?
3. this.generateTypes(spec) : null, styles: this.generateStyles(spec), tests: options.testing ?
4. this.generateTests(spec) : null, stories: options.storybook ?
5. this.generateStories(spec) : null, index: this.generateIndex(spec) }; } generateComponent(spec: ComponentSpec, options: GeneratorOptions): string { const imports = this.generateImports(spec, options); const types = options.typescript ?
6. this.generatePropTypes(spec) : ''; const component = this.generateComponentBody(spec, options); const exports = this.generateExports(spec); return ${imports}\n\n${types}\n\n${component}\n\n${exports}; } generateImports(spec: ComponentSpec, options: GeneratorOptions): string { const imports = ["import React, { useState, useEffect } from 'react';"]; if (spec.styling === 'css-modules') { imports.push(import styles from './${spec.name}.module.css';); } else if (spec.styling === 'styled-components') { imports.push("import styled from 'styled-components';"); } if (options.accessibility) { imports.push("import { useA11y } from '@/hooks/useA11y';"); } return imports.join('\n'); } generatePropTypes(spec: ComponentSpec): string { const props = spec.props.map(p => { const optional = p.required ?
7. '' : '?'; const comment = p.description ?

### Imported Workflow Notes

#### Imported: Instructions

### 1. Analyze Component Requirements

```typescript
interface ComponentSpec {
  name: string;
  type: 'functional' | 'page' | 'layout' | 'form' | 'data-display';
  props: PropDefinition[];
  state?: StateDefinition[];
  hooks?: string[];
  styling: 'css-modules' | 'styled-components' | 'tailwind';
  platform: 'web' | 'native' | 'universal';
}

interface PropDefinition {
  name: string;
  type: string;
  required: boolean;
  defaultValue?: any;
  description: string;
}

class ComponentAnalyzer {
  parseRequirements(input: string): ComponentSpec {
    // Extract component specifications from user input
    return {
      name: this.extractName(input),
      type: this.inferType(input),
      props: this.extractProps(input),
      state: this.extractState(input),
      hooks: this.identifyHooks(input),
      styling: this.detectStylingApproach(),
      platform: this.detectPlatform()
    };
  }
}
```

### 2. Generate React Component

```typescript
interface GeneratorOptions {
  typescript: boolean;
  testing: boolean;
  storybook: boolean;
  accessibility: boolean;
}

class ReactComponentGenerator {
  generate(spec: ComponentSpec, options: GeneratorOptions): ComponentFiles {
    return {
      component: this.generateComponent(spec, options),
      types: options.typescript ? this.generateTypes(spec) : null,
      styles: this.generateStyles(spec),
      tests: options.testing ? this.generateTests(spec) : null,
      stories: options.storybook ? this.generateStories(spec) : null,
      index: this.generateIndex(spec)
    };
  }

  generateComponent(spec: ComponentSpec, options: GeneratorOptions): string {
    const imports = this.generateImports(spec, options);
    const types = options.typescript ? this.generatePropTypes(spec) : '';
    const component = this.generateComponentBody(spec, options);
    const exports = this.generateExports(spec);

    return `${imports}\n\n${types}\n\n${component}\n\n${exports}`;
  }

  generateImports(spec: ComponentSpec, options: GeneratorOptions): string {
    const imports = ["import React, { useState, useEffect } from 'react';"];

    if (spec.styling === 'css-modules') {
      imports.push(`import styles from './${spec.name}.module.css';`);
    } else if (spec.styling === 'styled-components') {
      imports.push("import styled from 'styled-components';");
    }

    if (options.accessibility) {
      imports.push("import { useA11y } from '@/hooks/useA11y';");
    }

    return imports.join('\n');
  }

  generatePropTypes(spec: ComponentSpec): string {
    const props = spec.props.map(p => {
      const optional = p.required ? '' : '?';
      const comment = p.description ? `  /** ${p.description} */\n` : '';
      return `${comment}  ${p.name}${optional}: ${p.type};`;
    }).join('\n');

    return `export interface ${spec.name}Props {\n${props}\n}`;
  }

  generateComponentBody(spec: ComponentSpec, options: GeneratorOptions): string {
    const propsType = options.typescript ? `: React.FC<${spec.name}Props>` : '';
    const destructuredProps = spec.props.map(p => p.name).join(', ');

    let body = `export const ${spec.name}${propsType} = ({ ${destructuredProps} }) => {\n`;

    // Add state hooks
    if (spec.state) {
      body += spec.state.map(s =>
        `  const [${s.name}, set${this.capitalize(s.name)}] = useState${options.typescript ? `<${s.type}>` : ''}(${s.initial});\n`
      ).join('');
      body += '\n';
    }

    // Add effects
    if (spec.hooks?.includes('useEffect')) {
      body += `  useEffect(() => {\n`;
      body += `    // TODO: Add effect logic\n`;
      body += `  }, [${destructuredProps}]);\n\n`;
    }

    // Add accessibility
    if (options.accessibility) {
      body += `  const a11yProps = useA11y({\n`;
      body += `    role: '${this.inferAriaRole(spec.type)}',\n`;
      body += `    label: ${spec.props.find(p => p.name === 'label')?.name || `'${spec.name}'`}\n`;
      body += `  });\n\n`;
    }

    // JSX return
    body += `  return (\n`;
    body += this.generateJSX(spec, options);
    body += `  );\n`;
    body += `};`;

    return body;
  }

  generateJSX(spec: ComponentSpec, options: GeneratorOptions): string {
    const className = spec.styling === 'css-modules' ? `className={styles.${this.camelCase(spec.name)}}` : '';
    const a11y = options.accessibility ? '{...a11yProps}' : '';

    return `    <div ${className} ${a11y}>\n` +
           `      {/* TODO: Add component content */}\n` +
           `    </div>\n`;
  }
}
```

### 3. Generate React Native Component

```typescript
class ReactNativeGenerator {
  generateComponent(spec: ComponentSpec): string {
    return `
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  AccessibilityInfo
} from 'react-native';

interface ${spec.name}Props {
${spec.props.map(p => `  ${p.name}${p.required ? '' : '?'}: ${this.mapNativeType(p.type)};`).join('\n')}
}

export const ${spec.name}: React.FC<${spec.name}Props> = ({
  ${spec.props.map(p => p.name).join(',\n  ')}
}) => {
  return (
    <View
      style={styles.container}
      accessible={true}
      accessibilityLabel="${spec.name} component"
    >
      <Text style={styles.text}>
        {/* Component content */}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
});
`;
  }

  mapNativeType(webType: string): string {
    const typeMap: Record<string, string> = {
      'string': 'string',
      'number': 'number',
      'boolean': 'boolean',
      'React.ReactNode': 'React.ReactNode',
      'Function': '() => void'
    };
    return typeMap[webType] || webType;
  }
}
```

### 4. Generate Component Tests

```typescript
class ComponentTestGenerator {
  generateTests(spec: ComponentSpec): string {
    return `
import { render, screen, fireEvent } from '@testing-library/react';
import { ${spec.name} } from './${spec.name}';

describe('${spec.name}', () => {
  const defaultProps = {
${spec.props.filter(p => p.required).map(p => `    ${p.name}: ${this.getMockValue(p.type)},`).join('\n')}
  };

  it('renders without crashing', () => {
    render(<${spec.name} {...defaultProps} />);
    expect(screen.getByRole('${this.inferAriaRole(spec.type)}')).toBeInTheDocument();
  });

  it('displays correct content', () => {
    render(<${spec.name} {...defaultProps} />);
    expect(screen.getByText(/content/i)).toBeVisible();
  });

${spec.props.filter(p => p.type.includes('()') || p.name.startsWith('on')).map(p => `
  it('calls ${p.name} when triggered', () => {
    const mock${this.capitalize(p.name)} = jest.fn();
    render(<${spec.name} {...defaultProps} ${p.name}={mock${this.capitalize(p.name)}} />);

    const trigger = screen.getByRole('button');
    fireEvent.click(trigger);

    expect(mock${this.capitalize(p.name)}).toHaveBeenCalledTimes(1);
  });`).join('\n')}

  it('meets accessibility standards', async () => {
    const { container } = render(<${spec.name} {...defaultProps} />);
    const results = await axe(container);
    expect(results).toHaveNoViolations();
  });
});
`;
  }

  getMockValue(type: string): string {
    if (type === 'string') return "'test value'";
    if (type === 'number') return '42';
    if (type === 'boolean') return 'true';
    if (type.includes('[]')) return '[]';
    if (type.includes('()')) return 'jest.fn()';
    return '{}';
  }
}
```

### 5. Generate Styles

```typescript
class StyleGenerator {
  generateCSSModule(spec: ComponentSpec): string {
    const className = this.camelCase(spec.name);
    return `
.${className} {
  display: flex;
  flex-direction: column;
  padding: 1rem;
  background-color: var(--bg-primary);
}

.${className}Title {
  font-size: 1.5rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 0.5rem;
}

.${className}Content {
  flex: 1;
  color: var(--text-secondary);
}
`;
  }

  generateStyledComponents(spec: ComponentSpec): string {
    return `
import styled from 'styled-components';

export const ${spec.name}Container = styled.div\`
  display: flex;
  flex-direction: column;
  padding: \${({ theme }) => theme.spacing.md};
  background-color: \${({ theme }) => theme.colors.background};
\`;

export const ${spec.name}Title = styled.h2\`
  font-size: \${({ theme }) => theme.fontSize.lg};
  font-weight: 600;
  color: \${({ theme }) => theme.colors.text.primary};
  margin-bottom: \${({ theme }) => theme.spacing.sm};
\`;
`;
  }

  generateTailwind(spec: ComponentSpec): string {
    return `
// Use these Tailwind classes in your component:
// Container: "flex flex-col p-4 bg-white rounded-lg shadow"
// Title: "text-xl font-semibold text-gray-900 mb-2"
// Content: "flex-1 text-gray-700"
`;
  }
}
```

### 6. Generate Storybook Stories

```typescript
class StorybookGenerator {
  generateStories(spec: ComponentSpec): string {
    return `
import type { Meta, StoryObj } from '@storybook/react';
import { ${spec.name} } from './${spec.name}';

const meta: Meta<typeof ${spec.name}> = {
  title: 'Components/${spec.name}',
  component: ${spec.name},
  tags: ['autodocs'],
  argTypes: {
${spec.props.map(p => `    ${p.name}: { control: '${this.inferControl(p.type)}', description: '${p.description}' },`).join('\n')}
  },
};

export default meta;
type Story = StoryObj<typeof ${spec.name}>;

export const Default: Story = {
  args: {
${spec.props.map(p => `    ${p.name}: ${p.defaultValue || this.getMockValue(p.type)},`).join('\n')}
  },
};

export const Interactive: Story = {
  args: {
    ...Default.args,
  },
};
`;
  }

  inferControl(type: string): string {
    if (type === 'string') return 'text';
    if (type === 'number') return 'number';
    if (type === 'boolean') return 'boolean';
    if (type.includes('[]')) return 'object';
    return 'text';
  }
}
```

#### Imported: Context

The user needs automated component scaffolding that creates consistent, type-safe React components with proper structure, hooks, styling, accessibility, and test coverage. Focus on reusable patterns and scalable architecture.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @frontend-mobile-development-component-scaffold-v2 to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/frontend-mobile-development-component-scaffold-v2/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/frontend-mobile-development-component-scaffold-v2/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @frontend-mobile-development-component-scaffold-v2 using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.
- Keep provenance, source commit, and imported file paths visible in notes and PR descriptions.
- Use the checklist, rubric, worksheet, and playbook together instead of relying on a single section in isolation.
- Treat generated examples as scaffolding; adapt them to the concrete task before execution.
- Route to a stronger native skill when architecture, debugging, design, or security concerns become dominant.



## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills/skills/frontend-mobile-development-component-scaffold`, fails to mention provenance, or does not use the support pack at all.
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

#### Imported: Requirements

$ARGUMENTS

#### Imported: Output Format

1. **Component File**: Fully implemented React/React Native component
2. **Type Definitions**: TypeScript interfaces and types
3. **Styles**: CSS modules, styled-components, or Tailwind config
4. **Tests**: Complete test suite with coverage
5. **Stories**: Storybook stories for documentation
6. **Index File**: Barrel exports for clean imports

Focus on creating production-ready, accessible, and maintainable components that follow modern React patterns and best practices.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
