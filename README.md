# The Armani.dev Stack

A Turbo monorepo with the apps and tools that the guy behind Armani.dev really likes (and deploys to Cloudflare).

## Using this example

Run the following command:

```sh
npx degit https://github.com/firzanarmani/armani-stack
```

## What's inside?

This Turborepo includes the following packages and apps:

### Apps and Packages

- `api`: a [Hono](https://hono.dev/) server framework app, that uses Drizzle ORM, provides a nice RPC to the client apps, and deploys to Cloudflare
- `admin`: a [Vite](https://vitejs.dev/) single page app, that uses TanStack Router and TanStack Query
- `@repo/config-eslint`: ESLint configurations used throughout the monorepo
- `@repo/config-typescript`: tsconfig.json's used throughout the monorepo
- `@repo/logger`: isomorphic logger (a small wrapper around console.log)
- `@repo/design-system`: a React UI library (which contains `<CounterButton>` and `<Link>` components), that uses Panda CSS and Ark UI unstyled components
- `@repo/styled-system`: an external decoupled package that contains generated JS runtime code from Panda CSS that is shared between library and app code

Each package and app is 100% [TypeScript](https://www.typescriptlang.org/).

### Utilities

This Turborepo has some additional tools already setup for you:

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [ESLint](https://eslint.org/) for code linting
- [Vitest](https://vitest.dev) test runner for next generation testing
- [Prettier](https://prettier.io) for code formatting
