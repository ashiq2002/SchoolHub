# Exam
## Overview
Secure planning of exam cycles, components, schedules, rooms, candidates, invigilation and mark-entry controls.
## Objectives
Coordinate valid assessments and readiness before results calculation.
## Business Rules
Published schedules and candidate snapshots are versioned; mark-entry windows and blind/security controls are policy-driven.
## Workflow
Create cycle → components/schedule/candidates → validate conflicts → approve/publish → conduct → enter/verify marks → close.
## User Roles
Examination Controller manages; leaders approve; teachers enter assigned marks; learners/families view released schedule.
## Permissions
`academics.exam.manage|publish|administer`, `exam.marks.enter|verify|lock`, accommodations view.
## Screens
Exam cycles, scheduler, candidate/room plan, invigilation, readiness, mark-entry matrix, exceptions.
## Forms
Cycle/component, schedule, room/seat, candidate exception, invigilator, mark entry/import.
## Validation
Time/room/candidate conflict, component weight, enrollment eligibility, mark range, absence code.
## Database Tables
`exam_cycles`, `exam_components`, `exam_schedules`, `exam_candidates`, `exam_rooms`, `invigilation_assignments`, `raw_marks`.
## Relationships
Cycle links year/term; component links subject; candidates link enrollment; raw marks feed Result.
## API Endpoints
`/exam-cycles`, validate/publish/close commands, `/exam-schedules`, `/exam-components/{id}/marks`.
## Notifications
Schedule publication/change, invigilation, mark-entry deadline and readiness exception.
## Reports
Schedule, seating, candidate register, absences, missing/out-of-range marks, readiness.
## Audit Logs
Schedule/candidate snapshot, secure mark view/change/import, overrides and lock.
## UI Components
Exam timeline, scheduling grid, readiness checklist, mark matrix, conflict panel.
## Error Handling
Atomic publish/lock; row-level import errors; secure timeout without losing local draft.
## Empty States
No cycles, components, candidates, schedule or missing marks.
## Loading States
Grid/matrix skeleton with stable dimensions.
## Success States
Schedule published, marks submitted/verified, cycle closed.
## Edge Cases
Reschedule, accommodation, absent/exempt, retake, cross-campus room, compromised exam.
## Future Improvements
Seating optimizer, secure assessment integration, item analysis.
