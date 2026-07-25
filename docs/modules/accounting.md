# Accounting
## Overview
Chart of accounts, balanced journals, periods, ledgers, close and statutory-ready financial statements.
## Objectives
Maintain an auditable double-entry source of truth and reconcile all subledgers.
## Business Rules
Posted journals balance by currency; entries are immutable; corrections reverse/repost; closed periods require governed reopen.
## Workflow
Configure accounts/period → receive draft journals → validate/approve/post → reconcile → close → report → adjust next period.
## User Roles
Accountants prepare/post; finance leaders approve/close; executives/auditors view.
## Permissions
`accounting.account.manage`, `journal.create|approve|post|reverse`, `period.close|reopen`, report/export.
## Screens
Chart of accounts, journal list/editor, ledger, trial balance, period close, reconciliation dashboard.
## Forms
Account, journal lines, recurring rule, reversal, period close/reopen reason.
## Validation
Debit=credit, active account, currency, open period, dimensions, source idempotency and approval separation.
## Database Tables
`accounts`, `accounting_periods`, `journal_entries`, `journal_lines`, `ledger_dimensions`, `recurring_journals`, `close_tasks`.
## Relationships
Journals reference source modules; lines reference accounts/dimensions; periods scope posting.
## API Endpoints
`/accounts`, `/journals`, `/journals/{id}/approve|post|reverse`, `/accounting-periods/{id}/close`.
## Notifications
Journal approval, imbalance/import failure, period-close task and reopen alert.
## Reports
Trial balance, general ledger, income statement, balance sheet, cash flow and subledger reconciliation.
## Audit Logs
Account change, journal lifecycle, period close/reopen, report/export and privileged view.
## UI Components
Journal line editor, balance indicator, ledger table, close checklist, statement viewer.
## Error Handling
Post atomically; preserve draft and validation diagnostics; block stale approval.
## Empty States
No accounts, journals, ledger activity or close tasks.
## Loading States
Stable financial table and report-job progress.
## Success States
Balanced, approved, posted, reversed or closed confirmation.
## Edge Cases
Opening balance, multi-currency, rounding, retroactive source, year-end close, migration.
## Future Improvements
Consolidation, automated eliminations and jurisdiction statement packs.
