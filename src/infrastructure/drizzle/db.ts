import postgres from "postgres";
import { drizzle } from "drizzle-orm/postgres-js";
import { logger } from "@/utils/logger";

const queryClient = postgres(
  "postgres://postgres:password123@0.0.0.0:5557/next",
);
export const db = drizzle(queryClient, {
  logger: {
    logQuery(query: string, params: unknown[]) {
      logger.info("Executing query", { query, params });
    },
  },
});
