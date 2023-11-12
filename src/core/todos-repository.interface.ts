import { TodoEntity } from "@/domain/todo.entity";

export type TodosRepositoryInterface = {
  getTodos: (userId: number) => Promise<TodoEntity[]>;
  getTodoById: (userId: number, id: number) => Promise<TodoEntity>;
  createTodo: (userId: number, title: string) => Promise<TodoEntity>;
  updateTodo: (todo: TodoEntity) => Promise<TodoEntity>;
};
