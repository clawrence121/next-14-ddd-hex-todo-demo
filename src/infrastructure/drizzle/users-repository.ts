import { db } from "@/infrastructure/drizzle/db";
import { sql } from "drizzle-orm";
import { UserEntity } from "@/domain/user.entity";
import { UsersRepositoryInterface } from "@/core/users-repository.interface";

export const UsersRepository: UsersRepositoryInterface = {
  create: async (email: string, passwordHash: string) => {
    const users = await db.execute(
      sql`INSERT INTO users (email, password_hash) VALUES (${email}, ${passwordHash}) RETURNING *`,
    );

    return UserEntity.parse({
      ...users[0],
      passwordHash: users[0].password_hash,
    });
  },
  getUserById: async (id: number) => {
    const users = await db.execute(
      sql`SELECT * FROM users WHERE id = ${id} LIMIT 1`,
    );

    return users.length
      ? UserEntity.parse({
          ...users[0],
          passwordHash: users[0].password_hash,
        })
      : null;
  },
  findByEmail: async (email: string) => {
    const users = await db.execute(
      sql`SELECT * FROM users WHERE email = ${email} LIMIT 1`,
    );

    return users.length
      ? UserEntity.parse({
          ...users[0],
          passwordHash: users[0].password_hash,
        })
      : null;
  },
};
