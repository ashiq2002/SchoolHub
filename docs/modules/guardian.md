# Guardian
## Overview
Relationship governance for legal, emergency, financial, pickup, and communication responsibilities around learners.
## Objectives
Represent nuanced family authority independently from a generic parent label.
## Business Rules
Relationship type does not imply all rights; legal evidence, effective dates, priority and restrictions are field-level controlled.
## Workflow
Add/match person → choose relationship → collect evidence/consent → verify → assign rights → review → expire/revoke.
## User Roles
Reception/admin manage; authorized guardians self-view/update limited fields; safeguarding roles manage restrictions.
## Permissions
`people.relationship.view|create|verify|restrict|revoke`, `guardian.sensitive_evidence.view`.
## Screens
Relationship list, guardian profile, verification queue, rights matrix, evidence, history.
## Forms
Relationship, rights, emergency priority, pickup authorization, evidence, restriction/revocation reason.
## Validation
No contradictory effective dates/rights; required evidence; verified contacts; separation-of-duty for sensitive restriction.
## Database Tables
`relationships`, `relationship_permissions`, `relationship_verifications`, `relationship_evidence`, `pickup_authorizations`.
## Relationships
Joins guardian and learner persons; may reference consent, legal document, verifier and school policy.
## API Endpoints
`/students/{id}/guardians`, `/relationships/{id}/verify|restrict|revoke`, evidence upload endpoints.
## Notifications
Invitation, verification, rights change, expiry, revocation, pickup change where legally allowed.
## Reports
Unverified/expiring relationships, emergency-contact gaps, pickup lists, access review.
## Audit Logs
All rights, restrictions, evidence views, verification and revocation events.
## UI Components
Relationship badge, rights checklist, verification timeline, evidence viewer, warning banner.
## Error Handling
Fail closed on ambiguous rights; keep prior valid state if update fails.
## Empty States
No guardian, evidence, pickup rights, or pending verification.
## Loading States
Relationship graph and evidence skeleton.
## Success States
Verified, restricted, expired, or revoked status with effective time.
## Edge Cases
Court restrictions, temporary guardian, adult student, same guardian multiple learners, conflicting claims.
## Future Improvements
Digital evidence verification, periodic attestation, jurisdiction policy packs.
