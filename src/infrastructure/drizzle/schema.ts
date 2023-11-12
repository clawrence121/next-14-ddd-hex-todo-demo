import { pgTable, serial, timestamp, varchar } from "drizzle-orm/pg-core";

export const todos = pgTable("todos", {
  id: serial("id").primaryKey().notNull(),
  userId: serial("user_id").notNull(),
  title: varchar("title", { length: 256 }).notNull(),
  completedAt: timestamp("completed_at"),
});

export const users = pgTable("users", {
  id: serial("id").primaryKey().notNull(),
  email: varchar("email", { length: 256 }).notNull(),
  passwordHash: varchar("password_hash", { length: 256 }).notNull(),
});
