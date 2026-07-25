# Academic Year
## Overview
Effective-dated academic calendars, terms, working days, closures, rollover and locking.
## Objectives
Provide one authoritative time structure for enrollment, timetable, attendance, exams and finance.
## Business Rules
Periods cannot overlap within scope; published/closed periods are immutable except controlled correction; one default active context per school.
## Workflow
Draft year → define terms/calendar → validate dependencies → publish → operate → close/lock → archive/roll over.
## User Roles
Academic administrators manage; leaders approve; all roles view relevant calendar.
## Permissions
`academics.year.view|create|publish|close|reopen`, calendar manage.
## Screens
Year list, calendar builder, term detail, readiness checklist, rollover and close wizard.
## Forms
Year/term dates, working-week pattern, holidays, closure/reopen reason.
## Validation
Date order/overlap, instructional-day minimum, dependent records and time-zone/calendar rules.
## Database Tables
`academic_years`, `academic_terms`, `academic_calendar_days`, `academic_period_locks`.
## Relationships
School owns years; terms and days belong to year; transactions reference year/term snapshots.
## API Endpoints
`/academic-years`, `/academic-years/{id}/publish|close|rollover`, `/academic-calendar`.
## Notifications
Publication, closure, date change, upcoming deadlines and rollover tasks.
## Reports
Instructional days, calendar exceptions, period readiness and closure audit.
## Audit Logs
Publish/close/reopen, date changes and rollover configuration.
## UI Components
Year switcher, calendar grid/list, readiness checklist, lock badge.
## Error Handling
Show dependency conflicts and block partial rollover.
## Empty States
No year, terms, calendar exceptions or rollover issues.
## Loading States
Calendar and readiness skeletons.
## Success States
Published/closed/rolled-over confirmation with affected counts.
## Edge Cases
Mid-year adoption, shifted dates, multiple calendars, reopened period, leap day.
## Future Improvements
Regional calendar packs and scenario planning.
