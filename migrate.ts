import { drizzle } from "drizzle-orm/postgres-js";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import postgres from "postgres";

const migrationClient = postgres(
  "postgres://postgres:password123@0.0.0.0:5557/next",
  { max: 1 },
);
migrate(drizzle(migrationClient), {
  migrationsFolder: "./drizzle/migrations",
}).then(() => {
  console.log("Success!");
  process.exit(0);
});
