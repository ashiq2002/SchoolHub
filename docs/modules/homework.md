# Homework
## Overview
Lightweight teacher-authored class work with instructions, attachments, due dates and completion acknowledgement.
## Objectives
Make routine work easy to publish and understand across teacher, learner and family views.
## Business Rules
Audience is assigned class/subject; edits after publication are versioned and notified when material.
## Workflow
Draft → attach resources → preview audience → publish/schedule → learner acknowledges/completes → close/archive.
## User Roles
Teachers author assigned work; learners act; families view; leaders monitor policy compliance.
## Permissions
`academics.homework.view|create|publish|update|close`, own completion update.
## Screens
Teacher work list/editor, learner due list/detail, calendar, completion overview.
## Forms
Title/instructions, audience, due date, attachments, completion requirement, schedule.
## Validation
Active assignment/audience, due date, safe files, publish window and content length.
## Database Tables
`homework_items`, `homework_versions`, `homework_audiences`, `homework_resources`, `homework_completions`.
## Relationships
Homework links subject offering/section/teacher; completions link enrollment/student.
## API Endpoints
`/homework`, `/homework/{id}/publish|close`, `/homework/{id}/completions`.
## Notifications
Published, materially changed, due reminder and overdue digest according to policy.
## Reports
Publication/completion by class, subject, teacher and period.
## Audit Logs
Publish/edit/close, audience change, resource access and export.
## UI Components
Work composer, audience preview, due badge, completion checklist, attachment list.
## Error Handling
Preserve draft; prevent duplicate publication; show unavailable attachment safely.
## Empty States
No assigned, due, overdue, draft or completed work.
## Loading States
Due-list and editor skeletons.
## Success States
Draft saved, work published, completion acknowledged.
## Edge Cases
Late joiner, changed section, extended due date, unpublished subject, inaccessible file.
## Future Improvements
Reusable work library, differentiation and standards tagging.
