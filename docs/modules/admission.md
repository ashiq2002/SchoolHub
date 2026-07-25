# Admission
## Overview
Inquiry-to-enrollment pipeline with applications, evidence, review, decisions, offers and conversion.
## Objectives
Give applicants a transparent journey and staff a configurable, auditable admissions workflow.
## Business Rules
Cycles/program capacity and criteria are versioned; person matching precedes conversion; reviewers declare conflicts.
## Workflow
Inquiry → account/application → documents/payment → review/interview/test → decision → offer → acceptance → enrollment.
## User Roles
Applicants/families self-serve; reception intakes; admissions staff review; leaders approve exceptions.
## Permissions
`admission.application.manage|review|decide`, evidence view, fee/capacity override and conversion.
## Screens
Public portal, applicant dashboard, pipeline, application detail, review queue, offers, conversion reconciliation.
## Forms
Inquiry, application sections, documents, reviewer score, decision, offer, acceptance.
## Validation
Cycle/deadline, required fields/evidence, duplicate person/application, eligibility, capacity and payment state.
## Database Tables
`admission_cycles`, `inquiries`, `applications`, `application_sections`, `application_documents`, `application_reviews`, `admission_decisions`, `offers`.
## Relationships
Application may link prospective person; accepted offer creates/matches student profile and enrollment.
## API Endpoints
Public `/admissions/*`, staff `/applications`, review/decide/offer/accept/convert commands.
## Notifications
Verification, incomplete/reminder, review/interview, decision, offer expiry and enrollment welcome.
## Reports
Funnel, source, cycle/program, turnaround, capacity, demographics with privacy controls, conversion reconciliation.
## Audit Logs
Evidence access, review/score, decision, override, offer and identity merge/conversion.
## UI Components
Step form, progress tracker, pipeline table, evidence checklist, review scorecard.
## Error Handling
Autosave/resume, duplicate-match review, payment uncertainty and accessible validation summary.
## Empty States
No open cycle, applications, missing items, reviews or offers.
## Loading States
Step skeleton, upload/payment progress and pipeline placeholders.
## Success States
Application receipt, review decision, accepted offer and enrollment reference.
## Edge Cases
Minor self-application, duplicate siblings, late application, waitlist, withdrawn offer, partial migration.
## Future Improvements
CRM campaigns, interview scheduling and external application standards.
