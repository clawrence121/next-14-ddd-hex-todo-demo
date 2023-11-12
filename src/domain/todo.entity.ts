import { z } from "zod";

export const TodoEntity = z.object({
  id: z.number(),
  title: z.string().min(1).max(256),
  completedAt: z.date().nullable(),
});
export type TodoEntity = z.infer<typeof TodoEntity>;
