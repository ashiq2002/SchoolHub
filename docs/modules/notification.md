# Notification
## Overview
User-facing module for in-app inbox, delivery preferences and administrative delivery operations.
## Objectives
Make system alerts actionable and channel behavior transparent while using the shared notification service.
## Business Rules
Preferences are category/channel-specific; required transactional alerts are labeled; destination verification is mandatory.
## Workflow
Receive domain request → resolve/deliver → show inbox → read/act → manage preferences; operators retry/suppress failures.
## User Roles
All users manage own inbox/preferences; administrators manage templates/providers within protected scope.
## Permissions
`notification.view_own|manage_preferences`, `notification.template.manage`, `delivery.retry`, provider manage.
## Screens
Notification center, detail, preferences, template catalog, delivery operations and provider health.
## Forms
Preferences, quiet hours/digest, verified destination, template version, retry/suppression reason.
## Validation
Verified channel, consent/category rules, locale variables, safe deep link and retry eligibility.
## Database Tables
`notifications`, `notification_recipients`, `notification_preferences`, `notification_templates`, `delivery_jobs`, `delivery_attempts`, `suppressions`.
## Relationships
Notifications reference source event/resource and recipients; delivery attempts reference channel/provider.
## API Endpoints
`/notifications`, mark-read commands, `/me/notification-preferences`, admin templates/deliveries.
## Notifications
Security changes to notification settings are themselves notified through an alternate verified channel.
## Reports
Requested/sent/delivered/failed/read, latency, cost, suppression and provider health.
## Audit Logs
Template/provider/preference security change, resend, suppression and delivery export.
## UI Components
Inbox list, unread badge, preference matrix, template preview, attempt timeline.
## Error Handling
Independent channel retries, deduplication and visible permanent failure to operators.
## Empty States
No notifications, unread items, providers, templates or failures.
## Loading States
Inbox skeleton and live delivery status.
## Success States
Read, preference saved, template published or retry queued.
## Edge Cases
Quiet hours across zones, invalid contact, duplicate provider receipt, deleted source, disabled user.
## Future Improvements
Smart digests, provider routing optimization and push device management.
