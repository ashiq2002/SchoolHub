# Subscription
## Overview
Commercial plans, entitlements, quantities, trials, lifecycle, limits and tenant service state.
## Objectives
Control product access predictably without deleting customer data or coupling business modules to billing providers.
## Business Rules
Entitlements are server-authoritative and versioned; downgrade preserves data; grace/suspension states follow contract and legal policy.
## Workflow
Trial/provision → select plan/add-ons → activate → measure usage → renew/change → grace/suspend → cancel/retain/export.
## User Roles
Organization Owner manages; billing contacts view; platform commercial/admin roles operate under separation.
## Permissions
`subscription.view|change|cancel`, entitlement override, tenant suspend/reactivate.
## Screens
Plan/usage, subscription detail, change preview, invoices link, platform tenant subscriptions.
## Forms
Plan/add-on/quantity, billing contact, change/cancel reason, platform override with expiry.
## Validation
Plan compatibility, usage limits, effective/proration date, authority, contract and data-retention consequences.
## Database Tables
`plans`, `plan_versions`, `entitlements`, `subscriptions`, `subscription_items`, `usage_records`, `entitlement_overrides`.
## Relationships
Subscription belongs to tenant/customer; items reference plans; Billing owns invoices/payments.
## API Endpoints
`/subscription`, preview/change/cancel commands, platform `/subscriptions`, `/entitlements/effective`.
## Notifications
Trial/renewal, payment/grace, limit threshold, plan change, suspension/cancellation and export window.
## Reports
MRR/ARR inputs, active/trial/churn, entitlement usage, overrides and limit breaches.
## Audit Logs
Plan/version, subscription change, override, suspension and protected commercial export.
## UI Components
Plan comparison table, usage meter, change impact, lifecycle timeline, entitlement matrix.
## Error Handling
Provider uncertainty remains pending; entitlement cache uses last valid signed/versioned state briefly.
## Empty States
No add-ons, usage, pending changes or invoice history.
## Loading States
Plan/usage skeleton and change-preview progress.
## Success States
Activated/changed/cancel scheduled with effective date and impact.
## Edge Cases
Contract plan, over-limit downgrade, failed renewal, tenant merge, self-hosted license expiry.
## Future Improvements
Marketplace add-ons, usage-based pricing and partner/reseller support.
