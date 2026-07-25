# Teacher
## Overview
Educator profile and teaching workspace over employee identity, assignments, classes, learners, attendance, work, and assessment.
## Objectives
Minimize daily administrative effort while enforcing assignment and publication boundaries.
## Business Rules
Teacher access is effective-dated and assignment-scoped; substitution is explicit; employee data remains HR-owned.
## Workflow
Appoint employee → grant teacher role → assign subjects/sections → teach/assess → review workload → end/reassign.
## User Roles
Teacher and Class Teacher use workspace; academic leaders manage assignments; HR manages employment subset.
## Permissions
`academics.teaching_assignment.view|manage`, assigned attendance/work/mark permissions, limited student fields.
## Screens
Teacher directory/profile, today, classes, roster, attendance, work, assessments, timetable, workload.
## Forms
Teaching assignment, availability, specialization, substitution, preferences.
## Validation
Active employment, qualification/policy checks, date overlap, timetable conflicts, workload limits.
## Database Tables
`teacher_profiles`, `teaching_assignments`, `teacher_specializations`, `availability_rules`, `substitutions`.
## Relationships
Teacher profile references employee/person; assignments link school, subject, class/section and period.
## API Endpoints
`/teachers`, `/teachers/{id}/assignments|schedule|workload`, `/teaching-assignments`, `/substitutions`.
## Notifications
Assignment/substitution, schedule change, due attendance, assessment deadlines and approvals.
## Reports
Workload, attendance completion, class allocation, substitution, assessment completion.
## Audit Logs
Assignment, substitution, privileged learner-field access, attendance and mark actions.
## UI Components
Today agenda, class switcher, roster, workload grid, assignment timeline.
## Error Handling
Block out-of-scope mutations; explain schedule conflicts; queue safe drafts during transient failure.
## Empty States
No classes, schedule, pending work, or active assignment.
## Loading States
Agenda skeleton and independent class panels.
## Success States
Assignment confirmed, attendance submitted, work published, marks saved/submitted.
## Edge Cases
Teacher in multiple schools, substitute, co-teaching, leave, terminated employee with historical attribution.
## Future Improvements
Workload optimization, teaching insights, standards-aligned planning.
