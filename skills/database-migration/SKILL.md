---
name: database-migration
description: "Database Migration workflow skill. Use this skill when the user needs Master database schema and data migrations across ORMs (Sequelize, TypeORM, Prisma), including rollback strategies and zero-downtime deployments and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["database-migration", "master", "database", "schema", "and", "data", "migrations", "across"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-14"
date_updated: "2026-04-22"
---

# Database Migration

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/database-migration` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses the `external_source` block in `metadata.json` plus `ORIGIN.md` as the provenance anchor for review.

# Database Migration Master database schema and data migrations across ORMs (Sequelize, TypeORM, Prisma), including rollback strategies and zero-downtime deployments.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: ORM Migrations, Schema Transformations, Data Transformations, Rollback Strategies, Zero-Downtime Migrations, Cross-Database Migrations.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- The task is unrelated to database migration
- You need a different domain or tool outside this scope
- Migrating between different ORMs
- Performing schema transformations
- Moving data between databases
- Implementing rollback procedures

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

#### Imported: ORM Migrations

### Sequelize Migrations
```javascript
// migrations/20231201-create-users.js
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      email: {
        type: Sequelize.STRING,
        unique: true,
        allowNull: false
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};

// Run: npx sequelize-cli db:migrate
// Rollback: npx sequelize-cli db:migrate:undo
```

### TypeORM Migrations
```typescript
// migrations/1701234567-CreateUsers.ts
import { MigrationInterface, QueryRunner, Table } from 'typeorm';

export class CreateUsers1701234567 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: 'users',
        columns: [
          {
            name: 'id',
            type: 'int',
            isPrimary: true,
            isGenerated: true,
            generationStrategy: 'increment'
          },
          {
            name: 'email',
            type: 'varchar',
            isUnique: true
          },
          {
            name: 'created_at',
            type: 'timestamp',
            default: 'CURRENT_TIMESTAMP'
          }
        ]
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable('users');
  }
}

// Run: npm run typeorm migration:run
// Rollback: npm run typeorm migration:revert
```

### Prisma Migrations
```prisma
// schema.prisma
model User {
  id        Int      @id @default(autoincrement())
  email     String   @unique
  createdAt DateTime @default(now())
}

// Generate migration: npx prisma migrate dev --name create_users
// Apply: npx prisma migrate deploy
```

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @database-migration to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @database-migration against metadata.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @database-migration for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @database-migration using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.



## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always Provide Rollback: Every up() needs a down()
- Test Migrations: Test on staging first
- Use Transactions: Atomic migrations when possible
- Backup First: Always backup before migration
- Small Changes: Break into small, incremental steps
- Monitor: Watch for errors during deployment
- Document: Explain why and how

### Imported Operating Notes

#### Imported: Best Practices

1. **Always Provide Rollback**: Every up() needs a down()
2. **Test Migrations**: Test on staging first
3. **Use Transactions**: Atomic migrations when possible
4. **Backup First**: Always backup before migration
5. **Small Changes**: Break into small, incremental steps
6. **Monitor**: Watch for errors during deployment
7. **Document**: Explain why and how
8. **Idempotent**: Migrations should be rerunnable

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/database-migration`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `metadata.json`, `ORIGIN.md`, and the most relevant copied upstream files. Check the `external_source` block first, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@00-andruia-consultant` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@10-andruia-skill-smith` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@20-andruia-niche-intelligence` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@3d-web-experience` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Resources

- **references/orm-switching.md**: ORM migration guides
- **references/schema-migration.md**: Schema transformation patterns
- **references/data-transformation.md**: Data migration scripts
- **references/rollback-strategies.md**: Rollback procedures
- **assets/schema-migration-template.sql**: SQL migration templates
- **assets/data-migration-script.py**: Data migration utilities
- **scripts/test-migration.sh**: Migration testing script

#### Imported: Schema Transformations

### Adding Columns with Defaults
```javascript
// Safe migration: add column with default
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'status', {
      type: Sequelize.STRING,
      defaultValue: 'active',
      allowNull: false
    });
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'status');
  }
};
```

### Renaming Columns (Zero Downtime)
```javascript
// Step 1: Add new column
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'full_name', {
      type: Sequelize.STRING
    });

    // Copy data from old column
    await queryInterface.sequelize.query(
      'UPDATE users SET full_name = name'
    );
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'full_name');
  }
};

// Step 2: Update application to use new column

// Step 3: Remove old column
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'name');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('users', 'name', {
      type: Sequelize.STRING
    });
  }
};
```

### Changing Column Types
```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // For large tables, use multi-step approach

    // 1. Add new column
    await queryInterface.addColumn('users', 'age_new', {
      type: Sequelize.INTEGER
    });

    // 2. Copy and transform data
    await queryInterface.sequelize.query(`
      UPDATE users
      SET age_new = CAST(age AS INTEGER)
      WHERE age IS NOT NULL
    `);

    // 3. Drop old column
    await queryInterface.removeColumn('users', 'age');

    // 4. Rename new column
    await queryInterface.renameColumn('users', 'age_new', 'age');
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.changeColumn('users', 'age', {
      type: Sequelize.STRING
    });
  }
};
```

#### Imported: Data Transformations

### Complex Data Migration
```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Get all records
    const [users] = await queryInterface.sequelize.query(
      'SELECT id, address_string FROM users'
    );

    // Transform each record
    for (const user of users) {
      const addressParts = user.address_string.split(',');

      await queryInterface.sequelize.query(
        `UPDATE users
         SET street = :street,
             city = :city,
             state = :state
         WHERE id = :id`,
        {
          replacements: {
            id: user.id,
            street: addressParts[0]?.trim(),
            city: addressParts[1]?.trim(),
            state: addressParts[2]?.trim()
          }
        }
      );
    }

    // Drop old column
    await queryInterface.removeColumn('users', 'address_string');
  },

  down: async (queryInterface, Sequelize) => {
    // Reconstruct original column
    await queryInterface.addColumn('users', 'address_string', {
      type: Sequelize.STRING
    });

    await queryInterface.sequelize.query(`
      UPDATE users
      SET address_string = CONCAT(street, ', ', city, ', ', state)
    `);

    await queryInterface.removeColumn('users', 'street');
    await queryInterface.removeColumn('users', 'city');
    await queryInterface.removeColumn('users', 'state');
  }
};
```

#### Imported: Rollback Strategies

### Transaction-Based Migrations
```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.addColumn(
        'users',
        'verified',
        { type: Sequelize.BOOLEAN, defaultValue: false },
        { transaction }
      );

      await queryInterface.sequelize.query(
        'UPDATE users SET verified = true WHERE email_verified_at IS NOT NULL',
        { transaction }
      );

      await transaction.commit();
    } catch (error) {
      await transaction.rollback();
      throw error;
    }
  },

  down: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'verified');
  }
};
```

### Checkpoint-Based Rollback
```javascript
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Create backup table
    await queryInterface.sequelize.query(
      'CREATE TABLE users_backup AS SELECT * FROM users'
    );

    try {
      // Perform migration
      await queryInterface.addColumn('users', 'new_field', {
        type: Sequelize.STRING
      });

      // Verify migration
      const [result] = await queryInterface.sequelize.query(
        "SELECT COUNT(*) as count FROM users WHERE new_field IS NULL"
      );

      if (result[0].count > 0) {
        throw new Error('Migration verification failed');
      }

      // Drop backup
      await queryInterface.dropTable('users_backup');
    } catch (error) {
      // Restore from backup
      await queryInterface.sequelize.query('DROP TABLE users');
      await queryInterface.sequelize.query(
        'CREATE TABLE users AS SELECT * FROM users_backup'
      );
      await queryInterface.dropTable('users_backup');
      throw error;
    }
  }
};
```

#### Imported: Zero-Downtime Migrations

### Blue-Green Deployment Strategy
```javascript
// Phase 1: Make changes backward compatible
module.exports = {
  up: async (queryInterface, Sequelize) => {
    // Add new column (both old and new code can work)
    await queryInterface.addColumn('users', 'email_new', {
      type: Sequelize.STRING
    });
  }
};

// Phase 2: Deploy code that writes to both columns

// Phase 3: Backfill data
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.sequelize.query(`
      UPDATE users
      SET email_new = email
      WHERE email_new IS NULL
    `);
  }
};

// Phase 4: Deploy code that reads from new column

// Phase 5: Remove old column
module.exports = {
  up: async (queryInterface) => {
    await queryInterface.removeColumn('users', 'email');
  }
};
```

#### Imported: Cross-Database Migrations

### PostgreSQL to MySQL
```javascript
// Handle differences
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const dialectName = queryInterface.sequelize.getDialect();

    if (dialectName === 'mysql') {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        data: {
          type: Sequelize.JSON  // MySQL JSON type
        }
      });
    } else if (dialectName === 'postgres') {
      await queryInterface.createTable('users', {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        data: {
          type: Sequelize.JSONB  // PostgreSQL JSONB type
        }
      });
    }
  }
};
```

#### Imported: Common Pitfalls

- Not testing rollback procedures
- Making breaking changes without downtime strategy
- Forgetting to handle NULL values
- Not considering index performance
- Ignoring foreign key constraints
- Migrating too much data at once

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
