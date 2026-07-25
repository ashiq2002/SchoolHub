# Database Design

## Platform

PostgreSQL is the transactional system of record. Use UUIDv7-compatible identifiers for locality, `timestamptz` in UTC, explicit `date` for local calendar dates, integer minor units plus ISO currency for money, and `jsonb` only for bounded extension data rather than core relationships. Database migrations are forward-only, reviewed, and online-safe.

## Common columns

Tenant-owned mutable tables normally include:

```sql
id uuid primary key,
tenant_id uuid not null,
school_id uuid null,
created_at timestamptz not null,
created_by uuid null,
updated_at timestamptz not null,
updated_by uuid null,
deleted_at timestamptz null,
deleted_by uuid null,
version integer not null default 1
```

`school_id` is null only for organization-wide records. Actor foreign keys may be retained logically when identity deletion rules require immutable attribution. Append-only/event tables omit update/delete columns.

## Core schema map

| Schema/domain | Representative tables |
|---|---|
| identity | users, credentials, sessions, roles, permissions, role_assignments, delegations, service_principals |
| institution | tenants, schools, campuses, academic_years, terms, programs, classes, sections, subjects, policies |
| people | persons, names, contacts, addresses, relationships, documents, consent_records |
| student | student_profiles, applications, enrollments, section_assignments, promotions, transfers |
| academics | teaching_assignments, timetable_entries, attendance_sessions, attendance_marks, assignments, submissions, exams, marks, results |
| workforce | employee_profiles, positions, contracts, leave, employee_attendance, payroll_runs, payroll_items |
| finance | accounts, journal_entries, journal_lines, fee_plans, charges, payments, allocations, refunds, scholarships |
| services | library_items, loans, routes, vehicles, hostel_rooms, allocations, inventory_items, stock_movements |
| communication | templates, messages, recipients, notifications, delivery_attempts, events, calendar_entries |
| platform | subscriptions, entitlements, integration_connections, jobs, outbox_events, audit_events, feature_flags |

Module documents refine these tables. Physical names remain singular/plural consistently per chosen ORM convention.

## Relationships and invariants

- Tenant and school foreign keys are included in relationship constraints where PostgreSQL permits, preventing cross-scope references.
- A person is distinct from login identity and domain profiles; one person may be student, guardian, and employee.
- Enrollments and assignments are effective-dated; exclusion constraints prevent invalid overlaps.
- Monetary journal lines balance per entry and currency before posting.
- Published results reference immutable assessment/version snapshots.
- Files store metadata and object keys; binary payloads are never stored in primary database rows.

## Isolation and access

Enable forced row-level security on tenant tables. The application sets transaction-local tenant and actor context from verified authentication. Owners and migration roles do not serve application traffic. Background jobs establish scope before queries. Integration tests deliberately attempt cross-tenant joins, guessed IDs, invalid cache reuse, and privileged connection leakage.

## Indexing

All tenant queries begin with `tenant_id`; common school queries use `(tenant_id, school_id, ...)`. Partial indexes exclude soft-deleted rows. Unique business identifiers include tenant/school and active-state predicates. Index foreign keys, state/date work queues, outbox unpublished rows, and case-folded search fields. Review `EXPLAIN (ANALYZE, BUFFERS)` and production query statistics; avoid speculative indexes.

## Lifecycle and retention

Soft deletion applies to recoverable master data, not ledger/audit history. Privacy erasure anonymizes or cryptographically erases eligible PII while preserving legally required transactions. Legal holds override retention jobs. High-volume audit, notification, attendance, and telemetry tables are time-partition candidates with archival policies.

## Concurrency and migrations

Use optimistic version checks for user edits, row locks for short critical transitions, advisory locks only for named coarse operations, and idempotency tables for external commands. Expand/migrate/contract schema changes across releases. Backfills are resumable, throttled, tenant-batched, and observable; no unbounded table rewrite is deployed in a normal release.
