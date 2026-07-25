# Gallery
## Overview
Governed albums and media publication for institutional activities with consent and moderation.
## Objectives
Share authentic school media while protecting minors, privacy and storage resources.
## Business Rules
Publication requires audience and consent policy; originals remain private; metadata/location is stripped unless approved.
## Workflow
Create album → upload/quarantine/scan → caption/tag → consent/moderation → publish → view/download → archive/remove.
## User Roles
Authorized staff upload/manage; moderators publish; eligible users view; public view is explicit.
## Permissions
`gallery.album.manage`, `media.upload|moderate|publish|download_original`, public publish.
## Screens
Album list/detail, uploader, moderation queue, media viewer, archive.
## Forms
Album metadata/audience, upload, caption/alt text, consent evidence, takedown reason.
## Validation
File signature/size, malware, allowed format, alt text, audience, consent and storage quota.
## Database Tables
`gallery_albums`, `media_assets`, `album_media`, `media_consents`, `media_moderation`, `media_variants`.
## Relationships
Album links event/school/audience; asset links object/file record and consent subjects where recorded.
## API Endpoints
`/gallery/albums`, signed upload/finalize, moderate/publish/archive, authorized media delivery.
## Notifications
Moderation request/decision, album publication, takedown and processing failure.
## Reports
Albums/media, storage, processing failures, consent expiry/takedown and view counts where lawful.
## Audit Logs
Upload, consent evidence view, moderation, publish/public change, download original and takedown.
## UI Components
Media grid, uploader/progress, crop/preview, consent status, accessible lightbox.
## Error Handling
Quarantine failed files; retain batch row results; broken media has safe placeholder.
## Empty States
No albums, media, pending moderation or accessible public content.
## Loading States
Aspect-ratio placeholders and processing progress.
## Success States
Uploaded, processed, approved, published or removed.
## Edge Cases
Consent revoked, multiple learners, duplicate file, huge video, public link cached.
## Future Improvements
Face blur/redaction workflow and archival media tiers.
