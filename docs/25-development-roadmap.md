# Development Roadmap

## Delivery approach

Use vertical slices that include UX, authorization, data, API, audit, telemetry, tests, operations, and migration. Release behind tenant cohorts and measurable exit criteria. Estimates follow discovery and team capacity; phases express dependency order, not calendar promises.

## Phases

| Phase | Scope | Exit criteria |
|---|---|---|
| 0. Discovery | Country/institution research, journey maps, data inventory, ADRs, threat model, design prototypes | Approved scope, risks, stack, migration and compliance decisions |
| 1. Platform foundation | Tenancy, auth, institution structure, RBAC, settings, files, jobs, audit, notification, design system, CI/CD | Isolation/security tests, restore/deploy proof, accessible shell |
| 2. Core operations | People, admissions, enrollment, class/section/subject, timetable, attendance, fees/payments, communications | Pilot school completes daily and fee journeys with reconciliation |
| 3. Academic depth | Homework, assignments, exams, results, promotion, certificates, calendar/events, reports | Complete academic period and publication cycle |
| 4. Enterprise services | HR/payroll, accounting, scholarship, library, transport, hostel, inventory, documents | Domain reconciliations, approvals, service-manager pilots |
| 5. Commercial scale | Subscription, billing, multi-school, white label, analytics, integrations, self-hosted tooling | Multi-school and self-hosted production readiness |
| 6. Intelligence | Governed AI assistant and advanced analytics | Evaluation, privacy, human-review, cost and safety gates |

## Cross-phase workstreams

Data migration, accessibility, localization/country packs, security, performance, observability, support readiness, documentation, and implementation-partner tooling run throughout. Each phase updates workload models and disaster recovery evidence.

## Definition of ready

Validated user problem and business owner; workflow/states and terminology; permission/field matrix; schema and API contract; privacy/threat assessment; UX including all states; migration/integration dependencies; metrics; acceptance tests; rollout and operational plan.

## Definition of done

Reviewed implementation, automated risk-proportionate tests, accessibility pass, security checks, performance budget, reconciled reports, production telemetry, runbook, documentation, migration/rollback path, feature-flag owner/removal date, pilot acceptance, and no unresolved critical findings.

## Governance and risk

A product/architecture/security/data council reviews cross-domain contracts and policy changes. Top program risks are scope expansion, regional policy variance, poor source data, over-customization, cross-tenant defects, provider dependency, reporting load, and adoption. Mitigate through configuration limits, migration rehearsals, contract tests, isolation tests, capacity trials, and staged rollout.
