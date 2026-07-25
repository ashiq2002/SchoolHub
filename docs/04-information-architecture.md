# Information Architecture

## Domain model

```text
Platform
└── Organization (tenant)
    ├── Schools
    │   ├── Campuses / academic units
    │   ├── Academic years and terms
    │   ├── Programs / classes / sections / subjects
    │   └── Service operations
    ├── People and identities
    │   ├── Learners and family relationships
    │   └── Employees and assignments
    ├── Finance and workforce policy
    └── Branding, subscription, integrations, audit
```

## Product areas

| Area | Contents | Primary owners |
|---|---|---|
| Home | Dashboard, tasks, approvals, recent items | All roles |
| People | Students, guardians, teachers, employees | Administration, HR |
| Academics | Structure, subjects, timetable, attendance, teaching work, exams, results | Academic leadership |
| Admissions | Inquiry, application, review, offer, enrollment | Reception, admissions |
| Finance | Fees, scholarships, accounting, billing, payroll | Finance, HR |
| Campus services | Library, transport, hostel, inventory, events, gallery, downloads | Service managers |
| Communications | Announcements, conversations, notifications, calendar | Authorized staff |
| Insights | Reports, analytics, saved reports | Leaders and specialists |
| Administration | Settings, access, documents, audit, integrations, branding | Owners and administrators |
| Platform | Tenants, plans, operations, support | System administrators |

## Content types

- **Master data:** people, institutions, structures, subjects, routes, assets, policies.
- **Transactions:** attendance marks, applications, charges, receipts, loans, journals, payroll runs.
- **Documents:** uploaded files and generated certificates/reports with classification and retention.
- **Communications:** authored messages, recipients, channel delivery attempts, consent evidence.
- **Analytical artifacts:** metrics, datasets, dashboards, saved filters, scheduled exports.
- **Evidence:** audit events, approval decisions, imports, integration runs, access reviews.

## Naming and findability

Routes and labels use user vocabulary and configurable institution terminology. Canonical IDs are opaque UUIDs; human-facing identifiers are tenant-configurable and unique within declared scope. Search results disclose only authorized fields and explain record type and school context. Archived items are excluded by default but discoverable with permission.

## URL model

Stable URLs follow `/app/{area}/{resource}/{id}` with tenant derived from verified host/session and school context represented by an explicit selector, never a trusted client claim. Views encode shareable non-sensitive filters in the query string. Modal-only actions still have accessible route or deep-link behavior where task continuity requires it.

## Metadata

Every governed content type defines owner, sensitivity classification, tenant and school scope, lifecycle state, retention rule, timestamps, actor attribution, source, tags, and searchable fields. Schema and API catalogs are generated from source where possible.
