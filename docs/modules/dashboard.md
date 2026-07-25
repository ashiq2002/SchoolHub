# Dashboard
## Overview
Role- and context-aware workspace aggregating tasks, exceptions, schedules, and governed metrics.
## Objectives
Make the next useful action obvious and expose institutional health without leaking data.
## Business Rules
Widgets require permissions; metrics use catalog definitions; preferences cannot broaden scope; cached data shows freshness.
## Workflow
Resolve role/context → load layout → independently fetch widgets → drill into filtered source → complete task → refresh projection.
## User Roles
Every role receives a distinct default layout; administrators curate templates; users personalize optional widgets.
## Permissions
Underlying resource permissions plus `dashboard.layout.update` and `dashboard.template.manage`.
## Screens
Home dashboard, widget detail/drill-down, layout editor, role-template editor.
## Forms
Context/date selection, widget configuration, layout reorder, comparison period.
## Validation
Allowlisted widgets and ranges; validate school/period scope and metric compatibility.
## Database Tables
`dashboard_templates`, `dashboard_template_widgets`, `user_dashboard_layouts`, `metric_snapshots`.
## Relationships
Templates target roles; layouts belong to user/context; widgets reference report/metric definitions.
## API Endpoints
`GET /dashboard`, `/dashboard/widgets/{key}`, `PATCH /me/dashboard-layout`, `/dashboard-templates`.
## Notifications
Dashboard itself sends none; task widgets link to source notifications and approvals.
## Reports
Widget adoption, latency, freshness, errors, drill-through and task completion.
## Audit Logs
Template changes and sensitive metric exports; personal layout changes are low-risk activity.
## UI Components
Context header, priority strip, stat, task list, schedule, chart with table alternative, skeleton.
## Error Handling
Fail widgets independently with retry/correlation ID; retain healthy content.
## Empty States
Healthy zero, unconfigured, no tasks, and no permission are visually distinct.
## Loading States
Stable widget skeletons and progressive above-fold loading.
## Success States
Freshness timestamp and completion feedback after task actions.
## Edge Cases
Multi-role conflicts, stale warehouse, academic rollover, dominant tenant load, deleted saved filter.
## Future Improvements
Predictive exceptions, administrator cohorts, offline read snapshot.
