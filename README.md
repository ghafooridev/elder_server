- [Nx Doc](https://nx.dev/technologies/node/nest/introduction)

---

### scripts

- convert proto to types :
  npx protoc --ts_proto_out=output_address input_address --ts_proto_opt=nestJs=true

# Nx + Nest.js v21 Cheat Sheet

This is a **forever reference** for working with **Nest.js inside an Nx workspace**.  
It includes setup, generation, running, scripts, and maintenance commands.

---

## 🛠️ Workspace Setup

```bash
# Create a new Nx workspace (empty preset)
npx create-nx-workspace@latest my-workspace --preset=empty
cd my-workspace

# Add Nest plugin
npm install -D @nx/nest

# Generate a Nest.js application
npx nx g @nx/nest:app ./apps/somethings


# Generate a library (shared logic, DTOs, utils, etc.)
npx nx g @nx/nest:lib shared


# Generate a module
npx nx g @nx/nest:module ./apps/product/src/app/products/products.module.ts

# Generate a service
npx nx g @nx/nest:service users --project=api

# Generate a controller
npx nx g @nx/nest:controller users --project=api

# Generate a resolver (for GraphQL)
npx nx g @nx/nest:resolver users --project=api

# Serve a single app
npx nx serve api

# Build an app
npx nx build api

# Test an app
npx nx test api

# Lint an app
npx nx lint api

# Run all apps (e.g., api and auth)
npx nx run-many --target=serve --projects=api,auth

# Build all apps
npx nx run-many --target=build --all

# Test multiple projects
npx nx run-many --target=test --projects=api,auth


# Format codebase
npx nx format:write

# Check affected projects after a change
npx nx affected:apps
npx nx affected:libs

# Run affected build/test/lint
npx nx affected --target=build
npx nx affected --target=test
npx nx affected --target=lint

npx nx graph
```
