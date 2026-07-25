# Library
## Overview
Catalog, copies, members, circulation, reservations, fines, acquisitions and inventory.
## Objectives
Track discoverability and custody of library resources across schools/branches.
## Business Rules
Bibliographic work and physical/digital copy are distinct; circulation policy snapshots due dates/fines; movements are append-only.
## Workflow
Catalog/acquire → accession/categorize → discover/reserve → issue/renew → return → fine/lost/damaged resolution → withdraw.
## User Roles
Librarian manages; students/staff/guardians search and use according to policy; finance receives postings.
## Permissions
`library.catalog.manage`, `copy.manage`, `loan.issue|return|override`, fine manage, member own-view.
## Screens
Search/catalog, copy detail, circulation desk, member account, reservations, overdue, stocktake.
## Forms
Work/copy, issue/return/renew, reservation, fine adjustment, lost/damaged, acquisition.
## Validation
Member eligibility, copy state, limits, reservation queue, due calendar and override reason.
## Database Tables
`library_works`, `library_copies`, `library_memberships`, `library_loans`, `reservations`, `library_fines`, `copy_movements`.
## Relationships
Copies belong to work/branch; loans link member/person and policy; fines link finance transaction.
## API Endpoints
`/library/catalog`, `/library/copies`, `/library/loans/issue|return|renew`, `/library/reservations`.
## Notifications
Reservation available, due reminder, overdue, fine/lost resolution.
## Reports
Circulation, overdue, utilization, inventory, fines, acquisitions and member activity.
## Audit Logs
Copy/loan movement, override, fine adjustment, member export and stocktake.
## UI Components
Catalog result, barcode input, circulation panel, copy status, member account timeline.
## Error Handling
Idempotent scan actions; flag conflicting copy state and preserve movement evidence.
## Empty States
No catalog result, copies, loans, reservations or overdue items.
## Loading States
Search and circulation skeleton with scan focus retained.
## Success States
Issued/returned/renewed/reserved with due/status receipt.
## Edge Cases
Lost then found, branch transfer, shared barcode, offline scanner, holiday extension.
## Future Improvements
MARC import, RFID, e-book providers and recommendation controls.
