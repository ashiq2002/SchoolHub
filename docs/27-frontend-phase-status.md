# Frontend Phase Status

This document tracks the frontend against `25-development-roadmap.md` and the module specifications. A visually complete mock is not considered a completed vertical slice until its API, authorization, audit, telemetry, tests, and rollout controls exist.

| Phase | Frontend status | Implemented routes | Remaining work |
|---|---|---|---|
| 0. Discovery | Complete for current prototype scope | Design tokens, architecture and implementation plans | Formal ADR approval, browser/country research and production workload budgets |
| 1. Platform foundation | UI foundation in progress | Authentication, organization chooser, session devices, administration control center, effective school settings, help and notifications | Real identity/session API, RBAC policy response, audit/jobs/files/notification APIs, E2E security suite |
| 2. Core operations | Designed prototype in progress | People identity directory, student enrollment lifecycle, teacher workload and coverage, academic years, classes, attendance, timetable, fees/finance and communication | Persisted admissions/enrollment mutations, student profile detail tabs, payment allocation and reconciliation APIs, audited mutations |
| 3. Academic depth | Designed prototype in progress | Exams/results overview, event month/agenda calendar and governed report catalog/analytics | Homework, assignments, marks entry, moderation, publication, promotion, certificates and real report execution |
| 4. Enterprise services | Not started | None | HR/payroll, accounting, scholarships, library, transport, hostel, inventory and documents |
| 5. Commercial scale | Not started | None | Subscription, billing, multi-school, white label, integrations and self-hosted operations |
| 6. Intelligence | Not started | None | Governed AI assistant, evaluation, privacy, human review and advanced analytics |

## Current design rule

Each module must implement its documented primary workflow and states. Generic dashboard templates may supply primitives only; they must not substitute for a domain-specific information architecture.

## Content audit — 22 July 2026

- All currently rendered application routes contain module-specific school-management content; the previous configurable operations workspace is no longer used.
- People, Students, Teachers, Calendar, Administration, and School Settings now use dedicated workflow layouts and domain language.
- Unknown application routes resolve to the neutral not-found state instead of a feature placeholder.
- Dates representing the current prototype day are normalized to 22 July 2026.
- Displayed records and metrics are deterministic prototype fixtures. They demonstrate intended production information architecture but are not live school data until the API slices listed above are integrated.
