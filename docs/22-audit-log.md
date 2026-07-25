# Audit Log

## Purpose and guarantees

Audit logs provide tamper-evident evidence of security, configuration, data, financial, academic, support, export, and workflow events. They are distinct from debug logs and product analytics. Application users cannot update or delete audit events.

## Event schema

Each event records event UUID, tenant/school, occurred/ingested time, actor type/id, delegated or support actor, action, resource type/id, outcome, reason, source, request/session/device identifiers, correlation/causation IDs, policy/role context, safe before/after field diff, IP/coarse location where lawful, and schema version. Sensitive values are masked or referenced rather than copied.

## Integrity and storage

Write audit events in the same transaction/outbox as material changes. Append to restricted storage with partitioning, retention locks where required, hash chaining or signed batch manifests, encrypted archival, and independently monitored write failures. Emergency buffering is bounded and alerts immediately; high-risk changes fail closed if required audit persistence cannot be guaranteed.

## Access and UX

The audit explorer supports scoped time, actor, action, resource, outcome, source, and correlation filters plus a resource timeline. Field-level sensitive evidence needs separate permission and step-up. Exports are asynchronous, watermarked, encrypted, expiring, and themselves audited. No global free-text indexing of sensitive values.

## Retention and review

Retention is policy- and jurisdiction-driven with legal hold. Regular reviews cover privilege changes, exports, support access, finance/assessment overrides, login anomalies, integration configuration, and repeated denials. Integrity verification and restore tests produce operator evidence.

## APIs

`GET /api/v1/audit-events` is read-only, cursor-paginated, allowlist-filtered, and rate-limited. `GET /audit-events/{id}` reveals only authorized fields. Services publish through an internal typed audit interface; no public endpoint accepts arbitrary customer-authored audit events.
