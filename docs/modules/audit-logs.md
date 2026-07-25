# Audit Logs
## Overview
Read-only investigation workspace over the platform audit service and integrity evidence.
## Objectives
Let authorized reviewers answer who did what, when, where, why and with what result.
## Business Rules
Events are immutable; sensitive diffs are separately protected; exports require step-up and expire.
## Workflow
Choose scope/time → filter/search structured fields → inspect event/resource timeline → correlate → export/case-note → review.
## User Roles
Owners, auditors, security, System Administrators and domain reviewers receive distinct scoped access.
## Permissions
`audit.view`, `audit.sensitive_diff.view`, `audit.export`, `audit.integrity.verify`.
## Screens
Audit explorer, event detail, resource timeline, actor activity, integrity/retention status.
## Forms
Structured filters, saved review, export purpose/format, integrity verification range.
## Validation
Bounded date range, allowed filters/fields, scope, purpose and step-up freshness.
## Database Tables
`audit_events`, `audit_event_diffs`, `audit_integrity_batches`, `audit_exports`, `audit_review_cases`.
## Relationships
Events reference actor/resource/correlation and integrity batch; cases link selected events.
## API Endpoints
Read-only `/audit-events`, `/audit-events/{id}`, `/audit-integrity`, asynchronous export/case endpoints.
## Notifications
Export ready/expired, integrity failure, review assignment and suspicious threshold alert.
## Reports
Privilege, support access, exports, overrides, denials, integrity and review completion.
## Audit Logs
Audit viewing/export/case actions are themselves recorded in a separate protected category.
## UI Components
Filter bar, event table, structured diff, correlation timeline, integrity badge.
## Error Handling
Never broaden search on error; label archived/unavailable evidence and correlation ID.
## Empty States
No events for filters, cases, exports or integrity findings.
## Loading States
Cursor table and event detail skeleton.
## Success States
Review saved, export generated or integrity verified with signed evidence.
## Edge Cases
Deleted actor, anonymized PII, archived partition, clock skew, enormous export.
## Future Improvements
Case management and SIEM investigation links.
