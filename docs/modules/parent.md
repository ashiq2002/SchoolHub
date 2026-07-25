# Parent
## Overview
Family self-service workspace for authorized learners, communication, approvals, payments, attendance, work, and results.
## Objectives
Provide a clear, mobile-first view while enforcing relationship, custody, and consent restrictions.
## Business Rules
Access derives from verified active relationships and per-capability rights; one parent may span learners/tenants.
## Workflow
Invite/match person → verify relationship/identity → accept terms → select learner → view/act → relationship review/revoke.
## User Roles
Parent role; administrators verify relationships; students have no authority to broaden parent access.
## Permissions
Relationship-scoped own-learner view, payment, absence/consent/request and communication permissions.
## Screens
Family home, learner switcher, attendance, academics, fees, messages, events, documents, settings.
## Forms
Contact preferences, absence/request, consent, payment, profile correction, pickup authorization.
## Validation
Active relationship, custody flags, verified contact, learner context, payment and consent policies.
## Database Tables
`persons`, `relationships`, `relationship_permissions`, `relationship_verifications`, `consent_records`, `pickup_authorizations`.
## Relationships
Parent person links to one or more student persons through effective-dated typed relationships.
## API Endpoints
`/me/learners`, `/me/learners/{id}/summary|attendance|fees|results`, family request endpoints.
## Notifications
Attendance, due work, results, fees, events, emergencies, relationship/security changes per preferences.
## Reports
Own downloadable statements, attendance summaries, receipts, result documents; aggregate engagement for admins.
## Audit Logs
Relationship verification/change, consent, payment, sensitive download, profile correction.
## UI Components
Learner switcher, family timeline, payment summary, consent panel, mobile action bar.
## Error Handling
Never reveal unrelated learners; explain expired relationship and offer authorized resolution.
## Empty States
No linked learner, no dues, messages, events, or released results.
## Loading States
Learner context shell and per-panel skeletons.
## Success States
Payment receipt, request submitted, consent recorded, preference updated.
## Edge Cases
Separated guardians, restricted custody, shared phone/email, adult learner, multiple currencies/schools.
## Future Improvements
Household account, delegated pickup wallet, multilingual conversational support.
