# Payroll
## Overview
Period payroll calculation, review, approval, posting, payment export and payslip release.
## Objectives
Produce explainable net pay from approved effective-dated inputs with strict separation of duties.
## Business Rules
Runs are versioned/locked; money uses minor units/currency; finalized values change only through adjustment/reversal.
## Workflow
Open period → import attendance/leave/components → calculate → review exceptions → approve → post/export → release payslips → adjust.
## User Roles
Payroll/HR prepare; authorized approvers finalize; accountants post; employees view own payslips.
## Permissions
`payroll.run.manage|calculate|approve|post`, compensation view, payment export, own payslip view.
## Screens
Payroll calendar, run summary, employee calculation, exceptions, approvals, exports, payslips.
## Forms
Component/rule, one-time input, adjustment, approval, bank export and release settings.
## Validation
Eligible contract, component/effective date, currency, totals, approval separation and ledger period.
## Database Tables
`payroll_periods`, `payroll_runs`, `payroll_components`, `employee_payroll_inputs`, `payroll_items`, `payslips`, `payroll_adjustments`.
## Relationships
Items link employee/contract; run consumes HR inputs and posts journal entry/payment batch.
## API Endpoints
`/payroll-runs`, calculate/approve/post/release commands, `/me/payslips`.
## Notifications
Input deadline, exception, approval, payslip release and failed payment export.
## Reports
Register, variance, component/tax/deduction, bank summary, costing and reconciliation.
## Audit Logs
Input, calculation version, protected view, approval, export, posting and adjustment.
## UI Components
Run stepper, variance table, protected pay panel, approval diff, payslip viewer.
## Error Handling
Atomic finalization; retain prior calculation and row-level diagnostics.
## Empty States
No run, eligible employees, exceptions, inputs or payslips.
## Loading States
Calculation progress and stable register skeleton.
## Success States
Calculated/approved/posted/released with totals and references.
## Edge Cases
Join/leave mid-period, retroactive change, negative net, multi-currency, failed bank file.
## Future Improvements
Country tax packs, provider payments and workforce costing forecasts.
