# Design Tokens

## Token model

Components consume semantic tokens, which map to primitive palettes per theme. White-label configuration can override only approved brand, logo, font, and communication tokens. Semantic status colors, spacing, focus, accessibility, and component geometry remain governed.

## Core tokens

```css
:root {
  --space-1: 4px; --space-2: 8px; --space-3: 12px; --space-4: 16px;
  --space-6: 24px; --space-8: 32px; --space-12: 48px;
  --radius-sm: 4px; --radius-md: 6px; --radius-lg: 8px;
  --control-sm: 32px; --control-md: 40px; --control-lg: 48px;
  --text-xs: 12px; --text-sm: 14px; --text-md: 16px;
  --text-lg: 20px; --text-xl: 24px; --text-display: 32px;
  --duration-fast: 120ms; --duration-normal: 200ms;
  --ease-standard: cubic-bezier(.2, 0, 0, 1);
}
```

## Semantic color roles

`surface.canvas`, `surface.subtle`, `surface.raised`, `text.primary`, `text.secondary`, `text.disabled`, `border.default`, `border.strong`, `action.primary`, `action.primaryHover`, `focus.ring`, and paired `status.{success|warning|danger|info}.{surface|text|border|icon}` tokens are required in each theme. Exact values must pass contrast and are maintained in machine-readable token files.

## Elevation and borders

Use borders and surface changes before shadow. `elevation.1` supports dropdowns/raised tools, `elevation.2` dialogs, and `elevation.3` temporary navigation overlays. Page sections have no floating elevation. Shadows adapt in dark mode and forced-colors falls back to system borders.

## Motion

Motion tokens define fast feedback, normal transition, and deliberate complex transition with standard/decelerate/accelerate easing. Reduced-motion replaces spatial movement with immediate state or short opacity change. Continuous decorative motion is prohibited in the operational shell.

## Theming governance

Token builds generate CSS variables, typed application constants, and design-tool exports from one source. CI checks unknown tokens, raw color usage, contrast, theme completeness, and visual snapshots. Tenant changes are previewed in light/dark and rejected when contrast or layout constraints fail.
