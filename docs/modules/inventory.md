# Inventory
## Overview
Item catalog, stores, stock lots, receipts, transfers, issues, returns, adjustments, counts and assets.
## Objectives
Maintain traceable custody and quantities across institutional stores and users.
## Business Rules
Stock changes only through append-only movements; negative stock is blocked unless approved; lot/serial policy is item-specific.
## Workflow
Catalog → receive → store → request/approve → issue/transfer → return/consume → count/adjust → dispose.
## User Roles
Inventory Manager manages; departments request/approve; custodians acknowledge; finance consumes valuation postings.
## Permissions
`inventory.item|store.manage`, `movement.receive|issue|transfer|adjust`, request approve, valuation view.
## Screens
Stock dashboard, item/store, request queue, movement, custody, stocktake, low-stock/expiry.
## Forms
Item, receipt/lot, request, issue/return/transfer, adjustment, count, disposal.
## Validation
Quantity/unit conversion, available stock, lot/serial uniqueness, approval, destination and period.
## Database Tables
`inventory_items`, `stores`, `stock_lots`, `stock_movements`, `inventory_requests`, `asset_instances`, `stock_counts`, `custody_assignments`.
## Relationships
Movement references item/lot/source/destination and source document; assets link custodian/person.
## API Endpoints
`/inventory/items|stores|requests|movements|counts`, approve/issue/adjust commands.
## Notifications
Request decision, issue/return due, low stock, expiry, count variance and custody change.
## Reports
Stock on hand/movement, valuation, consumption, variance, expiry, custody and reorder.
## Audit Logs
Catalog, approval, every movement, valuation view, count, adjustment and disposal.
## UI Components
Stock ledger, quantity/unit input, barcode control, movement timeline, variance table.
## Error Handling
Transactional quantities, idempotent scans, conflict resolution for concurrent issue.
## Empty States
No items, stock, requests, movements, variances or low-stock alerts.
## Loading States
Stable stock table and count progress.
## Success States
Received/issued/transferred/returned/adjusted with movement reference.
## Edge Cases
Unit conversion, expired lot, lost asset, partial fulfillment, return to different store.
## Future Improvements
Procurement, supplier portal, RFID and demand forecasting.
