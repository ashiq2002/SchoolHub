# Testing Strategy

## Quality model

Testing is risk-based and traceable to business rules. The strongest coverage targets tenant isolation, authorization, finance, published academic records, identity, migrations, external callbacks, and bulk operations.

## Test layers

| Layer | Purpose |
|---|---|
| Static | Strict typing, linting, formatting, architecture rules, secret/license/security scans |
| Unit | Domain policies, calculations, validators, state machines, formatters |
| Component | UI behavior, accessibility semantics, loading/empty/error states |
| Integration | PostgreSQL constraints/RLS, repositories, queues, storage, provider adapters |
| Contract | OpenAPI compatibility, consumer/provider events, webhooks, generated clients |
| End-to-end | Critical role journeys in a production-like environment |
| Nonfunctional | Load, soak, resilience, accessibility, security, backup/restore, upgrade |

## Mandatory security cases

For every tenant resource: unauthenticated, wrong tenant, wrong school, wrong relationship/class, inactive assignment, missing field permission, guessed ID, export, bulk action, stale permission cache, and background-job scope. Tests must fail closed under policy, Redis, and identity-provider disruption.

## Domain verification

Property-based tests cover balanced journals, allocation totals, grade boundaries, timetable conflicts, effective dates, inventory conservation, and idempotency. Golden datasets reconcile dashboards/reports to source transactions. Time-dependent tests use controlled clocks and include time zones, DST, leap dates, and academic-period boundaries.

## UI and accessibility

Critical screens are tested at phone, tablet, desktop, 200% zoom, keyboard-only, reduced motion, and representative RTL/long-text locales. Automated axe-style checks are supplemented with screen-reader review. Visual regression uses stable seeded data and tolerances; it does not replace behavior assertions.

## Test data

Factories create synthetic tenant-separated data; production PII is forbidden in lower environments. Seed scenarios include empty, small, high-volume, archived, conflicting, and partially configured institutions. Tests clean by unique tenant namespace and run in parallel safely.

## Release gates

Required checks: changed-code unit/component coverage, critical integration and E2E suite, zero unresolved critical/high security findings, compatible API/migrations, performance budget, accessibility critical-path pass, and successful deployment smoke test. Flaky tests are quarantined only with owner, issue, expiry, and equivalent risk control.

## Production validation

Canary health checks validate login, scoped read, representative write/rollback, queue, storage, and provider stubs. Synthetic monitoring avoids real student data. Feature flags support cohort rollout. Error budget burn, correctness metrics, and business reconciliation determine rollback or forward fix.
