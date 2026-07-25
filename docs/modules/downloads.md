# Downloads
## Overview
Curated, permission-aware repository of downloadable forms, policies, guides and resource files.
## Objectives
Make authoritative files easy to find while controlling versions, expiry and disclosure.
## Business Rules
Every item has owner, audience, version, classification and effective dates; old versions remain traceable.
## Workflow
Upload → scan/metadata → review/publish → discover/download → replace/version → expire/archive.
## User Roles
Authorized content owners manage; eligible users search/download; administrators govern categories.
## Permissions
`downloads.item.view|manage|publish|archive`, protected file download/export.
## Screens
Download catalog, category, item detail/version history, editor, review queue.
## Forms
Title/category, file, audience, locale, effective/expiry date, acknowledgement requirement.
## Validation
Safe file, quota, audience, version/effective dates, duplicate and required owner.
## Database Tables
`download_categories`, `download_items`, `download_versions`, `download_audiences`, `download_receipts`.
## Relationships
Version references file object; audience references roles/schools/groups; receipt links user/version.
## API Endpoints
`/downloads`, `/download-items`, publish/archive, authorized signed download.
## Notifications
New/updated required document, expiry review and processing failure.
## Reports
Published/expired, downloads, acknowledgements, storage and missing owners.
## Audit Logs
Version/publish/audience, protected download, acknowledgement and archive.
## UI Components
Search/filter list, file-type icon, version history, download progress, acknowledgement control.
## Error Handling
Reauthorize before signed URL; expired/unavailable file shows owner/contact safely.
## Empty States
No downloads, category results, versions or pending reviews.
## Loading States
Catalog skeleton and file preparation progress.
## Success States
Published, downloaded, acknowledged or archived.
## Edge Cases
Replaced file, expired link, required acknowledgement update, duplicate locale.
## Future Improvements
Offline packs and content recommendation by role.
