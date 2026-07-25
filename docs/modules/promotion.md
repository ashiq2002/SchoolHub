# Promotion
## Overview
End-of-period progression, retention, graduation and class/section allocation workflow.
## Objectives
Apply approved rules consistently while preserving human review and enrollment history.
## Business Rules
Decision uses published inputs and versioned policy; bulk promotion is previewed; no enrollment is overwritten.
## Workflow
Select cohort → evaluate eligibility → review exceptions → approve decisions → preview target allocation → execute → notify/reconcile.
## User Roles
Academic administrators prepare; leaders approve; teachers advise; families/students view final decision.
## Permissions
`student.promotion.evaluate|recommend|approve|execute|override`.
## Screens
Promotion cycle, cohort grid, eligibility detail, exception queue, target allocation, execution summary.
## Forms
Policy, recommendation, exception/override reason, target class/section, graduation outcome.
## Validation
Closed source period, published results, target capacity, no duplicate future enrollment, approval separation.
## Database Tables
`promotion_cycles`, `promotion_policies`, `promotion_candidates`, `promotion_decisions`, `promotion_runs`.
## Relationships
Candidate references source enrollment/results and target offering/new enrollment.
## API Endpoints
`/promotion-cycles`, evaluate/approve/execute commands, `/promotion-candidates/{id}/decision`.
## Notifications
Review assignment, decision publication, enrollment/section confirmation and exception.
## Reports
Promoted/retained/graduated, overrides, target capacity and execution reconciliation.
## Audit Logs
Policy snapshot, recommendation, override, approval and created enrollment links.
## UI Components
Cohort matrix, eligibility explanation, target capacity panel, bulk preview, exception diff.
## Error Handling
Execution is idempotent and resumable; row failures do not duplicate successful enrollments.
## Empty States
No eligible cohort, exceptions, target classes or pending decisions.
## Loading States
Evaluation job progress and cohort skeleton.
## Success States
Evaluation/approval/execution summary with reconciliation.
## Edge Cases
Retake pending, mid-year program change, no target capacity, graduating learner, rollback before notification.
## Future Improvements
Scenario simulation and policy outcome comparison.
