# Events
## Overview
Institution events with audience, venue, capacity, registration, consent, attendance and communication.
## Objectives
Coordinate discoverable events and reliable participation across schools and roles.
## Business Rules
Events are time-zone aware; publication and audience changes are versioned; capacity/waitlist and consent policies apply.
## Workflow
Draft → venue/audience/registration → approve/publish → register/waitlist → remind → check in → close/report.
## User Roles
Authorized staff organize; users discover/register for eligible events; leaders approve broad/high-risk events.
## Permissions
`events.view|create|publish|manage_registration|checkin`, protected attendee export.
## Screens
Event list/calendar, detail, editor, registrations, check-in, attendance and post-event summary.
## Forms
Event, recurrence, audience, ticket/capacity, consent, registration, cancellation.
## Validation
Time/venue conflict, audience, capacity, registration window, guardian consent and recurrence bounds.
## Database Tables
`events`, `event_versions`, `event_audiences`, `event_registrations`, `event_waitlist`, `event_attendance`.
## Relationships
Events link calendar entries, venue, organizer, communication and optional fee/payment.
## API Endpoints
`/events`, publish/cancel commands, `/events/{id}/registrations|attendance`.
## Notifications
Publication, registration, waitlist promotion, reminder, change/cancellation and follow-up.
## Reports
Event calendar, registration/attendance, capacity, no-show and feedback summary.
## Audit Logs
Audience, publication, attendee export, consent, check-in and cancellation.
## UI Components
Event editor, date range, capacity meter, attendee list, QR/manual check-in.
## Error Handling
Transactional capacity allocation; preserve registration intent during payment/provider uncertainty.
## Empty States
No events, eligible events, registrations, attendees or waitlist.
## Loading States
Event list/calendar and check-in skeleton.
## Success States
Published, registered, promoted, checked in or cancelled.
## Edge Cases
Recurring exception, cross-school event, minor consent, venue change, overbooking.
## Future Improvements
Ticket wallet, volunteer shifts and external calendar publishing.
