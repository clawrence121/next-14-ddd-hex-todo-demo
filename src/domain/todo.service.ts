import { TodoEntity } from "@/domain/todo.entity";
import { getServerContext } from "@/infrastructure/serverContext";

export const TodosService = {
  completeTodo: async (todo: TodoEntity, complete: boolean) => {
    const { TodosRepository } = getServerContext();

    todo.completedAt = complete ? new Date() : null;

    return TodosRepository.updateTodo(todo);
  },
};
