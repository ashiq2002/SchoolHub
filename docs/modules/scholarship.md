# Scholarship
## Overview
Scholarship programs, applications, eligibility, awards, budgets, renewals and fee application.
## Objectives
Allocate assistance fairly, privately and within approved funding limits.
## Business Rules
Criteria and budget are versioned; reviewers disclose conflicts; awards need effective dates and cannot overconsume funds.
## Workflow
Create program → open applications/nomination → verify → score/review → approve award → apply to fees → renew/close.
## User Roles
Scholarship officers manage; committee reviews; finance applies; learners/families apply/view own.
## Permissions
`scholarship.program.manage`, `application.review`, `award.approve|apply`, sensitive evidence view.
## Screens
Programs, application portal, review queue, scoring, budget/awards, renewal.
## Forms
Program/criteria, application/evidence, reviewer score, award, renewal/withdrawal.
## Validation
Eligibility, deadline, duplicate award, evidence, reviewer conflict, budget and fee compatibility.
## Database Tables
`scholarship_programs`, `scholarship_criteria`, `scholarship_applications`, `application_reviews`, `scholarship_awards`, `scholarship_budget_movements`.
## Relationships
Applications link student/enrollment; awards link program, fee allocation and accounting funding dimension.
## API Endpoints
`/scholarship-programs`, `/scholarship-applications`, review/approve/apply/renew commands.
## Notifications
Opening/deadline, missing evidence, decision, award application and renewal.
## Reports
Applications/outcomes, budget utilization, award demographics with privacy thresholds, fee impact.
## Audit Logs
Criteria, protected evidence access, score/decision, conflict declaration and award change.
## UI Components
Eligibility checklist, evidence uploader, blind-review panel, scorecard, budget meter.
## Error Handling
Preserve application; hide reviewer/internal reason fields; prevent budget race via transaction.
## Empty States
No programs, applications, reviews, awards or renewal.
## Loading States
Application/review skeleton and budget calculation progress.
## Success States
Submitted, reviewed, awarded, applied or renewed confirmation.
## Edge Cases
Multiple awards, changing enrollment, insufficient budget, appeal, withdrawn student.
## Future Improvements
External sponsor portal and fairness monitoring.
