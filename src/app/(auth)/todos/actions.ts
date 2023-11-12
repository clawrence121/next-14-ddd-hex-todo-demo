"use server";

import { revalidatePath } from "next/cache";
import { CreateTodoRequest } from "@/core/createTodo.request";
import { createTodoCommand } from "@/core/createTodo.command";
import { logger } from "@/utils/logger";
import { completeTodoCommand } from "@/core/completeTodo.command";

export const createTodo = async (_prevState: unknown, form: FormData) => {
  try {
    const request = CreateTodoRequest.parse(Object.fromEntries(form.entries()));
    await createTodoCommand(request);
  } catch (e: unknown) {
    logger.info("Error creating todo", e);

    return {
      errors: {
        message: "Error creating todo",
      },
    };
  }

  revalidatePath("/todos");
};

export const toggleTodo = async (id: number, complete: boolean) => {
  try {
    await completeTodoCommand(id, complete);
  } catch (e: unknown) {
    logger.info("Error toggling todo", e);

    return {
      errors: {
        message: "Error toggling todo",
      },
    };
  }

  revalidatePath("/todos");
};
