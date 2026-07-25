# Multi School
## Overview
Organization-wide governance, shared services, school hierarchy, delegated administration and cross-school insight.
## Objectives
Scale a group without erasing school autonomy or leaking records between schools.
## Business Rules
Tenant owns schools; cross-school access requires organization scope; policies define inheritable/locked/overridable values.
## Workflow
Create school → configure hierarchy/policy → assign administrators → migrate/provision data → operate → compare/consolidate → archive/transfer.
## User Roles
Organization Owner governs; school leaders manage local scope; shared-service teams receive explicit multi-school assignments.
## Permissions
`organization.school.manage`, cross-school people/finance/report permissions, policy lock/delegate.
## Screens
Organization dashboard, school directory/detail, hierarchy, policy inheritance, shared services, comparisons.
## Forms
School/campus, hierarchy, shared identifier/policy, delegation, school transfer/archive.
## Validation
Unique codes/domains, data residency, policy compatibility, assignment scope and dependent records.
## Database Tables
`tenants`, `schools`, `campuses`, `organization_units`, `school_relationships`, `shared_service_assignments`, `policy_scopes`.
## Relationships
All school records reference tenant/school; organization units group schools; assignments grant scoped access.
## API Endpoints
`/organization/schools|units`, policy preview/publish, shared-service assignment and comparison endpoints.
## Notifications
Provisioning, policy change, delegated access, school status and cross-school incident.
## Reports
School comparison, consolidated enrollment/finance/workforce, configuration drift and access scope.
## Audit Logs
School lifecycle, policy inheritance, cross-school access/export, transfer and delegation.
## UI Components
School switcher, hierarchy tree, inheritance diff, comparison table, scope banner.
## Error Handling
Fail closed on ambiguous school context; migration/provisioning is resumable with reconciliation.
## Empty States
No additional schools, units, shared services or comparable data.
## Loading States
Hierarchy and comparison skeletons.
## Success States
School provisioned, policy applied, delegation active or consolidation complete.
## Edge Cases
School merger/split, different calendars/currencies, dedicated database, shared person, archival.
## Future Improvements
Federated organizations and privacy-preserving benchmarks.
