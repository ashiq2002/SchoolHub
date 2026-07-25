# Reports
## Overview
Governed catalog, execution, saved views, scheduling and export of operational and formal reports.
## Objectives
Provide consistent answers that reconcile to source data and respect row/field/export policy.
## Business Rules
Definitions are versioned; execution reauthorizes; scheduled recipients are checked at run time; exports expire.
## Workflow
Find report → configure filters → preview → run → download/print → save/schedule/share → monitor.
## User Roles
All roles run permitted reports; report owners define; administrators govern schedules/capacity.
## Permissions
`reports.definition.view|manage`, `report.run|export|schedule|share`, underlying data permissions.
## Screens
Catalog, report parameters, preview/result, saved reports, schedules, run history/operations.
## Forms
Filters/columns, format, saved view, schedule/recipient, definition metadata.
## Validation
Range/row limits, allowed fields, current permissions, locale/time zone and recipient authorization.
## Database Tables
`report_definitions`, `report_versions`, `saved_reports`, `report_runs`, `report_schedules`, `report_artifacts`.
## Relationships
Definitions reference governed datasets; runs link actor/filter snapshot and expiring document.
## API Endpoints
`/reports`, `/reports/{key}/runs`, `/report-runs/{id}`, saved view/schedule endpoints.
## Notifications
Run ready/failed, scheduled delivery, definition change and expiring schedule owner.
## Reports
Platform usage, latency/failure, rows/bytes, schedule health, exports and reconciliation drift.
## Audit Logs
Sensitive run/export/share, definition/version, schedule and artifact access.
## UI Components
Catalog search, filter builder, result table, job progress, format/export menu.
## Error Handling
Bounded/cancellable jobs; partial data is labeled; failed run retains safe diagnostics.
## Empty States
No permitted reports, results, saved views, schedules or run history.
## Loading States
Catalog/result skeleton and asynchronous progress.
## Success States
Run complete with freshness/scope; schedule or saved view confirmed.
## Edge Cases
Permission revoked mid-run, huge dataset, stale warehouse, formula injection, deleted definition.
## Future Improvements
Natural-language report discovery with governed semantic translation.
