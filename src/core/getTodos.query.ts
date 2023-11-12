import { getServerContext } from "@/infrastructure/serverContext";
import { cache } from "react";
import { getAuthContext } from "@/infrastructure/authContext";

export const getTodosQuery = cache(async () => {
  const { userId } = getAuthContext();

  const serverContext = getServerContext();
  const todosRepository = serverContext.TodosRepository;

  return await todosRepository.getTodos(userId);
});
