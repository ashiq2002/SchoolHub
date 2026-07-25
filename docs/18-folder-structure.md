# Folder Structure

## Proposed monorepo

```text
apps/
  web/                    # responsive web application
  api/                    # HTTP composition root
  worker/                 # background job composition root
packages/
  design-system/          # tokens and accessible primitives
  api-client/             # generated/typed API client
  contracts/              # OpenAPI, event, webhook schemas
  config/                 # typed configuration and policy schemas
modules/
  identity/
  institution/
  people/
  student-lifecycle/
  academics/
  workforce/
  finance/
  campus-services/
  communication/
  insight/
  platform/
    domain/               # entities, value objects, policies, events
    application/          # commands, queries, ports, DTOs
    infrastructure/       # persistence and provider adapters
    presentation/         # controllers and module UI features
infra/
  terraform/
  helm/
  observability/
scripts/                  # bounded development/release utilities
tests/
  contract/
  e2e/
  performance/
docs/
  adr/
  modules/
```

The repeated module subfolders are illustrative; exact language conventions are decided by ADR. Modules may combine very small layers while preserving dependency direction.

## Dependency rules

`domain` has no framework or infrastructure dependency. `application` depends on domain and declared ports. `infrastructure` implements ports. `presentation` invokes application use cases. Composition roots wire dependencies. Modules import only another module’s published contract, never its infrastructure or internal tables.

## Frontend feature shape

```text
feature/
  routes/
  components/
  forms/
  queries/
  schemas/
  permissions.ts
  index.ts                 # intentional public exports
```

Reusable generic UI belongs in `design-system`; reusable business UI remains with its owning domain. Promote code to shared packages only after stable reuse is demonstrated.

## Ownership and tooling

Each top-level module has an owner file, README with boundaries, public exports, migration namespace, tests, and runbook links. CI enforces dependency direction, cycles, generated-file integrity, and ownership review. No `utils` dumping ground or cross-module wildcard exports are allowed.
