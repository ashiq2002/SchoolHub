# Employee
## Overview
Canonical worker profile and self-service workspace shared by teaching and non-teaching staff.
## Objectives
Unify identity, employment context, schedule, attendance, leave, documents, payroll visibility, and requests.
## Business Rules
Person and employee profile are distinct; own-view excludes confidential HR notes; role follows assignment, not job title alone.
## Workflow
Match/create person → employee profile → active contract/assignment → self-service → changes → exit/rehire.
## User Roles
Employees self-view; HR manages; supervisors approve limited requests; specialists see assigned subsets.
## Permissions
`people.employee.view|update`, `employee.self_service`, protected field/document permissions.
## Screens
Directory, profile, employment timeline, schedule, attendance, leave, payslips, documents, requests.
## Forms
Contact/bank/tax update request, emergency contact, document upload, policy acknowledgement.
## Validation
Identity duplicate, effective employment, verified destination, protected-change approval, document rules.
## Database Tables
`persons`, `employee_profiles`, `employee_assignments`, `employment_contracts`, `employee_change_requests`.
## Relationships
Employee connects person to HR, teaching, payroll, attendance, documents and user memberships.
## API Endpoints
`/employees`, `/employees/{id}/summary|timeline`, `/me/employee`, `/employee-change-requests`.
## Notifications
Assignment/contract changes, document expiry, request decisions, payslip and policy release.
## Reports
Directory, active/inactive status, assignment coverage, incomplete profiles/documents.
## Audit Logs
Profile and protected-field views/changes, exports, request approvals and status transitions.
## UI Components
Employee header, self-service tiles, timeline, document list, change-request diff.
## Error Handling
Preserve request drafts and distinguish pending approval from failed update.
## Empty States
No active assignment, documents, payslips, leave or requests.
## Loading States
Profile summary then protected tabs.
## Success States
Request submitted/approved, document accepted, profile saved.
## Edge Cases
Concurrent student/employee, multi-school assignment, contractor, rehire, no login.
## Future Improvements
Portable credentials, skills profile, employee mobile wallet.
