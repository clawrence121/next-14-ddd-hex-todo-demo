import { getServerContext } from "@/infrastructure/serverContext";
import { TodosService } from "@/domain/todo.service";
import { getAuthContext } from "@/infrastructure/authContext";

export const completeTodoCommand = async (id: number, complete: boolean) => {
  const { userId } = getAuthContext();

  const serverContext = getServerContext();
  const todosRepository = serverContext.TodosRepository;

  const todo = await todosRepository.getTodoById(userId, id);

  return await TodosService.completeTodo(todo, complete);
};
