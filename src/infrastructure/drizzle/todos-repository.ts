import { db } from "@/infrastructure/drizzle/db";
import { sql } from "drizzle-orm";
import { TodoEntity } from "@/domain/todo.entity";
import { TodosRepositoryInterface } from "@/core/todos-repository.interface";
import { z } from "zod";

export const TodosRepository: TodosRepositoryInterface = {
  getTodos: async (userId: number) => {
    const res = await db.execute(
      sql<TodoEntity>`SELECT * FROM todos WHERE user_id = ${userId} ORDER BY id ASC`,
    );

    return z.array(TodoEntity).parse(
      res.map((todo) => ({
        ...todo,
        completedAt: todo.completed_at,
      })),
    );
  },
  getTodoById: async (userId: number, id: number) => {
    const res = await db.execute(
      sql<TodoEntity>`SELECT * FROM todos WHERE user_id = ${userId} AND id = ${id} LIMIT 1`,
    );

    if (res.length === 0) {
      throw new Error("Todo not found");
    }

    return TodoEntity.parse({
      ...res[0],
      completedAt: res[0].completed_at,
    });
  },
  createTodo: async (userId: number, title: string) => {
    const res = await db.execute(
      sql<TodoEntity>`INSERT INTO todos (title, user_id) VALUES (${title}, ${userId}) returning *`,
    );

    return TodoEntity.parse({
      ...res[0],
      completedAt: res[0].completed_at,
    });
  },
  updateTodo: async (todo: TodoEntity) => {
    const res = await db.execute(
      sql<TodoEntity>`UPDATE todos SET title = ${todo.title}, completed_at = ${todo.completedAt} WHERE id = ${todo.id} returning *`,
    );

    return TodoEntity.parse({
      ...res[0],
      completedAt: res[0].completed_at,
    });
  },
};
