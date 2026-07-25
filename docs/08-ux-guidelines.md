# UX Guidelines

## Interaction principles

- Optimize frequent work for recognition, keyboard use, and minimal context switching.
- Show system status in place: saved, queued, processing, synced, failed, or stale.
- Use progressive disclosure; do not hide required context behind unexplained icons.
- Preserve user input through validation errors and recover drafts after interruption.
- Confirm high-impact or irreversible transitions with consequence and affected count.
- Offer undo for reversible UI and business actions; use domain reversal workflows when legal/audit rules prohibit deletion.

## Page behavior

Every route has skeleton loading, first-use empty, filtered no-results, permission-denied, recoverable error, unavailable, and partial-data states. Empty states name the missing object and offer the authorized next action. Errors include a correlation ID and recovery action without exposing internals.

## Forms

Labels remain visible; placeholder text is illustrative only. Required fields are identified in text and programmatically. Validate on blur and submit, focus the first error, and provide an error summary for long forms. Multi-step workflows show progress, allow back navigation, and save a server draft where data is material. Defaults must be safe and explicit.

## Lists and tables

Tables support sticky headers, density options, sortable labeled columns, filters, saved views, column control, pagination, selection count, and accessible row actions. Bulk action availability is based on the full selected set. Narrow layouts transform to prioritized rows or cards without losing actions. Exports reflect visible filters and state the time zone and generation time.

## Search and command palette

Global search is permission-filtered, debounced, typo-tolerant where supported, and grouped by content type. Recent queries are private to the user. The command palette exposes navigation and authorized commands; dangerous commands still require their normal confirmation and checks.

## Feedback and motion

Use inline progress for local actions and notifications for background completion. Toasts are brief, nonessential, pausable, and never the only record of failure. Motion communicates relationship or status, stays under 250 ms for routine transitions, honors `prefers-reduced-motion`, and never blocks input.

## Accessibility

Target WCAG 2.2 AA: semantic landmarks, logical heading order, visible focus, complete keyboard paths, 44px touch targets where feasible, screen-reader names, status announcements, text alternatives, error association, zoom to 200%, reflow at 320 CSS px, and contrast-compliant states. Color never carries meaning alone. Automated checks supplement manual keyboard and assistive-technology testing.

## Responsive and international use

Primary workflows support phone, tablet, and desktop. Side navigation collapses to a drawer; contextual panels become sheets or inline sections. Do not scale typography by viewport. Layout handles 200% text expansion, long names, RTL, non-Latin scripts, locale-specific sorting, time zones, and academic calendars. Store timestamps in UTC and render with explicit institutional/user context.

## Offline and concurrency

Read-only cached context may be shown as stale with timestamp. Mutations are not claimed successful until acknowledged. Autosave uses revision tokens; conflicts show meaningful differences and preserve both versions. High-risk actions require current online authorization.

## Content style

Use concise verbs for actions and concrete nouns for records. Avoid blame and internal codes. Confirm outcomes with object and state: “Invoice INV-1042 was voided.” Destructive labels state the exact action. Help text explains policy or consequence, not obvious controls.
