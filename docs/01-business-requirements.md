# Business Requirements

## Stakeholders

Institution owners need governance and sustainability; administrators need dependable operations; educators need low-friction academic tools; learners and families need timely, comprehensible services; finance and HR teams need controlled ledgers and approvals; auditors need immutable evidence; implementation partners need configuration and migration tools; platform operators need safe multi-tenant administration.

## Business capabilities

| ID | Capability | Required outcome |
|---|---|---|
| BR-01 | Institution management | Model organizations, schools, campuses, programs, academic periods, classes, sections, and policies |
| BR-02 | Identity and access | One person identity with scoped roles, delegated access, SSO readiness, MFA, and session control |
| BR-03 | Student lifecycle | Manage inquiry through admission, enrollment, promotion, transfer, alumni, and re-admission |
| BR-04 | Academic operations | Plan curriculum, subjects, timetables, attendance, teaching work, exams, grading, and results |
| BR-05 | Workforce | Manage employees, teachers, leave, attendance, payroll inputs, documents, and assignments |
| BR-06 | Finance | Bill, collect, waive, refund, reconcile, account, budget, and report with approvals and auditability |
| BR-07 | Services | Operate library, transport, hostel, inventory, events, documents, and certificates |
| BR-08 | Engagement | Deliver targeted, consent-aware communication and notifications across channels |
| BR-09 | Insight | Provide operational reports, scheduled exports, dashboards, and governed analytics |
| BR-10 | Platform | Support subscriptions, white labeling, self-hosting, multi-school governance, integrations, and audit |

## Business rules

- Organizations are tenants. A tenant contains one or more schools; a school may contain campuses and academic units.
- Academic records are immutable after approved publication except through a correction workflow retaining before/after values.
- Financial postings use balanced, append-only journal entries. Corrections reverse and repost; they do not overwrite history.
- Effective-dated configuration preserves the policy used when a transaction occurred.
- Personally identifiable and sensitive records are disclosed only for a documented purpose and scoped assignment.
- Destructive business actions use archive, void, withdrawal, or soft deletion according to domain policy.
- Cross-school visibility is denied unless an organization-level assignment explicitly grants it.
- Bulk actions require preview, validation summary, authorization, idempotency, and downloadable results.

## Commercial requirements

- Entitlements are controlled by plan, add-on, tenant setting, school setting, role, and permission.
- Trials, grace periods, upgrades, downgrades, usage limits, invoices, taxes, credits, and cancellation must be modeled.
- White-label customers may configure domain, approved visual tokens, email identity, legal links, locale, and enabled modules without code forks.
- Self-hosted releases must be versioned, documented, observable, upgradeable, and license-aware.

## Compliance and records

The product must support configurable retention, legal hold, consent, subject-access export, correction, anonymization, and deletion workflows. Country packs define applicable education, child privacy, labor, tax, and accounting controls. The platform supplies controls and evidence; institutions remain responsible for lawful configuration and use.

## Service and operational requirements

- SaaS includes environment isolation, backups, restore testing, incident response, status communication, and support tooling.
- Imports are resumable and produce row-level validation results and reconciliation totals.
- Every material business transition records actor, time, tenant, school, source, reason, correlation ID, and changed fields.
- Critical workflows remain usable on narrow screens and degraded networks; long-running work is asynchronous.

## Acceptance criteria

A release is business-ready when critical journeys have owner-approved acceptance tests, permissions and audit events are verified, reports reconcile to source transactions, accessibility and performance budgets pass, operational runbooks exist, and rollback or forward-fix procedures are proven.
