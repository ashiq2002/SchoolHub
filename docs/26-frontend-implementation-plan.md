# Frontend Implementation Plan

## 1. Objective

Build a production-grade, responsive school-management frontend with Next.js and TypeScript. The frontend must remain maintainable as the product grows across roles, schools, countries, and domains. Delivery follows vertical slices: each slice includes UX, API integration, authorization-aware presentation, accessibility, telemetry, tests, documentation, and release controls.

This plan complements the product roadmap in `25-development-roadmap.md`. Phases define dependency order and measurable exit criteria, not fixed calendar commitments.

## 2. Architecture decisions

Record the final choices in ADRs before implementation. The recommended baseline is:

- Next.js App Router with the latest project-approved stable release, React, and strict TypeScript.
- Server Components by default; Client Components only for browser APIs, local interaction, or client-side libraries.
- pnpm workspaces with Turborepo when the wider monorepo is created.
- `apps/web` for the application, `packages/design-system` for stable generic UI, `packages/api-client` for generated OpenAPI types/client, and `packages/config` for shared lint, TypeScript, and test configuration.
- Tailwind CSS using semantic design tokens and CSS custom properties; product code must not use raw palette values.
- Accessible headless primitives such as Radix UI, wrapped behind the project design-system API.
- React Hook Form and Zod for complex client forms. The OpenAPI contract remains authoritative at the network boundary.
- A generated typed REST client from OpenAPI 3.1. Thin application-owned adapters map transport DTOs to frontend view models where necessary.
- TanStack Query only for client-owned server state that needs polling, optimistic interaction, or background synchronization. Prefer server-side fetching and route revalidation otherwise.
- URL search parameters for shareable table filters, sorting, pagination, tabs, and search; local component state only for ephemeral UI.
- Vitest and React Testing Library for unit/component tests, MSW for API simulation, Playwright for end-to-end tests, axe for automated accessibility checks, and Storybook for design-system documentation and visual regression.
- OpenTelemetry-compatible tracing, structured client error reporting, and privacy-safe web analytics. The vendor must remain behind an adapter.

Avoid introducing Redux or a general global store initially. Add one only through an ADR after a demonstrated cross-route state requirement that URL, server state, and small scoped contexts cannot solve.

## 3. Target repository structure

```text
apps/
  web/
    src/
      app/
        (public)/
        (auth)/
        app/
          [area]/
        api/                  # BFF/route handlers only when justified
        error.tsx
        global-error.tsx
        not-found.tsx
        layout.tsx
      features/
        authentication/
          components/
          forms/
          queries/
          routes/
          schemas/
          permissions.ts
          index.ts
        students/
        attendance/
        fees/
      components/            # application-wide composed UI only
      lib/
        api/                  # client setup, errors, request context
        auth/                 # session and policy presentation adapters
        observability/
        routing/
        validation/
      providers/             # narrowly scoped client providers
      styles/
      test/
      middleware.ts
    public/
    next.config.ts
packages/
  api-client/                # generated files; never hand-edited
  contracts/                 # OpenAPI source/artifacts
  design-system/
    src/
      foundations/
      primitives/
      patterns/
  config/
tests/
  e2e/
  contract/
```

### Dependency rules

- `app` composes routes and features; it does not contain reusable domain behavior.
- A feature may import the design system, API client, and shared platform libraries, but never another feature's internals.
- Cross-feature use goes through intentional public exports or a domain-owned shared component.
- The design system contains generic accessible primitives, not school-specific business rules.
- Generated transport types do not leak through the entire UI. Map them where the UI needs stable domain-oriented models or formatting.
- Server-only modules use `server-only`; browser-only boundaries are explicit.
- No generic `utils`, `helpers`, or `common` dumping grounds. Name modules by responsibility.
- Enforce boundaries, import cycles, forbidden deep imports, and generated-file integrity in CI.

## 4. DRY and clean-code policy

DRY means one authoritative representation of stable knowledge, not removing every visual similarity.

- Generate API types from OpenAPI; do not manually duplicate request and response interfaces.
- Define colors, spacing, typography, breakpoints, and semantic states once as design tokens.
- Build reusable patterns for data tables, filters, pagination, forms, field errors, confirmation flows, async states, file upload, and long-running job status.
- Keep business-specific components within their owning feature until at least two stable consumers prove a reusable abstraction.
- Prefer composition and small named modules over configuration-heavy universal components.
- Centralize date, time-zone, number, currency, academic-period, and configurable terminology formatting.
- Centralize stable API error normalization and map error codes to localizable user messages at the presentation boundary.
- Never duplicate backend authorization rules. The client consumes permissions/capabilities only to shape navigation and controls; the API remains authoritative.
- Delete obsolete abstractions during migration and track temporary compatibility layers with an owner and removal condition.

## 5. Rendering, data, and state strategy

### Rendering

- Use Server Components for route shells, initial authorized data, reference data, and read-heavy pages.
- Use Client Components at the smallest practical boundary for forms, interactive tables, editors, charts, and browser integrations.
- Use streaming and route-level `loading.tsx` for slow independent sections. Skeletons must preserve final layout dimensions.
- Use route groups and nested layouts for public, authentication, and authenticated application shells.
- Treat hydration warnings, accidental client bundles, and uncached user-specific output as release-blocking defects.

### Data access

- All API access flows through the generated client plus a small request adapter that propagates cookies, CSRF token, correlation ID, locale, school context, deadlines, and cancellation.
- Never accept tenant identity from editable client data. Tenant derives from the verified host/session; the server validates school context.
- Define cache policy per query: public/static, reference, user-specific, transactional, or real-time. User-specific and permission-filtered responses must never enter a shared cache.
- Mutations implement idempotency where supported, concurrency control with version/`If-Match`, clear success/failure feedback, and deterministic cache invalidation.
- Normalize `application/problem+json` once and preserve safe field errors and request IDs for support.
- Poll long-running job resources with backoff, visibility awareness, cancellation, and terminal-state handling.

### State ownership

- Server data: Server Components or TanStack Query when client synchronization is needed.
- Form state: React Hook Form, with schemas close to the owning form/use case.
- Shareable navigation state: URL search parameters with typed parsers.
- Ephemeral interaction state: local React state.
- Cross-tree UI state: narrowly scoped context, such as theme or command palette.

## 6. Phase-by-phase delivery

### Phase 0 — Discovery and frontend ADRs

**Scope**

- Confirm browser support, device profiles, bandwidth constraints, locale/RTL needs, white-label limits, SEO requirements for public pages, and deployment topology.
- Inventory workflows by role and map them to the information architecture and permission matrix.
- Validate representative prototypes for the application shell, dense tables, forms, approvals, mobile attendance, and dashboards.
- Decide and document the framework version policy, rendering/cache model, authentication boundary, styling/design-system approach, API generation tool, test stack, observability vendor abstraction, and monorepo tooling.
- Establish route classes and initial JavaScript, CSS, image, payload, and Core Web Vitals budgets.

**Exit criteria**

- Approved frontend ADRs, browser matrix, accessibility target of WCAG 2.2 AA, threat model, performance budgets, prototype feedback, and prioritized vertical slices.

### Phase 1 — Workspace and engineering foundation

**Scope**

- Scaffold `apps/web` with strict TypeScript, App Router, workspace commands, environment validation, and reproducible builds.
- Configure ESLint, Prettier, import boundaries, dependency-cycle checks, commit/CI checks, and zero-warning production builds.
- Add unit, component, E2E, accessibility, and contract-test harnesses with deterministic factories.
- Create typed environment modules with separate server/public namespaces; fail fast on invalid configuration and never expose secrets through `NEXT_PUBLIC_*`.
- Configure security headers, CSP with nonces where required, clickjacking protection, referrer policy, MIME protection, and a dependency/SBOM scan.
- Add preview deployments, build artifact caching, bundle analysis, source-map controls, and baseline observability.
- Define ownership, contribution rules, pull-request checklist, and architecture tests.

**Exit criteria**

- A clean checkout can install, lint, type-check, test, build, and run locally and in CI; preview deployment and smoke test pass; dependency rules fail on an intentional violation.

### Phase 2 — Design system and application shell

**Scope**

- Implement semantic tokens for color, typography, spacing, elevation, motion, density, themes, forced colors, and tenant-approved branding.
- Build accessible primitives: button, link, input, select, checkbox, radio, switch, textarea, dialog, sheet, menu, tabs, tooltip, toast/live region, badge, skeleton, and focus management.
- Build application patterns: page header, breadcrumb, context selector, navigation, command/search shell, data table, filters, pagination, form layout, empty/error/permission states, confirmation flows, and responsive detail layout.
- Implement authenticated desktop and mobile shells, skip links, landmarks, route announcements, keyboard navigation, 200% zoom support, dark/system theme, and RTL foundations.
- Document components and their state matrix in Storybook; add interaction, accessibility, and visual-regression tests.

**Exit criteria**

- Accessible responsive shell and core patterns work at 320 px through desktop, keyboard-only, reduced motion, forced colors, representative RTL/long text, and 200% zoom; no critical automated accessibility violations.

### Phase 3 — Authentication, tenancy context, and authorization-aware UX

**Scope**

- Implement sign-in, sign-out, recovery, MFA/step-up placeholders, session expiry, unauthorized, forbidden, and safe return-to flows.
- Integrate secure HttpOnly cookie sessions and CSRF protection. Do not store access or refresh tokens in local/session storage.
- Add verified organization/school/academic-period context selection with URL/session continuity and invalid-context recovery.
- Consume server-issued permissions/capabilities for navigation and action visibility. Provide understandable disabled/forbidden states without treating client checks as enforcement.
- Add session-timeout warnings, request correlation IDs, safe error reporting, and privacy-redacted telemetry.
- Test expired sessions, revoked access, permission changes, cross-school attempts, open redirects, CSRF failures, and identity-provider degradation.

**Exit criteria**

- Authentication and context journeys pass security, accessibility, contract, and E2E tests; authorization UX fails closed and the backend remains the source of truth.

### Phase 4 — API and reusable workflow infrastructure

**Scope**

- Generate and compatibility-check the OpenAPI client in CI.
- Implement the server/client request adapters, standardized problem-details handling, timeouts, cancellation, safe retry rules, and correlation/idempotency headers.
- Build reusable query-param codecs, cursor/offset pagination, search debouncing, filter persistence, sort controls, optimistic-concurrency conflict UI, and stale-data indicators.
- Build schema-driven form conventions without creating an opaque universal form engine.
- Add direct-to-quarantine file upload, progress/cancel/finalize/scan states, secure downloads, and long-running import/export job patterns.
- Provide MSW contract fixtures derived from schemas and representative empty, error, stale, partial, and high-volume datasets.

**Exit criteria**

- A reference CRUD/workflow slice demonstrates list, detail, create/edit, permission handling, concurrency conflict, async states, upload/job behavior, telemetry, and complete automated tests.

### Phase 5 — Platform and core operations vertical slices

Deliver in dependency order, with each slice fully production-ready before broadening scope:

1. Institution settings, academic year, classes, sections, subjects, roles, notification center, files, and audit views.
2. People directory, student/guardian/teacher profiles, admissions, enrollment, and document handling.
3. Timetable and attendance, including resilient mobile-friendly capture and explicit unsaved/offline status if offline support is approved.
4. Fees, invoices, receipts, payment confirmation, reconciliation views, and communications.
5. Role-specific dashboards, tasks, approvals, and recent work.

**Per-slice requirements**

- Route, permission/capability mapping, API contract, loading/empty/error/retry/stale/forbidden states, responsive behavior, localization, audit link, privacy-safe telemetry, Storybook coverage for new patterns, component/contract/E2E tests, performance measurement, feature flag, runbook, and rollback plan.
- Financial UI uses integer minor units or decimal-safe values, authoritative server calculations, explicit currency, concurrency controls, and double-submit protection.

**Exit criteria**

- A pilot school completes daily administration, admission, attendance, fee, and communication journeys on supported devices; reconciliations match source data and release gates pass.

### Phase 6 — Academic depth

**Scope**

- Homework and assignments, exam setup, marks entry, moderation, results, publication, promotion, certificates, calendar/events, and academic reports.
- Optimize keyboard-driven bulk entry while retaining validation, autosave visibility, conflict handling, and recovery.
- Treat result finalization/publication as explicit privileged workflows with review summaries, step-up support, immutable-state explanation, and audit evidence.
- Add print/export layouts with privacy classification and expiring artifact status.

**Exit criteria**

- A full academic period from setup through result publication and promotion succeeds with golden-dataset reconciliation, role testing, accessibility review, and peak-load validation.

### Phase 7 — Enterprise services

**Scope**

- HR/payroll, accounting, scholarships, library, transport, hostel, inventory, documents, reception, and service dashboards.
- Reuse stable workflow primitives for approval, allocation, check-in/out, status history, bulk preview/execute, and reconciliation; keep domain rules and vocabulary inside owning features.
- Add specialized data visualization only through accessible wrappers with table/text alternatives.

**Exit criteria**

- Domain reconciliations pass; service-manager pilots complete critical workflows; permissions, exports, bulk actions, and high-volume views satisfy security and performance gates.

### Phase 8 — Commercial scale, multi-school, and white label

**Scope**

- Subscription/billing administration, multi-school portfolio views, tenant branding, analytics, integrations, and self-hosted operational UI.
- Ensure tenant branding changes only approved semantic tokens and assets and cannot weaken contrast, security, layout stability, or product attribution rules.
- Add portfolio context, safe cross-school aggregation, saved views, integration health, entitlement UX, and graceful feature-unavailable states.
- Validate CDN/cache keys, locale/domain routing, CSP per deployment, and large-tenant bundle/data behavior.

**Exit criteria**

- Multi-school and white-label isolation tests pass; branding remains accessible; self-hosted build/run documentation and production smoke tests are complete.

### Phase 9 — Intelligence and advanced analytics

**Scope**

- Add governed AI assistance and advanced analytics behind explicit entitlements and feature flags.
- Display source/citation context, confidence/limitations, data-use notice, user confirmation for consequential actions, feedback/reporting, and human-review boundaries.
- Keep prompts and outputs out of general telemetry; apply server-side redaction, retention, and authorization policies.
- Lazy-load heavy visualization/AI dependencies and enforce cost, latency, and failure fallbacks.

**Exit criteria**

- Privacy, safety, quality evaluation, human-review, accessibility, latency, and cost gates pass with safe degradation when providers are unavailable.

### Phase 10 — Hardening, rollout, and continuous improvement

This begins early and becomes the final production gate.

**Scope**

- Run critical-path cross-browser/device, accessibility, localization/RTL, security, contract, visual, load, resilience, and upgrade tests.
- Tune route bundles and rendering using real-user monitoring; remove unused dependencies and accidental client boundaries.
- Add canary rollout, tenant cohorts, feature-flag ownership/expiry, synthetic journeys, alerting, support diagnostics, incident runbooks, and rollback drills.
- Complete dependency provenance/SBOM, vulnerability remediation, disaster-recovery UI behavior, operational documentation, and training.
- Review duplication and boundaries after real reuse is visible; promote only proven primitives and retire superseded patterns.

**Exit criteria**

- SLOs and performance budgets hold under representative load; critical journeys have no unresolved high-risk accessibility/security findings; canary health and rollback drills pass; operational owners accept the release.

## 7. Quality gates for every pull request

- Formatting, linting, strict type-checking, architecture rules, and generated-client integrity pass.
- Changed behavior has appropriately layered tests; bug fixes include a regression test.
- New async UI covers loading, empty, error, retry, stale, and cancellation where relevant.
- New interaction is keyboard accessible, correctly announced, responsive, theme-safe, and localization-ready.
- No secrets, raw PII, tokens, or request bodies enter logs, analytics, snapshots, fixtures, or client-visible configuration.
- Bundle and route budgets do not regress without a reviewed exception, owner, and expiry.
- API contract compatibility passes; errors preserve stable codes and request IDs.
- Security-sensitive, finance, results, export, permission, and tenant/school-context changes receive designated review.

## 8. Initial performance budgets

Validate these during Phase 0 and tighten them using production evidence:

- Core Web Vitals at the 75th percentile: LCP at or below 2.5 s, INP at or below 200 ms, CLS at or below 0.1 on supported client conditions.
- Dashboard useful content at or below 2 s at p75, matching the system performance objective.
- Route-level JavaScript budgets by class: keep the authenticated shell and common CRUD routes lean; charts, editors, and report builders must load on demand.
- No unbounded list response or DOM render. Use server pagination and measured virtualization for large interactive lists.
- Images use responsive sizing and optimized formats; fonts are subsetted/self-hosted where licensing permits and do not block useful content.
- CI records route bundle sizes and Lighthouse-style lab results; production RUM is the final performance signal.

## 9. Definition of ready for a frontend slice

- Validated user and role journey, business owner, terminology, and responsive UX design.
- States, transitions, field disclosure, permissions, school/tenant scope, and audit expectations are documented.
- Compatible OpenAPI contract and representative synthetic fixtures exist.
- Accessibility behavior, localization, performance risk, telemetry, security/privacy, and failure/degradation states are specified.
- Acceptance tests, feature-flag rollout, support ownership, and rollback approach are agreed.

## 10. Definition of done for a frontend slice

- Production code follows feature boundaries and has no unjustified duplication or speculative shared abstraction.
- All UI and network states, responsive layouts, supported themes/locales, and permission scenarios are implemented.
- Static, unit, component, contract, accessibility, visual where appropriate, and critical E2E checks pass.
- Performance budgets, security headers, privacy-safe telemetry, error reporting, and operational dashboards are verified.
- Documentation, Storybook examples, runbook, ownership, feature-flag removal date, and rollback path are complete.
- Pilot acceptance is recorded and no unresolved critical findings remain.

## 11. Recommended first implementation increments

1. ADRs and workspace skeleton.
2. Tokens, button/input/form primitives, and Storybook/test harness.
3. Responsive application shell and context selector using mocked contracts.
4. Authentication/session integration and permission-aware navigation.
5. Generated API client and reference academic-year CRUD slice.
6. People/student directory slice with server-driven table/query state.
7. Mobile attendance slice as the first high-interaction workflow.
8. Fee invoice/payment-confirmation slice as the first high-risk transactional workflow.

Each increment should be deployable behind a feature flag and should leave the main branch releasable.
