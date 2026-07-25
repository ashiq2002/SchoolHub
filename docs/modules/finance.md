# Finance
## Overview
Operational cash, receivables, payables, budgets, approvals, reconciliation and financial workspace.
## Objectives
Provide controlled daily finance operations while Accounting owns the canonical general ledger.
## Business Rules
Posted money is append-only; every transaction has currency/source/idempotency; approval thresholds and cash controls apply.
## Workflow
Initiate transaction → validate/approve → collect/pay → allocate → post → reconcile → reverse/adjust.
## User Roles
Accountants manage; cashiers/reception collect narrowly; leaders approve/view; families/students view own accounts.
## Permissions
`finance.transaction.manage|approve|post|reverse`, cash session, reconciliation and export permissions.
## Screens
Finance dashboard, transactions, approvals, cash sessions, bank reconciliation, budgets, account statements.
## Forms
Receipt/payment, allocation, refund/reversal, cash open/close, bank import, budget.
## Validation
Positive amounts/currency, open period, balanced allocation, method/provider state, threshold and separation.
## Database Tables
`financial_transactions`, `cash_sessions`, `bank_accounts`, `bank_statement_lines`, `reconciliations`, `budgets`, `budget_lines`.
## Relationships
Transactions link student/vendor/employee subledgers, payment events and accounting journals.
## API Endpoints
`/finance/transactions`, approve/reverse commands, `/cash-sessions`, `/bank-reconciliations`, `/budgets`.
## Notifications
Approval, receipt/refund, reconciliation exception, cash close and budget threshold.
## Reports
Cashbook, collections/payments, receivables, reconciliation, budget variance and daily closing.
## Audit Logs
Protected view, transaction/approval, cash counts, import, reconciliation, reversal and export.
## UI Components
Money input, transaction timeline, allocation grid, reconciliation matcher, cash-close summary.
## Error Handling
Idempotent provider callbacks; never double-post; expose unmatched/uncertain state.
## Empty States
No transactions, approvals, statements, matches or budgets.
## Loading States
Stable totals and asynchronous reconciliation progress.
## Success States
Receipt/posting/reconciliation with immutable reference.
## Edge Cases
Partial payment/refund, chargeback, FX, duplicate statement, closed period, offline counter.
## Future Improvements
Bank feeds, payable procurement integration, cash forecasting.
