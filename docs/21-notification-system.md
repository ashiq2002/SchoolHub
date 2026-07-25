# Notification System

## Purpose

Deliver timely, permission-safe, preference-aware messages through in-app inbox, email, SMS, push, and optional messaging providers without coupling business transactions to provider availability. Communication authors content; Notification orchestrates delivery.

## Flow

Domain event/command → policy and recipient resolution → template render → deduplication → user preference/consent and quiet-hours check → channel jobs → provider attempt → receipt/bounce state → in-app status and analytics. Critical transactional notices may override preferences only under documented policy, never legal consent.

## Data model

`notification_types`, `templates`, `template_versions`, `notification_requests`, `recipients`, `delivery_jobs`, `delivery_attempts`, `preferences`, `provider_configs`, `suppression_entries`, and `in_app_items`. Recipient snapshots preserve what was sent without retaining unnecessary rendered sensitive content indefinitely.

## Reliability and security

The outbox guarantees enqueue after business commit. Idempotency keys prevent duplicates; providers have circuit breakers, quotas, retries, and dead-letter review. Template variables are allowlisted and escaped by channel. Links are short-lived and authorization is rechecked at destination. Secrets are managed centrally. Webhooks are signature- and replay-validated.

## User experience

Inbox supports unread/all, type filters, grouped related events, mark read, and deep links. Preferences explain channel and category, support verified destinations, digest frequency, quiet hours, and per-learner context. Failure of a noncritical channel does not surface as a completed business-action failure.

## APIs and reports

Use `/api/v1/notifications`, `/me/notification-preferences`, `/notification-templates`, and provider webhook endpoints. Reports cover requested, sent, delivered, failed, bounced, suppressed, read/clicked where consent permits, cost, and latency by type/channel/provider. Audit template publication, provider configuration, preference change, resend, and suppression override.
