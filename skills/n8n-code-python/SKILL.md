---
name: n8n-code-python
description: "Python Code Node (Beta) workflow skill. Use this skill when the user needs Write Python code in n8n Code nodes. Use when writing Python in n8n, using input/json/_node syntax, working with standard library, or need to understand Python limitations in n8n Code nodes and the operator should rely on the packaged workflow, support pack, troubleshooting notes, and provenance links before merging or handing off."
version: "0.0.1"
category: development
tags: ["n8n-code-python", "write", "python", "n8n", "nodes", "use", "writing", "using"]
complexity: advanced
risk: caution
tools: ["codex-cli", "claude-code", "cursor", "gemini-cli", "opencode"]
source: community
author: "sickn33"
date_added: "2026-04-12"
date_updated: "2026-04-12"
---

# Python Code Node (Beta)

## Overview

This public intake copy packages `plugins/antigravity-awesome-skills-claude/skills/n8n-code-python` from `https://github.com/sickn33/antigravity-awesome-skills` into the native Omni Skills editorial shape without hiding its origin.

Use it when the operator needs the upstream workflow, support files, and repository context to stay intact while the public validator and private enhancer continue their normal downstream flow.

The packaged support pack adds a checklist, rubric, playbook, prompt template, router note, and source manifest so reviewers can audit the import as a complete workflow kit instead of a raw file dump.

# Python Code Node (Beta) Expert guidance for writing Python code in n8n Code nodes. ---

Imported source sections that did not map cleanly to the public headings are still preserved below or in the support files. Notable imported sections: ⚠️ Important: JavaScript First, Mode Selection Guide, Python Modes: Beta vs Native, Data Access Patterns, Critical: Webhook Data Structure, Return Format Requirements.

## When to Use This Skill

Use this section as the trigger filter. It should make the activation boundary explicit before the operator loads files, runs commands, or opens a pull request.

- ✅ You need statistics module for statistical operations
- ✅ You're significantly more comfortable with Python syntax
- ✅ Your logic maps well to list comprehensions
- ✅ You need specific standard library functions
- ✅ You need HTTP requests ($helpers.httpRequest())
- ✅ You need advanced date/time (DateTime/Luxon)

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

1. Confirm the user goal, the scope of the imported workflow, and whether this skill is still the right router for the task.
2. Read the overview, playbook, and source summary before loading any upstream support files.
3. Load only the references, examples, prompts, or scripts that materially change the outcome for the current request.
4. Execute the upstream workflow while keeping provenance and source boundaries explicit in the working notes.
5. Validate the result against the checklist, rubric, and expected evidence for the task.
6. Escalate or hand off to a related skill when the work moves out of this imported workflow's center of gravity.
7. Before merge or closure, record what was used, what changed, and what the reviewer still needs to verify.

### Imported Workflow Notes

#### Imported: ⚠️ Important: JavaScript First

**Recommendation**: Use **JavaScript for 95% of use cases**. Only use Python when:
- You need specific Python standard library functions
- You're significantly more comfortable with Python syntax
- You're doing data transformations better suited to Python

**Why JavaScript is preferred:**
- Full n8n helper functions ($helpers.httpRequest, etc.)
- Luxon DateTime library for advanced date/time operations
- No external library limitations
- Better n8n documentation and community support

---

## Examples

### Example 1: Ask for the upstream workflow directly

```text
Use @n8n-code-python to handle <task>. Start with the workflow playbook, load only the upstream files that change the outcome, and keep provenance visible in the answer.
```

**Explanation:** This is the safest starting point when the operator needs the imported workflow, but not the entire repository.

### Example 2: Inspect origin and import state

```bash
python3 skills/n8n-code-python/scripts/omni_import_print_origin.py
```

**Explanation:** Use this before review or troubleshooting when you need to confirm source repository, branch, commit, and path.

### Example 3: Review the support pack before execution

```bash
python3 skills/n8n-code-python/scripts/omni_import_list_support_pack.py
```

**Explanation:** This gives the operator a quick inventory of the imported references, examples, scripts, router notes, and manifest files.

### Example 4: Build a reviewer packet

```text
Review @n8n-code-python using the checklist, rubric, playbook, and source manifest, then summarize any gaps before merge.
```

**Explanation:** This is useful when the PR is waiting for human review and you want a repeatable audit packet.

### Imported Usage Notes

#### Imported: Quick Start

```python
# Basic template for Python Code nodes
items = _input.all()

# Process data
processed = []
for item in items:
    processed.append({
        "json": {
            **item["json"],
            "processed": True,
            "timestamp": datetime.now().isoformat()
        }
    })

return processed
```

### Essential Rules

1. **Consider JavaScript first** - Use Python only when necessary
2. **Access data**: `_input.all()`, `_input.first()`, or `_input.item`
3. **CRITICAL**: Must return `[{"json": {...}}]` format
4. **CRITICAL**: Webhook data is under `_json["body"]` (not `_json` directly)
5. **CRITICAL LIMITATION**: **No external libraries** (no requests, pandas, numpy)
6. **Standard library only**: json, datetime, re, base64, hashlib, urllib.parse, math, random, statistics

---

## Best Practices

Treat the generated public skill as a reviewable packaging layer around the upstream repository. The checklist, rubric, worksheet, template, and playbook are there to make the import auditable, not to hide the source material.

- Always Use .get() for Dictionary Access `python # ✅ SAFE: Won't crash if field missing value = item["json"].get("field", "default") # ❌ RISKY: Crashes if field doesn't exist value = item["json"]["field"] ### 2.
- Handle None/Null Values Explicitly python # ✅ GOOD: Default to 0 if None amount = item["json"].get("amount") or 0 # ✅ GOOD: Check for None explicitly text = item["json"].get("text") if text is None: text = "" ### 3.
- Use List Comprehensions for Filtering python # ✅ PYTHONIC: List comprehension valid = [item for item in items if item["json"].get("active")] # ❌ VERBOSE: Manual loop valid = [] for item in items: if item["json"].get("active"): valid.append(item) ### 4.
- Return Consistent Structure python # ✅ CONSISTENT: Always list with "json" key return [{"json": result}] # Single result return results # Multiple results (already formatted) return [] # No results ### 5.
- Debug with print() Statements python # Debug statements appear in browser console (F12) items = _input.all() print(f"Processing {len(items)} items") print(f"First item: {items[0] if items else 'None'}") ` ---
- Keep the imported skill grounded in the upstream repository; do not invent steps that the source material cannot support.
- Prefer the smallest useful set of support files so the workflow stays auditable and fast to review.

### Imported Operating Notes

#### Imported: Best Practices

### 1. Always Use .get() for Dictionary Access

```python
# ✅ SAFE: Won't crash if field missing
value = item["json"].get("field", "default")

# ❌ RISKY: Crashes if field doesn't exist
value = item["json"]["field"]
```

### 2. Handle None/Null Values Explicitly

```python
# ✅ GOOD: Default to 0 if None
amount = item["json"].get("amount") or 0

# ✅ GOOD: Check for None explicitly
text = item["json"].get("text")
if text is None:
    text = ""
```

### 3. Use List Comprehensions for Filtering

```python
# ✅ PYTHONIC: List comprehension
valid = [item for item in items if item["json"].get("active")]

# ❌ VERBOSE: Manual loop
valid = []
for item in items:
    if item["json"].get("active"):
        valid.append(item)
```

### 4. Return Consistent Structure

```python
# ✅ CONSISTENT: Always list with "json" key
return [{"json": result}]  # Single result
return results  # Multiple results (already formatted)
return []  # No results
```

### 5. Debug with print() Statements

```python
# Debug statements appear in browser console (F12)
items = _input.all()
print(f"Processing {len(items)} items")
print(f"First item: {items[0] if items else 'None'}")
```

---

## Troubleshooting

### Problem: The operator skipped the imported context and answered too generically

**Symptoms:** The result ignores the upstream workflow in `plugins/antigravity-awesome-skills-claude/skills/n8n-code-python`, fails to mention provenance, or does not use the support pack at all.
**Solution:** Re-open the checklist, playbook, source summary, and source manifest. Load only the upstream files that materially change the answer, then restate the provenance before continuing.

### Problem: The imported workflow feels incomplete during review

**Symptoms:** Reviewers can see the generated `SKILL.md`, but they cannot quickly tell which references, examples, or scripts matter for the current task.
**Solution:** Use the operator packet and support-pack listing to point at the exact references, examples, scripts, and router notes that justify the path you took. If the gap is still real, record it in the PR instead of hiding it.

### Problem: The task drifted into a different specialization

**Symptoms:** The imported skill starts in the right place, but the work turns into debugging, architecture, design, security, or release orchestration that a native skill handles better.
**Solution:** Use the router note and related skills section to hand off deliberately. Keep the imported provenance visible so the next skill inherits the right context instead of starting blind.

### Imported Troubleshooting Notes

#### Imported: Error Prevention - Top 5 Mistakes

### #1: Importing External Libraries (Python-Specific!)

```python
# ❌ WRONG: Trying to import external library
import requests  # ModuleNotFoundError!

# ✅ CORRECT: Use HTTP Request node or JavaScript
# Add HTTP Request node before Code node
# OR switch to JavaScript and use $helpers.httpRequest()
```

### #2: Empty Code or Missing Return

```python
# ❌ WRONG: No return statement
items = _input.all()
# Processing...
# Forgot to return!

# ✅ CORRECT: Always return data
items = _input.all()
# Processing...
return [{"json": item["json"]} for item in items]
```

### #3: Incorrect Return Format

```python
# ❌ WRONG: Returning dict instead of list
return {"json": {"result": "success"}}

# ✅ CORRECT: List wrapper required
return [{"json": {"result": "success"}}]
```

### #4: KeyError on Dictionary Access

```python
# ❌ WRONG: Direct access crashes if missing
name = _json["user"]["name"]  # KeyError!

# ✅ CORRECT: Use .get() for safe access
name = _json.get("user", {}).get("name", "Unknown")
```

### #5: Webhook Body Nesting

```python
# ❌ WRONG: Direct access to webhook data
email = _json["email"]  # KeyError!

# ✅ CORRECT: Webhook data under ["body"]
email = _json["body"]["email"]

# ✅ BETTER: Safe access with .get()
email = _json.get("body", {}).get("email", "no-email")
```

**See**: ERROR_PATTERNS.md for comprehensive error guide

---

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

#### Imported: Standard Library Reference

### Most Useful Modules

```python
# JSON operations
import json
data = json.loads(json_string)
json_output = json.dumps({"key": "value"})

# Date/time
from datetime import datetime, timedelta
now = datetime.now()
tomorrow = now + timedelta(days=1)
formatted = now.strftime("%Y-%m-%d")

# Regular expressions
import re
matches = re.findall(r'\d+', text)
cleaned = re.sub(r'[^\w\s]', '', text)

# Base64 encoding
import base64
encoded = base64.b64encode(data).decode()
decoded = base64.b64decode(encoded)

# Hashing
import hashlib
hash_value = hashlib.sha256(text.encode()).hexdigest()

# URL parsing
import urllib.parse
params = urllib.parse.urlencode({"key": "value"})
parsed = urllib.parse.urlparse(url)

# Statistics
from statistics import mean, median, stdev
average = mean([1, 2, 3, 4, 5])
```

**See**: STANDARD_LIBRARY.md for complete reference

---

#### Imported: Quick Reference Checklist

Before deploying Python Code nodes, verify:

- [ ] **Considered JavaScript first** - Using Python only when necessary
- [ ] **Code is not empty** - Must have meaningful logic
- [ ] **Return statement exists** - Must return list of dictionaries
- [ ] **Proper return format** - Each item: `{"json": {...}}`
- [ ] **Data access correct** - Using `_input.all()`, `_input.first()`, or `_input.item`
- [ ] **No external imports** - Only standard library (json, datetime, re, etc.)
- [ ] **Safe dictionary access** - Using `.get()` to avoid KeyError
- [ ] **Webhook data** - Access via `["body"]` if from webhook
- [ ] **Mode selection** - "All Items" for most cases
- [ ] **Output consistent** - All code paths return same structure

---

#### Imported: Additional Resources

### Related Files
- DATA_ACCESS.md - Comprehensive Python data access patterns
- COMMON_PATTERNS.md - 10 Python patterns for n8n
- ERROR_PATTERNS.md - Top 5 errors and solutions
- STANDARD_LIBRARY.md - Complete standard library reference

### n8n Documentation
- Code Node Guide: https://docs.n8n.io/code/code-node/
- Python in n8n: https://docs.n8n.io/code/builtin/python-modules/

---

**Ready to write Python in n8n Code nodes - but consider JavaScript first!** Use Python for specific needs, reference the error patterns guide to avoid common mistakes, and leverage the standard library effectively.

#### Imported: Mode Selection Guide

Same as JavaScript - choose based on your use case:

### Run Once for All Items (Recommended - Default)

**Use this mode for:** 95% of use cases

- **How it works**: Code executes **once** regardless of input count
- **Data access**: `_input.all()` or `_items` array (Native mode)
- **Best for**: Aggregation, filtering, batch processing, transformations
- **Performance**: Faster for multiple items (single execution)

```python
# Example: Calculate total from all items
all_items = _input.all()
total = sum(item["json"].get("amount", 0) for item in all_items)

return [{
    "json": {
        "total": total,
        "count": len(all_items),
        "average": total / len(all_items) if all_items else 0
    }
}]
```

### Run Once for Each Item

**Use this mode for:** Specialized cases only

- **How it works**: Code executes **separately** for each input item
- **Data access**: `_input.item` or `_item` (Native mode)
- **Best for**: Item-specific logic, independent operations, per-item validation
- **Performance**: Slower for large datasets (multiple executions)

```python
# Example: Add processing timestamp to each item
item = _input.item

return [{
    "json": {
        **item["json"],
        "processed": True,
        "processed_at": datetime.now().isoformat()
    }
}]
```

---

#### Imported: Python Modes: Beta vs Native

n8n offers two Python execution modes:

### Python (Beta) - Recommended
- **Use**: `_input`, `_json`, `_node` helper syntax
- **Best for**: Most Python use cases
- **Helpers available**: `_now`, `_today`, `_jmespath()`
- **Import**: `from datetime import datetime`

```python
# Python (Beta) example
items = _input.all()
now = _now  # Built-in datetime object

return [{
    "json": {
        "count": len(items),
        "timestamp": now.isoformat()
    }
}]
```

### Python (Native) (Beta)
- **Use**: `_items`, `_item` variables only
- **No helpers**: No `_input`, `_now`, etc.
- **More limited**: Standard Python only
- **Use when**: Need pure Python without n8n helpers

```python
# Python (Native) example
processed = []

for item in _items:
    processed.append({
        "json": {
            "id": item["json"].get("id"),
            "processed": True
        }
    })

return processed
```

**Recommendation**: Use **Python (Beta)** for better n8n integration.

---

#### Imported: Data Access Patterns

### Pattern 1: _input.all() - Most Common

**Use when**: Processing arrays, batch operations, aggregations

```python
# Get all items from previous node
all_items = _input.all()

# Filter, transform as needed
valid = [item for item in all_items if item["json"].get("status") == "active"]

processed = []
for item in valid:
    processed.append({
        "json": {
            "id": item["json"]["id"],
            "name": item["json"]["name"]
        }
    })

return processed
```

### Pattern 2: _input.first() - Very Common

**Use when**: Working with single objects, API responses

```python
# Get first item only
first_item = _input.first()
data = first_item["json"]

return [{
    "json": {
        "result": process_data(data),
        "processed_at": datetime.now().isoformat()
    }
}]
```

### Pattern 3: _input.item - Each Item Mode Only

**Use when**: In "Run Once for Each Item" mode

```python
# Current item in loop (Each Item mode only)
current_item = _input.item

return [{
    "json": {
        **current_item["json"],
        "item_processed": True
    }
}]
```

### Pattern 4: _node - Reference Other Nodes

**Use when**: Need data from specific nodes in workflow

```python
# Get output from specific node
webhook_data = _node["Webhook"]["json"]
http_data = _node["HTTP Request"]["json"]

return [{
    "json": {
        "combined": {
            "webhook": webhook_data,
            "api": http_data
        }
    }
}]
```

**See**: DATA_ACCESS.md for comprehensive guide

---

#### Imported: Critical: Webhook Data Structure

**MOST COMMON MISTAKE**: Webhook data is nested under `["body"]`

```python
# ❌ WRONG - Will raise KeyError
name = _json["name"]
email = _json["email"]

# ✅ CORRECT - Webhook data is under ["body"]
name = _json["body"]["name"]
email = _json["body"]["email"]

# ✅ SAFER - Use .get() for safe access
webhook_data = _json.get("body", {})
name = webhook_data.get("name")
```

**Why**: Webhook node wraps all request data under `body` property. This includes POST data, query parameters, and JSON payloads.

**See**: DATA_ACCESS.md for full webhook structure details

---

#### Imported: Return Format Requirements

**CRITICAL RULE**: Always return list of dictionaries with `"json"` key

### Correct Return Formats

```python
# ✅ Single result
return [{
    "json": {
        "field1": value1,
        "field2": value2
    }
}]

# ✅ Multiple results
return [
    {"json": {"id": 1, "data": "first"}},
    {"json": {"id": 2, "data": "second"}}
]

# ✅ List comprehension
transformed = [
    {"json": {"id": item["json"]["id"], "processed": True}}
    for item in _input.all()
    if item["json"].get("valid")
]
return transformed

# ✅ Empty result (when no data to return)
return []

# ✅ Conditional return
if should_process:
    return [{"json": processed_data}]
else:
    return []
```

### Incorrect Return Formats

```python
# ❌ WRONG: Dictionary without list wrapper
return {
    "json": {"field": value}
}

# ❌ WRONG: List without json wrapper
return [{"field": value}]

# ❌ WRONG: Plain string
return "processed"

# ❌ WRONG: Incomplete structure
return [{"data": value}]  # Should be {"json": value}
```

**Why it matters**: Next nodes expect list format. Incorrect format causes workflow execution to fail.

**See**: ERROR_PATTERNS.md #2 for detailed error solutions

---

#### Imported: Critical Limitation: No External Libraries

**MOST IMPORTANT PYTHON LIMITATION**: Cannot import external packages

### What's NOT Available

```python
# ❌ NOT AVAILABLE - Will raise ModuleNotFoundError
import requests  # ❌ No
import pandas  # ❌ No
import numpy  # ❌ No
import scipy  # ❌ No
from bs4 import BeautifulSoup  # ❌ No
import lxml  # ❌ No
```

### What IS Available (Standard Library)

```python
# ✅ AVAILABLE - Standard library only
import json  # ✅ JSON parsing
import datetime  # ✅ Date/time operations
import re  # ✅ Regular expressions
import base64  # ✅ Base64 encoding/decoding
import hashlib  # ✅ Hashing functions
import urllib.parse  # ✅ URL parsing
import math  # ✅ Math functions
import random  # ✅ Random numbers
import statistics  # ✅ Statistical functions
```

### Workarounds

**Need HTTP requests?**
- ✅ Use **HTTP Request node** before Code node
- ✅ Or switch to **JavaScript** and use `$helpers.httpRequest()`

**Need data analysis (pandas/numpy)?**
- ✅ Use Python **statistics** module for basic stats
- ✅ Or switch to **JavaScript** for most operations
- ✅ Manual calculations with lists and dictionaries

**Need web scraping (BeautifulSoup)?**
- ✅ Use **HTTP Request node** + **HTML Extract node**
- ✅ Or switch to **JavaScript** with regex/string methods

**See**: STANDARD_LIBRARY.md for complete reference

---

#### Imported: Common Patterns Overview

Based on production workflows, here are the most useful Python patterns:

### 1. Data Transformation
Transform all items with list comprehensions

```python
items = _input.all()

return [
    {
        "json": {
            "id": item["json"].get("id"),
            "name": item["json"].get("name", "Unknown").upper(),
            "processed": True
        }
    }
    for item in items
]
```

### 2. Filtering & Aggregation
Sum, filter, count with built-in functions

```python
items = _input.all()
total = sum(item["json"].get("amount", 0) for item in items)
valid_items = [item for item in items if item["json"].get("amount", 0) > 0]

return [{
    "json": {
        "total": total,
        "count": len(valid_items)
    }
}]
```

### 3. String Processing with Regex
Extract patterns from text

```python
import re

items = _input.all()
email_pattern = r'\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b'

all_emails = []
for item in items:
    text = item["json"].get("text", "")
    emails = re.findall(email_pattern, text)
    all_emails.extend(emails)

# Remove duplicates
unique_emails = list(set(all_emails))

return [{
    "json": {
        "emails": unique_emails,
        "count": len(unique_emails)
    }
}]
```

### 4. Data Validation
Validate and clean data

```python
items = _input.all()
validated = []

for item in items:
    data = item["json"]
    errors = []

    # Validate fields
    if not data.get("email"):
        errors.append("Email required")
    if not data.get("name"):
        errors.append("Name required")

    validated.append({
        "json": {
            **data,
            "valid": len(errors) == 0,
            "errors": errors if errors else None
        }
    })

return validated
```

### 5. Statistical Analysis
Calculate statistics with statistics module

```python
from statistics import mean, median, stdev

items = _input.all()
values = [item["json"].get("value", 0) for item in items if "value" in item["json"]]

if values:
    return [{
        "json": {
            "mean": mean(values),
            "median": median(values),
            "stdev": stdev(values) if len(values) > 1 else 0,
            "min": min(values),
            "max": max(values),
            "count": len(values)
        }
    }]
else:
    return [{"json": {"error": "No values found"}}]
```

**See**: COMMON_PATTERNS.md for 10 detailed Python patterns

---

#### Imported: Integration with Other Skills

### Works With:

**n8n Expression Syntax**:
- Expressions use `{{ }}` syntax in other nodes
- Code nodes use Python directly (no `{{ }}`)
- When to use expressions vs code

**n8n MCP Tools Expert**:
- How to find Code node: `search_nodes({query: "code"})`
- Get configuration help: `get_node_essentials("nodes-base.code")`
- Validate code: `validate_node_operation()`

**n8n Node Configuration**:
- Mode selection (All Items vs Each Item)
- Language selection (Python vs JavaScript)
- Understanding property dependencies

**n8n Workflow Patterns**:
- Code nodes in transformation step
- When to use Python vs JavaScript in patterns

**n8n Validation Expert**:
- Validate Code node configuration
- Handle validation errors
- Auto-fix common issues

**n8n Code JavaScript**:
- When to use JavaScript instead
- Comparison of JavaScript vs Python features
- Migration from Python to JavaScript

---
