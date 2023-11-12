import type { Config } from "drizzle-kit";

export default {
  schema: "./src/infrastructure/drizzle/schema.ts",
  out: "./drizzle/migrations",
  driver: "pg",
} satisfies Config;
