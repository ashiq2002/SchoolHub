# Component Library

## Architecture

Components are layered into tokens, primitives, composed controls, and domain patterns. Public APIs are typed, accessible, themeable, localized, and independent of application authorization/data fetching unless explicitly a domain component. Controlled and uncontrolled variants are documented only where both are necessary.

## Inventory

| Family | Components and requirements |
|---|---|
| Actions | Button, icon button, split button; variants, progress, destructive confirmation |
| Inputs | Text, number, currency, select, combobox, checkbox, radio, switch, slider, date/time, rich text; labels/errors/help |
| Overlays | Dialog, alert dialog, drawer/sheet, popover, dropdown, tooltip; focus trap/return and escape rules |
| Navigation | Sidebar, navbar, tabs, breadcrumb, pagination, command palette; current state and keyboard support |
| Data | Data table, list, description list, tree, timeline, stat, chart; sorting/filtering/virtualization/table alternative |
| Feedback | Alert, toast/snackbar, progress, skeleton, loading, empty, no-results, error, offline; live-region policy |
| Content | Card, avatar, badge, accordion, file preview, calendar; stable dimensions and fallbacks |
| Files | Drop zone/uploader, progress, retry, scan state, preview, validation, safe removal |
| Policy | Permission boundary and redaction display; experience only, never server enforcement |

## Data table contract

Server-controlled tables declare stable column IDs, accessible headers, row identity, selection semantics, query state, empty/no-results/error states, and export alignment. Row actions are keyboard reachable. Virtualization preserves accessibility or offers a paginated fallback. Loading does not change column widths.

## Date and calendar contract

Date controls expose locale, institutional time zone, week start, disabled-date reason, keyboard grid behavior, typed entry, and parse errors. Date-only values never shift through UTC conversion. Calendars offer agenda/list alternatives.

## Charts

Charts are for comparison, distribution, trend, and composition only when clearer than text/table. Each has title, metric definition, units, time range, data freshness, accessible summary, tabular data, non-color distinction, and empty/insufficient-data state.

## Testing and distribution

Each component includes interaction, keyboard, accessibility, theme, RTL, long-text, reduced-motion, and visual-regression coverage. Documentation provides do/don’t guidance and real domain examples. Packages use semantic versioning; breaking changes include codemods or migration guidance.
