# User Roles

## Authorization model

A role is a reusable permission bundle; an assignment binds a person to that role within an organization, school, campus, academic unit, class, or relationship scope and effective date range. Users may have multiple assignments. Explicit deny is reserved for exceptional policy and wins over allow. Ownership or family relationship alone does not bypass permission checks.

## Role definitions

| Role | Responsibility and default scope |
|---|---|
| Super Admin | SaaS platform governance across tenants; no routine customer-data access |
| Organization Owner | Organization governance, subscription, cross-school policy and oversight |
| School Owner | School governance and delegated commercial administration |
| Principal | Academic and operational accountability for assigned school |
| Vice Principal | Delegated academic/operational management |
| Teacher | Assigned courses, sections, learners, attendance, work, assessment, communication |
| Class Teacher | Teacher permissions plus pastoral and class-level coordination for assigned section |
| Parent | Authorized related learners and permitted family actions |
| Student | Own academic, service, communication, and finance visibility |
| Receptionist | Inquiry, visitor-facing, admission intake, basic directory workflows |
| HR | Employee records, leave, workforce compliance, payroll inputs |
| Accountant | Fees, receipts, journals, reconciliation, financial reporting |
| Librarian | Catalog, circulation, fines, members, library reporting |
| Transport Manager | Routes, vehicles, stops, assignments, incidents, transport attendance |
| Hostel Manager | Buildings, rooms, allocations, attendance, incidents, charges |
| Inventory Manager | Items, stores, stock movements, issues, returns, counts |
| Examination Controller | Exam setup, secure marks workflow, publication, correction |
| Support Staff | Narrow task-based access granted by assignment |
| System Administrator | Tenant technical configuration, integrations, access administration, diagnostics |

## Additional named personas

Guardian is a relationship type and may receive the Parent role with custody, pickup, financial, communication, and emergency permissions independently configured. Employee is a person record, not inherently a role. Reception, Payroll, and dedicated module personas are implemented as configurable role templates. Platform support uses time-bound support access, not Super Admin impersonation by default.

## Lifecycle

1. Invitation or provisioning creates an identity link without granting broad access.
2. An authorized administrator assigns role, scope, effective dates, and optional conditions.
3. High-risk roles require approval and MFA before activation.
4. Access changes invalidate affected sessions and authorization caches.
5. Periodic review attests privileged and dormant assignments.
6. Termination or relationship end revokes access immediately while records remain attributable.

## Separation of duties

No user should both initiate and approve their own refunds, fee waivers above threshold, payroll finalization, journal posting, result correction, role elevation, support-access grant, or audit export. Emergency overrides are time-limited, reasoned, alerted, and reviewed.

## Delegation

Delegation specifies delegator, delegate, permissions, scope, reason, start/end time, and exclusions. It cannot grant permissions the delegator lacks or delegate protected platform operations. All delegated actions identify both actors.

## Service identities

Integrations and workers use non-human service principals with narrow scopes, rotating credentials, environment restrictions, owner, expiry/review date, and complete audit attribution. They cannot authenticate through interactive user flows.
