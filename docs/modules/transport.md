# Transport
## Overview
Vehicles, routes, stops, schedules, rider assignments, attendance, incidents, maintenance and charges.
## Objectives
Operate safe, capacity-aware student/staff transport with reliable family visibility.
## Business Rules
Assignments are effective-dated and capacity-limited; route staff see minimal rider data; location retention is bounded.
## Workflow
Configure fleet/stops → design route/schedule → assign riders/staff → operate/check-in → incident/change → bill/report.
## User Roles
Transport Manager manages; drivers/attendants use narrow manifests; families/students view assigned route; finance bills.
## Permissions
`transport.route|vehicle.manage`, `rider.assign`, `attendance.mark`, `incident.manage`, location view.
## Screens
Fleet, route map/list, schedule, rider allocation, trip manifest, attendance, maintenance, incidents.
## Forms
Vehicle/driver, stop/route, assignment, trip, attendance, incident, maintenance.
## Validation
Vehicle/driver compliance, capacity, time/route overlap, active enrollment and approved pickup relationship.
## Database Tables
`vehicles`, `transport_stops`, `routes`, `route_schedules`, `transport_assignments`, `trips`, `transport_attendance`, `vehicle_maintenance`, `transport_incidents`.
## Relationships
Assignment links person, stop and route; trip links vehicle/staff/schedule; charges link fees.
## API Endpoints
`/transport/routes|vehicles|assignments|trips`, trip attendance and incident commands.
## Notifications
Assignment/change, arrival/delay/cancellation, missed boarding, incident and maintenance expiry.
## Reports
Route capacity/utilization, riders, attendance, incidents, fleet compliance, cost/collections.
## Audit Logs
Assignment, manifest access/export, location access, attendance, incident and override.
## UI Components
Route stop list/map, capacity bar, mobile manifest, rider verification, incident timeline.
## Error Handling
Offline capture queues visibly; deduplicate scans; fallback to last authorized manifest.
## Empty States
No routes, vehicles, riders, trips, alerts or maintenance.
## Loading States
Manifest and route skeleton; map has list fallback.
## Success States
Assigned, trip started/completed, rider boarded/alighted, incident filed.
## Edge Cases
Shared custody stop, missed bus, substitute vehicle, no GPS, overcapacity, emergency reroute.
## Future Improvements
Telematics, route optimization and geofenced arrival with consent.
