# Product Requirements

## Personas and jobs

| Persona | Primary jobs |
|---|---|
| Executive | Monitor institutional health, approve policy, compare schools, manage risk |
| School administrator | Configure periods and structures, coordinate daily operations, resolve exceptions |
| Educator | Take attendance, manage teaching work, assess learners, communicate with families |
| Learner | View schedule, work, results, fees, resources, requests, and announcements |
| Family member | Monitor authorized learners, pay fees, submit requests, receive communications |
| Operations specialist | Run admissions, finance, HR, library, transport, hostel, inventory, or exams |
| Platform operator | Provision tenants, support safely, monitor services, administer plans and releases |

## Experience requirements

- Home surfaces role-specific tasks, exceptions, deadlines, and recent context rather than a generic metric wall.
- Global search respects permissions and supports people, records, actions, and saved views.
- List views support server-side search, filters, sorting, column selection, saved views, bulk actions, pagination or virtualization, and governed export.
- Forms use clear sections, inline validation, draft recovery where appropriate, unsaved-change protection, and explicit success confirmation.
- Each page defines loading, empty, no-results, partial, stale, error, offline, and unauthorized states.
- Dates, time zones, language, number formats, grading vocabulary, academic structure, and names are localized.

## Functional release slices

### Foundation

Tenant provisioning, authentication, organization/school structure, academic year, users, roles, permissions, settings, files, notifications, audit, and imports.

### Core school operations

Admissions, students, guardians, teachers/employees, class/section/subject assignment, timetable, attendance, fees, communication, and baseline reports.

### Academic depth

Homework, assignments, exams, results, promotion, certificates, events, calendars, and analytics.

### Enterprise operations

HR, payroll, accounting, scholarships, library, transport, hostel, inventory, multi-school governance, subscriptions, billing, white label, and system administration.

## Common workflow contract

Stateful records expose allowed transitions rather than arbitrary status editing. Each transition declares prerequisites, permission, approver if any, side effects, notifications, audit event, idempotency behavior, and compensating action. Long operations return a job identifier and progress state.

## Quality attributes

| Attribute | Requirement |
|---|---|
| Scale | Partitionable tenant model; horizontal application scaling; asynchronous bulk work |
| Availability | Graceful dependency failure, retry safety, health checks, documented recovery |
| Security | Least privilege, strong tenant boundary, encryption, secure defaults, evidence trail |
| Accessibility | WCAG 2.2 AA and screen-reader/keyboard testing |
| Maintainability | Bounded modules, strict typing, contract tests, migrations, ownership metadata |
| Portability | Containerized SaaS and self-hosted distribution with externalized configuration |

## Analytics and instrumentation

Product events use a governed taxonomy and exclude unnecessary PII. Measure activation, workflow completion, error/retry rate, time-on-task, search success, notification delivery, report usage, and feature adoption by tenant cohort. Administrative audit logs are separate from product analytics.

## Out of scope for baseline

Real-time classroom video, plagiarism detection engines, full content-authoring LMS, generalized procurement, raw payment-card storage, device firmware, and country-specific statutory submissions are integration or later-phase capabilities.

## Release acceptance

Each feature requires traced business requirements, UX specification, authorization map, data migration, API contract, telemetry, accessibility review, threat assessment, automated tests, operational notes, and documentation. Feature flags protect staged rollouts and must have an expiry owner.
