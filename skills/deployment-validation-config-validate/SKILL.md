---
name: deployment-validation-config-validate
description: "Configuration Validation workflow skill. Use this skill when the user needs You are a configuration management expert specializing in validating, testing, and ensuring the correctness of application configurations. Create comprehensive validation schemas, implement configurat and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: devops
tags: ["deployment-validation-config-validate", "you", "are", "configuration", "management", "expert", "specializing", "validating"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-14"
---

# Configuration Validation

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/deployment-validation-config-validate` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Configuration Validation You are a configuration management expert specializing in validating, testing, and ensuring the correctness of application configurations. Create comprehensive validation schemas, implement configuration testing strategies, and ensure configurations are secure, consistent, and error-free across all environments.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Context, Requirements, Output Format, Limitations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Working on configuration validation tasks or workflows
- Needing guidance, best practices, or checklists for configuration validation
- The task is unrelated to configuration validation
- You need a different domain or tool outside this scope
- Use when the request clearly matches the imported source intent: You are a configuration management expert specializing in validating, testing, and ensuring the correctness of application configurations. Create comprehensive validation schemas, implement configurat.
- Use when the operator should preserve upstream workflow detail instead of rewriting the process from scratch.

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

1. Configuration Analysis Analyze existing configuration structure and identify validation needs: `python import os import yaml import json from pathlib import Path from typing import Dict, List, Any class ConfigurationAnalyzer: def analyzeproject(self, projectpath: str) -> Dict[str, Any]: analysis = { 'configfiles': self.findconfigfiles(projectpath), 'securityissues': self.checksecurityissues(projectpath), 'consistencyissues': self.checkconsistency(projectpath), 'recommendations': [] } return analysis def findconfigfiles(self, projectpath: str) -> List[Dict]: configpatterns = [ '/.json', '/.yaml', '/.yml', '/.toml', '/.ini', '/.env', '/config.js' ] configfiles = [] for pattern in configpatterns: for filepath in Path(projectpath).glob(pattern): if not self.shouldignore(filepath): configfiles.append({ 'path': str(filepath), 'type': self.detectconfigtype(filepath), 'environment': self.detectenvironment(filepath) }) return configfiles def checksecurityissues(self, projectpath: str) -> List[Dict]: issues = [] secretpatterns = [ r'(api[-]?key|apikey)', r'(secret|password|passwd)', r'(token|auth)', r'(aws[-]?access)' ] for configfile in self.findconfigfiles(projectpath): content = Path(configfile['path']).readtext() for pattern in secretpatterns: if re.search(pattern, content, re.IGNORECASE): if self.lookslikerealsecret(content, pattern): issues.append({ 'file': configfile['path'], 'type': 'potentialsecret', 'severity': 'high' }) return issues ### 2.
2. Schema Validation Implement configuration schema validation with JSON Schema: typescript import Ajv from 'ajv'; import ajvFormats from 'ajv-formats'; import { JSONSchema7 } from 'json-schema'; interface ValidationResult { valid: boolean; errors?: Array<{ path: string; message: string; keyword: string; }>; } export class ConfigValidator { private ajv: Ajv; constructor() { this.ajv = new Ajv({ allErrors: true, strict: false, coerceTypes: true }); ajvFormats(this.ajv); this.addCustomFormats(); } private addCustomFormats() { this.ajv.addFormat('url-https', { type: 'string', validate: (data: string) => { try { return new URL(data).protocol === 'https:'; } catch { return false; } } }); this.ajv.addFormat('port', { type: 'number', validate: (data: number) => data >= 1 && data <= 65535 }); this.ajv.addFormat('duration', { type: 'string', validate: /^\d+[smhd]$/ }); } validate(configData: any, schemaName: string): ValidationResult { const validate = this.ajv.getSchema(schemaName); if (!validate) throw new Error(Schema '${schemaName}' not found); const valid = validate(configData); if (!valid && validate.errors) { return { valid: false, errors: validate.errors.map(error => ({ path: error.instancePath || '/', message: error.message || 'Validation error', keyword: error.keyword })) }; } return { valid: true }; } } // Example schema export const schemas = { database: { type: 'object', properties: { host: { type: 'string', format: 'hostname' }, port: { type: 'integer', format: 'port' }, database: { type: 'string', minLength: 1 }, user: { type: 'string', minLength: 1 }, password: { type: 'string', minLength: 8 }, ssl: { type: 'object', properties: { enabled: { type: 'boolean' } }, required: ['enabled'] } }, required: ['host', 'port', 'database', 'user', 'password'] } }; ### 3.
3. Environment-Specific Validation python from typing import Dict, List, Any class EnvironmentValidator: def init(self): self.environments = ['development', 'staging', 'production'] self.environmentrules = { 'development': { 'allowdebug': True, 'requirehttps': False, 'minpasswordlength': 8 }, 'production': { 'allowdebug': False, 'requirehttps': True, 'minpasswordlength': 16, 'requireencryption': True } } def validateconfig(self, config: Dict, environment: str) -> List[Dict]: if environment not in self.environmentrules: raise ValueError(f"Unknown environment: {environment}") rules = self.environmentrules[environment] violations = [] if not rules['allowdebug'] and config.get('debug', False): violations.append({ 'rule': 'nodebuginproduction', 'message': 'Debug mode not allowed in production', 'severity': 'critical' }) if rules['requirehttps']: urls = self.extracturls(config) for urlpath, url in urls: if url.startswith('http://') and 'localhost' not in url: violations.append({ 'rule': 'requirehttps', 'message': f'HTTPS required for {urlpath}', 'severity': 'high' }) return violations ### 4.
4. Configuration Testing typescript import { describe, it, expect } from '@jest/globals'; import { ConfigValidator } from './config-validator'; describe('Configuration Validation', () => { let validator: ConfigValidator; beforeEach(() => { validator = new ConfigValidator(); }); it('should validate database config', () => { const config = { host: 'localhost', port: 5432, database: 'myapp', user: 'dbuser', password: 'securepass123' }; const result = validator.validate(config, 'database'); expect(result.valid).toBe(true); }); it('should reject invalid port', () => { const config = { host: 'localhost', port: 70000, database: 'myapp', user: 'dbuser', password: 'securepass123' }; const result = validator.validate(config, 'database'); expect(result.valid).toBe(false); }); }); ### 5.
5. Runtime Validation typescript import { EventEmitter } from 'events'; import as chokidar from 'chokidar'; export class RuntimeConfigValidator extends EventEmitter { private validator: ConfigValidator; private currentConfig: any; async initialize(configPath: string): Promise<void> { this.currentConfig = await this.loadAndValidate(configPath); this.watchConfig(configPath); } private async loadAndValidate(configPath: string): Promise<any> { const config = await this.loadConfig(configPath); const validationResult = this.validator.validate( config, this.detectEnvironment() ); if (!validationResult.valid) { this.emit('validation:error', { path: configPath, errors: validationResult.errors }); if (!this.isDevelopment()) { throw new Error('Configuration validation failed'); } } return config; } private watchConfig(configPath: string): void { const watcher = chokidar.watch(configPath, { persistent: true, ignoreInitial: true }); watcher.on('change', async () => { try { const newConfig = await this.loadAndValidate(configPath); if (JSON.stringify(newConfig) !== JSON.stringify(this.currentConfig)) { this.emit('config:changed', { oldConfig: this.currentConfig, newConfig }); this.currentConfig = newConfig; } } catch (error) { this.emit('config:error', { error }); } }); } } ### 6.
6. Configuration Migration python from typing import Dict from abc import ABC, abstractmethod import semver class ConfigMigration(ABC): @property @abstractmethod def version(self) -> str: pass @abstractmethod def up(self, config: Dict) -> Dict: pass @abstractmethod def down(self, config: Dict) -> Dict: pass class ConfigMigrator: def _init(self): self.migrations: List[ConfigMigration] = [] def migrate(self, config: Dict, targetversion: str) -> Dict: currentversion = config.get('version', '0.0.0') if semver.compare(currentversion, targetversion) == 0: return config result = config.copy() for migration in self.migrations: if (semver.compare(migration.version, currentversion) > 0 and semver.compare(migration.version, targetversion) <= 0): result = migration.up(result) result['version'] = migration.version return result ### 7.
7. Secure Configuration typescript import as crypto from 'crypto'; interface EncryptedValue { encrypted: true; value: string; algorithm: string; iv: string; authTag?: string; } export class SecureConfigManager { private encryptionKey: Buffer; constructor(masterKey: string) { this.encryptionKey = crypto.pbkdf2Sync(masterKey, 'config-salt', 100000, 32, 'sha256'); } encrypt(value: any): EncryptedValue { const algorithm = 'aes-256-gcm'; const iv = crypto.randomBytes(16); const cipher = crypto.createCipheriv(algorithm, this.encryptionKey, iv); let encrypted = cipher.update(JSON.stringify(value), 'utf8', 'hex'); encrypted += cipher.final('hex'); return { encrypted: true, value: encrypted, algorithm, iv: iv.toString('hex'), authTag: cipher.getAuthTag().toString('hex') }; } decrypt(encryptedValue: EncryptedValue): any { const decipher = crypto.createDecipheriv( encryptedValue.algorithm, this.encryptionKey, Buffer.from(encryptedValue.iv, 'hex') ); if (encryptedValue.authTag) { decipher.setAuthTag(Buffer.from(encryptedValue.authTag, 'hex')); } let decrypted = decipher.update(encryptedValue.value, 'hex', 'utf8'); decrypted += decipher.final('utf8'); return JSON.parse(decrypted); } async processConfig(config: any): Promise<any> { const processed = {}; for (const [key, value] of Object.entries(config)) { if (this.isEncryptedValue(value)) { processed[key] = this.decrypt(value as EncryptedValue); } else if (typeof value === 'object' && value !== null) { processed[key] = await this.processConfig(value); } else { processed[key] = value; } } return processed; } } ### 8.

### Imported Workflow Notes

#### Imported: Instructions

### 1. Configuration Analysis

Analyze existing configuration structure and identify validation needs:

```python
import os
import yaml
import json
from pathlib import Path
from typing import Dict, List, Any

class ConfigurationAnalyzer:
    def analyze_project(self, project_path: str) -> Dict[str, Any]:
        analysis = {
            'config_files': self._find_config_files(project_path),
            'security_issues': self._check_security_issues(project_path),
            'consistency_issues': self._check_consistency(project_path),
            'recommendations': []
        }
        return analysis

    def _find_config_files(self, project_path: str) -> List[Dict]:
        config_patterns = [
            '**/*.json', '**/*.yaml', '**/*.yml', '**/*.toml',
            '**/*.ini', '**/*.env*', '**/config.js'
        ]

        config_files = []
        for pattern in config_patterns:
            for file_path in Path(project_path).glob(pattern):
                if not self._should_ignore(file_path):
                    config_files.append({
                        'path': str(file_path),
                        'type': self._detect_config_type(file_path),
                        'environment': self._detect_environment(file_path)
                    })
        return config_files

    def _check_security_issues(self, project_path: str) -> List[Dict]:
        issues = []
        secret_patterns = [
            r'(api[_-]?key|apikey)',
            r'(secret|password|passwd)',
            r'(token|auth)',
            r'(aws[_-]?access)'
        ]

        for config_file in self._find_config_files(project_path):
            content = Path(config_file['path']).read_text()
            for pattern in secret_patterns:
                if re.search(pattern, content, re.IGNORECASE):
                    if self._looks_like_real_secret(content, pattern):
                        issues.append({
                            'file': config_file['path'],
                            'type': 'potential_secret',
                            'severity': 'high'
                        })
        return issues
```

### 2. Schema Validation

Implement configuration schema validation with JSON Schema:

```typescript
import Ajv from 'ajv';
import ajvFormats from 'ajv-formats';
import { JSONSchema7 } from 'json-schema';

interface ValidationResult {
  valid: boolean;
  errors?: Array<{
    path: string;
    message: string;
    keyword: string;
  }>;
}

export class ConfigValidator {
  private ajv: Ajv;

  constructor() {
    this.ajv = new Ajv({
      allErrors: true,
      strict: false,
      coerceTypes: true
    });
    ajvFormats(this.ajv);
    this.addCustomFormats();
  }

  private addCustomFormats() {
    this.ajv.addFormat('url-https', {
      type: 'string',
      validate: (data: string) => {
        try {
          return new URL(data).protocol === 'https:';
        } catch { return false; }
      }
    });

    this.ajv.addFormat('port', {
      type: 'number',
      validate: (data: number) => data >= 1 && data <= 65535
    });

    this.ajv.addFormat('duration', {
      type: 'string',
      validate: /^\d+[smhd]$/
    });
  }

  validate(configData: any, schemaName: string): ValidationResult {
    const validate = this.ajv.getSchema(schemaName);
    if (!validate) throw new Error(`Schema '${schemaName}' not found`);

    const valid = validate(configData);

    if (!valid && validate.errors) {
      return {
        valid: false,
        errors: validate.errors.map(error => ({
          path: error.instancePath || '/',
          message: error.message || 'Validation error',
          keyword: error.keyword
        }))
      };
    }
    return { valid: true };
  }
}

// Example schema
export const schemas = {
  database: {
    type: 'object',
    properties: {
      host: { type: 'string', format: 'hostname' },
      port: { type: 'integer', format: 'port' },
      database: { type: 'string', minLength: 1 },
      user: { type: 'string', minLength: 1 },
      password: { type: 'string', minLength: 8 },
      ssl: {
        type: 'object',
        properties: {
          enabled: { type: 'boolean' }
        },
        required: ['enabled']
      }
    },
    required: ['host', 'port', 'database', 'user', 'password']
  }
};
```

### 3. Environment-Specific Validation

```python
from typing import Dict, List, Any

class EnvironmentValidator:
    def __init__(self):
        self.environments = ['development', 'staging', 'production']
        self.environment_rules = {
            'development': {
                'allow_debug': True,
                'require_https': False,
                'min_password_length': 8
            },
            'production': {
                'allow_debug': False,
                'require_https': True,
                'min_password_length': 16,
                'require_encryption': True
            }
        }

    def validate_config(self, config: Dict, environment: str) -> List[Dict]:
        if environment not in self.environment_rules:
            raise ValueError(f"Unknown environment: {environment}")

        rules = self.environment_rules[environment]
        violations = []

        if not rules['allow_debug'] and config.get('debug', False):
            violations.append({
                'rule': 'no_debug_in_production',
                'message': 'Debug mode not allowed in production',
                'severity': 'critical'
            })

        if rules['require_https']:
            urls = self._extract_urls(config)
            for url_path, url in urls:
                if url.startswith('http://') and 'localhost' not in url:
                    violations.append({
                        'rule': 'require_https',
                        'message': f'HTTPS required for {url_path}',
                        'severity': 'high'
                    })

        return violations
```

### 4. Configuration Testing

```typescript
import { describe, it, expect } from '@jest/globals';
import { ConfigValidator } from './config-validator';

describe('Configuration Validation', () => {
  let validator: ConfigValidator;

  beforeEach(() => {
    validator = new ConfigValidator();
  });

  it('should validate database config', () => {
    const config = {
      host: 'localhost',
      port: 5432,
      database: 'myapp',
      user: 'dbuser',
      password: 'securepass123'
    };

    const result = validator.validate(config, 'database');
    expect(result.valid).toBe(true);
  });

  it('should reject invalid port', () => {
    const config = {
      host: 'localhost',
      port: 70000,
      database: 'myapp',
      user: 'dbuser',
      password: 'securepass123'
    };

    const result = validator.validate(config, 'database');
    expect(result.valid).toBe(false);
  });
});
```

### 5. Runtime Validation

```typescript
import { EventEmitter } from 'events';
import * as chokidar from 'chokidar';

export class RuntimeConfigValidator extends EventEmitter {
  private validator: ConfigValidator;
  private currentConfig: any;

  async initialize(configPath: string): Promise<void> {
    this.currentConfig = await this.loadAndValidate(configPath);
    this.watchConfig(configPath);
  }

  private async loadAndValidate(configPath: string): Promise<any> {
    const config = await this.loadConfig(configPath);

    const validationResult = this.validator.validate(
      config,
      this.detectEnvironment()
    );

    if (!validationResult.valid) {
      this.emit('validation:error', {
        path: configPath,
        errors: validationResult.errors
      });

      if (!this.isDevelopment()) {
        throw new Error('Configuration validation failed');
      }
    }

    return config;
  }

  private watchConfig(configPath: string): void {
    const watcher = chokidar.watch(configPath, {
      persistent: true,
      ignoreInitial: true
    });

    watcher.on('change', async () => {
      try {
        const newConfig = await this.loadAndValidate(configPath);

        if (JSON.stringify(newConfig) !== JSON.stringify(this.currentConfig)) {
          this.emit('config:changed', {
            oldConfig: this.currentConfig,
            newConfig
          });
          this.currentConfig = newConfig;
        }
      } catch (error) {
        this.emit('config:error', { error });
      }
    });
  }
}
```

### 6. Configuration Migration

```python
from typing import Dict
from abc import ABC, abstractmethod
import semver

class ConfigMigration(ABC):
    @property
    @abstractmethod
    def version(self) -> str:
        pass

    @abstractmethod
    def up(self, config: Dict) -> Dict:
        pass

    @abstractmethod
    def down(self, config: Dict) -> Dict:
        pass

class ConfigMigrator:
    def __init__(self):
        self.migrations: List[ConfigMigration] = []

    def migrate(self, config: Dict, target_version: str) -> Dict:
        current_version = config.get('_version', '0.0.0')

        if semver.compare(current_version, target_version) == 0:
            return config

        result = config.copy()
        for migration in self.migrations:
            if (semver.compare(migration.version, current_version) > 0 and
                semver.compare(migration.version, target_version) <= 0):
                result = migration.up(result)
                result['_version'] = migration.version

        return result
```

### 7. Secure Configuration

```typescript
import * as crypto from 'crypto';

interface EncryptedValue {
  encrypted: true;
  value: string;
  algorithm: string;
  iv: string;
  authTag?: string;
}

export class SecureConfigManager {
  private encryptionKey: Buffer;

  constructor(masterKey: string) {
    this.encryptionKey = crypto.pbkdf2Sync(masterKey, 'config-salt', 100000, 32, 'sha256');
  }

  encrypt(value: any): EncryptedValue {
    const algorithm = 'aes-256-gcm';
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv(algorithm, this.encryptionKey, iv);

    let encrypted = cipher.update(JSON.stringify(value), 'utf8', 'hex');
    encrypted += cipher.final('hex');

    return {
      encrypted: true,
      value: encrypted,
      algorithm,
      iv: iv.toString('hex'),
      authTag: cipher.getAuthTag().toString('hex')
    };
  }

  decrypt(encryptedValue: EncryptedValue): any {
    const decipher = crypto.createDecipheriv(
      encryptedValue.algorithm,
      this.encryptionKey,
      Buffer.from(encryptedValue.iv, 'hex')
    );

    if (encryptedValue.authTag) {
      decipher.setAuthTag(Buffer.from(encryptedValue.authTag, 'hex'));
    }

    let decrypted = decipher.update(encryptedValue.value, 'hex', 'utf8');
    decrypted += decipher.final('utf8');

    return JSON.parse(decrypted);
  }

  async processConfig(config: any): Promise<any> {
    const processed = {};

    for (const [key, value] of Object.entries(config)) {
      if (this.isEncryptedValue(value)) {
        processed[key] = this.decrypt(value as EncryptedValue);
      } else if (typeof value === 'object' && value !== null) {
        processed[key] = await this.processConfig(value);
      } else {
        processed[key] = value;
      }
    }

    return processed;
  }
}
```

### 8. Documentation Generation

```python
from typing import Dict, List
import yaml

class ConfigDocGenerator:
    def generate_docs(self, schema: Dict, examples: Dict) -> str:
        docs = ["# Configuration Reference\n"]

        docs.append("## Configuration Options\n")
        sections = self._generate_sections(schema.get('properties', {}), examples)
        docs.extend(sections)

        return '\n'.join(docs)

    def _generate_sections(self, properties: Dict, examples: Dict, level: int = 3) -> List[str]:
        sections = []

        for prop_name, prop_schema in properties.items():
            sections.append(f"{'#' * level} {prop_name}\n")

            if 'description' in prop_schema:
                sections.append(f"{prop_schema['description']}\n")

            sections.append(f"**Type:** `{prop_schema.get('type', 'any')}`\n")

            if 'default' in prop_schema:
                sections.append(f"**Default:** `{prop_schema['default']}`\n")

            if prop_name in examples:
                sections.append("**Example:**\n```yaml")
                sections.append(yaml.dump({prop_name: examples[prop_name]}))
                sections.append("```\n")

        return sections
```

#### Imported: Context

The user needs to validate configuration files, implement configuration schemas, ensure consistency across environments, and prevent configuration-related errors. Focus on creating robust validation rules, type safety, security checks, and automated validation processes.

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @deployment-validation-config-validate to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @deployment-validation-config-validate against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @deployment-validation-config-validate for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @deployment-validation-config-validate using the copied upstream files plus provenance, then summarize any gaps before merge.
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

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/deployment-validation-config-validate`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@conductor-validator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@confluence-automation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-creator` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@content-marketer` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

1. **Configuration Analysis**: Current configuration assessment
2. **Validation Schemas**: JSON Schema definitions
3. **Environment Rules**: Environment-specific validation
4. **Test Suite**: Configuration tests
5. **Migration Scripts**: Version migrations
6. **Security Report**: Issues and recommendations
7. **Documentation**: Auto-generated reference

Focus on preventing configuration errors, ensuring consistency, and maintaining security best practices.

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
