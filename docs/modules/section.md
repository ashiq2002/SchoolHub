# Section
## Overview
Operational learner group within a class offering, with roster, class teacher, room and capacity.
## Objectives
Create stable groups for scheduling, attendance, teaching and communication.
## Business Rules
Membership is effective-dated; capacity exceptions require approval; a primary section is unique per enrollment/time.
## Workflow
Create section → assign staff/room → allocate learners → operate → rebalance → close/roll over.
## User Roles
Administrators manage; class teachers coordinate; teachers and members view assigned section.
## Permissions
`academics.section.view|manage`, `section.membership.manage`, `section.capacity.override`.
## Screens
Section list/detail, roster, assignments, timetable, capacity and transfer history.
## Forms
Section setup, class teacher, room, capacity, membership add/transfer/bulk allocation.
## Validation
Active offering/enrollment, membership overlap, capacity, teacher/room conflict.
## Database Tables
`sections`, `section_memberships`, `section_staff_assignments`.
## Relationships
Section belongs to offering; links learners, teachers, room, timetable and attendance sessions.
## API Endpoints
`/sections`, `/sections/{id}/members|staff`, membership transfer/bulk-preview commands.
## Notifications
Section assignment/transfer and class teacher changes.
## Reports
Roster, capacity, gender/attribute distribution where lawful, transfer history.
## Audit Logs
Membership, staff, capacity override and export.
## UI Components
Roster table, capacity indicator, assignment drawer, transfer timeline.
## Error Handling
Atomic bulk allocation with row results; preserve prior membership on failure.
## Empty States
No sections, members, staff or schedule.
## Loading States
Stable roster and summary skeleton.
## Success States
Member/staff assignment or transfer confirmed.
## Edge Cases
Split groups, temporary section, mid-period transfer, over-capacity, co-class teachers.
## Future Improvements
Balanced auto-allocation and what-if reorganization.
