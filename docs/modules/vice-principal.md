# Vice Principal
## Overview
Delegated leadership workspace for academic and operational coordination within assigned schools/domains.
## Objectives
Distribute leadership work while keeping authority limits explicit and reviewable.
## Business Rules
Authority comes from role template plus delegation; cannot exceed principal or protected-policy limits.
## Workflow
Receive assignment/delegation → review queues → coordinate/decide within limit → escalate exceptions → hand back/expire.
## User Roles
Vice Principal primary; Principal delegates and reviews; administrators configure role template.
## Permissions
Scoped domain management, task assignment and approvals under configured thresholds.
## Screens
Operations dashboard, delegated approvals, academic calendar/readiness, attendance exceptions, action tracker.
## Forms
Decision, escalation, task assignment, temporary delegation acceptance/handover.
## Validation
Effective delegation, value threshold, domain/school scope, no self-approval, fresh record version.
## Database Tables
`leadership_assignments`, `delegations`, `approval_tasks`, `school_action_items`.
## Relationships
Delegations connect principal and vice principal with permission, scope and time bounds.
## API Endpoints
`/leadership/summary`, `/delegations`, `/approvals`, `/school-actions`, escalation commands.
## Notifications
New/expiring delegation, assigned exception, overdue action, escalation decision.
## Reports
Delegated workload, decisions, overdue tasks, academic/attendance operational summaries.
## Audit Logs
Delegation acceptance/use, decision, escalation, sensitive view and export.
## UI Components
Delegation context banner, queue, threshold indicator, action board, escalation dialog.
## Error Handling
Explain expired/out-of-limit authority and route to an eligible approver.
## Empty States
No delegation, tasks, approvals, or exceptions.
## Loading States
Queue and operational metrics load independently.
## Success States
Decision/task/escalation confirmed with accountable owner.
## Edge Cases
Overlapping delegations, acting principal, mid-action expiry, source record change.
## Future Improvements
Capacity-based routing, recurring delegation templates, handover summaries.
