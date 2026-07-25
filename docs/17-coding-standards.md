# Coding Standards

## General

Use strict typing, explicit domain names, small cohesive units, dependency inversion at external boundaries, and feature-first ownership. Prefer straightforward code over speculative abstraction. Business rules live in domain/application services, not UI components, controllers, migrations, or provider adapters.

## Boundaries

Each module exposes a public application interface and owns its schema writes. Imports across module internals are forbidden by architecture tests. External systems are behind typed ports. Cross-domain changes use commands or outbox events. Shared code is limited to proven primitives such as IDs, money, clocks, pagination, errors, and test utilities.

## Backend

- Validate at the transport boundary and enforce invariants again in domain types.
- Repositories always require tenant context; no unscoped “find by id” methods.
- Transactions are declared at use-case boundaries and kept short.
- Remote calls do not occur while holding database locks.
- Use parameterized queries/ORM APIs and inspect generated queries for critical paths.
- All retryable commands define idempotency behavior.

## Frontend

- Components separate server state, form state, and local UI state.
- Use accessible design-system primitives and semantic HTML before custom behavior.
- Routes own data orchestration; reusable domain components own presentation and interaction.
- Do not duplicate authorization policy in the client; client checks only shape the experience.
- Every async surface implements loading, empty, error, retry, and stale behavior.

## API and events

Contracts use consistent casing and stable error codes. OpenAPI/event schemas are reviewed and compatibility-checked. Never reuse an event name for changed semantics. Logs exclude raw request bodies by default. Correlation and idempotency IDs flow through calls and jobs.

## Data and migrations

Names are consistent, constraints encode invariants, money avoids floating point, and timestamps are timezone-aware. Migrations are backward compatible, bounded, and reversible operationally through forward fixes. Data backfills are separate observable jobs.

## Quality

Formatting is automated. Lint warnings are not casually suppressed; suppressions state why and scope. Public domain contracts and non-obvious invariants are documented. Comments explain intent or constraints, not syntax. Tests use behavior names and avoid coupling to implementation details.

## Review checklist

Review tenant/school scope, permission and field disclosure, state transitions, audit event, idempotency, concurrency, error states, accessibility, localization, query plan, telemetry privacy, migrations, tests, and operational rollback. Security-sensitive changes require designated review.
