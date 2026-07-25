# Student
## Overview
Canonical learner profile and workspace spanning identity, enrollment, academics, services, finance, documents, and relationships.
## Objectives
Maintain one accurate learner record and a safe self-service experience across the lifecycle.
## Business Rules
Student number is scope-unique; person/profile are distinct; sensitive fields are masked; lifecycle changes use enrollment workflows.
## Workflow
Create/match person → create profile → enroll → assign section/services → maintain → promote/transfer/withdraw → alumni/archive.
## User Roles
Students own-view; families relationship-view; teachers assigned-view; reception/admin manage; specialists see domain subsets.
## Permissions
`people.student.view|create|update|export`, `student.sensitive.view`, `student.lifecycle.transition` with scope.
## Screens
Directory, profile summary, academics, attendance, fees, services, documents, relationships, timeline.
## Forms
Identity, demographics, contacts, medical/safeguarding, identifiers, relationships, tags.
## Validation
Duplicate matching, identifier uniqueness, date consistency, required consent and field classification.
## Database Tables
`persons`, `student_profiles`, `student_identifiers`, `contacts`, `addresses`, `relationships`, `student_status_history`.
## Relationships
Person has profile, identities, guardians, enrollments, documents, accounts, attendance and service assignments.
## API Endpoints
`/students`, `/students/{id}`, `/students/{id}/relationships|timeline|summary`, merge-review endpoints.
## Notifications
Profile/relationship changes, lifecycle actions, urgent record expiry according to consent and role.
## Reports
Roster, demographics, enrollment status, missing data/documents, lifecycle movement.
## Audit Logs
View of specially protected fields, create/update/merge/export and lifecycle transitions.
## UI Components
Person header, identity badge, scoped tabs, relationship graph, timeline, sensitive-field shield.
## Error Handling
Detect duplicates/conflicts, preserve drafts, and distinguish forbidden from absent neutrally.
## Empty States
No enrollment, relationships, documents, services, or history with relevant next action.
## Loading States
Profile shell first; tabs and timeline load independently.
## Success States
Saved version, relationship verified, profile completed, or lifecycle state confirmed.
## Edge Cases
Same person across tenants, name variants, twins, no login, deceased/missing status, legal identity correction.
## Future Improvements
Master-data matching service, portable verified learner record, granular consent automation.
