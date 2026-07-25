# Class
## Overview
Program/grade/cohort-level academic structure between curriculum and sections.
## Objectives
Model institution terminology and progression without duplicating student groups.
## Business Rules
Class codes are scope-unique per year; definitions may be reusable while offerings are effective-dated.
## Workflow
Define class/program → attach curriculum/subjects → offer in year/campus → create sections → enroll → retire.
## User Roles
Academic administrators manage; leaders/teachers/students/families view relevant offerings.
## Permissions
`academics.class.view|create|update|retire`, curriculum assignment.
## Screens
Class catalog, offering detail, sections, subjects, capacity and progression map.
## Forms
Name/code, level, program, capacity, eligibility, grading/curriculum references.
## Validation
Unique code, valid year/program, capacity, prerequisite and no destructive dependency change.
## Database Tables
`class_definitions`, `class_offerings`, `class_subjects`, `progression_rules`.
## Relationships
Offering belongs to school/year/campus; has sections, subjects, enrollments and progression rules.
## API Endpoints
`/classes`, `/class-offerings`, `/classes/{id}/subjects|sections|progression`.
## Notifications
Offering/subject/capacity changes to affected staff.
## Reports
Enrollment/capacity, class structure, subject coverage and progression readiness.
## Audit Logs
Definition/offering, capacity, curriculum and retirement changes.
## UI Components
Structure tree, capacity meter, subject table, progression map.
## Error Handling
Explain dependent timetable/enrollment conflicts.
## Empty States
No classes, offerings, subjects, sections or learners.
## Loading States
Structure tree and table skeletons.
## Success States
Class/offering saved, published or retired.
## Edge Cases
Mixed-grade class, program aliases, cross-campus offering, year rollover.
## Future Improvements
Curriculum marketplace and scenario capacity planning.
