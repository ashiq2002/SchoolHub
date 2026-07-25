# System Administration
## Overview
Tenant and platform operations for provisioning, users/access, integrations, jobs, features, diagnostics and support controls.
## Objectives
Operate safely at scale without routine unrestricted access to customer data.
## Business Rules
Admin scope is explicit; support access is approved/time-bound; dangerous changes require step-up, preview and audit.
## Workflow
Observe finding/request → diagnose metadata → obtain authorization → preview change → execute → verify → close/review.
## User Roles
Tenant System Administrator manages local technical configuration; Super Admin manages platform control plane; support is separate.
## Permissions
`system.users|roles|integrations|jobs|features.manage`, tenant provision/suspend, support access request/approve.
## Screens
Admin home, tenant/school provisioning, users/access, integrations, jobs, feature flags, health, support sessions.
## Forms
Provisioning, role assignment, integration, job retry, feature cohort, support-access request and reason.
## Validation
Scope/entitlement, separation of duties, expiry, dependency health, change preview and current version.
## Database Tables
`tenant_provisioning_jobs`, `integration_connections`, `system_jobs`, `feature_flags`, `feature_assignments`, `support_access_grants`, `admin_actions`.
## Relationships
Jobs/integrations belong to tenant or platform; support grants bind requester/approver/operator/scope/time.
## API Endpoints
`/admin/users|roles|integrations|jobs|features`, platform `/tenants`, support-access lifecycle commands.
## Notifications
Provisioning/job failure, integration/secret expiry, privileged access/change, suspension and feature incident.
## Reports
Tenant/service health, provisioning, job queues, integrations, privileged access, feature rollout and usage capacity.
## Audit Logs
Every privileged view/change, support session, job retry, feature and tenant lifecycle operation.
## UI Components
Health table, job timeline, permission diff, support scope banner, feature cohort editor.
## Error Handling
Fail closed, make operations idempotent, provide safe diagnostics and compensating/forward-fix guidance.
## Empty States
No findings, jobs, integrations, flags, users or active support sessions.
## Loading States
Independent health panels and operation progress.
## Success States
Provisioned/configured/retried/authorized with verification and audit reference.
## Edge Cases
Control-plane outage, stuck migration, cross-region tenant, expired grant mid-session, self-hosted offline.
## Future Improvements
Automated remediation with approvals and fleet-wide policy compliance.
