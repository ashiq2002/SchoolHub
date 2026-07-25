# Fee Management
## Overview
Fee structures, student charges, concessions, collection, allocation, refunds, arrears and statements.
## Objectives
Bill accurately, collect flexibly and reconcile every learner-account movement.
## Business Rules
Charges snapshot effective fee rules; allocation is explicit; waivers/refunds follow thresholds; posted items reverse rather than edit.
## Workflow
Define fee plan → assign/apply → generate charges → notify → collect/allocate → receipt → reconcile → waive/refund/age.
## User Roles
Accountants manage; reception may collect; leaders approve; families/students view/pay own.
## Permissions
`fees.plan.manage`, `charge.generate|adjust`, `payment.collect`, `waiver|refund.approve`, statement export.
## Screens
Fee plans, billing run, learner account, collection desk, online payments, arrears, waivers/refunds.
## Forms
Fee item/schedule, assignment, charge adjustment, payment, allocation, waiver/refund, payment plan.
## Validation
Active enrollment/plan, amount/currency, duplicate billing, provider status, allocation total and approval.
## Database Tables
`fee_plans`, `fee_items`, `fee_assignments`, `student_charges`, `payments`, `payment_allocations`, `waivers`, `refunds`.
## Relationships
Charges link enrollment/fee snapshot; payments allocate charges and produce finance/accounting entries.
## API Endpoints
`/fee-plans`, `/billing-runs`, `/student-accounts/{id}`, `/payments`, waiver/refund commands.
## Notifications
New charge, due reminder, payment receipt/failure, waiver/refund and arrears policy notices.
## Reports
Collection, outstanding/aging, plan/item, concessions, refunds, cashier and reconciliation.
## Audit Logs
Plan, billing, payment/allocation, waiver/refund approval, receipt reissue and export.
## UI Components
Account ledger, allocation control, payment method selector, receipt, aging table.
## Error Handling
Idempotent collection; uncertain provider state stays pending and is reconciled.
## Empty States
No plans, charges, dues, payments or arrears.
## Loading States
Account skeleton and payment progress without duplicate action.
## Success States
Charge generated, payment received with receipt, waiver/refund decided.
## Edge Cases
Partial/advance payment, sibling payer, scholarship, chargeback, plan change, transfer.
## Future Improvements
Autopay mandates, smart dunning and external finance integrations.
