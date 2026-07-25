# Timetable
## Overview
Conflict-aware scheduling of sections, subjects, teachers, rooms, periods and exceptions.
## Objectives
Publish feasible schedules and handle substitutions/changes without corrupting history.
## Business Rules
No overlapping constrained resource unless policy permits; versions are effective-dated; publication freezes a snapshot.
## Workflow
Define periods/constraints → draft/generate → resolve conflicts → approve/publish → substitute/change → archive.
## User Roles
Schedulers manage; leaders approve; teachers/students/families/service roles view scoped schedules.
## Permissions
`academics.timetable.view|manage|publish`, constraint override, substitution manage.
## Screens
Week/day grid, scheduler, resource views, conflict queue, version history, substitution board.
## Forms
Period, entry, recurrence, constraint, exception, room and substitution.
## Validation
Teacher/section/room overlap, availability, capacity, working day, required hours.
## Database Tables
`timetable_versions`, `period_definitions`, `timetable_entries`, `schedule_constraints`, `schedule_exceptions`, `substitutions`.
## Relationships
Entries reference subject offering, section/group, teacher, room, period and version.
## API Endpoints
`/timetables`, `/timetables/{id}/validate|publish`, `/schedules`, `/substitutions`.
## Notifications
Publication, material schedule change, room change, cancellation and substitution.
## Reports
Teacher/room utilization, instructional hours, conflicts, uncovered periods.
## Audit Logs
Publish, override, entry and substitution changes.
## UI Components
Scheduler grid, resource lane, conflict panel, version diff, print view.
## Error Handling
Keep draft on conflict; show exact resources and alternatives; publish atomically.
## Empty States
No periods, entries, conflicts or published schedule.
## Loading States
Stable time grid and resource skeleton.
## Success States
Validated/published schedule or substitution confirmed.
## Edge Cases
Rotating weeks, split groups, shared campus resources, closure, DST, cross-midnight events.
## Future Improvements
Constraint solver, optimization scenarios, calendar synchronization.
