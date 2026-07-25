# Deployment and Operations

## Supported topologies

- **SaaS:** multi-tenant regional clusters, managed data services, centralized control plane, optional dedicated tenant data plane.
- **Self-hosted:** versioned container bundle and Helm chart for a documented Kubernetes baseline; external PostgreSQL, Redis, S3-compatible storage, and SMTP/provider credentials.
- **White label:** SaaS or self-hosted topology with verified domain, approved tokens, communication identity, and tenant configuration; no source fork.

## Environments

Development, ephemeral preview, test, staging, and production use the same container artifacts promoted by digest. Configuration is externalized and validated at startup. Lower environments use synthetic data and separate credentials/accounts. Production access is just-in-time and audited.

## Delivery pipeline

1. Validate format, types, unit tests, architecture rules, generated contracts, and migrations.
2. Scan secrets, dependencies, licenses, code, IaC, containers, and SBOM.
3. Build signed reproducible images and immutable web assets.
4. Run integration, contract, E2E, accessibility, and migration tests.
5. Deploy to staging, execute smoke/load checks, and require approvals for production.
6. Canary by instances/tenants, watch SLOs and business metrics, then progress or rollback.

## Release compatibility

Use expand/migrate/contract database changes. Old and new application versions coexist during rolling deploys. Events and APIs remain backward compatible for the published window. Feature flags separate deployment from release and have owner, purpose, cohort, creation, and removal date.

## Infrastructure

Infrastructure as code defines network segmentation, WAF/load balancers, compute, databases, cache, broker, object storage, CDN, DNS/certificates, secret manager, observability, backups, and IAM. Production changes require review and drift detection. Workloads run as non-root with read-only filesystems where possible, resource limits, disruption budgets, anti-affinity, and network policy.

## Observability

Structured logs, metrics, and OpenTelemetry traces share correlation IDs and normalized tenant pseudonyms. Dashboards cover golden signals, database pools/replication, cache, queues, jobs, providers, tenant hotspots, and business correctness. Alerts are actionable, routed by ownership, linked to runbooks, and tested.

## Backup and disaster recovery

Encrypted point-in-time database recovery targets RPO 5 minutes and RTO 60 minutes for SaaS core. Object versioning and cross-region replication follow classification. Restore tests occur at least quarterly and verify application-level reconciliation, not merely database startup. Regional failover has explicit DNS, secrets, queue, and provider procedures.

## Self-hosted lifecycle

Publish supported version matrix, sizing guide, preflight validator, upgrade/rollback steps, backup requirements, health diagnostics, air-gapped process if contracted, and end-of-support policy. Upgrade tooling checks extensions, capacity, schema, license, configuration deprecations, and backup freshness before mutation.

## Operational runbooks

Required runbooks cover elevated errors, database saturation/failover, queue backlog, cache outage, storage/provider outage, compromised credential, tenant suspension, stuck migration, bad release, restore, region loss, data export/deletion, and support-access approval.
