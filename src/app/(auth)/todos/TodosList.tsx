import { getTodosQuery } from "@/core/getTodos.query";
import { TodoItem } from "@/app/(auth)/todos/TodoItem";

export default async function TodosList() {
  const todos = await getTodosQuery();

  return (
    <ul className={"flex flex-col gap-2"}>
      {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))}
    </ul>
  );
}
