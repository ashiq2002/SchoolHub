# Reporting System

## Architecture

Operational reports query governed read models/read replicas with bounded ranges. Complex cross-domain and historical analytics use change-data capture or outbox-fed warehouse models. Reports never run unbounded ad hoc SQL against the primary database. A semantic catalog defines metrics once.

## Report definition

Every report specifies owner, audience, source, grain, dimensions, measures/formulas, parameters, default filters, school/tenant scope, permission and field rules, freshness, time zone, retention, supported formats, maximum size, and reconciliation test. Draft/posted and current/as-of distinctions are explicit.

## User experience

Users can search the catalog, configure allowlisted filters, preview a bounded sample, choose columns, save private/shared views, schedule delivery, and export PDF, XLSX, CSV, or print-optimized output. Long reports become background jobs with progress and expiring download. Empty/no-results and partial freshness states are clear.

## Security and privacy

Authorization applies during dataset construction, not only UI display. Exports require independent permission, row/field filtering, purpose where required, formula-injection prevention, watermark/classification, encryption, expiry, and audit. Small-group suppression protects sensitive analytics. Scheduled recipients are reauthorized at execution time.

## Performance

Use pre-aggregations, incremental warehouse models, tenant-fair job queues, concurrency and row limits, cancellation, caching by permission signature, and separate compute pools. Query budgets reject pathological requests with actionable guidance.

## APIs and operations

`GET /api/v1/reports`, `POST /reports/{key}/runs`, `GET /report-runs/{id}`, `POST /reports/{key}/saved-views`, and schedule endpoints form the API. Track queue/run latency, failure, rows/bytes, cancellation, delivery, cost, and reconciliation drift. Version definitions and notify owners of breaking changes.
