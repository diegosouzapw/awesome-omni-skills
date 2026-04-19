---
name: moodle-external-api-development
description: "Moodle External API Development workflow skill. Use this skill when the user needs This skill guides you through creating custom external web service APIs for Moodle LMS, following Moodle's external API framework and coding standards and the operator should preserve the upstream workflow, copied support files, and provenance before merging or handing off."
version: "0.0.1"
category: backend
tags: ["moodle-external-api-development", "guides", "you", "creating", "custom", "external", "web", "service"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-15"
date_updated: "2026-04-19"
---

# Moodle External API Development

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/moodle-external-api-development` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

This intake keeps the copied upstream files intact and uses `EXTERNAL_SOURCE.json` plus `ORIGIN.md` as the provenance anchor for review.

# Moodle External API Development This skill guides you through creating custom external web service APIs for Moodle LMS, following Moodle's external API framework and coding standards.

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: Core Architecture Pattern, Advanced Patterns, Testing Your API, Common Pitfalls & Solutions, Debugging Checklist, Plugin Structure Checklist.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- Creating custom web services for Moodle plugins
- Implementing REST/AJAX endpoints for course management
- Building APIs for quiz operations, user tracking, or reporting
- Exposing Moodle functionality to external applications
- Developing mobile app backends using Moodle
- Use when the request clearly matches the imported source intent: This skill guides you through creating custom external web service APIs for Moodle LMS, following Moodle's external API framework and coding standards.

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

1. Class must extend external_api
2. Namespace follows: localpluginname\external or modmodname\external
3. Include the security check: defined('MOODLE_INTERNAL') || die();
4. Require externallib.php for base classes
5. PARAM_INT - Integers
6. PARAM_TEXT - Plain text (HTML stripped)
7. PARAM_RAW - Raw text (no cleaning)

### Imported Workflow Notes

#### Imported: Step-by-Step Implementation

### Step 1: Create the External API Class File

**Location**: `/local/yourplugin/classes/external/your_api_name.php`

```php
<?php
namespace local_yourplugin\external;

defined('MOODLE_INTERNAL') || die();
require_once("$CFG->libdir/externallib.php");

use external_api;
use external_function_parameters;
use external_single_structure;
use external_value;

class your_api_name extends external_api {
    
    // Three required methods will go here
    
}
```

**Key Points**:
- Class must extend `external_api`
- Namespace follows: `local_pluginname\external` or `mod_modname\external`
- Include the security check: `defined('MOODLE_INTERNAL') || die();`
- Require externallib.php for base classes

### Step 2: Define Input Parameters

```php
public static function execute_parameters() {
    return new external_function_parameters([
        'userid' => new external_value(PARAM_INT, 'User ID', VALUE_REQUIRED),
        'courseid' => new external_value(PARAM_INT, 'Course ID', VALUE_REQUIRED),
        'options' => new external_single_structure([
            'includedetails' => new external_value(PARAM_BOOL, 'Include details', VALUE_DEFAULT, false),
            'limit' => new external_value(PARAM_INT, 'Result limit', VALUE_DEFAULT, 10)
        ], 'Options', VALUE_OPTIONAL)
    ]);
}
```

**Common Parameter Types**:
- `PARAM_INT` - Integers
- `PARAM_TEXT` - Plain text (HTML stripped)
- `PARAM_RAW` - Raw text (no cleaning)
- `PARAM_BOOL` - Boolean values
- `PARAM_FLOAT` - Floating point numbers
- `PARAM_ALPHANUMEXT` - Alphanumeric with extended chars

**Structures**:
- `external_value` - Single value
- `external_single_structure` - Object with named fields
- `external_multiple_structure` - Array of items

**Value Flags**:
- `VALUE_REQUIRED` - Parameter must be provided
- `VALUE_OPTIONAL` - Parameter is optional
- `VALUE_DEFAULT, defaultvalue` - Optional with default

### Step 3: Implement Business Logic

```php
public static function execute($userid, $courseid, $options = []) {
    global $DB, $USER;

    // 1. Validate parameters
    $params = self::validate_parameters(self::execute_parameters(), [
        'userid' => $userid,
        'courseid' => $courseid,
        'options' => $options
    ]);

    // 2. Check permissions/capabilities
    $context = \context_course::instance($params['courseid']);
    self::validate_context($context);
    require_capability('moodle/course:view', $context);

    // 3. Verify user access
    if ($params['userid'] != $USER->id) {
        require_capability('moodle/course:viewhiddenactivities', $context);
    }

    // 4. Database operations
    $sql = "SELECT id, name, timecreated
            FROM {your_table}
            WHERE userid = :userid
              AND courseid = :courseid
            LIMIT :limit";
    
    $records = $DB->get_records_sql($sql, [
        'userid' => $params['userid'],
        'courseid' => $params['courseid'],
        'limit' => $params['options']['limit']
    ]);

    // 5. Process and return data
    $results = [];
    foreach ($records as $record) {
        $results[] = [
            'id' => $record->id,
            'name' => $record->name,
            'timestamp' => $record->timecreated
        ];
    }

    return [
        'items' => $results,
        'count' => count($results)
    ];
}
```

**Critical Steps**:
1. **Always validate parameters** using `validate_parameters()`
2. **Check context** using `validate_context()`
3. **Verify capabilities** using `require_capability()`
4. **Use parameterized queries** to prevent SQL injection
5. **Return structured data** matching return definition

### Step 4: Define Return Structure

```php
public static function execute_returns() {
    return new external_single_structure([
        'items' => new external_multiple_structure(
            new external_single_structure([
                'id' => new external_value(PARAM_INT, 'Item ID'),
                'name' => new external_value(PARAM_TEXT, 'Item name'),
                'timestamp' => new external_value(PARAM_INT, 'Creation time')
            ])
        ),
        'count' => new external_value(PARAM_INT, 'Total items')
    ]);
}
```

**Return Structure Rules**:
- Must match exactly what `execute()` returns
- Use appropriate parameter types
- Document each field with description
- Nested structures allowed

### Step 5: Register the Service

**Location**: `/local/yourplugin/db/services.php`

```php
<?php
defined('MOODLE_INTERNAL') || die();

$functions = [
    'local_yourplugin_your_api_name' => [
        'classname'   => 'local_yourplugin\external\your_api_name',
        'methodname'  => 'execute',
        'classpath'   => 'local/yourplugin/classes/external/your_api_name.php',
        'description' => 'Brief description of what this API does',
        'type'        => 'read',  // or 'write'
        'ajax'        => true,
        'capabilities'=> 'moodle/course:view', // comma-separated if multiple
        'services'    => [MOODLE_OFFICIAL_MOBILE_SERVICE] // Optional
    ],
];

$services = [
    'Your Plugin Web Service' => [
        'functions' => [
            'local_yourplugin_your_api_name'
        ],
        'restrictedusers' => 0,
        'enabled' => 1
    ]
];
```

**Service Registration Keys**:
- `classname` - Full namespaced class name
- `methodname` - Always 'execute'
- `type` - 'read' (SELECT) or 'write' (INSERT/UPDATE/DELETE)
- `ajax` - Set true for AJAX/REST access
- `capabilities` - Required Moodle capabilities
- `services` - Optional service bundles

### Step 6: Implement Error Handling & Logging

```php
private static function log_debug($message) {
    global $CFG;
    $logdir = $CFG->dataroot . '/local_yourplugin';
    if (!file_exists($logdir)) {
        mkdir($logdir, 0777, true);
    }
    $debuglog = $logdir . '/api_debug.log';
    $timestamp = date('Y-m-d H:i:s');
    file_put_contents($debuglog, "[$timestamp] $message\n", FILE_APPEND | LOCK_EX);
}

public static function execute($userid, $courseid) {
    global $DB;

    try {
        self::log_debug("API called: userid=$userid, courseid=$courseid");
        
        // Validate parameters
        $params = self::validate_parameters(self::execute_parameters(), [
            'userid' => $userid,
            'courseid' => $courseid
        ]);

        // Your logic here
        
        self::log_debug("API completed successfully");
        return $result;

    } catch (\invalid_parameter_exception $e) {
        self::log_debug("Parameter validation failed: " . $e->getMessage());
        throw $e;
    } catch (\moodle_exception $e) {
        self::log_debug("Moodle exception: " . $e->getMessage());
        throw $e;
    } catch (\Exception $e) {
        // Log detailed error info
        $lastsql = method_exists($DB, 'get_last_sql') ? $DB->get_last_sql() : '[N/A]';
        self::log_debug("Fatal error: " . $e->getMessage());
        self::log_debug("Last SQL: " . $lastsql);
        self::log_debug("Stack trace: " . $e->getTraceAsString());
        throw $e;
    }
}
```

**Error Handling Best Practices**:
- Wrap logic in try-catch blocks
- Log errors with timestamps and context
- Capture SQL queries on database errors
- Preserve stack traces for debugging
- Re-throw exceptions after logging

#### Imported: Core Architecture Pattern

Moodle external APIs follow a strict three-method pattern:

1. **`execute_parameters()`** - Defines input parameter structure
2. **`execute()`** - Contains business logic
3. **`execute_returns()`** - Defines return structure

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @moodle-external-api-development to handle <task>. Start from the copied upstream workflow, load only the files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Ask for a provenance-grounded review

```text
Review @moodle-external-api-development against EXTERNAL_SOURCE.json and ORIGIN.md, then explain which copied upstream files you would load first and why.
```

**Explanation:** Use this before review or troubleshooting when you need a precise, auditable explanation of origin and file selection.

### Example 3: Narrow the copied support files before execution

```text
Use @moodle-external-api-development for <task>. Load only the copied references, examples, or scripts that change the outcome, and name the files explicitly before proceeding.
```

**Explanation:** This keeps the skill aligned with progressive disclosure instead of loading the whole copied package by default.

### Example 4: Build a reviewer packet

```text
Review @moodle-external-api-development using the copied upstream files plus provenance, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Examples from Real Implementation

### Simple Read API (Get Quiz Attempts)

```php
<?php
namespace local_userlog\external;

defined('MOODLE_INTERNAL') || die();
require_once("$CFG->libdir/externallib.php");

use external_api;
use external_function_parameters;
use external_single_structure;
use external_value;

class get_quiz_attempts extends external_api {
    public static function execute_parameters() {
        return new external_function_parameters([
            'userid' => new external_value(PARAM_INT, 'User ID'),
            'courseid' => new external_value(PARAM_INT, 'Course ID')
        ]);
    }

    public static function execute($userid, $courseid) {
        global $DB;

        self::validate_parameters(self::execute_parameters(), [
            'userid' => $userid,
            'courseid' => $courseid
        ]);

        $sql = "SELECT COUNT(*) AS quiz_attempts
                FROM {quiz_attempts} qa
                JOIN {quiz} q ON qa.quiz = q.id
                WHERE qa.userid = :userid AND q.course = :courseid";

        $attempts = $DB->get_field_sql($sql, [
            'userid' => $userid,
            'courseid' => $courseid
        ]);

        return ['quiz_attempts' => (int)$attempts];
    }

    public static function execute_returns() {
        return new external_single_structure([
            'quiz_attempts' => new external_value(PARAM_INT, 'Total number of quiz attempts')
        ]);
    }
}
```

### Complex Write API (Create Quiz from Categories)

See attached `create_quiz_from_categories.php` for a comprehensive example including:
- Multiple database insertions
- Course module creation
- Quiz instance configuration
- Random question selection with tags
- Group-based access restrictions
- Extensive error logging
- Transaction management

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The goal is to keep provenance explicit and load only the copied source material that materially improves execution.

- Always validate input parameters using validate_parameters()
- Check user context and capabilities before operations
- Use parameterized SQL queries (never string concatenation)
- Implement comprehensive error handling and logging
- Follow Moodle naming conventions (lowercase, underscores)
- Document all parameters and return values clearly
- Test with different user roles and permissions

### Imported Operating Notes

#### Imported: Guidelines

- Always validate input parameters using `validate_parameters()`
- Check user context and capabilities before operations
- Use parameterized SQL queries (never string concatenation)
- Implement comprehensive error handling and logging
- Follow Moodle naming conventions (lowercase, underscores)
- Document all parameters and return values clearly
- Test with different user roles and permissions
- Consider transaction safety for write operations
- Purge caches after service registration changes
- Keep API methods focused and single-purpose

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/moodle-external-api-development`, fails to mention provenance, or does not use any copied source files at all.
**Solution:** Re-open `EXTERNAL_SOURCE.json`, `ORIGIN.md`, and the most relevant copied upstream files. Load only the files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Point at the exact copied references, examples, scripts, or assets that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.



## Related Skills

- `@monte-carlo-monitor-creation` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-prevent` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-push-ingestion` - Use when the work is better handled by that native specialization after this imported skill establishes context.
- `@monte-carlo-validation-notebook` - Use when the work is better handled by that native specialization after this imported skill establishes context.

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

#### Imported: Quick Reference: Common Moodle Tables

| Table | Purpose |
|-------|---------|
| `{user}` | User accounts |
| `{course}` | Courses |
| `{course_modules}` | Activity instances in courses |
| `{modules}` | Available activity types (quiz, forum, etc.) |
| `{quiz}` | Quiz configurations |
| `{quiz_attempts}` | Quiz attempt records |
| `{question}` | Question bank |
| `{question_categories}` | Question categories |
| `{grade_items}` | Gradebook items |
| `{grade_grades}` | Student grades |
| `{groups}` | Course groups |
| `{groups_members}` | Group memberships |
| `{logstore_standard_log}` | Activity logs |

#### Imported: Additional Resources

- [Moodle External API Documentation](https://moodledev.io/docs/5.2/apis/subsystems/external/functions)
- [Moodle Coding Style](https://moodledev.io/general/development/policies/codingstyle)
- [Moodle Database API](https://moodledev.io/docs/5.2/apis/core/dml)
- [Web Services API Documentation](https://moodledev.io/docs/5.2/apis/subsystems/external)

#### Imported: Advanced Patterns

### Complex Database Operations

```php
// Transaction example
$transaction = $DB->start_delegated_transaction();

try {
    // Insert record
    $recordid = $DB->insert_record('your_table', $dataobject);
    
    // Update related records
    $DB->set_field('another_table', 'status', 1, ['recordid' => $recordid]);
    
    // Commit transaction
    $transaction->allow_commit();
} catch (\Exception $e) {
    $transaction->rollback($e);
    throw $e;
}
```

### Working with Course Modules

```php
// Create course module
$moduleid = $DB->get_field('modules', 'id', ['name' => 'quiz'], MUST_EXIST);

$cm = new \stdClass();
$cm->course = $courseid;
$cm->module = $moduleid;
$cm->instance = 0; // Will be updated after activity creation
$cm->visible = 1;
$cm->groupmode = 0;
$cmid = add_course_module($cm);

// Create activity instance (e.g., quiz)
$quiz = new \stdClass();
$quiz->course = $courseid;
$quiz->name = 'My Quiz';
$quiz->coursemodule = $cmid;
// ... other quiz fields ...

$quizid = quiz_add_instance($quiz, null);

// Update course module with instance ID
$DB->set_field('course_modules', 'instance', $quizid, ['id' => $cmid]);
course_add_cm_to_section($courseid, $cmid, 0);
```

### Access Restrictions (Groups/Availability)

```php
// Restrict activity to specific user via group
$groupname = 'activity_' . $activityid . '_user_' . $userid;

// Create or get group
if (!$groupid = $DB->get_field('groups', 'id', ['courseid' => $courseid, 'name' => $groupname])) {
    $groupdata = (object)[
        'courseid' => $courseid,
        'name' => $groupname,
        'timecreated' => time(),
        'timemodified' => time()
    ];
    $groupid = $DB->insert_record('groups', $groupdata);
}

// Add user to group
if (!$DB->record_exists('groups_members', ['groupid' => $groupid, 'userid' => $userid])) {
    $DB->insert_record('groups_members', (object)[
        'groupid' => $groupid,
        'userid' => $userid,
        'timeadded' => time()
    ]);
}

// Set availability condition
$restriction = [
    'op' => '&',
    'show' => false,
    'c' => [
        [
            'type' => 'group',
            'id' => $groupid
        ]
    ],
    'showc' => [false]
];

$DB->set_field('course_modules', 'availability', json_encode($restriction), ['id' => $cmid]);
```

### Random Question Selection with Tags

```php
private static function get_random_questions($categoryid, $tagname, $limit) {
    global $DB;
    
    $sql = "SELECT q.id
            FROM {question} q
            INNER JOIN {question_versions} qv ON qv.questionid = q.id
            INNER JOIN {question_bank_entries} qbe ON qbe.id = qv.questionbankentryid
            INNER JOIN {question_categories} qc ON qc.id = qbe.questioncategoryid
            JOIN {tag_instance} ti ON ti.itemid = q.id
            JOIN {tag} t ON t.id = ti.tagid
            WHERE LOWER(t.name) = :tagname
              AND qc.id = :categoryid
              AND ti.itemtype = 'question'
              AND q.qtype = 'multichoice'";
    
    $qids = $DB->get_fieldset_sql($sql, [
        'categoryid' => $categoryid,
        'tagname' => strtolower($tagname)
    ]);
    
    shuffle($qids);
    return array_slice($qids, 0, $limit);
}
```

#### Imported: Testing Your API

### 1. Via Moodle Web Services Test Client

1. Enable web services: **Site administration > Advanced features**
2. Enable REST protocol: **Site administration > Plugins > Web services > Manage protocols**
3. Create service: **Site administration > Server > Web services > External services**
4. Test function: **Site administration > Development > Web service test client**

### 2. Via curl

```bash
# Get token first
curl -X POST "https://yourmoodle.com/login/token.php" \
  -d "username=admin" \
  -d "password=yourpassword" \
  -d "service=moodle_mobile_app"

# Call your API
curl -X POST "https://yourmoodle.com/webservice/rest/server.php" \
  -d "wstoken=YOUR_TOKEN" \
  -d "wsfunction=local_yourplugin_your_api_name" \
  -d "moodlewsrestformat=json" \
  -d "userid=2" \
  -d "courseid=3"
```

### 3. Via JavaScript (AJAX)

```javascript
require(['core/ajax'], function(ajax) {
    var promises = ajax.call([{
        methodname: 'local_yourplugin_your_api_name',
        args: {
            userid: 2,
            courseid: 3
        }
    }]);

    promises[0].done(function(response) {
        console.log('Success:', response);
    }).fail(function(error) {
        console.error('Error:', error);
    });
});
```

#### Imported: Common Pitfalls & Solutions

### 1. "Function not found" Error
**Solution**: 
- Purge caches: **Site administration > Development > Purge all caches**
- Verify function name in services.php matches exactly
- Check namespace and class name are correct

### 2. "Invalid parameter value detected"
**Solution**:
- Ensure parameter types match between definition and usage
- Check required vs optional parameters
- Validate nested structure definitions

### 3. SQL Injection Vulnerabilities
**Solution**:
- Always use placeholder parameters (`:paramname`)
- Never concatenate user input into SQL strings
- Use Moodle's database methods: `get_record()`, `get_records()`, etc.

### 4. Permission Denied Errors
**Solution**:
- Call `self::validate_context($context)` early in execute()
- Check required capabilities match user's permissions
- Verify user has role assignments in the context

### 5. Transaction Deadlocks
**Solution**:
- Keep transactions short
- Always commit or rollback in finally blocks
- Avoid nested transactions

#### Imported: Debugging Checklist

- [ ] Check Moodle debug mode: **Site administration > Development > Debugging**
- [ ] Review web services logs: **Site administration > Reports > Logs**
- [ ] Check custom log files in `$CFG->dataroot/local_yourplugin/`
- [ ] Verify database queries using `$DB->set_debug(true)`
- [ ] Test with admin user to rule out permission issues
- [ ] Clear browser cache and Moodle caches
- [ ] Check PHP error logs on server

#### Imported: Plugin Structure Checklist

```
local/yourplugin/
├── version.php                 # Plugin version and metadata
├── db/
│   ├── services.php           # External service definitions
│   └── access.php             # Capability definitions (optional)
├── classes/
│   └── external/
│       ├── your_api_name.php  # External API implementation
│       └── another_api.php    # Additional APIs
├── lang/
│   └── en/
│       └── local_yourplugin.php  # Language strings
└── tests/
    └── external_test.php      # Unit tests (optional but recommended)
```

#### Imported: Limitations

- Use this skill only when the task clearly matches the scope described above.
- Do not treat the output as a substitute for environment-specific validation, testing, or expert review.
- Stop and ask for clarification if required inputs, permissions, safety boundaries, or success criteria are missing.
