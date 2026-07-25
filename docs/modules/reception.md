# Reception
## Overview
Front-office workspace for inquiries, visitors, calls, appointments, admission intake, basic directory lookup, and handoff.
## Objectives
Resolve front-desk work quickly with minimal exposure of student and staff data.
## Business Rules
Directory views are masked; identity verification precedes disclosure/pickup actions; reception does not approve admissions by default.
## Workflow
Receive contact/visitor → verify purpose/identity → find or create inquiry/task → record outcome → route follow-up → close.
## User Roles
Receptionist primary; admissions/admin receive handoffs; security/support may use narrow visitor views.
## Permissions
`reception.inquiry.manage`, `reception.visitor.manage`, masked directory view, admission draft create, appointment manage.
## Screens
Front-desk dashboard, inquiry queue, visitor log, appointments, masked directory, callbacks/tasks.
## Forms
Inquiry, visitor check-in/out, appointment, call note, document intake, task handoff.
## Validation
Contact normalization, duplicate inquiry, host availability, visitor ID policy, purpose and consent.
## Database Tables
`inquiries`, `inquiry_activities`, `visitors`, `visitor_visits`, `appointments`, `front_desk_tasks`.
## Relationships
Inquiries may become applications; visits link host/person; tasks link source and assignee.
## API Endpoints
`/inquiries`, `/visitors/check-ins`, `/appointments`, `/front-desk/tasks`, masked `/directory/search`.
## Notifications
Host arrival, appointment reminder, inquiry follow-up, task assignment/escalation.
## Reports
Inquiry sources/conversion, visitor volume, wait time, appointments, unresolved callbacks.
## Audit Logs
Directory lookup, document intake, visitor action, inquiry conversion and disclosure.
## UI Components
Fast search, masked person result, queue, check-in stepper, appointment calendar.
## Error Handling
Neutral not-found, duplicate suggestions, offline contingency reference and safe retry.
## Empty States
No arrivals, appointments, inquiries, results, or pending tasks.
## Loading States
Search and queue skeletons with stable action area.
## Success States
Checked in/out, inquiry saved, appointment booked, handoff assigned.
## Edge Cases
Unannounced visitor, restricted pickup, duplicate family, emergency, no host response.
## Future Improvements
Kiosk check-in, badge integration, telephony and visitor risk integration.
