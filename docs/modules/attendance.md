# Attendance
## Overview
Session-based learner and workforce presence capture, correction, absence reasons and intervention.
## Objectives
Fast reliable capture with policy-aware locking, notifications and trustworthy aggregates.
## Business Rules
One mark per subject/session/person; status taxonomy is configurable; late corrections require reason/approval.
## Workflow
Create session → load roster → mark/save draft → submit → notify exceptions → correct/approve → aggregate.
## User Roles
Assigned teachers mark; class teachers/leaders review; families/students view own; HR manages employee attendance.
## Permissions
`academics.attendance.mark|submit|correct|approve|view`, separate workforce scope.
## Screens
Today queue, roster capture, daily/month summary, exceptions, correction queue, policy settings.
## Forms
Bulk marks, reason/note, correction request, session cancellation, absence submission.
## Validation
Assigned roster/date/session, allowed window/status, duplicate mark, reason and evidence policy.
## Database Tables
`attendance_sessions`, `attendance_marks`, `attendance_corrections`, `absence_reasons`, `attendance_policies`.
## Relationships
Session links timetable/section/subject; marks link person/enrollment; corrections retain versions.
## API Endpoints
`/attendance/sessions`, `/attendance/sessions/{id}/marks|submit`, `/attendance-corrections`.
## Notifications
Absence/late alerts, missing register, correction decision and attendance threshold.
## Reports
Daily/monthly attendance, chronic absence, missing sessions, trends and statutory export.
## Audit Logs
Submission, mark before/after, correction, override, bulk import/export.
## UI Components
Roster grid, status segmented control, progress count, exception badge, correction diff.
## Error Handling
Autosave draft, optimistic conflict handling, row-level bulk errors and offline-safe pending state.
## Empty States
No sessions, roster, exceptions or attendance data.
## Loading States
Fixed roster rows/skeleton; never shift status controls.
## Success States
Draft saved, register submitted, correction approved.
## Edge Cases
Late enrollment, transfer, duplicate session, closure, substitute, intermittent network.
## Future Improvements
Governed device/biometric integrations and intervention workflows.
