# Dashboard Specification

## Purpose

The dashboard is an actionable work queue and institutional pulse, not a decorative chart collection. Content is role-, school-, period-, permission-, and relationship-scoped.

## Shared layout

1. Context header: institution, academic period, date, and last refresh.
2. Priority strip: overdue approvals, unresolved exceptions, failed jobs, urgent notices.
3. “Today” workspace: schedule, tasks, attendance or operational work.
4. Key indicators: compact metrics with definition, comparison period, and drill-down.
5. Activity and deadlines: permission-safe recent events and calendar.

Users may reorder approved widgets and hide optional widgets. Administrators define role defaults. Layout settings do not alter data access.

## Role views

| Audience | Priority widgets |
|---|---|
| Owner/executive | Enrollment, attendance, collection, expense, staffing, school comparison, compliance exceptions |
| Principal | Today’s attendance, uncovered classes, pending approvals, assessment readiness, incidents |
| Teacher/class teacher | Schedule, attendance to take, work to review, learner alerts, announcements |
| Student | Today’s classes, due work, attendance summary, results/releases, fees, notices |
| Parent/guardian | Learner switcher, attendance alerts, due work, fees/actions, messages, events |
| Reception/admissions | New inquiries, incomplete applications, appointments, decisions and follow-ups |
| HR/payroll | Leave, missing attendance, expiring documents, payroll exceptions |
| Accountant | Collections, overdue balances, reconciliation exceptions, approvals, cash closing |
| Service managers | Domain tasks, capacity, exceptions, overdue/incident indicators |
| System administrator | Provisioning, integrations, failed jobs, security/access findings, storage/usage |

## Metric contract

Every metric defines business formula, owner, source, grain, inclusion/exclusion, freshness, time zone, comparison, privacy threshold, and drill-through behavior. Financial metrics reconcile to posted ledger data; draft data is labeled. Counts are never inferred client-side from paginated lists.

## States and resilience

Widgets load independently with stable dimensions and skeletons. A failed widget shows retry and correlation ID without blanking the dashboard. Cached values show “as of” time. Empty widgets distinguish healthy zero, not configured, and no permission. Refresh is deduplicated and rate-limited.

## Performance and accessibility

Critical shell and first three widgets target useful content within 2 seconds on a typical institutional connection. Defer below-fold charts, aggregate server-side, and cache by tenant/scope/permission signature. Charts include text summaries, tabular alternatives, non-color encoding, keyboard-accessible detail, and locale-aware labels.

## APIs and telemetry

`GET /api/v1/dashboard` returns layout plus independently cacheable widget descriptors; `GET /api/v1/dashboard/widgets/{key}` returns metric data; `PATCH /api/v1/me/dashboard-layout` updates preferences using revision control. Record widget latency, errors, drill-through, task completion, and staleness without embedding sensitive values in analytics.
