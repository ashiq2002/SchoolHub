# Hostel
## Overview
Buildings, rooms/beds, resident allocation, attendance, leave, visitors, incidents, services and charges.
## Objectives
Manage residential capacity and safeguarding with restricted, accountable access.
## Business Rules
One active bed allocation at a time; compatibility/age policies apply; safeguarding and health data are separately protected.
## Workflow
Configure capacity → apply/approve → allocate → check in → attendance/services/leave → transfer → check out/clearance.
## User Roles
Hostel Manager/wardens manage scoped residents; families/students request/view; finance bills; safeguarding roles restricted access.
## Permissions
`hostel.room.manage`, `resident.assign`, `attendance.mark`, `leave.approve`, `incident.manage`, protected view.
## Screens
Occupancy dashboard, building/room plan, resident profile, attendance, leave, visitors, incidents, clearance.
## Forms
Room/bed, application/allocation, transfer, leave, visitor, incident, check-in/out.
## Validation
Capacity/compatibility, active enrollment, date overlap, consent, visitor authorization and clearance.
## Database Tables
`hostel_buildings`, `hostel_rooms`, `hostel_beds`, `hostel_applications`, `hostel_allocations`, `hostel_attendance`, `hostel_leave`, `hostel_visits`, `hostel_incidents`.
## Relationships
Allocation links resident/person and bed; charges link fees; clearance links services.
## API Endpoints
`/hostels/rooms|beds|allocations`, leave/attendance/visitor/incident commands.
## Notifications
Allocation, leave decision, absence, visitor, incident, fee and clearance updates.
## Reports
Occupancy, resident register, attendance, leave, incidents, visitors and charges.
## Audit Logs
Allocation, protected view, attendance/leave, visitor, incident and clearance.
## UI Components
Occupancy floor list, bed status, resident roster, leave calendar, incident severity panel.
## Error Handling
Transactional allocation prevents double-booking; urgent incident persists before secondary delivery.
## Empty States
No rooms, vacancies, residents, leave, visitors or incidents.
## Loading States
Occupancy and roster skeletons.
## Success States
Allocated/transferred/checked-out, leave decided, incident recorded.
## Edge Cases
Emergency allocation, maintenance closure, no-show, room swap, restricted visitor.
## Future Improvements
Meal/amenity integration and maintenance work orders.
