# Data Field Mapping Worksheet

Use this worksheet before building or revising an enrichment workflow.

## 1. Workflow scope

- Objective:
- Source systems:
- Destination systems:
- Data owner:
- Review date:

## 2. Minimum required identifiers

Mark the identifiers required before paid enrichment begins.

- [ ] Company domain
- [ ] Company name
- [ ] Company LinkedIn URL
- [ ] Contact full name
- [ ] Contact LinkedIn URL
- [ ] Contact first name + last name + company
- [ ] Other:

## 3. Field mapping table

| Source field | Normalized field | Destination field | Data type | Required | Provider(s) | Confidence field | Source field for provenance | Freshness window | Overwrite rule |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| company_domain | company.domain | | string | yes/no | | | | 90 days | never overwrite / overwrite if stale / overwrite if empty |
| company_name | company.name | | string | yes/no | | | | 180 days | |
| linkedin_url | person.linkedin_url | | string | yes/no | | | | 90 days | |
| work_email | person.work_email | | string | yes/no | | | | 30 days | |
| job_title | person.job_title | | string | yes/no | | | | 60 days | |

## 4. Recommended provenance fields

Capture these fields whenever your system supports them:

- `source_provider`
- `source_field_name`
- `match_confidence`
- `enriched_at`
- `verified_at`
- `verification_status`
- `overwrite_reason`
- `record_owner`

## 5. Overwrite policy prompts

Define field-by-field rules.

- Never overwrite manually entered CRM values unless:
- Prefer newer value when:
- Prefer higher-confidence value when:
- Block overwrite entirely for:
- Require human review for:

## 6. Identity and deduplication keys

### Company identity

Recommended candidates:
- primary domain
- normalized legal/company name
- CRM record id

### Contact identity

Recommended candidates:
- work email
- LinkedIn URL
- full name + company domain
- CRM contact id

## 7. Pre-sync QA checks

- [ ] Required identifiers present
- [ ] Destination fields exist
- [ ] Picklist values normalized
- [ ] Null/blank handling defined
- [ ] Duplicate logic approved
- [ ] Overwrite policy approved
- [ ] Provenance fields available
- [ ] Freshness windows documented
- [ ] Suppression fields protected
