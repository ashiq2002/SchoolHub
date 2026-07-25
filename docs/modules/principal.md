# Principal
## Overview
Executive school workspace composing academic, operational, people, finance, risk, and approval capabilities.
## Objectives
Enable accountable school leadership without granting platform or specially protected data by default.
## Business Rules
Scope is assigned school and effective term; high-risk approvals enforce thresholds and separation of duties.
## Workflow
Review health/exceptions → inspect source → assign or decide → monitor outcome → attest periodic controls.
## User Roles
Principal primary; Organization Owner oversees; Vice Principal receives delegated subset.
## Permissions
School-scoped management and approvals across enabled domains; protected HR/finance/safeguarding fields remain separate.
## Screens
Executive dashboard, approvals, school plan, academic readiness, incidents, staffing, finance summary, reports.
## Forms
Approval/rejection with reason, delegation, policy acknowledgement, escalation and action assignment.
## Validation
Active appointment, approval limits, conflict of interest, current source version and required evidence.
## Database Tables
`leadership_assignments`, `approval_tasks`, `delegations`, `school_action_items`, domain-owned records.
## Relationships
Leadership assignment binds person/role to school; tasks reference source aggregate and policy.
## API Endpoints
`/leadership/summary`, `/approvals`, `/approvals/{id}/decide`, `/delegations`, `/school-actions`.
## Notifications
Urgent exceptions, pending/overdue approvals, incidents, deadlines, delegated outcomes.
## Reports
Enrollment, attendance, academics, collections, staffing, incidents, compliance and school comparison.
## Audit Logs
Approval decisions, delegation, sensitive drill-down, export, policy and override actions.
## UI Components
Exception queue, approval panel, KPI with definition, action tracker, risk severity badge.
## Error Handling
Detect stale decisions and conflicts; preserve reason; reauthorize at submission.
## Empty States
No approvals, exceptions, actions, or available metrics.
## Loading States
Priority content first; independent KPI and queue skeletons.
## Success States
Decision recorded with downstream state and audit reference.
## Edge Cases
Acting principal, multiple schools, delegated authority, approver conflict, stale analytics.
## Future Improvements
Goal planning, benchmarking with privacy thresholds, predictive risk review.
