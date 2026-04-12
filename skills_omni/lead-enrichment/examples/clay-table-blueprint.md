# Clay Table Blueprint

Use this as a logical column plan, not a product-specific mandate.

## Recommended sections

### Inputs
- account_id
- crm_company_id
- crm_contact_id
- company_domain
- company_name
- contact_full_name
- contact_linkedin_url
- source_list_name

### Pre-filters
- in_target_geo
- in_target_segment
- suppressed
- existing_customer
- minimum_identifier_ready
- enrich_this_row

### Company enrichment
- company_industry
- company_employee_count
- company_revenue_band
- company_hq_country
- company_tech_stack
- company_intent_signal

### Contact enrichment
- person_first_name
- person_last_name
- person_job_title
- person_seniority
- person_work_email
- person_phone
- person_linkedin_url_normalized

### Verification and quality
- email_verification_status
- email_verification_confidence
- email_verified_at
- match_confidence_company
- match_confidence_contact
- source_provider_email
- source_provider_title
- source_provider_company
- enriched_at

### Scoring and routing
- firmographic_score
- technographic_score
- intent_score
- negative_score_adjustment
- icp_score
- route_bucket
- outreach_ready

### CRM sync
- overwrite_decision
- sync_status
- sync_error_reason
- duplicate_flag
- qa_review_needed

## Notes

- Keep provenance close to the field it explains.
- Avoid writing back low-confidence values by default.
- Separate account-level and contact-level stages when possible.
