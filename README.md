[![Build - Tests](https://github.com/aghosh0605/plotline-billing-system/blob/main/.github/workflows/build-test.yml/badge.svg)](https://github.com/aghosh0605/plotline-billing-system/blob/main/.github/workflows/build-test.yml)

# plotline-billing-system

An online billing system is essential for businesses to manage their invoicing, payments, and financial transactions efficiently. A Node.js server for a billing system that provides seamless functionality and a user-friendly experience.

## Prerequisite

- Node 16
- Yarn

## Nice to have

- [NVM](https://github.com/nvm-sh/nvm)
- [VS Code](https://code.visualstudio.com/)
- [VS Code ESLint extension](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Getting started

- Clone the repository

```
git clone https://github.com/aghosh0605/plotline-billing-system.git
```

- Install dependencies

```
cd plotline-billing-system
yarn
```

- Run local development server

```
yarn run dev
```

- Healthcheck Routes

```
GET /api/v1
GET /api/v1/health
GET /api/v1/health/debug
```

- To use ESLint and to fix lint errors

```
yarn run lint
```

- To build and run tests

```
yarn test
```

## ENV variables

The project uses [dotenv](https://github.com/motdotla/dotenv) to parse environment variables. To add environment variables to your project, simply, create a `.env` file in the root folder of the project. You can then reference [.env.example](.env.example) to know more about all environment variables. For example, to change Node.js mode, simply add `NODE_ENV=production` or `NODE_ENV=development` to your `.env` file to change Node.js mode to production or development accordingly.

Remeber: it's not a good idea to push .env files to your repo!

## Logging

This project uses [Winston](https://github.com/winstonjs/winston) and [Morgan](https://github.com/expressjs/morgan) for logging. Winston is exported as a logger and can be used to log custom messages on demand. Also, it can be extended to push logs to files, external database, or any logging service.

Morgan is used as an http logger middleware for Express and the logs are routed through Winston, so everything is nicely bundled in one log stream.

All of these logs are written to console during development. Feel free to add production-specific loggers as and when needed.

## Project structure

```
plotline-billing-system
├─ .editorconfig
├─ .eslintrc.json
├─ .github
│  └─ workflows
│     └─ build-test.yml
├─ .gitignore
├─ .nvmrc
├─ Dockerfile
├─ README.md
├─ jest.config.ts
├─ yarn.lock
├─ package.json
├─ src
│  ├─ common
│  ├─ controllers
│  ├─ index.ts
│  ├─ app.ts
│  ├─ data-source.ts
│  ├─ middleware
│  ├─ routers
│  ├─ entity
│  ├─ migration
│  ├─ validators
│  └─ services
├─ tests
├─ tsconfig.json
└─ types

```

## General Debug Options for Developers

- If there is jest errors coming up with open handlers use in [package.json](./package.json) within the `test` script.

```
jest --detectOpenHandles
```

- If test cases use database that is a slow process then use ` testTimeout: 30000` in [jest.config.ts](./jest.config.ts)
