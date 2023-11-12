"use client";

import { TodoEntity } from "@/domain/todo.entity";
import { toggleTodo } from "@/app/(auth)/todos/actions";

export function TodoItem({ todo }: { todo: TodoEntity }) {
  return (
    <li key={todo.id} className={"border rounded-sm p-1 space-x-1"}>
      <input
        type={"checkbox"}
        onChange={(e) => toggleTodo(todo.id, e.target.checked)}
        checked={!!todo.completedAt}
      />
      <span>{todo.title}</span>
    </li>
  );
}
