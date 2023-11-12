CREATE TABLE IF NOT EXISTS "users" (
	"id" serial PRIMARY KEY NOT NULL,
	"email" varchar(256) NOT NULL,
	"password_hash" varchar(256) NOT NULL
);
--> statement-breakpoint
ALTER TABLE "todos" ADD COLUMN "user_id" serial NOT NULL;