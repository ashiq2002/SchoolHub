# RBAC Permission Matrix

## Permission grammar

Permissions use `domain.resource.action`, for example `academics.attendance.mark` or `finance.refund.approve`. Standard actions are `view`, `create`, `update`, `transition`, `approve`, `delete`, `export`, `manage`, and `administer`. Checks require permission, active assignment, tenant, resource scope, relationship constraints, record state, and applicable field policy.

## Baseline role matrix

Legend: **A** administer, **M** manage, **O** assigned/own scope, **V** view, **-** denied by default. This is a role-template baseline; tenant changes are versioned and must not exceed license or protected-policy limits.

| Capability | Org Owner | Principal | Vice Principal | Teacher | Class Teacher | Parent | Student | Receptionist | HR | Accountant | Service Manager | Exam Controller | Sys Admin |
|---|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|---:|
| Organization/schools | A | V | V | V | V | V | V | V | V | V | V | V | M |
| Users/role assignments | A | M | V | - | - | - | - | - | - | - | - | - | A |
| Students/relationships | M | M | M | O | O | O | O | M | V | V | O | V | M |
| Admissions | V | M | M | V | V | O | O | M | - | V | - | - | M |
| Academic structure | V | M | M | O | O | V | V | V | - | - | - | M | M |
| Attendance | V | M | M | O | O | O | O | V | - | - | O | V | M |
| Teaching work | V | M | M | O | O | O | O | - | - | - | - | V | M |
| Exams/results | V | M | M | O | O | O | O | - | - | - | - | A | M |
| Fees/receipts | V | V | V | - | V | O | O | V | - | A | - | - | M |
| Accounting | V | V | - | - | - | - | - | - | - | A | - | - | M |
| HR/payroll | V | V | V | O | O | - | - | - | A | M | O | - | M |
| Library/transport/hostel/inventory | V | M | M | O | O | O | O | V | - | V | A | - | M |
| Communications/events | M | M | M | O | O | O | O | O | O | O | O | O | M |
| Reports/analytics | A | M | M | O | O | O | O | O | O | O | O | O | M |
| Settings/integrations | A | V | - | - | - | - | - | - | - | - | - | - | A |
| Audit logs | M | V | V | - | - | - | - | - | V | V | - | V | A |

Service Manager represents Librarian, Transport Manager, Hostel Manager, and Inventory Manager only within their assigned domain. Super Admin and platform support are governed by a separate platform policy and audited break-glass process.

## Field and action restrictions

- Sensitive health, safeguarding, compensation, identity, and financial fields need dedicated permissions and masking.
- Export is independent from view because it increases disclosure risk.
- Bulk operations and approval use dedicated permissions.
- A teacher cannot edit attendance or marks outside an open policy window without correction approval.
- Families cannot infer unrelated learners through search, IDs, errors, or notifications.
- System administrators manage configuration but do not automatically receive payroll, safeguarding, or assessment content.

## Enforcement

The policy decision point evaluates server-side on every request and background job. Database row-level security is defense in depth, not the sole authorization layer. List queries apply the same scope predicate as item reads. Authorization test fixtures cover cross-tenant, cross-school, cross-class, relationship, field, lifecycle, export, and cache invalidation cases.

## Governance

Role-template edits show an effective permission diff, require step-up authentication, and generate audit events. Privileged roles have quarterly access review; other roles at least annually. Orphaned assignments, conflicting duties, expired delegations, and dormant privileged accounts generate findings.
