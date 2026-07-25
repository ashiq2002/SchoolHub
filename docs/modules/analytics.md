# Analytics
## Overview
Interactive governed metrics, trends, cohorts and drill-down built from analytical models.
## Objectives
Support evidence-based decisions without turning dashboard estimates into transactional truth.
## Business Rules
Metrics have one catalog definition; privacy thresholds suppress small groups; freshness and draft/posted state are explicit.
## Workflow
Choose dashboard/question → set scope/range → explore/filter → drill to permitted detail → save/share/export.
## User Roles
Leaders and analysts explore broad scoped data; specialists use domain analytics; users see own summaries.
## Permissions
`analytics.dashboard.view|manage`, dataset/metric permissions, drill/export and sensitive dimension controls.
## Screens
Analytics home, domain dashboard, metric detail, cohort explorer, saved views, data-quality/freshness.
## Forms
Scope/date/filter, comparison, segment, visualization, saved/shared view.
## Validation
Compatible grain/dimension, privacy threshold, range/query budget, permission and freshness.
## Database Tables
`metric_definitions`, `analytics_dashboards`, `dashboard_widgets`, `analytics_saved_views`, `data_freshness`, warehouse models.
## Relationships
Widgets reference metrics/datasets; analytical facts derive from source events and conformed dimensions.
## API Endpoints
`/analytics/dashboards`, `/analytics/metrics/{key}`, query/drill/saved-view endpoints.
## Notifications
Scheduled insight, threshold alert, stale/failed data pipeline and shared view.
## Reports
Metric catalog, adoption, freshness, data quality, query performance and controlled exports.
## Audit Logs
Sensitive drill/export/share, definition/dashboard publication and threshold configuration.
## UI Components
Metric card, chart with table, filter bar, cohort builder, freshness badge, definition popover.
## Error Handling
Show stale/partial source and retry; reject excessive queries with refinement guidance.
## Empty States
No data, insufficient cohort, no permitted dashboard or saved view.
## Loading States
Independent stable widgets and query progress/cancel.
## Success States
Fresh query, saved/shared view or alert configured.
## Edge Cases
Late events, backfill, metric redefinition, small cohort, school merger, timezone cutoff.
## Future Improvements
Forecasting, causal experimentation framework and privacy-preserving benchmarks.
