# Performance and Scalability

## Service objectives

| Workload | Target |
|---|---|
| Common cached read | p95 ≤ 250 ms server time |
| Common transactional write | p95 ≤ 500 ms server time |
| Search | p95 ≤ 750 ms |
| Dashboard useful content | ≤ 2 s at p75 client conditions |
| Bulk operation acceptance | ≤ 1 s; execution asynchronous |
| Core API availability | 99.9% monthly initial SLO |

Targets exclude external payment/communication completion and are measured per region, endpoint class, and tenant cohort.

## Capacity model

Model active users, concurrent sessions, school-day peaks, attendance bursts, result publication fan-out, fee deadlines, imports, file traffic, and scheduled reports. Load tests include one dominant tenant and many small tenants. Establish database connections, CPU, queue lag, object throughput, cache memory, and provider quotas with at least 30% operating headroom.

## Application strategy

Paginate and filter on the server, project only required columns, batch relationship loads, stream large downloads, virtualize long client lists, split code by route, lazy-load secondary panels, and optimize images into responsive formats. Prevent duplicate requests and cancel stale searches. CPU-heavy generation runs in workers.

## Data strategy

Use tenant-leading indexes and measured query plans, bounded connection pools, transaction timeouts, read replicas for explicitly stale reads, and precomputed projections for expensive dashboards. Partition only high-volume tables after observing growth. Database constraints preserve correctness; caches never become authoritative.

## Caching

Cache reference data, permissions, entitlements, and aggregates with tenant/school/policy/version in keys. Use short TTL plus event invalidation. Protect against stampedes with request coalescing and jitter. Do not cache unauthorized representations across users. Redis failure degrades to controlled database access with circuit breakers and tighter limits.

## Queue and backpressure

Separate interactive, notification, import/export, report, and maintenance queues. Enforce tenant-fair concurrency and job size limits. Scale workers on lag and processing time. Retries are bounded and idempotent; poison jobs enter a visible dead-letter workflow. Providers receive per-channel throttling and circuit breaking.

## CDN and files

Serve immutable hashed assets via CDN. Private objects require short-lived signed access after application authorization. Generate thumbnails and optimized variants asynchronously. Upload directly to quarantine object storage to avoid application-memory pressure.

## Budgets and testing

Define client JavaScript, CSS, image, query-count, payload, and render budgets per route class. CI catches regressions with representative datasets; pre-release tests cover baseline, spike, soak, failover, and recovery. Production uses tracing, query statistics, real-user monitoring, saturation alerts, and per-tenant cost signals.

## Degradation

When constrained, preserve authentication, attendance capture, essential lookup, and payment confirmation. Defer analytics freshness, previews, noncritical notifications, and large exports. Clearly label stale data and queue work; never silently drop or claim success.
