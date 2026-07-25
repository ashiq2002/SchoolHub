# Communication
## Overview
Audience-aware announcements, conversations, campaigns and emergency communication authored by institutions.
## Objectives
Deliver clear, governed communication without exposing recipient identity or bypassing consent.
## Business Rules
Audiences resolve at send time or snapshot by purpose; approval/moderation applies by type; delivery is owned by Notification.
## Workflow
Draft → choose audience/channels → preview/count → approve/schedule → hand to Notification → monitor → correct/archive.
## User Roles
Authorized leaders/staff author; learners/families/employees receive; moderators approve broad/emergency sends.
## Permissions
`communication.message.create|approve|send`, audience manage, reply/moderate, delivery report view.
## Screens
Inbox, announcements, composer, audience builder, approval queue, campaign delivery.
## Forms
Subject/body, audience/filter, channel, schedule, attachments, reply policy and emergency classification.
## Validation
Authorized audience, recipient preview, safe content/files, channel consent, schedule and approval threshold.
## Database Tables
`communications`, `communication_versions`, `audience_definitions`, `communication_recipients`, `conversation_threads`, `thread_messages`.
## Relationships
Communication references author, audience snapshot and notification request/delivery; threads link authorized participants.
## API Endpoints
`/communications`, preview/approve/send commands, `/conversations`, `/communications/{id}/delivery-summary`.
## Notifications
All channel delivery uses Notification templates/preferences; emergency rules are separately governed.
## Reports
Reach, delivery, readership where lawful, replies, opt-outs and campaign performance.
## Audit Logs
Audience preview/export, content version, approval, send/cancel, emergency override and moderation.
## UI Components
Rich-text composer, audience chips/count, channel selector, schedule control, delivery funnel.
## Error Handling
Provider failure does not duplicate sends; unsafe recipient addresses enter suppression review.
## Empty States
No messages, drafts, conversations, approvals or recipients.
## Loading States
Inbox/composer skeleton and send-job progress.
## Success States
Draft saved, approved, scheduled or sent with recipient count.
## Edge Cases
Audience changes before send, revoked relationship, translation, recall request, emergency provider outage.
## Future Improvements
Translation workflow, survey integration and governed two-way channels.
