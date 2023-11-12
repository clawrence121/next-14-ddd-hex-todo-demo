import { getServerContext } from "@/infrastructure/serverContext";
import { revalidatePath } from "next/cache";
import { CreateTodoRequest } from "@/core/createTodo.request";
import { getAuthContext } from "@/infrastructure/authContext";

export const createTodoCommand = async (request: CreateTodoRequest) => {
  const { userId } = getAuthContext();

  const serverContext = getServerContext();
  const todosRepository = serverContext.TodosRepository;

  const todo = await todosRepository.createTodo(userId, request.title);

  revalidatePath("/todos");
  return todo;
};
