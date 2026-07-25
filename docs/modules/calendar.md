# Calendar
## Overview
Unified permission-aware view of academic dates, timetable, events, exams, deadlines, leave and personal items.
## Objectives
Reduce scheduling surprises while preserving source ownership and time semantics.
## Business Rules
Calendar entries reference source records; edits occur in owner module; private items remain private; date-only values do not shift zones.
## Workflow
Select calendars/context → fetch authorized entries → filter/view → open source/create allowed item → sync/export.
## User Roles
All roles view relevant calendars; administrators publish institutional calendars; users manage private preferences/items.
## Permissions
Underlying source view plus `calendar.personal.manage`, `calendar.feed.create`, institutional calendar manage.
## Screens
Month/week/day/agenda, calendar settings, shared calendar management, subscription feeds.
## Forms
Personal item, display filters, feed token, institutional closure routed to Academic Year.
## Validation
Time zone/date semantics, recurrence bounds, source permission, feed expiry and no secret in URL logs.
## Database Tables
`calendar_entries`, `calendar_sources`, `personal_calendar_items`, `calendar_preferences`, `calendar_feed_tokens`.
## Relationships
Entries reference event/timetable/exam/assignment/leave source; preferences belong to user/context.
## API Endpoints
`/calendar`, `/calendar/personal-items`, `/me/calendar-preferences`, `/calendar/feeds`.
## Notifications
Calendar does not duplicate source reminders; optional feed/security expiry alerts.
## Reports
Calendar density/conflicts, source freshness and feed adoption; no private-content analytics.
## Audit Logs
Institutional item change, feed creation/revoke and protected event export.
## UI Components
Calendar grid, agenda, source toggles/swatches, date navigator, conflict indicator.
## Error Handling
Show partial source failures and stale timestamp; provide agenda fallback.
## Empty States
No entries for range/filter, no calendars or no subscription feeds.
## Loading States
Stable grid and per-source progressive loading.
## Success States
Item saved, preference updated or feed revoked.
## Edge Cases
DST, all-day event, cross-time-zone school, recurring exception, revoked source access.
## Future Improvements
CalDAV/ICS synchronization and scheduling assistant.
