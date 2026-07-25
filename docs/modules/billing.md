# Billing
## Overview
SaaS customer invoicing, taxes, credits, payment collection, dunning and commercial reconciliation.
## Objectives
Bill tenants accurately while keeping school fee collection separate from platform billing.
## Business Rules
Invoices snapshot plan/tax/customer data; provider tokens replace raw card data; finalized invoices use credit notes.
## Workflow
Collect billing profile → generate invoice → finalize/send → payment attempt → reconcile → dunning/credit/refund → close.
## User Roles
Organization Owner/billing contact view/pay; platform finance administers; support has masked read only.
## Permissions
`billing.profile.manage`, `invoice.view|finalize`, `payment.manage`, credit/refund approve, tax manage.
## Screens
Tenant billing portal, invoices, payment methods/provider handoff, platform invoices, dunning, reconciliation.
## Forms
Legal/tax address, purchase order, payment method handoff, credit/refund, dunning override.
## Validation
Tax jurisdiction/ID, currency, invoice totals, provider event, approval threshold and immutable finalized fields.
## Database Tables
`billing_customers`, `billing_profiles`, `invoices`, `invoice_lines`, `credit_notes`, `billing_payments`, `dunning_cases`, `tax_rates`.
## Relationships
Invoice references subscription snapshot; payment/credit allocate invoice; accounting export references source.
## API Endpoints
`/billing/profile|invoices|payment-method-session`, platform invoice/payment/credit commands and webhooks.
## Notifications
Invoice, payment receipt/failure, dunning, expiring method, credit/refund and suspension risk.
## Reports
Invoices, collections, aging, tax, credits/refunds, provider reconciliation and revenue inputs.
## Audit Logs
Profile/tax, finalization, provider callback, credit/refund, dunning override and export.
## UI Components
Invoice table/viewer, provider payment handoff, amount/tax summary, dunning timeline.
## Error Handling
Idempotent webhooks; pending payment state; never retry non-idempotent collection blindly.
## Empty States
No invoices, payment methods, dues, credits or dunning cases.
## Loading States
Billing skeleton and provider redirect/poll progress.
## Success States
Invoice finalized/paid, method updated, credit/refund issued.
## Edge Cases
Tax change, PO workflow, chargeback, partial payment, FX, provider outage.
## Future Improvements
Multiple entities, consolidated billing and regional e-invoicing adapters.
