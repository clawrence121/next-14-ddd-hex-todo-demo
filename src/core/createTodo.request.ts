import { z } from "zod";

export const CreateTodoRequest = z.object({
  title: z.string().min(1).max(255),
});
export type CreateTodoRequest = z.infer<typeof CreateTodoRequest>;
