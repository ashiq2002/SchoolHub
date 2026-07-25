# Certificates
## Overview
Template-driven generation and registry for academic, participation, conduct, employment and custom certificates.
## Objectives
Issue consistent, verifiable documents from approved source data without manual tampering.
## Business Rules
Templates are versioned; issuance snapshots data; serials are scope-unique; revoked documents remain in registry.
## Workflow
Design/approve template → request/select recipients → validate data → preview → approve → batch generate/sign → distribute/verify.
## User Roles
Authorized administrators issue; leaders approve protected types; recipients view; public verifier sees minimal result.
## Permissions
`certificates.template.manage|publish`, `certificate.generate|approve|issue|revoke`.
## Screens
Template catalog/editor, issue wizard, generation jobs, recipient registry, verification.
## Forms
Template metadata/variables, recipient/filter, signatory, issue/correction/revocation.
## Validation
Allowlisted variables, required source fields, duplicate policy, signatory authority and safe layout.
## Database Tables
`certificate_templates`, `certificate_template_versions`, `certificate_issues`, `certificate_recipients`, `certificate_versions`.
## Relationships
Issue references source person/event/result/employment and immutable template version.
## API Endpoints
`/certificate-templates`, `/certificate-issues`, generate/approve/revoke, public verification endpoint.
## Notifications
Approval task, issue ready, generation failure, expiry/revocation where applicable.
## Reports
Issued by type/period, failed/missing data, revoked, verification activity.
## Audit Logs
Template publication, recipient export, generation/download, issue, correction and revocation.
## UI Components
Template variable picker, preview, batch progress, certificate viewer, verification badge.
## Error Handling
Row-level batch results; no partial untracked issuance; safe PDF rendering fallback.
## Empty States
No templates, issues, recipients or verification result.
## Loading States
Preview and generation job progress.
## Success States
Template published, issue generated/distributed/verified.
## Edge Cases
Long names, multilingual text, changed logo/signatory, duplicate issue, source correction.
## Future Improvements
Digital credentials/wallets and standards-based verification.
