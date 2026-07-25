# HR
## Overview
Workforce administration for positions, contracts, leave, compliance, employee documents, performance inputs, and lifecycle.
## Objectives
Maintain governed employee records and reliable inputs to payroll and school operations.
## Business Rules
Employment and user access are separate; compensation/health fields are restricted; changes are effective-dated and approval-driven.
## Workflow
Requisition/appointment → employee onboarding → contract/assignment → attendance/leave → changes → offboarding → retention.
## User Roles
HR manages; employees self-serve; managers approve assigned staff; finance consumes approved payroll inputs.
## Permissions
`hr.employee.manage`, `hr.compensation.view`, `hr.leave.approve`, `hr.document.manage`, `hr.offboard`.
## Screens
HR dashboard, employee directory/profile, positions, contracts, leave, compliance, onboarding/offboarding.
## Forms
Employment, contract, position, leave, document, compensation change, offboarding checklist.
## Validation
Effective-date overlap, position capacity, approvals, required documents, leave balance and statutory rules.
## Database Tables
`employee_profiles`, `positions`, `employment_contracts`, `employee_assignments`, `leave_types`, `leave_requests`, `leave_balances`, `hr_documents`.
## Relationships
Employee profile references person; contracts and assignments drive teacher/payroll eligibility; leave feeds attendance/payroll.
## API Endpoints
`/employees`, `/positions`, `/contracts`, `/leave-requests/{id}/approve`, `/hr/onboarding|offboarding`.
## Notifications
Onboarding tasks, contract/document expiry, leave decisions, policy acknowledgements, offboarding.
## Reports
Headcount, turnover, leave, vacancies, expiring contracts/documents, workforce demographics with privacy thresholds.
## Audit Logs
Sensitive field view/change, contract, compensation, leave decision, document export and offboarding.
## UI Components
Employee header, effective-date timeline, leave calendar, checklist, restricted-field shield.
## Error Handling
Conflict-aware updates; never expose compensation through generic errors/notifications.
## Empty States
No employees, leave, contracts, documents, or onboarding tasks.
## Loading States
Profile shell and independently loaded protected tabs.
## Success States
Contract activated, leave decided, task completed, employee offboarded.
## Edge Cases
Multiple positions/schools, rehire, retroactive leave, suspended employee, legal hold.
## Future Improvements
Recruitment, appraisal, learning, statutory country packs.
