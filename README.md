## Getting Started

1. Boot database with Docker Composer

```bash
docker-compose up -d --build
```

2. Run database migrations

```bash
npx tsx migrate.ts
```

3. Run the development server:

```bash
npm run dev
```

4. Run a build preview - with how NextJS works in Dev vs Prod, to get the full speed experience run the next server
```bash
npm run build && npm run start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Architecture

I have built the application following a [hex/clean architecture pattern](https://github.com/Sairyss/domain-driven-hexagon/tree/master), with a couple of modifications for to work with the new React Server component + Server Actions model.

The framework and SSR [Next.js](https://nextjs.org/).

The database is [PostgreSQL](https://www.postgresql.org/).

The ORM/query builder is [Drizzle](https://orm.drizzle.team/docs/overview).

The UI is [Tailwind CSS](https://tailwindcss.com/).

The authentication is [JWT](https://jwt.io/).

### Folder structure

#### /drizzle

This folder contains the database configuration and migrations.

#### /public

This folder contains the static assets.

#### /src/app

This folder contains the application presentation code:
- Handles the presentation logic for the application by serving SSR HTML views and hydrating with client with React
- This is the default file based router within NextJS
- Data is loaded through React Server Components (RSCs) and mutated through Server Actions (SAs)

##### /src/core

This folder contains the core application code:
- Queries for loading data from application and domain services
- Commands for performing actions and mutations via application and domain services
- Port definitions for external dependencies, eg repositories
- Application services for handling business logic on primitive types across multiple domains, usually referred to as a Use Case

##### /src/domain

This folder contains the domain code:
- Entities for modelling domain objects
- Value Objects for modelling domain values
- Domain services for handling business logic on domain objects and values

##### /src/infrastructure

This folder contains the infrastructure code:
- Repositories for handling persistence of domain objects, implemented with a specific technology, in this case Drizzle+Postgres
- Adapters for handling external dependencies, eg HTTP requests
- Adapters for handling external services, eg authentication
- Application bootstrap code for injecting dependencies into the application, see serverContext.ts

##### /src/utils

This folder contains the utilities code.
