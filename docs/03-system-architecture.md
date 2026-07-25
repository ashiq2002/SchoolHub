# System Architecture

## Architecture drivers

Tenant isolation, auditable workflows, configurable institution models, regional deployment, predictable self-hosting, bursty academic workloads, and a small number of coherent source-of-truth domains drive the design. “Millions of users” is treated as a capacity objective validated by workload models, not justification for premature services.

## System context

```text
Browser / mobile web / integration clients
                 │ HTTPS
        CDN + WAF + load balancer
                 │
        Web application / API
  ┌──────────────┼──────────────┐
  │ domain modules and policy   │
  │ workflow + outbox + search  │
  └───────┬──────┬──────┬──────┘
          │      │      │
 PostgreSQL   Redis   Object storage
          │      │      │
          └── durable queue ── workers
                    │
          email/SMS/push, payments,
          SSO, accounting/government APIs
                    │
       CDC/ETL → analytical warehouse
```

## Deployment units

- **Web client:** responsive TypeScript application, server-rendered shell where beneficial, code split by domain.
- **API:** stateless application exposing versioned REST and internal domain interfaces.
- **Workers:** notifications, imports, exports, report generation, search indexing, webhooks, and scheduled policy jobs.
- **Scheduler:** leader-elected trigger that enqueues idempotent jobs; it does not perform business work itself.
- **Data services:** PostgreSQL, Redis, S3-compatible object storage, durable broker; optional warehouse and search engine at scale.

## Modular boundaries

Domains own tables and write services. Cross-domain reads use application queries or published read models; cross-domain writes use commands/events. Initial modules deploy together but cannot directly mutate another module’s tables. Key domains are Identity & Access, Institution, People, Student Lifecycle, Academics, Workforce, Finance, Campus Services, Communication, Insight, and Platform.

## Multi-tenancy

Tenant is resolved from verified host and identity, installed in immutable request context, and injected into repositories. Shared PostgreSQL schemas use mandatory `tenant_id`, composite uniqueness, tenant-leading indexes, and row-level security. Large/regulatory tenants may use a dedicated database through the same repository contract. Connection pools reset context on checkout/check-in. Cache keys, object paths, jobs, logs, metrics, and events carry tenant scope.

## Consistency and events

Transactions preserve invariants inside a module. An outbox row is committed with domain changes; workers publish versioned events with event ID, tenant, aggregate, sequence, occurred time, schema version, and correlation/causation IDs. Consumers are idempotent and track processed IDs. Sagas use explicit compensations and visible failure states. Financial and assessment finalization favor consistency; notification and analytics projections are eventually consistent.

## Scale strategy

Stateless tiers scale horizontally. Read replicas serve eligible stale reads. Tenant-aware routing prevents a single large tenant from exhausting shared pools. Tables partition by time/tenant only after measurement. Hot aggregates use versioned caches and precomputed projections. Bulk/report workloads have separate queues, quotas, and database pools. Extraction candidates are notification delivery, reporting, search, files, and payment orchestration, based on independent scale or compliance needs.

## Reliability

All remote calls have deadlines, bounded exponential retry with jitter, circuit breaking, and idempotency. Readiness checks exclude overloaded instances; liveness checks detect deadlock only. Queue retries end in a monitored dead-letter workflow. Deployments are backward compatible across rolling versions. Backups are encrypted and restore-tested. Dependencies degrade locally so, for example, an SMS outage does not block attendance.

## Architecture decisions

Record consequential decisions as ADRs under `docs/adr/`. Required ADRs before implementation: primary backend/frontend stack, tenant database topology, identity provider strategy, queue technology, reporting warehouse trigger, file scanning stack, regional topology, and self-hosted support matrix.
