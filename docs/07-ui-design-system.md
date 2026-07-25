# UI Design System

## Direction

The interface is quiet, precise, and work-focused. Dense operational information is organized with hierarchy and whitespace rather than decorative containers. Surfaces are neutral; semantic color is reserved for state and action. Cards frame repeated records or tools, not entire page sections. Corners remain 4-8px and shadows subtle.

## Foundations

- Use an 8px spacing grid with 4px only for compact internal alignment.
- Use a 12-column desktop grid, 8-column tablet grid, and 4-column phone grid with responsive gutters.
- Use a highly legible variable sans font with system fallback and tabular numerals for data.
- Icons come from one established outline set, default 18-20px, with accessible names/tooltips when unfamiliar.
- Light, dark, and system themes share semantic tokens; tenant branding may change approved brand tokens only.

## Layout

The application shell has a stable navigation rail/sidebar and compact top context bar. Content widths respond to task: forms are constrained, tables use available width, and full-bleed page bands replace nested cards. Fixed-format controls declare stable size/aspect ratios so loading and labels do not shift layout.

## Typography

| Role | Size/line height | Use |
|---|---|---|
| Display | 32/40 | Rare product or major summary heading |
| H1 | 24/32 | Page title |
| H2 | 20/28 | Major section |
| H3 | 16/24, semibold | Panel/group title |
| Body | 14/20 | Default interface copy |
| Small | 12/16 | Metadata and supporting labels |

Letter spacing is zero. Text does not scale with viewport width. Truncation requires an accessible full-value affordance and is avoided for primary identifiers.

## Interaction states

All controls define default, hover, active, focus-visible, selected, disabled, loading, error, and read-only states. Focus rings are never removed. Disabled state is not used to conceal policy; when explanation matters, keep the control discoverable with a reason. Destructive actions use semantic styling only at the decision point.

## Responsive behavior

Navigation becomes a drawer on narrow screens. Toolbars wrap by priority; overflow commands use a menu. Tables switch to priority-column rows/cards or horizontal scroll with frozen identity column. Dialogs become sheets/full-screen flows when space demands. Text and controls must remain non-overlapping at 320 CSS px and 200% zoom.

## Accessibility and governance

Components meet WCAG 2.2 AA and WAI-ARIA patterns, including keyboard, screen-reader announcements, contrast, target size, reduced motion, and forced-colors behavior. A documented contribution process requires design review, API review, tests, examples, changelog, and migration notes. Product code consumes semantic tokens and public components, never hard-coded palette values.
